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
exports.gato = void 0;
var claseAnimal_1 = require("./claseAnimal");
var gato = /** @class */ (function (_super) {
    __extends(gato, _super);
    function gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    gato.prototype.emitirSonido = function () {
        console.log("Miauuuuuu");
    };
    gato.prototype.tipoDeDieta = function () {
        console.log("A ".concat(this.nombreAnimal, " le gusta comer pollo y pescado"));
    };
    return gato;
}(claseAnimal_1.Animal));
exports.gato = gato;
