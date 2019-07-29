var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cell = /** @class */ (function () {
    function Cell() {
        this.value = 0;
    }
    Cell.prototype.setValue = function (value) {
        this.value = value;
    };
    Cell.prototype.getValue = function () {
        return this.value;
    };
    Cell.prototype.clear = function () {
        this.value = 0;
    };
    return Cell;
}());
var Board = /** @class */ (function () {
    function Board() {
        console.log("In Super Constructor");
        this.cells = [];
        for (var i = 0; i < 3; i++) {
            this.cells[i] = [];
            for (var j = 0; j < 3; j++) {
                this.cells[i][j] = new Cell();
            }
        }
    }
    Board.prototype.getCell = function (x, y) {
        return this.cells[x][y];
    };
    Board.prototype.clear = function () {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                this.cells[i][j].clear();
            }
        }
    };
    return Board;
}());
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Game;
}(Board));
var game = new Game();
