/**
 *
 * @author 
 *
 */
class ZShap extends egret.Shape{
    public img_depth: number;
	public constructor() {
        super();
	}
	public draw(arr:any[]){
        this.graphics.clear();
        
        var len = arr.length;
        var k;
        for(var i = 0;i<len;i++){
            var o:any = arr[i];
            if("ef" == o){
                this.graphics.endFill();
            }else if(null != o.color){
                this.graphics.beginFill(o.color,o.alpha);
            }else if(null != o.commands){
                var cm:any[] = o.commands;
                var data:any[] = o.data;
                var len2 = cm.length;
                k = 0;
                for(var j = 0;j<len2;j++){
                    var ci = cm[j];
                    try{
                        if(1 == ci){
                            this.graphics.moveTo(data[k],data[k+1]);
                            k+=2;
                        }else if(2 == ci){
                            this.graphics.lineTo(data[k],data[k+1]);
                            k+=2;
                        }else if(3 == ci){
                            this.graphics.curveTo(data[k],data[k+1],data[k+2],data[k+3]);
                            k+=4;
                        }else if(6 == ci){
                            this.graphics.cubicCurveTo(data[k],data[k+1],data[k+2],data[k+3],data[k+4],data[k+5]);
                            k+=6;
                        }
                    }catch(err){
                    }
                }
                
                
                }
            }
	}
}
