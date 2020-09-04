export default class Galaxy {
  constructor() {
    this.planets = [];
  }
  addPlanet(planet) {
    this.planets.push(planet);
  }
  findPlanet(planet) {
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        return this.planets[i];
      }
    }
    return "not in the Galaxy";
  }
  addHumanAge(planet, numinput) {
    let num = parseFloat(numinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        this.planets[i].humanYears = Math.trunc((num *= this.planets[i].earthYears));
        return this.planets[i];
      }
    }
    return "not in the Galaxy";
  }
  lifeExp(planet, numinput, lifeinput) {
    let num = parseFloat(numinput);
    let life = parseFloat(lifeinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        this.planets[i].humanYears = Math.trunc((num *= this.planets[i].earthYears));
        if (this.planets[i].humanYears < life) {
          return "you are alive!";
        } else return "you should be dead but I guess space is treating you well.";
      }
      return "not in the Galaxy";
    }
  }
}
