export default class Galaxy {
  constructor() {
    this.planets = [];
  }
  addPlanet(planet) {
    this.planets.push(planet);
  }
  galactic(planet, ageinput, lifeinput) {
    let age = parseFloat(ageinput);
    let life = parseFloat(lifeinput);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i].planet == planet) {
        this.planets[i].humanYears = Math.trunc((age *= this.planets[i].earthYears));
        if (this.planets[i].humanYears < life) {
          return "you are alive!";
        } else return (this.planets[i].humanYears -= life);
      }
      return "not in the Galaxy";
    }
  }
}
