var form = document.createElement('form');
var textArea = document.createElement('textarea');
var submit = document.createElement('button');
var comments = document.createElement('ul');

textArea.type = 'textarea';
textArea.rows = '4';
textArea.cols = '50';

submit.type = 'submit';
submit.innerHTML = 'Submit';

function addLi() {
  return document.createElement('li');
}

function listComments(event) {
  event.preventDefault();
  var entry = textArea.value;
  var comment = addLi();
  comment.innerHTML = entry
  comments.appendChild(comment);
  textArea.value = '';
}
