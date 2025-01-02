class scene2 extends Phaser.Scene {
    constructor() {
      super("playGame");
    }

    create() {

      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);

      this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
      this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
      this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");

      this.ship1.play("ship1_anim");
      this.ship2.play("ship2_anim");
      this.ship3.play("ship3_anim");

      this.ship1.setInteractive();
      this.ship2.setInteractive();
      this.ship3.setInteractive();

      this.input.on('gameobjectdown', this.destroyShip, this);

      this.add.text(20, 20, "Playing game", {
        font: "25px Arial",
        fill: "yellow"
      });

      // animation spaceship
      this.spaceship = this.physics.add.sprite(config.width / 2 - 8, config.height - 64, "spaceship");
      this.spaceship.play("thrust");
      this.cursorKeys = this.input.keyboard.createCursorKeys();
      this.spaceship.setCollideWorldBounds(true);

      this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.projectiles = this.add.group();

      // 3.1
      this.physics.world.setBoundsCollision();

      this.powerUps = this.physics.add.group();

      // 2.2 Add multiple objects
      var maxObjects = 4;
      for (var i = 0; i <= maxObjects; i++) {
        var powerUp = this.physics.add.sprite(16, 16, "power-up");
        this.powerUps.add(powerUp);
         powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);

        // set random animation
        if (Math.random() > 0.5) {
          powerUp.play("red");
        } else {
          powerUp.play("gray");
        }

        // setVelocity
        powerUp.setVelocity(100, 100);
        // 3.2
        powerUp.setCollideWorldBounds(true);
        // 3.3
       powerUp.setBounce(1);

      }

    }

    update() {

      this.moveShip(this.ship1, 1);
      this.moveShip(this.ship2, 2);
      this.moveShip(this.ship3, 3);

      this.moveSpaceshipManager();

      if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
        console.log("Fire!");
        this.shootBeam();
      }
      for(var i = 0; i < this.projectiles.getChildren().length; i++){
        var beam = this.projectiles.getChildren()[i];
        beam.update();
      }
    }
    shootBeam(){
        var beam = new Beam(this);
    }
    moveSpaceshipManager(){

      if(this.cursorKeys.left.isDown){ // every time the left arrow key is pressed
        this.spaceship.setVelocityX(-gameSettings.spaceshipSpeed); // we adjust the speed of the spaceship with a negative value so it moves to the left
      }else if(this.cursorKeys.right.isDown){ // to move to the right we check if the right key was pressed
        this.spaceship.setVelocityX(gameSettings.spaceshipSpeed); // adjust the speed with a positive value
      }

      if(this.cursorKeys.up.isDown){
        this.spaceship.setVelocityY(-gameSettings.spaceshipSpeed); // up
      }else if(this.cursorKeys.down.isDown){
        this.spaceship.setVelocityY(gameSettings.spaceshipSpeed); // down
      }
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
