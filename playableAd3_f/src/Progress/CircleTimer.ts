// TypeScript file
class CircleTimer extends egret.DisplayObjectContainer{
        private display:egret.Shape;
        private mg:egret.Graphics;
        private c:number;
        private optical:number;
        private radius:number;
        public constructor(r:number,showLab:boolean=false,color:number=0x00ff00, alpha = 0.7) {
            super();
            this.radius = r;
            this.c = color;
            this.optical = alpha;
            this.showLabel = showLab;
            this.init();
        }

        private init(){
            this.display = new egret.Shape();
            this.mg = this.display.graphics;
            // let g1:egret.Graphics = this.display.graphics;
            // g1.beginFill(0x00ff00,0.3);
            // g1.drawCircle(this.startX,this.startY,this.radius);
            // g1.endFill();
            this.addChild(this.display);
            this.mg.moveTo(this.radius, this.radius);
            this.mg.lineTo(this.radius, 0);
        }
        private rotateTimer:number = -1;
        private lastArc:number = 0;

        private redraw(){
            let arc = this._percent * 2 * Math.PI;
            this.mg.beginFill(this.c, this.optical);
            this.mg.moveTo((1+Math.sin(this.lastArc))*this.radius,(1-Math.cos(this.lastArc))*this.radius);
            this.mg.lineTo((1+Math.sin(arc))*this.radius,(1-Math.cos(arc))*this.radius);
            this.mg.lineTo(this.radius, this.radius);
            this.lastArc = arc;
            if( this._showLabel){
                this._lab.text = (this._percent*100).toFixed(2)+'%...';
            }
        }
        private _percent:number;
        public set percent(v:number){
            if( v < 0 || v > 1){
                console.warn('Percentage illegal:',v);
                if( this._percent >= 1)
                    return;
                else 
                    v = 1;
            }
            if( this._percent == v) return;
            this._percent = v;
            this.redraw();
        }
        /**
         * 0-1
         */
        public get percent():number{
            return this._percent;
        }
        private _showLabel:boolean;
        private _lab:egret.TextField;
        public set showLabel(v:boolean){
            if( this._showLabel == v) return;
            this._showLabel = v;
            if( this._showLabel){
                if( !this._lab ){
                    this._lab = new egret.TextField();
                    this._lab.width = this.radius*2;
                    this._lab.textAlign='center';
                    this._lab.text = '1%...';
                    this._lab.fontFamily = 'Microsoft Yahei';
                    this._lab.y = this.radius*2 - this._lab.height >> 1;
                }

                if( !this._lab.parent){
                    this.addChild(this._lab);
                }
            }else{
                if(this._lab && this._lab.parent){
                    this._lab.parent.removeChild(this._lab);
                }
            }
        }
        /**
         * 0-1
         */
        public get showLabel():boolean{
            return this._showLabel;
        }
    }