// TypeScript file
class GameStart extends eui.Component implements eui.UIComponent{
    //单例写法
    private static _instance: GameStart;
    public static get instance(): GameStart {
        if (!this._instance) {
            this._instance = new GameStart();
        }
        return this._instance;
    }

    private kImgBg:eui.Image;
    private kGrpTips1:eui.Group;
    private kGrpTips2:eui.Group;
    private kImgArrow:eui.Image;
    private kImgGirl:eui.Image;
    private kImgTips2Bg:eui.Image;
    private kImgTips2:eui.Image;
    private kImgTips1Bg:eui.Image;
    private kImgTips1:eui.Image;


    private kImgBuildA:eui.Image;
    private kImgBuildB:eui.Image;
    private kImgBuildC:eui.Image;
    private kGrpContent:eui.Group;

    private position:number = 0;

    constructor(){
        super();
        // this.skinName = "GameStartSkin";
        this.skinName = "GameStartDevSkin";
        this.once(egret.Event.ADDED_TO_STAGE,this.initUI,this);
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
    }

    private initUI(){
        //初始化图片UI
        this.kImgBg.source = start_bg;
        this.kImgArrow.source = main_guide_arrow;
        this.kImgGirl.source = start_girl;
        this.kImgTips1.source = start_choose;
        this.kImgTips1Bg.source = start_tips_bg1;
        this.kImgTips2.source = start_resturent;
        this.kImgTips2Bg.source = start_tips_bg2;
        this.kImgBuildA.source = start_house1;
        this.kImgBuildB.source = start_house2;
        this.kImgBuildC.source = start_house3;

        this.playStartAni();
        this.addEvents();
    }

    private playStartAni(){
        SoundManager.instance.playBg(SoundConst.bgm);
        this.kGrpTips1.scaleX = this.kGrpTips1.scaleY = this.kGrpTips2.scaleX = this.kGrpTips2.scaleY =0;
        egret.Tween.get(this.kGrpTips1).to({scaleX:1,scaleY:1},1000,egret.Ease.elasticOut);
        egret.Tween.get(this.kGrpTips2).to({scaleX:1,scaleY:1},1000,egret.Ease.elasticOut);
        this.kImgArrow.x = this.kImgBuildA.x;
        this.kImgArrow.y = this.kImgBuildA.y;
        this.playAni();
    }

    private playAni(){
        let arr = [this.kImgBuildA,this.kImgBuildB,this.kImgBuildC];
        egret.Tween.get(arr[this.position]).to({scaleX:1.2,scaleY:1.2},300).to({scaleX:1,scaleY:1},100).call(()=>{
            this.position++;
            if(this.position === 3)this.position = 0;
            egret.Tween.get(this.kImgArrow).to({x:arr[this.position].x,y:arr[this.position].y},600).call(()=>{
                this.playAni();
            });
        });
    }

    private addEvents(){
        this.kImgBuildA.once(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        this.kImgBuildB.once(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        this.kImgBuildC.once(egret.TouchEvent.TOUCH_TAP,this.startGame,this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
    }

    private startGame(evt:egret.TouchEvent){
        SoundManager.instance.playEffect(SoundConst.click);
        this.kImgBuildA.touchEnabled = this.kImgBuildB.touchEnabled = this.kImgBuildC.touchEnabled = false;
        this.kImgArrow.visible = false;
        this.kGrpContent.setChildIndex(evt.target,5);
        egret.Tween.removeAllTweens();
        SoundManager.instance.playEffect(SoundConst.wuwu);
        egret.Tween.get(evt.target).to({x:545,y:178,scaleX:7,scaleY:7,rotation:1080},800,egret.Ease.circIn).call(()=>{
            this.stage.addChild(MainView.instance);
            this.stage.removeChild(GameStart.instance);
        });
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
        function CallBack() {
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            this.x = this.y = 0;
            this.scaleX = this.scaleY = 1;
        }
        this.setTimeCallBack(600, CallBack.bind(this));
    }
}