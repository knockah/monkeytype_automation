// variables

var words = document.getElementsByClassName('word')
var letters = []

// get letters

for (const word of words) {
    for (const child of word.children) {
        letters.push(child.innerText.charCodeAt(0))
    }

    letters.push(' '.charCodeAt(0))
    console.log(' '.charCodeAt(0))
}

// functions

function simulate_key(keyCode, type, modifiers) {
	var event_name = (typeof(type) === 'string') ? 'key' + type : 'keydown';	
	var modifier = (typeof(modifiers) === 'object') ? modifier : {};

	var event = document.createEvent('HTMLEvents');
	event.initEvent(event_name, true, false);
	event.keyCode = keyCode;
	
	for (var i in modifiers) {
		event[i] = modifiers[i];
	}

	document.dispatchEvent(event);
}

var on_key_event = function (event) {
	var state = 'pressed';
	
	if (event.type !== 'keypress') {
		state = event.type.replace('key', '');
	}
	
	console.log('Key with keyCode ' + event.keyCode + ' is ' + state);
};

document.addEventListener('keypress', on_key_event, false);
document.addEventListener('keydown', on_key_event, false);
document.addEventListener('keyup', on_key_event, false);

//

for (var letter of letters) {
    setTimeout(() => {
        simulate_key(letter);
        simulate_key(letter, 'up');
    }, 5000);
}
