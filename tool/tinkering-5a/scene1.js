class scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
      this.load.image("background", "assets/background.png");
      //
      this.load.spritesheet("bee", "assets/bee.png",{
        frameWidth: 16,
        frameHeight: 16
      });
    }

    create() {
      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
    }
  }
