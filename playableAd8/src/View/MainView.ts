// TypeScript file
type layoutMenu = {
    a: number,
    b: number,
    c: number
}
class MainView extends eui.Component implements eui.UIComponent {
    //单例写法
    private static _instance: MainView;
    public static get instance(): MainView {
        if (!this._instance) {
            this._instance = new MainView();
        }
        return this._instance;
    }
    private kGrpPeople1: eui.Group;
    private kGrpPeople2: eui.Group;
    private kGrpMenu1: eui.Group;
    private kGrpMenu2: eui.Group;

    private kImgBg1: eui.Image;
    private kImgPeople1: eui.Image;
    private kImgMenu1: eui.Image;
    private kImgPeople2: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgbg2: eui.Image;
    private kImgSwipe: eui.Image;

    private kImgRabbit: eui.Image;
    private kImgCoke1: eui.Image;
    private kImgCoke2: eui.Image;
    private kImgCoke3: eui.Image;
    private kImgRabbit1: eui.Image;
    private kImgRabbit2: eui.Image;
    private kImgRabbit3: eui.Image;
    private kImgBeef1: eui.Image;
    private kImgBeef2: eui.Image;
    private kImgBeef3: eui.Image;

    private kImgEgg: eui.Image;
    private kImgEgg1: eui.Image;
    private kImgEgg2: eui.Image;
    private kImgEgg3: eui.Image;
    private kImgEgg4: eui.Image;
    private kImgChicken: eui.Image;
    private kImgBear: eui.Image;
    private kImgMachie: eui.Image;

    private kImgCake1: eui.Image;
    private kImgCake2: eui.Image;
    private kImgCake3: eui.Image;
    private kImgTea1: eui.Image;
    private kImgTea2: eui.Image;
    private kImgTea3: eui.Image;

    private kImgA1: eui.Image;
    private kImgA2: eui.Image;
    private kImgA3: eui.Image;
    private kImgA4: eui.Image;
    private kImgA5: eui.Image;
    private kImgA6: eui.Image;

    private kImgHand: eui.Image;
    private kImgShadow1: eui.Image;
    private kImgShadow2: eui.Image;
    private kImgShadow3: eui.Image;
    private kImgRect: eui.Rect;
    private kImgChoice1: eui.Image;
    private kImgChoice2: eui.Image;
    private kGrpChoice: eui.Group;

    private arrLeft: eui.Image[];
    private arrMiddle: eui.Image[];
    private arrRight: eui.Image[];
    private rabbitArr: eui.Image[];
    private shadowArr: eui.Image[];

    private kImgOrder1: eui.Image;
    private kImgOrder2: eui.Image;
    private kImgOrder3: eui.Image;
    private kImgNum1: eui.Image;
    private kImgNum2: eui.Image;

    private rabbit1: dragonBones.EgretArmatureDisplay;
    private rabbit2: egret.MovieClip;

    private layoutMenu = [0, 0, 0];

    private tempIndex;

    //引导相关变量
    // new egret.Point(286, 498),new egret.Point(1024, 460)
    private guideArr = [new egret.Point(292, 612), new egret.Point(378, 442), new egret.Point(872, 606),
    new egret.Point(1006, 558), new egret.Point(952, 346)];
    private kGrpGuide: eui.Group;               //引导展示组

    private kGrpMain: eui.Group;                //主展示组

    // public gameStart: GameStart;                //游戏开始界面

