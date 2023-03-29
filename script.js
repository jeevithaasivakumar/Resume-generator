function addNewWEField(){
    // console.log("Adding new field");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('wefield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    let we0b=document.getElementById("we");
    let weAddButton0b = document.getElementById("weAddButton");

    we0b.insertBefore(newNode,weAddButton0b);
}
function addNewAQField(){
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('eqfield');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');
    let aq0b=document.getElementById("aq");
    let aqAddButton0b = document.getElementById("aqAddButton");

    aq0b.insertBefore(newNode,aqAddButton0b);

}
//generating resume
function generateresume(){
    // console.log("generating resume");

let nameField=document.getElementById('nameField').value;
let nameT1=document.getElementById('nameT1');

nameT1.innerHTML = nameField;
document.getElementById('nameT2').innerHTML = nameField;

document.getElementById('contactT').innerHTML = document.getElementById('contactField').value;

document.getElementById('addressT').innerHTML = document.getElementById('addressField').value;

document.getElementById('lnT').innerHTML = document.getElementById('lnField').value;
document.getElementById('giT').innerHTML = document.getElementById('giField').value;
document.getElementById('inT').innerHTML = document.getElementById('inField').value;

 document.getElementById('objectiveT').innerHTML = document.getElementById('objectiveField').value;

 let wes= document.getElementsByClassName('weField');
 let str='';
 for(let e of wes)
 {
    str  =str +  `<li> ${e.value} </li>`;
 }
 document.getElementById('weT').innerHTML = str;

let aqs=document.getElementsByClassName('eqField');
let str1='';
for(let e of aqs)
{
    str1 +=`<li> ${e.value} </li>`;

}
document.getElementById('aqT').innerHTML = str1;

let file=document.getElementById('imgField').files[0];
console.log(file);
let reader=new FileReader()
reader.readAsDataURL(file);
console.log(reader.result);
reader.onloadend=function () {
    document.getElementById('imgTemplate').src=reader.result;
}


document.getElementById('resume-form').style.display='none';
document.getElementById('resume-template').style.display='block';

}

function printresume()
{
    window.print();
}