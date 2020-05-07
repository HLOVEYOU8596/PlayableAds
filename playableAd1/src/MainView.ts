// TypeScript file
// <e:Group id="kGrpBg3" left="0" right="0" top="0" bottom="0" visible="false">
// 			<e:Image id="kImgBg3" left="0" right="0" top="0" bottom="0" source=""/>
// 			<e:Image id="kImgTopic" width="929" height="265" y="270" horizontalCenter="0.5" anchorOffsetX="464" anchorOffsetY="138"/>
// 			<e:Image id="kImgPlay" width="323" height="115" y="596" horizontalCenter="0.5" anchorOffsetX="464" anchorOffsetY="138"/>
// 		</e:Group>
class MainView extends eui.Component implements eui.UIComponent {

    private kImgArrow: eui.Image;//小手
    private kImgFood1: eui.Image;//鸡腿
    private kImgFood2: eui.Image;//可乐
    private kImgRight: eui.Image;//成品1
    private kImgRight0: eui.Image;//成品2
    private kImgFu: eui.Image;//配菜
    private kImgXu: eui.Image;//虚线
    private kGrpAction: eui.Group;//动画组
    private kImgMan: eui.Image;//食客1 800 1210
    private kImgWoman: eui.Image;//食客2 -60 313
    private kGrpRect: eui.Group;//mask

    private kGrpAlert: eui.Group;//goal1
    private kGrpAlert0: eui.Group;//goal2
    private kGrpEnd: eui.Group;
    private kLbEnd: eui.Label;
    private kGrpBg3: eui.Image;
    private kLbTopic: eui.Label;
    private kImgTopic:eui.Image;
    private kLbImp: eui.Label;
    private kImgLogo: eui.Image;

    private kImgCoin: eui.Image;
    private kImgCoin0: eui.Image;
    private kImgAlert: eui.Image;
    private kImgAlert0: eui.Image;
    private main_reward_bg: eui.Image;
    private main_drumstick_1: eui.Image;

    private kImgLogo1:eui.Image;
    private kImgLogo2:eui.Image;

    private kImgPlay:eui.Image;
    private system;


    private kProgress: ProgressBar = new ProgressBar();
    private kGrpProgress: eui.Group;
    private kGrpLogo: eui.Group;


    private _mcData: any;
    private _mcTexture: egret.Texture;


    private kImgBg1: eui.Image;
    private kImgBg2: eui.Image;
    private kImgBg3: eui.Image;

    private kImgPlayNow:eui.Image;


    private kGrpGuide:eui.Group;
    private kGrpSnow:eui.Group;
    private guide:GuideStep;

    private rect:eui.Image;


    public guideStep: number = 0;
    private arr = [new egret.Point(270, 544),
    new egret.Point(330, 440),
    // new egret.Point(420, 509),
    new egret.Point(520,509),
    new egret.Point(540, 397),
    new egret.Point(908, 374),
    new egret.Point(650, 510)];
//520，420
    private kGrpCoin:eui.Group;

    // private progress:CircleTimer;
    private movFactory: egret.MovieClipDataFactory;
    private h1: egret.MovieClip;
    constructor() {
        super();
        this.skinName = "MainViewSkin";
        this.width = egret.MainContext.instance.stage.stageWidth;
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initUI, this);

