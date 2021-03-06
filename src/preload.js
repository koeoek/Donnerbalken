var preload = function(game){}

preload.prototype = {
	preload: function(){ 
        //Tilemap and Tileset preloading
        this.game.load.tilemap('tilemap_world1', 'assets/images/sd_world1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('tilemap_world2', 'assets/images/sd_world2.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('tilemap_world3', 'assets/images/sd_world3.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('tilemap_world4', 'assets/images/sd_world4.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('main_tiles', 'assets/images/main_tileset.png');
        this.game.load.image('decoration', 'assets/images/decoration.png');

        //Player and Enemys (Characters) preloading
        this.game.load.spritesheet('dude', 'assets/images/player.png', 32, 48);
        this.game.load.spritesheet('enemy1', 'assets/images/opponent_dude.png', 32, 48);
        this.game.load.spritesheet('enemy2', 'assets/images/opponent_bat.png', 48, 48);
        this.game.load.spritesheet('enemy3', 'assets/images/opponent_skeleton.png', 22,48);
        this.game.load.spritesheet('enemy4', 'assets/images/opponent_wolf.png', 50, 47);

        //Background preloadig
        this.game.load.image('background1', 'assets/images/background1.jpg');
        this.game.load.image('background2', 'assets/images/background2.jpg');
        this.game.load.image('background3', 'assets/images/background3.jpg');
        this.game.load.image('background4', 'assets/images/background4.jpg');

        //Star preloadig
        this.game.load.image('star', 'assets/images/star.png');

        //Scripts preloading
        this.game.load.script('filterX', 'src/BlurX.js'); //Blur Filter
        this.game.load.script('filterY', 'src/BlurY.js'); //Blur Filter

        //Standardimages preloading
        this.game.load.image('pill', 'assets/images/pill.png');


        //Fearbar and Status
        this.game.load.spritesheet('fearBar', 'assets/images/fearbar.png');
        this.game.load.spritesheet('fearBar_border', 'assets/images/fearbar_border.png');
        this.game.load.spritesheet('feartimer', 'assets/images/feartimer.png');
        this.game.load.spritesheet('good_luck', 'assets/images/good_luck.png');
   		
        //Menu
        this.game.load.image('logo', 'assets/images/silent_dust_logo.jpg');
        this.game.load.image('logo_gameover_fall', 'assets/images/silent_dust_gameover_fall.jpg');
        this.game.load.image('logo_gameover_time', 'assets/images/silent_dust_gameover_time.jpg');
        this.game.load.image('logo_pause', 'assets/images/silent_dust_pause.jpg');
        this.game.load.image('logo_loading', 'assets/images/silent_dust_loading.jpg');
        this.game.load.image('logo_instruction', 'assets/images/silent_dust_instruction.jpg');
        this.game.load.image('buttonimg', 'assets/images/buttonimg.png');
        this.game.load.image('logo_level', 'assets/images/silent_dust_level.jpg');
        this.game.load.image('level1', 'assets/images/level1.png');
        this.game.load.image('level1_sw', 'assets/images/level1_sw.png');
        this.game.load.image('level2', 'assets/images/level2.png');
        this.game.load.image('level2_sw', 'assets/images/level2_sw.png');
        this.game.load.image('level3', 'assets/images/level3.png');
        this.game.load.image('level3_sw', 'assets/images/level3_sw.png');
        this.game.load.image('level4', 'assets/images/level4.png');
        this.game.load.image('level4_sw', 'assets/images/level4_sw.png');
        this.game.load.image('logo_blur', 'assets/images/silent_dust_blur.jpg');
        this.game.load.image('outro_text', 'assets/images/outro_text.png');

        //Emitter
        this.game.load.spritesheet('rain', 'assets/images/rain.png', 17, 17);
        this.game.load.image('leaf', 'assets/images/leaf2.png');

        //Items
        this.game.load.image('pill', 'assets/images/pill.png');

        //Sounds
        soundtrack = this.game.load.audio('soundtrack', 'assets/sound/soundtrack.mp3');
        steps = this.game.load.audio('steps', 'assets/sound/steps.wav');
        wasted = this.game.load.audio('wasted', 'assets/sound/wasted.wav'); 
        zombie = this.game.load.audio('zombie', 'assets/sound/zombie.wav');
        click = this.game.load.audio('click', 'assets/sound/click.wav');
        pauseSound = this.game.load.audio('pauseSound', 'assets/sound/pauseSound.wav'); 
        swallow = this.game.load.audio('swallow', 'assets/sound/swallow.wav');
        bat = this.game.load.audio('bat', 'assets/sound/bats.wav');
        skeletonSound = this.game.load.audio('skeletonSound', 'assets/sound/skeletonSound.wav');
        wolf = this.game.load.audio('wolf', 'assets/sound/wolf.wav');
        outro = this.game.load.audio('outro', 'assets/sound/outro.mp3');


        //Levelend
        this.game.load.image('star', 'assets/images/star.png');

        //Globale Einstellungen
        currentLevel = 0;
        level1Finished = true;
        level2Finished = false;
        level3Finished = false;
        level4Finished = false;

        background_sound = this.game.sound.play('soundtrack', 1, 1, true);
        
        


	},

  	create: function(){
        //Start the Soundtrack
        loadingImg = this.game.add.image(0, 0, 'logo_loading');

	},

    update: function() {
        if(background_sound.isDecoding) {
            loadingImg.alpha = 1;
        } else {
            loadingImg.alpha = 0;
            this.game.state.start("Menu");
        }
    }
}