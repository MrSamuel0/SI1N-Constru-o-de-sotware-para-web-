function fecharJanela() {
    let a = window.open("", "_self");
    window.close();
}

function login() {
    var login = "";
    var senha = "";
    login = document.getElementById('texto').value;
    senha = document.getElementById('textt').value;
    if (login == "adm@uvv.br" && senha == "adm#123") {
        let a = window.open("paginicial.html");
    }
    else {
        window.alert("imposter!");
    }
}