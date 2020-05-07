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

class Main extends eui.UILayer {


    protected createChildren(): void {
        super.createChildren();

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }

        //inject the custom material parser
        //注入自定义的素材解析器
        let assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());


        this.runGame().catch(e => {
            console.log(e);
        })
    }

    private async runGame() {
        await this.loadResource()
        this.createGameScene();
        // const result = await RES.getResAsync("description_json")
        // console.log(result);
        await platform.login();
        const userInfo = await platform.getUserInfo();
        console.log(userInfo);

    }

    private async loadResource() {
        try {
            await RES.loadConfig("resource/default.res.json", "resource/").then((data) => {
                console.log("资源配置加载成功", data);
            }).catch((err) => {
                console.log("错误", err);
            });
            const loadingView = new LoadingUI();
            this.stage.addChild(loadingView);
            await this.loadTheme();

            // await RES.loadGroup("preload", 0, loadingView);
            
            let t = egret.setTimeout(()=>{
                egret.clearTimeout(t);
                this.stage.removeChild(loadingView);
            },this,1500);
        }
        catch (e) {
            console.error(e);
        }
    }

    private loadTheme() {
        return new Promise((resolve, reject) => {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            let theme = new eui.Theme("resource/default.thm.json", this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, () => {
                resolve();
            }, this);

        })
    }

    private textfield: egret.TextField;
    /**
     * 创建场景界面
     * Create scene interface
     */
    protected createGameScene(): void {
        let t = egret.setTimeout(()=>{
                egret.clearTimeout(t);
                this.stage.addChild(MainView.instance);
                if(window["mraid"])window["mraid"].addEventListener('sizeChange',(e)=>{MainView.instance.dispatchEventWith(egret.Event.CHANGE,false,e);});
                else if(window["dapi"])window["dapi"].addEventListener("adResized",(e)=>{MainView.instance.dispatchEventWith(egret.Event.CHANGE,false,e);});
                else window.addEventListener("orientationchange",(e)=>{MainView.instance.dispatchEventWith(egret.Event.CHANGE,false,e);});
            },this,1500);
    }
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string): egret.Bitmap {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }

    /**
     * @param(url) 待加载的游戏图片地址。此为独立于游戏资源加载之外的方法
     */
    private async loadImg(url) {
        return new Promise((reslove,reject) => {
            let loa: egret.ImageLoader = new egret.ImageLoader();
            loa.crossOrigin = "anonymous";
            loa.load(url);
            loa.once(egret.Event.COMPLETE, (data) => {
                reslove(loa.data);
            }, this);
            loa.once(egret.IOErrorEvent.IO_ERROR, event => {
                    reject(event);
            }, this);
        })
    }
}
