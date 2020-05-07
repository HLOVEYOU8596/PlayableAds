// TypeScript file

class GuideStep extends egret.DisplayObjectContainer {
    private guideStep: number = 0;
    private pointArr = [];
    private kImgArrow: eui.Image;
    private kImgCirle: eui.Image;
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
        this.area.width = 200;
        this.area.height = 200;

        this.kImgCirle = new eui.Image(main_circle);
        this.kImgCirle.visible = false;
        this.kImgArrow.touchEnabled = false;
        this.kImgCirle.touchEnabled = false;

        dp.addChild(this.kImgCirle);
        dp.addChild(this.kImgArrow);
        dp.addChild(this.area);
        this.pointArr = arr;

        this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

    }

    //每一步引导完成移动手指
    public moveHand(callBack: Function) {
        this.callBack = callBack;

        let point = this.pointArr[this.guideStep];
        this.kImgArrow.visible = true;
        this.area.visible = true;
        this.kImgArrow.x = point.x;
        this.kImgArrow.y = point.y;

        this.area.x = point.x - this.area.width + 50;
        this.area.y = point.y - this.area.height + 50;
        this.area.alpha = 0;

        console.log("引导step:", this.guideStep);
        if (this.guideStep < this.pointArr.length - 1) {
            // this.kImgCirle.visible = true;
            // this.kImgCirle.x = point.x;
            // this.kImgCirle.y = point.y;
            // this.kImgCirle.anchorOffsetX = 77;
            // this.kImgCirle.anchorOffsetY = 77;

            // this.kImgCirle.scaleX = this.kImgCirle.scaleY = 0;
            // egret.Tween.get(this.kImgCirle, { loop: true }).to({ scaleX: 2, scaleY: 2 }, 300, egret.Ease.quadInOut)
            //     .to({ scaleX: 0.5, scaleY: 0.5 }, 150, egret.Ease.quadInOut);

            this.kImgArrow.scaleX = 1.1;
            this.kImgArrow.scaleY = 1.1;
            egret.Tween.get(this.kImgArrow, { loop: true }).
                to({ scaleX: 0.8, scaleY: 0.8 }, 600, egret.Ease.quartInOut)
                .to({ scaleX: 1.1, scaleY: 1.1 }, 600, egret.Ease.quartInOut);
        } else {
            this.kImgArrow.x = 300;
            this.kImgArrow.y = 400;
            egret.Tween.get(this.kImgArrow, { loop: true }).wait(300).to({ x: 800 }, 1200).wait(300).to({ x: 300 }, 1200);
        }
    }

    public clearHand() {
        this.kImgArrow.visible = false;
        this.area.visible = false;
        this.kImgCirle.visible = false;
        egret.Tween.removeTweens(this.kImgCirle);
        egret.Tween.removeTweens(this.kImgArrow);
        this.guideStep++;
        this.callBack = null;
    }

    private onClick() {
        this.callBack();
        this.playButtonClick();
    }

    private playButtonClick() {
        let sound: egret.Sound = new egret.Sound();
        sound.load(SoundConst.click);
        sound.addEventListener(egret.Event.COMPLETE, () => {
            sound.play(0, 1);
        }, this);
    }
}