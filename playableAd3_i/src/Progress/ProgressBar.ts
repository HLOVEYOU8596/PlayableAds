// TypeScript file
class ProgressBar extends eui.ProgressBar{
    public bg:eui.Image;
    private logo:eui.Image;

    constructor() {
        super();
        this.skinName = "ProgressBarSkin";
        console.log("初始化")
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initUI,this);
    }
    
    public initUI(){
        this.bg.source = main_progress_bg;
        this.thumb["source"] = main_progress;
        this.thumb["scale9Grid"] = new egret.Rectangle(5,20,1,100);
        // this.logo.source = main_icon_coin; 
    }
}