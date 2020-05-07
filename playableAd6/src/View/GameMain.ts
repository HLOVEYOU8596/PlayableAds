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


    private hippies: dragonBones.EgretArmatureDisplay;
    private officelady: dragonBones.EgretArmatureDisplay;
    private geek: dragonBones.EgretArmatureDisplay;



    //引导相关变量
    private guideArr = [new egret.Point(382, 442), new egret.Point(574, 578),
    new egret.Point(612, 416), new egret.Point(814, 570),
    new egret.Point(790, 342),
    new egret.Point(1032, 546), new egret.Point(903, 286),
    // new egret.Point(640, 640)
    ];
    private mcArr: any[] = [];
    private cachSound = {};

    /**
     * 初始化游戏界面UI
    */
    private async initUI() {
       
        


        //初始化人物动画
        this.hippies = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(148, 270, 'hippies', this.kGrpPeople2, hippies_ske, hippies_tex, hippies_tex_d);
        this.hippies.animation.play('walk', 0);

        this.officelady = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(0, 0, 'officelady', this.kGrpPeople3, officelady_ske, officelady_tex, officelady_tex_d);
        this.officelady.animation.play('walk', 0);

        this.geek = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(0, 0, 'armatureName', this.kGrpPeople1, geek_ske, geek_tex, geek_tex_d);
        this.geek.animation.play('walk', 0);

        this.drumStickArr1 = [this.kDrumstick1, this.kDrumstick2, this.kDrumstick3];
        this.drumStickArr2 = [this.kDrumstick4, this.kDrumstick5, this.kDrumstick6];
        this.drumStickArr3 = [this.kImgDrumstick1, this.kImgDrumstick2, this.kImgDrumstick3,
        this.kImgDrumstick4, this.kImgDrumstick5, this.kImgDrumstick6];
        // this.drumStickArr4 = [this.kImgOrder1, this.kImgOrder2, this.kImgOrder3, this.kImgOrder4, this.kImgOrder5, this.kImgOrder6];

        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgBox.source = loading_c;
        this.drumStickArr3.forEach(item=>{item.source = main_food1});
        // this.drumStickArr4.forEach(item=>{item.source = main_order});
        this.kImgOrder1.source = main_order1;
        this.kImgOrder2.source = main_order2;
        this.kImgOrder3.source = main_order3;
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
            this.playFei(0, item.x - 65, item.y);
            this.playSmog(0, item.x + 50, item.y);
        }));
        //234,500,800
        this.producePeople();
    }

    private producePeople() {
        let arr = [800, 500, 234];
        egret.Tween.get(this[`kGrpPeople${3 - this.peopleNum}`]).to({ x: arr[this.peopleNum] }, 600).call(() => {
            if (this.peopleNum == 0) this.hippies.animation.play('stand', 0);
            if (this.peopleNum == 1) this.officelady.animation.play('stand', 0);
            if (this.peopleNum == 2) this.geek.animation.play('stand', 0);
            egret.Tween.get(this[`kGrpMenu${3 - this.peopleNum}`]).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut);
            this.peopleNum++;
            if (this.peopleNum != 3) this.producePeople();
            else this.setTimeCallBack(1000, this.initData.bind(this));
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
        this.hippies.animation.play('upset', 0);
        this.officelady.animation.play('upset', 0);
        // this.geek.animation.play('upset', 0);
        this.clearMc();
        GuideStep.instance.clearHand();
        let arr = this.drumStickArr1.concat(...this.drumStickArr2);
        arr.forEach(item => { item.x = item.x + 30; item.y = item.y - 50 });
        this.drumStickArr3.forEach((item) => {
            egret.Tween.get(item).to({ scaleX: 0, scaleY: 0 }, 300);
        });

        let a = 0;
        let scaleArr = [1, 0.9, 0.8];
        let tim: egret.Timer = new egret.Timer(200, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            egret.Tween.get(arr[a]).to({ scaleX: scaleArr[a >= 3 ? a - 3 : a], scaleY: scaleArr[a >= 3 ? a - 3 : a] }, 400, egret.Ease.elasticOut);
            a++;
        }, this);
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            GuideStep.instance.moveHand(this.showFries.bind(this));
        }, this)
    }

    private showFries() {
        let arr = this.drumStickArr1.concat(this.drumStickArr2);
        let a = 0;
        let tim: egret.Timer = new egret.Timer(150, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            arr[a].showImg2();
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
            arr[a].showImg3();
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            GuideStep.instance.moveHand(this.conactDrumstick.bind(this, true));
        }, this)
    }

    private async conactDrumstick(flag: boolean = false) {
        this.geek.animation.play('happy', 0);


        GuideStep.instance.clearHand();
        let arr = this.drumStickArr1.concat(this.drumStickArr2);
        let a = 0;
        let tim: egret.Timer = new egret.Timer(400, 3);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, async () => {
            if (a == 1) this.hippies.animation.play('happy', 0);
            if (a == 3) this.officelady.animation.play('happy', 0);
            if(a<2) this[`kImgOrder${a + 1}`].source = main_right;
            let system = ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, arr[a].x, arr[a].y, 700);
            egret.Tween.get(arr[a]).to({ scaleX: 0, scaleY: 0 }, 700);
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            // this.onCmplete();
            // GuideStep.instance.moveHand(this.openPlateForm.bind(this));
            GuideStep.instance.moveHand(this.openPlateForm.bind(this),2);
            this.setTimeCallBack(2400,this.showButton.bind(this));
        }, this)
        this.kImgBox.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openPlateForm,this);
    }
    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        // this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
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

    // private kImgTapButton: eui.Image = new eui.Image(main_tap);
    private kImgTapButton: eui.Image = new eui.Image(main_swipe);
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