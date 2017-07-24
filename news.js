var news = (function(config) {

    var a = document.querySelectorAll('.news-thumb-container');

    Object.prototype.myeach = function(action) {
        for (var i = 0; i < this.length; i++) {
            action(this[i], i, this);
        }
    }


    function model(b) {

        var clone = b;
        var container = b.children[0];
        var list = container.children;
        var showCount = config.count;
        var end = list.length - showCount;
        var itemHeight = list[0].clientHeight;

        list.myeach(function(d) {
            b.style.height = config.count * list[0].clientHeight + 'px';
        });


        if (end > 0) {
            var t = 0;

            function swipe() {

                container.style.top = t + 'px';

                if (t > -itemHeight) {
                    t -= 10;
                    setTimeout(swipe, 15);
                } else {
                    container.style.top = '0px';
                    container.appendChild(container.children[0]);
                    t = 0;
                }

            }

            setInterval(swipe, config.timer);
        }


    }


    a.myeach(function(d) {
        new model(d);
    });

    return config;

})({
    timer: 3000,
    count: 2

});