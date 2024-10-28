class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "assets/background.png");
        this.load.image("boat", "assets/boat.png");
    }
    create() {
        this.add.text(20, 20, "Loading game...");
        this.scene.start("playGame");
    }
}
