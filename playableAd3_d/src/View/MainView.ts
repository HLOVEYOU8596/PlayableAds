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
    private guideArr = [new egret.Point(577, 632), new egret.Point(577, 632), new egret.Point(577, 632),
    new egret.Point(724, 632), new egret.Point(724, 632), new egret.Point(724, 632),
    new egret.Point(506, 534), new egret.Point(538, 274), new egret.Point(710, 536),
    new egret.Point(662, 276), new egret.Point(934, 524), new egret.Point(796, 284),];
    private kGrpGuide: eui.Group;               //引导展示组

    private kGrpMain: eui.Group;                //主展示组


    private kGrpAction: eui.Group;              //动画展示组
    private kGrpSnow: eui.Group;                //雪花
    private clickNum: number = 0;               //点击次数
    private swiperNum: number = 0               //滑动次数
    private endType: boolean = false;
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
    private async playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        let action1 = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mcJson, mc, 'fire');
        let action2 = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mcJson, mc, 'fire');
        let action3 = <egret.MovieClip>await McManger.instance.getMcAtH5('mc', mcJson, mc, 'fire');

        this.kGrpAction.addChild(action1); this.addChild(action2); this.addChild(action3);
        action1.gotoAndPlay(0, -1); action2.gotoAndPlay(0, -1); action3.gotoAndPlay(0, -1);
        action1.x = 350; action1.y = 240; action2.x = 300; action2.y = 310; action3.x = 250; action3.y = 400;
        action1.frameRate = action2.frameRate = action3.frameRate = 8;
        action1.scaleX = action1.scaleY = action2.scaleX = action2.scaleY = action3.scaleX = action3.scaleY = 1;

        //281 697
        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(() => {
            egret.Tween.removeTweens(this.kGrpPeople2);
            this.kGrpMenu2.visible = true;
            this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
        });


        this.setTimeCallBack(500, () => {
            egret.Tween.get(this.kGrpPeople1).to({ x: 281 }, 280).call(() => {
                egret.Tween.removeTweens(this.kGrpPeople1);
                this.kGrpMenu1.visible = true;
                this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                this.initData();
            });
        });
        // this.playTest();
        // this.showArea(200,300,50,60);
        // this.showColorfullLoading();
    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    }

    private clickButton() {
        if (this.clickNum == 0) SoundManager.instance.playBg(SoundConst.bgm);
        egret.log("点击");
        let char: string = (2 + Math.floor(this.clickNum / 3)).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        for (let i = 0; i < 3; i++)this.drumArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3][`showImg${char}`]();
        if (this.clickNum == 6) {
            this.setTimeCallBack(600, () => {
                GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
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

    private conacthHam() {
        this.swiperNum++;
        GuideStep.instance.clearHand();
        let arr = [new egret.Point(541, 332), new egret.Point(957, 332), new egret.Point(957, 332)];
        for (let i = 0; i < 3; i++) {
            egret.Tween.get(this.drumArr[(i + 1) * 3 - this.swiperNum]).to({ x: arr[this.swiperNum - 1].x, y: arr[this.swiperNum - 1].y }, 150);
        }
        this.setTimeCallBack(160, async () => {
            this.drumArr[6 - this.swiperNum].visible = this.drumArr[3 - this.swiperNum].visible = false;
            egret.Tween.get(this.drumArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 567 : 987, y: 105, scaleX: 0.6, scaleY: 0.6 }, 150).call(() => {
                this.drumArr[9 - this.swiperNum].visible = false;
            });
            // let x = ParticleUtil.instance.creatParticle("coin", this.kGrpSnow, arr[this.swiperNum-1].x, arr[this.swiperNum-1].y-200,700);
            let x = await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, arr[this.swiperNum - 1].x, arr[this.swiperNum - 1].y - 200, 700);
            SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
            this.setTimeCallBack(700, () => {
                x["stop"]();
                if (this.swiperNum == 1) {
                    this.kGrpMenu1.visible = false;
                    GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                } else if (this.swiperNum == 2) {
                    this.kImgNum2.source = main_x3;
                    if (!this.endType) {
                        // GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                        this.kImgSwipe.visible = true;
                        this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
                        egret.Tween.get(this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(() => {
                            egret.Tween.removeTweens(this.kImgSwipe);
                            egret.Tween.get(this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
                        });
                    } else {
                        GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                    }
                } else {
                    this.kGrpMenu2.visible = false;
                    this.stage.addChild(GameEnd.instance);
                    this.stage.removeChild(this);
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

    private playTest() {
        let shape: egret.Shape = new egret.Shape();
        shape.width = 1280; shape.height = 720;
        this.addChild(shape);

        /******** 开始绘制 ********/
        let gra = shape.graphics;
        gra.beginFill(0x000000);
        gra.drawRect(0, 0, 1280, 720);
        gra.endFill();

        let tim = new egret.Timer(20);
        //r=a
        tim.start();
        let a = 0;
        tim.addEventListener(egret.TimerEvent.TIMER, () => {
            a++;
            let point = new egret.Point(640, 320);
            let p = Math.PI;
            let e = Math.E;
            let radios = a * p / 180;
            point.x = point.x + 20 * e * Math.sin(25 * radios / 23) * Math.cos(radios);
            point.y = point.y + 20 * e * Math.sin(25 * radios / 23) * Math.sin(radios);
            this.drawCirle(gra, point.x, point.y, 1);
        }, this);

    }

    private drawCirle(gra: egret.Graphics, x, y, r) {
        gra.lineStyle(3, 0xff0000, 1);
        gra.drawCircle(x, y, r);
        gra.endFill();
    }

    private showArea(x, y, w, h) {
        let rect1 = new eui.Rect(x, 720, 0x000000);
        let rect2 = new eui.Rect(1280 - x, y, 0x000000);
        rect2.x = x;
        let rect3 = new eui.Rect(1280 - x, 720 - y - h, 0x000000);
        rect3.x = x, rect3.y = y + h;
        let rect4 = new eui.Rect(1280 - x - w, h, 0x000000);
        rect4.x = x + w; rect4.y = y;
        this.addChild(rect1); this.addChild(rect2); this.addChild(rect3); this.addChild(rect4);
        rect1.alpha = rect2.alpha = rect3.alpha = rect4.alpha = 0.6;
    }

    private showColorfullLoading() {
        let box: eui.Group = new eui.Group();
        let layout = new eui.HorizontalLayout();
        let arr: eui.Rect[] = [];
        let a = 0;
        box.width = 375; box.y = 50;
        box.horizontalCenter = 0;
        layout.horizontalAlign = "center";
        layout.gap = 12.5;
        layout.verticalAlign = "middle";
        box.layout = layout;

        for (let i = 0; i < 6; i++) {
            let rect: eui.Rect = new eui.Rect(50, 50, Math.floor(Math.random() * 16777215));
            // rect.ellipseWidth = rect.ellipseHeight = 50;
            box.addChild(rect);
            arr.push(rect);
        }

        this.addChild(box);

        (function run() {
            egret.Tween.get(arr[a]).to({ alpha: 0 }, 100).call(() => {
                a++;if (a == 6) a = 0;run();
            }).to({ alpha: 1 }, 100);
        })();
    }
}