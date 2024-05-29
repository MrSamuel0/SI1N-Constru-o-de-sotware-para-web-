function calculaidade() {
    var a = document.getElementById("num").value;
    var b = document.getElementById("nam").value;
    if (a.length == 4 && b.length == 2) {
        var dat = new Date();
        dat = dat.getFullYear();
        var ida = (dat - a);
        alert(ida);

    else {
        alert('O valor digitado é inválido.');
    }
}