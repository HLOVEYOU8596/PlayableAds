// TypeScript file
class GameMain extends eui.Component implements eui.UIComponent {
    private constructor() {
        super();
        // this.skinName = GameMainSkin;
        this.skinName = GameMainDevSkin;
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);

        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }
    //单例写法
    private static _instance: GameMain;
    public static get instance(): GameMain {
        if (!this._instance) {
            this._instance = new GameMain();
        }
        return this._instance;
    }

    //游戏组件实例
    private kGrpAction: eui.Group;
    private kGrpGuide: eui.Group;
    private kGrpMain: eui.Group;
    private kGrpMenu: eui.Group;
    private kImgPlayfree: eui.Image;

    private kBuild1: Build;
    private kBuild2: Build;
    private kBuild3: Build;
    private buildStaus: number = 0;

    private kImgShape1: eui.Image;
    private kImgShape2: eui.Image;
    private kImgShape3: eui.Image;

    private kImgBuild1: eui.Image;
    private kImgBuild2: eui.Image;
    private kImgBuild3: eui.Image;

    private kGrpBuild1: eui.Group;
    private kGrpBuild2: eui.Group;
    private kGrpBuild3: eui.Group;

    private kImgGift: eui.Image;
    private kImgDeocrate: eui.Image;
    private kImgBg:eui.Image;
    private kImgMenuBg:eui.Image;

    private _cachImage: eui.Image;

    //引导相关变量
    private guideArr = [new egret.Point(114, 174), new egret.Point(486, 254), new egret.Point(106, 336),
    new egret.Point(738, 508), new egret.Point(112, 502), new egret.Point(898, 282),
    new egret.Point(110, 640)
    ];
    private mcArr: any[] = [];
    private cachSound = {};

    /**
     * 初始化游戏界面UI
    */
    private async initUI() {
        this.kImgBg.source = main_bg1;
        this.kImgBuild1.source = main_build1;
        this.kImgBuild2.source = main_build2;
        this.kImgBuild3.source = main_build3;
        this.kImgGift.source = main_build4;
        this.kImgDeocrate.source = main_decorate;
        this.kImgPlayfree.source = play;
        this.kImgShape1.source = main_shape1;
        this.kImgShape2.source = main_shape2;
        this.kImgShape3.source = main_shape3;
        this.kImgMenuBg.source = main_alertbg;

        this.kBuild1.setContent(1);
        this.kBuild1.setType(false);
        this.kBuild2.setContent(2);
        this.kBuild2.setType(false);
        this.kBuild3.setContent(3);
        this.kBuild1.setType(false);
        this.playStartAni();

        this.addEvents();
    }

    /**
     *  @description 播放入场动画
     */
    private playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);


        egret.Tween.get(this.kImgGift, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 200)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ scaleX: 1, scaleY: 1 }, 200).wait(300);
        this.initData();
        egret.Tween.get(this.kImgPlayfree, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 200).to({ scaleX: 1, scaleY: 1 }, 600);
    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(() => { }, 2);
        this.buildStaus++;
    }
    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        // this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kBuild1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
        this.kBuild2.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
        this.kBuild3.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.start, this);
        this.kGrpMain.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.move, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.end, this);

        this.kImgGift.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgPlayfree.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openPlateForm,this);

    }

    private startPoint: egret.Point;

    private start(evt: egret.TouchEvent) {
        console.log("开始拖动");
        SoundManager.instance.playEffect(SoundConst.click);
        if (this.buildStaus == 4) return;
        let arr = [main_build1, main_build2, main_build3];
        if (evt.target.parent === this.swichBuild()) {
            this.startPoint = new egret.Point(evt.stageX, evt.stageY);
            this._cachImage = new eui.Image(arr[this.buildStaus - 1]);
            this._cachImage.anchorOffsetX = this[`kImgBuild${this.buildStaus}`].width / 2;
            this._cachImage.anchorOffsetY = this[`kImgBuild${this.buildStaus}`].height / 2;
            this._cachImage.x = evt.stageX;
            this._cachImage.y = evt.stageY;
            this._cachImage.alpha = 0.6;
            this[`kImgBuild${this.buildStaus}`].alpha = 0.3;
            this.kGrpAction.addChild(this._cachImage);
        }
    }

    private move(evt: egret.TouchEvent) {
        console.log("正在拖动");
        if (this.buildStaus == 4) return;
        if (!this._cachImage) return;
        this._cachImage.x = evt.stageX;
        this._cachImage.y = evt.stageY;
        let image: eui.Image = this[`kImgShape${this.buildStaus}`];
        // let build:eui.Image = this[`kImgBuild${this.buildStaus}`];
        // let group:eui.Group = this[`kGrpBuild${this.buildStaus}`];
        let flag: boolean = image.hitTestPoint(evt.stageX, evt.stageY);
        if (flag) {
            this[`kImgBuild${this.buildStaus}`].alpha = 0;
            image.visible = true;
        } else {
            this[`kImgBuild${this.buildStaus}`].alpha = 0.3;
            image.visible = false;
        }
    }

    private end(evt: egret.TouchEvent) {
        console.log("拖动结束");
        if (this.buildStaus == 4) return;
        if (!this._cachImage) return;
        let image: eui.Image = this[`kImgShape${this.buildStaus}`];
        // let build:eui.Image = this[`kImgBuild${this.buildStaus}`];
        // let group:eui.Group = this[`kGrpBuild${this.buildStaus}`];
        let flag: boolean = image.hitTestPoint(evt.stageX, evt.stageY);
        if (flag) {
            SoundManager.instance.playEffect(SoundConst.decorae);
            this[`kBuild${this.buildStaus}`].setType(true);
            this[`kImgBuild${this.buildStaus}`].alpha = 1;
            image.visible = false;
            GuideStep.instance.clearHand();
            this.buildStaus++;
            this.kGrpAction.removeChild(this._cachImage);
            this.playBuling(evt.stageX, evt.stageY - 200, 500);
            this._cachImage = null;

            if (this.buildStaus == 4) GuideStep.instance.moveHand(this.onGift.bind(this));
            else GuideStep.instance.moveHand(() => { }, 2);
        } else {
            this[`kImgBuild${this.buildStaus}`].alpha = 0;
            image.visible = false;
            egret.Tween.get(this._cachImage)
                .to({ scaleX: 0.3, scaleY: 0.3, x: this.startPoint.x, t: this.startPoint.y })
                .call(() => {
                    this.kGrpAction.removeChild(this._cachImage);
                    this._cachImage = null;
                });
        }
    }

    private onGift() {
        GuideStep.instance.clearHand();
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        this.kImgGift.touchEnabled = false;
        this.kImgGift.cacheAsBitmap = true;
        this.kImgGift.filters = [colorFlilter];
        egret.Tween.removeTweens(this.kImgGift);
        this.kImgDeocrate.y = -100;
        this.kImgDeocrate.alpha = 1;
        egret.Tween.get(this.kImgDeocrate).to({ y: 224 }, 500,egret.Ease.backOut).wait(1000).call(this.onCmplete.bind(this));
        // egret.Tween.get(this.kImgDeocrate).to({ alpha: 1 }, 500).wait(1000).call(this.onCmplete.bind(this));
        this.playBuling(640, 200, 500, 1.5);


    }

    private onCmplete() {
        this.kGrpMain.cacheAsBitmap = true;
        SoundManager.instance.playEffect(SoundConst.pai);
        this.kGrpMenu.visible = false;
        this.kImgPlayfree.visible = false;
        let renderTexture: egret.RenderTexture = new egret.RenderTexture();
        let texture = new egret.Texture();
        renderTexture.drawToTexture(this.kGrpMain, new egret.Rectangle(233, 0, 993, 720), 0.81805);
        texture._setBitmapData(renderTexture.$bitmapData);
        GameEnd.instance.Content = texture;


        let rect: eui.Rect = new eui.Rect(1280, 720, 0xffffff);
        rect.alpha = 0;
        this.addChild(rect);
        egret.Tween.get(rect).to({ alpha: 1 }, 300).call(() => {
            this.kGrpMain.filters = [new egret.GlowFilter(0xffffff, 1, 10, 10, 255, egret.BitmapFilterQuality.HIGH, true, false)]
        }).to({ alpha: 0 }, 300).to({ alpha: 1 }, 200).to({ alpha: 0 }, 200).call(() => {
            this.kGrpMain.filters = [new egret.BlurFilter(5, 5)];
            this.stage.addChild(GameEnd.instance);
        });
    }


    private clearMc() {
        this.mcArr.forEach((item) => {
            this.kGrpAction.removeChild(item);
        });
        this.mcArr = [];
    }



    private swichBuild() {
        switch (this.buildStaus) {
            case 1:
                return this.kBuild1;
            case 2:
                return this.kBuild2;
            case 3:
                return this.kBuild3;
        }
    }

    private async playBuling(x: number, y: number, t: number, scale: number = 1) {
        SoundManager.instance.playEffect(SoundConst.buling);
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, starJson, star, x, y + 80, t);
        system.scaleX = system.scaleY = scale;
        system.once(egret.Event.COMPLETE, () => { this.kGrpAction.removeChild(system); system.stop(); system = null }, this);
    }

    //平台跳转应用商店
    public openPlateForm() {
        console.log("平台跳转");
         SoundManager.instance.playEffect(SoundConst.click);
        if (window["dapi"]) window["dapi"].openStoreUrl();
        if (window["Liftoff"]) window["Liftoff"].open();
        if (window["mraid"]) window["mraid"].open();
        if (window["FBPlayableOnCTAClick"]) window["FBPlayableOnCTAClick"]();
    }

    //设置延迟回调
    private setTimeCallBack(t: number, f: Function) {
        let ti = egret.setTimeout(() => {
            egret.clearTimeout(ti);
            f();
        }, this, t)
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

}