describe('Initial test', function () {
  beforeEach(function () {
    // beforeEach hook
    $(document.body).append($('<div id="test-1">THIS IS A TEST<span></span></div>'));
    $(document.body).append($('<div id="test-2">THIS IS A TEST</div>'));
    window.addToCart.assignEvents();
  });

  afterEach(function () {
    window.addToCart.removeEvents();
    $('#test-1').remove();
    $('#test-2').remove();
  });

  it('should test public function', function () {
    var spy = sinon.spy(window.addToCart, "publicFunction");
    window.addToCart.publicFunction();
    sinon.assert.called(spy);
    window.addToCart.publicFunction.restore();
  });

  it('should test public subscriber', function (done) {
    var spy = sinon.spy(window.addToCart, "publicFunction");
    $('#test-1').triggerHandler('click');
    setTimeout(function () {
      sinon.assert.called(spy);
      window.addToCart.publicFunction.restore();
      done();
    }, 0);
  });

  it('should test private subscriber', function (done) {
    $('#test-2').triggerHandler('click');
    setTimeout(function () {
      expect(window.addToCart.privateGetter()).to.equal('DATA2');
      done();
    }, 0);
  });

  it('should unsubscribe to events', function () {
    window.addToCart.removeEvents();
    var spy = sinon.spy(PubSub, "publish");
    $('#test-1').triggerHandler('click');
    $('#test-2').triggerHandler('click');
    sinon.assert.notCalled(spy);
  });
});