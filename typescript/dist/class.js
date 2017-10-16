var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Spacecraft = (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
var MilleniumFalcon = (function (_super) {
    __extends(MilleniumFalcon, _super);
    function MilleniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainer = 2;
        return _this;
    }
    MilleniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log('Failed to jump into hyperspace!');
        }
    };
    return MilleniumFalcon;
}(Spacecraft));
var falcon = new MilleniumFalcon();
falcon.jumpIntoHyperspace();
var goodForTheJob = function (ship) { return ship.cargoContainer > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'YES' : 'NO'));
