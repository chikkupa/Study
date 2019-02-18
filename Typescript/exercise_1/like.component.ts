export class LikeComponent{
    private likesCount: number;
    private isSelected: boolean;

    constructor(likesCount: number, isSelected: boolean){
        this.likesCount = likesCount;
        this.isSelected = false;
    }

    onClick(){
        this.likesCount += ((!this.isSelected)? 1 : -1);
        this.isSelected = !this.isSelected;
    }

    get Likes(){
        return this.likesCount;
    }

    get Status(){
        return this.isSelected;
    }
}