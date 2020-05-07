// TypeScript file
class MainView extends eui.Component implements eui.UIComponent {
    //单例写法
    private static _instance: MainView;
    public static get instance(): MainView {
        if (!this._instance) {
            this._instance = new MainView();
        }
        return this._instance;
    }
    private kGrpHam: eui.Group;
    private kProgress1: ProgressBar;
    private kProgress2: ProgressBar;
    private kProgress3: ProgressBar;
    private kGrpPeople1: eui.Group;
    private kGrpPeople2: eui.Group;
    private kGrpPeople3: eui.Group;
    private kGrpMenu1: eui.Group;
    private kGrpMenu2: eui.Group;
    private kGrpMenu3: eui.Group;
    private drumArr: Drumstick[] = [];

    private kImgBg1: eui.Image;
    private kImgPeople1: eui.Image;
    private kImgMenu1: eui.Image;
    private kImgNum1: eui.Image;
    private kImgPeople2: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgNum2: eui.Image;
    private kImgPeople3: eui.Image;
    private kImgMenu3: eui.Image;
    private kImgNum3: eui.Image;
    private kImgbg2: eui.Image;
    private kImgSwipe: eui.Image;

    private kBtnContinue: eui.Image;
    private kGrpTips: eui.Group;

    private kGrpShop: eui.Group;
    private kBtnUpgrade1: eui.Image;
    private kBtnUpgrade2: eui.Image;
    private kImgShop: eui.Image;
    private kImgGoods1: eui.Image;
    private kImgGoods2: eui.Image;

    private kImgPancake1: eui.Image;
    private kImgPancake2: eui.Image;
    private kImgPancake3: eui.Image;
    private kImgPancake4: eui.Image;
    private kImgPancake5: eui.Image;
    private kImgPancake6: eui.Image;
    private kImgLocked4: eui.Image;
    private kImgLocked5: eui.Image;
    private kImgLocked6: eui.Image;
    private kImgTipsBg: eui.Image;
    private kImgTips: eui.Image;
    private kImgRect: eui.Rect;
    private pancakeArr: eui.Image[];

    //引导相关变量
    private guideArr = [new egret.Point(1160, 639), new egret.Point(430, 654), new egret.Point(669, 657), new egret.Point(381, 596),
    new egret.Point(120, 510), new egret.Point(280, 304), new egret.Point(252, 510), new egret.Point(396, 302),
    new egret.Point(530, 580),
    new egret.Point(680, 580),
    new egret.Point(830, 580),
    new egret.Point(506, 534), new egret.Point(538, 274), new egret.Point(710, 536),
    new egret.Point(662, 276), new egret.Point(934, 524), new egret.Point(796, 284),];
    // private guideArr = [new egret.Point(170, 263), new egret.Point(170, 263), new egret.Point(170, 263),
    // new egret.Point(230, 263), new egret.Point(230, 263), new egret.Point(230, 263),
    // new egret.Point(290, 263),
    // new egret.Point(178, 241), new egret.Point(190, 138), new egret.Point(260, 241),
    // new egret.Point(240, 138), new egret.Point(340, 241), new egret.Point(280, 138),];
    private kGrpGuide: eui.Group;               //引导展示组

    private kGrpMain: eui.Group;                //主展示组

    // public gameStart: GameStart;                //游戏开始界面

    private kGrpAction: eui.Group;              //动画展示组
    private kGrpSnow: eui.Group;                //雪花
    private clickNum: number = 0;               //点击次数
    private swiperNum: number = 0               //滑动次数

    private time1: egret.Timer = new egret.Timer(60);
    private time2: egret.Timer = new egret.Timer(60);
    private time3: egret.Timer = new egret.Timer(60);
    private step: number = 1;
    private proMax: number = 50;
    constructor() {
        super();

        // this.skinName = "MainViewDevSkin";
        this.skinName = "MainViewSkin";
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }

