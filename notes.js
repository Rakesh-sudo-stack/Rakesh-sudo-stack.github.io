document.querySelector('.addnote').addEventListener('click', function(e){
    let title = document.querySelector(".title").value;
    let text = document.querySelector(".text").value;
    let addnote = document.querySelector('.row');
    let note = document.createElement('div');
    note.className = 'col';
    addnote.appendChild(note);
    let notetitle = document.createElement('h3');
    notetitle.className = title;
    notetitle.className += ' notetitle';
    notetitle.innerHTML = title;
    note.appendChild(notetitle);
    let notetext = document.createElement('p');
    notetext.className = title;
    notetext.className += ' notetext';
    notetext.innerHTML = text;
    note.appendChild(notetext);
});

let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let lightblue = document.querySelector('.lightblue');
let violet = document.querySelector('.violet');
let yellow = document.querySelector('.yellow');
let green = document.querySelector('.green');
red.addEventListener('click', function(){
    document.querySelector(".title").style.color = "red";
    document.querySelector(".col").style.color = "red";
});
blue.addEventListener('click', function(){
    document.querySelector(".title").style.color = "blue";
    document.querySelector(".col").style.color = "blue";
});
lightblue.addEventListener('click', function(){
    document.querySelector(".title").style.color = "lightblue";
    document.querySelector(".col").style.color = "rgb(27, 180, 231)";
});
violet.addEventListener('click', function(){
    document.querySelector(".title").style.color = "violet";
    document.querySelector(".col").style.color = "violet";
});
yellow.addEventListener('click', function(){
    document.querySelector(".title").style.color = "yellow";
    document.querySelector(".col").style.color = "yellow";
});
green.addEventListener('click', function(){
    document.querySelector(".title").style.color = "green";
    document.querySelector(".col").style.color = "green";
});