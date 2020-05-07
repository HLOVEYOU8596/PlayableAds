// TypeScript file
class GameMain extends eui.Component implements eui.UIComponent {
    private constructor() {
        super();
        // this.skinName = GameMainSkin;
        this.skinName = GameMainDevSkin;
        this.once(egret.Event.ADDED, this.initUI, this);

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
    private kDrumstick1: Drumstick;
    private kDrumstick2: Drumstick;
    private kDrumstick3: Drumstick;
    private kDrumstick4: Drumstick;
    private kDrumstick5: Drumstick;
    private kDrumstick6: Drumstick;
    private drumStickArr1: Drumstick[];
    private drumStickArr2: Drumstick[];

    private kImgDrumstick1: eui.Image;
    private kImgDrumstick2: eui.Image;
    private kImgDrumstick3: eui.Image;
    private kImgDrumstick4: eui.Image;
    private kImgDrumstick5: eui.Image;
    private kImgDrumstick6: eui.Image;
    private drumStickArr3: eui.Image[];

    private kGrpPeople1: eui.Group;
    private kGrpPeople2: eui.Group;
    private kGrpPeople3: eui.Group;
    private kGrpMenu1: eui.Group;
    private kGrpMenu2: eui.Group;
    private kGrpMenu3: eui.Group;
    private peopleNum: number = 0;

    private kImgOrder1: eui.Image;
    private kImgOrder2: eui.Image;
    private kImgOrder3: eui.Image;
    private kImgOrder4: eui.Image;
    private kImgOrder5: eui.Image;
    private kImgOrder6: eui.Image;
    private drumStickArr4: eui.Image[];

    private kGrpEnd: eui.Group;
    private kImgBox: eui.Image;
    private kImgLux: eui.Image;
    private kImgBg1: eui.Image;
    private kImgBg2: eui.Image;
    private kImgMenu1: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgMenu3: eui.Image;

    private kImgCoke1: eui.Image;
    private kImgCoke2: eui.Image;
    private kImgCc1: eui.Image;
    private kImgCc2: eui.Image;
    private kGrpStream: eui.Group;


    // private hippies: dragonBones.EgretArmatureDisplay;
    // private officelady: dragonBones.EgretArmatureDisplay;
    // private geek: dragonBones.EgretArmatureDisplay;

    private hippies: egret.MovieClip;
    private officelady: egret.MovieClip;
    private geek: egret.MovieClip;




    //引导相关变量
    private guideArr = [new egret.Point(433, 457), new egret.Point(745, 409),
    new egret.Point(651, 409), new egret.Point(672, 557),
    new egret.Point(906, 559),
    new egret.Point(1032, 546), new egret.Point(133, 372), new egret.Point(222, 444)
        // new egret.Point(640, 640)
    ];
    private mcArr: any[] = [];
    private cachSound = {};

    /**
     * 初始化游戏界面UI
    */
    private async initUI() {

        //初始化人物动画

        this.hippies = <egret.MovieClip>await McManger.instance.getMcAtH5('a3', a3_j, a3, 'a3');
        this.hippies.scaleX = -1;this.hippies.x = 210; this.hippies.y = -35;
        this.officelady = <egret.MovieClip>await McManger.instance.getMcAtH5('a2', a2_j, a2, 'a2');
        this.officelady.scaleX = -1; this.officelady.x = 230;
        this.officelady.y = 25;
        this.geek = <egret.MovieClip>await McManger.instance.getMcAtH5('a1', a1_j, a1, 'a1');
        this.geek.y = 25;
        this.kGrpPeople1.addChild(this.hippies);
        this.kGrpPeople2.addChild(this.officelady);
        this.kGrpPeople3.addChild(this.geek);
        // this.hippies.nextFrame();this.officelady.nextFrame();this.geek.nextFrame();
        this.kImgCc1.source = this.kImgCc2.source = main_coke1;
        this.kImgCoke1.source = this.kImgCoke2.source = main_coke2;

        this.drumStickArr1 = [this.kDrumstick1, this.kDrumstick2, this.kDrumstick3];
        this.drumStickArr2 = [this.kDrumstick4, this.kDrumstick5, this.kDrumstick6];
        this.drumStickArr3 = [this.kImgDrumstick1, this.kImgDrumstick2, this.kImgDrumstick3,
        this.kImgDrumstick4, this.kImgDrumstick5, this.kImgDrumstick6];
        // this.drumStickArr4 = [this.kImgOrder1, this.kImgOrder2, this.kImgOrder3, this.kImgOrder4, this.kImgOrder5, this.kImgOrder6];

        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgBox.source = loading_c;
        this.drumStickArr3.forEach(item => { item.source = main_food0 });
        // this.drumStickArr4.forEach(item=>{item.source = main_order});
        this.kImgOrder1.source = this.kImgOrder2.source = this.kImgOrder3.source = this.kImgOrder4.source = this.kImgOrder5.source = this.kImgOrder6.source = main_order;
        this.kImgMenu1.source = this.kImgMenu2.source = this.kImgMenu3.source = main_menu;
        this.kImgLux.source = main_lux;


        this.playStartAni();
        this.addEvents();
    }

    /**
     *  @description 播放入场动画
     */
    private async playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);

