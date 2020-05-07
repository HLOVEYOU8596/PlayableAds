// TypeScript file
enum AD_TYPE{
    tap1=1,
    tap2=2,
    normal=3
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

    private kProgress: ProgressBar;
    private kImgMenu1: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgOrder1: eui.Image;
    private kImgOrder2: eui.Image;
    private kImgXu: eui.Image;

    private kGrpFood: eui.Group;
    private kImgDrumstick: eui.Image;
    private kImgShu: eui.Image;
    private kImgFan: eui.Image;
    private kImgCoke: eui.Image;
    private kImgCoke0: eui.Image;
    private kImgCoke1: eui.Image;
    private kImgCoin1: eui.Image;
    private kImgCoin2: eui.Image;

    private kImgFood1: eui.Image;
    private kImgFood2: eui.Image;
    private kImgFood3: eui.Image;
    private kImgFood4: eui.Image;
    private kImgContent: eui.Image;
    private kImgTips: eui.Image;
    private kImgHand: eui.Image;
    // private kImgBg:eui.Image;
    private kImgBg1:eui.Image;
    private kImgBg2:eui.Image;
    private kImgEndBg:eui.Image;
    private kImgTopic:eui.Image;
    private kImgBig:eui.Image;

    private kLbTips: eui.Label;


    private mcArr: any[] = [];
    private t:egret.Timer = new egret.Timer(5000,0);


    private adType:Number = AD_TYPE.tap1;

    private guideArr = [new egret.Point(360, 624),
    new egret.Point(408, 466),
    new egret.Point(596, 630),
    new egret.Point(763, 630),
    new egret.Point(680, 450),
    new egret.Point(922, 500)];

    // private aunt: dragonBones.EgretArmatureDisplay;
    // private geek: dragonBones.EgretArmatureDisplay;

    private a1A:egret.MovieClip;
    private a2A:egret.MovieClip;


    private initUI() {
        this.kImgFood1.source = end_fodo1;
        this.kImgFood2.source = end_food2;
        this.kImgFood3.source = end_food3;
        this.kImgFood4.source = end_food4;
        this.kImgMenu1.source = this.kImgMenu2.source = main_alert_bg;
        this.kImgOrder1.source = main_order;
        this.kImgOrder2.source = main_coke2;
        this.kImgXu.source = main_xuxian;
        this.kImgDrumstick.source = main_drumstick0;
        this.kImgShu.source = main_food_fu;
        this.kImgFan.source = main_coke;
        this.kImgCoin1.source = this.kImgCoin2.source = main_icon_coin;
        this.kImgContent.source = end_topic;
        this.kImgTips.source = end_tips;
        this.kImgHand.source = main_guide_arrow;
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        // this.kImgBg.source = main_bg;
    
        this.kImgCoke.source = this.kImgCoke0.source = this.kImgCoke1.source = main_coke1;
        this.kImgEndBg.source = end_bg;
        this.kImgTopic.source = main_reward_bg;
        this.kImgBig.source = main_big;
        
        this.kProgress = new ProgressBar();
        this.kGrpMain.addChild(this.kProgress);
        this.kGrpMain.setChildIndex(this.kProgress,1);

        this.kProgress.x = 395;
        this.kProgress.slideDuration = 300;
        this.playStartAni();
        this.addEvents();
    }

