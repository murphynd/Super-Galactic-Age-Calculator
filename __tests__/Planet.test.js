import Planet from "../src/js/Planet.js";

describe("Planet", () => {
  test("create a class callled PlaneTime that takes the input of differing planet", () => {
    let mars = new Planet("Mars", 1.88);
    expect(mars.planet).toEqual("Mars");
    expect(mars.earthYears).toEqual(1.88);
  });
  // test("create a class callled PlaneTime that takes the input of differing planet", () => {
  //   expect().toEqual();
  // });
  // test("create a class callled PlaneTime that takes the input of differing planet", () => {
  //   expect().toEqual();
  // });
});
