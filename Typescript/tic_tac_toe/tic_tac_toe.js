"use strict";
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
exports.__esModule = true;
var Cell_1 = require("./Cell");
var Board = /** @class */ (function () {
    function Board() {
        this.cells = [];
        for (var i = 0; i < 3; i++) {
            this.cells[i] = [];
            for (var j = 0; j < 3; j++) {
                this.cells[i][j] = new Cell_1.Cell();
            }
        }
    }
    Board.prototype.getCell = function (x, y) {
        return this.cells[x][y];
    };
    Board.prototype.isSetRow = function (row) {
        if (this.cells[row][0].getValue() != Cell_1.Cell.EMPTY && this.cells[row][0].getValue() == this.cells[row][1].getValue() && this.cells[row][1].getValue() == this.cells[row][2].getValue())
            return true;
        return false;
    };
    Board.prototype.isSetColumn = function (column) {
        if (this.cells[0][column].getValue() != Cell_1.Cell.EMPTY && this.cells[0][column].getValue() == this.cells[1][column].getValue() && this.cells[1][column].getValue() == this.cells[2][column].getValue())
            return true;
        return false;
    };
    Board.prototype.isSetDiagonal = function () {
        if (this.cells[0][0].getValue() != Cell_1.Cell.EMPTY && this.cells[0][0].getValue() == this.cells[1][1].getValue() && this.cells[1][1].getValue() == this.cells[2][2].getValue())
            return true;
        if (this.cells[0][2].getValue() != Cell_1.Cell.EMPTY && this.cells[0][2].getValue() == this.cells[1][1].getValue() && this.cells[1][1].getValue() == this.cells[2][0].getValue())
            return true;
        return false;
    };
    Board.prototype.isAllCellFilled = function () {
        var result = true;
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.cells[i][j].getValue() == Cell_1.Cell.EMPTY)
                    return false;
            }
        }
        return true;
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
var TicTacToe = /** @class */ (function (_super) {
    __extends(TicTacToe, _super);
    function TicTacToe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TicTacToe.prototype.start = function () {
        this.winner = TicTacToe.NOPLAYER;
        this.player = 0;
        this.displayCanvas();
    };
    TicTacToe.prototype.isFinished = function () {
        if (_super.prototype.isSetRow.call(this, 0) || _super.prototype.isSetRow.call(this, 1) || _super.prototype.isSetRow.call(this, 2)
            || _super.prototype.isSetColumn.call(this, 0) || _super.prototype.isSetColumn.call(this, 1) || _super.prototype.isSetColumn.call(this, 2)
            || _super.prototype.isSetDiagonal.call(this)) {
            this.winner = this.player ^ 1;
            return true;
        }
        else if (_super.prototype.isAllCellFilled.call(this)) {
            this.winner = TicTacToe.NOPLAYER;
            return true;
        }
        return false;
    };
    TicTacToe.prototype.getWinner = function () {
        return this.winner;
    };
    TicTacToe.prototype.restart = function () {
        _super.prototype.clear.call(this);
        this.displayCanvas();
        this.player ^= 1;
    };
    TicTacToe.prototype.displayCanvas = function () {
    };
    TicTacToe.prototype.click = function (x, y) {
        if (!_super.prototype.getCell.call(this, x, y).isLocked()) {
            if (this.player == TicTacToe.PLAYER1)
                _super.prototype.getCell.call(this, x, y).setO();
            else if (this.player == TicTacToe.PLAYER2)
                _super.prototype.getCell.call(this, x, y).setX();
            var value = ['O', 'X'][this.player];
            this.player ^= 1;
            return value;
        }
        return '';
    };
    TicTacToe.PLAYER1 = 0;
    TicTacToe.PLAYER2 = 1;
    TicTacToe.NOPLAYER = -1;
    return TicTacToe;
}(Board));
