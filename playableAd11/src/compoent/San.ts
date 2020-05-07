// TypeScript file
class San extends eui.Component implements eui.UIComponent{
    private kImgFood1: eui.Image;
    private kImgFood2: eui.Image;
    private kImgFood3: eui.Image;
    private kImgFood4: eui.Image;
    private kImgFood5: eui.Image;
    private type:number;

    constructor(type:number = 1){
        super();
        this.skinName = SanSkin;
        this.type = type;
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.initUI,this);
    }
    
    private initUI(){
        this.kImgFood1.source = main_food1;
        this.kImgFood2.source = main_food2;
        this.kImgFood3.source = main_food3;
        this.kImgFood4.source = main_food4;
        this.kImgFood5.source = main_food5;
        this.updateUI();
    }

    private updateUI(){
        this.invalidateState();
        this.validateNow();
    }

    protected getCurrentState(): string {
        switch (this.type) {
            case 1:
                return "state1";   // 未解锁
            case 2:
                return "state2";   // 已通关
            case 3:
                return "state3";   // 已通关但回退到的关卡
            case 4:
                return "state3";   // 已解锁但尚未挑战
        }
    }


    public showImg2(){
        this.kImgFood2.visible = true;
        this.kImgFood2.scaleX = this.kImgFood2.scaleY = 0;
        egret.Tween.removeTweens(this.kImgFood2);
        egret.Tween.get(this.kImgFood2).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut);
    }

    public showImg3(){
        this.kImgFood3.visible = true;
        this.kImgFood3.scaleX = this.kImgFood3.scaleY = 0;
        egret.Tween.removeTweens(this.kImgFood3);
        egret.Tween.get(this.kImgFood3).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut);
    }

    public showImg4(){
        this.kImgFood4.visible = true;
        this.kImgFood4.scaleX = this.kImgFood4.scaleY = 0;
        egret.Tween.removeTweens(this.kImgFood4);
        egret.Tween.get(this.kImgFood4).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut);
    }

    public showImg5(){
        this.kImgFood5.visible = true;
        this.kImgFood5.y = -100;
        egret.Tween.removeTweens(this.kImgFood5);
        egret.Tween.get(this.kImgFood5).to({y:50},300,egret.Ease.sineIn);
    }
}