"use strict";
let mybtnn = document.getElementById('mybtnn');
let mysection = document.getElementById('mysection');
class www {
    str;
    tt;
    constructor(str, tt) {
        this.str = str;
        this.tt = tt;
    }
}
let mytex = JSON.parse(localStorage.getItem('mynotes') ?? "[]");
let myindex = JSON.parse(localStorage.getItem('myindex') ?? "[]");
const issame = (r1, r2) => {
    return r1 === r2;
};
mybtnn.addEventListener('click', () => {
    const newdiv = document.createElement('div');
    newdiv.classList.add('newmaseg');
    mysection.appendChild(newdiv);
    const btnnn = document.createElement('button');
    btnnn.innerText = 'save';
    btnnn.classList.add('mybtn1');
    btnnn.classList.add('none');
    newdiv.appendChild(btnnn);
    const btnn = document.createElement('button');
    btnn.innerText = 'save';
    btnn.classList.add('mybtn1');
    newdiv.appendChild(btnn);
    btnn.addEventListener('click', () => {
        let rr = new www(mytextarea.value, false);
        mytex.push(rr);
        btnn.classList.add('none');
        newfimg.classList.remove('none');
        mytextarea.disabled = true;
        localStorage.setItem('mynotes', JSON.stringify(mytex));
    });
    const mytextarea = document.createElement('textarea');
    let zxc = mytextarea.value;
    mytextarea.rows = 6;
    mytextarea.cols = 30;
    mytextarea.disabled = false;
    newdiv.appendChild(mytextarea);
    mytextarea.onchange = () => {
        let rr = new www(mytextarea.value, false);
        mytex.push(rr);
        btnn.classList.add('none');
        newfimg.classList.remove('none');
        mytextarea.disabled = true;
        localStorage.setItem('mynotes', JSON.stringify(mytex));
    };
    const newdivv = document.createElement('div');
    newdivv.classList.add('myicons');
    newdiv.appendChild(newdivv);
    const newfimg = document.createElement('img');
    newfimg.classList.add('myimg');
    newfimg.classList.add('none');
    newfimg.src = './images/edit.png';
    newdivv.appendChild(newfimg);
    newfimg.addEventListener('click', () => {
        btnnn.classList.remove('none');
        mytextarea.disabled = false;
        newfimg.classList.add('none');
        let x = mytextarea.value;
        let index = mytex.findIndex((b) => issame(b.str, x));
        console.log(index);
        mytextarea.onchange = () => {
            newfimg.classList.remove('none');
            mytex[index].str = mytextarea.value;
            mytextarea.disabled = true;
            btnnn.classList.add('none');
            localStorage.setItem('mynotes', JSON.stringify(mytex));
        };
        btnnn.addEventListener('click', () => {
            newfimg.classList.remove('none');
            mytex[index].str = mytextarea.value;
            mytextarea.disabled = true;
            btnnn.classList.add('none');
            localStorage.setItem('mynotes', JSON.stringify(mytex));
        });
    });
    const newsimg = document.createElement('img');
    newsimg.classList.add('myimg');
    newsimg.src = './images/complit.png';
    newdivv.appendChild(newsimg);
    newsimg.addEventListener('click', () => {
        let x = mytextarea.value;
        let index = mytex.findIndex((b) => issame(b.str, x));
        mytex[index].tt = true;
        localStorage.setItem('mynotes', JSON.stringify(mytex));
        if (mytex[index].tt == true) {
            newdiv.style.backgroundColor = 'green';
        }
    });
    const newthimg = document.createElement('img');
    newthimg.classList.add('myimg');
    newthimg.src = './images/button-31222_1280.png';
    newdivv.appendChild(newthimg);
    newthimg.addEventListener('click', () => {
        newdiv.remove();
        let x = mytextarea.value;
        let index = mytex.findIndex((b) => issame(b.str, x));
        mytex.splice(index, 1);
        localStorage.setItem('mynotes', JSON.stringify(mytex));
    });
});
function bnb() {
    mytex.forEach((pp) => {
        const newdiv = document.createElement('div');
        newdiv.classList.add('newmaseg');
        mysection.appendChild(newdiv);
        const btnnn = document.createElement('button');
        btnnn.innerText = 'save';
        btnnn.classList.add('mybtn1');
        btnnn.classList.add('none');
        newdiv.appendChild(btnnn);
        const mytextarea = document.createElement('textarea');
        mytextarea.rows = 6;
        mytextarea.value = pp.str;
        mytextarea.cols = 30;
        mytextarea.disabled = true;
        newdiv.appendChild(mytextarea);
        const newdivv = document.createElement('div');
        newdivv.classList.add('myicons');
        newdiv.appendChild(newdivv);
        const newfimg = document.createElement('img');
        newfimg.classList.add('myimg');
        newfimg.src = './images/edit.png';
        newdivv.appendChild(newfimg);
        newfimg.addEventListener('click', () => {
            mytextarea.disabled = false;
            btnnn.classList.remove('none');
            newfimg.classList.add('none');
            let x = mytextarea.value;
            let index = mytex.findIndex((b) => issame(b.str, x));
            console.log(index);
            mytextarea.onchange = () => {
                newfimg.classList.remove('none');
                mytex[index].str = mytextarea.value;
                mytextarea.disabled = true;
                btnnn.classList.add('none');
                localStorage.setItem('mynotes', JSON.stringify(mytex));
            };
            btnnn.addEventListener('click', () => {
                newfimg.classList.remove('none');
                mytex[index].str = mytextarea.value;
                mytextarea.disabled = true;
                btnnn.classList.add('none');
                localStorage.setItem('mynotes', JSON.stringify(mytex));
            });
        });
        if (pp.tt === true) {
            newdiv.style.backgroundColor = 'green';
        }
        const newsimg = document.createElement('img');
        newsimg.classList.add('myimg');
        newsimg.src = './images/complit.png';
        newdivv.appendChild(newsimg);
        newsimg.addEventListener('click', () => {
            let x = mytextarea.value;
            let index = mytex.findIndex((b) => issame(b.str, x));
            mytex[index].tt = true;
            newdiv.style.backgroundColor = 'green';
            localStorage.setItem('mynotes', JSON.stringify(mytex));
        });
        const newthimg = document.createElement('img');
        newthimg.classList.add('myimg');
        newthimg.src = './images/button-31222_1280.png';
        newdivv.appendChild(newthimg);
        newthimg.addEventListener('click', () => {
            newdiv.remove();
            let x = mytextarea.value;
            let index = mytex.findIndex((b) => issame(b.str, x));
            mytex.splice(index, 1);
            localStorage.setItem('mynotes', JSON.stringify(mytex));
        });
    });
}
bnb();
