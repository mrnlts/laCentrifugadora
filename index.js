const storyBtn = document.getElementById("generate");
const lessBtn1 = document.getElementById("less1");
const lessBtn2 = document.getElementById("less2");
const lessBtn3 = document.getElementById("less3");
const moreBtn = document.getElementById("more");
const downloadBtn = document.getElementById("download");
let rowCounter = 0;

function random(type, input) {
    const arr = input.split(',');
    let x;
    let y;

    switch (type) {
        case 'people':
            x = Math.round(Math.random()*5);
            y = Math.round(Math.random()*5);
            if (x === y) {
                x = Math.round(Math.random()*5);
            }
            document.getElementById("people").innerText = `${arr[x]}, ${arr[y]}`;
            break;
        default:
            x = Math.round(Math.random()*5);
            document.getElementById(type).innerText = `${arr[x]}`;
            break;
    }
}

function generaTrama () {
    if (!document.getElementById("peopleInput").value || !document.getElementById("placesInput").value || !document.getElementById("problemsInput").value) {
        alert('Et falten camps per omplir!');
    } else {
    document.getElementById("app").classList.remove("hide");
    random('people', document.getElementById("peopleInput").value);
    random('place', document.getElementById("placesInput").value);
    random('problem', document.getElementById("problemsInput").value);
    }
}

storyBtn.addEventListener('click', generaTrama );

lessBtn1.addEventListener('click', function deleteField(){
    console.log(1);
    document.getElementById("row1").remove();
    return "finished!"
});

lessBtn2.addEventListener('click', function deleteField(){
    console.log(2);
    document.getElementById("row2").remove();
    return "finished!"
});

lessBtn3.addEventListener('click', function deleteField(){
    console.log(3);
    document.getElementById("row3").remove();
    return "finished!"
});

moreBtn.addEventListener('click', function deleteField(){
    console.log("more");
    let node = document.getElementsByTagName("form");
    const newRow = `<div id="new${rowCounter}"><img src="./img/mes.png" alt="" id="more"><img src="./img/categoria.png" alt=""><label for="newVar"></label><input type="text" id="newVarInput"><img src="./img/llapis2.png" alt=""><input type="text" id="newVarInput"><br></div>`;
    node.appendChild(newRow);
    rowCounter++;
    return "finished!"
});

downloadBtn.addEventListener('click', function capture(){
    console.log('download');
    printJS({    
        printable: "app",
        type: "html",
        css: "./styles.css"
    })
});