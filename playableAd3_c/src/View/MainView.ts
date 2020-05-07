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



    //引导相关变量
    private guideArr = [new egret.Point(500, 600), new egret.Point(500, 600), new egret.Point(500, 600),
    new egret.Point(650, 600), new egret.Point(650, 600), new egret.Point(650, 600),
    new egret.Point(800, 600),
    new egret.Point(506, 534), new egret.Point(538, 274), new egret.Point(710, 536),
    new egret.Point(662, 276), new egret.Point(934, 524), new egret.Point(796, 284),];
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
        this.playShade();
        for (let i = 2; i >= 0; i--) {
            for (let j = 2; j >= 0; j--) {
                let drum = Drumstick.produce();
                drum.anchorOffsetX = drum.width / 2;
                drum.anchorOffsetY = drum.height / 2;
                drum.x = pointJson[`${i}_${j}`].x;
                drum.y = (pointJson[`${i}_${j}`].y - 45);
                drum.scaleX = drum.scaleY = pointJson[`${i}_${j}`].scale;
                drum.setData({ status: 1, filter: this.filter });
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
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
        this.kGrpMenu1.x = this.kGrpMenu2.x = 60;
        egret.Tween.get(this.kGrpPeople2).to({ x: 240 }, 700).call(() => {
            egret.Tween.removeTweens(this.kGrpPeople2);
            this.kGrpMenu2.visible = true;
            this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
        });


        this.setTimeCallBack(500, () => {
            egret.Tween.get(this.kGrpPeople1).to({ x: 120 }, 280).call(() => {
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
        this.drumArr.forEach((item: Drumstick) => {
            item.showImg5();
        });
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, () => {
            SoundManager.instance.playEffect(SoundConst.down);
            GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
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
}