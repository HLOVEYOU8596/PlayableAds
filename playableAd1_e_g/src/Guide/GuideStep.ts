// TypeScript file

class GuideStep extends egret.DisplayObjectContainer {
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
    public init(dp: eui.Group,arr: egret.Point[]): void {
        dp.touchEnabled = false;
        //TO DO 初始化手指
        this.kImgArrow = new eui.Image(main_guide_arrow);
        this.kImgArrow.visible = false;
        this.area.width = 200;
        this.area.height = 200;

        dp.addChild(this.kImgArrow);
        dp.addChild(this.area);
        this.pointArr = arr;

        this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);

    }

    //每一步引导完成移动手指
    public moveHand(callBack: Function) {
        this.callBack = callBack;
        this.area.visible = true;

        console.log("引导step:",this.guideStep);
        let point = this.pointArr[this.guideStep];
        this.kImgArrow.visible = true;
        this.kImgArrow.x = point.x;
        this.kImgArrow.y = point.y;

        this.area.x = point.x - this.area.width + 50;
        this.area.y = point.y - this.area.height + 50;
        this.area.alpha = 0;


        this.kImgArrow.scaleX = 1.1;
        this.kImgArrow.scaleY = 1.1;
        egret.Tween.get(this.kImgArrow, { loop: true }).
            to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut)
            .to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut);
    }

    public clearHand() {
        this.area.visible = false;
        this.kImgArrow.visible = false;
        egret.Tween.removeTweens(this.kImgArrow);
        this.guideStep++;
        this.callBack = null;
    }

    private onClick() {
        this.callBack();
        this.playButtonClick();
    }

    //播放点击音效
    private playButtonClick() {
        SoundManager.instance.playEffect(SoundConst.click);
    }
}