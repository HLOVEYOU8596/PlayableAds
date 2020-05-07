class GameStart extends eui.Component implements eui.UIComponent {
    private constructor() {
        super();
        // this.skinName = GameStartSkin;
        this.skinName = GameStartDevSkin;
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }
    //单例写法
    private static _instance: GameStart;
    public static get instance(): GameStart {
        if (!this._instance) {
            this._instance = new GameStart();
        }
        return this._instance;
    }

    private kGrpMain: eui.Group;
    private kGrpAction: eui.Group;
    private kImgBg: eui.Image;
    private kImgLux: eui.Image;
    private kImgBox: eui.Image;
    private kBtnTap: eui.Image;
    private kImgHand: eui.Image;
    private kImgMask: eui.Rect;

    private boxStatus: boolean = false;
    private initUI() {
        //图片base64赋值
        // this.kImgBg.source = start_bg;
        // this.kImgBox.source = start_box_close;
        // this.kImgHand.source = main_guide_arrow;
        // this.kImgLux.source = start_lux;
        // this.kBtnTap.source = start_tap;

        this.playStartAni();
        this.addEvents();
        // this.kGrpMain.tint = 0xffff00;
    }

    private async playStartAni() {
        egret.Tween.get(this.kImgBox, { loop: true }).call(()=>{SoundManager.instance.playEffect(SoundConst.huang)}).
        to({ scaleX: 1.2, scaleY: 1.2 }, 200)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ scaleX: 1, scaleY: 1 }, 200).wait(300);
        egret.Tween.get(this.kImgHand).wait(3000).call(() => {
            egret.Tween.removeTweens(this.kImgHand);
            this.kImgHand.visible = true;
            this.kImgHand.scaleX = this.kImgHand.scaleY = 0.8;
            egret.Tween.get(this.kImgHand, { loop: true }).
                to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut)
                .to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut);
        });
        this.setTimeCallBack(6000, () => {
            this.openBox();
        });
    }

    private addEvents() {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgBox.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openBox, this);
    }

    private async openBox() {
        if (this.boxStatus) return;
        this.boxStatus = true;
        this.kImgBox.rotation = 0;
        egret.Tween.removeTweens(this.kImgHand);
        egret.Tween.removeTweens(this.kImgBox);
        this.kImgHand.visible = false;
        this.kBtnTap.visible = false;
        // this.kImgBox.source = start_box_open;
        this.kImgLux.visible = true;
        egret.Tween.get(this.kImgLux, { loop: true }).to({ rotation: 360 }, 4000);
        let system = <particle.GravityParticleSystem>await ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, 674, 270, 3000);
        SoundManager.instance.playEffect(SoundConst.open);
        SoundManager.instance.playEffect(SoundConst.coin);
        system.scaleX = system.scaleY = 0.8;
        let num: number = 1;
        system.addEventListener(egret.Event.COMPLETE, () => {
            system.stop();
            this.kGrpAction.removeChild(system);
        }, this);

        this.setTimeCallBack(2800, () => {
            RES.getResByUrl(font, (texture) => {
                this.kImgBox.visible = false;
                let label: egret.BitmapText = new egret.BitmapText();
                let font = new egret.BitmapFont(texture, fontConfig);
                label.font = font;
                label.width = 1280;
                label.height = 720;
                label.anchorOffsetX = 640;
                label.anchorOffsetY = 360;
                label.textAlign = egret.HorizontalAlign.CENTER;
                label.y = 500;
                label.x = 700;
                this.kGrpAction.addChild(label);
                label.scaleX = label.scaleY = 1;
                let a = 1;
                let tim: egret.Timer = new egret.Timer(100, 20);
                tim.start();
                tim.addEventListener(egret.TimerEvent.TIMER, () => {
                    SoundManager.instance.playEffect(SoundConst.up);
                    SoundManager.instance._volEffect = 0.2;
                    a += Math.floor(Math.random() * 1000);
                    label.text = `c${a}`;
                }, this);
                tim.once(egret.TimerEvent.TIMER_COMPLETE, () => {
                    console.log("计时器关闭");
                    SoundManager.instance._volEffect = 1;
                    SoundManager.instance.playEffect(SoundConst.swich);
                    egret.Tween.get(this.kImgMask).to({ fillAlpha: 1 }, 400).wait(300).call(() => {
                        this.stage.addChild(GameMain.instance);
                    });
                }, this);
            }, this, RES.ResourceItem.TYPE_IMAGE);
        })
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

    private setTimeCallBack(t: number, f: Function) {
        let ti = egret.setTimeout(() => {
            egret.clearTimeout(ti);
            f();
        }, this, t)
    }
}
let fontConfig = {"file":"font.png","frames":{
"+":{"x":340,"y":480,"w":121,"h":181,"offX":0,"offY":0,"sourceW":121,"sourceH":181},
"1":{"x":340,"y":663,"w":87,"h":239,"offX":0,"offY":0,"sourceW":87,"sourceH":239},
"2":{"x":392,"y":239,"w":111,"h":239,"offX":0,"offY":0,"sourceW":111,"sourceH":239},
"3":{"x":279,"y":239,"w":111,"h":239,"offX":0,"offY":0,"sourceW":111,"sourceH":239},
"4":{"x":227,"y":480,"w":111,"h":234,"offX":0,"offY":0,"sourceW":111,"sourceH":234},
"5":{"x":124,"y":240,"w":111,"h":238,"offX":0,"offY":0,"sourceW":111,"sourceH":238},
"6":{"x":114,"y":480,"w":111,"h":235,"offX":0,"offY":0,"sourceW":111,"sourceH":235},
"7":{"x":1,"y":452,"w":111,"h":236,"offX":0,"offY":0,"sourceW":111,"sourceH":236},
"8":{"x":1,"y":214,"w":121,"h":236,"offX":0,"offY":0,"sourceW":121,"sourceH":236},
"9":{"x":156,"y":1,"w":121,"h":237,"offX":0,"offY":0,"sourceW":121,"sourceH":237},
"c":{"x":1,"y":1,"w":153,"h":211,"offX":0,"offY":0,"sourceW":153,"sourceH":211},
"0":{"x":279,"y":1,"w":121,"h":236,"offX":0,"offY":0,"sourceW":121,"sourceH":236}}}