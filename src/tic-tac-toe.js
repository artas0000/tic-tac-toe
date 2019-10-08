
class TicTacToe {
    constructor() {
        this.playerSymbol = 'x';
        this.gameArea = [
            [null,null,null],
            [null,null,null],
            [null,null,null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.playerSymbol;
    }

    nextTurn(rowIndex, colIndex) {
        if (this.gameArea[rowIndex][colIndex] === null) {
            this.gameArea[rowIndex][colIndex] = this.playerSymbol;

            if (this.playerSymbol == 'o'){
                this.playerSymbol = 'x';
            } else {
                this.playerSymbol = 'o';
            }
        }
        return this;
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) return true;
        else return false;
    }

    getWinner() {
        for (let i = 0; i < this.gameArea.length; i++){
            if (this.gameArea[0][i] === this.gameArea[1][i] && 
                this.gameArea[0][i] === this.gameArea[2][i]) {
                return this.gameArea[0][i];
            } 

            if (this.gameArea[i][0] === this.gameArea[i][1] && 
                this.gameArea[i][0] === this.gameArea[i][2]) {
                return this.gameArea[i][0];
            }
        }

        if (this.gameArea[0][0] === this.gameArea[1][1] && this.gameArea[0][0] === this.gameArea[2][2]) {
            return this.gameArea[0][0];
        }

        if (this.gameArea[2][0] === this.gameArea[1][1] && this.gameArea[2][0] === this.gameArea[0][2]) {
            return this.gameArea[2][0];
        }
        return null;
    }

    noMoreTurns() {
        for (let i = 0; i < this.gameArea.length; i++){
            for (let j = 0; j < this.gameArea[i].length; j++){
                if (this.gameArea[j][i] === null) {return false;}
            }
        }
        return true;
    }

    isDraw() {
        if(this.noMoreTurns() && !this.getWinner()){
             return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameArea[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;