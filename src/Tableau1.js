
class Tableau1 extends Phaser.Scene{

    /**Préchargement des assets*/
    preload(){
        //*****Les images*****//
        this.load.image('mgm', 'Images/mgm.jpg');
        this.load.image('droopyP','Images/droopy.png');
        this.load.image('red-hotP','Images/red-hot.png');
        this.load.image('bipbipP','Images/roadrunner.png');
        this.load.image('tomP','Images/tom-fly.png');
        this.load.image('censureP','Images/censored.jpg');
        this.load.image('pauvP','Images/pauvpoire.png');


        //*****Les sons et fond sonore*****//
        this.load.audio('droopyA','fichiers-audio-video/audio/Droopy.MP3');
        this.load.audio('censureA','fichiers-audio-video/audio/censure.MP3');
        this.load.audio('theme','fichiers-audio-video/audio/theme.MP3');
        this.load.audio('bipbipA','fichiers-audio-video/audio/beepbeep.MP3');
        this.load.audio('pauvA','fichiers-audio-video/audio/pauvpoire.MP3');
        this.load.audio('siffle','fichiers-audio-video/audio/sifflement-2.MP3');
        this.load.audio('tom-scream','fichiers-audio-video/audio/vidaudio/tom-scream.MP3');

        this.load.audio('tom-scream3A','fichiers-audio-video/audio/vidaudio/tom-scream3.MP3');
        this.load.audio('birdsA','fichiers-audio-video/audio/vidaudio/birds.MP3');
        this.load.audio('boomA','fichiers-audio-video/audio/vidaudio/boom.MP3');
        this.load.audio('loupA','fichiers-audio-video/audio/vidaudio/cri-du-loup.MP3');
        this.load.audio('dog-smashA','fichiers-audio-video/audio/vidaudio/dog-smash.MP3');
        this.load.audio('gunshotA','fichiers-audio-video/audio/vidaudio/Gunshot.MP3');
        this.load.audio('im-dying-againA','fichiers-audio-video/audio/vidaudio/im-dying-again.MP3');
        this.load.audio('koi29A','fichiers-audio-video/audio/vidaudio/koi29.MP3');
        this.load.audio('main-dans-lsacA','fichiers-audio-video/audio/vidaudio/main-dans-lsac.MP3');
        this.load.audio('mgmA','fichiers-audio-video/audio/vidaudio/mgm.MP3');
        this.load.audio('moi-cest-rintintinA','fichiers-audio-video/audio/vidaudio/moi-cest-rintintin.MP3');
        this.load.audio('quietA','fichiers-audio-video/audio/vidaudio/quiet.MP3');
        this.load.audio('roulementA','fichiers-audio-video/audio/vidaudio/roulement2.MP3');
        this.load.audio('shut-upA','fichiers-audio-video/audio/vidaudio/shut-up2.MP3');
        this.load.audio('silenceA','fichiers-audio-video/audio/vidaudio/silence.MP3');
        this.load.audio('spike-laughA','fichiers-audio-video/audio/vidaudio/spike-laugh.MP3');
        this.load.audio('spike-roarA','fichiers-audio-video/audio/vidaudio/spike-roar.MP3');
        this.load.audio('tom-absA','fichiers-audio-video/audio/vidaudio/tom-abs.MP3');
        this.load.audio('tom-scream4A','fichiers-audio-video/audio/vidaudio/tom-scream4.MP3');
        this.load.audio('up-downA','fichiers-audio-video/audio/vidaudio/up-down.MP3');
        this.load.audio('tom-smashA','fichiers-audio-video/audio/vidaudio/tom-smash.MP3');
        this.load.audio('what-am-i-doingA','fichiers-audio-video/audio/vidaudio/what-am-i-doing.MP3');


        //*****Les videos*****//
        this.load.video('tom-scream3P','fichiers-audio-video/videos/tom-scream3.MP4','loadeddata', false, true);
        this.load.video('birdsP','fichiers-audio-video/videos/birds.MP4','loadeddata', false, true);
        this.load.video('boomP','fichiers-audio-video/videos/boom.mp4','loadeddata', false, true);
        this.load.video('loupP','fichiers-audio-video/videos/cri-du-loup.mp4','loadeddata', false, true);
        this.load.video('dog-smashP','fichiers-audio-video/videos/dog-smash.MP4','loadeddata', false, true);
        this.load.video('gunshotP','fichiers-audio-video/videos/Gunshot.mp4','loadeddata', false, true);
        this.load.video('im-dying-againP','fichiers-audio-video/videos/im-dying-again.MP4','loadeddata', false, true);
        this.load.video('koi29P','fichiers-audio-video/videos/koi29.MP4','loadeddata', false, true);
        this.load.video('main-dans-lsacP','fichiers-audio-video/videos/main-dans-lsac.MP4','loadeddata', false, true);
        this.load.video('mgmP','fichiers-audio-video/videos/mgm.mp4','loadeddata', false, true);
        this.load.video('moi-cest-rintintinP','fichiers-audio-video/videos/moi-cest-rintintin.MP4','loadeddata', false, true);
        this.load.video('quietP','fichiers-audio-video/videos/quiet.MP4','loadeddata', false, true);
        this.load.video('roulementP','fichiers-audio-video/videos/roulement2.MP4','loadeddata', false, true);
        this.load.video('shut-upP','fichiers-audio-video/videos/shut-up2.MP4','loadeddata', false, true);
        this.load.video('silenceP','fichiers-audio-video/videos/silence.mp4','loadeddata', false, true);
        this.load.video('spike-laughP','fichiers-audio-video/videos/spike-laugh.MP4','loadeddata', false, true);
        this.load.video('spike-roarP','fichiers-audio-video/videos/spike-roar.MP4','loadeddata', false, true);
        this.load.video('tom-absP','fichiers-audio-video/videos/tom_abs.MP4','loadeddata', false, true);
        this.load.video('tom-scream4P','fichiers-audio-video/videos/tom-scream4.MP4','loadeddata', false, true);
        this.load.video('up-downP','fichiers-audio-video/videos/up-down.MP4','loadeddata', false, true);
        this.load.video('tom-smashP','fichiers-audio-video/videos/tom-smash.MP4','loadeddata', false, true);
        this.load.video('what-am-i-doingP','fichiers-audio-video/videos/what-am-i-doing.MP4','loadeddata', false, true);

    }

