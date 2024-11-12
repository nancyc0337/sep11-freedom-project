class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0,0);

        this.boat = this.add.image(config.width / 1.85, config.height / 2.7, "boat");

        this.add.text(20, 20, "Playing game...", {font: "25px Arial", fill: "black"});
    }

}