    private async playStartAni() {
        this.kImgShu.scaleX = this.kImgShu.scaleY = this.kImgFan.scaleX = this.kImgFan.scaleY = 0;
        // this.geek = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(0, 0, 'geek', this.kGrpPeople2, geek_ske_j, geek_tex, geek_tex_j);
        // this.aunt = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(120, 30, 'aunt', this.kGrpPeople1, aunt_ske_j, aunt_tex, aunt_tex_j);
        // this.geek.animation.play('walk_happy', 0);
        // this.aunt.animation.play('walk_happy', 0);
        this.a1A = <egret.MovieClip>await McManger.instance.getMcAtH5('a1',a1_j,a1,'a1');
        this.a2A = <egret.MovieClip>await McManger.instance.getMcAtH5('a2',a2_j,a2,'a1');
        this.kGrpPeople2.addChild(this.a1A);
        this.kGrpPeople1.addChild(this.a2A);
        this.kGrpPeople1.setChildIndex(this.a2A,this.kGrpPeople1.getChildIndex(this.kGrpMenu1));
        this.a1A.frameRate = this.a2A.frameRate = 6;
        this.a1A.x = 70;this.a2A.x = 0;this.a1A.y = 30;
        egret.Tween.get(this.kGrpPeople1).to({ x: 662 }, 500, egret.Ease.sineOut).call(() => {
            // this.aunt.animation.reset();
            // this.aunt.animation.play('stand', 0);
            this.a2A.gotoAndPlay(0);
            this.t.addEventListener(egret.TimerEvent.TIMER,()=>{this.a2A.gotoAndPlay(0);},this);
            this.t.start();
            egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut);

            let maskIcon: egret.Shape = new egret.Shape();
            maskIcon.graphics.beginFill(0x000000, 1);
            maskIcon.graphics.drawCircle(0, 0, 85);
            maskIcon.graphics.endFill();
            maskIcon.x = 342;
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

    private async touchFirst() {
        // this.geek.animation.reset();
        // this.geek.animation.play('stand', 0);
        this.kGrpAction.removeChildren();
        this.kImgXu.visible = false;
        this.kLbTips.visible = false;
        GuideStep.instance.clearHand();
        let fireA = <egret.MovieClip>await McManger.instance.getMcAtH5('fire',fire_j,fire,'action1');
        this.kGrpFood.addChild(fireA);
        fireA.addEventListener(egret.Event.COMPLETE,()=>{fireA.visible = false},this);
        fireA.x = 100;fireA.y = 90;
        fireA.visible = false;
        //442,468
        this.kGrpFood.visible = true;
        egret.Tween.get(this.kGrpFood).to({ x: 400, y: 468 }, 300, egret.Ease.sineOut).call(() => {
            // this.playFei(0, this.kGrpFood.x - 60, this.kGrpFood.y - 20);
            egret.Tween.get(this.kImgDrumstick)
            .to({alpha:.5,scaleX:0.9,scaleY:0.9},100).to({alpha:1,scaleX:1,scaleY:1},100)
            .to({alpha:0.5,scaleX:0.9,scaleY:0.9},100).to({alpha:1,scaleX:1,scaleY:1},100).call(()=>{
                fireA.visible = true;
                fireA.gotoAndPlay(0);
                this.kImgDrumstick.source = main_drumstick_2;
            })
            .to({alpha:0.5,scaleX:0.9,scaleY:0.9},100).to({alpha:1,scaleX:1,scaleY:1},100);
            this.playSmog(0, this.kGrpFood.x, this.kGrpFood.y - 40);
            this.playFei(0,this.kGrpFood.x, this.kGrpFood.y+30)
            this.setProgress(600, () => {
                GuideStep.instance.moveHand(this.touchSecond.bind(this));
            }, this.kGrpFood.x - 100, this.kGrpFood.y - 100);
        });
    }

    private touchSecond() {
        GuideStep.instance.clearHand();
        this.clearMc();
        this.kImgDrumstick.source = main_drumstick_2;
        egret.Tween.get(this.kGrpFood).to({ x: 670, y: 450 }, 300);
        egret.Tween.get(this.kGrpPeople2).to({ x: 240 }, 300, egret.Ease.sineOut).call(() => {
            this.kImgDrumstick.scaleX = this.kImgDrumstick.scaleY = 1.153;
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut);
            // this.geek.animation.reset();
            // this.geek.animation.play('stand', 0);
            this.a1A.gotoAndPlay(0,-1);
            this.kImgCoke.source = main_coke1;
            GuideStep.instance.moveHand(this.touchThird.bind(this));
        });
        let p = new egret.Point(this.kImgBig.x,this.kImgBig.y);
        egret.Tween.get(this.kImgBig).to({rotation:90,x:this.kImgBig.x - 40,y:this.kImgBig.y+48},400).call(()=>{
            this.setStream(500,()=>{
                this.kImgCoke.source = main_coke2;
                egret.Tween.get(this.kImgBig).to({rotation:0,x:this.kImgBig.x -50,y:this.kImgBig.y-40},300).to({rotation:90},300).call(()=>{
                    this.setStream(500,()=>{
                        this.kImgCoke1.source = main_coke2;
                        egret.Tween.get(this.kImgBig).to({rotation:0,x:this.kImgBig.x+103},300).to({rotation:90},300).call(()=>{
                            this.setStream(500,()=>{
                                this.kImgCoke0.source = main_coke2;
                                egret.Tween.get(this.kImgBig).to({x:p.x,y:p.y,rotation:0},400);
                            },this.kImgBig.x + 50,this.kImgBig.y);
                        })

                    },this.kImgBig.x + 50,this.kImgBig.y);
                });
            },this.kImgBig.x + 50,this.kImgBig.y);
        });
        this.setProgress(2500, () => {
        }, this.kImgCoke.x - 100, this.kImgCoke.y - 100);
    }

    private touchThird() {
        let p: egret.Point = new egret.Point(this.kImgShu.x, this.kImgShu.y);
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kImgShu).to({ x: p.x, y: p.y, scaleX: 1, scaleY: 1 }, 300, egret.Ease.getElasticOut).call(() => {
            GuideStep.instance.moveHand(this.touchFourth.bind(this));
        });
    }

