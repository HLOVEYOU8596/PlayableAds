// TypeScript file
class McManger extends egret.DisplayObjectContainer {

    private static _instance: McManger;
    public static get instance(): McManger {
        if (!this._instance) {
            this._instance = new McManger();
        }
        return this._instance;
    }

    private _cach:Object = {};


    /**
     * @param(str) 将要加载的序列帧动画名称
     * 在白鹭游戏引擎中使用，可玩视频需要另行实现
    */
    public async getMc(str:string){
        if(this._cach[str]) return this._cach[str];
        var data = await RES.getResAsync(str+"_json");
        var txtr = await RES.getResAsync(str+"_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        var mc = new egret.MovieClip(mcFactory.generateMovieClipData());
        this._cach[str] = mc;
        return mc;
    }

    public async getMcAtH5(str:string,data:Object,url:string,action:string = ''){
        return new Promise((reslove,reject)=>{
            if(this._cach[str]) reslove(this._cach[str]);
            RES.getResByUrl(url, (texture) => {
            var mcFactory = new egret.MovieClipDataFactory(data, texture);
            var mc = new egret.MovieClip(mcFactory.generateMovieClipData(action));
            this._cach[str] = mc;
            reslove(mc);
            }, this, RES.ResourceItem.TYPE_IMAGE);
        });
    }
}