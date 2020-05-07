// TypeScript file
class GameOver extends eui.Component implements eui.UIComponent{
    //单例写法
    private static _instance: GameOver;
    public static get instance(): GameOver {
        if (!this._instance) {
            this._instance = new GameOver();
        }
        return this._instance;
    }

    private kImgBg:eui.Image;
    private kImgLeft:eui.Image;
    private kImgRight:eui.Image;
    private kImgBan:eui.Image;
    private kImgBuildA:eui.Image;
    private kImgBuildB:eui.Image;

    constructor(){
        super();
        this.skinName = "GameOverDevSkin";
        // this.skinName = "GameOverSkin";
        this.once(egret.Event.ADDED_TO_STAGE,this.initUI,this);
    }

    private initUI(){
        //初始化图片UI
        // this.kImgBg.source = end_bg;
        // this.kImgLeft.source = end_float;
        // this.kImgRight.source = end_float;
        // this.kImgBan.source = end_small_bg;
        // this.kImgBuildA.source = end_build_left;
        // this.kImgBuildB.source = end_build_right;

        this.playStartAni();
        this.addEvents();
    }

    private playStartAni(){
        egret.Tween.get(this.kImgLeft,{loop:true}).to({scaleX:0.9,scaleY:0.9},2000).to({scaleX:1,scaleY:1},2000);
        egret.Tween.get(this.kImgRight,{loop:true}).to({scaleX:0.9,scaleY:0.9},2000).to({scaleX:1,scaleY:1},2000);
    }

    private addEvents(){
        this.addEventListener("big",this.dealBig,this);
        this.kImgBuildA.addEventListener(egret.TouchEvent.TOUCH_TAP,MainView.instance.openPlateForm,this);
        this.kImgBuildB.addEventListener(egret.TouchEvent.TOUCH_TAP,MainView.instance.openPlateForm,this);
    }

    private dealBig(data){
        if(data.data == 1){
            egret.Tween.get(this.kImgBuildA).to({scaleX:1.1,scaleY:1.1},200).to({scaleX:1,scaleY:1},100).call(()=>{
                egret.Tween.removeTweens(this.kImgBuildA);
            })
        }else{
            egret.Tween.get(this.kImgBuildB).to({scaleX:1.1,scaleY:1.1},200).to({scaleX:1,scaleY:1},100).call(()=>{
                egret.Tween.removeTweens(this.kImgBuildB);
            })
        }
    }
}