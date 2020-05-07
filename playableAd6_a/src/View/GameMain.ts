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
    private kGrpMain: eui.Group;
    private kGrpGuide: eui.Group;
    private kGrpClose: eui.Group;
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

    private kImgBow1:eui.Image;
    private kImgBow2:eui.Image;
    private kImgBow3:eui.Image;

    private kImgFood1: eui.Image;
    private kImgFood2: eui.Image;
    private kImgFood3: eui.Image;
    private kImgFood4: eui.Image;
    private kImgContent: eui.Image;
    private kImgTips: eui.Image;
    private kImgHand: eui.Image;
    private kImgBg:eui.Image;
    private kImgEndBg:eui.Image;
    private kImgTopic:eui.Image;


    private hippies: dragonBones.EgretArmatureDisplay;
    private officelady: dragonBones.EgretArmatureDisplay;
    private geek: dragonBones.EgretArmatureDisplay;



    //引导相关变量
    private guideArr = [new egret.Point(382, 442), new egret.Point(657, 665),
    new egret.Point(848, 660), new egret.Point(631, 548),
    new egret.Point(790, 342),
    // new egret.Point(1032, 546), new egret.Point(942, 350),
    new egret.Point(640, 640)
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
        this.drumStickArr4 = [this.kImgOrder1, this.kImgOrder2, this.kImgOrder3, this.kImgOrder4, this.kImgOrder5, this.kImgOrder6];

        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgBox.source = loading_c;
        this.drumStickArr3.forEach(item=>{item.source = main_food1});
        this.drumStickArr4.forEach(item=>{item.source = main_order});
        this.kImgMenu1.source = this.kImgMenu2.source = this.kImgMenu3.source = main_menu;
        this.kImgLux.source = main_lux;
        this.kImgBow1.source = this.kImgBow2.source = this.kImgBow3.source = main_bow;

        this.kImgEndBg.source = end_bg;
        this.kImgFood1.source = end_fodo1;
        // this.kImgFood2.source = end_food2;
        this.kImgFood3.source = end_food3;
        // this.kImgFood4.source = end_food4;
        this.kImgContent.source = end_topic;
        this.kImgTips.source = end_tips;
        this.kImgHand.source = main_guide_arrow;


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
            this.playFei(this.kGrpMain.getChildIndex(item), item.x - 65, item.y+20,);
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
        }, this)
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
            // GuideStep.instance.moveHand(this.openPlateForm.bind(this, true));
        }, this)
    }

    private async conactDrumstick(flag: boolean = false) {
        this.geek.animation.play('happy', 0);


        GuideStep.instance.clearHand();
        let arr = this.drumStickArr1.concat(this.drumStickArr2);
        let a = 0;
        let tim: egret.Timer = new egret.Timer(400, 6);
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, async () => {
            if (a == 2) this.hippies.animation.play('happy', 0);
            if (a == 4) this.officelady.animation.play('happy', 0);
            this[`kImgOrder${a + 1}`].source = main_right;
            let system = ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, arr[a].x, arr[a].y, 700);
            egret.Tween.get(arr[a]).to({ scaleX: 0, scaleY: 0 }, 700);
            a++;
        }, this);
        GuideStep.instance.clearHand();
        tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
            tim.stop(); tim = null;
            this.onCmplete();
            GuideStep.instance.moveHand(this.openPlateForm.bind(this));
            // this.onCmplete1();
        }, this)
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

    private onCmplete1() {
        GuideStep.instance.clearHand();
        this.setTimeCallBack(0, () => {
            this.kGrpClose.visible = true;
            this.kGrpClose.scaleX = 1.126;
            this.kGrpClose.scaleY = 1.125;
            //2,3 90 28  1,4 964,861  tip:634
            this.kImgHand.visible = false;
            egret.Tween.get(this.kImgFood1).to({ x: 770+172-60 }, 800, egret.Ease.backOut);
            // egret.Tween.get(this.kImgFood2).to({ x: 380+59 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgFood3).to({ x: 50+195+40 }, 800, egret.Ease.backOut);
            // egret.Tween.get(this.kImgFood4).to({ x: 663+53 }, 800, egret.Ease.backOut);
            let a = 0;
            egret.Tween.get(this.kImgTips).to({ y: 560 }, 800, egret.Ease.sineOut).wait(200).call(()=>{
                this.kImgHand.visible = true;
                 egret.Tween.get(this.kImgHand,{loop:true}).to({x:918},1000).call(()=>{
                     egret.Tween.get(this.kImgFood1).to({scaleX:0.8,scaleY:0.8},300).wait(300).to({scaleX:1,scaleY:1},100);
                 }).wait(500).to({x:218},1000).call(()=>{
                     egret.Tween.get(this.kImgFood3).to({scaleX:0.8,scaleY:0.8},300).wait(300).to({scaleX:1,scaleY:1},100);
                 }).wait(500);
                 
            });

            egret.Tween.get(this.kImgContent, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1000);

            // egret.Tween.get(this.kImgHand, { loop: true }).to({ y: 445 }, 500).to({ alpha: 0 }, 300).call(() => {
            //     this.kImgHand.y = 500;
            //     this.kImgHand.alpha = 1;
            // });
            // egret.Tween.get(this.kImgHand,{loop:true}).to({x:936},1000).wait(500).to({x:200},1000).wait(500);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.openPlateForm, this);
            // this.playLux();
        });
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
        this.kGrpMain.addChild(mm);
        this.kGrpMain.setChildIndex(mm,t+1);
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
            if(item.parent == this.kGrpMain) this.kGrpMain.removeChild(item);
            else this.kGrpAction.removeChild(item);
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
    private showButton() {
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kGrpGuide.setChildIndex(this.kImgTapButton, 0);
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgTapButton.horizontalCenter = 0;
        this.kImgTapButton.verticalCenter = 240;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgTapButton);
            egret.Tween.get(this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    }

}