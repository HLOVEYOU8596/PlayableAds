// TypeScript file
let arr = [{ x: 578, y: 464 }, { x: 798, y: 467 }, { x: 617, y: 359 }, { x: 786, y: 360 }];
class GameMain extends eui.Component implements eui.UIComponent {
    private constructor() {
        super();
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
    private kImgSwipe: eui.Image;


    private kFood1: Food;
    private kFood2: Food;
    private kFood3: Food;
    private kFood4: Food;
    private foodArr: Food[];

    private kImgBg: eui.Image;
    private kImgXu: eui.Image;
    private kImgPeople1: eui.Image;
    private kImgPeople2: eui.Image;
    private kImgOrder1: eui.Image;
    private kImgOrder2: eui.Image;
    private kImgOrder3: eui.Image;
    private kImgOrder4: eui.Image;
    private kImgCoke1: eui.Image;
    private kImgCoke2: eui.Image;
    private kImgCoke3: eui.Image;
    private cokeArr: eui.Image[];
    private kImgFloat1: eui.Image;
    private kImgFloat2: eui.Image;
    private kImgEnd: eui.Image;
    private kImgShare: eui.Image;
    private kImgContinue: eui.Image;

    private kGrpCoke: eui.Group;
    private kGrpAction: eui.Group;
    private kGrpGuide: eui.Group;
    private kGrpPeople1: eui.Group;
    private kGrpPeople2: eui.Group;
    private kGrpMenu1: eui.Group;
    private kGrpMenu2: eui.Group;
    private kGrpMain: eui.Group;
    private kGrpContent: eui.Group;

    private kGrpMask: eui.Group;
    private kGrpAlert: eui.Group;

    private endType: boolean = false;
    private kRecEnd: eui.Rect;

    private system: particle.ParticleSystem;


    private kImgAlert1:eui.Image;
    private kImgAlert2:eui.Image;


    //引导相关变量
    private guideArr = [new egret.Point(260, 652), new egret.Point(1100, 650), new egret.Point(280, 410),
    new egret.Point(450, 610), new egret.Point(600, 610), new egret.Point(580, 480),
    new egret.Point(620, 380), new egret.Point(790, 480), new egret.Point(1100, 480),
    new egret.Point(1040, 400), new egret.Point(896, 298)];
    private mcArr: any[] = [];
    private cachSound = {};

    /**
     * 初始化游戏界面UI
    */
    private async initUI() {
        this.kImgBg.source = main_bg1;
        this.kImgCoke1.source = this.kImgCoke2.source = this.kImgCoke3.source = main_coke1; 
        this.kImgXu.source = main_xuxian;
        this.kImgPeople1.source = main_grampa_normal;
        this.kImgPeople2.source = main_aunt_normal;
        this.kImgAlert1.source = this.kImgAlert2.source = main_alert_bg;
        this.kImgOrder2.source = main_order2;
        this.kImgOrder1.source = this.kImgOrder3.source = this.kImgOrder4.source = main_order1;
        this.kImgSwipe.source = main_swipe;
        this.kImgFloat1.source = this.kImgFloat2.source = end_float_bg;
        this.kImgEnd.source = end_bg;
        this.kImgContinue.source = end_continue;
        this.kImgShare.source = end_share;

        this.system = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.stage, starsJson, stars, 0, 0)
        this.system.scaleX = -1;
        this.playStartAni();

        this.addEvents();
    }

    /**
     *  @description 播放入场动画
     */
    private playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        //281 697
        egret.Tween.get(this.system).to({x:1280},2500,egret.Ease.quartOut).call(()=>{this.stage.removeChild(this.system)});

