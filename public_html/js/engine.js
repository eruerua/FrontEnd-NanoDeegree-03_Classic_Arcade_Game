



var level1 = function () {
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -50);
    }

    for (col = 0; col < 5; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -30);
    }

    ctx.drawImage(Resources.get('images/Ramp South.png'), 5 * 101, -50);

    /*First Row */
    for (col = 0; col <6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 50);
    }
 /*Second Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 125);
    }
    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 130);
    }
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 205);
    }
 /*Third Row */

    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 285);
    }
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/Shadow North.png'), col * 101, 283);
    }
    ctx.drawImage(Resources.get('images/Shadow South West.png'), 300, 205);

/*HOUSE*/
    ctx.drawImage(Resources.get('images/Roof North West.png'), 0 * 101, 240);
    ctx.drawImage(Resources.get('images/Roof North.png'), 1 * 101, 240);
    ctx.drawImage(Resources.get('images/Roof North East.png'), 2 * 101, 240);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 0 * 101, 460);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 2 * 101, 460);
    ctx.drawImage(Resources.get('images/Window Tall.png'), 0 * 101, 420);
    ctx.drawImage(Resources.get('images/Door Tall Closed.png'), 1 * 101, 470);
    ctx.drawImage(Resources.get('images/Window Tall.png'), 2 * 101, 420);
    ctx.drawImage(Resources.get('images/Wood Block.png'), 1 * 101, 365);


    ctx.drawImage(Resources.get('images/Roof South West.png'), 0 * 101, 320);
    ctx.drawImage(Resources.get('images/Roof South.png'), 1 * 101, 320);
    ctx.drawImage(Resources.get('images/Roof South East.png'), 2 * 101, 320);

    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/Shadow South.png'), col * 101, 400);
    }

    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 283);


    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 363);
    }
    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 363);
/*Sixth Row */

    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 444);
    }
    ctx.drawImage(Resources.get('images/Shadow West.png'), 300, 444);

    ctx.drawImage(Resources.get('images/Shadow North.png'), 3 * 101, 467);
    ctx.drawImage(Resources.get('images/Shadow North.png'), 5 * 101, 467);
    ctx.drawImage(Resources.get('images/Wall Block.png'), 3 * 101, 465);
    ctx.drawImage(Resources.get('images/Ramp North.png'), 4 * 101, 487);

    ctx.drawImage(Resources.get('images/Wall Block.png'), 5 * 101, 465);

    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 572);
    }

/*trees*/

    ctx.drawImage(Resources.get('images/Tree Ugly.png'), 505, 175);
    ctx.drawImage(Resources.get('images/Tree Short.png'), 305, 345);

};
var level2 = function () {
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, -50);
    }

    /*First Row */
    for (col = 0; col <6; col++) {
        ctx.drawImage(Resources.get('images/Dirt Block.png'), col * 101, 30);
    }

    /*Second Row */
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 115);
    }
    ctx.drawImage(Resources.get('images/Rock.png'), 3 * 101, 80);
    ctx.drawImage(Resources.get('images/Rock.png'), 4 * 101, 80);

    /*Third Row */
     for (col = 0; col < 2; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 200);
    }
    ctx.drawImage(Resources.get('images/Wall Block.png'), 2*101, 190);

    for (col = 3; col < 5; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 200);
    }
    ctx.drawImage(Resources.get('images/Wall Block.png'), 5*101, 190);

     /*Fourth Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 275);
    }
    for (col = 4; col < 6; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 275);
    }
    ctx.drawImage(Resources.get('images/water-block.png'), 3 * 101, 275);

      /*Fifth Row */
    for (col = 0; col < 3; col++) {
        ctx.drawImage(Resources.get('images/grass-block.png'), col * 101, 355);
    }
    ctx.drawImage(Resources.get('images/Ramp North.png'), 2 * 101, 352);
    for (col = 3; col < 6; col++) {
        ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 355);
    }

    /*Sixth Row */
    for (col = 0; col < 2; col++) {
        ctx.drawImage(Resources.get('images/Shadow South.png'), col * 101, 390);
    }
    for (col = 0; col < 6; col++) {
        ctx.drawImage(Resources.get('images/stone-block.png'), col * 101, 435);
    }

    /*Seventh Row */
    for (col = 0; col < 5; col++) {
       ctx.drawImage(Resources.get('images/water-block.png'), col * 101, 550);
    }
    ctx.drawImage(Resources.get('images/Ramp South.png'), 5 * 101, 515);
};




    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;

    canvas.width = 606;
    canvas.height = 664;



