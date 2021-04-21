const button = document.getElementById("generaTrama");

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
    random('people', document.getElementById("peopleInput").value);
    random('place', document.getElementById("placesInput").value);
    random('problem', document.getElementById("problemsInput").value);
}

button.addEventListener('click', generaTrama );