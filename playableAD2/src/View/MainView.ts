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

    private kImgBg: eui.Image;                  //主场景背景图
    private kImgDecorate1: eui.Image;           //装饰1
    private kImgDecorate2: eui.Image;           //装饰2
    private kImgMain: eui.Image;                //房子
    private kImgDecorate3: eui.Image;           //装饰3
    private kBtn1: eui.Image;                   //按钮1
    private kBtn2: eui.Image;                   //按钮2
    private kBtn3: eui.Image;                   //按钮3
    private kImgTipsBg: eui.Image;              //提示框背板
    private kImgTips: eui.Image;                //提示

    //引导相关变量
    private guideArr = [new egret.Point(640, 360), new egret.Point(640, 360),
    // new egret.Point(640, 360), 
    new egret.Point(495, 597),
    new egret.Point(663, 597), new egret.Point(831, 597),
    new egret.Point(640, 360)];
    private kGrpGuide: eui.Group;               //引导展示组

    private kGrpMain: eui.Group;                //主展示组
    private kGrpBtn: eui.Group;                 //按钮展示组
    private kGrpTips: eui.Image;                //提示展示组

    private btnClickNum: number = 0;            //按钮点击次数

    public gameOver: GameOver;                  //游戏结束界面

    private kGrpAction: eui.Group;              //动画展示组
    private kGrpSnow:eui.Group;                 //雪花
    constructor() {
        super();

        this.skinName = "MainViewDevSkin";
        // this.skinName = "MainViewSkin";
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.initUI, this);

        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }

    /**
     * 初始化游戏界面UI
    */
    private initUI() {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initUI, this);
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg.source = main_bg;
        this.kImgMain.source = main_a;
        this.kImgDecorate1.source = main_decorate1;
        this.kImgDecorate2.source = main_decorate2;
        this.kImgDecorate3.source = main_decorate3;
        this.kImgTipsBg.source = main_tips_bg;
        this.kImgTips.source = main_tips1;
        this.kBtn1.source = main_btn1;
        this.kBtn2.source = main_btn2;
        this.kBtn3.source = main_btn3;

        this.kGrpBtn.$children.forEach((item, index) => {
            let img: eui.Image = item["getChildByName"]("main_button_bg");
            img.source = main_button_bg;
        });

        this.initPoint(this.kImgMain, "main_a");
        this.playStartAni();
        this.addEvents();
        this.initData();
    }

    /**
     *  @description 播放入场动画
     */
    private playStartAni() {
        SoundManager.instance.playBg(SoundConst.bgm);
        // ParticleUtil.instance.creatParticle("snow",this.kGrpSnow,0,0)
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow,snowJson,snow,0,0);
        this.kGrpTips.scaleX = this.kGrpTips.scaleY = 0;
        egret.Tween.get(this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kGrpTips);
        });
    }

    /**
     * 初始化游戏数据
    */
    private async initData() {
        GuideStep.instance.init(this.kGrpGuide, this.guideArr);
        GuideStep.instance.moveHand(this.touchFirst.bind(this));
    }

    /**
     * @description 第一次点击
    */
    private touchFirst() {
        console.log("touch first!");
        GuideStep.instance.clearHand();
        this.kGrpTips.visible = false;
        egret.Tween.removeTweens(this.kImgMain);
        this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
        this.kImgMain.source = main_b;

        this.initPoint(this.kImgMain, "main_b");
        egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgMain);
        });
        this.setTimeCallBack(300, () => { GuideStep.instance.moveHand(this.touchSecond.bind(this)); });
    }

    /**
     * @description 第二次点击
    */
    public touchSecond() {
        console.log("touch second!");
        GuideStep.instance.clearHand();

        this.kGrpBtn.visible = true;

        egret.Tween.removeTweens(this.kImgMain);
        this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
        this.kImgMain.source = main_c;

        this.initPoint(this.kImgMain, "main_c");
        egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgMain);
        });
        // this.setTimeCallBack(300, () => { GuideStep.instance.moveHand(this.touchThird.bind(this)); });
        this.setTimeCallBack(300, () => {
            GuideStep.instance.moveHand(this.clickBtn.bind(this));
            this.kGrpTips.visible = true;
            this.kImgTips.source = main_tips2;
            this.kGrpTips.scaleX = this.kGrpTips.scaleY = 0;
            egret.Tween.get(this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
                egret.Tween.removeTweens(this.kGrpTips);
            });
        });
    }

    /**
     * @description 第三次点击
    */
    private touchThird() {
        console.log("touch third!");
        GuideStep.instance.clearHand();
        this.kGrpBtn.visible = true;
        egret.Tween.removeTweens(this.kImgMain);
        this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
        // this.kImgMain.source = main_d;

        this.initPoint(this.kImgMain, "main_d");
        egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgMain);
        });
        this.setTimeCallBack(300, () => {
            GuideStep.instance.moveHand(this.clickBtn.bind(this));
            this.kGrpTips.visible = true;
            this.kImgTips.source = main_tips2;
            this.kGrpTips.scaleX = this.kGrpTips.scaleY = 0;
            egret.Tween.get(this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
                egret.Tween.removeTweens(this.kGrpTips);
            });
        });
    }

    /**
     * @description 点击按钮执行方法
    */
    private clickBtn() {
        console.log("touch btn!");
        this.kGrpTips.visible = false;
        this.btnClickNum++;
        GuideStep.instance.clearHand();
        this["kImgDecorate" + this.btnClickNum].visible = true;
        this[`kBtn${this.btnClickNum}`].alpha = 0.5;
        this.initPoint(this["kImgDecorate" + this.btnClickNum], "main_decorate" + this.btnClickNum);
        this["kImgDecorate" + this.btnClickNum].scaleX = this["kImgDecorate" + this.btnClickNum].scaleY = 0;
        egret.Tween.get(this["kImgDecorate" + this.btnClickNum]).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this["kImgDecorate" + this.btnClickNum]);
            if (this.btnClickNum == 3) {
                // this.kImgMain.source = main_complete;
                // //建造完成，播放结束动画
                // this.kGrpTips.visible = false;
                // this.kGrpBtn.visible = false;
                // this.playEndAni();


            } 
        });
        this.setTimeCallBack(300, () => {
            // if (this.btnClickNum == 3) {
            // } else {
            //     GuideStep.instance.moveHand(this.clickBtn.bind(this));
            // }

            if(this.btnClickNum == 2){
                let img = new eui.Image(main_taptips);
                img.horizontalCenter = 0;
                img.verticalCenter = 0;
                this.kGrpMain.addChild(img);
                img.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openPlateForm,this);
                egret.Tween.get(img,{loop:true}).to({scaleX:1.3,scaleY:1.3},600).to({scaleX:1,scaleY:1},200);
                GuideStep.instance.moveHand(this.openPlateForm.bind(this));
            }else{
                GuideStep.instance.moveHand(this.clickBtn.bind(this));
            }
        });
    }

    /**
     * @description 点击按钮执行方法
    */
    // private clickBtn() {
    //     console.log("touch btn!");
    //     this.btnClickNum++;
    //     switch (this.btnClickNum) {
    //         case 1:
    //         case 3:
    //             GuideStep.instance.clearHand();
    //             this["kImgDecorate" + this.btnClickNum].visible = true;
    //             this[`kBtn${this.btnClickNum}`].alpha = 0.5;
    //             this.initPoint(this["kImgDecorate" + this.btnClickNum],"main_decorate"+this.btnClickNum);
    //             this["kImgDecorate" + this.btnClickNum].scaleX = this["kImgDecorate" + this.btnClickNum].scaleY = 0;
    //             egret.Tween.get(this["kImgDecorate" + this.btnClickNum]).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
    //                 egret.Tween.removeTweens(this["kImgDecorate" + this.btnClickNum]);
    //                 if (this.btnClickNum == 1) {GuideStep.instance.moveHand(this.clickBtn.bind(this));}
    //                 else {
    //                     //建造完成，播放结束动画
    //                     this.kGrpTips.visible = false;
    //                     this.kGrpBtn.visible = false;
    //                     this.playEndAni();
    //                 }
    //             });
    //             break;
    //         case 2:
    //             GuideStep.instance.clearHand();
    //             this.kBtn2.alpha = 0.5;
    //             egret.Tween.removeTweens(this.kImgMain);
    //             this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
    //             this.kImgMain.source = main_complete;

    //             this.initPoint(this.kImgMain,"main_complete");
    //             egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
    //                 egret.Tween.removeTweens(this.kImgMain);
    //             });
    //             this.setTimeCallBack(300,()=>{GuideStep.instance.moveHand(this.clickBtn.bind(this));});
    //             break;
    //     }
    // }

    /**
     * 初始化游戏交互事件
    */
    private addEvents() {
        this.addEventListener(egret.Event.CHANGE, this.onRotation, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.onBegin,this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE,this.onMove,this);
        this.addEventListener(egret.TouchEvent.TOUCH_END,this.onEnd,this);
    }

    // //播放转场动画及打开结束界面
    // private playEndAni() {
    //     // SoundManager.instance.playEffect(SoundConst.win);
    //     //添加蒙板
    //     let rect: eui.Rect = new eui.Rect(1280, 720, 0x000000);
    //     rect.alpha = 0.6;
    //     this.kGrpAction.addChild(rect);

    //     //添加完成动画
    //     // let img = new eui.Image(main_perfect);
    //     img.horizontalCenter = 0;
    //     img.verticalCenter = 0;
    //     img.scaleX = img.scaleY = 0;
    //     this.kGrpAction.addChild(img);

    //     egret.Tween.get(img).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut).call(() => {
    //         egret.Tween.removeTweens(img);
    //     });

    //     let t = egret.setTimeout(() => {
    //         egret.clearTimeout(t);
    //         this.kGrpAction.removeChild(rect);
    //         this.gameOver = GameOver.instance;
    //         this.gameOver.width = this.kGrpAction.width;
    //         this.gameOver.height = this.kGrpAction.height;
    //         this.kGrpAction.addChild(this.gameOver);
    //         GuideStep.instance.moveHand(this.openPlateForm.bind(this));
    //     }, this, 1500);

    //     this.playCaidai(200, 2000);
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    // }

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
    }

    //初始化游戏图片位置
    private initPoint(img: eui.Image, str: string) {
        img.anchorOffsetX = img.width / 2;
        img.anchorOffsetY = img.height / 2;

        img.x = jso[str][0] + img.anchorOffsetX;
        img.y = jso[str][1] + img.anchorOffsetY;
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
        let t = egret.setTimeout(() => {
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            this.x = this.y = 0;
            this.scaleX = this.scaleY = 1;
        }, this, 600);
    }

    private onBegin(event){
        this.cirle.ellipseWidth = 50;
        this.cirle.ellipseHeight = 50;
        this.cirle.anchorOffsetX = 25;
        this.cirle.anchorOffsetY = 25;
        this.cirle.x = event.stageX;
        this.cirle.y = event.stageY;
        this.kGrpAction.addChild(this.cirle);
        console.log("开始",event.stageX,event.stageY);
        this.startPoint = new egret.Point(event.stageX,event.stageY);
    }

    private onMove(event){
        

        let tail = new eui.Rect(40,60,0x000000);
        tail.anchorOffsetX = 40;
        tail.anchorOffsetY = 30;
         tail.alpha = 0.7;
        let endPoint:egret.Point = new egret.Point(event.stageX,event.stageY);
        let rotation = 180*Math.atan2((endPoint.y-this.startPoint.y),(endPoint.x- this.startPoint.x))/Math.PI;
        tail.rotation = rotation;
        egret.Tween.get(tail).to({height:20,alpha:0},300).call(()=>{
            egret.Tween.removeTweens(tail);
            this.kGrpAction.removeChild(tail);
        });
        console.log("滑动",event.stageX,event.stageY);

        this.cirle.x = endPoint.x;
        this.cirle.y = endPoint.y;
        tail.x = endPoint.x;
        tail.y = endPoint.y;
        this.kGrpAction.addChild(tail);
        this.kGrpAction.setChildIndex(tail,this.kGrpAction.getChildIndex(this.cirle)-1);
        this.startPoint = endPoint;
    }

    private onEnd(event){
        this.kGrpAction.removeChild(this.cirle);
        console.log("结束",event.stageX,event.stageY);
    }

    private startPoint:egret.Point;
    private cirle:eui.Rect = new eui.Rect(50,50,0x000000);
}