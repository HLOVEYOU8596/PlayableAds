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

    //引导相关变量
    private guideArr = [new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
    // new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
    // new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
    new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
    // new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
    // new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
    new egret.Point(577, 632), new egret.Point(516, 456), new egret.Point(567, 202),
    new egret.Point(697, 456), new egret.Point(658, 202), new egret.Point(929, 456),
    new egret.Point(776, 202),
    ];
    private kGrpGuide: eui.Group;               //引导展示组

    private kGrpMain: eui.Group;                //主展示组

    private kGrpAction: eui.Group;              //动画展示组
    private kGrpSnow: eui.Group;                //雪花
    private kGrpTop: eui.Group;
    private kGrpBottom: eui.Group;

    private kImgContent: eui.Image;
    private kImgTips: eui.Image;
    private kBtnPlay: eui.Image;
    private kImgBg1: eui.Image;
    private kImgPeople: eui.Image;
    private kImgArrow: eui.Image;
    private kImgHand: eui.Image;

    private kGrpSwipe: eui.Group;
    private pointArr: egret.Point[] = []
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
    private async initUI() {
        // this.playShade();
        this.kImgContent.source = main_bg2;
        this.kImgBg1.source = main_bg1;
        this.kImgTips.source = main_swiper;
        this.kImgArrow.source = main_arrow;
        this.kImgPeople.source = main_logo;
        this.kImgHand.source = main_guide_arrow;
        this.kBtnPlay.source = play_free;
        // this.kImgPeople.visible = false;
        // let load = await Dragon.createArmature(640,420,'load',this.kGrpTop,load_ske_j,load_tex,load_tex_j);
        // load.animation.play('load',0); 
        // load.scaleX = load.scaleY = 1.3;
        

        this.playStartAni();
        this.addEvents();

    }

    /**
     *  @description 播放入场动画
     */
    private playStartAni() {
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // y:557
        ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        egret.Tween.get(this.kGrpTop, { loop: true }).to({ y: -170 }, 1500, egret.Ease.circInOut).wait(500).to({ y: 0 }, 600, egret.Ease.bounceOut);
        egret.Tween.get(this.kGrpSwipe).wait(5200).call(() => {
            egret.Tween.removeTweens(this.kGrpTop);
            egret.Tween.removeTweens(this.kGrpSwipe);
            egret.Tween.get(this.kImgTips, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1480);
            egret.Tween.get(this.kGrpSwipe, { loop: true }).to({ y: 500 }, 500).to({ alpha: 0 }, 300).call(() => {
                this.kGrpSwipe.y = 559;
                this.kGrpSwipe.alpha = 1;
            });
        });
        // this.setTimeCallBack(9000, this.gameEnd.bind(this));

    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        // GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        // GuideStep.instance.moveHand(this.clickButton.bind(this));
    }



    /**
     *  @description 添加游戏事件
    */
    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kGrpTop.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.touchBegin, this);
        this.kGrpTop.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.touchMove, this);
        this.kGrpTop.addEventListener(egret.TouchEvent.TOUCH_END, this.touchEnd, this);
        this.kBtnPlay.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    }

    private touchBegin(evt: egret.TouchEvent) {
        this.pointArr[0] = new egret.Point(evt.stageX, evt.stageY);
    }

    private touchMove() {

    }

    private touchEnd(evt: egret.TouchEvent) {
        this.pointArr[1] = new egret.Point(evt.stageX, evt.stageY);
        if (this.pointArr[0].y - this.pointArr[1].y > 70) this.gameEnd();
    }

    private gameEnd() {
        if (this.kGrpTop.y < -200) return;
        egret.Tween.removeAllTweens();
        egret.Tween.get(this.kBtnPlay).to({ scaleX: 1, scaleY: 1 }, 100).call(() => {
            egret.Tween.removeTweens(this.kBtnPlay);
            egret.Tween.get(this.kBtnPlay, { loop: true })
                .to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut)
                .to({ scaleX: 0.9, scaleY: 0.9 }, 500, egret.Ease.quartInOut);
        })
        egret.Tween.get(this.kGrpTop).to({ y: -630 }, 1500, egret.Ease.circOut).call(this.openPlateForm.bind(this));
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
        parent.postMessage('download', '*');
        if (window['ExitApi']) window['ExitApi'].exit();
        parent.postMessage('complete', '*');
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

    // private playShade() {
    //     let vertexSrc =
    //         "attribute vec2 aVertexPosition;\n" +
    //         "attribute vec2 aTextureCoord;\n" +
    //         "attribute vec2 aColor;\n" +
    //         "uniform vec2 projectionVector;\n" +
    //         "varying vec2 vTextureCoord;\n" +
    //         "varying vec4 vColor;\n" +
    //         "const vec2 center = vec2(-1.0, 1.0);\n" +
    //         "void main(void) {\n" +
    //         "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n" +
    //         "   vTextureCoord = aTextureCoord;\n" +
    //         "   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n" +
    //         "}";
    //     let fragmentSrc =
    //         "precision lowp float;\n" +
    //         "varying vec2 vTextureCoord;\n" +
    //         "varying vec4 vColor;\n" +
    //         "uniform sampler2D uSampler;\n" +
    //         "uniform float customUniform;\n" +
    //         "void main(void) {\n" +
    //         "vec2 uvs = vTextureCoord.xy;\n" +
    //         "vec4 fg = texture2D(uSampler, vTextureCoord);\n" +
    //         "fg.rgb += sin(customUniform + uvs.x * 2. + uvs.y * 2.) * 0.2;\n" +
    //         "gl_FragColor = fg * vColor;\n" +
    //         "}";
    //     let customFilter = new egret.CustomFilter(
    //         vertexSrc,
    //         fragmentSrc,
    //         {
    //             customUniform: 0
    //         }
    //     );
    //     this.addEventListener(egret.Event.ENTER_FRAME, () => {
    //         customFilter.uniforms.customUniform += 0.13;
    //         if (customFilter.uniforms.customUniform > Math.PI * 2) {
    //             customFilter.uniforms.customUniform = 0.0;
    //         }
    //     }, this);
    //     this.filter = customFilter;
    // }

    private filter: egret.CustomFilter;
}