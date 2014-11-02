var awardAgeCalculator = (function() {
  "use strict";

  var getPeople = function() {
    return [{
      name: "Herta Muller",
      birthYear: 1953,
      awardYear: 2009
    }, {
      name: "Mario Vargas Llosa",
      birthYear: 1936,
      awardYear: 2010
    }, {
      name: "Tomas Transtromer",
      birthYear: 1931,
      awardYear: 2011
    }, {
      name: "Mo Yan",
      birthYear: 1955,
      awardYear: 2012
    }, {
      name: "Alice Munro",
      birthYear: 1931,
      awardYear: 2013
    }, {
      name: "Patrick Modiano",
      birthYear: 1945,
      awardYear: 2014
    }];
  };

  var getPeopleWithAwardAge = function() {
    return _.map(getPeople(), function(person) {
      return {
        name: person.name,
        awardAge: person.awardYear - person.birthYear
      };
    });
  };

  return {
    getPeopleWithAwardAge: getPeopleWithAwardAge,
    getAverageAwardAge: function() {
      var peopleWithAwardAge = getPeopleWithAwardAge();
      return _.reduce(peopleWithAwardAge, function(memo, person) {
        return memo + person.awardAge;
      }, 0) / peopleWithAwardAge.length;
    }
  };
}());
