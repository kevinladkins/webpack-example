


var pageHeader = document.createElement('h1');
var commentsHeader = document.createElement('h3');
var albumsHeader = document.createElement('h3');


pageHeader.innerHTML = 'Webpack Test';
commentsHeader.innerHTML = 'Leave a Comment:';
albumsHeader.innerHTML = 'Want to see a list of Taylor Swift albums?';

module.exports = { pageHeader, commentsHeader, albumsHeader}
