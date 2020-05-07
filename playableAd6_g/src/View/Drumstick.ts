/**
 * @author yang.xu
 * create on 12.16 2019
*/
class Drumstick extends eui.Component implements eui.UIComponent{
    private static mCacheDict = {};
    /**
     * 创建
     */
    public static produce(type: string = "1"): Drumstick {
        if (Drumstick.mCacheDict[type] == null) {
            Drumstick.mCacheDict[type] = [];
        }

        var dict: Drumstick[] = Drumstick.mCacheDict[type];
        var item: Drumstick;
        if (dict.length > 0) {
            item = dict.pop();
        } else {
            item = new Drumstick(type);
        }

        return item;
    }
    /**
     * 回收
     */
    public static reclaim(item: Drumstick, type: string = "1") {
        if (Drumstick.mCacheDict[type] == null) {
            Drumstick.mCacheDict[type] = [];
        }
        var dict: Drumstick[] = Drumstick.mCacheDict[type];
        if (dict.indexOf(item) == -1) {
            dict.push(item);
            item.clear();
        }
    }

    // ui
    private kImgDrumstick1:eui.Image;
    private kImgDrumstick2:eui.Image;
    private kImgDrumstick3:eui.Image;

    // data
    public mData;   // 组件数据
    public id: any;
    public constructor(type) {
        super();
        this.id = type;
        // this.skinName = DrumstickSkin;
        this.skinName = DrumstickDevSkin; 
        this.once(egret.Event.ADDED_TO_STAGE,this.initUI,this);    
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    private initUI(){
        this.kImgDrumstick1.source = main_food1;
        this.kImgDrumstick2.source = main_food2;
        this.kImgDrumstick3.source = main_food3;
    }

    public setData(data): void {
        this.mData = data;
        this.updateUi();
        this.invalidateState();//标记视图状态失效/
        this.validateNow();
        // this.kImgDrumstick1.filters = [this.mData.filter];
    }

    /** 更新数据并刷新显示 */
    public updateData(): void {
        this.updateUi();
        this.invalidateState();//标记视图状态失效/
        this.validateNow();
    }

    protected getCurrentState(): string {
        switch (this.mData.status) {
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

    /** 格式化组件显示 */
    public updateUi(): void {
        
    }


    /** 清理组件相关信息 */
    public clear(): void {
        
    }

    public showImg1(callBack:Function = ()=>{}){
        this.kImgDrumstick1.visible = true;
        this.kImgDrumstick1.scaleX = this.kImgDrumstick1.scaleY = 0;
        egret.Tween.get(this.kImgDrumstick1).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
            egret.Tween.removeTweens(this.kImgDrumstick1);
            callBack();
        });
    }

    public showImg2(callBack:Function = ()=>{}){
        this.kImgDrumstick2.visible = true;
        this.kImgDrumstick2.scaleX = this.kImgDrumstick2.scaleY = 0;
        egret.Tween.get(this.kImgDrumstick2).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
            egret.Tween.removeTweens(this.kImgDrumstick2);
            callBack();
        });
        egret.Tween.get(this.kImgDrumstick1).to({scaleX:1.2,scaleY:1.2},500,egret.Ease.sineOut).to({scaleX:1,scaleY:1},100);
    }

    public showImg3(callBack:Function = ()=>{}){
        this.kImgDrumstick3.visible = true;
        this.kImgDrumstick3.scaleX = this.kImgDrumstick3.scaleY = 0;
        egret.Tween.get(this.kImgDrumstick3).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
            egret.Tween.removeTweens(this.kImgDrumstick3);
            callBack();
        });
        egret.Tween.get(this.kImgDrumstick1).to({scaleX:1.2,scaleY:1.2},500,egret.Ease.sineOut).to({scaleX:1,scaleY:1},100);
        // this.kImgDrumstick3.visible = true;
        // this.kImgDrumstick3.y = -200;
        // egret.Tween.get(this.kImgDrumstick3).to({ y: 24.5 }, 500, egret.Ease.circIn).call(() => {
        //     egret.Tween.removeTweens(this.kImgDrumstick3);
        //     callBack();
        // });
    }
}