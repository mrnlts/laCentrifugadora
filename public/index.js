window.addEventListener('load', () => {
    console.log("loaded!");

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
        return document.getElementById(type).innerText = `${result}`;
    }
    
    function generaTrama () {
        const peopleInput = document.getElementById("peopleInput").value;
        const peopleNum = document.getElementById("peopleNum").value;
        const placesInput = document.getElementById("placesInput").value;
        const placesNum = document.getElementById("placesNum").value;
        const problemsInput = document.getElementById("problemsInput").value;
        const problemsNum = document.getElementById("problemsNum").value;
       
            if (!peopleInput || !placesInput || !problemsInput || !peopleNum || !placesNum || !problemsNum ) {
                let url = window.location.href;
                let lang = url.substr(url.length-3, 3);
                switch (lang) {
                    case 'gal':
                        alert('Falta información para crear a historia!');
                        break;
                    case 'eus':
                        alert('Istorioa sortzeko informazioa falta da!');
                        break;
                    case 'cat':
                        alert('Falta informació per crear la història!');
                        console.log("people: ", peopleInput, "places: ", placesInput, "problems: ", problemsInput);
                        break; 
                    case 'cas':
                        alert('Falta información para crear la historia!');
                        break; 
                } 
            } else {
                document.getElementById("app").classList.remove("hide");
                random('people', peopleInput, peopleNum);
                random('place', placesInput, placesNum);
                random('problem', problemsInput, problemsNum);
                const d = new Date();
                const curr_date = d.getDate();
                const curr_month = d.getMonth() + 1; 
                const curr_year = d.getFullYear();
                document.getElementById("date").innerHTML = curr_date + "-" + curr_month + "-" + curr_year;
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

