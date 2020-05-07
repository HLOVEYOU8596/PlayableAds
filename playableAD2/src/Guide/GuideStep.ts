// TypeScript file

class GuideStep extends egret.DisplayObjectContainer {
    private static _instance: GuideStep;
    public static get instance(): GuideStep {
        if (!this._instance) {
            this._instance = new GuideStep();
        }
        return this._instance;
    }

    private guideStep: number = 0;
    private pointArr = [];
    private kImgArrow: eui.Image;
    private area = new eui.Rect();

    private callBack: Function;

    public constructor() {
        super();
    }

    /**
     * dp 确保已经定位并且没有加入到显示列表中。
     */
    public init(dp: eui.Group, arr: egret.Point[]): void {
        dp.touchEnabled = false;
        //TO DO 初始化手指
        this.kImgArrow = new eui.Image(main_guide_arrow);
        this.kImgArrow.visible = false;
        this.area.width = 600;
        this.area.height = 600;

        dp.addChild(this.kImgArrow);
        dp.addChild(this.area);
        this.pointArr = arr;
    }

    //每一步引导完成移动手指
    public moveHand(callBack: Function) {
        this.area.visible = true;
        this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.callBack = callBack;

        console.log("引导step:", this.guideStep);
        let point = this.pointArr[this.guideStep];
        this.kImgArrow.visible = true;
        this.kImgArrow.x = point.x;
        this.kImgArrow.y = point.y;

        this.area.x = point.x - this.area.width + 300;
        this.area.y = point.y - this.area.height + 300;
        this.area.alpha = 0;

        if (this.guideStep < this.pointArr.length - 1) {
            this.kImgArrow.scaleX = 1.1;
            this.kImgArrow.scaleY = 1.1;
            egret.Tween.get(this.kImgArrow, { loop: true }).
                to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut);
        } else {
            this.kImgArrow.x = 300;
            this.kImgArrow.y = 400;
            this.playRight();
        }
    }


    private playRight() {
        egret.Tween.get(this.kImgArrow).call(()=>{
            MainView.instance.gameOver.dispatchEventWith("big",false,1);
        }).wait(300).to({ x: 840 }, 800).call(()=>{
            this.playLeft();
        });
    }

    private playLeft() {
        egret.Tween.get(this.kImgArrow).call(()=>{
            MainView.instance.gameOver.dispatchEventWith("big",false,2);
        }).wait(300).to({ x: 440 }, 800).call(()=>{
            this.playRight();
        });
    }

    public clearHand() {
        console.log("clear hand");
        this.kImgArrow.visible = false;
        egret.Tween.removeTweens(this.kImgArrow);
        this.guideStep++;
        this.callBack = null;
        this.area.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.area.visible = false;
    }

    private onClick() {
        this.callBack();
        SoundManager.instance.playEffect(SoundConst.click);
    }
}