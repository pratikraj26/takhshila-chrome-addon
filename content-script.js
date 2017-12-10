var port = chrome.runtime.connect();

port.onMessage.addListener(function (message) {
    window.postMessage(message, '*');
});

window.addEventListener('message', function (event) {
    if( event.data === 'takhshila-check-addon-installed' ) {
        window.postMessage( 'takhshila-addon-installed', '*' );
    } else if (event.source === window) {
        port.postMessage( event.data );
    }
});