var Engine = (function() {



    $("#canvas").append(canvas);


    function main() {

        var now = Date.now(),
            dt = (now - lastTime) / 1000.0;

        if(newGame.gameRun === true && !newGame.paused && !newGame.gameOver){
        update(dt,now);
        render(now);}

        lastTime = now;
        window.requestAnimationFrame(main);
    };


    function init() {
        reset();
        lastTime = Date.now();
        main();
    }

    function update(dt,now) {

        updateEntities(dt);
        checkCollisions(now);
    }

    function checkCollisions(now){
        if (player.immortal < (now/1000)){
        allEnemies.forEach(function(enemy) {
        if (player.x < enemy.x +  enemy.width  && player.x + player.width  > enemy.x &&
		player.y < enemy.y +  enemy.height && player.y + player.height > enemy.y) {
                   player.colision();
        }
        });
    }
        iteams.forEach(function(item) {

        if (player.x < item.x +  item.width  && player.x + player.width  > item.x &&
		player.y < item.y +  item.height && player.y + player.height > item.y) {
                   item.status="picked";
        }
        });


    }

    function updateEntities(dt) {

        allEnemies.forEach(function(enemy) {
            enemy.update(dt);
        });
        player.update(dt);
        iteams.forEach(function(item) {
            item.update();
        });

        lifeCounter.update();

    }


    function render() {

            /*Background*/
        if(player.level === "level1"){
            level1();
        } else if (player.level === "level2") {
            level2();
        }



        renderEntities();
    }

    function renderEntities() {

        allEnemies.forEach(function(enemy) {
            enemy.render();
        });
        iteams.forEach(function(item) {
            item.render();
        });

        player.render();



        lifeCounter.render();

    };

    function textDrawer (text, x , y) {
        ctx.font = "34px Sigmar One";
        ctx.textAlign = 'center';
        ctx.strokeStyle = "black";
        ctx.lineWidth = 3;
        ctx.strokeText(text, x, y);
        ctx.fillStyle = "white";
        ctx.fillText(text, x, y);
    }



    function reset() {

        if (!newGame.gameRun || newGame.paused === true){
        textDrawer ("Press SPACE to start",canvas.width/2,canvas.height/2);
    }
        if (newGame.gameOver === true){
            imgData = ctx.getImageData(0,0, canvas.width, canvas.height);
            for (var i=0;i<imgData.data.length;i+=4) {
                var red = imgData.data[i];
                var green = imgData.data[i+1];
                var blue = imgData.data[i+2];
                var grey =  0.2126 * red + 0.7152 * green + 0.0722 * blue;
                imgData.data[i] = grey;
                imgData.data[i+1] = grey;
                imgData.data[i+2] = grey;
        }

        ctx.putImageData(imgData,0,0);
        textDrawer ("GAME OVER!",canvas.width/2,canvas.height/2);
        textDrawer ("Press Enter to start again!",canvas.width/2,(canvas.height/2)+40);
    }

        if (newGame.gameRun === true){
        window.cancelAnimationFrame(reset);
    }


    window.requestAnimationFrame(reset);
    }


    Resources.load([
        'images/stone-block.png',
        'images/water-block.png',
        'images/grass-block.png',
        'images/char-pink-girl.png',
        'images/Ramp South.png',
        'images/Ramp East.png',
        'images/Ramp North.png',
        'images/Dirt Block.png',
        'images/Ramp West.png',
        'images/Rock.png',
        'images/Wall Block.png',
        'images/enemy-bug-left.png',
        'images/enemy-bug.png',
        'images/Heart.png',
        'images/Key.png',
        'images/char-pink-girl-holding.png',
        'images/char-pink-girl-immortal.png',
        'images/Roof North East.png',
        'images/Roof North West.png',
        'images/Roof South East.png',
        'images/Roof South West.png',
        'images/Roof South.png',
        'images/Window Tall.png',
        'images/Door Tall Closed.png',
        'images/Roof North.png',
        'images/Wood Block.png',
        'images/Shadow North.png',
        'images/Shadow West.png',
        'images/Shadow South West.png',
        'images/Tree Short.png',
        'images/Tree Tall.png',
        'images/Tree Ugly.png',
        'images/Selector.png',
        'images/Shadow South.png'

    ]);
    Resources.onReady(init);


});

$("#play").click(function() {
    Engine();
    $("#play").hide();
    $(".menu").css("margin-top",0);
});

$("#instruc").click(function() {
    $("#instrucList").slideToggle("slow");
});


