import Galaxy from "../src/js/Galaxy.js";
import Planet from "../src/js/Planet.js";

describe("Galaxy", () => {
  let myGalaxy;
  let Mars;
  let Mercury;
  let Venus;

  beforeEach(() => {
    myGalaxy = new Galaxy();
    Mars = new Planet("Mars", 1.88);
    Mercury = new Planet("Mercury", 0.24);
    Venus = new Planet("Venus", 0.62);
    myGalaxy.addPlanet(Mars);
    myGalaxy.addPlanet(Mercury);
    myGalaxy.addPlanet(Venus);
  });
  test("this will test if planet objects register in galexy array", () => {
    expect(myGalaxy.planets).toEqual([Mars, Mercury, Venus]);
    expect(myGalaxy.planets).toHaveLength(3);
  });
  test("create a method for class galexy to search planets objects", () => {
    myGalaxy.findPlanet("Venus");
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      earthYears: 0.62,
      humanYears: 0,
      planet: "Venus",
    });
  });
  test("add inputted age to update all of the planets in Galaxy Array", () => {
    myGalaxy.addHumanAge("Venus", 30);
    expect(myGalaxy.findPlanet("Venus")).toEqual({
      earthYears: 0.62,
      humanYears: 18,
      planet: "Venus",
    });
  });
  test("add inputted age to update all of the planets in Galaxy Array", () => {
    myGalaxy.addHumanAge("pluto", 30);
    expect(myGalaxy.findPlanet("pluto")).toEqual("not in the Galaxy");
  });
  test("This will take an input of life expentancy and tell the user if they would still be alive.", () => {
    myGalaxy.lifeExp("Mars", 15, 72);
    expect(myGalaxy.lifeExp("Mars", 15, 72)).toEqual("you are alive!");
  });
  test("This will take an input of life expentancy and tell the user if they would still be alive.", () => {
    myGalaxy.lifeExp("Mars", 200, 72);
    expect(myGalaxy.lifeExp("Mars", 200, 72)).toEqual(
      "you should be dead but I guess space is treating you well."
    );
  });
  test("This will take an input of life expentancy and tell the user if they would still be alive.", () => {
    myGalaxy.lifeExp("Pluto", 200, 72);
    expect(myGalaxy.lifeExp("Pluto", 200, 72)).toEqual("not in the Galaxy");
  });

  test("This will take an input of life expentancy and tell the user if they would still be alive.", () => {
    myGalaxy.Dead("Mars", 200, 72);
    expect(myGalaxy.Dead("Mars", 200, 72)).toEqual(304);
  });
});
