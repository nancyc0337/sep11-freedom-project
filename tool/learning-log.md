# Tool Learning Log

## Tool: **Phaser**

## Project: **X**

### 10/20/2024: Setting Up & Scenes

#### Part 1: Setting Up
Link to the video: [Part 1 Setting Up](https://youtu.be/frRWKxB9Hm0?si=TihtknpL4Fswe1w1)

All About Phaser Notes:
* Phaser uses javascript to create games very quickly
* is very versatile
* can make different kinds of 2D games

My steps to download Phaser:
1) I downloaded Phaser from [phaser.io/download/stable](phaser.io/download/stable)
2) I only downloaded the phaser.min.js file
![alt text](image-1.png)
3) I dragged the file into my IDE when it's done downloading

Notes For Coding With Phaser:
1) To view my codes/see the output or result, I use `http-server` and go to index.html file.
2) In the beginning, I should be seeing a black screen. That black screen is the game canvas. It's where the magic happens, where I can see my game.
3) I can use `inspect` and go to the console to see if there's any output errors.

#### Creating & Checking

Link to the Website: https://phaser.io/tutorials/getting-started-phaser3/part5

Link to the Tinkering: https://github.com/nancyc0337/sep11-freedom-project/tree/main/tool/tinkering-1a

I created an index.html file, copied and pasted the code in it. When I tested it with `http-server`, it shows:
![alt text](image-2.png)

#### Part 2: Scenes

Link to the Video: [Part 2 Phaser Scenes](https://youtu.be/gFXx7lgxK9A?si=AdQ-MX8mEFOlB-Ix)

Link to the Tinkering: https://github.com/nancyc0337/sep11-freedom-project/tree/main/tool/tinkering-1b

Notes:
* `width` changes the x-axis of the shape
* `height` changes the y-axis of the shape
* `backgroundColor` changes the color of the background

Scene Notes:
* Phaser use scenes to organize its content
* scenes are places where the elements of the game live in
* I can create as many scenes as I want!
* I can have several scenes running at the same time in the same game!

Types of Functions that controlls the scenes:
* `INIT()` function is used to prepare data
* `PRELOAD()` function is used to load the music and images into memory
* `CREATE()` function is used to add the objects to the game
* `UPDATE()` function is an update, which is a loop that runs constantly

##### A-ha moments:
When I typed the code into the files scene1.js and scene2.js, and tried to switch scenes, the result didn't change. It just stayed as the 1st scene. After I watched the video again, I saw the problem. I didn't type `this.scene.start("playGame");` in scene1.js. I learned that this code helps the game jump from scene1 to scene2. Scene1 shows red background with white/transparent text saying "Loading game...". Scene 2 shows red background with "font: 25px, Arial" yellow text saying "Playing game".

##### Next Step
I will learn [Part 3 Game Objects Images](https://youtu.be/l65rEEdgURA?si=spl8FgUaZ0yzJNWr).

### 10/27/2024:

#### Part 3: Game Objects Images

Link to the Video: https://youtu.be/l65rEEdgURA?si=1GlWWAUG16tk_4MT

Link to the Tinkering: https://github.com/nancyc0337/sep11-freedom-project/tree/main/tool/tinkering-2a

I tried to use a different image/background from the video.

The challenge that I had was uploading the background. At first I didn't see the background when I tried `http-server`. But after looking and tinkering with the codes, I see that the files game.js, scene1.js and scene2.js was the problem.

I learned to pay attention to detail, especially to my codes or I will not see my output/result that I wanted.

Notes/A-ha moment:

* `this.load.image("key","url");`

KEY: A string to identify the image

URL: A string path to the image file

* `this.add.image(0,0,"background");`

POSITION: the x and y coordinates for the image

KEY: the name of image defined when loaded

##### Next Step
I will learn [Part 4 Moving Images](https://youtu.be/jVlNZgX5fV8?si=8DX8YCn0WSZ5xWjU).

### 00/00/00

<!--
* Links you used today (websites, videos, etc)
* Things you tried, progress you made, etc
* Challenges, a-ha moments, etc
* Questions you still have
* What you're going to try next
-->
