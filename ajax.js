

function getAlbums() {
    debugger
    var req = new XMLHttpRequest();
    req.addEventListener('load', listAlbums)
    req.open('GET', 'https://rallycoding.herokuapp.com/api/music_albums');
    req.send();
}

function listAlbums() {
     var albumList = JSON.parse(this.responseText);
     var albumsDiv = document.querySelector('#albumsDiv');
     var ul = document.createElement('ul');
     albumsDiv.appendChild(ul);
     var albums = albumList.map(function(album) {
       return '<li> Title: ' + album.title + '<img src="' + album.image + '"/></li>'
     }).join('');
     ul.innerHTML = albums;
}

module.exports = {getAlbums}
