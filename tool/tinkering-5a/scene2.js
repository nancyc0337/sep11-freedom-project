class scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create() {

        this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, "background");
        this.background.setOrigin(0, 0);
        this.background.setScrollFactor(0);

        this.bee = this.add.sprite(config.width, config.height, "bee");
        this.cameras.main.startFollow(this.bee);

  }

  update() {
   this.background.tilePositionX = this.myCam.scrollX * .3;
  }
}
