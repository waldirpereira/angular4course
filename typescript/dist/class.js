"use strict";
exports.__esModule = true;
var base_ships_1 = require("./base-ships");
var starfighters_1 = require("./starfighters");
var ship = new base_ships_1.Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var falcon = new starfighters_1.MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
