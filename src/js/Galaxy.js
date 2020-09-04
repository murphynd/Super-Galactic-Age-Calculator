export default class Galaxy {
  constructor() {
    this.planets = [];
  }
  addPlanet(planet) {
    this.planets.push(planet);
  }
  findPlanet(planet) {
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i]) {
        if (this.planets[i].planet == planet) {
          return this.planets[i];
        }
      }
    }
  }
  addHumanAge(planet, numinput) {
    let num = numinput;
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i]) {
        if (this.planets[i].planet == planet) {
          this.planets[i].humanYears = Math.trunc((num *= this.earthYears));
          return this.planets[i];
        }
      }
    }
    console.log(this.planets[i].humanYears);
  }
}
