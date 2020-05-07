// TypeScript file
enum AD_TYPE {
    tap1 = 1,
    tap2 = 2,
    normal = 3
}
class GameMain extends eui.Component implements eui.UIComponent {
    private constructor() {
        super();
        // this.skinName = GameMainSkin;
        this.skinName = GameMainDevSkin;
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);
    }
    //单例写法
    private static _instance: GameMain;
    public static get instance(): GameMain {
        if (!this._instance) {
            this._instance = new GameMain();
        }
        return this._instance;
    }

    //344 ,662
    private kGrpAction: eui.Group;
    private kGrpGuide: eui.Group;
    private kGrpMain: eui.Group;
    private kGrpPeople: eui.Group;
    private kGrpMenu: eui.Group;
    private kGrpPao: eui.Group;

    private kGrpFood: eui.Group;
    private kImgCoke: eui.Image;

    private kLbPaoContent: eui.Label;
    private kImgPeople: eui.Image;
    private kImgOrder1: eui.Image;
    private kImgOrder2: eui.Image;
    private kImgAlert: eui.Image;
    private kImgPao:eui.Image;
    private kImgDesk:eui.Image;
    private kImgBg1:eui.Image;
    private kImgBg2:eui.Image;


    private mcArr: any = [];

    private adType: Number = AD_TYPE.normal;

    private guideArr = [new egret.Point(780, 624),
    new egret.Point(182, 600),
    new egret.Point(958, 638),
    new egret.Point(1134, 638),
    new egret.Point(1008, 488),
    new egret.Point(767, 264),
    new egret.Point(672, 436)];

    private aunt: egret.MovieClip;


    private async initUI() {
        this.aunt = <egret.MovieClip>await McManger.instance.getMcAtH5('stand',aunt_j,aunt,'walk');
        this.kGrpPeople.addChild(this.aunt);
        this.aunt.scaleY =  2;
        this.aunt.scaleX = -2;
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgAlert.source = main_alert_bg;
        this.kImgPeople.source = main_cook_3;
        this.kImgOrder1.source = main_order;
        this.kImgOrder2.source = main_coke1;
        this.kImgPao.source = pao;
        this.kImgDesk.source = main_small_bg;

        this.playStartAni();
        this.addEvents();
    }

    private async playStartAni() {
        // 182,620
        this.aunt.gotoAndPlay(0,1);
        egret.Tween.get(this.aunt).to({ x: 380 }, 1500).call(async() => {
            this.kGrpPeople.removeChild(this.aunt);
            this.aunt = null;
            this.aunt = <egret.MovieClip>await McManger.instance.getMcAtH5('stand',aunt_j,aunt,'stand');
            this.aunt.x = 380;
            this.aunt.scaleX = -2;this.aunt.scaleY = 2;
            this.kGrpPeople.addChild(this.aunt);
            this.aunt.gotoAndPlay(0,1);
            this.showTips(400,200,'1 Pancake\n1 Orange',()=>{
                egret.Tween.get(this.kGrpMenu).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut).call(() => {
                this.showTips(753, 284, "OK", () => {
                    GuideStep.instance.init(this.kGrpGuide, this.guideArr);
                    GuideStep.instance.moveHand(this.touchFirst.bind(this));
                    this.makeCoke();
                    this.kImgPeople.source = main_cook_1;
                })
            });
            })
            
        });
    }

    private addEvents() {

    }

    private async touchFirst() {
        GuideStep.instance.clearHand();

        await this.makePancake(182, 620);

        egret.Tween.get(this).wait(400).call(this.makePancake.bind(this, 316, 620))
            .wait(400).call(this.makePancake.bind(this, 460, 632))
            .wait(400).call(this.makePancake.bind(this, 592, 634)).call(egret.Tween.removeTweens.bind(this, this)).call(() => {
                GuideStep.instance.moveHand(this.touchSecond.bind(this));
            });


    }

    private touchSecond() {
        if (!this.kGrpFood) return;
        GuideStep.instance.clearHand();
        this.kGrpAction.removeChild(this.mcArr[0]);
        egret.Tween.get(this.kGrpFood).to({ x: 767, y: 264 }, 200).call(() => {
            GuideStep.instance.moveHand(this.touchThird.bind(this));
        });
    }

    private touchThird() {
        GuideStep.instance.clearHand();
        let img = new eui.Image(main_tomoto);
        img.horizontalCenter = 0;
        img.y = -70;
        this.kGrpFood.addChild(img);
        egret.Tween.get(img).to({ y: 25 }, 300, egret.Ease.quartOut).call(() => {
            GuideStep.instance.moveHand(this.touchFourth.bind(this));
        });
    }

    private touchFourth() {
        GuideStep.instance.clearHand();
        let img = new eui.Image(main_milk);
        img.horizontalCenter = 0;
        img.y = -70;
        this.kGrpFood.addChild(img);
        egret.Tween.get(img).to({ y: 20 }, 300, egret.Ease.quartOut).wait(300).call(() => {
            this.kImgPeople.source = main_cook_2;
            this.kGrpFood.x = 527;
            this.kGrpFood.y = 336;
            this.kGrpFood.scaleX = this.kGrpFood.scaleY = .7;

            egret.Tween.get(this.kGrpFood).wait(300).to({ x: 398, y: 132, scaleX: .5, scaleY: .5 }, 200).call(() => {
                this.kGrpFood.visible = false;
                this.kImgOrder1.source = main_right;
                ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coin_j, coin, 398, 132, 150);
                ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coin_j, diamond, 398, 132, 300);

                // this.aunt.animation.play('happy',0);
                this.kImgPeople.source = main_cook_1;
                GuideStep.instance.moveHand(this.touchFifth.bind(this));
            });
        });
    }

    private touchFifth() {
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kImgCoke).to({ x: 767, y: 264, scaleX: 1, scaleY: 1 }, 400).call(() => {
            GuideStep.instance.moveHand(this.touchSixth.bind(this));
        })
    }

    private touchSixth() {
        GuideStep.instance.clearHand();
        GuideStep.instance.moveHand(this.openPlateForm.bind(this));
        this.showButton();
    }

    private async  makeCoke() {
        let img: eui.Image = new eui.Image(main_coke2);
        img.scaleX = img.scaleY = .7;
        img.anchorOffsetX = 46;
        img.anchorOffsetY = 55;
        img.x = 1012;
        img.y = 494;
        this.setProgress(1000, () => {
            stream.stop();
            this.kGrpAction.removeChild(stream);
            img.anchorOffsetX = 63;
        img.anchorOffsetY = 57;
            img.source = main_coke1;
            this.kImgCoke = img;
        }, 924, 442);
        let stream = <egret.MovieClip>await McManger.instance.getMcAtH5('coke', pancake_j, pancake, 'coke');
        stream.x = 1016;
        stream.y = 462;
        this.kGrpAction.addChild(img);
        this.kGrpAction.addChild(stream);
        
        stream.gotoAndPlay(0, -1);
    }

    private async makePancake(x, y) {
        let mc1 = <egret.MovieClip>await McManger.instance.getMcAtH5('di', pancake_j, pancake, 'di');
        this.kGrpAction.addChild(mc1);
        mc1.x = x;
        mc1.y = y;
        mc1.gotoAndPlay(0, 1);
        mc1.once(egret.Event.COMPLETE, () => {
            this.kGrpAction.removeChild(mc1);
            let group: eui.Group = new eui.Group();
            group.width = 180;
            group.height = 170;
            group.anchorOffsetX = 90;
            group.anchorOffsetY = 85;
            group.x = x;
            group.y = y;
            let img = new eui.Image(main_pancake1);
            group.addChild(img);
            this.kGrpAction.addChild(group);

            img.horizontalCenter = 0;
            img.verticalCenter = 0;
            img.scaleX = img.scaleY = 0;
            egret.Tween.get(img).to({ scaleX: 1, scaleY: 1 }, 400).call(async () => {
                img.source = main_pancake2;
                this.playSmog(0, x, y - 70);
            }).wait(300).call(async () => {
                let mc2 = <egret.MovieClip>await McManger.instance.getMcAtH5('pancake', pancake_j, pancake, 'pancake');
                this.kGrpAction.addChild(mc2);
                mc2.x = x;
                mc2.y = y;
                mc2.scaleX = mc2.scaleY = 1.3;
                mc2.gotoAndPlay(0, 1);
                mc2.once(egret.Event.COMPLETE, () => {
                    this.kGrpAction.removeChild(mc2);
                    img.source = main_pancake3;
                    group.y = group.y - 25;
                    if (!this.kGrpFood) this.kGrpFood = group;
                }, this);
            });
        }, this);
    }

    private showTips(x: number, y: number, txt: string, callBack: Function) {
        this.kLbPaoContent.text = txt;
        this.kGrpPao.x = x;
        this.kGrpPao.y = y;
        egret.Tween.get(this.kGrpPao).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.bounceOut).wait(600).call(() => {
            callBack();
            this.kGrpPao.scaleX = this.kGrpPao.scaleY = 0;
        });
    }

    private async playSmog(t: number, x, y) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smoke_j, smoke, x, y);
        system.alpha = 0.4;
        this.mcArr.push(system);
    }



    private clearMc() {
        this.mcArr.forEach((item) => {
            this.kGrpAction.removeChild(item);
            item = null;
        });
        this.mcArr = [];
    }

    private async setProgress(t: number, f: Function, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('pacake', pancake_j, pancake, 'progress');
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


    /**
     * @param {start} egret.Point 金币飞出的起始点
     * @param {end} egret.Point 金币飞入的终点
     * @param {f:Function}
    */
    private playFlyCoin(start: egret.Point, end: egret.Point, f: Function) {
        let arr: eui.Image[] = [];
        let num = 20;
        let a = 0;
        for (let i = 0; i < num; i++) {
            let img: eui.Image = new eui.Image(main_icon_coin);
            img.x = start.x - 20;
            img.y = start.y - 20;
            this.kGrpAction.addChild(img);
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
                    this.kGrpAction.removeChild(arr[a]);
                }
            }
        }, this, 40);

    }
    //产生随机点
    private createPoint() {
        return new egret.Point(0.2 * this.width + Math.floor(Math.random() * 0.6 * this.width), 0.2 * this.height + Math.floor(Math.random() * 0.8 * this.height));
    }

    //设置延迟回调
    private setTimeCallBack(t: number, f: Function) {
        let ti = egret.setTimeout(() => {
            egret.clearTimeout(ti);
            f();
        }, this, t)
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
        let userAgent = navigator.userAgent || navigator.vendor;
        let url = 'https://apps.apple.com/app/id1471955633';
        let android = 'https://play.google.com/store/apps/details?id=com.dragonplus.cookingfrenzy';
        if (/android/i.test(userAgent)) {
            url = android;
        }
        if (window["mraid"]) window["mraid"].open(url);
        // ,parent.postMessage('download','*'),window['ExitApi']&&window['ExitApi'].exit(),parent.postMessage('complete','*')
    }

    private kImgTapButton: eui.Image = new eui.Image(main_tap);
    private showButton() {
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kGrpGuide.setChildIndex(this.kImgTapButton,0);
        this.kImgTapButton.horizontalCenter = 0;
        this.kImgTapButton.verticalCenter = 50;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgTapButton);
            egret.Tween.get(this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    }
}