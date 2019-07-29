class Cell {
    private value : number;
    
    constructor(){
        this.value = 0;
    }

    public setValue(value: number){
        this.value = value;
    }

    public getValue():number{
        return this.value;
    }

    public clear(){
        this.value = 0;
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

    public getCell(x:number, y:number):Cell{
        return this.cells[x][y];
    }

    public clear(){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.cells[i][j].clear();
            }
        }
    }
}

interface Game {
    start():void;
    isFinished():boolean;
    restart():void;
}
