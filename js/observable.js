tddjs.namespace("util");

(function () {
    function Observable() {
        this.observers = [];
    }
    tddjs.util.Observable = Observable;

    function addObserver(observer) {
        this.observers.push(observer);
    }
    Observable.prototype.addObserver = addObserver;


    function hasObserver(observer) {
        return this.observers.indexOf(observer) > -1;
    }
    Observable.prototype.hasObserver = hasObserver;

    function notifyObservers() {
        for (var i = 0, l = this.observers.length; i < l; i++) {
            this.observers[i].apply(this, arguments);
        }
    }
    Observable.prototype.notifyObservers = notifyObservers;

})();
