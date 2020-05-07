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
    private kGrpPeople1: eui.Group;
    private kGrpPeople2: eui.Group;
    private kGrpMenu1: eui.Group;
    private kGrpMenu2: eui.Group;
    private drumArr: Drumstick[] = [];

    private kImgBg1: eui.Image;
    private kImgPeople1: eui.Image;
    private kImgMenu1: eui.Image;
    private kImgNum1: eui.Image;
    private kImgPeople2: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgNum2: eui.Image;
    private kImgbg2: eui.Image;
    private kImgSwipe: eui.Image;
    private mcArr:any[] = [];
    private kGrpFei:eui.Group;
    private kImgD1:eui.Image;
    private kImgD2:eui.Image;
    private kImgD3:eui.Image;

    private kImgOrder1:eui.Image;
    private kImgOrder2:eui.Image;
    private kImgDi:eui.Image;
    private kImgCandy:eui.Image;

    // private a1_mc:egret.MovieClip;
    // private a2_mc:egret.MovieClip;
    private geek: dragonBones.EgretArmatureDisplay;
    private gramma: dragonBones.EgretArmatureDisplay;

    private pao:egret.Timer = new egret.Timer(600);


    //引导相关变量
    private guideArr = [new egret.Point(846, 560), new egret.Point(846, 560), new egret.Point(846, 560),   
    new egret.Point(583, 30),
    new egret.Point(712, 586), new egret.Point(712, 586), new egret.Point(712, 586),
    // new egret.Point(400, 632),
    new egret.Point(506, 534), new egret.Point(538, 274), new egret.Point(710, 536),
    new egret.Point(662, 276), new egret.Point(934, 524), new egret.Point(796, 284)];
    //  new egret.Point(400, 632), new egret.Point(400, 632),
    private kGrpGuide: eui.Group;               //引导展示组

    private kGrpMain: eui.Group;                //主展示组

    public gameStart: GameStart;                //游戏开始界面

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
        // this.playShade();
        for (let i = 2; i >= 0; i--) {
            for (let j = 2; j >= 0; j--) {
                let drum = Drumstick.produce();
                drum.anchorOffsetX = drum.width / 2;
                drum.anchorOffsetY = drum.height / 2;
                drum.x = pointJson[`${i}_${j}`].x;
                drum.y = pointJson[`${i}_${j}`].y - 30;
                drum.scaleX = drum.scaleY = pointJson[`${i}_${j}`].scale;
                // drum.setData({ status: 1 ,filter:this.filter});
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
                // this.playSmog(0,drum.x,drum.y);
                // drum.filters = [this.filter];
            }
        }

        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgPeople1.source = main_people2;
        this.kImgPeople2.source = main_people1;
        this.kImgMenu1.source = this.kImgMenu2.source = main_menu;
        this.kImgNum1.source = main_x3;
        this.kImgNum2.source = main_x6;
        this.kImgSwipe.source = main_swipe;
        this.kImgNum1.visible = this.kImgNum2.visible = false; 
        this.kImgOrder1.source = main_order1;
        this.kImgOrder2.source = main_order2;
        this.kImgDi.source = main_di;
        this.kImgCandy.source = main_candy;
        // this.kImgD1.source = this.kImgD2.source = this.kImgD3.source = main_drumstick0;

        this.playStartAni();
        this.addEvents();

    }

    /**
     *  @description 播放入场动画
     */
    private async playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        // this.playSmog(0,this.kImgD1.x,this.kImgD1.y);
        // this.playSmog(0,this.kImgD2.x,this.kImgD2.y);
        // this.playSmog(0,this.kImgD3.x,this.kImgD3.y);
        // this.playFei(0,this.kImgD1.x-65,this.kImgD1.y-10);
        // this.playFei(0,this.kImgD2.x-65,this.kImgD2.y-10);
        // this.playFei(0,this.kImgD3.x-65,this.kImgD3.y-10);
        this.kImgPeople2.visible = false;
        this.kImgPeople1.visible = false;
        this.geek = await Dragon.createArmature(0,-30,'geek',this.kGrpPeople1,geek_ske_j,geek_tex,geek_tex_j);
        this.gramma = await Dragon.createArmature(100,160,'gramma',this.kGrpPeople2,gramma_ske_j,gramma_tex,gramma_tex_j);
        this.gramma.scaleX = -1;
        this.geek.animation.play('walk',-1);this.gramma.animation.play('walk',-1);
        //281 697
        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(() => {
            this.gramma.animation.play('stand',-1);
            egret.Tween.removeTweens(this.kGrpPeople2);
            this.kGrpMenu2.visible = true;
            this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
        });


        this.setTimeCallBack(500, () => {
            egret.Tween.get(this.kGrpPeople1).to({ x: 281 }, 280).call(() => {
                this.geek.animation.play('stand',-1);
                egret.Tween.removeTweens(this.kGrpPeople1);
                this.kGrpMenu1.visible = true;
                this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                this.initData();
            });
        });

    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    }

    private clickButton() {
        egret.log("点击");
        let char: string = (3 + Math.floor(this.clickNum / 3)).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        for (let i = 0; i < 3; i++)this.drumArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3][`showImg${char}`]();
        if(this.clickNum == 3){
            this.gramma.animation.play('angry',-1);
            GuideStep.instance.moveHand(this.clickCandy.bind(this));
            return;
        }
        if(this.clickNum == 4){
            this.gramma.animation.play('stand',-1);
            this.pao.stop();
        }
        if (this.clickNum == 6) {
            // GuideStep.instance.moveHand(this.downHam.bind(this));
            GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
            return;
            // this.setTimeCallBack(600, () => {
            //     SoundManager.instance.playEffect(SoundConst.down);
            //     GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
            // });
        }
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    }

    private clickCandy(){
        GuideStep.instance.clearHand();
        this.gramma.animation.stop();
        this.gramma.animation.play("happy",-1);
        this.playPao(670,200,250);
        this.pao.addEventListener(egret.TimerEvent.TIMER,this.playPao.bind(this,670,200,250),this);
        this.pao.start();
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    }



    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    }

    private downHam() {
        this.drumArr.forEach((item: Drumstick) => {
            item.showImg5();
        });
        SoundManager.instance.playEffect(SoundConst.down);
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, () => {
            GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
        })

    }

     private async playFei(t: number, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mc_j, mc, "soil");
        this.kGrpAction.addChild(mm);
        mm.x = x;
        mm.y = y;
        mm.gotoAndPlay(0, -1);
        // this.mcArr.push(mm);
    }

    private async playSmog(t: number, x, y) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, smoke_j, smoke, x, y);
        system.alpha = 0.2;
        this.mcArr.push(system);
    }

    private conacthHam() {
        this.swiperNum++;
        GuideStep.instance.clearHand();
        let arr = [new egret.Point(541, 332), new egret.Point(957, 332), new egret.Point(957, 332)];
        for (let i = 0; i < 3; i++) {
            egret.Tween.get(this.drumArr[(i + 1) * 3 - this.swiperNum]).to({ x: arr[this.swiperNum - 1].x, y: arr[this.swiperNum - 1].y }, 150);
            // this.mcArr[(i + 1) * 3 - this.swiperNum].parent.removeChild(this.mcArr[(i + 1) * 3 - this.swiperNum]);
        }
        this.setTimeCallBack(160, async () => {
            this.drumArr[6 - this.swiperNum].visible = this.drumArr[3 - this.swiperNum].visible = false;
            egret.Tween.get(this.drumArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 567 : 987, y: 105, scaleX: 0.6, scaleY: 0.6 }, 150).call(() => {
                this.drumArr[9 - this.swiperNum].visible = false;
            });
            // let x = ParticleUtil.instance.creatParticle("coin", this.kGrpSnow, arr[this.swiperNum-1].x, arr[this.swiperNum-1].y-200,700);
            let x = await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, arr[this.swiperNum - 1].x, arr[this.swiperNum - 1].y - 200, 700);
            SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
            if (this.swiperNum == 1) {this.geek.animation.play('happy',-1);}
            this.setTimeCallBack(700, () => {
                x["stop"]();
                if (this.swiperNum == 1) {
                    this.kGrpMenu1.visible = false;
                    this.setTimeCallBack(2000,()=>{this.geek.visible = false});
                    GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                } else if (this.swiperNum == 2) {
                    // this.kImgNum2.source = main_x3;
                    this.kImgOrder2.source = main_order1;
                    GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                    this.kImgSwipe.visible = true;
                    this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
                    egret.Tween.get(this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
                        egret.Tween.removeTweens(this.kImgSwipe);
                        egret.Tween.get(this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
                    });
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
        parent.postMessage('download','*');
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

    private playPao(x,random,y) {
        //400-600，100-336
        let arr1: eui.Image[] = [];
        // let arr2: eui.Image[] = [];
        for (let i = 0; i < 4; i++) {
            let point1 = new egret.Point(x + Math.random() * random, y);
            // let point2 = new egret.Point(400 + Math.random() * 200, 336);
            let img1 = new eui.Image(main_heart);
            // let img2 = new eui.Image(main_hand);
            img1.anchorOffsetX = 37;
            img1.anchorOffsetY = 29;
            // img2.anchorOffsetX = 40;
            // img2.anchorOffsetY = 45;
            img1.x = point1.x;
            img1.y = point1.y;
            // img2.x = point2.x;
            // img2.y = point2.y;
            img1.scaleX = img1.scaleY = 0.5;
            img1.alpha  = 0;
            this.kGrpSnow.addChild(img1);
            // this.kGrpSnow.addChild(img2);
            arr1.push(img1);
            // arr2.push(img2);
        }
        arr1.forEach(item => {
            egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: y-10, x: x + Math.random() * random }, 300)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y-25 }, 100).to({ scaleX: 1, scaleY: 1, y: y-40 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y-55 }, 100).to({ scaleX: 1, scaleY: 1, y: y-70 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y-85 }, 100).to({ scaleX: 1, scaleY: 1, y: y-100 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y-115 }, 100).to({ scaleX: 1, scaleY: 1, y: y-130 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y-145, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: y-160, alpha: 0 }, 200).call(()=>{
                    this.kGrpSnow.removeChild(item);
                });
        });
        // arr2.forEach(item => {
        //     egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: 250, x: 400 + Math.random() * 200 }, 300)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 235 }, 100).to({ scaleX: 1, scaleY: 1, y: 220 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 205 }, 100).to({ scaleX: 1, scaleY: 1, y: 190 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 175 }, 100).to({ scaleX: 1, scaleY: 1, y: 160 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 145 }, 100).to({ scaleX: 1, scaleY: 1, y: 130 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 115, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: 100, alpha: 0 }, 200);
        // });
    }
}