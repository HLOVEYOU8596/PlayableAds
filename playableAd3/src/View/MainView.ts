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
    private hamArr: Hamburg[] = [];

    private kImgBg1: eui.Image;
    private kImgPeople1: eui.Image;
    private kImgMenu1: eui.Image;
    private kImgNum1: eui.Image;
    private kImgPeople2: eui.Image;
    private kImgMenu2: eui.Image;
    private kImgNum2: eui.Image;
    private kImgbg2: eui.Image;
    private kImgSwipe: eui.Image;

    private mcArr: any[] = [];

    private a1_mc: egret.MovieClip;
    private a2_mc: egret.MovieClip;

    //引导相关变量
    // private guideArr = [new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
    // new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
    // new egret.Point(714, 632), new egret.Point(714, 632), new egret.Point(714, 632),
    // new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
    // new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
    // new egret.Point(836, 632), new egret.Point(836, 632), new egret.Point(836, 632),
    // new egret.Point(577, 632), new egret.Point(516, 456), new egret.Point(567, 202),
    // new egret.Point(697, 456), new egret.Point(658, 202), new egret.Point(929, 456),
    // new egret.Point(776, 202),
    // ];
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
                let ham = Hamburg.produce();
                ham.anchorOffsetX = ham.width / 2;
                ham.anchorOffsetY = ham.height / 2;
                ham.x = pointJson[`${i}_${j}`].x;
                ham.y = pointJson[`${i}_${j}`].y - 60;
                ham.scaleX = ham.scaleY = pointJson[`${i}_${j}`].scale;
                ham.setData({ status: 1, filter: this.filter });
                this.kGrpHam.addChild(ham);
                this.hamArr.push(ham);
                this.playSmog(0,ham.x,ham.y);
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
        ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        this.playSmog(0, 300, 492);
        this.playSmog(0, 350, 411);
        this.playSmog(0, 400, 330);

        this.a1_mc = <egret.MovieClip>await McManger.instance.getMcAtH5('a1',a1_j,a1,'a1');
        this.a2_mc = <egret.MovieClip>await McManger.instance.getMcAtH5('a2',a2_j,a2,'a2');
        this.a2_mc.scaleX =  this.a1_mc.scaleX =-1;
        this.a2_mc.x = this.a2_mc.width+150;
        this.a1_mc.x = this.a1_mc.width+100;
        this.a1_mc.y = 20;
        this.kImgPeople2.visible = false;
        this.kImgPeople1.visible = false;
        this.a1_mc.frameRate = 8;
        this.kGrpPeople1.addChild(this.a1_mc);
        this.kGrpPeople2.addChild(this.a2_mc);
        //281 697
        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(() => {
            this.a2_mc.gotoAndStop(1);
            egret.Tween.removeTweens(this.kGrpPeople2);
            this.kGrpMenu2.visible = true;
            this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
            egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
        });


        this.setTimeCallBack(500, () => {
            egret.Tween.get(this.kGrpPeople1).to({ x: 281 }, 280).call(() => {
                this.a1_mc.gotoAndStop(1);
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

    // private clickButton() {
    //     egret.log("点击");
    //     this.clickNum++;
    //     if (this.clickNum < 10) {
    //         GuideStep.instance.clearHand();
    //         this.hamArr[9 - this.clickNum].showImg3();
    //         GuideStep.instance.moveHand(this.clickButton.bind(this));
    //     } else if (this.clickNum < 19) {
    //         GuideStep.instance.clearHand();
    //         this.hamArr[18 - this.clickNum].showImg4();
    //         if (this.clickNum == 18) {
    //             GuideStep.instance.moveHand(this.downHam.bind(this));
    //             return;
    //         }
    //         GuideStep.instance.moveHand(this.clickButton.bind(this));
    //     }
    // }

    private clickButton() {
        egret.log("点击");
        let char: string = (3 + Math.floor(this.clickNum / 3)).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        if (this.clickNum == 7) {
            this.setTimeCallBack(600, () => {
                this.downHam();
                SoundManager.instance.playEffect(SoundConst.down);
                // GuideStep.instance.moveHand(this.downHam.bind(this));
            });
            return;
        }
        for (let i = 0; i < 3; i++)this.hamArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3][`showImg${char}`]();
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
        this.hamArr.forEach((item: Hamburg) => {
            item.downHam();
        });
        // GuideStep.instance.clearHand();
        this.setTimeCallBack(600, () => {
            SoundManager.instance.playEffect(SoundConst.down);
            GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
        })

    }

    private conacthHam() {
        this.swiperNum++;
        GuideStep.instance.clearHand();
        let arr = [new egret.Point(541, 332), new egret.Point(957, 332), new egret.Point(957, 332)];
        for (let i = 0; i < 3; i++) {
            egret.Tween.get(this.hamArr[(i + 1) * 3 - this.swiperNum]).to({ x: arr[this.swiperNum - 1].x, y: arr[this.swiperNum - 1].y }, 150);
        }
        this.setTimeCallBack(160, async () => {
            this.hamArr[6 - this.swiperNum].visible = this.hamArr[3 - this.swiperNum].visible = false;
            egret.Tween.get(this.hamArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 567 : 987, y: 105, scaleX: 0.6, scaleY: 0.6 }, 150).call(() => {
                this.hamArr[9 - this.swiperNum].visible = false;
            });
            // let x = ParticleUtil.instance.creatParticle("coin", this.kGrpSnow, arr[this.swiperNum-1].x, arr[this.swiperNum-1].y-200,700);
            let x = await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, arr[this.swiperNum - 1].x, arr[this.swiperNum - 1].y - 200, 700);
            // x["scaleX"] = x["scaleY"] = 2;
            SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
            this.setTimeCallBack(700, () => {
                x["stop"]();
                if (this.swiperNum == 1) {
                    this.kGrpMenu1.visible = false;
                    this.a1_mc.gotoAndPlay(1,-1);
                    this.setTimeCallBack(2000,()=>{this.kGrpPeople1.removeChild(this.a1_mc);this.a1_mc.stop();});
                    GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                } else if (this.swiperNum == 2) {
                    this.kImgNum2.source = main_x3;
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

    private async playSmog(t: number, x, y,target = null) {
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