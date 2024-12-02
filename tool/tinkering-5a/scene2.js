class scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create() {

        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.setScrollFactor(0);

        this.camera.main.startFollow(this.bee);
        this.background.tilePositionX = this.myCam.scrollX * .3;

        this.add.text(20, 20, "Playing game", {
            font: "25px Arial",
            fill: "yellow"
          });

  }
