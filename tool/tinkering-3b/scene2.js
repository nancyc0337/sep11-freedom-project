class scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create() {

      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);

      // 0.1 change from image to sprite
      this.shipone = this.add.sprite(config.width / 2 - 50, config.height / 2, "shipone");
      this.shiptwo = this.add.sprite(config.width / 2, config.height / 2, "shiptwo");

      // 0.2 create animations
      this.anims.create({
        key: "shipone_anim",
        frames: this.anims.generateFrameNumbers("shipone"),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "shiptwo_anim",
        frames: this.anims.generateFrameNumbers("shiptwo"),
        frameRate: 20,
        repeat: -1
      });

      this.anims.create({
        key: "explode",
        frames: this.anims.generateFrameNumbers("explosion"),
        frameRate: 20,
        repeat: 0,
        hideOnComplete: true
      });

      // 0.3 play the animations
      this.shipone.play("shipone_anim");
      this.shiptwo.play("shiptwo_anim");

      // 1 make the ships clickable to destroy them
      this.shipone.setInteractive();
      this.shiptwo.setInteractive();

      // 1.2
      this.input.on('gameobjectdown', this.destroyShip, this);

      this.add.text(20, 20, "Playing game", {
        font: "25px Arial",
        fill: "yellow"
      });
    }

    update() {

      this.moveShip(this.shipone, 1);
      this.moveShip(this.shiptwo, 2);

      this.background.tilePositionY -= 0.5;

    }

    moveShip(ship, speed) {
      ship.y += speed;
      if (ship.y > config.height) {
        this.resetShipPos(ship);
      }
    }

    resetShipPos(ship){
      ship.y = 0;
      var randomX = Phaser.Math.Between(0, config.width);
      ship.x = randomX;
    }

    // 1.3
    destroyShip(pointer, gameObject) {
      gameObject.setTexture("explosion");
      gameObject.play("explode");
    }


  }