        egret.Tween.get(this.kGrpContent).to({ width: 1280 }, 2500,egret.Ease.quartOut).call(() => {
            this.kGrpPeople1.x = this.kGrpPeople2.x = -300;
            egret.Tween.get(this.kGrpPeople2).to({ x: 391 }, 700).call(() => {
                egret.Tween.removeTweens(this.kGrpPeople2);
                this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
                egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);


                let maskIcon: egret.Shape = new egret.Shape();
                maskIcon.graphics.beginFill(0x000000, 1);
                maskIcon.graphics.drawCircle(0, 0, 85);
                maskIcon.graphics.endFill();
                maskIcon.x = 252;
                maskIcon.y = 640;
                // maskIcon.scaleY = 0.6;
                //-------------------------------------------------------------------------

                let guide: two.Guide = new two.Guide();
                guide.init(maskIcon, this.stage.stageWidth, this.stage.stageHeight);
                this.kGrpAction.addChild(guide);
                // this.kGrpPeople2.visible = false;
                // this.kImgPeople1.visible = false
                this.kGrpMask.visible = true;
                this.initData();
            });

            egret.Tween.get(this.kGrpPeople1).to({ x: 667 }, 280).call(() => {
                egret.Tween.removeTweens(this.kGrpPeople1);
                this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
            });

        })





    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.clickButton1.bind(this));
        this.foodArr = [this.kFood1, this.kFood2, this.kFood3, this.kFood4];
        this.cokeArr = [this.kImgCoke1, this.kImgCoke2, this.kImgCoke3];
    }

    private clickButton1() {
        egret.log("点击");
        this.kGrpAction.removeChildren();
        this.kGrpMask.visible = false;
        this.foodArr.forEach((item: Food) => {
            item.visible = true;
            item.scaleX = item.scaleY = 0;
            egret.Tween.get(item).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(() => {
                egret.Tween.removeTweens(item);
                this.setProgress(700, () => { item.cookComplete() }, item.x, item.y);
                this.playFei(0, item.x - 60, item.y - 20);
                this.playSmog(0, item.x, item.y);
            });
        });
        this.playCook();
        GuideStep.instance.clearHand();
        this.setTimeCallBack(300, () => {
            GuideStep.instance.moveHand(this.clickButton2.bind(this));
        });
    }

    private clickButton2() {
        this.kGrpCoke.visible = true;
        GuideStep.instance.clearHand();
        this.soundBubble();
        this.setProgress(700, () => { }, 1100, 650);
        this.cokeArr.forEach((item) => {
            item.scaleX = item.scaleY = 0;
            let point: egret.Point = item.localToGlobal()
            egret.Tween.get(item).to({ scaleX: 1, scaleY: 1 }, 1000).call(() => {
                this.playBubble(point.x, point.y + 50);
                egret.Tween.removeTweens(item);
            });
        });
        GuideStep.instance.moveHand(this.clikButton3.bind(this));
    }

    private clikButton3() {
        this.clearMc();
        this.cachSound["soil"].close();
        GuideStep.instance.clearHand();
        for (let i = 0; i < 4; i++) {
            this.foodArr[i].flyBefore();
            egret.Tween.get(this.foodArr[i]).to({ x: arr[i].x, y: arr[i].y }, 300, egret.Ease.quadOut).call(() => {
                egret.Tween.removeTweens(this.foodArr[i]);
            });
        }
        GuideStep.instance.moveHand(this.clikButton4.bind(this));
    }

    private clikButton4() {
        GuideStep.instance.clearHand();
        this.foodArr.forEach((item) => {
            item.showTomoto();
        });
        GuideStep.instance.moveHand(this.clikButton5.bind(this));


    }

    private clikButton5() {
        GuideStep.instance.clearHand();
        this.foodArr.forEach((item) => {
            item.showFrties();
        });
        GuideStep.instance.moveHand(this.clikButton6.bind(this));
    }

    private clikButton6() {
        GuideStep.instance.clearHand();
        this.upIndex(this.foodArr[0], this.kGrpMain);
        egret.Tween.get(this.foodArr[0]).to({ x: 586, y: 140, scaleX: .6, scaleY: .6 }, 300).call(() => {
            this.kGrpMain.removeChild(this.foodArr[0]);
            this.kImgOrder3.source = main_complete;
            GuideStep.instance.moveHand(this.clikButton7.bind(this));
        });
    }

    private clikButton7() {
        GuideStep.instance.clearHand();
        this.upIndex(this.foodArr[2], this.kGrpMain);
        egret.Tween.get(this.foodArr[2]).to({ x: 586, y: 218, scaleX: .6, scaleY: .6 }, 300).call(async () => {
            this.kGrpMain.removeChild(this.foodArr[2]);
            this.kImgOrder4.source = main_complete;
            this.kImgPeople2.source = main_aunt_laugh;
            SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
            let x: any = await ParticleUtil.instance.getParticleAtH5(this.kGrpGuide, coinJson, coin, this.kImgOrder3.localToGlobal().x, this.kImgOrder4.localToGlobal().y + 50, 700);
            GuideStep.instance.moveHand(this.clikButton8.bind(this));
            this.setTimeCallBack(1200, () => { this.kGrpGuide.removeChild(x); })
        });
    }

    private clikButton8() {
        GuideStep.instance.clearHand();
        this.upIndex(this.foodArr[1], this.kGrpMain);
        egret.Tween.get(this.foodArr[1]).to({ x: 862, y: 140, scaleX: .6, scaleY: .6 }, 300).call(() => {
            this.kGrpMain.removeChild(this.foodArr[1]);
            this.kImgOrder1.source = main_complete;
            GuideStep.instance.moveHand(this.clikButton9.bind(this));
        });
    }

    private clikButton9() {
        GuideStep.instance.clearHand();
        this.kImgCoke3.visible = false;
        let img = new eui.Image(main_coke1);
        img.x = 1035;
        img.y = 356;
        this.kGrpMain.addChild(img);
        this.kGrpAction.removeChild(this.bubbleArr[0]);
        egret.Tween.get(img).to({ x: 840, y: 188, scaleX: 0.6, scaleY: 0.6 }, 300).call(() => {
            egret.Tween.removeTweens(img);
            this.kGrpMain.removeChild(img);
            this.kImgOrder2.source = main_complete;
            this.playEndAni();
        });
    }

    private async playEndAni() {
        SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
        let x: any = await ParticleUtil.instance.getParticleAtH5(this.kGrpGuide, coinJson, coin, this.kImgOrder1.localToGlobal().x, this.kImgOrder1.localToGlobal().y + 50, 700);

        if (this.endType) {
            this.setTimeCallBack(1200, () => {
                this.kGrpGuide.removeChild(x);
                this.kImgPeople1.source = main_grampa_laugh;;
                this.kRecEnd.visible = this.kImgFloat1.visible = this.kImgFloat2.visible = this.kGrpAlert.visible = true;
                egret.Tween.get(this.kImgFloat1, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
                egret.Tween.get(this.kImgFloat2, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
                this.kGrpAlert.scaleX = this.kGrpAlert.scaleY = 0;
                egret.Tween.get(this.kGrpAlert).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
                    egret.Tween.removeTweens(this.kGrpAlert);
                    egret.Tween.get(this.kImgContinue, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
                    egret.Tween.get(this.kImgShare, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
                });
            });
        } else {
            this.setTimeCallBack(1200, () => {
                this.kGrpGuide.removeChild(x);
                this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                this.kImgOrder1.source = main_order2;
                this.kImgOrder2.source = main_order2;
                egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 200).wait(600).call(() => {
                    egret.Tween.removeTweens(this.kGrpMenu1);
                    GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                    this.kImgSwipe.visible = true;
                    this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
                    egret.Tween.get(this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
                        egret.Tween.removeTweens(this.kImgSwipe);
                        egret.Tween.get(this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
                    });
                });
            });
        }
    }

    private upIndex(_target: any, _parent: eui.Group) {
        _parent.setChildIndex(_target, _parent.getChildIndex(this.kGrpPeople2) + 100);
    }

    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    }

    private async setProgress(t: number, f: Function, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mcJson, mc, 'progress');
        this.kGrpAction.addChild(mm);
        mm.x = x;
        mm.y = y;
        mm.frameRate = 8000 / t;
        mm.gotoAndPlay(0);
        mm.once(egret.Event.COMPLETE, () => {
            this.kGrpAction.removeChild(mm);
            f();
        }, this);
    }

    private async playFei(t: number, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mcJson, mc, "soil");
        this.kGrpAction.addChild(mm);
        mm.x = x;
        mm.y = y;
        mm.gotoAndPlay(0, -1);
        this.mcArr.push(mm);
    }

    private async playSmog(t: number, x, y) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smJson, sm, x + 50, y, 0, 0.15);
        this.mcArr.push(system);
    }

    private async playBubble(x: number, y: number) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, bubbleJson, bubble, x, y);
        system.scaleX = system.scaleY = 0.18;
        this.bubbleArr.push(system);
    }

    private bubbleArr: particle.GravityParticleSystem[] = [];

    private playCook() {
        let sound: egret.Sound = new egret.Sound();
        this.cachSound["soil"] = sound;
        sound.load(SoundConst.soil);
        sound.once(egret.Event.COMPLETE, () => {
            sound.play(0, -1);
        }, this)
    }

    private soundBubble() {
        let sound: egret.Sound = new egret.Sound();
        sound.load(SoundConst.maopao);
        this.cachSound["bubble"] = sound;
        sound.addEventListener(egret.Event.COMPLETE, () => {
            sound.play(0, -1).volume = 0.1;
        }, this);
    }

    private clearMc() {
        this.mcArr.forEach((item) => {
            this.kGrpAction.removeChild(item);
        });
        this.mcArr = [];
    }

    //平台跳转应用商店
    public openPlateForm() {
        console.log("平台跳转");
        if (window["dapi"]) window["dapi"].openStoreUrl();
        if (window["Liftoff"]) window["Liftoff"].open();
        if (window["mraid"]) window["mraid"].open();
        if (window["FBPlayableOnCTAClick"]) window["FBPlayableOnCTAClick"]();
        parent.postMessage('download','*');
        if(window['ExitApi'])window['ExitApi'].exit();
        parent.postMessage('complete','*');
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