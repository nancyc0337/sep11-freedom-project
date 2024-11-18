class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "assets/background.jpg");
        this.load.spritesheet("ball", "assets/ball.png",{
            frameWidth: 16,
            frameHeight: 16
          });
    }
    create() {
        this.scene.start("playGame");
    }
}
