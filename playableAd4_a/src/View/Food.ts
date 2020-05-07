/**
 * @author yang.xu
 * create on 12.16 2019
*/
class Food extends eui.Component implements eui.UIComponent{
    private static mCacheDict = {};
    /**
     * 创建
     */
    public static produce(type: string = "1"): Food {
        if (Food.mCacheDict[type] == null) {
            Food.mCacheDict[type] = [];
        }

        var dict: Food[] = Food.mCacheDict[type];
        var item: Food;
        if (dict.length > 0) {
            item = dict.pop();
        } else {
            item = new Food(type);
        }

        return item;
    }
    /**
     * 回收
     */
    public static reclaim(item: Food, type: string = "1") {
        if (Food.mCacheDict[type] == null) {
            Food.mCacheDict[type] = [];
        }
        var dict: Food[] = Food.mCacheDict[type];
        if (dict.indexOf(item) == -1) {
            dict.push(item);
            item.clear();
        }
    }

    // ui
   

    // data
    public mData;   // 组件数据
    public id: any;
    private kImgDrumstick:eui.Image;
    private kImgFrties:eui.Image;
    private kImgTomoto:eui.Image;
    public constructor(type) {
        super();
        this.id = type;
        // this.skinName = "FoodSkin";
        this.skinName = FoodDevSkin;    
        this.once(egret.Event.ADDED_TO_STAGE,this.initUI,this);    
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    private initUI(){
        this.kImgDrumstick.source = main_drumstick0;
        this.kImgFrties.source = main_fries;
        this.kImgTomoto.source = main_tomoto;
    }

    public setData(data): void {
        this.mData = data;
        this.updateUi();
        this.invalidateState();//标记视图状态失效/
        this.validateNow();
        // this.kImgFood1.filters = [this.mData.filter];
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
        }
    }

    /** 格式化组件显示 */
    public updateUi(): void {
        
    }

    public cookComplete(){
        this.kImgDrumstick.source = main_drumstick1;
    }

    public flyBefore(){
        this.kImgDrumstick.source = main_drumstick2;;
    }

    public showFrties(){
        this.kImgFrties.visible = true;
        this.kImgFrties.scaleX = this.kImgFrties.scaleY = 0;
        egret.Tween.get(this.kImgFrties).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
            egret.Tween.removeTweens(this.kImgFrties);
        });
        egret.Tween.get(this.kImgDrumstick).to({scaleX:1.2,scaleY:1.2},500,egret.Ease.sineOut).to({scaleX:1,scaleY:1},100);
    }

    public showTomoto(){
        this.kImgTomoto.visible = true;
        this.kImgTomoto.scaleX = this.kImgTomoto.scaleY = 0;
        egret.Tween.get(this.kImgTomoto).to({scaleX:1,scaleY:1},600,egret.Ease.elasticOut).call(()=>{
            egret.Tween.removeTweens(this.kImgTomoto);
        });
        egret.Tween.get(this.kImgDrumstick).to({scaleX:1.2,scaleY:1.2},500,egret.Ease.sineOut).to({scaleX:1,scaleY:1},100);
    }

    /** 清理组件相关信息 */
    public clear(): void {
        
    }
}