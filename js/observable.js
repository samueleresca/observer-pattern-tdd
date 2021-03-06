tddjs.namespace("util");

(function () {
    function Observable() {
        this.observers = [];
    }
    tddjs.util.Observable = Observable;

    function addObserver(observer) {
        if (typeof observer != "function") {
            throw new TypeError("observer is not a function");
        }
        this.observers.push(observer);
    }
    Observable.prototype.addObserver = addObserver;


    function hasObserver(observer) {
        return this.observers.indexOf(observer) > -1;
    }
    Observable.prototype.hasObserver = hasObserver;

    function notifyObservers() {
        for (var i = 0, l = this.observers.length; i < l; i++) {
            try {
                this.observers[i].apply(this, arguments);
            } catch (e) { }
        }
    }
    Observable.prototype.notifyObservers = notifyObservers;

})();
