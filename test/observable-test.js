//FIX to the error : "expect is not defined"
var expect = chai.expect;
var assert = chai.assert;

//describe String tests
describe('ObservableAddObserverTest', function () {
    //Before the execution, initialize the object
    before(function () { });

    it('test should store function', function () {
        var observable = new tddjs.util.Observable();
        var observers = [function test1() { }, function test2() { }];

        observable.addObserver(observers[0]);
        observable.addObserver(observers[1]);


        assert.equal(observers.length, observable.observers.length);
    });

});

describe('ObservableHasObserverTest', function () {
    before(function () { });

    it("test should return true when has observer", function () {
        var observable = new tddjs.util.Observable();
        var observer = function () { };

        observable.addObserver(observer);
        expect(observable.hasObserver(observer)).to.be.ok;
    });

    it("test should return false when has no observer", function () {
        var observable = new tddjs.util.Observable();
        var observer = function () { };

        expect(observable.hasObserver(observer)).to.be.not.ok;
    });
});


describe('ObservableNotifyObserversTest', function () {
    before(function () { });

    it("test should call all observers", function () {
        var observable = new tddjs.util.Observable();
        var observer1 = function () { observer1.called = true; };
        var observer2 = function () { observer2.called = true; };


        observable.addObserver(observer1);
        observable.addObserver(observer2);
        observable.notifyObservers();

        expect(observer1.called).to.be.ok;
        expect(observer2.called).to.be.ok;

    });

    it("test should pass through arguments", function () {
        var observable = new tddjs.util.Observable();
        var actual;

        observable.addObserver(function () {
            actual = arguments;
        });

        observable.notifyObservers("String", 1, 32);
        expect( Array.prototype.slice.call(actual)).to
        .include.members(["String", 1, 32]);
    });


});