var PREFIX = 'emot_';
window.onload = function () {
	var list = document.getElementById('list');
	function reload() {
		var keys = kango.storage.getKeys()
		list.innerHTML = '';
		for (var i in keys) {
			if (keys[i].indexOf(PREFIX) === 0) {
				(function (key) {
					var label = keys[i].replace(PREFIX, '') + ' - ' + kango.storage.getItem(keys[i])
					var button = document.createElement('button');
					var div = document.createElement('div');
					button.addEventListener('click', function () {
						if (confirm('Ale na pewno?')) {
							list.removeChild(div);
							kango.storage.removeItem(key);
						}
					});
					button.innerHTML = 'Usuń';
					div.innerHTML = label;
					div.appendChild(button);
					list.appendChild(div);
				})(keys[i]);
				
			}
		}
	}
	reload();

	var shortcut = document.getElementById('shortcut');
	var url = document.getElementById('url');
	document.getElementById('add-new').addEventListener('click', function () {
		var imgCode = '<img src="' + url.value + '">';
		kango.storage.setItem(PREFIX + shortcut.value, imgCode);
		location.reload();
	});
};