    /**
     * 初始化游戏界面UI
    */
    private initUI() {
        this.kProgress1.thumb["source"] = main_progress;
        this.kProgress2.thumb["source"] = main_progress;
        this.kProgress3.thumb["source"] = main_progress;
        this.kProgress1.bg.source = main_progress_bg;
        this.kProgress2.bg.source = main_progress_bg;
        this.kProgress3.bg.source = main_progress_bg;
        for (let i = 2; i >= 0; i--) {
            for (let j = 2; j >= 0; j--) {
                let drum = Drumstick.produce();
                drum.anchorOffsetX = drum.width / 2;
                drum.anchorOffsetY = drum.height / 2;
                drum.x = pointJson[`${i}_${j}`].x;
                drum.y = (pointJson[`${i}_${j}`].y - 15);
                drum.scaleX = drum.scaleY = pointJson[`${i}_${j}`].scale;
                if (j > 0) {
                    drum.setData({ status: 2 });
                    drum.visible = false;
                } else {
                    drum.setData({ status: 1 });
                }
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
                // drum.filters = [this.filter];
            }
        }

        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgShop.source = main_jia;
        this.kImgGoods1.source = main_good1;
        this.kImgGoods2.source = main_good2;
        this.kImgLocked4.source = this.kImgLocked5.source = this.kImgLocked6.source = main_suo;
        this.kImgTipsBg.source = main_tips_bg;
        this.kImgTips.source = main_tips;
        this.kBtnUpgrade1.source = this.kBtnUpgrade2.source = main_upgrade;
        this.kBtnContinue.source = main_continue;

        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgPeople1.source = main_people2;
        this.kImgPeople2.source = main_people1;
        this.kImgPeople3.source = main_people3;
        this.kImgMenu1.source = this.kImgMenu2.source = this.kImgMenu3.source = main_menu;
        this.kImgNum1.source = main_x3;
        this.kImgNum2.source = main_x3;
        this.kImgNum3.source = main_x3;
        this.kImgSwipe.source = main_swipe;
        this.pancakeArr = [this.kImgPancake1, this.kImgPancake2, this.kImgPancake3, this.kImgPancake4, this.kImgPancake5, this.kImgPancake6];
        let arr = [1,.85,.75];
        this.pancakeArr.forEach((item,index) => { item.source = main_cake1;item.scaleX = item.scaleY = arr[index<3?index:index-3]});
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
        // this.kGrpMenu1.x = this.kGrpMenu2.x = 60;
        egret.Tween.get(this.kGrpPeople3).to({ x: 900 }, 700).call(() => {
            egret.Tween.removeTweens(this.kGrpPeople3);
            this.kGrpMenu3.visible = true;
            this.kGrpMenu3.scaleX = this.kGrpMenu3.scaleY = 0;
            egret.Tween.get(this.kGrpMenu3).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
            this.time3.start();
        });

        this.setTimeCallBack(500, () => {
            egret.Tween.get(this.kGrpPeople2).to({ x: 500 }, 280).call(() => {
                egret.Tween.removeTweens(this.kGrpPeople2);
                this.kGrpMenu2.visible = true;
                this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
                egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                // this.initData();
                this.time2.start();
            });
        });

        this.setTimeCallBack(1000, () => {
            egret.Tween.get(this.kGrpPeople1).to({ x: 180 }, 280).call(() => {
                egret.Tween.removeTweens(this.kGrpPeople1);
                this.kGrpMenu1.visible = true;
                this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                this.initData();
                this.time1.start();
            });
        });

    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.continue.bind(this));
        this.kGrpTips.visible = true;
        this.kGrpTips.scaleX = this.kGrpTips.scaleY = 0;
        egret.Tween.get(this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
    }

    private continue() {
        GuideStep.instance.clearHand();
        this.time1.stop(); this.time2.stop(); this.time3.stop();
        this.proMax = 80;
        this.kImgRect.visible = true;
        this.kGrpTips.visible = false;
        this.kBtnContinue.visible = false;
        egret.Tween.get(this.kGrpShop).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
        GuideStep.instance.moveHand(this.upgrade1.bind(this))
    }

    private upgrade1() {
        GuideStep.instance.clearHand();
        this.playBuling(this.kImgGoods1.localToGlobal().x + 120, this.kImgGoods1.localToGlobal().y + 120, 300);
        this.kImgGoods1.source = main_good3;
        this.kBtnUpgrade1.visible = false;
        // this.kImgPancake4.visible = this.kImgPancake5.visible = this.kImgPancake6.visible = true;
        this.kImgLocked4.visible = this.kImgLocked5.visible = this.kImgLocked6.visible = false;
        GuideStep.instance.moveHand(this.upgrade2.bind(this));
    }

    private upgrade2() {
        GuideStep.instance.clearHand();
        this.playBuling(this.kImgGoods2.localToGlobal().x + 120, this.kImgGoods2.localToGlobal().y + 120, 300);
        this.kImgGoods2.source = main_disks;
        this.kBtnUpgrade2.visible = false;
        this.drumArr.forEach(item => {
            item.visible = true;
        });
        this.setTimeCallBack(600, () => {
            this.kGrpShop.visible = false;
            this.kImgRect.visible = false;
            this.time1.delay = this.time2.delay = this.time3.delay = 300;
            this.time1.start(); this.time2.start(); this.time3.start();
            GuideStep.instance.moveHand(this.order1.bind(this));
        });
    }

    private order1() {
        GuideStep.instance.clearHand();
        let arr = [1,.85,.75];
        for (let i = 0; i < 3; i++) {
            this.pancakeArr[3 + i].visible = true;
            this.pancakeArr[3 + i].scaleX = this.pancakeArr[3 + i].scaleY = 0;
            egret.Tween.get(this.pancakeArr[3 + i]).to({ scaleX: arr[i], scaleY: arr[i] }, 600, egret.Ease.elasticOut);
            this.setTimeCallBack(400, () => {
                GuideStep.instance.moveHand(this.order2.bind(this), 2);
            });
        }
    }

