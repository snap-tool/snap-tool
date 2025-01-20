var referrer = window.btoa(unescape(window.location.href));
var current_body = {};

function fetch_ONWQluS(callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.locked3.com/cl.php?id=e0f6b1bc06cb47c10fd7b52a34888cfc', true);
    xhr.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}

function do_lock() {
   fetch_ONWQluS(lock_ONWQluS);
   setup_ONWQluS();
}

function setup_ONWQluS() {
    var body = document.getElementsByTagName('body')[0];
    if(document.getElementsByTagName('body')[0] === undefined) {
        setTimeout(setup_ONWQluS, 100);
        return;
    }

    current_body.overflow = body.style.overflow;
    current_body.display = body.style.display;

    body.style.display = 'none';

	var listenMethod = window.addEventListener ? "addEventListener" : "attachEvent";
	var setupEvent = window[listenMethod];
	var messageEvent = listenMethod == "attachEvent" ? "onmessage" : "message";

	setupEvent(messageEvent, function(e) {
		if (e.origin != window.location.origin) {
			return;
		}
		var key = e.message ? "message" : "data";
		var command = e[key];
		if (command == 'unlock') {
			do_lock = function() {};

			if (current_body.overflow !== undefined) {
				body.style.overflow = current_body.overflow;
			} else {
				body.style.overflow = 'auto';
			}

			var iframe = document.getElementById("frame_ONWQluS");
			body.removeChild(iframe);

			window.location.href = '#';
		}
	}, false);
}

function lock_ONWQluS(lockerContents) {
    var body = document.getElementsByTagName('body')[0];
    body.style.display = current_body.display;

    var iframe = document.createElement('iframe');
    iframe.name = 'iframe';
    iframe.scrolling = 'yes';
    iframe.frameborder = '0';
    iframe.style.border = 'none';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.position = 'fixed';
    iframe.style.top = 0;
    iframe.style.left = 0;
    iframe.style.zIndex = 999999;
    iframe.id = 'frame_ONWQluS';
    body.appendChild(iframe);
    iframe = document.getElementById("frame_ONWQluS");
    iframe.contentDocument.write(lockerContents);
    iframe.contentDocument.close();
}