        this.drumStickArr3.forEach((item => {
            this.playFei(0, item.x - 60, item.y - 3);
            this.playSmog(0, item.x + 50, item.y);
            this.setProgress(1000, (item => {
                item.source = main_foodz;
            }).bind(this, item), item.x - 100, item.y - 100);
        }));
        //234,500,800
        this.producePeople();
    }

    private producePeople() {
        let arr = [860, 560, 294];
        egret.Tween.get(this[`kGrpPeople${3 - this.peopleNum}`]).to({ x: arr[this.peopleNum] }, 600).call(() => {
            egret.Tween.get(this[`kGrpMenu${3 - this.peopleNum}`]).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut);
            this.peopleNum++;
            if (this.peopleNum != 3) this.producePeople();
            else this.initData();
        });
    }

    /**
     * 初始化游戏数据
    */
    private initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.clickSoil.bind(this));
    }

    private clickSoil() {
        this.clearMc();
        GuideStep.instance.clearHand();
        let arr = this.drumStickArr1.concat(...this.drumStickArr2);
        // arr.forEach(item => { item.x = item.x + 30; item.y = item.y - 50 });
        this.drumStickArr3.forEach((item) => {
            egret.Tween.get(item).to({ scaleX: 0, scaleY: 0 }, 300);
        });

        let a = 0;
        let tim: egret.Timer = new egret.Timer(200, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            arr[a].showImg2();
            a++;
        }, this);
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            GuideStep.instance.moveHand(this.showFries.bind(this));
        }, this);
    }

    private showFries() {
        let arr = this.drumStickArr1.concat(this.drumStickArr2);
        let a = 0;
        let tim: egret.Timer = new egret.Timer(150, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            arr[a].showImg3();
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            GuideStep.instance.moveHand(this.showTomoto.bind(this));
        }, this);
    }

    private showTomoto(flag: boolean = false) {
        let arr = this.drumStickArr1.concat(this.drumStickArr2);
        let a = 0;
        let tim: egret.Timer = new egret.Timer(150, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            arr[a].showImg4();
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            // GuideStep.instance.moveHand(this.conactDrumstick.bind(this, true));
            GuideStep.instance.moveHand(this.showHam.bind(this));
        }, this)
    }

    private showHam(flag: boolean = false) {
        let arr = this.drumStickArr1.concat(this.drumStickArr2);
        let a = 0;
        let tim: egret.Timer = new egret.Timer(150, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            arr[a].showImg5();
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            GuideStep.instance.moveHand(this.conactDrumstick.bind(this, true));
        }, this);
    }

    private async conactDrumstick(flag: boolean = false) {
        GuideStep.instance.clearHand();
        let arr = this.drumStickArr1.concat(this.drumStickArr2);
        let a = 0;
        let tim: egret.Timer = new egret.Timer(400, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, async () => {
            if (a == 1) {
                this.hippies.gotoAndPlay(1, -1);
                this.setTimeCallBack(1000, () => {
                    this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                    egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 1000);
                });
            };
            if (a == 3) {
                this.officelady.gotoAndPlay(1, -1);
                this.setTimeCallBack(1000, () => {
                    this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
                    egret.Tween.get(this.kGrpPeople2).to({ x: 1280 }, 1000);
                });
            }
            this[`kImgOrder${a + 1}`].source = main_right;
            let system = ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, arr[a].x, arr[a].y, 700);
            egret.Tween.get(arr[a]).to({ scaleX: 0, scaleY: 0 }, 700);
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            this.geek.gotoAndPlay(1, -1);
            this.setTimeCallBack(1000, () => {
                this.kGrpMenu3.scaleX = this.kGrpMenu3.scaleY = 0;
                egret.Tween.get(this.kGrpPeople3).to({ x: 1280 }, 400).call(() => {
                    this.hippies.stop();
                    this.hippies.gotoAndStop(0);
                    this.kGrpPeople1.x = -400;
                    this.kImgOrder1.source = this.kImgOrder2.source = main_coke3;
                    this.kImgOrder1.scaleX = this.kImgOrder1.scaleY = this.kImgOrder2.scaleX = this.kImgOrder2.scaleY = .6;
                    egret.Tween.get(this.kGrpPeople1).to({ x: 540 }, 500).call(() => {
                        GuideStep.instance.moveHand(this.makeCoke.bind(this));
                        egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut);
                    });
                });
            })
            // this.onCmplete();
            // this.setTimeCallBack(2400,this.showButton.bind(this));
        }, this)
    }
    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        // this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    }

    private makeCoke() {
        GuideStep.instance.clearHand();
        this.playStream(600, () => { }, this.kImgCc1.x + 57, this.kImgCc1.y);
        this.playStream(600, () => { }, this.kImgCc2.x + 60, this.kImgCc2.y - 5);
        this.setProgress(600, () => {
            this.kImgCc1.visible = this.kImgCc2.visible = false;
            this.kImgCoke1.source = this.kImgCoke2.source = main_coke3;
            GuideStep.instance.moveHand(this.openPlateForm.bind(this));
        }, this.kImgCc1.x - 100, this.kImgCc1.y - 100);
    }

    private onCmplete() {
        let rect = new eui.Rect(1280, 720, 0x481b28);
        rect.fillAlpha = 0.26;
        this.kGrpAction.addChild(rect);
        this.showButton();
        egret.Tween.get(this.kGrpEnd).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
        egret.Tween.get(this.kImgLux, { loop: true }).to({ rotation: 360, alpha: 0.3 }, 2000).to({ rotation: 720, alpha: 1 }, 2000);
        egret.Tween.get(this.kImgBox, { loop: true }).call(() => { SoundManager.instance.playEffect(SoundConst.huang) }).
            to({ scaleX: 1.2, scaleY: 1.2 }, 200)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ scaleX: 1, scaleY: 1 }, 200).wait(300);
    }


    private async setProgress(t: number, f: Function, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mcJson, mc);
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
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smJson, sm, x, y);
        system.alpha = 0.1;
        this.mcArr.push(system);
    }

    private async playStream(t: number, f, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('stram', stream_j, stream, "stream");
        this.kGrpStream.addChild(mm);
        this
        mm.x = x;
        mm.y = y;
        mm.scaleX = mm.scaleY = 1.9;
        mm.frameRate = 12000 / t;
        mm.gotoAndPlay(0);
        mm.once(egret.Event.COMPLETE, () => {
            this.kGrpStream.removeChild(mm);
            f();
        }, this);
    }



    private clearMc() {
        this.mcArr.forEach((item) => {
            this.kGrpAction.removeChild(item);
            item = null;
        });
        this.mcArr = [];
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

    private kImgTapButton: eui.Image = new eui.Image(main_tap);
    // private kImgTapButton: eui.Image = new eui.Image(main_swipe);
    private showButton() {
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kGrpGuide.setChildIndex(this.kImgTapButton, 0);
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgTapButton.horizontalCenter = 0;
        // this.kImgTapButton.verticalCenter = 240;
        this.kImgTapButton.verticalCenter = 0;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgTapButton);
            egret.Tween.get(this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    }

}