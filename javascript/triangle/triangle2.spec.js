var Triangle = require('./triangle');

describe('Triangle', function() {

  it('test for degenerate triangle 1', function() {
    var triangle = new Triangle(2,2,4);
    expect(triangle.kind()).toEqual('degenerate triangle');
  });

  it('test for degenerate triangle 2', function() {
    var triangle = new Triangle(4,2,2);
    expect(triangle.kind()).toEqual('degenerate triangle');
  });

  it('test for degenerate triangle 3', function() {
    var triangle = new Triangle(2,4,2);
    expect(triangle.kind()).toEqual('degenerate triangle');
  });

});