    private order2() {
        GuideStep.instance.clearHand();
        for (let i = 1; i < 4; i++) {
            this.drumArr[i * 3 - 2].setData({ status: 1 });
            egret.Tween.get(this.pancakeArr[i - 1]).to({ scaleX: 0, scaleY: 0 }, 300);
        }
        this.setTimeCallBack(400, () => {
            GuideStep.instance.moveHand(this.order3.bind(this), 2);
        });
    }

    private order3() {
        GuideStep.instance.clearHand();
        for (let i = 1; i < 4; i++) {
            this.drumArr[i * 3 - 3].setData({ status: 1 });
            egret.Tween.get(this.pancakeArr[i + 2]).to({ scaleX: 0, scaleY: 0 }, 300);
        }
        this.setTimeCallBack(400, () => {
            GuideStep.instance.moveHand(this.clickButton.bind(this));
        });
    }

    private clickButton() {
        egret.log("点击");
        // let char: string = (3 + Math.floor(this.clickNum / 3)).toString();
        let char: string = (this.clickNum + 3).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        // for (let i = 0; i < 3; i++)this.drumArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3][`showImg${char}`]();
        this.drumArr.forEach(item => { item[`showImg${char}`](); });
        if (this.clickNum == 2) {
            this.setTimeCallBack(600, () => {
                GuideStep.instance.moveHand(this.downHam.bind(this));
            });
            return;
        }
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    }



    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.time1.addEventListener(egret.TimerEvent.TIMER, this.startProgress1, this);
        this.time2.addEventListener(egret.TimerEvent.TIMER, this.startProgress2, this);
        this.time3.addEventListener(egret.TimerEvent.TIMER, this.startProgress3, this);
    }

    private downHam() {
        this.drumArr.forEach((item: Drumstick) => {
            item.showImg5();
        });
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, () => {
            SoundManager.instance.playEffect(SoundConst.down);
            GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
            this.setTimeCallBack(2400, () => {
                this.kImgSwipe.visible = true;
                this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
                egret.Tween.get(this.kImgSwipe).to({ scaleX: 0.5, scaleY: 0.5 }, 700, egret.Ease.elasticOut).call(() => {
                    egret.Tween.removeTweens(this.kImgSwipe);
                    egret.Tween.get(this.kImgSwipe, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 0.5, scaleY: .5 }, 100);
                });
            })
        })
    }

    private conacthHam() {
        this.swiperNum++;
        GuideStep.instance.clearHand();
        let coinPoint = [new egret.Point(215, 85), new egret.Point(335, 85)];
        let arr = [new egret.Point(193, 168), new egret.Point(241, 168), new egret.Point(241, 168)];
        for (let i = 0; i < 3; i++) {
            egret.Tween.get(this.drumArr[(i + 1) * 3 - this.swiperNum]).to({ x: arr[this.swiperNum - 1].x, y: arr[this.swiperNum - 1].y }, 150);
        }
        this.setTimeCallBack(160, async () => {
            this.drumArr[6 - this.swiperNum].visible = this.drumArr[3 - this.swiperNum].visible = false;
            egret.Tween.get(this.drumArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 215 : 335, y: 85, scaleX: 0.6, scaleY: 0.6 }, 150).call(() => {
                this.drumArr[9 - this.swiperNum].visible = false;
            });
            // let x = ParticleUtil.instance.creatParticle("coin", this.kGrpSnow, arr[this.swiperNum-1].x, arr[this.swiperNum-1].y-200,700);
            let x = <particle.ParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, coinPoint[this.swiperNum - 1].x, coinPoint[this.swiperNum - 1].y, 700);
            x.scaleX = x.scaleY = 0.3;
            SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
            this.setTimeCallBack(700, () => {
                x["stop"]();
                if (this.swiperNum == 1) {
                    this.kGrpMenu1.visible = false;
                    GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                } else if (this.swiperNum == 2) {
                    this.kImgNum2.source = main_x3;
                    GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                    this.setTimeCallBack(2400, () => {
                        this.kImgSwipe.visible = true;
                        this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
                        egret.Tween.get(this.kImgSwipe).to({ scaleX: 0.5, scaleY: 0.5 }, 700, egret.Ease.elasticOut).call(() => {
                            egret.Tween.removeTweens(this.kImgSwipe);
                            egret.Tween.get(this.kImgSwipe, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 0.5, scaleY: .5 }, 100);
                        });
                    })
                }
            })
        });
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
        }, this, t);
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

    private startProgress1() {
        this.kProgress1.value += this.step;
        if (this.kProgress1.value > this.proMax) {
            this.time1.stop();
        }
    }
    private startProgress2() {
        this.kProgress2.value += this.step;
        if (this.kProgress2.value > this.proMax) {
            this.time2.stop();
        }
    }
    private startProgress3() {
        this.kProgress3.value += this.step;
        if (this.kProgress3.value > this.proMax) {
            this.time3.stop();
        }
    }

    private async playBuling(x: number, y: number, t: number, scale: number = 1) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpGuide, starJson, star, x, y - 60, t);
        system.scaleX = system.scaleY = scale;
        system.once(egret.Event.COMPLETE, () => { this.kGrpGuide.removeChild(system); system.stop(); system = null }, this);
    }
}