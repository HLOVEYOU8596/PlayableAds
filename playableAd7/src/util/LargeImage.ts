/**
 * Created by ASUS on 15-2-9.
 */
module zmovie{
    export class LargeImage extends  egret.DisplayObjectContainer{
        private libObj:any;libName:string;
        public displayLibName:string;img_depth:number;

        public constructor(imgArr:any,libObj:any,libName:string) {
            super();
            this.setObject(imgArr,libObj,libName);
        }

        public setObject(imgArr:any,libObj:any,libName:string):void{

        if(this.libObj == libObj && this.libName == libName){
            return;
        }
        this.libName = libName;
        this.libObj = libObj;
        Util.clearDisposeDisplay(this);
        var arr:any[] = Util.getTextureArrByName(imgArr,libObj,libName);
        var len:number = arr.length;
        for(var i:number = len-1;i>=0;i--){
           var o:any = arr[i];
            var img:egret.Bitmap = new egret.Bitmap();
            img.touchEnabled = false;
            img.texture = o.t;
            img.x = o.x/libObj.scale;
            img.y = o.y/libObj.scale;
            this.addChild(img);
        }
    }



    }
}