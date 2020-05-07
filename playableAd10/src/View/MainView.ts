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

    private kImgBg1: eui.Image;
    private kImgBg2: eui.Image;
    private kImgSwipe: eui.Image;
    private kImgHand: eui.Image;
    private kImgTips2: eui.Image;

    //锤子
    private kGrpPeople: eui.Group;
    private kImgPeople: eui.Image;
    private kImgTips: eui.Image;
    private kImgSetting1: eui.Image;
    private kImgSetting2: eui.Image;
    private kImgSetting3: eui.Image;
    private kImgSetting4: eui.Image;
    //树 13/24
    private kImgTree1: eui.Image;
    private kImgTree2: eui.Image;
    private kImgTree3: eui.Image;
    private kImgTree4: eui.Image;
    //泳池,游泳圈
    private kImgPool1: eui.Image;
    private kImgCirle1: eui.Image;
    private kImgCirle2: eui.Image;
    //伞
    private kImgUmbllear1: eui.Image;
    private kImgUmbllear2: eui.Image;
    //沙发
    private kImgChair1: eui.Image;
    private kImgChair2: eui.Image;
    //选项卡
    private kGrpMenu: eui.Group;
    private kImgRight: eui.Image;
    private kImgLine1: eui.Image;
    private kImgLine2: eui.Image;
    private kImgChoice1: eui.Image;
    private kImgChoice2: eui.Image;
    private kGrpChoice1: eui.Group;
    private kGrpChoice2: eui.Group;

    //endCard
    private kGrpEnd: eui.Group;
    private kBtnContinue: eui.Image;
    private kImgEnd: eui.Image;

    private mcArr: any[] = [];
    private settingArr: eui.Image[];
    private choiceType: number = 0;
    private buildArr: number[] = [0, 0, 0, 0];
    private tempIndex: number = 0;
    private callBack1: Function = () => { };
    private callBack2: Function = () => { };
    private tempTimer: number;
    // private a1_mc: egret.MovieClip;
    // private a2_mc: egret.MovieClip;
    //引导相关变量
    private guideArr = [new egret.Point(1042, 524), new egret.Point(714, 632), new egret.Point(714, 632),
    ];
    private kGrpGuide: eui.Group;               //引导展示
    private kGrpMain: eui.Group;                //主展示组
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
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgSwipe.source = main_swipe;
        this.kImgHand.source = main_guide_arrow;
        this.kImgTips2.source = main_tips1;

        this.settingArr = [this.kImgSetting1, this.kImgSetting2, this.kImgSetting3, this.kImgSetting4];
        this.settingArr.forEach(item => item.source = main_setting);
        this.kImgTree1.source = main_tree3;
        this.kImgTree2.source = main_tree4;
        this.kImgTree3.source = main_tree5;
        this.kImgTree4.source = main_tree6;
        this.kImgPool1.source = main_pool1;
        this.kImgCirle1.source = main_cirle3;
        this.kImgCirle2.source = main_cirle4;
        this.kImgUmbllear1.source = main_umbllera3;
        this.kImgUmbllear2.source = main_umbllera4;
        this.kImgChair1.source = main_chair3;
        this.kImgChair2.source = main_chair4;
        this.kImgEnd.source = main_end;
        this.kBtnContinue.source = main_continue
        this.kImgRight.source = main_right;
        this.kImgLine1.source = this.kImgLine2.source = main_check;
        this.kImgPeople.source = main_people;
        this.kImgTips.source = main_tips;
        //进行舞台场景初始化
        this.kGrpMenu.visible = false;
        this.kImgTree1.visible = this.kImgTree2.visible = this.kImgTree3.visible = this.kImgTree4.visible = false;
        this.kImgChair1.visible = this.kImgChair2.visible = false;
        this.kImgCirle1.visible = this.kImgCirle2.visible = false;
        this.kImgPool1.visible = false;
        this.kImgUmbllear1.visible = this.kImgUmbllear2.visible = false;
        this.settingArr.forEach(item => item.touchEnabled = false);

        this.playStartAni();
        this.addEvents();

    }

    /**
     *  @description 播放入场动画
     */
    private async playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        egret.Tween.get(this.kGrpPeople).to({ x: 0 }, 400).call(() => {
            egret.Tween.get(this.kImgTips).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut);
            this.initData();
            this.settingArr.forEach(item => {
                let y = item.y;
                egret.Tween.get(item, { loop: true }).to({ y: y - 30 }, 600).to({ y: y }, 400);
            });
        });
    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.setting4.bind(this));
    }

    private clickButton() {
        egret.log("点击");
        GuideStep.instance.clearHand();
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    }



    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgSetting1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting1, this);
        this.kImgSetting2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting2, this);
        this.kImgSetting3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting3, this);
        this.kImgSetting4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting4, this);
        this.kImgRight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeCard, this);
        this.kGrpChoice1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1, this);
        this.kGrpChoice2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2, this);
        this.kBtnContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    }

    private closeButton() {
        this.settingArr.forEach(item => item.visible = false);
    }
    //637,113  1111,198
    private setting1() {
        if (this.buildArr[0]) return;
        this.tempIndex = 0;
        this.showMenu(main_tree1, main_tree2);
        this.callBack1 = () => {
            this.playAnimation(this.kImgTree1);
            this.playAnimation(this.kImgTree3);
            this.kImgTree1.visible = this.kImgTree3.visible = true;
            this.kImgTree2.visible = this.kImgTree4.visible = false;
        }
        this.callBack2 = () => {
            this.playAnimation(this.kImgTree2);
            this.playAnimation(this.kImgTree4);
            this.kImgTree1.visible = this.kImgTree3.visible = false;
            this.kImgTree2.visible = this.kImgTree4.visible = true;
        }
    }

    private setting2() {
        if (this.buildArr[1]) return;
        this.tempIndex = 1;
        this.showMenu(main_umbllera1, main_umbllera2);
        this.callBack1 = () => {
            this.playAnimation(this.kImgUmbllear1);
            this.kImgUmbllear1.visible = true;
            this.kImgUmbllear2.visible = false;
        }
        this.callBack2 = () => {
            this.playAnimation(this.kImgUmbllear2);
            this.kImgUmbllear1.visible = false;
            this.kImgUmbllear2.visible = true;
        }
    }

    private setting3() {
        if (this.buildArr[2]) return;
        this.tempIndex = 2;
        this.showMenu(main_chair1, main_chair2);
        this.callBack1 = () => {
            this.playAnimation(this.kImgChair1);
            this.kImgChair1.visible = true;
            this.kImgChair2.visible = false;
        }
        this.callBack2 = () => {
            this.playAnimation(this.kImgChair2);
            this.kImgChair1.visible = false;
            this.kImgChair2.visible = true;
        }
    }

    private setting4() {
        if (this.buildArr[3]) return;
        this.settingArr.forEach(item => item.touchEnabled = true);
        this.kGrpPeople.visible = false;
        GuideStep.instance.clearHand();
        this.tempIndex = 3;
        this.showMenu(main_circle1, main_cirle2);
        this.callBack1 = () => {
            this.playAnimation(this.kImgPool1);
            this.playAnimation(this.kImgCirle1);
            this.kImgPool1.visible = true;
            this.kImgPool1.source = main_pool1;
            this.kImgCirle1.visible = true;
            this.kImgCirle2.visible = false;
        }
        this.callBack2 = () => {
            this.playAnimation(this.kImgPool1);
            this.playAnimation(this.kImgCirle2);
            this.kImgPool1.visible = true;
            this.kImgPool1.source = main_pool2;
            this.kImgCirle1.visible = false;
            this.kImgCirle2.visible = true;
        }
    }

    private touch1(a) {
        this.checkGuide(a);
        this.buildArr[this.tempIndex] = this.choiceType = 1;
        this.kImgLine1.source = main_checked;
        this.kImgLine2.source = main_check;
        this.callBack1();
    }

    private checkGuide(a) {
        if (a) {
            egret.clearTimeout(this.tempTimer);
            egret.Tween.removeTweens(this.kImgHand);
            egret.Tween.removeTweens(this.kImgTips2);
            this.kImgTips2.visible = false;
            this.kImgHand.x = this.kGrpMenu.x + 470; this.kImgHand.y = this.kGrpMenu.y + 83;
            egret.Tween.get(this.kImgHand, { loop: true }).
                to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut)
                .to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut);
        }
    }

    private touch2(a) {
        this.checkGuide(a);
        this.buildArr[this.tempIndex] = this.choiceType = 2;
        this.kImgLine1.source = main_check;
        this.kImgLine2.source = main_checked;
        this.callBack2();
    }

    private showMenu(source1: string, source2: string) {
        this.closeButton();
        egret.clearTimeout(this.tempTimer);
        this.setTimeCallBack(3000,this.showTips2.bind(this));
        this.kGrpMenu.visible = true;
        this.kImgChoice1.source = source1;
        this.kImgChoice2.source = source2;
        this.kGrpMenu.x = this.settingArr[this.tempIndex].x - 474;
        this.kGrpMenu.y = this.settingArr[this.tempIndex].y - 85;
        if (this.tempIndex == 3) {
            this.kGrpMenu.x = 478;
            this.kGrpMenu.y = 287;
        }
        if (this.tempIndex == 2) {
            this.kGrpMenu.x = 543;
            this.kGrpMenu.y = 512;
        }
        if (this.tempIndex == 1) {
            this.kGrpMenu.x = 269;
            this.kGrpMenu.y = 500;
        }
        this.kImgHand.visible = true;
        this.kImgHand.touchEnabled = this.kImgTips2.touchEnabled = false;
        this.kImgHand.x = this.kGrpMenu.x + 91;
        this.kImgHand.y = this.kGrpMenu.y + 63;
        let x = this.kImgHand.x;
        if(this.tempIndex === 3 ) egret.Tween.get(this.kImgHand, { loop: true }).call(this.touch1.bind(this)).wait(300).to({ x: x + 183 }, 500).call(this.touch2.bind(this)).wait(300).to({ x: x }, 500);
        else egret.Tween.get(this.kImgHand, { loop: true }).wait(300).to({ x: x + 183 }, 500).wait(300).to({ x: x }, 500);
}

    private closeCard() {
        if (this.buildArr[this.tempIndex]) {
            egret.Tween.removeTweens(this.kImgHand);
            this.kImgHand.visible = false;
            this.callBack1 = this.callBack2 = () => { };
            this.choiceType = 0;
            this.kImgLine1.source = this.kImgLine2.source = main_check;
            this.kGrpMenu.visible = false;
            this.buildArr.forEach((item, index) => {
                if (item === 0) this.settingArr[index].visible = true;
            });
            this.checkSuccess();
        }
    }

    private checkSuccess() {
        let arr = this.buildArr.filter(item => { return item === 0 });
        if (arr.length == 0) {
            this.openPlateForm();
            this.kGrpEnd.visible = true;
            egret.Tween.get(this.kBtnContinue, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 300).to({ scaleX: 1, scaleY: 1 }, 100);
        } else {
            this.tempTimer = this.setTimeCallBack(3000, this.showTips2.bind(this));
        }
    }

    private showTips2() {
        this.kImgTips2.visible = true;
        egret.Tween.get(this.kImgTips2, { loop: true })
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1480);
    }

    private playAnimation(target: eui.Image) {
        egret.Tween.removeTweens(target);
        target.scaleX = target.scaleY = 1;
        egret.Tween.get(target).to({ scaleX: 1.2, scaleY: 1.2 }, 250, egret.Ease.quartOut).to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quartOut);
        this.playBuling(target.x, target.y, 300, 2);
    }

    private async playBuling(x: number, y: number, t: number, scale: number = 1) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, starJson, star, x, y - 60, t);
        system.scaleX = system.scaleY = scale;
        system.once(egret.Event.COMPLETE, () => { this.kGrpAction.removeChild(system); system.stop(); system = null }, this);
    }

    private async playSmog(t: number, x, y, target = null) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, smoke_j, smoke, x, y);
        system.alpha = 0.4;
        this.mcArr.push(system);
    }

    // //彩带动画
    // private playCaidai(num: number, delay: number) {
    //     let arr: eui.Image[] = [];
    //     let imgArr: string[] = [main_dai1, main_dai2, main_dai3,
    //         main_dai4, main_dai5, main_dai6,
    //         main_dai7, main_dai8, main_dai9,
    //         main_dai10];
    //     for (let i = 0; i < num; i++) {
    //         let img: eui.Image = new eui.Image(imgArr[Math.floor(Math.random() * 10)]);
    //         img.x = Math.floor(Math.random() * this.stage.width);
    //         img.y = 0;
    //         arr.push(img);
    //         let t = egret.setTimeout(() => {
    //             egret.clearTimeout(t);
    //             this.kGrpAction.addChild(img);
    //             egret.Tween.get(img).to({ rotation: Math.random() * 90 }, 300);
    //             egret.Tween.get(img).to({ y: this.stage.height }, 800).call(() => {
    //                 egret.Tween.removeTweens(img);
    //                 this.kGrpAction.removeChild(img);
    //             });
    //         }, this, delay * Math.random());
    //     }
    // }

    // //烟花动画
    // private playYanhua() {

    //     let t = Math.floor(Math.random() * 800);
    //     let arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
    //     let tim = egret.setTimeout(() => {
    //         egret.clearTimeout(tim);
    //         let p: egret.Point = this.createPoint();
    //         let img: eui.Image = new eui.Image(arr[Math.floor(Math.random() * 3)]);
    //         img.anchorOffsetX = 102.5;
    //         img.anchorOffsetY = 96.5;
    //         img.scaleX = img.scaleY = 0;
    //         img.x = p.x;
    //         img.y = p.y;
    //         this.kGrpAction.addChild(img);
    //         egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(() => {
    //             egret.Tween.removeTweens(img);
    //             this.kGrpAction.removeChild(img);
    //         });
    //     }, this, t);
    // }

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
        parent.postMessage('download', '*');
        if (window['ExitApi']) window['ExitApi'].exit();
        parent.postMessage('complete', '*');
    }

    //初始化游戏图片位置
    private initPoint(img: eui.Image, str: string) {
        img.anchorOffsetX = img.width / 2;
        img.anchorOffsetY = img.height / 2;

        // img.x = jso[str][0] + img.anchorOffsetX;
        // img.y = jso[str][1] + img.anchorOffsetY;
    }

    //设置延迟回调
    private setTimeCallBack(t: number, f: Function) {
        let ti = egret.setTimeout(() => {
            egret.clearTimeout(ti);
            f();
        }, this, t);
        return ti;
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