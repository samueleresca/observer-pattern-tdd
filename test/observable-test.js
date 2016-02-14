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


describe('ObservableHasObserverTest',function(){
   before(function(){});
   
   it("test should return true when has observer",function(){
      var observable = new tddjs.util.Observable();
      var observer= function(){};
      
      observable.addObserver(observer);
      expect(observable.hasObserver(observer)).to.be.ok; 
   });
   
    it("test should return false when has no observer",function(){
      var observable = new tddjs.util.Observable();
      var observer= function(){};
      
      expect(observable.hasObserver(observer)).to.be.not.ok; 
   });
});