    private touchFourth() {
        let p: egret.Point = new egret.Point(this.kImgFan.x, this.kImgFan.y);
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kImgFan).to({ x: p.x, y: p.y, scaleX: 1, scaleY: 1 }, 300, egret.Ease.getElasticOut).call(() => {
            GuideStep.instance.moveHand(this.touchFifth.bind(this));
        });
    }

    private touchFifth() {
        if(this.adType === AD_TYPE.tap1) {this.openPlateForm();return;}
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kGrpFood).to({ x: 715, y: 175, scaleX: 0.5, scaleY: 0.5 }, 300, egret.Ease.sineOut).call(() => {
            GuideStep.instance.moveHand(this.touchSixth.bind(this));
            this.kImgOrder1.source = main_right;
            this.kImgCoin1.visible = true;
            this.kGrpMain.removeChild(this.kGrpFood);
            this.playFlyCoin(new egret.Point(705, 255), new egret.Point(395, 0), async() => {
                this.kProgress.value += 50;
                // this.aunt.animation.reset();
                // this.aunt.animation.play('happy',0);
                this.t.stop();
                this.kGrpPeople1.removeChild(this.a2A);
                this.a2A = <egret.MovieClip>await McManger.instance.getMcAtH5('a2',a2_j,a2,'a2');
                this.a2A.x = 60;
                this.kGrpPeople1.addChild(this.a2A);
                this.kGrpPeople1.setChildIndex(this.a2A,this.kGrpPeople1.getChildIndex(this.kGrpMenu1));
                this.a2A.gotoAndPlay(0);
                egret.Tween.get(this.kGrpPeople1).wait(800).to({alpha:0},300);
            });
        });

    }

    private touchSixth() {
        if(this.adType === AD_TYPE.tap2) {this.openPlateForm();return;}
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kImgCoke).to({ x: 525, y: 200, scaleX: 2, scaleY: 2 }, 300, egret.Ease.sineOut).call(() => {
            this.kImgOrder2.source = main_right;
            this.kImgOrder2.scaleX = this.kImgOrder2.scaleY = 1;
            this.kImgCoin2.visible = true;
            this.kGrpMain.removeChild(this.kImgCoke);
            this.playFlyCoin(new egret.Point(515, 255), new egret.Point(395, 0), async() => {
                this.kProgress.value += 50;
                // this.geek.animation.reset();
                // this.geek.animation.play('happy',0);
                this.kGrpPeople2.removeChild(this.a1A);
                this.a1A = <egret.MovieClip>await McManger.instance.getMcAtH5('a1',a1_j,a1,'a2');
                this.kGrpPeople2.addChild(this.a1A);
                this.a1A.gotoAndPlay(0,1);
                this.a1A.x = 70;this.a1A.y = 30;
                egret.Tween.get(this.kGrpPeople2).wait(800).to({alpha:0},300).call(()=>{
                     this.playEndAni();
                });
            })
        });
    }

    private playEndAni() {
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
            //2,3 90 28  1,4 964,861  tip:634
            this.kImgHand.visible = true;
            egret.Tween.get(this.kImgFood1).to({ x: 964 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgFood2).to({ x: 90 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgFood3).to({ x: 28 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgFood4).to({ x: 861 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgTips).to({ y: 634 }, 800, egret.Ease.sineOut);

            egret.Tween.get(this.kImgContent, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1000);

            egret.Tween.get(this.kImgHand, { loop: true }).to({ y: 515 }, 500).to({ alpha: 0 }, 300).call(() => {
                this.kImgHand.y = 570;
                this.kImgHand.alpha = 1;
            });
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.openPlateForm, this);
            // this.playLux();
        });
    }

    private async playFei(t: number, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mc_j, mc, "soil");
        this.kGrpAction.addChild(mm);
        mm.x = x;
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
            this.kGrpAction.removeChild(item);
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
        this.kGrpAction.addChild(mm);
        mm.x = x;
        mm.y = y;
        mm.frameRate = 12000 / t;
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


    //彩带动画
    private playCaidai(num: number, delay: number) {
        let arr: eui.Image[] = [];
        let imgArr: string[] = [main_dai1, main_dai2, main_dai3,
            main_dai4, main_dai5, main_dai6,
            main_dai7, main_dai8, main_dai9,
            main_dai10];
        for (let i = 0; i < num; i++) {
            let img: eui.Image = new eui.Image(imgArr[Math.floor(Math.random() * 10)]);
            img.x = Math.floor(Math.random() * 1280);
            img.y = 0;
            arr.push(img);
            let t = egret.setTimeout(() => {
                egret.clearTimeout(t);
                this.kGrpAction.addChild(img);
                egret.Tween.get(img).to({ rotation: Math.random() * 90 }, 300);
                egret.Tween.get(img).to({ y: 720 }, 800).call(() => {
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
        return new egret.Point(0.2*1280 + Math.floor(Math.random() * 0.6*1280), 0.2*720 + Math.floor(Math.random() * 0.8*720));
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
        parent.postMessage('download','*');
        if(window['ExitApi'])window['ExitApi'].exit();
        parent.postMessage('complete','*');
        // ,parent.postMessage('download','*'),window['ExitApi']&&window['ExitApi'].exit(),parent.postMessage('complete','*')
    }

    // private async playLux(){
    //     var width: number = this.stage.stageWidth;
    //     var height: number = this.stage.stageHeight;
        
    //     var gameTitle: egret.Bitmap = new egret.Bitmap(<egret.Texture>await Dragon.getImageData(main_coke2));
    //     var x: number = gameTitle.x = (width - gameTitle.width) / 2;
    //     var y: number = gameTitle.y = (height - gameTitle.height) / 2;
    //     this.kGrpEnd.addChild(gameTitle);

    //     var gameTitle_mask: egret.Bitmap =new egret.Bitmap(<egret.Texture>await Dragon.getImageData(main_coke2));
    //     gameTitle_mask.x = x;
    //     gameTitle_mask.y = y;
    //     this.kGrpEnd.addChild(gameTitle_mask);

    //     var lux: egret.Bitmap = new egret.Bitmap(<egret.Texture>await Dragon.getImageData(spark));
    //     var MOVE_MIN_X = x - lux.width;
    //     var MOVE_MAX_X = x + gameTitle.width;
    //     lux.x = MOVE_MIN_X;
    //     lux.y = y;
    //     lux.mask = gameTitle_mask;
    //     this.kGrpEnd.addChild(lux);

    //     var speed: number = 2;
    //     var direction: number = 1;

    //     egret.Ticker.getInstance().register(function() {
    //         lux.x += speed * direction;
    //         if (lux.x > MOVE_MAX_X || lux.x < MOVE_MIN_X) direction *= -1;
    //     }, this);
    // }

    // private getEffectArr(){
	// 	return [
	// 		SpecialEffects.EffectBrightnessContrast,
	// 		SpecialEffects.EffectHueSaturation,
	// 		SpecialEffects.EffectVibrance,
	// 		SpecialEffects.EffectDenoise,
	// 		SpecialEffects.EffectNoise,
	// 		SpecialEffects.EffectSepia,
	// 		SpecialEffects.EffectVignette,
	// 		SpecialEffects.EffectZoomblur,
	// 		SpecialEffects.EffectTriangleblur,
	// 		SpecialEffects.EffectTiltShift,
	// 		SpecialEffects.EffectSwirl,
	// 		SpecialEffects.EffectBulgePinch,
	// 		SpecialEffects.EffectPerspective
	// 	]
	// }

    // private playEffect(_target:any,t,callBack:Function){
    //     let effect = SpecialEffects.createEffects(_target,SpecialEffects.EffectSwirl);
    //         let data = {angle:10,radius:0}
    //         effect.refreshData(data.angle,data.radius);
    //         let tim:egret.Timer = new egret.Timer(16,Math.floor(t/16));
    //         tim.start();
    //         tim.addEventListener(egret.TimerEvent.TIMER,()=>{
    //             // data.angle +=3;
    //             data.radius += 3;
    //             effect.refreshData(data.angle,data.radius);
    //         },this);
    //         tim.addEventListener(egret.TimerEvent.COMPLETE,()=>{tim.stop();tim=null},this)
    // }
}