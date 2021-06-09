window.addEventListener('load', () => {
    console.log("loadeasdkjhasdjkhgd!");

    const storyBtn = document.getElementById("generate");
    const lessBtn1 = document.getElementById("less1");
    const lessBtn2 = document.getElementById("less2");
    const lessBtn3 = document.getElementById("less3");
    const moreBtn = document.getElementById("more");
    const downloadBtn = document.getElementById("download");

    let rowCounter = 0;
    
    function random(type, input, num) {
        const arr = input.split(',');
        let result = [];
        for (let i = 0; i < num; i++) {
            let elem = Math.round(Math.random()*(arr.length-1));
            result.push(arr[elem]);
            arr.splice(elem, 1);
        }
        let contentTitle;
        if (type === 'people' || type === 'places' || type === 'problems') {
            let prevRow = document.getElementById(`${type}Input`);
            contentTitle = prevRow.parentElement.innerText.split('\n')[0];
        } else {
            contentTitle = type;
        }
        let newRow = document.createElement('li');
        newRow.innerText = `${contentTitle}: ${result}`
        let printable = document.getElementById("appResults");
        return printable.appendChild(newRow);
        // return document.getElementById(type).innerText = `${result}`;
    }
    
    const peopleInput = document.getElementById("peopleInput");
    const peopleNum = document.getElementById("peopleNum");
    const placesInput = document.getElementById("placesInput");
    const placesNum = document.getElementById("placesNum");
    const problemsInput = document.getElementById("problemsInput");
    const problemsNum = document.getElementById("problemsNum");
    const newInputTitle = document.getElementById("newVarTitle");
    const newInput = document.getElementById("newVarInput");
    const newInputNum = document.getElementById("newVarNum");

    const variables = [
        {
            type: 'people',
            input: peopleInput,
            num: peopleNum
        },
        {
            type: 'places',
            input: placesInput,
            num: placesNum
        },
        {
            type: 'problems',
            input: problemsInput,
            num: problemsNum
        },
        {
            type: newInputTitle,
            input: newInput,    
            num: newInputNum
        }];
    
    const inputs = [variables[0].input, variables[1].input, variables[2].input];

    function showAlert() {
        let url = window.location.href;
        let lang = url.substr(url.length-3, 3);
        console.log("alerttt", inputs)
        switch (lang) {
            case 'gal':
                return alert('Falta información para crear a historia!');
                break;
            case 'eus':
                return alert('Istorioa sortzeko informazioa falta da!');
                break;
            case 'cat':
                return alert('Falta informació per crear la història!');
                break; 
            case 'cas':
                return alert('Falta información para crear la historia!');
                break; 
        }
    }
    function generaTrama () {
        if (inputs[0].value || inputs[1].value || inputs[2].value) {
            document.getElementById("app").classList.remove("hide");
            variables.forEach(variable => {
                console.log(variable.input.value)
                random(variable.type, variable.input, variable.num)
            })
            // random('people', peopleInput, peopleNum);
            // random('places', placesInput, placesNum);
            // random('problems', problemsInput, problemsNum);
            // (newInput) ? random(newInputTitle, newInput, newInputNum) : '';
            const d = new Date();
            const curr_date = d.getDate();
            const curr_month = d.getMonth() + 1; 
            const curr_year = d.getFullYear();
            document.getElementById("date").innerHTML = curr_date + "-" + curr_month + "-" + curr_year;
        } else {
            showAlert();
        }
    };
    
    storyBtn.addEventListener('click', generaTrama);
    
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
        let newRow = document.createElement('div');
        newRow.setAttribute('id', `new${rowCounter}`);
        let url = window.location.href;
        let lang = url.substr(url.length-3, 3);
        switch (lang) {
            case 'gal':
                newRow.innerHTML = `
                    <img src="./img/mes.png" alt="" id="more">
                    <img src="./img/categoria.png" alt="">
                    <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Título de nova categoría" class="titleInput">
                    <img src="./img/llapis2.png" alt="">
                    <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
                    <img src="/img/logoqv2.png" alt="">
                    <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
                    <br`;
                break;
            case 'eus':
                newRow.innerHTML = `
                    <img src="./img/mes.png" alt="" id="more">
                    <img src="./img/categoria.png" alt="">
                    <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Kategoriako izenburu berria" class="titleInput">
                    <img src="./img/llapis2.png" alt="">
                    <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
                    <img src="/img/logoqv2.png" alt="">
                    <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
                    <br>`;
                break;
            case 'cat':
                newRow.innerHTML = `
                    <img src="./img/mes.png" alt="" id="more">
                    <img src="./img/categoria.png" alt="">
                    <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Títol nova categoria" class="titleInput">
                    <img src="./img/llapis2.png" alt="">
                    <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
                    <img src="/img/logoqv2.png" alt="">
                    <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
                    <br>`;
                break; 
            case 'cas':
                newRow.innerHTML = `
                    <img src="./img/mes.png" alt="" id="more">
                    <img src="./img/categoria.png" alt="">
                    <input type="text" id="new${rowCounter}Title" name="new${rowCounter}Title" placeholder="Título nueva categoría" class="titleInput">
                    <img src="./img/llapis2.png" alt="">
                    <input type="text" id="new${rowCounter}Input" name="new${rowCounter}Input" class="textInput">
                    <img src="/img/logoqv2.png" alt="">
                    <input type="text" id="new${rowCounter}Num" name="new${rowCounter}Num" class="numInput">
                    <br>`;
                break; 
        }
        document.getElementById("form").appendChild(newRow);
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
});

