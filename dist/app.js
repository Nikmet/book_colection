(function () {
    'use strict';

    class App {
        routes = [{ path: "", view: null }];

        constructor() {
            window.addEventListener('hashchange', this.route.bind(this));
            this.route();
        }

        route() {
            
        }
    }

    new App();

})();
