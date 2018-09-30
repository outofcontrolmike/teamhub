// JavaScript source code

// two containers; one for the first screen that will be displayed; second for when they hit the button at bottom of the page below the form;

// form tag holding inside: input tag with type = text; 2; seperate id names for the user to input name and second one for phone number;

// selection tag with the numbers 1 - 10;

//js goes here. (ill do the complex part)

// button tag with the text "Order" or "Place Order";

// simple math with refrencing sources (I can do this after words);

// in the second container, a div for the name and number then another div for the order (id for each to call below);

// another button with text "Place Another Order?" or something else.

//var name = document.getElementById('name');
//var numPhone = document.getElementById('number');

var but1 = document.getElementById('Order');
var but2 = document.getElementById('home');

function pizza() {
    document.getElementById('here').innerHTML = "";
    var z = document.getElementById('select');
    var x = z.options[z.selectedIndex].value;
    var pizza = ["Peperoni", "Cheese", "Three Meat", "Supreme", "Today's Special"]

    for (var i = 0; i < x; i++) {
        document.getElementById('here').innerHTML += "<br />";
        var slt = document.createElement('select');
        slt.id = i;
        slt.style.margin = '0.5%';
        document.getElementById('here').appendChild(slt);

        var T = 0;
        while (T < 5) {
            var opt = document.createElement('option');
            opt.className = ("opt" + T);
            opt.value = pizza[T];
            opt.innerText = pizza[T];
            document.getElementById(i).appendChild(opt);
            T += 1;
        }
    }
}

function print() {
    document.getElementById('order-list').innerHTML = "";
    var z = document.getElementById('select');
    var x = z.options[z.selectedIndex].value;

    for (var i = 0; i < x; i++) {
        var slct = document.getElementById(i);
        var ent = slct.options[slct.selectedIndex].value;
        document.getElementById('order-list').innerHTML += ("Pizza " + (i + 1) + " is a " + ent + ". <br />");
    }
}

function swap() {
    var main = document.getElementById('homePage');
    var sub = document.getElementById('reciept');

    var name = document.getElementById('name');
    var numPhone = document.getElementById('number');

    if (main.style.display == "none") {
        main.style.display = 'block';
        sub.style.display = 'none';
    } else if (sub.style.display == "none") {

        if (name.value == "" || numPhone.value == "") {

            if (name.value == "") {
                name.value = prompt("What is your name?");
            }

            if (numPhone.value == "") {
                numPhone.value = prompt("What is your phone number?");
            }

            var txt = prompt("Are you ok?");
            console.log(txt);

        } else {
            main.style.display = 'none';
            sub.style.display = 'block';

            var layout = document.getElementById('welcome');
            layout.innerHTML = ("Thank you " + name.value + "!<br />Phone number: " + numPhone.value + ".<br />");
        }
    }
    print();
}

function start() {
    document.getElementById('reciept').style.display = 'none';
}

window.addEventListener("load", start);