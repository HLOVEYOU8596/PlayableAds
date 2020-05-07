//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////

class LoadingUI extends egret.Sprite implements RES.PromiseTaskReporter {

    public constructor() {
        super();
        this.createView();
    }

    private bg: egret.Bitmap;
    private proBg: egret.Bitmap;
    private pro: egret.Bitmap;
    private imgHam: eui.Image;
    private load: boolean = false;

    private createView(): void {
        this.width = this.W;
        this.height = this.H;

        RES.getResByUrl(loading_bg, (texture) => {
            this.bg = new egret.Bitmap(texture);
            this.addChild(this.bg);
            this.bg.width = this.W;
            this.bg.height = this.H;
            this.getHam();
            // this.addPro();
        }, this, RES.ResourceItem.TYPE_IMAGE)
    }

    public onProgress(current: number, total: number): void {
        if (this.load) {
            this.pro.scaleX = current / total;
        }
    }

    private getHam() {
        RES.getResByUrl(loading_c, (texture) => {
            this.imgHam = new eui.Image(texture);
            this.imgHam.width = this.W*139 / 480;
            this.imgHam.height = this.H*123 / 320;
            this.imgHam.anchorOffsetX = this.imgHam.width/2;
            this.imgHam.anchorOffsetY = 0.7 * this.imgHam.height;
            this.imgHam.y = this.H / 2 + .2 * this.imgHam.height;
            this.imgHam.x = this.W / 2;
            this.addChild(this.imgHam);
            egret.Tween.get(this.imgHam,{loop:true}).to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    }

    private get H() {
        return egret.MainContext.instance.stage.stageHeight;
    }
    private get W() {
        return egret.MainContext.instance.stage.stageWidth;
    }
}
