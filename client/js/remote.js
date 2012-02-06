window.addEventListener('DOMContentLoaded', function(event) {
    var socket = io.connect('http://apps.famo.us:3000');

        NodeList.prototype.map = Array.prototype.map;
        document.querySelectorAll('a').map(function(a) {
            a.addEventListener('click', function(event) {
                data = {};
                data.secret = 'ru3cpo';
                data.url = a.getAttribute('href');
                socket.emit('goto', data);
                event.stopPropagation();
                event.preventDefault();
            }, false);
        });

});
