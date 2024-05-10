import { describe, test, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(1, 2)).toBe(2);
  });

  it("should return the first argument if arguments are equal", () => {
    expect(max(1, 1)).toBe(1);
  });
});

describe("FIZZ BUZZ",()=>{
  it("should return FizzBuzz if n disible by 3 and 5",()=>{
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if divisible by 3",()=>{
    expect(fizzBuzz(3)).toBe("Fizz");
  })

  it("should return Buzz if divisible by 5",()=>{
    expect(fizzBuzz(5)).toBe("Buzz");
  })

  it("should return string args if not divisible by 3 and 5",()=>{
    expect(fizzBuzz(2)).toBe("2")
  })
});