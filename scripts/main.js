/**
 * 变量 String, Number, Boolean, Array, Object
 * + - * / = === !== !
 * if {} else {}
 * function() {}
 * event
 */

// let myHeading = document.querySelector("h1");
// myHeading.textContent = 'Hello world!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.jpeg') {
        myImage.setAttribute('src', 'images/firefox2-icon.jpeg');
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    // 弹出对话框，输入数据
    let myName = prompt('请输入你的名字。');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function() {
    setUserName();
}