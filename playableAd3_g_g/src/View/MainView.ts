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
    private kGrpBg: eui.Group;

    private end_Card: Boolean = false;

    private kImgBg1: eui.Image;
    private kImgPeople1: eui.Image;
    private kImgMenu1: eui.Image;
    private kImgNum1: eui.Image;
    private kImgPeople2: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgNum2: eui.Image;
    private kImgbg2: eui.Image;
    private kImgSwipe: eui.Image;
    private aunt: egret.MovieClip;
    private geek: dragonBones.EgretArmatureDisplay;

    private kImgFood1: eui.Image;
    private kImgFood2: eui.Image;
    private kImgFood3: eui.Image;
    private kImgFood4: eui.Image;
    private kImgContent: eui.Image;
    private kImgTips: eui.Image;
    private kImgHand: eui.Image;
    private kImgEndBg: eui.Image;
    private kImgTopic: eui.Image;
    private kGrpEnd: eui.Group;
    private kGrpClose: eui.Group;
    private kLbTopic: eui.Label;

    private mcArr: any[] = [];



    //引导相关变量
    private guideArr = [new egret.Point(214, 290), new egret.Point(214, 290), new egret.Point(214, 290),
    new egret.Point(290, 290), new egret.Point(290, 290), new egret.Point(290, 290),
    new egret.Point(364, 290),
    new egret.Point(190, 254), new egret.Point(208, 142), new egret.Point(275, 250),
    new egret.Point(259, 141), new egret.Point(349, 245), new egret.Point(309, 138),];
    private kGrpGuide: eui.Group;               //引导展示组

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
        this.playShade();
        for (let i = 2; i >= 0; i--) {
            for (let j = 2; j >= 0; j--) {
                let drum = Drumstick.produce();
                drum.anchorOffsetX = drum.width / 2;
                drum.anchorOffsetY = drum.height / 2;
                drum.x = pointJson[`${i}_${j}`].x;
                drum.y = pointJson[`${i}_${j}`].y;
                drum.scaleX = drum.scaleY = pointJson[`${i}_${j}`].scale;
                drum.setData({ status: 1, filter: this.filter });
                console.log(this.kGrpHam)
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
                // this.playSmog(0, drum.x, drum.y - 30);
                // drum.filters = [this.filter];
            }
        }

        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgMenu1.source = this.kImgMenu2.source = main_menu;
        this.kImgNum1.source = main_x3;
        this.kImgNum2.source = main_x6;
        this.kImgSwipe.source = main_swipe;
        this.kImgPeople1.visible = this.kImgPeople2.visible = false;

        this.kImgFood1.source = end_fodo1;
        this.kImgFood2.source = end_food2;
        this.kImgFood3.source = end_food3;
        this.kImgFood4.source = end_food4;
        this.kImgContent.source = end_topic;
        this.kImgTips.source = end_tips;
        this.kImgEndBg.source = end_bg;
        this.kImgTopic.source = main_reward_bg;
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
        //281 697

        let arrP: egret.Point[] = [new egret.Point(68, 147), new egret.Point(137, 148), new egret.Point(46, 190), new egret.Point(125, 190)];

        arrP.forEach(async item => {
            let a1 = <egret.MovieClip>await McManger.instance.getMcAtH5('noodle', noodle_j, noodle, 'noodle');
            a1.x = item.x; a1.y = item.y-5;
            a1.scaleX = a1.scaleY = .444;
            this.kGrpBg.addChild(a1);
            a1.gotoAndPlay(0,-1);
            this.playSmog(0, item.x, item.y - 40);
        });
        this.geek = <dragonBones.EgretArmatureDisplay>await Dragon.createArmature(0, 15, 'geek', this.kGrpPeople2, geek_ske_j, geek_tex, geek_tex_j);
        this.geek.animation.play('walk', 1);
        this.geek.scaleX = this.geek.scaleY = 0.4;


        egret.Tween.get(this.kGrpPeople2).to({ x: 250 }, 700).call(() => {
            this.geek.animation.play('stand', 0);
            egret.Tween.removeTweens(this.kGrpPeople2);
            this.kGrpMenu2.visible = true;
            this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
        });

        this.aunt = <egret.MovieClip>await McManger.instance.getMcAtH5('a1', a1_j, a1, 'a1');
        this.kGrpPeople1.addChild(this.aunt);
        this.aunt.y = 30;
        // this.aunt.x = 50;
        this.aunt.scaleX = this.aunt.scaleY = .5;


        this.setTimeCallBack(500, () => {
            egret.Tween.get(this.kGrpPeople1).to({ x: 100 }, 280).call(() => {
                this.aunt.gotoAndPlay(0, -1);
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
        if (this.clickNum == 6) {
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
    }

    private downHam() {
        SoundManager.instance.playEffect(SoundConst.down);
        this.drumArr.forEach((item: Drumstick) => {
            item.showImg5();
        });
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, () => {
            GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
        })

    }

    private conacthHam() {
        this.swiperNum++;
        GuideStep.instance.clearHand();
        let arr = [new egret.Point(217, 95), new egret.Point(353, 101), new egret.Point(353, 101)];
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
            let x = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, arr[this.swiperNum - 1].x, arr[this.swiperNum - 1].y, 700);
            x.scaleX = x.scaleY = .3;
            SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
            this.setTimeCallBack(700, async () => {
                x["stop"]();
                if (this.swiperNum == 1) {
                    this.kGrpMenu1.visible = false;
                    this.aunt.frameRate = 6;
                    this.kGrpPeople1.removeChild(this.aunt);
                    this.aunt = <egret.MovieClip>await McManger.instance.getMcAtH5('a1', a1_j, a1, 'a2');
                    this.kGrpPeople1.addChild(this.aunt);
                    this.aunt.scaleX = this.aunt.scaleY = .5;
                    this.aunt.y = 10;
                    // this.aunt.x = 50;

                    this.aunt.gotoAndPlay(0, 2);
                    this.aunt.once(egret.Event.COMPLETE, () => { this.aunt.visible = false }, this);
                    GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                } else if (this.swiperNum == 2) {
                    this.kImgNum2.source = main_x3;
                    if (!this.end_Card) {
                        GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                        this.setTimeCallBack(2400, () => {
                            this.kGrpMain.setChildIndex(this.kImgSwipe,100)
                            this.kImgSwipe.visible = true;
                            this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
                            egret.Tween.get(this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
                                egret.Tween.removeTweens(this.kImgSwipe);
                                egret.Tween.get(this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
                            });
                        });
                    } else {
                        GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                    }
                } else {
                    this.kGrpMenu2.visible = false;
                    this.geek.animation.play('happy', 1);
                    this.geek.once(egret.Event.COMPLETE, () => { this.geek.visible = false; }, this);
                    this.setTimeCallBack(1500, () => { this.playEndAni(); });
                }
            })
        });
    }

    private playEndAni() {
        this.kGrpAction.removeChildren();
        // this.kLbTopic.visible = false;/
        let rect: eui.Rect = new eui.Rect(480, 320, 0x000000);
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
            this.kImgFood1.x = this.kImgFood4.x = 580;
            this.kImgFood2.x = this.kImgFood3.x = -200;
            this.kImgTips.y = 350;
            egret.Tween.get(this.kImgFood1).to({ x: 354 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgFood2).to({ x: 29 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgFood3).to({ x: 1 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgFood4).to({ x: 320 }, 800, egret.Ease.backOut);
            egret.Tween.get(this.kImgTips).to({ y: 288 }, 800, egret.Ease.sineOut);

            egret.Tween.get(this.kImgContent, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1000);

            egret.Tween.get(this.kImgHand, { loop: true }).to({ y: 226 }, 500).to({ alpha: 0 }, 300).call(() => {
                this.kImgHand.y = 256;
                this.kImgHand.alpha = 1;
            });
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.openPlateForm, this);
        });
    }

    //产生随机点
    private createPoint() {
        return new egret.Point(20 + Math.floor(Math.random() * 440), 30 + Math.floor(Math.random() * 290));
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
            img.scaleX = img.scaleY = .5
            img.x = Math.floor(Math.random() * 480);
            img.y = 0;
            arr.push(img);
            let t = egret.setTimeout(() => {
                egret.clearTimeout(t);
                this.kGrpAction.addChild(img);
                egret.Tween.get(img).to({ rotation: Math.random() * 90 }, 300);
                egret.Tween.get(img).to({ y: 320}, 1000).call(() => {
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
            egret.Tween.get(img).to({ scaleX: 1, scaleY: 1 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(() => {
                egret.Tween.removeTweens(img);
                this.kGrpAction.removeChild(img);
            });
        }, this, t);
    }

    //平台跳转应用商店
    public openPlateForm() {
        console.log("平台跳转");
        if (window["dapi"]) window["dapi"].openStoreUrl();
        if (window["Liftoff"]) window["Liftoff"].open();
        if (window["mraid"]) window["mraid"].open();
        if (window["FBPlayableOnCTAClick"]) window["FBPlayableOnCTAClick"]();
        if(window["ExitApi"])window["ExitApi"].exit();
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

    private playShade() {
        let vertexSrc =
            "attribute vec2 aVertexPosition;\n" +
            "attribute vec2 aTextureCoord;\n" +
            "attribute vec2 aColor;\n" +
            "uniform vec2 projectionVector;\n" +
            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +
            "const vec2 center = vec2(-1.0, 1.0);\n" +
            "void main(void) {\n" +
            "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n" +
            "   vTextureCoord = aTextureCoord;\n" +
            "   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n" +
            "}";
        let fragmentSrc =
            "precision lowp float;\n" +
            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +
            "uniform sampler2D uSampler;\n" +
            "uniform float customUniform;\n" +
            "void main(void) {\n" +
            "vec2 uvs = vTextureCoord.xy;\n" +
            "vec4 fg = texture2D(uSampler, vTextureCoord);\n" +
            "fg.rgb += sin(customUniform + uvs.x * 2. + uvs.y * 2.) * 0.2;\n" +
            "gl_FragColor = fg * vColor;\n" +
            "}";
        let customFilter = new egret.CustomFilter(
            vertexSrc,
            fragmentSrc,
            {
                customUniform: 0
            }
        );
        this.addEventListener(egret.Event.ENTER_FRAME, () => {
            customFilter.uniforms.customUniform += 0.13;
            if (customFilter.uniforms.customUniform > Math.PI * 2) {
                customFilter.uniforms.customUniform = 0.0;
            }
        }, this);
        this.filter = customFilter;
    }

    private filter: egret.CustomFilter;
    private async playFei(t: number, x, y) {
        let mm: egret.MovieClip = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mc_j, mc, "soil");
        this.kGrpAction.addChild(mm);
        mm.x = x;
        mm.y = y;
        mm.gotoAndPlay(0, -1);
        this.mcArr.push(mm);
    }

    private async playSmog(t: number, x, y) {
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, smoke_j, smoke, x, y);
        system.alpha = 0.2;
        this.mcArr.push(system);
    }

}