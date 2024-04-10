const service = require('../../script');

describe("Services functions", ()=>{
    describe("hello jasmine",()=>{
        // ====== > Test 1: hello world
        it("should return the right message", ()=>{
            let message = service.hello();
            expect(message).toBe("hi buddy");
        });
        // ====== > Test 2: calculator
        it("should return the addition of two", ()=>{
            let result = service.addVal(4,2);
            expect(result).toBe(6);
        });
    })
});