    create(){
        /**Fond graphique**/

        this.background=this.add.container(0,0);

        let mgm=this.add.image(0,0,'mgm').setOrigin(0,0);
        this.background.add(mgm);


        /*************************Appel d'image***************************/
        this.appears=this.add.container(0,0);

        this.droopyP = this.add.sprite(50, 50, 'droopyP').setOrigin(0,0);
        this.droopyP.visible=false
        this.anims.create({
            key: 'droopy',
            hideOnComplete: true,
            frames: [
                {key:'droopyP'},
            ],
            frameRate: 1,
            repeat: 2,
        });

        this.beepbeepP = this.add.sprite(200, 100, 'bipbipP').setOrigin(0,0);
        this.beepbeepP.setScale(0.4);
        this.beepbeepP.visible=false
        this.anims.create({
            key: 'bipbipP',
            hideOnComplete: true,
            frames: [
                {key:'bipbipP'},
            ],
            frameRate: 2,
            repeat: 1,
        });

        this.censureP = this.add.sprite(100, 200, 'censureP').setOrigin(0,0);
        this.censureP.setScale(0.5);
        this.censureP.visible=false
        this.anims.create({
            key: 'censureP',
            hideOnComplete: true,
            frames: [
                {key:'censureP'},
            ],
            frameRate: 2,
            repeat: 1,
        });

        this.pauvP = this.add.sprite(100, 200, 'pauvP').setOrigin(0,0);
        this.pauvP.setScale(0.6)
        this.pauvP.visible=false
        this.anims.create({
            key: 'pauvP',
            hideOnComplete: true,
            frames: [
                {key:'pauvP'},
            ],
            frameRate: 2,
            repeat: 1,
        });

        this.redHotP = this.add.sprite(100, 200, 'red-hotP').setOrigin(0,0);
        this.redHotP.setScale(0.7);
        this.redHotP.visible=false
        this.anims.create({
            key: 'redHotP',
            hideOnComplete: true,
            frames: [
                {key:'red-hotP'},
            ],
            frameRate: 2,
            repeat: 2,
        });

        this.tomP = this.add.sprite(100, 200, 'tomP').setOrigin(0,0);
        this.tomP.setScale(0.9);
        this.tomP.visible=false
        this.anims.create({
            key: 'tomP',
            hideOnComplete: true,
            frames: [
                {key:'tomP'},
            ],
            frameRate: 1,
            repeat: 1,
        });

        /************************************** Appel des sons seuls **********************************/

        this.theme = this.sound.add('theme');

        this.droopyA = this.sound.add('droopyA');
        this.censureA = this.sound.add('censureA');
        this.beepbeepA = this.sound.add('bipbipA');
        this.redHotA = this.sound.add('siffle');
        this.tomA = this.sound.add('tom-scream');
        this.pauvA = this.sound.add('pauvA');

        /************************************ Appel des sons de vidéos *********************************/

        this.tomScream3A = this.sound.add('tom-scream3A');
        this.birdsA = this.sound.add('birdsA');
        this.boomA = this.sound.add('boomA');
        this.loupA = this.sound.add('loupA');
        this.dogSmashA = this.sound.add('dog-smashA');
        this.gunshotA = this.sound.add('gunshotA');
        this.dyingA = this.sound.add('im-dying-againA');
        this.wassupA = this.sound.add('koi29A');
        this.lsacA = this.sound.add('main-dans-lsacA');
        this.mgmA = this.sound.add('mgmA');
        this.rintintinA = this.sound.add('moi-cest-rintintinA');
        this.quietA = this.sound.add('quietA');
        this.roulementA = this.sound.add('roulementA');
        this.shutUpA = this.sound.add('shut-upA');
        this.silenceA = this.sound.add('silenceA');
        this.laughA = this.sound.add('spike-laughA');
        this.roarA = this.sound.add('spike-roarA');
        this.tomAbsA = this.sound.add('tom-absA');
        //this.tomScream4A = this.sound.add('tom-scream4A');
        this.tomSmashA = this.sound.add('tom-smashA');
        this.upDownA = this.sound.add('up-downA');
        this.whatA = this.sound.add('what-am-i-doingA');

        /************************************ Appel des vidéos ************************************/

        this.clip = this.add.video(500,200,'tom-scream3P');
        this.clip.setScale(0.5);
        this.clip.visible=false;

        this.birdsP = this.add.video(600,300,'birdsP');
        this.birdsP.setScale(0.5);
        this.birdsP.visible=false;

        this.boomP = this.add.video(600,300,'boomP');
        this.boomP.setScale(0.5);
        this.boomP.visible=false;

        this.loupP = this.add.video(100,250,'loupP');
        this.loupP.setScale(0.5);
        this.loupP.visible=false;

        this.dogSmashP = this.add.video(650,400,'dog-smashP');
        this.dogSmashP.setScale(0.5);
        this.dogSmashP.visible=false;

        this.gunshotP = this.add.video(600,450,'gunshotP');
        this.gunshotP.setScale(0.5);
        this.gunshotP.visible=false;

        this.dyingP = this.add.video(350,400,'im-dying-againP');
        this.dyingP.setScale(0.5);
        this.dyingP.visible=false;

        this.wassupP = this.add.video(200,300,'koi29P');
        this.wassupP.setScale(0.5);
        this.wassupP.visible=false;

        this.lsacP = this.add.video(650,100,'main-dans-lsacP');
        this.lsacP.setScale(0.5);
        this.lsacP.visible=false;

        this.mgmP = this.add.video(512,290,'mgmP');
        this.mgmP.visible=false;

        this.rintintinP = this.add.video(400,350,'moi-cest-rintintinP');
        this.rintintinP.setScale(0.5);
        this.rintintinP.visible=false;

        this.quietP = this.add.video(200,300,'quietP');
        this.quietP.setScale(0.5);
        this.quietP.visible=false;

        this.roulementP = this.add.video(300,200,'roulementP');
        this.roulementP.setScale(0.5);
        this.roulementP.visible=false;

        this.shutUpP = this.add.video(400,400,'shut-upP');
        this.shutUpP.setScale(0.5);
        this.shutUpP.visible=false;

        this.silenceP = this.add.video(600,150,'silenceP');
        this.silenceP.setScale(0.5);
        this.silenceP.visible=false;

        this.laughP = this.add.video(550,250,'spike-laughP');
        this.laughP.setScale(0.5);
        this.laughP.visible=false;

        this.roarP = this.add.video(300,450,'spike-roarP');
        this.roarP.setScale(0.5);
        this.roarP.visible=false;

        this.tomAbsP = this.add.video(200,350,'tom-absP');
        this.tomAbsP.setScale(0.5);
        this.tomAbsP.visible=false;

        //this.tomScream4P = this.add.video(350,250,'tom-scream4P');
        //this.tomScream4P.setScale(0.5);
        //this.tomScream4P.visible=false;

        this.tomSmashP = this.add.video(550,150,'tom-smashP');
        this.tomSmashP.setScale(0.5);
        this.tomSmashP.visible=false;

        this.upDownP = this.add.video(350,350,'up-downP');
        this.upDownP.setScale(0.5);
        this.upDownP.visible=false;

        this.whatP = this.add.video(450,450,'what-am-i-doingP');
        this.whatP.setScale(0.5);
        this.whatP.visible=false;


        this.initKeyboard();
    }


