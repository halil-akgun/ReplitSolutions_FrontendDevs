const sayi1El = document.querySelector("#sayi1");
const sayi2El = document.querySelector("#sayi2");
const sonucEl = document.querySelector("#sonuc");


const hesapla = () => {
    let sonuc = +sayi1El.value + +sayi2El.value;
    sonucEl.textContent = sonuc;
}


const sonucSil = () => {
    sonucEl.textContent = "";
}


sayi1El.addEventListener("input", sonucSil);
sayi2El.addEventListener("input", sonucSil);


sayi1El.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        hesapla();
    }
});

sayi2El.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        hesapla();
    }
});