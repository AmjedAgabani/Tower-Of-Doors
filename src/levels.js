class Player {

    constructor(startLevel = 5) {
        this.currentLevel = startLevel;
    }

    moveLevel(direction) {
        var newLevel = this.currentLevel + direction;
        this.currentLevel = newLevel;


    }

}