//FIX to the error : "expect is not defined"
var expect = chai.expect;
var assert = chai.assert;

//describe String tests
describe('ObservableAddObserverTest', function () {
    //Before the execution, initialize the object
    beforeEach(function () {
        this.observable = new tddjs.util.Observable();
    });

    it('test should store function', function () {
        var observers = [function test1() { }, function test2() { }];

        this.observable.addObserver(observers[0]);
        this.observable.addObserver(observers[1]);


        assert.equal(observers.length, this.observable.observers.length);
    });

    it('test should throw for uncallable observer', function () {
        expect(this.observable.addObserver.bind(this.observable, ({}))).to.throw(Error);
    })
});

describe('ObservableHasObserverTest', function () {
    beforeEach(function () {
        this.observable = new tddjs.util.Observable();
    });

    it("test should return true when has observer", function () {
        var observer = function () { };

        this.observable.addObserver(observer);
        expect(this.observable.hasObserver(observer)).to.be.ok;
    });

    it("test should return false when has no observer", function () {
        var observer = function () { };
        expect(this.observable.hasObserver(observer)).to.be.not.ok;
    });
});


describe('ObservableNotifyObserversTest', function () {
    beforeEach(function () {
        this.observable = new tddjs.util.Observable();
    });

    it("test should call all observers", function () {
        var observer1 = function () { observer1.called = true; };
        var observer2 = function () { observer2.called = true; };


        this.observable.addObserver(observer1);
        this.observable.addObserver(observer2);
        this.observable.notifyObservers();

        expect(observer1.called).to.be.ok;
        expect(observer2.called).to.be.ok;

    });

    it("test should pass through arguments", function () {
        var actual;

        this.observable.addObserver(function () {
            actual = arguments;
        });

        this.observable.notifyObservers("String", 1, 32);
        expect(Array.prototype.slice.call(actual)).to
            .include.members(["String", 1, 32]);
    });

    it("test should notify all even when some fail", function () {
    });

});