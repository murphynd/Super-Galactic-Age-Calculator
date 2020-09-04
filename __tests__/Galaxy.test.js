import Galaxy from "../src/js/Galaxy.js";
describe("Galaxy", () => {
  test("create class Galaxy to hold array of multiple planets", () => {
    let myGalaxy = new Galaxy();
    expect(myGalaxy.planets).toEqual([]);
  });
});
