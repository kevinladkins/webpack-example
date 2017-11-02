var root = document.querySelector('#root');

//Build Comments section

var commentsDiv = document.createElement('div');
root.appendChild(pageHeader);
root.appendChild(commentsDiv);
commentsDiv.appendChild(commentsHeader);
commentsDiv.appendChild(form);
commentsDiv.appendChild(comments);
form.appendChild(textArea);
form.appendChild(submit);

submit.addEventListener('click', listComments)

commentsDiv.id="commentsDiv";
comments.id = 'comments';

//Build albums section

var albumsDiv = document.createElement('div');
var button = document.createElement('button');
root.appendChild(albumsDiv);
albumsDiv.appendChild(albumsHeader);
albumsDiv.appendChild(button);

button.addEventListener('click', getAlbums);

button.innerHTML = 'Sure!';
albumsDiv.id = "albumsDiv";
