const startBtn = document.querySelector('#start');
const title = document.querySelector('#title');
const input = document.querySelector('#input');
const tahminBtn = document.querySelector('#tahmin');
const hakEl = document.querySelector('#hak');
const sonuc = document.querySelector('#sonuc');

let min = 1;
let max = 100;
let sayi = Math.floor(Math.random() * (max - min + 1)) + min;
const toplamHak = 10;
let kalanHak = toplamHak;

input.classList.add('d-none');
input.placeholder = `${min}-${max} arasında bir sayı giriniz.`;
tahminBtn.classList.add('d-none');

const startGame = () => {
    startBtn.classList.add('d-none');
    input.classList.remove('d-none');
    tahminBtn.classList.remove('d-none');
    hakEl.classList.remove('d-none');
    hakEl.textContent = `Hakkınız: ${toplamHak}`;
    sonuc.textContent = '';
    input.focus();
}

const tahminEt = () => {
    const tahmin = Number(input.value);
    input.focus();
    if (tahmin == sayi) {
        input.value = '';
        input.classList.add('d-none');
        tahminBtn.classList.add('d-none');
        hakEl.classList.add('d-none');
        startBtn.classList.remove('d-none');
        sonuc.textContent = 'Tebrikler! Kazandınız.';
    } else if (!(input.value === null || input.value === '')) {
        kalanHak--;
        hakEl.textContent = `Hakkınız: ${kalanHak}`;
        input.value = '';
        if (tahmin < sayi) {
            sonuc.textContent = 'Yanlış tahmin. Daha büyük bir sayı giriniz.';
        } else {
            sonuc.textContent = 'Yanlış tahmin. Daha küçük bir sayı giriniz.';
        }
        if (kalanHak == 0) {
            input.classList.add('d-none');
            tahminBtn.classList.add('d-none');
            hakEl.classList.add('d-none');
            startBtn.classList.remove('d-none');
            sonuc.textContent = 'Kaybettiniz.';
        }
    }
}

input.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        tahminEt();
    }
})