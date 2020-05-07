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
    private kImgTips: eui.Image;
    private kImgLogo1: eui.Image;
    private kImgLogo2: eui.Image;
    private kImgTopic: eui.Image;
    private kImgHand: eui.Image;

    //引导相关变量
    private kGrpMain: eui.Group;                //主展示组
    constructor() {
        super();

        this.skinName = "GameEndDevSkin";
        // this.skinName = "GameEndSkin";
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);

        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }

    /**
     * 初始化游戏界面UI
    */
    private initUI() {
        // this.playShade();
        // this.kImgBg.source = main_bg1;
        // this.kImgHand.source = main_guide_arrow;
        // this.kImgLogo1.source = main_logo1;
        // this.kImgLogo2.source = main_logo2;
        // this.kImgTips.source = main_tips;
        // this.kImgTopic.source = main_topic;

        this.playStartAni();
        this.addEvents();

    }

    /**
     *  @description 播放入场动画
     */
    private playStartAni() {
        // 340,932
        egret.Tween.get(this.kImgTopic).to({ y: 68 }, 1000, egret.Ease.backOut).call(() => {
            this.kImgHand.visible = true;
            egret.Tween.get(this.kImgHand, { loop: true }).to({ x: 930 }, 1000).call(() => {
                egret.Tween.get(this.kImgTips, { loop: true })
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                    .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(880);
                egret.Tween.get(this.kImgLogo2).call(() => {
                    this.kImgLogo2.filters = [this.filter];
                }).to({ scaleX: 1, scaleY: 1 }, 300).wait(300).to({ scaleX: 1.2, scaleY: 1.2 }, 100).call(() => {
                    this.kImgLogo2.filters = []
                });
            }).wait(500).to({ x: 380 }, 1000).call(() => {
                egret.Tween.get(this.kImgLogo1).call(() => {
                    this.kImgLogo1.filters = [this.filter];
                }).to({ scaleX: 1, scaleY: 1 }, 300).wait(300).to({ scaleX: 1.2, scaleY: 1.2 }, 100).call(() => {
                    this.kImgLogo1.filters = [];
                });
            }).wait(500);
        });
        egret.Tween.get(this.kImgLogo1).to({ x: 340 }, 1000, egret.Ease.circOut);
        egret.Tween.get(this.kImgLogo2).to({ x: 932 }, 1000, egret.Ease.circOut);
    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        // GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        // GuideStep.instance.moveHand(this.clickButton.bind(this));
    }



    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    }


    //产生随机点
    private createPoint() {
        return new egret.Point(200 + Math.floor(Math.random() * 736), 100 + Math.floor(Math.random() * 440));
    }

    //平台跳转应用商店
    public openPlateForm() {
        console.log("平台跳转");
        if (window["dapi"]) window["dapi"].openStoreUrl();
        if (window["Liftoff"]) window["Liftoff"].open();
        if (window["mraid"]) window["mraid"].open();
        if (window["FBPlayableOnCTAClick"]) window["FBPlayableOnCTAClick"]();
        parent.postMessage('download', '*');
        if (window['ExitApi']) window['ExitApi'].exit();
        parent.postMessage('complete', '*');
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

    private filter: egret.GlowFilter = new egret.GlowFilter(0xf0ff00, 1, 35, 35, 2, egret.BitmapFilterQuality.HIGH, false, false);
}