    private kGrpAction: eui.Group;              //动画展示组
    private kGrpSnow: eui.Group;                //雪花
    private clickNum: number = 0;               //点击次数
    private swiperNum: number = 0               //滑动次数
    constructor() {
        super();

        this.skinName = "MainViewDevSkin";
        // this.skinName = "MainViewSkin";
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);

        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }

    /**
     * 初始化游戏界面UI
    */
    private initUI() {
        this.kGrpPeople1.x = this.kGrpPeople2.x = -200;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;

        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgPeople1.source = main_people2;
        this.kImgPeople2.source = main_people1;
        this.kImgMenu1.source = this.kImgMenu2.source = main_menu;
        this.kImgSwipe.source = main_swipe;
        this.kImgOrder3.source = main_menu2;
        this.kImgOrder1.source = main_cake;
        this.kImgOrder2.source = main_menu1;
        this.kImgShadow1.source = main_shadow1;
        this.kImgShadow2.source = main_shadow2;
        this.kImgShadow3.source = main_shadow3;
        this.kImgNum1.source = this.kImgNum2.source = main_x3;
        this.kImgRabbit.source = main_rabbit;
        this.kImgCoke1.source = main_coke1;
        this.kImgCoke2.source = this.kImgCoke3.source = main_coke2;
        this.kImgRabbit1.source = main_rabbit1;
        this.kImgRabbit2.source = main_rabbit2
        this.kImgRabbit3.source = main_rabbit3;
        this.kImgBeef1.source = main_beef1;
        this.kImgBeef2.source = main_beef2;
        this.kImgBeef3.source = main_beef3;

        this.kImgEgg.source = main_egg;
        this.kImgEgg1.source = main_egg1;
        this.kImgEgg2.source = main_egg2;
        this.kImgEgg3.source = main_egg3;
        this.kImgEgg4.source = main_egg4;
        this.kImgChicken.source = main_segg;
        this.kImgMachie.source = main_machie;
        this.kImgBear.source = main_bear;

        this.kImgCake1.source = this.kImgCake2.source = this.kImgCake3.source = main_cake;
        this.kImgTea1.source = main_tea1;
        this.kImgTea2.source = main_tea2;
        this.kImgTea3.source = main_tea3;
        this.kImgHand.source = main_guide_arrow;


        this.arrLeft = [this.kImgRabbit, this.kImgRabbit1, this.kImgRabbit2, this.kImgRabbit3, this.kImgCoke1, this.kImgCoke2, this.kImgCoke3, this.kImgBeef1, this.kImgBeef2, this.kImgBeef3];
        this.arrMiddle = [this.kImgEgg, this.kImgEgg1, this.kImgEgg2, this.kImgEgg3, this.kImgEgg4, this.kImgMachie, this.kImgChicken, this.kImgBear];
        this.arrRight = [this.kImgCake1, this.kImgCake2, this.kImgCake3, this.kImgTea1, this.kImgTea2, this.kImgTea3];
        this.rabbitArr = [this.kImgA1, this.kImgA2, this.kImgA3, this.kImgA4, this.kImgA5, this.kImgA6];
        this.shadowArr = [this.kImgShadow1, this.kImgShadow2, this.kImgShadow3];
        let arr = this.arrLeft.concat(this.arrMiddle, this.arrRight, this.rabbitArr);
        arr.forEach(item => { item.scaleX = item.scaleY = 0 });
        this.rabbitArr.forEach(item => { item.source = main_menu1 });

        this.playStartAni();
        this.addEvents();

    }

    /**
     *  @description 播放入场动画
     */
    private async playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        //281 697
        // this.kGrpMenu1.x = this.kGrpMenu2.x = 60;
        this.kImgPeople1.visible = this.kImgPeople2.visible = false;

        this.rabbit1 = await Dragon.createArmature(100, 260, 'easterbunny', this.kGrpPeople1, easterbunny1_ske_j, easterbunny1_tex, easterbunny1_tex_j);
        this.rabbit1.animation.play('walk');
        this.rabbit2 = <egret.MovieClip>await McManger.instance.getMcAtH5('rabbit2', rabbit2_j, rabbit2, 'walk');
        this.rabbit2.gotoAndPlay(0, 3);
        this.rabbit2.stop();

        this.rabbit2.scaleX = -2;
        this.rabbit2.scaleY = 2;
        this.rabbit2.x = 160;
        this.kGrpPeople2.addChild(this.rabbit2);
        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(async () => {
            this.kGrpPeople2.removeChild(this.rabbit2);
            this.rabbit2.stop(); this.rabbit2 = null;
            this.rabbit2 = <egret.MovieClip>await McManger.instance.getMcAtH5('rabbit2', rabbit2_j, rabbit2, 'stand');
            this.kGrpPeople2.addChild(this.rabbit2);
            this.rabbit2.gotoAndPlay(0, -1);
            this.rabbit2.scaleX = -2;
            this.rabbit2.scaleY = 2;
            this.rabbit2.x = 160;
            egret.Tween.removeTweens(this.kGrpPeople2);
            this.kGrpMenu2.visible = true;
            this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
        });


        this.setTimeCallBack(500, () => {
            egret.Tween.get(this.kGrpPeople1).to({ x: 313 }, 280).call(() => {
                this.rabbit1.animation.play('stand', 0);
                egret.Tween.removeTweens(this.kGrpPeople1);
                this.kGrpMenu1.visible = true;
                this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                this.initData();
                this.kImgRect.visible = true;

                this.showShadow();

            });
        });

    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        // GuideStep.instance.moveHand(this.clickButton.bind(this),3);
        this.kImgRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
    }

    private clickButton() {
        // GuideStep.instance.clearHand();
        // egret.Tween.removeTweens(this.shadowArr[this.clickNum]);
        // this.shadowArr[this.clickNum].visible = false;
        egret.Tween.removeAllTweens();
        this.shadowArr.forEach(item => { item.visible = false })
        this.clickNum++;
        this.openChoicePanel()
    }

    private showShadow() {
        let arr = [];
        for (let i = 0; i < this.layoutMenu.length; i++) {
            if (this.layoutMenu[i] === 0 && arr.length < 2) arr.push(i);
        }
        arr.forEach(item => {
            this.shadowArr[item].visible = true;
            egret.Tween.get(this.shadowArr[item], { loop: true }).to({ alpha: 0 }, 500).to({ alpha: 1 }, 500);
        })
    }

    private clickOrder1() {
        //586,138  586,198 586,272 964,268
        GuideStep.instance.clearHand();
        let pointArr: egret.Point[] = [new egret.Point(586, 272), new egret.Point(596, 198), new egret.Point(586, 138)];
        let arr = [this.kImgBeef1, this.kImgBeef2, this.kImgBeef3];
        arr.forEach((item, index) => {
            egret.Tween.get(item).to({ x: pointArr[index].x, y: pointArr[index].y }, 400).call(() => {
                item.visible = false;
            });
        });
        this.setTimeCallBack(400, async () => {
            let system = await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, pointArr[1].x, pointArr[1].y, 700);
            this.rabbit1.animation.play('happy', 2);
            this.kImgOrder3.source = main_right;
            egret.Tween.get(this.kGrpPeople1).wait(1500).to({ alpha: 0 }, 500);
            GuideStep.instance.moveHand(this.clickOrder2.bind(this));
        });
    }

    private clickOrder2() {
        GuideStep.instance.clearHand();
        let arr = [this.kImgA1, this.kImgA2, this.kImgA3];
        arr.forEach(item => {
            egret.Tween.get(item).to({ x: 964, y: 268 }, 400).call(() => {
                item.visible = false;
            });
        });

        this.setTimeCallBack(400, async () => {
            let system = await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, 964, 268, 700);
            this.kImgOrder2.source = main_right;
            this.kImgNum1.visible = false;
            GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
            this.setTimeCallBack(2400, this.showButton.bind(this));
        });
    }

    private openChoicePanel() {
        // switch (this.clickNum) {
        //     case 1:
        //         this.kImgChoice1.source = main_a1;
        //         this.kImgChoice2.source = main_a2;
        //         break;
        //     case 2:
        //         this.kImgChoice1.source = main_a1;
        //         this.kImgChoice2.source = main_a2;
        //         break;
        //     case 3:
        //         this.kImgChoice1.source = main_a1;
        //         this.kImgChoice2.source = main_a2;
        //         break;
        // }
        this.findShow();

        egret.Tween.get(this.kGrpChoice).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(() => {
            egret.Tween.get(this.kImgChoice1, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 400).to({ scaleX: 1, scaleY: 1 }, 200).wait(700);
            egret.Tween.get(this.kImgChoice2, { loop: true }).wait(700).to({ scaleX: 1.1, scaleY: 1.1 }, 400).to({ scaleX: 1, scaleY: 1 }, 200);
        });
    }

    private findShow() {
        let arr = [];
        let flag = false;
        let imgArr: string[] = [main_a, main_b, main_c];
        for (let i = 0; i < this.layoutMenu.length; i++) {
            if (this.layoutMenu[i] === 0 && arr.length < 2) arr.push(i);
        }

        if (arr.length < 2) {
            arr.push(this.tempIndex - 1);
            flag = true;
        }
        this.kImgChoice1.source = imgArr[arr[0]];
        this.kImgChoice1.name = arr[0] + 1;

        this.kImgChoice2.source = imgArr[arr[1]];
        this.kImgChoice2.name = arr[1] + 1;
        if (flag) {
            this.kImgChoice2.name = arr[0] + 1;
        }
    }

    private showMenu(event: egret.TouchEvent) {
        egret.Tween.removeAllTweens();
        this.kGrpChoice.scaleX = this.kGrpChoice.scaleY = 0;
        this.kImgChoice1.scaleX = this.kImgChoice1.scaleY = this.kImgChoice2.scaleX = this.kImgChoice2.scaleY = 1;
        this.kImgRect.visible = false;
        this.layoutMenu[event.target.name - 1]++;
        this.tempIndex = event.target.name;
        let arr = this.filterImg(event.target.name);
        let num = 0;
        let t = new egret.Timer(100, 0);

        t.addEventListener(egret.TimerEvent.TIMER, () => {
            if (num === arr.length) {
                t.stop(); t = null;
                if (this.clickNum == 3) {
                    this.kImgRect.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
                    GuideStep.instance.moveHand(this.clickOrder1.bind(this), 2); return;
                }
                this.kImgRect.visible = true;

                // GuideStep.instance.moveHand(this.clickButton.bind(this));
                this.showShadow();
                // this.shadowArr[this.clickNum].visible = true;
                // egret.Tween.get(this.shadowArr[this.clickNum], { loop: true }).to({ alpha: 0 }, 500).to({ alpha: 1 }, 500);
            }
            if (arr[num]) egret.Tween.get(arr[num]).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
            num++;
        }, this);
        t.start();
    }

    private filterImg(c): eui.Image[] {
        let arr: eui.Image[] = [];
        switch (c) {
            case 1:
                arr.push(...this.arrLeft);
                break;
            case 2:
                arr.push(...this.arrMiddle, ...this.rabbitArr);
                break;
            case 3:
                arr.push(...this.arrRight);
                break;
        }
        // if (c == 2) {
        //     arr = this.deleteElement(arr, this.kImgRabbit, this.kImgCoke1, this.kImgCoke2, this.kImgCoke3);
        //     arr = this.deleteElement(arr, this.kImgEgg);
        //     arr = this.deleteElement(arr, this.kImgTea1, this.kImgTea2, this.kImgTea3);
        // }
        return arr;
    }

    private deleteElement(arr: any[], ...c): eui.Image[] {
        c.forEach(item => {
            let index = arr.indexOf(item);
            if (index > -1) arr.splice(index, 1);
        });
        return arr;
    }

    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgChoice1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMenu, this);
        this.kImgChoice2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMenu, this);
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

    private showButton() {
        this.kImgSwipe.visible = true;
        this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
        egret.Tween.get(this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgSwipe);
            egret.Tween.get(this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    }
}