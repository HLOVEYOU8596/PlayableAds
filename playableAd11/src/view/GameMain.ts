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
    private kGrpPeople1: eui.Group;
    private kGrpPeople2: eui.Group;
    private kGrpMenu1: eui.Group;
    private kGrpMenu2: eui.Group;
    private kGrpEnd: eui.Group;
    private kGrpClose: eui.Group;

    private kImgMenu1: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgOrder1: eui.Image;
    private kImgOrder2: eui.Image;
    private kImgOrder3: eui.Image;
    private kImgXu: eui.Image;

    private SanArr: San[] = [];
    private kImgCoke1: eui.Image;
    private kImgCoke2: eui.Image;
    private kImgCoke3: eui.Image;
    private kGrpFood: eui.Group;
    private kImgA1: eui.Image;
    private kImgA2: eui.Image;
    private kImgA3: eui.Image;
    private kImgA4: eui.Image;
    private kImgB1: eui.Image;
    private kImgB2: eui.Image;
    private kImgB3: eui.Image;
    private AArr: eui.Image[];


    private kImgHand: eui.Image;
    private kImgBg1: eui.Image;
    private kImgBg2: eui.Image;
    private kImgEndBg: eui.Image;
    private kImgTopic: eui.Image;
    private kBtnNext: eui.Image;
    private kBtnVideo: eui.Image;

    private kLbTips: eui.Label;


    private mcArr: any[] = [];


    private adType: Number = AD_TYPE.normal;

    private guideArr = [new egret.Point(392, 624),
    new egret.Point(348, 412),
    new egret.Point(560, 634),
    new egret.Point(722, 634),
    new egret.Point(892, 634),
    new egret.Point(588, 512),
    new egret.Point(608, 280),
    new egret.Point(768, 496),
    new egret.Point(762, 280),
    new egret.Point(1024, 372),
    new egret.Point(963, 430)];

    private aunt: dragonBones.EgretArmatureDisplay;
    private geek: dragonBones.EgretArmatureDisplay;


    private initUI() {
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgMenu1.source = this.kImgMenu2.source = main_alert_bg;
        this.kImgOrder1.source = main_order2;
        this.kImgOrder2.source = main_order2;
        this.kImgOrder3.source = main_order3;
        this.kImgCoke1.source = this.kImgCoke2.source = this.kImgCoke3.source = main_coke0;
        this.kImgB1.source = this.kImgB2.source = this.kImgB3.source = main_cake0_;
        this.kBtnNext.source = main_btn_next;
        this.kBtnVideo.source = main_btn_video;
        this.kImgXu.source = main_xuxian;

        this.kImgHand.source = main_guide_arrow;
        this.kImgEndBg.source = main_end;
        this.kImgTopic.source = main_reward_bg;


        //添加煎饼幼虫 85，117
        let pointArr = [{ x: 588, y: 490, scale: 1 }, { x: 771, y: 490, scale: 1 }, { x: 602, y: 376, scale: .9 }, { x: 761, y: 376, scale: .9 }];
        for (let i = 0; i < 4; i++) {
            let san: San = new San();
            san.anchorOffsetX = 85;
            san.anchorOffsetY = 117;
            san.x = pointArr[3 - i].x;
            san.y = pointArr[3 - i].y;
            san.scaleX = san.scaleY = pointArr[3 - i].scale;
            this.SanArr.push(san);
            this.kGrpFood.addChild(san);
        }
        this.AArr = [this.kImgA1, this.kImgA2, this.kImgA3, this.kImgA4];
        this.AArr.forEach(item => { item.source = main_drumstick_0; item.scaleX = item.scaleY = 0 });

        this.playStartAni();
        this.addEvents();
    }

    private async playStartAni() {
        this.geek = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(0, 0, 'geek', this.kGrpPeople2, geek_ske_j, geek_tex, geek_tex_j);
        this.aunt = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(120, 30, 'aunt', this.kGrpPeople1, aunt_ske_j, aunt_tex, aunt_tex_j);
        this.geek.animation.play('walk_happy', 0);
        this.aunt.animation.play('walk_happy', 0);
        egret.Tween.get(this.kGrpPeople2).to({ x: 260 }, 500, egret.Ease.sineIn).call(() => {
            this.geek.animation.reset();
            this.geek.animation.play('stand', 0);
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut);
        });
        egret.Tween.get(this.kGrpPeople1).to({ x: 662 }, 500, egret.Ease.sineOut).call(() => {
            this.aunt.animation.reset();
            this.aunt.animation.play('stand', 0);
            egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut);

            let maskIcon: egret.Shape = new egret.Shape();
            maskIcon.graphics.beginFill(0x000000, 1);
            maskIcon.graphics.drawCircle(0, 0, 85);
            maskIcon.graphics.endFill();
            maskIcon.x = 404;
            maskIcon.y = 642;
            // maskIcon.scaleY = 0.6;
            //-------------------------------------------------------------------------

            let guide: Guide = new Guide();
            guide.init(maskIcon, 1280, 720);
            this.kGrpAction.addChild(guide);
            this.kImgXu.visible = true;
            this.kLbTips.visible = true;

            GuideStep.instance.init(this.kGrpGuide, this.guideArr);
            GuideStep.instance.moveHand(this.touchFirst.bind(this));
        });
    }

    private addEvents() {

    }

    private touchFirst() {
        this.geek.animation.reset();
        this.geek.animation.play('stand', 0);
        this.kGrpAction.removeChildren();
        this.kImgXu.visible = false;
        this.kLbTips.visible = false;
        GuideStep.instance.clearHand();
        //442,468
        this.AArr.forEach(item => {
            let a = item;
            egret.Tween.get(item).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut).call(a => {
                this.playFei(0, item.x, item.y + 20);
                // this.playSmog(0, this.kGrpFood.x, this.kGrpFood.y - 40);
                this.setProgress(1000, a => {
                    item.source = main_drumstick_1;
                    GuideStep.instance.moveHand(this.touchSecond.bind(this));
                }, item.x - 60, item.y - 60);
            });
        });
    }

    private touchSecond() {
        GuideStep.instance.clearHand();
        this.clearMc();
        this.AArr.forEach(item => { egret.Tween.get(item).to({ scaleX: 0, scaleY: 0 }, 300) });
        this.SanArr.forEach(item => {
            item.showImg2();
        });
        GuideStep.instance.moveHand(this.touchThird.bind(this));
    }

    private touchThird() {
        GuideStep.instance.clearHand();
        this.SanArr.forEach(item => {
            item.showImg3();
        });
        GuideStep.instance.moveHand(this.touchFourth.bind(this));
    }

    private touchFourth() {
        GuideStep.instance.clearHand();
        this.SanArr.forEach(item => {
            item.showImg4();
        });
        GuideStep.instance.moveHand(this.touchFifth.bind(this));
    }

    private touchFifth() {
        // if (this.adType === AD_TYPE.tap1) { this.openPlateForm(); return; }
        GuideStep.instance.clearHand();
        this.SanArr.forEach(item => {
            item.showImg5();
        });
        GuideStep.instance.moveHand(this.touchSixth.bind(this), 2);

    }

    private touchSixth() {
        // if (this.adType === AD_TYPE.tap2) { this.openPlateForm(); return; }
        GuideStep.instance.clearHand();
        egret.Tween.get(this.SanArr[3]).to({ x: this.SanArr[1].x, y: this.SanArr[1].y, scaleX: this.SanArr[1].scaleX, scaleY: this.SanArr[1].scaleY }, 300).call(() => {
            this.SanArr[3].visible = this.SanArr[1].visible = false;
            this.kImgOrder1.source = main_right;
            let point: egret.Point = this.kImgOrder1.localToGlobal();
            let xx = ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coin_j, main_icon_coin, point.x + 40, point.y + 40, 600);
            if (this.adType === AD_TYPE.tap1) { GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2); this.setTimeCallBack(2400, this.showButton.bind(this)); return; }
            GuideStep.instance.moveHand(this.touchSeventh.bind(this), 2);
            this.aunt.animation.play('happy', 0);
            this.setTimeCallBack(1500, () => {
                // this.aunt.animation.play('walk_happy', 0);
                egret.Tween.get(this.kGrpPeople1).to({ alpha: 0 }, 600);
                // egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 600);
            });
        });
    }

    private touchSeventh() {
        GuideStep.instance.clearHand();
        egret.Tween.get(this.SanArr[2]).to({ x: this.SanArr[0].x, y: this.SanArr[0].y, scaleX: this.SanArr[0].scaleX, scaleY: this.SanArr[0].scaleY }, 300).call(() => {
            this.SanArr[2].visible = this.SanArr[0].visible = false;
            this.kImgOrder2.source = main_right;
            this.kImgOrder2.y = this.kImgOrder2.y + 30;
            let point: egret.Point = this.kImgOrder2.localToGlobal();
            let xx = ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coin_j, main_icon_coin, point.x + 40, point.y + 40, 600);
            GuideStep.instance.moveHand(this.touchEigth.bind(this));
            egret.Tween.get(this.kImgOrder3, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1000);
        });
    }

    private touchEigth() {
        GuideStep.instance.clearHand();
        this.setStream(600, () => { this.kImgCoke1.source = main_coke3 }, this.kImgCoke1.x, this.kImgCoke1.y - 56);
        this.setStream(600, () => { this.kImgCoke2.source = main_coke3 }, this.kImgCoke2.x, this.kImgCoke2.y - 56);
        this.setStream(600, () => { this.kImgCoke3.source = main_coke3 }, this.kImgCoke3.x, this.kImgCoke3.y - 56);
        this.setProgress(600, () => { }, this.kImgCoke1.x - 100, this.kImgCoke1.y - 100);
        this.setProgress(600, () => { }, this.kImgCoke2.x - 100, this.kImgCoke2.y - 100);
        this.setProgress(600, () => {
            this.kImgB1.visible = this.kImgB2.visible = this.kImgB3.visible = false;
            if (this.adType == AD_TYPE.tap2) { GuideStep.instance.moveHand(this.openPlateForm.bind(this)); this.setTimeCallBack(2400, this.showButton.bind(this)); return; }
            GuideStep.instance.moveHand(this.touchNinth.bind(this));
        }, this.kImgCoke3.x - 100, this.kImgCoke3.y - 100);
    }

    private touchNinth() {
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kImgCoke1).to({ x: 542, y: 218 }, 400);
        egret.Tween.get(this.kImgCoke2).to({ x: 542, y: 218 }, 400).call(() => {
            this.kImgCoke1.visible = this.kImgCoke2.visible = false;
            egret.Tween.removeTweens(this.kImgOrder3);
            this.kImgOrder3.source = main_right;
            let xx = ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coin_j, main_icon_coin, 542, 218, 600);
            this.geek.animation.play('happy', 0);
            this.setTimeCallBack(1500, () => {
                // this.aunt.animation.play('walk_happy', 0);
                egret.Tween.get(this.kGrpPeople2).to({ alpha: 0 }, 600);
                // egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 600);
                this.setTimeCallBack(600, this.playEndAni.bind(this));
            });
        });
    }

    private playEndAni() {
        // this.playLux();

        let rect: eui.Rect = new eui.Rect(1280, 720, 0x000000);
        rect.fillAlpha = 0.5;
        this.kGrpAction.addChild(rect);
        this.kGrpEnd.visible = true;
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playCaidai(400, 2000);
        this.setTimeCallBack(1500, () => {
            this.kGrpClose.visible = true;
            // this.playEffect(this.kGrpClose,10000,()=>{})
            //2,3 90 28  1,4 964,861  tip:634
            this.kImgHand.visible = true;
            this.kGrpClose.scaleX = this.kGrpClose.scaleY = 0;
            egret.Tween.get(this.kGrpClose).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);

            egret.Tween.get(this.kImgHand, { loop: true }).call(() => {
                egret.Tween.get(this.kBtnNext).to({ scaleX: .8, scaleY: .8 }, 200).wait(400).to({ scaleX: 1, scaleY: 1 }, 100);
            }).wait(400).to({ x: 745 }, 600).call(() => {
                egret.Tween.get(this.kBtnVideo).to({ scaleX: .8, scaleY: .8 }, 200).wait(400).to({ scaleX: 1, scaleY: 1 }, 100);
            }).wait(400).to({ x: 527 }, 600);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.openPlateForm, this);
        });
    }

    private async playFei(t: number, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mc_j, mc, "soil");
        this.kGrpFood.addChild(mm);
        mm.x = x;
        this.kGrpFood.setChildIndex(mm, this.kGrpFood.getChildIndex(this.kImgA1) - 1);
        mm.y = y;
        mm.gotoAndPlay(0, -1);
        this.mcArr.push(mm);
    }

    private async playSmog(t: number, x, y) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smoke_j, smoke, x, y);
        system.alpha = 0.4;
        this.mcArr.push(system);
    }



    private clearMc() {
        this.mcArr.forEach((item) => {
            if (item.parent) item.parent.removeChild(item);
            item = null;
        });
        this.mcArr = [];
    }

    private async setProgress(t: number, f: Function, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mc_j, mc, 'progress');
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

    private async setStream(t, f: Function, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mc_j, mc, 'coke');
        this.kGrpFood.addChild(mm);
        mm.x = x;
        mm.y = y;
        this.kGrpFood.setChildIndex(mm, 0);
        // mm.scaleX = mm.scaleY = 0.5;
        mm.frameRate = 24000 / t;
        mm.gotoAndPlay(0);
        mm.once(egret.Event.COMPLETE, () => {
            this.kGrpFood.removeChild(mm);
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


    //彩带动画
    private playCaidai(num: number, delay: number) {
        let arr: eui.Image[] = [];
        let imgArr: string[] = [main_dai1, main_dai2, main_dai3,
            main_dai4, main_dai5, main_dai6,
            main_dai7, main_dai8, main_dai9,
            main_dai10];
        for (let i = 0; i < num; i++) {
            let img: eui.Image = new eui.Image(imgArr[Math.floor(Math.random() * 10)]);
            img.x = Math.floor(Math.random() * this.stage.width);
            img.y = 0;
            arr.push(img);
            let t = egret.setTimeout(() => {
                egret.clearTimeout(t);
                this.kGrpAction.addChild(img);
                egret.Tween.get(img).to({ rotation: Math.random() * 90 }, 300);
                egret.Tween.get(img).to({ y: this.stage.height }, 800).call(() => {
                    egret.Tween.removeTweens(img);
                    this.kGrpAction.removeChild(img);
                });
            }, this, delay * Math.random());
        }
    }

    //烟花动画
    private playYanhua() {

        let t = Math.floor(Math.random() * 800);
        let arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
        let tim = egret.setTimeout(() => {
            egret.clearTimeout(tim);
            let p: egret.Point = this.createPoint();
            let img: eui.Image = new eui.Image(arr[Math.floor(Math.random() * 3)]);
            img.anchorOffsetX = 102.5;
            img.anchorOffsetY = 96.5;
            img.scaleX = img.scaleY = 0;
            img.x = p.x;
            img.y = p.y;
            this.kGrpAction.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(() => {
                egret.Tween.removeTweens(img);
                this.kGrpAction.removeChild(img);
            });
        }, this, t);
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

    private kImgTapButton: eui.Image = new eui.Image(this.adType == AD_TYPE.tap1 ? main_swipe : main_tap);
    //ad5pancake_huafang_choose_z
    private showButton() {
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kImgTapButton.horizontalCenter = 0;
        if (this.adType == AD_TYPE.tap1) this.kImgTapButton.horizontalCenter = -200;
        this.kImgTapButton.verticalCenter = 50;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgTapButton);
            egret.Tween.get(this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    }

    private async playLux() {
        var width: number = this.stage.stageWidth;
        var height: number = this.stage.stageHeight;

        var gameTitle: egret.Bitmap = new egret.Bitmap(<egret.Texture>await Dragon.getImageData(main_coke3));
        var x: number = gameTitle.x = (width - gameTitle.width) / 2;
        var y: number = gameTitle.y = (height - gameTitle.height) / 2;
        this.kGrpEnd.addChild(gameTitle);

        var gameTitle_mask: egret.Bitmap = new egret.Bitmap(<egret.Texture>await Dragon.getImageData(main_coke3));
        gameTitle_mask.x = x;
        gameTitle_mask.y = y;
        this.kGrpEnd.addChild(gameTitle_mask);

        var lux: egret.Bitmap = new egret.Bitmap(<egret.Texture>await Dragon.getImageData(spark));
        var MOVE_MIN_X = x - lux.width;
        var MOVE_MAX_X = x + gameTitle.width;
        lux.x = MOVE_MIN_X;
        lux.y = y;
        lux.mask = gameTitle_mask;
        this.kGrpEnd.addChild(lux);

        var speed: number = 2;
        var direction: number = 1;

        egret.Ticker.getInstance().register(function () {
            lux.x += speed * direction;
            if (lux.x > MOVE_MAX_X || lux.x < MOVE_MIN_X) direction *= -1;
        }, this);
    }

    private getEffectArr() {
        return [
            SpecialEffects.EffectBrightnessContrast,
            SpecialEffects.EffectHueSaturation,
            SpecialEffects.EffectVibrance,
            SpecialEffects.EffectDenoise,
            SpecialEffects.EffectNoise,
            SpecialEffects.EffectSepia,
            SpecialEffects.EffectVignette,
            SpecialEffects.EffectZoomblur,
            SpecialEffects.EffectTriangleblur,
            SpecialEffects.EffectTiltShift,
            SpecialEffects.EffectSwirl,
            SpecialEffects.EffectBulgePinch,
            SpecialEffects.EffectPerspective
        ]
    }

    private playEffect(_target: any, t, callBack: Function) {
        let effect = SpecialEffects.createEffects(_target, SpecialEffects.EffectSwirl);
        let data = { angle: 10, radius: 0 }
        effect.refreshData(data.angle, data.radius);
        let tim: egret.Timer = new egret.Timer(16, Math.floor(t / 16));
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            // data.angle +=3;
            data.radius += 3;
            effect.refreshData(data.angle, data.radius);
        }, this);
        tim.addEventListener(egret.TimerEvent.COMPLETE, () => { tim.stop(); tim = null }, this)
    }
}