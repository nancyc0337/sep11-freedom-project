class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "assets/background.jpg");
        this.load.image("alienone", "assets/alienone.png");
        this.load.image("alientwo", "assets/alientwo.png");
    }
    create() {
        this.scene.start("playGame");
    }
}
