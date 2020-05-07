// TypeScript file
class GameEnd extends eui.Component implements eui.UIComponent {
    //单例写法
    private static _instance: GameEnd;
    public static get instance(): GameEnd {
        if (!this._instance) {
            this._instance = new GameEnd();
        }
        return this._instance;
    }

    private kImgBg: eui.Image;
    private kGrpAlert: eui.Group;
    private kGrpMain: eui.Group;
    private kGrpStar: eui.Group;
    private kGrpAction: eui.Group;
    private kImgStar1: eui.Image;
    private kImgStar2: eui.Image;
    private kImgStar3: eui.Image;
    private kImgRetry: eui.Image;
    private kImgAlertBg: eui.Image;

    constructor() {
        super();
        // this.skinName = GameEndSkin;
        this.skinName = GameEndDevSkin;
        this.once(egret.Event.ADDED, this.initUI, this);
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }

    private initUI() {
        //初始化图片UI
        this.kImgStar1.source = end_starw;
        this.kImgStar2.source = end_starw;
        this.kImgStar3.source = end_starw;
        this.kImgBg.source = end_bg;
        this.kImgRetry.source = end_retry;
        this.kImgAlertBg.source = end_alert;

        this.playStartAni();
        this.addEvents();
    }

    private async playStartAni() {
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();

        this.kGrpAlert.scaleX = this.kGrpAlert.scaleY = 0;
        egret.Tween.get(this.kGrpAlert).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
            let img: eui.Image = new eui.Image(end_star);
            img.x = 640; img.y = 320;
            img.anchorOffsetX = img.anchorOffsetY = 47;
            img.scaleX = img.scaleY = 5;
            this.kGrpMain.addChild(img);
            let point: egret.Point = this.kImgStar1.localToGlobal();
            egret.Tween.get(img).to({ rotation: 720, scaleX: 1, scaleY: 1, x: point.x + 50, y: point.y + 30 }, 1000, egret.Ease.circIn).call(() => {
                this.kGrpMain.removeChild(img);
                this.kImgStar1.rotation = 0;
                this.kImgStar1.source = end_star;
                SoundManager.instance.playEffect(SoundConst.down);
            });

            let img1: eui.Image = new eui.Image(end_star);
            img1.x = 640; img1.y = 320;
            img1.anchorOffsetX = img1.anchorOffsetY = 47;
            img1.scaleX = img1.scaleY = 5;
            this.kGrpMain.addChild(img1);
            let point1: egret.Point = this.kImgStar2.localToGlobal();
            egret.Tween.get(img1).wait(600).to({ rotation: 720, scaleX: 1, scaleY: 1, x: point1.x + 50, y: point1.y + 30 }, 1500, egret.Ease.circIn).call(() => {
                this.kGrpMain.removeChild(img1);
                this.kImgStar2.rotation = 0;
                this.kImgStar2.source = end_star;
                this.kImgStar2.rotation = 12;
                SoundManager.instance.playEffect(SoundConst.down);
            });
        });
        let action = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mcJson, mc, 'girl');

        let t = new egret.Timer(300, 0);
        t.start();
        t.addEventListener(egret.TimerEvent.TIMER, () => {
            this.playYanhua();
        }, this);

        this.kGrpMain.addChild(action);
        action.gotoAndPlay(0, -1);
        action.scaleX = -2;
        action.scaleY = 2;
        action.x = 450;
        action.y = 170;

        let sound: egret.Sound = new egret.Sound();
        sound.load(SoundConst.laugh);
        sound.addEventListener(egret.Event.COMPLETE, () => {
            sound.play(0, -1);
        }, this);
        egret.Tween.get(this.kImgRetry, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 600).to({ scaleX: 1, scaleY: 1 }, 300);
    }


    private addEvents() {
        this.kImgRetry.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
    }

    //烟花动画
    private playYanhua() {

        let t = Math.floor(Math.random() * 800);
        let arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
        let tim = egret.setTimeout(() => {
            egret.clearTimeout(tim);
            let p: egret.Point = this.createPoint();
            let img: eui.Image = new eui.Image(arr[Math.floor(Math.random() * 3)]);
            img.anchorOffsetX = 102.5;
            img.anchorOffsetY = 96.5;
            img.scaleX = img.scaleY = 0;
            img.x = p.x;
            img.y = p.y;
            this.kGrpAction.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(() => {
                egret.Tween.removeTweens(img);
                this.kGrpAction.removeChild(img);
            });
        }, this, t);
    }

    //产生随机点
    private createPoint() {
        return new egret.Point(200 + Math.floor(Math.random() * 500), 100 + Math.floor(Math.random() * 440));
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

    //平台跳转应用商店
    public openPlateForm() {
        console.log("平台跳转");
        if (window["dapi"]) window["dapi"].openStoreUrl();
        if (window["Liftoff"]) window["Liftoff"].open();
        if (window["mraid"]) window["mraid"].open();
        if (window["FBPlayableOnCTAClick"]) window["FBPlayableOnCTAClick"]();
    }
}