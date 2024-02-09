function sumaruno(num, callback) {

    setTimeout(function() {
        callback(num + 1);
        // return num + 1;
    }, 800);
}

// console.log(sumaruno(5));

sumaruno(5, function (valor) {
    // console.log(valor);
    sumaruno(valor, function (nuevovalor) {
        // console.log(nuevovalor);
        sumaruno(nuevovalor, function (nuevovalor2) {
            console.log(nuevovalor2);
        });
    });
})