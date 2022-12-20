let contry = document.getElementById('contry') as HTMLInputElement
let serceh = document.getElementById('serceh') as HTMLInputElement
let mybtn = document.getElementById('mybtn') as HTMLButtonElement
let mydiv = document.getElementById('mydiv') as HTMLDivElement
let myarr: string[] = []
mybtn.addEventListener('click', () => {
    if (contry.value == '') { }
    else {
        myarr.push(contry.value)
        localStorage.setItem('mycontry', JSON.stringify(myarr))
        contry.value = ''
    }
})

function zz() {
    let xa = localStorage.getItem('mycontry') ?? '[]'
    let rar = JSON.parse(xa)
    rar.forEach((zz: any) => {
        myarr.push(zz)
        console.log(myarr);
    })
}
zz()
const namesUL = document.querySelector(".name-list") as HTMLUListElement;
serceh.addEventListener("input", () => {
    //clear all the names: from name-list
    // document.querySelectorAll(".name-item").forEach((e) => e.remove());
    namesUL.innerHTML = ``
    //clear all
    //show relevant names

    //1)the value of the input
    const inputValue = serceh.value.toLowerCase();
    if (inputValue.length === 0) {
        return;
    }
    //2)filter the array according to the input value
    const filteredNames = myarr.filter((name) =>
        name.toLowerCase().startsWith(inputValue)
    );

    //string[] => li[]
    const liArray = filteredNames.map((n) => {
        const li = document.createElement("li");
        li.innerText = n;
        li.addEventListener('click', () => {
            mydiv.innerHTML = ``
            li.style.backgroundColor = 'red'
            mydiv.style.backgroundColor = 'red'
            mydiv.innerHTML += `<div>${n}</div>`
        })
        li.addEventListener('dblclick', () => {
            // mydiv.innerHTML = ``
            let xx = ['green', 'blue']
            xx.sort((a, b) => Math.random() > 0.5 ? 1 : -1)
            xx.forEach((pp) => {
                li.style.backgroundColor = pp
                mydiv.style.backgroundColor = pp
            })
        })
        return li;
    });

    liArray.forEach((li) => namesUL.appendChild(li));
});
mybtn.addEventListener('dblclick', () => {
    mydiv.innerHTML = ``
    myarr.sort()
    myarr.forEach((pp) => {
        mydiv.innerHTML += `<div>${pp}</div>`
    })
})

import { animalArray } from "./runners.js";

console.log(animalArray);

