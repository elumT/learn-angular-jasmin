import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";
import { share } from "rxjs";

describe("CalcService", () => {
  let shared: SharedService;
  let calc: CalcService;

  // Without DI
  // beforeEach(() => {
  //   console.log("Before each is called");
  //   shared = new SharedService();
  //   calc = new CalcService(shared);
  // })

  beforeEach(() => {
      console.log("Before each is called");
      shared = jasmine.createSpyObj("SharedService", ["mysharedFunction"]);
      TestBed.configureTestingModule({
        providers: [
          CalcService, 
          // SharedService]
          {provide: SharedService, useValue: shared}]
      })
      shared = TestBed.inject(SharedService);
      calc = TestBed.inject(CalcService);
  }) 
  it("should multiply two numbers", () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it("should add two numbers", () => {
    // const shared = new SharedService();
    // const calc = new CalcService(shared);
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  })

  it("should call the mySharedFunction func", () => {
    // const shared = new SharedService();
    // const shared = jasmine.createSpyObj("SharedService", ["mysharedFunction"]);
    // spyOn(shared, "mysharedFunction");
    // spyOn(shared, "mysharedFunction").and.callThrough();
    const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    // expect(shared.mysharedFunction).toHaveBeenCalled();
  })
})