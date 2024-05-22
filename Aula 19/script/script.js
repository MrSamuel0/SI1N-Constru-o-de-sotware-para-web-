console.log('hello world');

for (i = 0;i < 100; i++) {
    document.writeln(i);
}

function jsprint() {
    document.getElementById('text').innerHTML = i;
    var a = window.prompt("Digite algo:")
    window.alert(a)
}

function login() {
    var login = "";
    var senha = "";
    login = document.getElementById('texto').value;
    senha = document.getElementById('textt').value;
    if (login == "administrador" && senha == "senha") {
        window.alert("Bem vindo Adm");
    }
    else {
        window.alert("imposter!");
    }
}

