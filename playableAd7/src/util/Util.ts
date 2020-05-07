/**
 * Created by zringhost on 15-2-10.
 */
module zmovie{
    export class Util{
        public static clearDisposeDisplay(d:egret.DisplayObjectContainer):void{
            try{
                var tmpD:egret.DisplayObject;
                for(var i:number = d.numChildren-1;i>=0;i--){
                    tmpD = d.getChildAt(i);
                    d.removeChild(tmpD);
                }
            }catch(err){}
        }
        public static powerScale: number = 1;
        public static stageWidth: number;
        public static stageHeight: number;
        public static setStageWH(w:number,h:number):void{
            if(w>h){
                Util.powerScale = h / 1536;
            }else{
                Util.powerScale = w / 1536;
            }
            Util.stageWidth = w;
            Util.stageHeight = h;
        }
        
        public static getTextureArrByName(imgArr:any,libObj:any,libName:string):any[]{
            var ret:any[] = [];
            var t:egret.Texture = Util.getTextureByName(imgArr,libName);
            if(null == t){
                var arr:any[] = libObj.clipping[libName];
                if(null != arr){
                    for(var i:number = arr.length-1;i>=0;i--){
                        t = Util.getTextureByName(imgArr,arr[i].name);
                        if(null != t){
                            ret.push({t:t,x:arr[i].x,y:arr[i].y});
                        }else{
                            return ret;
                        }
                    }
                }
                return ret;
            }
            ret.push({t:t,x:0,y:0});
            return ret;
        }

    public static getTextureByName(imgArr:any,libName:string):egret.Texture{
        var t:egret.Texture = null;
        try{
          t  = RES.getRes(imgArr+"."+libName);
        }catch(err){}
        try{
            if(null == t){
                var arr:string[] = imgArr;
                for(var i:number = arr.length-1;i>=0;i--){
                    var t:egret.Texture = RES.getRes(arr[i]+"."+libName);
                    if(null != t){
                        return t;
                    }
                }
            }
        }catch(err){}
        return t;
    }

    }
}