"use strict";
const names = [
    "Moe",
    "Dave",
    "Joe",
    "Geroge",
    "Josh",
    "Ayal",
    "Avi",
    "Aharon",
    "Nissim",
    "Bob",
    "Bing",
    "bibi",
];
names.sort();
const input = document.getElementById("input");
const namesUL = document.querySelector(".name-list");
//handle letter clicked:
input.addEventListener("input", () => {
    //clear all items in the UL
    //namesUL.innerHTML= ''
    document.querySelectorAll(".name-item").forEach((e) => e.remove());
    const inputValue = input.value.toLowerCase(); //"".length === 0
    //אם הקלט ריק - סיימנו
    if (inputValue.length === 0) {
        return;
    }
    //נגדיר רשימה חדשה עם כל השמות שתואמים לחיפוש:
    //2)filter the array according to the input value
    const filteredNames = names.filter((name) => name.toLowerCase().startsWith(inputValue));
    //LI עבור כל מחרוזת שתואמת לחיפוש - ניצור פריט-ברשימה
    //string[] => li[]
    const liArray = filteredNames.map((n) => {
        const li = document.createElement("li");
        li.classList.add("name-item");
        li.innerText = n;
        return li;
    });
    //נציג את כל פריטי-הרשימה במסמך 
    liArray.forEach((li) => namesUL.appendChild(li));
});
