export default class CountScore {
    constructor(element) {
        this.element = element;
        this.scoreElement = this.element.querySelector('.score') ;
        this.failElement = this.element.querySelector('.fail') ;
        this.score = 0;
        this.fail = 0;

    }

    addScore() {
        this.score++;
    }
    addFail() {
        this.fail++;
    }
    render() {
        this.scoreElement.textContent = this.score;
        this.failElement.textContent = this.fail;
    }
    clear() {
        this.score = 0;
        this.fail = 0;
        this.render();
    }
}
