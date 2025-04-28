"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.perro = void 0;
var claseAnimal_1 = require("./claseAnimal");
var perro = /** @class */ (function (_super) {
    __extends(perro, _super);
    function perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    perro.prototype.emitirSonido = function () {
        console.log("Guauuuuuu");
    };
    perro.prototype.tipoDeDieta = function () {
        console.log("A ".concat(this.nombreAnimal, " le gusta comer carne"));
    };
    return perro;
}(claseAnimal_1.Animal));
exports.perro = perro;
