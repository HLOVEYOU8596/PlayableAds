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
    private tap: eui.Image;
    private tap_content:eui.Image;
    private load: boolean = false;

    private createView(): void {
        this.width = 1280;
        this.height = 720;
        this.getHam();
    }

    public onProgress(current: number, total: number): void {
        if (this.load) {
            this.pro.scaleX = current / total;
        }
    }

    private async getHam() {
        let load =<dragonBones.EgretArmatureDisplay>await Dragon.createArmature(610,360,'load',this,load_ske_j,load_tex,load_tex_j);
        load.animation.play('load',0)
        this.showColorfullLoading(20);
    }

    private getStageH() {
        return egret.MainContext.instance.stage.stageHeight
    }
    private getStageW() {
        return egret.MainContext.instance.stage.stageWidth
    }

    private showColorfullLoading(d:number,cirle:boolean = true) {
        let box: eui.Group = new eui.Group();
        let layout = new eui.HorizontalLayout();
        let arr: eui.Rect[] = [];
        let a = 0;
        box.width = 7.25*d; box.y = 550;box.x = (1280 - box.width)/2;
        box.horizontalCenter = 0;
        layout.horizontalAlign = "center";
        layout.gap = 0.25*d;
        layout.verticalAlign = "middle";
        box.layout = layout;

        for (let i = 0; i < 6; i++) {
            let rect: eui.Rect = new eui.Rect(d, d, Math.floor(Math.random() * 16777215));
            if(cirle)rect.ellipseWidth = rect.ellipseHeight = d;
            box.addChild(rect);
            arr.push(rect);
        }

        this.addChild(box);

        (function run() {
            egret.Tween.get(arr[a]).to({ alpha: 0 }, 100).call(() => {
                a++;if (a == 6) a = 0;run();
            }).to({ alpha: 1 }, 100);
        })();
    }
}
