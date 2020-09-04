import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import "./js";
import Planet from "./js/Planet";
import Galaxy from "./js/Galaxy";

$(document).ready(function () {
  myGalaxy = new Galaxy();
  Mars = new Planet("Mars", 1.88);
  Mercury = new Planet("Mercury", 0.24);
  Venus = new Planet("Venus", 0.62);
  Jupiter = new Planet("Jupiter", 11.86);

  $("form#input").submit(function (event) {
    event.preventDefault();
    let Planet = $("#PlanetInput").val();
    let ageInput = $("#Age-input").val();
    let lifeInput = $("#life-input").val();
    myGalaxy.galactic(Planet, ageInput, lifeInput);
  });
});
