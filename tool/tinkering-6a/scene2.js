class scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create() {
      this.player = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "player");
      
    }

    update() {

      this.moveShip(this.ship1, 1);
      this.moveShip(this.ship2, 2);
      this.moveShip(this.ship3, 3);

      this.background.tilePositionY -= 0.5;

    }

    moveShip(ship, speed) {
      ship.y += speed;
      if (ship.y > config.height) {
        this.resetShipPos(ship);
      }
    }

    resetShipPos(ship) {
      ship.y = 0;
      var randomX = Phaser.Math.Between(0, config.width);
      ship.x = randomX;
    }

    destroyShip(pointer, gameObject) {
      gameObject.setTexture("explosion");
      gameObject.play("explode");
    }


  }
