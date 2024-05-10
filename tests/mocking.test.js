import { vi, it, expect, describe } from 'vitest';

describe('test suite', () => {
    it('test case', () => {
      // Create a mock for the following function
      const sendText = vi.fn();
      sendText.mockReturnValue('ok');
  
      // Call the mock function
      const result = sendText('message');
  
      // Assert that the mock function is called
    //   expect(sendText).toHaveBeenCalledWith('message');
      // Assert that the result is 'ok'
      expect(result).toBe('ok');
    });
  });


describe("LEARN",()=>{
    it("case",()=>{
        const learn = vi.fn();
        learn.mockReturnValue("halo");
        
    })
})

describe("LEARN",()=>{
  it("greater than",()=>{
      expect("h").toMatch("h")
      
  })
})

