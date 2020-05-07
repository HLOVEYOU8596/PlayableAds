class GameEnd extends eui.Component implements eui.UIComponent {
    private constructor() {
        super();
        // this.skinName = GameEndSkin;
        this.skinName = GameEndDevSkin;
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }
    //单例写法
    private static _instance: GameEnd;
    public static get instance(): GameEnd {
        if (!this._instance) {
            this._instance = new GameEnd();
        }
        return this._instance;
    }

    private kGrpMain: eui.Group;
    private kImgContent: eui.Image;
    private kGrpContent: eui.Group;
    private kGrpTopic: eui.Group;
    private kImgRedesign: eui.Image;
    private kImgShare: eui.Image;
    private kGrpAction: eui.Group;
    private kImgLeft: eui.Image;
    private kImgRight: eui.Image;
    private kImgTopic: eui.Image;
    private kImgWelldown: eui.Image;

    private boxStatus: boolean = false;
    private initUI() {
        //图片base64赋值
        this.kImgRedesign.source = end_design;
        this.kImgShare.source = end_share;
        this.kImgTopic.source = main_reward_bg;
        this.kImgWelldown.source =  end_welldone;

        let tim = new egret.Timer(300, 10000);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, this.playWu, this);
        this.playStartAni();
        this.addEvents();
    }

    private async playStartAni() {
        // egret.Tween.get(this.kImgLeft, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
        // egret.Tween.get(this.kImgRight, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
        this.kGrpContent.scaleX = 1.5;
        this.kGrpContent.scaleY = 1.2;
        this.kGrpTopic.scaleX = this.kGrpTopic.scaleY = 0;
        this.kImgRedesign.scaleX = this.kImgRedesign.scaleY = 0;
        this.kImgShare.scaleX = this.kImgShare.scaleY = 0;
        egret.Tween.get(this.kGrpContent).to({ scaleX: 0.7, scaleY: 0.7 }, 300, egret.Ease.sineOut).call(() => {
            egret.Tween.removeTweens(this.kGrpContent);
            egret.Tween.get(this.kGrpTopic).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(() => {
                egret.Tween.get(this.kImgRedesign).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(this.playBigA.bind(this));
                egret.Tween.get(this.kImgShare).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut);
            });
        });
    }

    private playBigA() {
        egret.Tween.get(this.kImgRedesign).to({ scaleX: 1.2, scaleY: 1.2 }, 400).to({ scaleX: 1, scaleY: 1 }, 200).call(this.playBigB.bind(this));
    }

    private playBigB() {
        egret.Tween.get(this.kImgShare).to({ scaleX: 1.2, scaleY: 1.2 }, 400).to({ scaleX: 1, scaleY: 1 }, 200).call(this.playBigA.bind(this));
    }

    public set Content(texture: egret.Texture) {
        this.kImgContent.source = texture;

        let mask = new egret.Shape();
        mask.graphics.beginFill(0x000000, 1);
        mask.graphics.drawRoundRect(10, 10, 813, 589, 60, 60);
        mask.graphics.endFill();

        this.kGrpContent.addChild(mask);
        this.kImgContent.mask = mask;
    }

    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgRedesign.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
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


    private playWu() {
        if(Math.random()>0.8)SoundManager.instance.playEffect(SoundConst.yanhua);
        // let arr = [main_dai1, main_dai2, main_dai3, main_dai4, main_dai5, main_dai6, main_dai7, main_dai8, main_dai9, main_dai10]
        let circle = new eui.Rect(10, 10, Math.floor(Math.random() * 16777215));
        circle.filters = [new egret.GlowFilter(Math.floor(Math.random() * 16777215),1,5,5,3,egret.BitmapFilterQuality.HIGH,false,false)];
        circle.ellipseWidth = circle.ellipseHeight = 30;
        circle.x = 640;
        circle.y = 720;
        this.kGrpAction.addChild(circle);
        let endPoint = this.createPoint();
        egret.Tween.get(circle).to({ x: endPoint.x, y: endPoint.y }, 500, egret.Ease.sineOut).call(() => {
            this.kGrpAction.removeChild(circle);
            this.playYanhua(endPoint);
            // for (let i = 0; i < 500 * Math.random(); i++) {
            //     // let img:eui.Image = new eui.Image(arr[Math.floor(Math.random()*10)]);
            //     let sc = Math.random() * 20;
            //     let img: eui.Rect = new eui.Rect(sc, sc, Math.floor(Math.random() * 16777215));
            //     // img.ellipseWidth = img.ellipseHeight = sc;
            //     img.anchorOffsetX = img.anchorOffsetY = sc / 2;
            //     img.x = endPoint.x; img.y = endPoint.y;
            //     img.scaleX = img.scaleY = 0;
            //     this.kGrpAction.addChild(img);
            //     img.alpha = 0;
            //     let closePoint = this.createPoint(endPoint.x - 150, endPoint.y - 150, 300, 300);
            //     egret.Tween.get(img).to({ x: closePoint.x, y: closePoint.y, alpha: 1, scaleX: 1, scaleY: 1 }, Math.random() * 1000, egret.Ease.sineOut).wait(200).call(() => {
            //         this.kGrpAction.removeChild(img);
            //         img = null;
            //     });
            // }
        });
    }

    //烟花动画
    private playYanhua(p) {
        let t = Math.floor(Math.random() * 800);
        let arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
        let tim = egret.setTimeout(() => {
            egret.clearTimeout(tim);
            // let p: egret.Point = this.createPoint();
            let img: eui.Image = new eui.Image(arr[Math.floor(Math.random() * 3)]);
            img.anchorOffsetX = 102.5;
            img.anchorOffsetY = 96.5;
            img.scaleX = img.scaleY = 0;
            img.x = p.x;
            img.y = p.y;
            this.kGrpAction.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 600 + Math.random() * 600, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(() => {
                egret.Tween.removeTweens(img);
                this.kGrpAction.removeChild(img);
            });
        }, this, t);
    }

    private createPoint(x = 0, y = 0, w = 1280, h = 720) {
        return new egret.Point(x + Math.random() * w, y + Math.random() * h);
    }
}
