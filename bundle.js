/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var form = __webpack_require__(1);
var headers = __webpack_require__(2);
var ajax = __webpack_require__(3);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {


  var form = document.createElement('form');
  var textArea = document.createElement('textarea');
  var submit = document.createElement('button');
  var comments = document.createElement('ul');

  form.appendChild(textArea);
  form.appendChild(submit);

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

module.exports = {form, textArea, submit, comments, listComments }


/***/ }),
/* 2 */
/***/ (function(module, exports) {




var pageHeader = document.createElement('h1');
var commentsHeader = document.createElement('h3');
var albumsHeader = document.createElement('h3');


pageHeader.innerHTML = 'Webpack Test';
commentsHeader.innerHTML = 'Leave a Comment:';
albumsHeader.innerHTML = 'Want to see a list of Taylor Swift albums?';

module.exports = { pageHeader, commentsHeader, albumsHeader}


/***/ }),
/* 3 */
/***/ (function(module, exports) {



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


/***/ })
/******/ ]);