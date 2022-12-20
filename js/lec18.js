"use strict";
class Utils {
    static currentDateString() {
        const date = new Date();
        const currentDateString = date.toLocaleDateString("he-IL", {
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            fractionalSecondDigits: 3,
        });
        return currentDateString;
    }
}
class Rectangle {
    red;
    green;
    blue;
    timeStamp;
    constructor(red, green, blue) {
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.timeStamp = Utils.currentDateString();
    }
}
const isSame = (r1, r2) => {
    return r1.red === r2.red && r1.green === r2.green && r1.blue === r2.blue;
};
function rgbbb(red, green, blue) {
    return `rgb(${red},${green},${blue})`;
}
function minnn(value) {
    let r = Math.min(value, 255); //value = 800 => r = 255
    r = Math.max(r, 0); //value = -599 => 0
    return r;
}
let red = document.getElementById('red');
let blue = document.getElementById('blue');
let green = document.getElementById('green');
let btn = document.getElementById('btn');
let btn1 = document.getElementById('btn1');
let box = document.getElementById('box');
let fcolor = document.getElementById('fcolor');
let fcolorr = document.getElementById('fcolorr');
let myh3 = document.getElementById('myh3');
let arr = JSON.parse(localStorage.getItem('zz') ?? "[]");
let arr2 = JSON.parse(localStorage.getItem('zza') ?? "[]");
let arr3 = [];
btn1.addEventListener('click', () => {
    arr3 = [];
    if (red.value == '' && green.value == '' && blue.value == '') {
    }
    else {
        localStorage.setItem('www', JSON.stringify(arr3));
        const redd = Number(red.value);
        const greenn = Number(green.value);
        const bluee = Number(blue.value);
        document.body.style.backgroundColor = rgbbb(redd, greenn, bluee);
        const rect = new Rectangle(redd, greenn, bluee);
        arr3.push(rect);
        localStorage.setItem('www', JSON.stringify(arr3));
        red.value = '';
        green.value = '';
        blue.value = '';
    }
});
function bodybg() {
    let xa = localStorage.getItem('www') ?? '[]';
    let rar = JSON.parse(xa);
    rar.forEach((pp) => {
        const redd = Number(pp.red);
        const greenn = Number(pp.green);
        const bluee = Number(pp.blue);
        document.body.style.backgroundColor = rgbbb(redd, greenn, bluee);
        const rect = new Rectangle(redd, greenn, bluee);
        arr3.push(rect);
        localStorage.setItem('www', JSON.stringify(arr3));
    });
}
bodybg();
btn.addEventListener('click', () => {
    const redd = Number(red.value);
    const greenn = Number(green.value);
    const bluee = Number(blue.value);
    if (red.value == '' && green.value == '' && blue.value == '') {
    }
    else {
        const rect = new Rectangle(redd, greenn, bluee);
        const newdiv = document.createElement('div');
        newdiv.classList.add('box');
        newdiv.style.backgroundColor = rgbbb(redd, greenn, bluee);
        newdiv.innerHTML = `rgb(${minnn(redd)},${minnn(greenn)},${minnn(bluee)})`;
        box.appendChild(newdiv);
        arr.push(rect);
        localStorage.setItem('zz', JSON.stringify(arr));
        const newdiv2 = document.createElement('div');
        newdiv2.classList.add('box2');
        newdiv2.id = rect.timeStamp;
        newdiv2.addEventListener('click', () => {
            let index = arr.findIndex((b) => isSame(b, rect));
            console.log(index);
            newdiv2.remove();
            arr2.push(rect);
            localStorage.setItem('zza', JSON.stringify(arr2));
            const newdivv = document.createElement('div');
            newdivv.classList.add('box');
            newdivv.style.backgroundColor = rgbbb(redd, greenn, bluee);
            newdivv.style.zIndex = '333';
            newdivv.innerHTML = `rgb(${minnn(redd)},${minnn(greenn)},${minnn(bluee)})`;
            fcolorr.appendChild(newdivv);
        });
        red.value = '';
        green.value = '';
        blue.value = '';
        newdiv.appendChild(newdiv2);
    }
});
function sss() {
    // all
    arr.forEach((aaa) => {
        const redd = Number(aaa.red);
        const greenn = Number(aaa.green);
        const bluee = Number(aaa.blue);
        const rect = new Rectangle(redd, greenn, bluee);
        const newdiv = document.createElement('div');
        newdiv.innerHTML = ``;
        newdiv.classList.add('box');
        newdiv.style.backgroundColor = rgbbb(redd, greenn, bluee);
        newdiv.innerHTML = `rgb(${minnn(aaa.red)},${minnn(aaa.green)},${minnn(aaa.blue)}) `;
        box.appendChild(newdiv);
        const newdiv2 = document.createElement('div');
        newdiv2.classList.add('box2');
        newdiv.appendChild(newdiv2);
        arr2.forEach((aa) => {
            if (isSame(rect, aa)) {
                newdiv2.remove();
            }
        });
        newdiv2.addEventListener('click', () => {
            const newdivv = document.createElement('div');
            newdivv.classList.add('box');
            newdivv.style.backgroundColor = rgbbb(redd, greenn, bluee);
            newdivv.style.zIndex = '333';
            newdivv.innerHTML = `rgb(${minnn(redd)},${minnn(greenn)},${minnn(bluee)})`;
            fcolorr.appendChild(newdivv);
            newdiv2.remove();
            arr2 = [...arr2, aaa];
            localStorage.setItem('zza', JSON.stringify(arr2));
        });
    });
    // favorites
    arr2.forEach((aa) => {
        const redd = Number(aa.red);
        const greenn = Number(aa.green);
        const bluee = Number(aa.blue);
        const newdiv = document.createElement('div');
        newdiv.innerHTML = ``;
        newdiv.classList.add('box');
        newdiv.style.backgroundColor = rgbbb(redd, greenn, bluee);
        newdiv.innerHTML = `rgb(${minnn(aa.red)},${minnn(aa.green)},${minnn(aa.blue)}) `;
        fcolorr.appendChild(newdiv);
    });
}
sss();
