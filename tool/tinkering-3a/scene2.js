class scene2 extends Phaser.Scene {
    constructor() {
        super("playGame");
    }
    create() {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
        this.background.setOrigin(0, 0);

    this.alienone = this.add.image(config.width / 2 -200, config.height / 2, "alienone");
    this.alientwo = this.add.image(config.width / 2 +200, config.height / 2, "alientwo");

}
  // 0 add the update function
  update() {

    // 1.1 call a function to move the ships vertically
    this.moveAlien(this.alienone, 1);
    this.moveAlien(this.alientwo, 2);

    // 4.2 scroll the background
    this.background.tilePositionY -= 0.5;

  }

  // 1.2 create the function to move the ships
  moveAlien(alien, speed) {
    // increase the position of the ship on the vertical axis
    alien.y += speed;
    // if the ship hits the bottom of the screen call the reset function
    if (alien.y > config.height) {
      // 2.1 call a reset position function
      this.resetAlienPos(alien);
    }
  }

  // 2.2 create the reset position function
  resetAlienPos(alien){
    // put the alien on the top
    alien.y = 0;
    // put the alien on a random position on the x axis
    var randomX = Phaser.Math.Between(0, config.width);
    alien.x = randomX;
  }

}
