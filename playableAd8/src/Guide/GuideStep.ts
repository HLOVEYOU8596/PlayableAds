// TypeScript file

class GuideStep {
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
    private kImgCirle: eui.Image;
    private guideType: number = 1;//1,点击，2，滑动
    private touchStart: egret.Point;
    private kImgPoint: eui.Image;

    private callBack: Function;

    public constructor() {
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
        this.area.visible = false;

        this.kImgPoint = new eui.Image(main_arrow);
        this.kImgPoint.visible = false;
        this.kImgPoint.anchorOffsetX = 26;
        this.kImgPoint.anchorOffsetY = 0;

        this.kImgCirle = new eui.Image(main_circle);
        this.kImgCirle.visible = false;
        this.kImgArrow.touchEnabled = false;
        this.kImgCirle.touchEnabled = false;

        dp.addChild(this.kImgCirle);
        dp.addChild(this.kImgPoint);
        dp.addChild(this.kImgArrow);
        dp.addChild(this.area);
        this.pointArr = arr;
        this.area.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
    }

    //每一步引导完成移动手指
    public moveHand(callBack: Function, type: number = 1) {
        this.guideType = type;
        this.area.visible = true;
        this.callBack = callBack;
        let point = this.pointArr[this.guideStep];
        this.kImgArrow.visible = true;
        this.kImgArrow.x = point.x;
        this.kImgArrow.y = point.y;

        console.log("引导step:", this.guideStep);

        this.area.x = point.x - this.area.width + 300;
        this.area.y = point.y - this.area.height + 300;
        this.area.alpha = 0;
        switch (type) {
            case 1:
                this.area.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                this.kImgCirle.visible = true;
                this.kImgCirle.x = point.x;
                this.kImgCirle.y = point.y;
                this.kImgCirle.anchorOffsetX = 77;
                this.kImgCirle.anchorOffsetY = 77;

                this.kImgCirle.scaleX = this.kImgCirle.scaleY = 0;
                egret.Tween.get(this.kImgCirle, { loop: true }).to({ scaleX: 2, scaleY: 2 }, 300, egret.Ease.quadInOut)
                    .to({ scaleX: 0.5, scaleY: 0.5 }, 150, egret.Ease.quadInOut);
                this.kImgArrow.scaleX = this.kImgArrow.scaleY = 0.8;
                egret.Tween.get(this.kImgArrow, { loop: true }).
                    to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut)
                    .to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut);
                break
            case 2:
                let point1 = this.pointArr[this.guideStep + 1];
                this.area.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
                this.kImgPoint.x = point1.x;
                this.kImgPoint.y = point1.y;
                let x = (point.x - point1.x);
                let y = (point.y - point1.y)
                let a = 180 * Math.atan2(y, x) / Math.PI;
                this.kImgPoint.visible = true;
                this.kImgPoint.rotation = a - 90;
                let l = Math.sqrt(x * x + y * y);
                this.kImgPoint.height = l;
                this.kImgPoint.scaleX = l / 270;
                egret.Tween.get(this.kImgArrow, { loop: true }).to({ x: point1.x, y: point1.y }, 600).to({ x: point.x, y: point.y }, 200);
        }
    }

    public clearHand() {
        console.log("clear hand");
        this.kImgArrow.visible = false;
        this.kImgPoint.visible = false;
        this.kImgCirle.visible = false;
        egret.Tween.removeTweens(this.kImgArrow);
        egret.Tween.removeTweens(this.kImgCirle);
        switch (this.guideType) {
            case 1:
                this.guideStep++;
                this.area.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
                break;
            case 2:
                this.guideStep += 2;
                this.area.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
                break;
        }
        this.callBack = null;
        this.area.visible = false;
    }

    private onClick() {
        this.callBack();
        SoundManager.instance.playEffect(SoundConst.click);
    }

    private onTouchBegin(evt) {
        this.touchStart = new egret.Point(evt.stageX, evt.stageY);
    }

    private onMove(evt) {
        let end = new egret.Point(evt.stageX, evt.stageY);
        let w = Math.abs(end.x - this.touchStart.x);
        let h = Math.abs(end.y - this.touchStart.y);
        if (h / w > 1 && h > 50) {
            console.log("swiper success");
            this.callBack();
            SoundManager.instance.playEffect(SoundConst.click);
        }
    }
}