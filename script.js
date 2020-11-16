
let gs = selector => document.querySelector(selector);


let edit = gs('.btn_edit');
let style = gs('.btn_style');
let add = gs('.btn_add');
let save = gs('.btn_save');

let countStyle = 0;
let OnOrOFF = 0;


edit.onclick = function () {
    document.querySelector('.block_edit').style.display = 'block';
    document.querySelector('.block_style').style.display = 'none';
    gs('.editContent').value = gs('.block_haed_show').innerHTML;
    countStyle = 0;
}


save.onclick = function () {
    let element = gs('.trush');
    gs('.block_haed_show').innerHTML = gs('.editContent').value;
    document.querySelector('.block_edit').style.display = 'none';
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}


style.onclick = function () {
    if (countStyle == 0) {
        document.querySelector('.block_edit').style.display = 'none';
        document.querySelector('.block_style').style.display = 'block';
        gs('.flex').style.display = 'flex';
        gs('.flex').style.flexWrap = 'wrap';
        countStyle++;
    } else {
        document.querySelector('.block_style').style.display = 'none';
        countStyle = 0;
    }
}


let formFontSize = document.forms['formFontSize'];
for (let i = 0; i < formFontSize.length; i++) {
    formFontSize.elements[i].addEventListener('click', function () {
        gs('.block_haed_show').style.fontSize = this.value;
    });
}


let formFontFamily = document.forms['formFontFamily'];
formFontFamily.FontFamily.onchange = function () {
    gs('.block_haed_show').style.fontFamily = this.value;
};

let colorsDiv = document.querySelector('#colors');
let back = document.querySelector('#back');
let TextColor = document.querySelector('#TextColor');
let action = '';
colorsDiv.addEventListener('click',(event)=>{
 if(action==='back'){
    gs('.block_haed_show').style.backgroundColor = event.target.id;     
 }
 else if(action ==='TextColor'){
    gs('.block_haed_show').style.color = event.target.id;
 } 
 colorsDiv.style.display = 'none';
})
back.onclick = function changeBack(){
    action = 'back';
    colorsDiv.style.display = 'flex';

}
TextColor.onclick = function TextColorChange (){
    action = 'TextColor';
    colorsDiv.style.display = 'flex';
}

let checkboxBoldText = document.getElementById('checkboxBoldText');
checkboxBoldText.onclick = function () {
    if (checkboxBoldText.checked) {
        gs('.block_haed_show').style.fontWeight = 'bold';
    } else {
        gs('.block_haed_show').style.fontWeight = 'normal';
    }
}


let checkBoxCursiveText = document.getElementById('checkBoxCursiveText');
checkBoxCursiveText.onclick = function () {
    if (checkBoxCursiveText.checked) {
        gs('.block_haed_show').style.fontStyle = 'italic';
    } else {
        gs('.block_haed_show').style.fontStyle = '';

    }
}

add.onclick = function () {
    gs('.block_haed_show').style.display = 'none';
    gs('.btn_edit_and_style').style.display = 'none';
    gs('.block_edit_and_style').style.display = 'none';
    gs('.table').style.display = 'block';
}

let tableForm = document.getElementById('tableForm');
tableForm.onclick = function () {
    if (tableForm.checked) {
        gs('.tableFormDisplay').style.display = 'block';
        gs('.listFormDisplay').style.display = 'none';

    }
}

let listForm = document.getElementById('listForm');
listForm.onclick = function () {
    if (listForm.checked) {
        gs('.listFormDisplay').style.display = 'block';
        gs('.tableFormDisplay').style.display = 'none';

    }
}


let createTable = gs('#createTable');

function tableCreate() {

    let TR = gs('#TR').value;
    let TD = gs('#TD').value;

    let body = document.querySelector('.trush');

    let tbl = document.createElement("table");
    let tblBody = document.createElement("tbody");

    let typeOfborderForms = document.forms['typeOfborderForms'];
    let colorOfBorderForms = document.forms['colorOfBorderForms'];

    if (gs('#WhidthOfBorder').value != '' || typeOfborderForms.typeOfborder.onchange || colorOfBorderForms.colorOfBorder.onchange) {
        tbl.style.border = `${gs('#WhidthOfBorder').value}px ${typeOfborderForms.typeOfborder.value} ${colorOfBorderForms.colorOfBorder.value}`;
    } else {
        tbl.style.border = `2px ${ typeOfborderForms.typeOfborder.value} ${colorOfBorderForms.colorOfBorder.value}`;
    }

    for (let j = 0; j < TR; j++) {
     
        let row = document.createElement("tr");

        for (let i = 0; i < TD; i++) {
 
            let cell = document.createElement("td");
            let cellText = document.createTextNode(j);
            if (gs('#WidthTD').value != '') {
                cell.style.width = gs('#WidthTD').value + 'px';
            }
            if (gs('#HeightTD').value != '') {
                cell.style.height = gs('#HeightTD').value + 'px';
            }
            cell.appendChild(cellText);
            row.appendChild(cell);

        }

        tblBody.appendChild(row);

    }
 
    tbl.appendChild(tblBody);
  
    body.appendChild(tbl);
}



createTable.onclick = function () {

   
    tableCreate();
    createList();

    
    gs('.editContent').value += gs('.trush').innerHTML;
    gs('.block_haed_show').style.display = 'block';
    gs('.btn_edit_and_style').style.display = 'flex';
    gs('.block_edit_and_style').style.display = 'block';
    gs('.table').style.display = 'none';
    gs('#TR').value = '';
    gs('#TD').value = '';
    gs('#WidthTD').value = '';
    gs('#HeightTD').value = '';
    gs('#WhidthOfBorder').value = '';

}

function createList() {

 
    let listFormf = document.forms['listForm'];
    
    if (gs('#countLi').value != '') {
        let countLi = gs('#countLi');
        
        let body = document.querySelector('.trush');
        
     
        let ul = document.createElement('ul');
        ul.className = 'ListName';

        
        for (let i = 0; i < countLi.value; i++) {
            let li = document.createElement('li');
            li.style.listStyleType = gs('.mmmm').options[gs('.mmmm').selectedIndex].value;
            li.textContent = `Lol ${i+1}`;
            ul.appendChild(li);
        }
        
        body.appendChild(ul);
    }
    gggg();
}

function gggg() {
    let listFormf = document.forms['listForm'];
    if (listFormf.list.onchange == true) {
        alert('lol');
    }
}

let createListbtn = gs('#createListbtn');
createListbtn.onclick = function () {

    createList();

    gs('.editContent').value += gs('.trush').innerHTML;
    gs('.block_haed_show').style.display = 'block';
    gs('.btn_edit_and_style').style.display = 'flex';
    gs('.block_edit_and_style').style.display = 'block';
    gs('.table').style.display = 'none';
    gs('#countLi').value = '';

}