// TypeScript file
class ProgressBar extends eui.ProgressBar{
    private bg:eui.Image;
    private logo:eui.Image;

    constructor() {
        super();
        this.skinName = "ProgressBarSkin";
        console.log("初始化")
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initUI,this);
    }
    
    private initUI(){
        this.bg.source = main_progress_bg;
        this.thumb["source"] = main_progress;
        this.thumb["scale9Grid"] = new egret.Rectangle(30,10,10,10);
        this.logo.source = main_icon_coin; 
    }
}