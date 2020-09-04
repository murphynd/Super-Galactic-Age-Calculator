import Planet from "../src/js/Planet.js";

describe("Planet", () => {
  test("create a class callled PlaneTime that takes the input of differing planet", () => {
    let mars = new Planet("Mars", 1.88);
    expect(mars.planet).toEqual("Mars");
    expect(mars.earthYears).toEqual(1.88);
    expect(mars.humanYears).toEqual(0);
  });
  test("Create a method called Age in class planet that multiplys age by earthYears", () => {
    let mars = new Planet("Mars", 1.88);
    mars.age(30);
    expect(mars.humanYears).toEqual(56.4);
  });
  // test("create a class callled PlaneTime that takes the input of differing planet", () => {
  //   expect().toEqual();
  // });
});
