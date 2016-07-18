var AddToCart = function () {
  var _this = this;
  var _privateVariable = 'A private variable';
  this.publicVariable = 'A public variable';
  var _privateFunction = function () {
    if (_privateVariable === 'DATA2') {
      //Does something cool
    }
    //Does something cool
  };
  this.publicFunction = function () {
    if (_this.publicVariable === 'DATA1') {
      //Does something cool
    }
    //Does something cool
  };

  this.privateSetter = function (data) {
    _privateVariable = data;
  };

  this.privateGetter = function () {
    return _privateVariable;
  };

  this.privateSubscriber = function (msg, data) {
    _this.privateSetter(data);
    _privateFunction();
  };

  this.publicSubscriber = function (msg, data) {
    _this.publicVariable = data;
    _this.publicFunction();
  };

  var _publishDataOne = function () {
    PubSub.publish('test.one', 'DATA1');
  };

  var _publishDataTwo = function () {
    PubSub.publish('test.two', 'DATA2');
  };

  this.assignEvents = function () {
    PubSub.subscribe('test.one', _this.publicSubscriber);
    PubSub.subscribe('test.two', _this.privateSubscriber);
    $('#test-1').on('click', _publishDataOne);
    $('#test-2').on('click', _publishDataTwo);
  };

  this.removeEvents = function () {
    PubSub.unsubscribe('test.one', _this.publicSubscriber);
    PubSub.unsubscribe('test.two', _this.privateSubscriber);
    $('#test-1').off('click', _publishDataOne);
    $('#test-2').off('click', _publishDataTwo);
  };
};

window.addToCart = new AddToCart();