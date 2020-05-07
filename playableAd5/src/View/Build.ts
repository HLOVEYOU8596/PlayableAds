// TypeScript file
class Build extends eui.Component {
    private bg: eui.Image;
    private kImgContent: eui.Image;
    public type: number = 1;

    constructor() {
        super();
        this.skinName = BuildSkin;
        this.once(egret.Event.ADDED_TO_STAGE,this.initUI,this);
    }

    private initUI(){
        this.bg.source = main_itembg;
        this.kImgContent.cacheAsBitmap = true;
    }

    public setContent(type: number) {
        this.type = type;
        switch (type) {
            case 1:
                this.kImgContent.source = main_build1;
                break
            case 2:
                this.kImgContent.source = main_build2;
                break;
            case 3:
                this.kImgContent.source = main_build3;
                break;
        }
    }

    /**
     * 设置是否通关
    */
    public setType(flag: boolean) {
        //颜色矩阵数组
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        var glowFilter: egret.GlowFilter = new egret.GlowFilter(0xfaf4ac, 0.8, 70, 70, 2, egret.BitmapFilterQuality.HIGH, false, false);
        if (flag) {
            this.kImgContent.filters = [colorFlilter];
        } else {
            this.kImgContent.filters = [glowFilter];
        }
    }
}