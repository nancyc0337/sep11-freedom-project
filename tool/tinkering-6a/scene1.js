class scene1 extends Phaser.Scene {
    constructor() {
      super("bootGame");
    }

    preload(){
      this.load.image("background", "assets/images/background.png");
      //
      this.load.spritesheet("ship", "assets/spritesheets/ship.png",{
        frameWidth: 16,
        frameHeight: 16
      });
      this.load.spritesheet("ship2", "assets/spritesheets/ship2.png",{
        frameWidth: 32,
        frameHeight: 16
      });
      this.load.spritesheet("ship3", "assets/spritesheets/ship3.png",{
        frameWidth: 32,
        frameHeight: 32
      });
      this.load.spritesheet("explosion", "assets/spritesheets/explosion.png",{
        frameWidth: 16,
        frameHeight: 16
      });
      // 2.1 load the spritesheet
      this.load.spritesheet("power-up", "assets/spritesheets/power-up.png",{
        frameWidth: 16,
        frameHeight: 16
      });
      this.load.spritesheet("player", "assets/spritesheets/player.png",{
        frameWidth: 16,
        frameHeight: 24
      });
    }

    create() {
      this.background = this.add.tileSprite(0, 0, config.width, config.height, "background");
      this.background.setOrigin(0, 0);

      this.ship1 = this.add.sprite(config.width / 2 - 50, config.height / 2, "ship");
      this.ship2 = this.add.sprite(config.width / 2, config.height / 2, "ship2");
      this.ship3 = this.add.sprite(config.width / 2 + 50, config.height / 2, "ship3");


      this.anims.create({
        key: "ship1_anim",
        frames: this.anims.generateFrameNumbers("ship"),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "ship2_anim",
        frames: this.anims.generateFrameNumbers("ship2"),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "ship3_anim",
        frames: this.anims.generateFrameNumbers("ship3"),
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

      // POWER UPS

      //2.1 Two Animations for the power ups
      this.anims.create({
        key: "red",
        frames: this.anims.generateFrameNumbers("power-up", {
          start: 0,
          end: 1
        }),
        frameRate: 20,
        repeat: -1
      });
      this.anims.create({
        key: "gray",
        frames: this.anims.generateFrameNumbers("power-up", {
          start: 2,
          end: 3
        }),
        frameRate: 20,
        repeat: -1
      });

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

      this.add.text(20, 20, "Loading game...");
      this.scene.start("playGame");
    }
  }