    initKeyboard(){
        let me=this
        this.input.keyboard.on('keydown', function(kevent)
        {
            switch (kevent.keyCode)
            {
                case Phaser.Input.Keyboard.KeyCodes.A:
                    console.log("droopy");
                    me.droopyA.play();
                    me.droopyP.visible=true;
                    me.droopyP.play('droopy');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Z:
                    console.log("tom-jump");
                    me.clip.visible=true;
                    me.tomScream3A.play();
                    me.clip.play();
                    me.time.addEvent({
                        delay: 4000,
                        callback: () => {
                            me.clip.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.E:
                    me.censureP.play('censureP');
                    me.censureP.visible=true;
                    me.censureA.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.R:
                    console.log("birds");
                    me.birdsP.visible=true;
                    me.birdsA.play();
                    me.birdsP.play();
                    me.time.addEvent({
                        delay: 2500,
                        callback: () => {
                            me.birdsP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.T:
                    console.log("boom");
                    me.boomP.visible=true;
                    me.boomA.play();
                    me.boomP.play();
                    me.time.addEvent({
                        delay: 2000,
                        callback: () => {
                            me.boomP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Y:
                    console.log("cri-loup");
                    me.loupP.visible=true;
                    me.loupA.play();
                    me.loupP.play();
                    me.time.addEvent({
                        delay: 2500,
                        callback: () => {
                            me.loupP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.U:
                    console.log("dog-smash");
                    me.dogSmashP.visible=true;
                    me.dogSmashA.play();
                    me.dogSmashP.play();
                    me.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            me.dogSmashP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.I:
                    console.log("gunshot");
                    me.gunshotP.visible=true;
                    me.gunshotA.play();
                    me.gunshotP.play();
                    me.time.addEvent({
                        delay: 700,
                        callback: () => {
                            me.gunshotP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.O:
                    console.log("im-dying-again");
                    me.dyingP.visible=true;
                    me.dyingA.play();
                    me.dyingP.play();
                    me.time.addEvent({
                        delay: 3500,
                        callback: () => {
                            me.dyingP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.P:
                    console.log("sucker");
                    me.pauvP.play('pauvP');
                    me.pauvP.visible=true;
                    me.pauvA.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.Q:
                    console.log("red-hot");
                    me.redHotP.play('redHotP');
                    me.redHotP.visible=true;
                    me.redHotA.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.S:
                    console.log("quoi-de-neuf-docteur");
                    me.wassupP.visible=true;
                    me.wassupA.play();
                    me.wassupP.play();
                    me.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            me.wassupP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.D:
                    console.log("la-main-dans-lsac");
                    me.lsacP.visible=true;
                    me.lsacA.play();
                    me.lsacP.play();
                    me.time.addEvent({
                        delay: 2500,
                        callback: () => {
                            me.lsacP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.F:
                    console.log("coi-cest-rintintin");
                    me.rintintinP.visible=true;
                    me.rintintinA.play();
                    me.rintintinP.play();
                    me.time.addEvent({
                        delay: 3500,
                        callback: () => {
                            me.rintintinP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.G:
                    console.log("quiet");
                    me.quietP.visible=true;
                    me.quietA.play();
                    me.quietP.play();
                    me.time.addEvent({
                        delay: 900,
                        callback: () => {
                            me.quietP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.H:
                    console.log("tom-pain");
                    me.tomP.play('tomP');
                    me.tomP.visible=true;
                    me.tomA.play();
                    break;
                case Phaser.Input.Keyboard.KeyCodes.J:
                    console.log("roulement-de-tambours");
                    me.roulementP.visible=true;
                    me.roulementA.play();
                    me.roulementP.play();
                    me.time.addEvent({
                        delay: 2500,
                        callback: () => {
                            me.roulementP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.K:
                    console.log("shut-up");
                    me.shutUpP.visible=true;
                    me.shutUpA.play();
                    me.shutUpP.play();
                    me.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            me.shutUpP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.L:
                    console.log("silence");
                    me.silenceP.visible=true;
                    me.silenceA.play();
                    me.silenceP.play();
                    me.time.addEvent({
                        delay: 1500,
                        callback: () => {
                            me.silenceP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.M:
                    console.log("rire-de-spike");
                    me.laughP.visible=true;
                    me.laughA.play();
                    me.laughP.play();
                    me.time.addEvent({
                        delay: 2000,
                        callback: () => {
                            me.laughP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.W:
                    console.log("rugissement-de-spike");
                    me.roarP.visible=true;
                    me.roarA.play();
                    me.roarP.play();
                    me.time.addEvent({
                        delay: 1000,
                        callback: () => {
                            me.roarP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.X:
                    console.log("tom-frein-ABS");
                    me.tomAbsP.visible=true;
                    me.tomAbsA.play();
                    me.tomAbsP.play();
                    me.time.addEvent({
                        delay: 1500,
                        callback: () => {
                            me.tomAbsP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.C:
                    console.log("up-and-down");
                    me.upDownP.visible=true;
                    me.upDownA.play();
                    me.upDownP.play();
                    me.time.addEvent({
                        delay: 1500,
                        callback: () => {
                            me.upDownP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.V:
                    console.log("tom-smashing");
                    me.tomSmashP.visible=true;
                    me.tomSmashA.play();
                    me.tomSmashP.play();
                    me.time.addEvent({
                        delay: 1500,
                        callback: () => {
                            me.tomSmashP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.B:
                    console.log("beepbeep");
                    me.beepbeepA.play();
                    me.beepbeepP.visible=true;
                    me.beepbeepP.play('bipbipP');
                    break;
                case Phaser.Input.Keyboard.KeyCodes.N:
                    console.log("what-am-i-doing");
                    me.whatP.visible=true;
                    me.whatA.play();
                    me.whatP.play();
                    me.time.addEvent({
                        delay: 1500,
                        callback: () => {
                            me.whatP.visible=false
                        }
                    })
                    break;

                case Phaser.Input.Keyboard.KeyCodes.ENTER:
                    console.log("theme-and-intro")
                    me.theme.play();
                    me.mgmP.visible=true;
                    me.mgmA.play();
                    me.mgmP.play();
                    me.time.addEvent({
                        delay: 7000,
                        callback: () => {
                            me.mgmP.visible=false
                        }
                    })
                    break;
                case Phaser.Input.Keyboard.KeyCodes.SPACE:
                    console.log("theme-stop")
                    me.theme.stop();
                    break;
            }
        });

    }


}