var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

        window.addEventListener('native.hidekeyboard', keyboardHideHandler);
        window.addEventListener('native.showkeyboard', keyboardShowHandler);
        function keyboardHideHandler(e) {
            alert('Goodnight, sweet prince');
        }
        function keyboardShowHandler(e) {
            alert('Keyboard height is: ' + e.keyboardHeight);
            
        }
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        app.showStatusBar();
        app.loadApp();
    },
    showStatusBar: function () {
        if (StatusBar.show) {
            StatusBar.show();
        }

        if (StatusBar.overlaysWebView) {
            StatusBar.overlaysWebView(true);
        }
    },
    loadApp: function () {
        var isNetworkValid = app.checkConnection();
        if (isNetworkValid == true) {
            window.location.replace('http://192.168.0.106:6061/');
        }
        else {
            window.location.replace('networkInvalid.html');
        }
    },
    checkConnection: function () {
        var networkState = navigator.network.connection.type;

        if (networkState == Connection.UNKNOWN || networkState == Connection.NONE) {
            return false;
        }

        return true;
    }
};
