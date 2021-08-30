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

