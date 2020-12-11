var numberGenerator = Rx.Observable.create((observer) => {
    setInterval(() => {
        var randomNumber = Math.floor(Math.random() * 100);
        observer.next(randomNumber)
    }, 2000)
});

var timeGenerator = Rx.Observable.create((observer) => {
    setInterval(() => {
        var currentTime = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`
        observer.next(currentTime)
    }, 1000)
});

numberGenerator.subscribe((data) => {
    document.getElementById("getRandomNumber").innerText = `Random Number Generated is ${data}`;
})

timeGenerator.subscribe((data) => {
    document.getElementById("currentTime").innerText = data;
})