// TypeScript file
/**
 *  @author yang.xu
 *  create on 2019.12.10
*/
class Hamburg extends eui.Component implements eui.UIComponent {
    private static mCacheDict = {};
    /**
     * 创建
     */
    public static produce(type: string = "1"): Hamburg {
        if (Hamburg.mCacheDict[type] == null) {
            Hamburg.mCacheDict[type] = [];
        }

        var dict: Hamburg[] = Hamburg.mCacheDict[type];
        var item: Hamburg;
        if (dict.length > 0) {
            item = dict.pop();
        } else {
            item = new Hamburg(type);
        }

        return item;
    }
    /**
     * 回收
     */
    public static reclaim(item: Hamburg, type: string = "1") {
        if (Hamburg.mCacheDict[type] == null) {
            Hamburg.mCacheDict[type] = [];
        }
        var dict: Hamburg[] = Hamburg.mCacheDict[type];
        if (dict.indexOf(item) == -1) {
            dict.push(item);
            item.clear();
        }
    }

    // ui
    private kImgHam1: eui.Image;
    private kImgHam2: eui.Image;
    private kImgHam3: eui.Image;
    private kImgHam4: eui.Image;
    private kImgHam5: eui.Image;

    // data
    public mData;   // 组件数据
    public id: any;
    public constructor(type) {
        super();
        this.id = type;
        // this.skinName = "HamburgSkin";
        this.skinName = "HamburgDevSkin";
        this.once(egret.Event.ADDED_TO_STAGE, this.initUI, this);
    }

    protected partAdded(partName: string, instance: any): void {
        super.partAdded(partName, instance);
    }

    protected childrenCreated(): void {
        super.childrenCreated();
    }

    private initUI() {
        this.kImgHam1.source = main_ham1;
        this.kImgHam2.source = main_ham2;
        this.kImgHam3.source = main_ham3;
        this.kImgHam4.source = main_ham4;
        this.kImgHam5.source = main_ham5
    }

    public setData(data): void {
        this.mData = data;
        this.updateUi();
        this.invalidateState();//标记视图状态失效/
        this.validateNow();
        // this.kImgHam1.filters = this.kImgHam2.filters = this.kImgHam3.filters = this.kImgHam4.filters = this.kImgHam5.filters = [this.mData.filter];
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

    public showImg3(callBack: Function = () => { }) {
        this.kImgHam3.visible = true;
        this.kImgHam3.scaleX = this.kImgHam4.scaleY = 0;
        egret.Tween.get(this.kImgHam3).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgHam3);
            callBack();
        });
    }

    public showImg4(callBack: Function = () => { }) {
        this.kImgHam4.visible = true;
        this.kImgHam4.scaleX = this.kImgHam4.scaleY = 0;
        egret.Tween.get(this.kImgHam4).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(() => {
            egret.Tween.removeTweens(this.kImgHam4);
            callBack();
        });
    }

    public downHam(callBack: Function = () => { }) {
        this.kImgHam5.visible = true;
        this.kImgHam5.y = -200;
        egret.Tween.get(this.kImgHam5).to({ y: 1 }, 500, egret.Ease.circIn).call(() => {
            egret.Tween.removeTweens(this.kImgHam5);
            callBack();
        });

    }
}