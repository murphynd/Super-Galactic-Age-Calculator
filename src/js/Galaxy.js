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
    let num = parseFloat(numinput);

    console.log(num);
    for (let i = 0; i < this.planets.length; i++) {
      if (this.planets[i]) {
        if (this.planets[i].planet == planet) {
          this.planets[i].humanYears = Math.trunc((num *= this.planets[i].earthYears));
          console.log(num);
          return this.planets[i];
        }
      }
    }
  }
}
