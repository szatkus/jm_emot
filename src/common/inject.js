// ==UserScript==
// @name Icons
// @include http://joemonster.org/phorum/read.php*
// ==/UserScript==
var PREFIX = 'emot_';
window.addEventListener('load', function () {
	document.getElementsByName('prevF')[0].addEventListener('submit', function () {
		var body = document.getElementById('postform');
		var keys = kango.storage.getKeys()
		for (var i in keys) {
			if (keys[i].indexOf(PREFIX) === 0) {
				var shortcut = new RegExp(keys[i].replace(PREFIX, ''), 'g');
				body.value = body.value.replace(shortcut, kango.storage.getItem(keys[i]));
			}
		}
	});
});
