export default class Planet {
  constructor(planet, earthYears) {
    this.planet = planet;
    this.earthYears = earthYears;
    this.humanYears = 0;
  }
  age(num) {
    this.humanYears = num *= this.earthYears;
  }
}
