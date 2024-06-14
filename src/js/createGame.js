import  CountScore from './countScore.js';

class GameControl {
    constructor(element, field) {
        this.element = element;
        this.createField(field)
        this.setGoblin()
        this.listener()
        this.score = new CountScore(document.querySelector('.score_cont'));
    }

    createField(fieldQuantity) {
        for(let i = 0; i < fieldQuantity; i++) {
            const pieceOfField = document.createElement('img');
            pieceOfField.className = 'piece_of_field';
            this.element.append(pieceOfField);
        }
    }
    setGoblin() {
       
        const arrOfField = this.element.querySelectorAll('.piece_of_field');
        this.addGoblinInterval = setInterval(() => { 
        arrOfField.forEach((item) => {
            item.classList.remove('add_goblin');
        } );
        arrOfField[Math.floor(Math.random() * 16)].classList.add('add_goblin');
        
        this.failCount()
       
       },1500);
       

    }
    failCount() {
        this.missGoblinInterval = setTimeout(() => { 
        
            this.score.addFail()
            this.score.render()

            if(this.score.fail === 5) {
                
                clearInterval(this.addGoblinInterval)
                clearTimeout(this.missGoblinInterval)
                this.gameOver()
                this.refreshGame()
               
            };
            

            
       },1500);
    }
    listener() {
        this.element.addEventListener('click', (event) => {
            if(event.target.classList.contains('add_goblin')) {
                this.score.addScore()
                this.score.render()
                event.target.classList.remove('add_goblin');
                clearInterval(this.missGoblinInterval)
            } 
    })
    }
    gameOver() {
        this.score.clear()
       alert('game over');
    }
    refreshGame() {
        const arrOfField = this.element.querySelectorAll('.piece_of_field');
        arrOfField.forEach((item) => {
            item.classList.remove('add_goblin');
        } );
        this.setGoblin()
    }
    
}

new GameControl(document.querySelector('.root'), 16)