        // this.addEventListener(egret,TouchEvent.)
    }

    private initUI() {
        this.kProgress.x = 348;
        this.kProgress.y = 0;
        this.kGrpProgress.addChild(this.kProgress);

        //base64纹理赋值
        // this.rect.source = rect;
        this.kImgMan.source = main_grampa_normal;
        this.kImgWoman.source = main_aunt_normal;
        this.kImgArrow.source = main_guide_arrow;
        this.kImgFood1.source = main_drumstick_0;
        this.kImgFood2.source = this.kImgRight0.source = main_coke2;
        this.kImgCoin.source = this.kImgCoin0.source = main_icon_coin;
        this.kImgAlert.source = this.kImgAlert0.source = main_alert_bg;
        this.kImgRight.source = main_order1;
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgBg3.source = main_bg3;
        this.main_reward_bg.source = main_reward_bg;
        this.main_drumstick_1.source = main_drumstick_1;
        this.kImgXu.source = main_xuxian;
        // this.kImgTopic.source = main_rock;
        this.kImgLogo1.source = main_logo1;
        this.kImgLogo2.source = main_logo2
        // this.kImgPlay.source = main_button;
        this.kImgPlayNow.source = main_button;

        if(!window["mraid"])this.kImgPlayNow.visible = false;

        this.kImgArrow.touchEnabled = false;
        SoundManager.instance.playBg(SoundConst.bgm);
        this.playStartAni();
        this.addEvents();

    }

    //入场动画
    private async playStartAni() {
        // this.system = await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow,snowJson,snow);
        egret.Tween.get(this.kImgMan).to({ x: 840 }, 400, egret.Ease.cubicOut).call(() => {
            let maskIcon: egret.Shape = new egret.Shape();
            maskIcon.graphics.beginFill(0x000000, 1);
            maskIcon.graphics.drawCircle(0, 0, 85);
            maskIcon.graphics.endFill();
            maskIcon.x = 212;
            maskIcon.y = 542;
            // maskIcon.scaleY = 0.6;
            //-------------------------------------------------------------------------

            let guide: two.Guide = new two.Guide();
            guide.init(maskIcon, 1136,640,this.arr);
            this.kGrpAction.addChild(guide);
            this.kGrpAlert.visible = true;
            // this.kGrpRect.visible = true;
            this.kImgXu.visible = true;
            // this.moveHand();

            this.guide = new GuideStep();
            this.guide.init(this.kGrpGuide,this.arr);
            this.guide.moveHand(this.touchFirst.bind(this));
        });
        // egret.Tween.removeTweens(this.kImgMan);
        // egret.Tween.get(this.kImgMan,{loop:true})
        // .to({scaleX:0.9,scaleY:0.9},700,egret.Ease.backIn)
        // .to({scaleX:1,scaleY:1},700,egret.Ease.backOut);
    }

    private addEvents() {
        // this.kImgXu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFirst, this);
        // this.kImgFood1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchSecond, this);
        // this.kImgArrow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchThird, this);
        // // this.kImgFu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchFouth,this);

        // this.kImgFood2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCompleteFood, this);
        this.kImgPlayNow.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openPlateForm,this);
        this.addEventListener(egret.Event.CHANGE,this.onRotation,this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE,this.onRotation,this);
    }

    private touchFirst() {
        this.kGrpAction.removeChildren();
        this.kImgXu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFirst, this);
        this.kImgFood1.visible = true;
        this.kImgFood1.touchEnabled = false;
        this.kImgXu.visible = false;
        this.kGrpRect.visible = false;
        this.guide.clearHand();
        //x:218,y320
        egret.Tween.get(this.kImgFood1).to({ x: 218, y: 350 }, 400, egret.Ease.sineIn).call(() => {
            //TODO  播放进度条代码，传入回调
            SoundManager.instance.playEffect(SoundConst.cook);
            this.setProgress(400, () => {
                this.kImgFood1.source = main_drumstick_1;
                this.guide.moveHand(this.touchSecond.bind(this));
                this.kImgFood1.touchEnabled = true;
            }, 300, 280);
        });
    }

    private touchSecond() {
        this.guide.clearHand();
        this.kImgFood1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchSecond, this);
        //x:450,y:336
        egret.Tween.get(this.kImgFood1).to({ x: 430, y: 326 }, 300, egret.Ease.sineOut).call(() => {
            this.kImgFood1.source = main_drumstick_2;
            this.kImgFood1.scaleX = this.kImgFood1.scaleY = 0.6;
            egret.Tween.get(this.kImgWoman).to({ x: 300 }, 400, egret.Ease.cubicOut).call(() => {
                this.kGrpAlert0.visible = true;
                this.guide.moveHand(this.touchThird.bind(this));
                this.kImgFood2.visible = true;
                this.kImgFood2.scaleX = this.kImgFood2.scaleY = 0;
                egret.Tween.get(this.kImgFood2).to({ scaleX: 0.5, scaleY: 0.5 }, 400);
                this.setProgress(400, () => {
                    egret.Tween.get(this.kImgFood2).to({ x: 884, y: 329, scaleX: 1, scaleY: 1 }, 300, egret.Ease.sineIn);
                    this.kImgArrow.touchEnabled = true;
                }, 1000, 520)

            });
        });
    }

    private touchThird() {
        this.kImgArrow.touchEnabled = false;
        this.guide.clearHand();
        this.kImgFu.visible = true;
        this.kImgFu.scaleX = this.kImgFu.scaleY = 0;
        // this.kImgFood1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFouth, this);
        // egret.Tween.get(this.kImgFu).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineIn).call(() => {
        //     this.moveHand();
        // });
        this.kImgFood1.source = main_coke1;
        this.guide.moveHand(this.touchFouth.bind(this));
    }

    private touchFouth() {
        this.guide.clearHand();
        //x:633,y:131,0.8
        egret.Tween.get(this.kImgFood1).to({ x: 633, y: 131 }, 300, egret.Ease.sineOut).to({ scaleX: 0.5, scaleY: 0.5 }, 100).wait(100).call(() => {
            this.kImgFood1.visible = false;
            this.kImgFu.visible = false;
            this.kImgRight.source = main_right;
            this.kImgRight.x = 97;
            this.kImgRight.y = 185;
            this.kImgCoin.visible = true;
            this.playFlyCoin(this.kImgCoin.localToGlobal(), new egret.Point(340, 0), () => {
                this.kProgress.value += 50;
                if (this.kProgress.value == 50) {
                    this.guide.moveHand(this.onCompleteFood.bind(this));
                } else if (this.kProgress.value == 100) {
                    this.guide.moveHand(()=>{});
                    this.guide.clearHand();
                    //TODO 播放结束动画
                    egret.log("play end Ani");
                    this.playEndAni();
                }
            });
        });
        // egret.Tween.get(this.kImgFu).to({ x: 636, y: 224 }, 1000, egret.Ease.sineOut).to({ scaleX: 0.85, scaleY: 0.85 }, 300);
    }

    private onCompleteFood() {
        if(this.kProgress.value === 50) this.guide.clearHand();
        egret.Tween.get(this.kImgFood2).to({ x: 429, y: 172 }, 300, egret.Ease.sineOut).to({ scaleX: 0.7, scaleY: 0.7 }, 100).wait(100).call(() => {
            this.kImgFood2.visible = false;
            this.kImgRight0.source = main_right;
            this.kImgRight0.scaleX = this.kImgRight0.scaleY = 1;
            this.kImgCoin0.visible = true;
            //TODO 飞金币动画
            this.playFlyCoin(this.kImgCoin0.localToGlobal(), new egret.Point(340, 0), () => {
                this.kProgress.value += 50;
                if (this.kProgress.value == 100) {
                    //TODO 播放结束动画
                    egret.log("play end Ani");
                    this.playEndAni();
                }
            });
        });
        // }

    }

    private setProgress(t: number, f: Function, x, y) {
        var distance: number = 6;           /// 阴影的偏移距离，以像素为单位
        var angle: number = 45;              /// 阴影的角度，0 到 360 度
        var color: number = 0x000000;        /// 阴影的颜色，不包含透明度
        var alpha: number = 0.7;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
        var blurX: number = 16;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY: number = 16;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength: number = 0.65;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality: number = egret.BitmapFilterQuality.LOW;              /// 应用滤镜的次数，暂无实现
        var inner: boolean = false;            /// 指定发光是否为内侧发光
        var knockout: boolean = false;            /// 指定对象是否具有挖空效果
        var dropShadowFilter: egret.DropShadowFilter = new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY,
            strength, quality, inner, knockout);
        console.log("set Progress");
        let progress = new CircleTimer(12, false, 0x11c668, 1);
        let progress1 = new CircleTimer(18, false, 0xffffff, 1);
        progress.x = x + 6;
        progress.y = y + 6;
        progress1.x = x;
        progress1.y = y;
        progress1.filters = [dropShadowFilter];
        this.kGrpAction.addChild(progress1);
        this.kGrpAction.addChild(progress);
        let n: number = t / 100;
        let a = 0;
        let tim = egret.setInterval(() => {
            a++;
            progress.percent = a / 100;
            progress1.percent = a / 100;
            if (a === 100) {
                egret.clearInterval(tim);
                this.kGrpAction.removeChild(progress);
                this.kGrpAction.removeChild(progress1);
                f();
            }
        }, this, n);

    }

    /**
     * @param {start} 金币飞出的起始点
     * @param {end} 金币飞入的终点
     * @param {f:Function}
    */
    private playFlyCoin(start: egret.Point, end: egret.Point, f: Function) {
        SoundManager.instance.playEffect(SoundConst.get_coin);
        let arr: eui.Image[] = [];
        let num = 20;
        let a = 0;
        for (let i = 0; i < num; i++) {
            let img: eui.Image = new eui.Image(main_icon_coin);
            img.x = start.x - (egret.MainContext.instance.stage.stageWidth - 1280)/2 - this.kImgCoin.width - 15;
            img.y = start.y - (egret.MainContext.instance.stage.stageHeight - 640)/2;
            this.kGrpCoin.addChild(img);
            arr.push(img);
        }
        let t = egret.setInterval(() => {
            egret.Tween.get(arr[a]).to({ x: end.x, y: end.y }, 300);
            a++;
            if (a == 20) {
                egret.clearInterval(t);
                f();
                for (let a = 0; a < arr.length; a++) {
                    egret.Tween.removeTweens(arr[a]);
                    this.kGrpCoin.removeChild(arr[a]);
                }
            }
        }, this, 40);

    }

    /**
     * @param void
     * @description 结束动画
    */
    private playEndAni() {
        // this.system.stop();
        SoundManager.instance.playEffect(SoundConst.win);
        this.kGrpEnd.visible = true;
        this.kLbEnd.alpha = 0;

        //播放烟花动画
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();




        // egret.Tween.get(this.kLbEnd).to({ alpha: 1 }, 500).wait(1500).call(() => {
        egret.Tween.get(this.kLbEnd).wait(500).wait(1500).call(() => {
            this.kImgPlayNow.visible = false;
            this.guide.moveHand(() => { 
                this.openPlateForm();
            });

            this.guide.moveHand(this.openPlateForm.bind(this));
            // this.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { window["dapi"].openStoreUrl() }, this);
            egret.Tween.get(this.kImgTopic, { loop: true })
            .to({ rotation: 3 }, 150,egret.Ease.circInOut).to({ rotation: -6 }, 300,egret.Ease.circInOut).to({ rotation: 0 }, 150,egret.Ease.circInOut)
            .to({ rotation: 3 }, 150,egret.Ease.circInOut).to({ rotation: -6 }, 300,egret.Ease.circInOut).to({ rotation: 0 }, 150,egret.Ease.circInOut)
            .wait(2000);

            this.kImgLogo2.scaleX = this.kImgLogo2.scaleY = this.kImgLogo1.scaleX = this.kImgLogo1.scaleY = 0.8;
            this.kImgLogo1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
            this.kImgLogo2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);

            this.playToggleA();
            this.kGrpBg3.visible = true;
        });
    }

    private playToggleA() {
        egret.Tween.get(this.kImgLogo1).to({ scaleX: 1, scaleY: 1 }, 300).wait(200).to({ scaleX: 0.8, scaleY: 0.8 }, 100).wait(900).call(() => {
            this.playToggleB()
        })
    }

    private playToggleB() {
        egret.Tween.get(this.kImgLogo2).to({ scaleX: 1, scaleY: 1 }, 300).wait(200).to({ scaleX: 0.8, scaleY: 0.8 }, 100).wait(900).call(() => {
            this.playToggleA()
        })
    }


    //产生随机点
    private createPoint() {
        return new egret.Point(200+Math.floor(Math.random() * 736), 100+Math.floor(Math.random() * 440));
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
            this.kGrpEnd.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200,egret.Ease.quadOut).to({alpha:0},300).call(() => {
                egret.Tween.removeTweens(img);
                this.kGrpEnd.removeChild(img);
            });
        }, this, t);
    }

    //屏幕旋转
    private onRotation(event){
        // alert("resize")
        //此处需要重置Ui
        let t = egret.setTimeout(()=>{
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            this.x = this.y = 0;
            this.scaleX = this.scaleY = 1;
        },this,800);
    }

    //平台跳转应用商店
    public openPlateForm() {
        console.log("平台跳转");
        if (window["dapi"]) window["dapi"].openStoreUrl();
        if (window["Liftoff"]) window["Liftoff"].open();
        if (window["mraid"]) window["mraid"].open();
        if (window["FBPlayableOnCTAClick"]) window["FBPlayableOnCTAClick"]();
        if(window['install'])window["install"]();
        window['gameEnd'] && window['gameEnd']();
    }
}