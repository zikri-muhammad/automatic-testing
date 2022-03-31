const FigureCalculator = require('./FigureCalculator');
const MathBasic = require('./MathBasic');
 
describe('A FigureCalculator', () => {
  it('should contain calculateRectanglePerimeter, calculateRectangleArea, calculateTrianglePerimeter, and calculateTriangleArea functions', () => {
    const figureCalculator = new FigureCalculator({});
 
    expect(figureCalculator).toHaveProperty('calculateRectanglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateRectangleArea');
    expect(figureCalculator).toHaveProperty('calculateTrianglePerimeter');
    expect(figureCalculator).toHaveProperty('calculateTriangleArea');
    expect(figureCalculator.calculateRectanglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateRectangleArea).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTrianglePerimeter).toBeInstanceOf(Function);
    expect(figureCalculator.calculateTriangleArea).toBeInstanceOf(Function);
  });

  describe('A calculateRectanglePerimeter function', () => {
    it('should throw error when not given 2 parameters', () => {
        const figureCalculator = new FigureCalculator({});

        expect(() => figureCalculator.calculateRectanglePerimeter()).toThrowError();
        expect(() => figureCalculator.calculateRectanglePerimeter(1)).toThrowError();
        expect(() => figureCalculator.calculateRectanglePerimeter(1,2,3)).toThrowError();
    })
  })

  it('should throw error when given with non-number parameters', () => {
    const figureCalculator = new FigureCalculator({});
    expect(() => figureCalculator.calculateRectanglePerimeter(true, {})).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter(null, '2')).toThrowError();
    expect(() => figureCalculator.calculateRectanglePerimeter([], {})).toThrowError();
  });

  it('should return corret value based on rectangle perimeter formula', () => {
    //   Arrange 
    const length = 20;
    const width  = 10;
    const spyAdd = jest.spyOn(MathBasic, 'add');
    const spyMultiply = jest.spyOn(MathBasic, 'multiply')
    const figureCalculator = new FigureCalculator(MathBasic)

    // action 
    const result = figureCalculator.calculateRectanglePerimeter(length, width)

    // Assert 
    expect(result).toEqual(60); // 2 x (length + widt)
    expect(spyAdd).toBeCalledWith(length, width);
    expect(spyMultiply).toHaveBeenCalledWith(2, 30); // (length + width)
  })
  
});