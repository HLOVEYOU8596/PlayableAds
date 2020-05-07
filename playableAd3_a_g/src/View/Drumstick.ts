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
    // private kImgDrumstick2:eui.Image;
    private kImgDrumstick3:eui.Image;
    private kImgDrumstick4:eui.Image;
    private kImgDrumstick5:eui.Image;

    // data
    public mData;   // 组件数据
    public id: any;
    public constructor(type) {
        super();
        this.id = type;
        // this.skinName = "DrumstickSkin";
        this.skinName = "DrumstickDevSkin";    
        this.once(egret.Event.ADDED_TO_STAGE,this.initUI,this);    
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    private initUI(){
        this.kImgDrumstick1.source = main_drumstick1;
        // this.kImgDrumstick2.source = main_drumstick2;
        this.kImgDrumstick3.source = main_drumstick3;
        this.kImgDrumstick4.source = main_drumstick4;
        this.kImgDrumstick5.source = main_drumstick5
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

    public showImg3(callBack:Function = ()=>{}){
        this.kImgDrumstick3.visible = true;
        this.kImgDrumstick3.scaleX = this.kImgDrumstick3.scaleY = 0;
        egret.Tween.get(this.kImgDrumstick3).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
            egret.Tween.removeTweens(this.kImgDrumstick3);
            callBack();
        });
    }

    public showImg4(callBack:Function = ()=>{}){
        this.kImgDrumstick5.visible = true;
        this.kImgDrumstick5.scaleX = this.kImgDrumstick5.scaleY = 0;
        egret.Tween.get(this.kImgDrumstick5).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
            egret.Tween.removeTweens(this.kImgDrumstick5);
            callBack();
        });
    }

    public showImg5(callBack:Function = ()=>{}){
        this.kImgDrumstick4.visible = true;
        // this.kImgDrumstick5.scaleX = this.kImgDrumstick5.scaleY = 0;
        // egret.Tween.get(this.kImgDrumstick5).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
        //     egret.Tween.removeTweens(this.kImgDrumstick5);
        //     callBack();
        // });
        this.kImgDrumstick4.y = -50;
        egret.Tween.get(this.kImgDrumstick4).to({y:46},600,egret.Ease.bounceInOut).call(()=>{
            egret.Tween.removeTweens(this.kImgDrumstick4);
            callBack();
        });
    }
}