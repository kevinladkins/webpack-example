var form = require('./form.js');
var headers = require('./headers.js');
var ajax = require('./ajax.js');

var root = document.querySelector('#root');

//Build Comments section

var commentsDiv = document.createElement('div');
root.appendChild(headers.pageHeader);
root.appendChild(commentsDiv);
commentsDiv.appendChild(headers.commentsHeader);
commentsDiv.appendChild(form.form);
commentsDiv.appendChild(form.comments);

form.submit.addEventListener('click', form.listComments)

commentsDiv.id="commentsDiv";
form.comments.id = 'comments';

//Build albums section

var albumsDiv = document.createElement('div');
var button = document.createElement('button');
root.appendChild(albumsDiv);
albumsDiv.appendChild(headers.albumsHeader);
albumsDiv.appendChild(button);

debugger

button.addEventListener('click', ajax.getAlbums);

button.innerHTML = 'Sure!';
albumsDiv.id = "albumsDiv";
