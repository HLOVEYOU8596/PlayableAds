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
    private kGrpMenu1: eui.Group;

    private kImgBg1: eui.Image;
    private kImgPeople1: eui.Image;
    private kImgMenu1: eui.Image;
    private kImgPeople2: eui.Image;
    private kImgbg2: eui.Image;
    private kImgSwipe: eui.Image;


    private kImgHand: eui.Image;
    private kImgRect: eui.Rect;
    private kImgChoice1: eui.Image;
    private kImgChoice2: eui.Image;
    private kGrpChoice: eui.Group;

    private arrLeft: eui.Image[];
    private arrMiddle: eui.Image[];
    private arrRight: eui.Image[];

    private kImgOrder1: eui.Image;
    private kImgOrder2: eui.Image;
    private kImgFood1: eui.Image;
    private kImgFood2: eui.Image;
    private kImgFood3: eui.Image;
    private kImgFood4: eui.Image;
    private kImgFood5: eui.Image;
    private kImgFood6: eui.Image;
    private kImgFood7: eui.Image;
    private kImgFood8: eui.Image;
    private kImgFood9: eui.Image;
    private kImgFood10: eui.Image;
    private kImgFood11: eui.Image;
    private kImgFood12: eui.Image;
    private kImgFood13: eui.Image;
    private kImgRight1: eui.Image;
    private kImgRight2: eui.Image;
    private kImgError: eui.Image;

    private people1: dragonBones.EgretArmatureDisplay;
    private people2: egret.MovieClip;
    private people3: egret.MovieClip;

    private foodArr: eui.Image[];

    private jumpFlag:boolean = true;;

    private adType:number = 0;

    private guideNum: number = 1;
    private scaleArr: number[] = [.8, .5, .8, .5, .8, .5];
    private callBack: Function = null;

    //引导相关变量
    // new egret.Point(286, 498),new egret.Point(1024, 460)
    private guideArr = [new egret.Point(494, 623), new egret.Point(349, 381), new egret.Point(1127, 578),
    new egret.Point(960, 528), new egret.Point(327, 496), new egret.Point(939, 431)];
    private kGrpGuide: eui.Group;               //引导展示组

    private kGrpMain: eui.Group;                //主展示组

    // public gameStart: GameStart;                //游戏开始界面

    private kGrpAction: eui.Group;              //动画展示组
    private kGrpSnow: eui.Group;                //雪花
    private clickNum: number = 0;               //点击次数
    private swiperNum: number = 0               //滑动次数
    private guideObj = {
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false,
    }
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
    private async initUI() {
        this.kGrpPeople1.x = -200;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;

        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;

        this.kImgMenu1.source = main_menu;
        this.kImgSwipe.source = main_swipe;

        this.kImgHand.source = main_guide_arrow;

        this.kImgFood1.source = main_ham;
        this.kImgFood2.source = main_shu;
        this.kImgFood3.source = main_shousi;
        this.kImgFood4.source = main_wine;
        this.kImgFood5.source = main_chicken;
        this.kImgFood6.source = main_coke;
        this.kImgFood7.source = main_shu;
        this.kImgFood8.source = main_cheng;
        this.kImgFood9.source = main_noodle;
        this.kImgFood10.source = main_zhi;
        this.kImgFood11.source = main_san;
        this.kImgFood12.source = main_pancake;
        this.kImgFood13.source = main_fish;
        this.kImgOrder1.source = main_order1;
        this.kImgOrder2.source = main_order2;
        this.kImgRight1.source = this.kImgRight2.source = main_right;
        this.kImgError.source = main_error;

        this.kImgChoice1.source = main_continue;
        this.kImgChoice2.source = main_skip;

        this.people1 = await Dragon.createArmature(0, -40, 'geek', this.kGrpPeople1, geek_ske_j, geek_tex, geek_tex_j);
        this.people1.scaleX = this.people1.scaleY = 1.2
        this.people1.animation.play('walk', 0);
        this.people2 = <egret.MovieClip>await McManger.instance.getMcAtH5('a1', a1_j, a1, 'a1');
        this.people3 = <egret.MovieClip>await McManger.instance.getMcAtH5('fatguy', fatguy_j, fatguy, 'stand');

        this.foodArr = [this.kImgFood1, this.kImgFood2, this.kImgFood3, this.kImgFood4, this.kImgFood5, this.kImgFood6,
        this.kImgFood7, this.kImgFood8, this.kImgFood9, this.kImgFood10, this.kImgFood11, this.kImgFood12, this.kImgFood13];

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
        this.kGrpMenu1.alpha = 1;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
        egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(() => {
            this.people1.animation.play('stand', 0);
            this.showMenu();
            this.showMenuGUide();
            this.initData();
        });
    }

    private comePeople1() {
        GuideStep.instance.guideStep = 2;
        this.kGrpMenu1.alpha = 1;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
        egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(() => {
            this.people2.gotoAndPlay(0, -1);
            this.showMenu();   
            if(this.adType === 3){
                this.jumpFlag = false;
                this.openChoice(this.showMenuGUide.bind(this));
            }
            else this.showMenuGUide();
        });
    }

    private comePeople2() {
        GuideStep.instance.guideStep = 4;
        this.kGrpMenu1.alpha = 1;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
        egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(() => {
            this.people3.gotoAndPlay(0, -1);
            this.showMenu();
            if(this.adType === 1) this.jumpFlag = false;
            this.openChoice(this.showMenuGUide.bind(this));    
        });
    }

    private comePeople3() {
        // GuideStep.instance.guideStep = 4;
        this.kGrpMenu1.alpha = 1;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
        egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(() => {
            this.people3.gotoAndPlay(0, -1);
            this.showMenu();
            this.openChoice(this.openPlateForm.bind(this));
            this.jumpFlag = false;
        });
    }

    private showMenu(){
        egret.Tween.removeTweens(this.kGrpPeople1);
        this.kGrpMenu1.visible = true;
        egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
    }

    private showMenuGUide() {
        
        egret.Tween.get(this.kImgOrder1, { loop: true })
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .wait(300);

        egret.Tween.get(this.kImgOrder2, { loop: true })
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .wait(300);

        this.setTimeCallBack(2000, () => {
            if (!this.guideObj[this.guideNum * 2 - 1]) GuideStep.instance.moveHand(this.clickButton.bind(this, { target: { name: this.guideNum * 2 - 1 } }));
        });
    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        // this.kImgRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
    }

    private async addCoin(p: egret.Point, scale) {
        let coinAni: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('coinDie', coinDie_j, coinDie, 'coinDie');
        coinAni.x = p.x; coinAni.y = p.y + 20;
        coinAni.scaleX = coinAni.scaleY = this.scaleArr[scale];
        coinAni.gotoAndPlay(0);
        this.kGrpSnow.addChild(coinAni);
    }

    private clickButton(e: egret.TouchEvent) {
        let cai = Number(e.target.name);
        if (cai <= this.guideNum * 2) {
            this.guideObj[cai] = true;
            let point1 = new egret.Point(624, 430);
            let point2 = new egret.Point(769, 430);
            let point = Boolean(cai % 2 === 0) ? point2 : point1;
            let img1: eui.Image = Boolean(cai % 2 === 0) ? this.kImgRight2 : this.kImgRight1;
            let img2: eui.Image = Boolean(cai % 2 === 0) ? this.kImgOrder2 : this.kImgOrder1;
            if (this.guideObj[this.guideNum * 2 - 1] && this.guideObj[this.guideNum * 2] && this.adType === 0&&this.guideNum == 3){
                this.openPlateForm();
                return;
            }
            GuideStep.instance.clearHand();
            this.foodArr[cai - 1].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
            egret.Tween.get(this.foodArr[cai - 1]).to({ x: point.x, y: point.y }, 400).call(() => {
                this.addCoin(this.guideArr[cai - 1], cai - 1);

                egret.Tween.removeTweens(img2);
                img2.rotation = 0;
                img1.visible = true;
                if (this.guideObj[this.guideNum * 2 - 1] && this.guideObj[this.guideNum * 2]) {
                    //769,178  900,178
                    egret.Tween.get(this.foodArr[this.guideNum * 2 - 1]).wait(500).to({ x: 900, y: 178 }, 300).call(() => { this.foodArr[this.guideNum * 2 - 1].visible = false; });
                    egret.Tween.get(this.foodArr[this.guideNum * 2 - 2]).wait(500).to({ x: 769, y: 178 }, 300).call(() => { this.foodArr[this.guideNum * 2 - 2].visible = false; }).wait(300).call(async () => {
                        egret.Tween.get(this.kGrpMenu1).wait(400).to({ alpha: 0 }, 600);
                        this.playPao();
                        if (this.guideNum === 1) {
                            this.people1.animation.play('happy', 0);
                            this.setTimeCallBack(1000, () => {
                                egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 500).call(() => {
                                    this.guideNum++;
                                    this.kGrpPeople1.x = -200;
                                    this.kGrpPeople1.removeChild(this.people1);
                                    this.kGrpPeople1.addChild(this.people2);
                                    this.people2.y = -30;
                                    // this.people2.x = 50;
                                    this.people2.scaleX = this.people2.scaleY = 1.4;
                                    this.comePeople1();
                                    this.kImgRight1.visible = this.kImgRight2.visible = false;
                                    this.kImgOrder1.source = main_order3;
                                    this.kImgOrder2.source = main_order4;
                                });
                            });
                        } else if (this.guideNum == 2) {
                            this.kGrpPeople1.removeChild(this.people2);
                            this.people2 = <egret.MovieClip>await McManger.instance.getMcAtH5('a1', a1_j, a1, 'a2');
                            this.people2.y = -30;
                            // this.people2.x = 0;
                            this.people2.scaleX = this.people2.scaleY = 1.3;
                            this.people2.gotoAndPlay(0, -1);
                            this.kGrpPeople1.addChild(this.people2);
                            this.setTimeCallBack(1000, () => {
                                egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 500).call(() => {
                                    this.guideNum++;
                                    this.kGrpPeople1.x = -200;
                                    this.kGrpPeople1.removeChild(this.people2);
                                    this.kGrpPeople1.addChild(this.people3);
                                    this.people3.scaleX = -1.3;
                                    this.people3.scaleY = 1.3;
                                    this.people3.y = -40;
                                    this.people3.x = 260;
                                    this.comePeople2();
                                    this.kImgRight1.visible = this.kImgRight2.visible = false;
                                    this.kImgOrder1.source = main_order5;
                                    this.kImgOrder2.source = main_order6;
                                });
                            });
                        } else if (this.guideNum == 3) {
                            this.kGrpPeople1.removeChild(this.people3);
                            this.people3 = <egret.MovieClip>await McManger.instance.getMcAtH5('fatguy', a1_j, a1, 'happy');
                            this.people3.scaleX = -1.3;
                            this.people3.scaleY = 1.3;
                            this.people3.y = -40;
                            this.people3.x = 260;
                            this.people3.gotoAndPlay(0, -1);
                            this.kGrpPeople1.addChild(this.people3);
                            if(this.adType === 0) {
                                // this.openPlateForm()
                                this.openChoice();
                                this.jumpFlag = false;
                            };
                            this.setTimeCallBack(1000, () => {
                                egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 500).call(() => {
                                    this.guideNum++;
                                    if(this.adType == 2){
                                        this.kGrpPeople1.x = -200;
                                        this.kGrpPeople1.removeChild(this.people3);
                                        this.kGrpPeople1.addChild(this.people1);
                                        this.kImgOrder1.source = main_pancake;
                                        this.kImgOrder2.source = main_zhi;
                                        this.kImgRight1.visible = this.kImgRight2.visible = false;
                                        this.people1.animation.play('stand',-1);
                                        this.comePeople3();
                                    }
                                });
                            });
                        }
                    });
                }
            });
            if (!this.guideObj[this.guideNum * 2] && cai % 2 === 1) {
                if (GuideStep.instance.guideStep % 2 === 0) {
                    GuideStep.instance.moveHand(this.clickButton.bind(this, { target: { name: this.guideNum * 2 } }));
                    GuideStep.instance.clearHand();
                }
                GuideStep.instance.moveHand(this.clickButton.bind(this, { target: { name: this.guideNum * 2 } }));
            } else if (cai % 2 === 0 && this.guideObj[this.guideNum * 2] && !this.guideObj[this.guideNum * 2 - 1]) {
                GuideStep.instance.guideStep = this.guideNum * 2 - 2;
                GuideStep.instance.moveHand(this.clickButton.bind(this, { target: { name: this.guideNum * 2 - 1 } }));
            }
        } else {
            let point = new egret.Point(e.target.x, e.target.y);
            this.kImgError.x = point.x;
            this.kImgError.y = point.y;
            this.kImgError.visible = true;
            this.kImgError.alpha = 1;
            egret.Tween.removeTweens(this.kImgError);
            egret.Tween.get(this.kImgError).to({ alpha: 0 }, 1000).call(() => {
                this.kImgError.visible = false;
                this.kImgError.alpha = 1;
            });
            return;
        }
    }

    private openChoice(callBack = () => { }) {
        this.callBack = callBack;
        this.kImgRect.visible = true;
        egret.Tween.get(this.kGrpChoice).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
    }

    private playPao() {
        //400-600，100-336
        let arr1: eui.Image[] = [];
        let arr2: eui.Image[] = [];
        for (let i = 0; i < 6; i++) {
            let point1 = new egret.Point(400 + Math.random() * 200, 336);
            let point2 = new egret.Point(400 + Math.random() * 200, 336);
            let img1 = new eui.Image(main_heart);
            let img2 = new eui.Image(main_hand);
            img1.anchorOffsetX = 37;
            img1.anchorOffsetY = 29;
            img2.anchorOffsetX = 40;
            img2.anchorOffsetY = 45;
            img1.x = point1.x;
            img1.y = point1.y;
            img2.x = point2.x;
            img2.y = point2.y;
            img1.scaleX = img1.scaleY = img2.scaleX = img2.scaleY = 0.5;
            img1.alpha = img2.alpha = 0;
            this.kGrpSnow.addChild(img1);
            this.kGrpSnow.addChild(img2);
            arr1.push(img1);
            arr2.push(img2);
        }
        arr1.forEach(item => {
            egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: 250, x: 400 + Math.random() * 200 }, 300)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 235 }, 100).to({ scaleX: 1, scaleY: 1, y: 220 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 205 }, 100).to({ scaleX: 1, scaleY: 1, y: 190 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 175 }, 100).to({ scaleX: 1, scaleY: 1, y: 160 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 145 }, 100).to({ scaleX: 1, scaleY: 1, y: 130 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 115, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: 100, alpha: 0 }, 200);
        });
        arr2.forEach(item => {
            egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: 250, x: 400 + Math.random() * 200 }, 300)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 235 }, 100).to({ scaleX: 1, scaleY: 1, y: 220 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 205 }, 100).to({ scaleX: 1, scaleY: 1, y: 190 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 175 }, 100).to({ scaleX: 1, scaleY: 1, y: 160 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 145 }, 100).to({ scaleX: 1, scaleY: 1, y: 130 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 115, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: 100, alpha: 0 }, 200);
        });
    }

    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.foodArr.forEach(item => {
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
        });
        this.kImgChoice1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeChoice, this);
        this.kImgChoice2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this)
    }

    private closeChoice() {
        
        if(!this.jumpFlag){
            this.openPlateForm();
            return;
        }
        if (this.callBack) this.callBack();
        this.kImgRect.visible = false;
        this.kGrpChoice.scaleX = this.kGrpChoice.scaleY = 0;
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