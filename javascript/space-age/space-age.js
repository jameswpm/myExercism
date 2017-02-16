var SpaceAge = function(ageInSeconds) {
  this.seconds = ageInSeconds;
  var earthYearInSeconds = 31557600;
  this.ageInEarth = ageInSeconds/earthYearInSeconds;
  this.agesInPlanets = {
    "Mercury": ageInSeconds/(earthYearInSeconds*0.2408467),
    "Venus": ageInSeconds/(earthYearInSeconds*0.61519726),
    "Mars": ageInSeconds/(earthYearInSeconds*1.8808158),
    "Jupiter": ageInSeconds/(earthYearInSeconds*11.862615),
    "Saturn": ageInSeconds/(earthYearInSeconds*29.447498),
    "Uranus": ageInSeconds/(earthYearInSeconds*84.016846),
    "Neptune": ageInSeconds/(earthYearInSeconds*164.79132)
  };
}

SpaceAge.prototype.onEarth = function() {
  return parseFloat(this.ageInEarth.toFixed(2));
}

SpaceAge.prototype.onVenus = function() {
  return parseFloat(this.agesInPlanets["Venus"].toFixed(2));
}

SpaceAge.prototype.onMercury = function() {
  return parseFloat(this.agesInPlanets["Mercury"].toFixed(2));
}

SpaceAge.prototype.onMars = function() {
  return parseFloat(this.agesInPlanets["Mars"].toFixed(2));
}

SpaceAge.prototype.onJupiter = function() {
  return parseFloat(this.agesInPlanets["Jupiter"].toFixed(2));
}

SpaceAge.prototype.onSaturn = function() {
  return parseFloat(this.agesInPlanets["Saturn"].toFixed(2));
}

SpaceAge.prototype.onUranus = function() {
  return parseFloat(this.agesInPlanets["Uranus"].toFixed(2));
}

SpaceAge.prototype.onNeptune = function() {
  return parseFloat(this.agesInPlanets["Neptune"].toFixed(2));
}

module.exports = SpaceAge;
