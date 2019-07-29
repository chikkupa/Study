class Cell {
    private value : number;
    public static EMPTY = 0;
    public static O = 1;
    public static X = 2;
    
    constructor(){
        this.value = Cell.EMPTY;
    }

    public setO():void{
        this.value = Cell.O;
    }

    public setX():void{
        this.value = Cell.X;
    }

    public getValue():number{
        return this.value;
    }

    public clear():void{
        this.value = Cell.EMPTY;
    }
}

class Board {
    protected cells : Cell[][];

    constructor(){
        console.log("In Super Constructor");
        this.cells = [];

        for(let i = 0; i < 3; i++){
            this.cells[i] = [];
            for(let j = 0; j < 3; j++){
                this.cells[i][j] = new Cell();
            }
        }
    }

    protected getCell(x:number, y:number):Cell{
        return this.cells[x][y];
    }

    protected isSetRow(row:number):boolean {
        if(this.cells[row][0].getValue() != Cell.EMPTY && this.cells[row][0].getValue() == this.cells[row][1].getValue() && this.cells[row][1].getValue() == this.cells[row][2].getValue())
            return true;
        return false;
    }

    protected isSetColumn(column:number):boolean{
        if(this.cells[0][column].getValue() != Cell.EMPTY && this.cells[0][column].getValue() == this.cells[1][column].getValue() && this.cells[1][column].getValue() == this.cells[2][column].getValue())
            return true;
        return false;
    }

    protected isSetDiagonal():boolean {
        if(this.cells[0][0].getValue() != Cell.EMPTY && this.cells[0][0].getValue() == this.cells[1][1].getValue() && this.cells[1][1].getValue() == this.cells[2][2].getValue())
            return true;
        if(this.cells[0][2].getValue() != Cell.EMPTY && this.cells[0][2].getValue() == this.cells[1][1].getValue() && this.cells[1][1].getValue() == this.cells[2][0].getValue())
            return true;
        return false;
    }

    protected clear(){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.cells[i][j].clear();
            }
        }
    }
}

interface Game {
    start():void;
    displayCanvas():void;
    isFinished():boolean;
    restart():void;
}

class TicTacToe extends Board implements Game {
    private player:number;
    public static PLAYER1 = 0;
    public static PLAYER2 = 1;

    public start():void{
        console.log("Game started");
        this.player = 0;
        this.displayCanvas();
    }

    public isFinished():boolean{
        if(super.isSetRow(0) || super.isSetRow(1) || super.isSetRow(2)
            || super.isSetColumn(0) || super.isSetColumn(1) || super.isSetColumn(2)
            || super.isSetDiagonal())
            return true;
        return false;
    }

    public restart():void{
        super.clear();
        this.displayCanvas();
    }

    public displayCanvas():void{

    }

    public click(x:number, y:number):void{
        if(this.player == TicTacToe.PLAYER1)
            super.getCell(x, y).setO();
        else if(this.player == TicTacToe.PLAYER2)
            super.getCell(x, y).setX();

        this.player ^= 1;
    }
}