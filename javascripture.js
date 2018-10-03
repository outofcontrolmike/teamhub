// JavaScript source code

var but1 = document.getElementById('Order');
var but2 = document.getElementById('home');

function pizza() {
    document.getElementById('here').innerHTML = "";
    var z = document.getElementById('select');
    var x = z.options[z.selectedIndex].value;
    var pizza = ["Peperoni", "Cheese", "Three Meat", "Supreme", "Today's Special"]
    var cost = price(x);
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

function price(x) {
    var subTot = 7.99 * x;
    var tax = subTot * 0.076;
    var total = subTot + tax;
    var cost = ("Sub total: $" + subTot.toFixed(2) + "<br />");
    cost += ("Tax: $" + tax.toFixed(2) + "<br />");
    cost += ("Total: $" + total.toFixed(2) + "<br />");

    document.getElementById('order-list').innerHTML += cost;
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
    price(x);
}

function reset() {
    document.getElementById('here').innerHTML = "";
    document.getElementById('order-list').innerHTML = "";
    document.getElementById('select').selectedIndex = 0;
    document.getElementById('name').value = "";
    document.getElementById('number').value = "";
}

function swap() {
    var main = document.getElementById('homePage');
    var sub = document.getElementById('reciept');

    var name = document.getElementById('name');
    var numPhone = document.getElementById('number');

    if (main.style.display == "none") {
        main.style.display = 'block';
        sub.style.display = 'none';
        reset();
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

    var x = document.createElement('audio');
    x.src = 'pizza.mp3';
    x.setAttribute('loop', 'true');
    x.play();
    document.body.appendChild(x);
}

window.addEventListener("load", start);
