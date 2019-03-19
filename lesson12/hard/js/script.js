
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    var inputPromise = new Promise(function(resolve, reject){
        let request = new XMLHttpRequest();
        request.open('GET', 'js/current.json');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.addEventListener('readystatechange', function() {
            if (request.readyState === 4){
                if (request.status == 200){
                    console.log('readyState == 4, request.status == 200');
                    resolve(JSON.parse(request.response))
                } else {
                    console.log('readyState == 4, request.status > 200');
                    reject()
                }
            }
        });
        request.send();
    });
    inputPromise
        .then((data) => inputUsd.value = inputRub.value / data.usd)
        .catch(() => inputUsd.value = "Что-то пошло не так!")
});
