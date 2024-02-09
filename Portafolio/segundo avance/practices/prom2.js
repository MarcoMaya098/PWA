function sumaruno(num) {
    var prom = new Promise(function (resolve, reject) {
        if (num >= 7) {
            reject('numero muy grande');
        }
        setTimeout(function () {
            resolve(num + 1);
        }, 800);
    })
    return prom;
}


// console.log(sumaruno(5));
// sumaruno(5).then(function (nuevovalor) {
//     console.log(nuevovalor);
// })


// sumaruno(5).then(nuevovalor => {
//     sumaruno(nuevovalor).then(nuevovalor2 => {
//         console.log(nuevovalor2);
//     })
// })

// sumaruno(5).then(nuevovalor => {
//     return sumaruno(nuevovalor);
// }).then(nuevovalor2 => {
//     return sumaruno(nuevovalor2);
// }).then(nuevovalor3 => {
//     console.log(nuevovalor3);
// })

// sumaruno(5).then(sumaruno)
//     .then(nuevovalor => {
//         console.log(nuevovalor);
//         return sumaruno(nuevovalor);
//     })
//     .then(nuevovalor2 => {
//         console.log(nuevovalor2);
//         // return sumaruno(nuevovalor2);
//     })



    sumaruno(5).then(sumaruno()).then(sumaruno).then(nuevovalor => { console.log(nuevovalor); })
    .catch( e => { e.console.log('muy rande') })
