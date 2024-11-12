class scene1 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }
    preload(){
        this.load.image("background", "assets/background.jpg");
        this.load.spritesheet("shipone", "assets/shipone.png",{
            frameWidth: 16,
            frameHeight: 16
          });
        this.load.spritesheet("shiptwo", "assets/shiptwo.png",{
            frameWidth: 32,
            frameHeight: 16
          });
        this.load.spritesheet("explosion", "assets/explosion.png",{
            frameWidth: 16,
            frameHeight: 16
          });
    }
    create() {
        this.scene.start("playGame");
    }
}
