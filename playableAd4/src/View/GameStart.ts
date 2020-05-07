class GameStart extends eui.Component implements eui.UIComponent {
    private constructor() {
        super();
        // this.skinName = GameStartSkin;
        this.skinName = GameStartDevSkin;
        // this.loadVideo();
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }
    //单例写法
    private static _instance: GameStart;
    public static get instance(): GameStart {
        if (!this._instance) {
            this._instance = new GameStart();
        }
        return this._instance;
    }

    private kGrpMain: eui.Group;
    private kGrpVideo: eui.Group;
    private kGrpShow: eui.Group;

    private kImgDo: eui.Image;
    private kImgUpgrade: eui.Image;
    private kImgBg: eui.Image;
    private kImgMask: eui.Rect;
    private _video: egret.Video;
    private systemArr: particle.ParticleSystem[] = [];
    private mcArr: egret.MovieClip[] = [];

    private initUI() {
        //图片base64赋值
        this.kImgBg.source = start_poster;
        this.kImgDo.source = main_do;
        this.kImgUpgrade.source = main_upgrade;

        this.playStartAni();
        // this.setTimeCallBack(3000,this.playStartAni.bind(this));
        this.addEvents();
    }

    private async playStartAni() {
        // this._video.close();

        let system1 = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpVideo, smJson1, sm1, 330, 300);
        system1.scaleX = system1.scaleY = 0.7;
        system1.alpha = 0.5

        let system2 = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpVideo, smJson1, sm1, 240, 420);
        system2.scaleX = system2.scaleY = 0.7;
        system2.alpha = 0.5

        let system3 = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpVideo, smJson1, sm1, 380, 420);
        system3.scaleX = system3.scaleY = 0.7;
        system3.alpha = 0.5


        // let system4 = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpVideo,ballJson,ballParticle,300,80);
        // let system5 = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpVideo,ballJson,ballParticle,500,80);
        // let system6 = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpVideo,ballJson,ballParticle,700,80);
        // let system7 = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpVideo,ballJson,ballParticle,900,80);
        let s1 = <egret.MovieClip>await McManger.instance.getMcAtH5('fire', fireJson, fire);
        let s2 = <egret.MovieClip>await McManger.instance.getMcAtH5('fire', fireJson, fire);
        let s3 = <egret.MovieClip>await McManger.instance.getMcAtH5('fire', fireJson, fire);
        let s4 = <egret.MovieClip>await McManger.instance.getMcAtH5('fire', fireJson, fire);
        s1.gotoAndPlay(0, -1);
        s2.gotoAndPlay(0, -1);
        s3.gotoAndPlay(0, -1);
        s4.gotoAndPlay(0, -1);
        s1.scaleX = s1.scaleY = s2.scaleX = s2.scaleY = s3.scaleX = s3.scaleY = s4.scaleX = s4.scaleY = 0.8;

        this.systemArr.push(system1, system2, system3);
        this.mcArr.push(s1, s2, s3, s4);
        s1.frameRate = s2.frameRate = s3.frameRate = s4.frameRate = 8;
        s1.x = 270; s2.x = 470; s3.x = 660; s4.x = 850;
        s1.y = s2.y = s3.y = s4.y = 30;
        this.kGrpVideo.addChild(s1);
        this.kGrpVideo.addChild(s2);
        this.kGrpVideo.addChild(s3);
        this.kGrpVideo.addChild(s4);

        this.kImgBg.cacheAsBitmap = true;
        // let filters = [new egret.GlowFilter(0xff0000,1,100,100,3,egret.BitmapFilterQuality.HIGH,true)];
        // let t = new egret.Timer(200,15);
        // t.start();
        // t.addEventListener(egret.TimerEvent.TIMER,()=>{
        //     this.kImgBg.filters = this.kImgBg.filters?undefined:filters;
        // },this);

        this.setTimeCallBack(3000, () => {
            this.kGrpShow.visible = true;
            this.kImgMask.visible = true;
            this.kGrpShow.scaleX = this.kGrpShow.scaleY = 0;
            egret.Tween.get(this.kGrpShow).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(() => {
                egret.Tween.get(this.kImgDo, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
                egret.Tween.get(this.kImgUpgrade, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
            });
        });
    }

    private addEvents() {
        // this._video.once(egret.Event.COMPLETE, ()=>{this._video.play();SoundManager.instance.playBg(SoundConst.bgm2);}, this);
        // this._video.once(egret.Event.ENDED,()=>{this.playStartAni()},this);
        this.kImgDo.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        this.kImgUpgrade.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
    }

    private loadVideo() {
        this._video = new egret.Video();;
        this._video.fullscreen = false;
        this._video.width = 1280;
        this._video.height = 720;
        // this._video.load(start);
        this._video.volume = 0;
        this._video.poster = start_poster;
        this.kGrpVideo.addChild(this._video);
    }

    private async openGameMain() {
        this.clean();
        SoundManager.instance.playBg(SoundConst.bgm2);
        SoundManager.instance.playEffect(SoundConst.click);
        this.kImgMask.visible = false;
        this.kGrpShow.visible = false;
        this.setTimeCallBack(3000, () => {
            this.systemArr.forEach((item: particle.ParticleSystem) => {
                item.stop();
                this.kGrpVideo.removeChild(item);
                item = null;
            });
            this.mcArr.forEach((item) => {
                item.stop();
                this.kGrpVideo.removeChild(item);
                item = null;
            });
            this.stage.removeChild(this);
        });
        // this.kGrpShow.visible = false;
        // GameMain.instance.x = 1280;
        this.stage.addChild(GameMain.instance);
        // egret.Tween.get(this).to({x:-1280},1000).call(()=>{
        // egret.Tween.removeTweens(this);
        // this.stage.removeChild(this);
        // });
        // egret.Tween.get(GameMain.instance).to({x:0},2000).call(()=>{
        //     egret.Tween.removeTweens(GameMain.instance);
        // });
    }

    private clean() {
        this.kImgDo.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        this.kImgUpgrade.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.openGameMain, this);
        egret.MainContext.instance.stage.removeEventListener(egret.Event.RESIZE, this.onRotation, this);
    }

    //屏幕旋转
    private onRotation(event) {
        // alert("resize")
        //此处需要重置Ui
        function CallBack() {
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            this.x = this.y = 0;
            this.scaleX = this.scaleY = 1;
        }
        this.setTimeCallBack(600, CallBack.bind(this));
    }

    private setTimeCallBack(t: number, f: Function) {
        let ti = egret.setTimeout(() => {
            egret.clearTimeout(ti);
            f();
        }, this, t)
    }
}