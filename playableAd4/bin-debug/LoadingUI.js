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
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.load = false;
        _this.createView();
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        var _this = this;
        this.width = 1280;
        this.height = 720;
        // this.loadVideo();
        RES.getResByUrl(loading_bg, function (texture) {
            _this.bg = new egret.Bitmap(texture);
            _this.addChild(_this.bg);
            _this.width = egret.MainContext.instance.stage.stageWidth;
            _this.height = egret.MainContext.instance.stage.stageHeight;
            _this.bg.width = egret.MainContext.instance.stage.stageWidth;
            _this.bg.height = egret.MainContext.instance.stage.stageHeight;
            _this.getHam();
            // this.addPro();
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        if (this.load) {
            this.pro.scaleX = current / total;
        }
    };
    LoadingUI.prototype.loadVideo = function () {
        var _this = this;
        this._video = new egret.Video();
        ;
        this._video.fullscreen = false;
        this._video.width = 1280;
        this._video.height = 720;
        this._video.x = this._video.y = 0;
        // this._video.load(start);
        this._video.volume = 0;
        this._video.poster = start_poster;
        this._video.once(egret.Event.ENDED, function () {
            _this._video.close();
            _this.stage.addChild(GameStart.instance);
            _this.stage.removeChild(_this);
        }, this);
    };
    LoadingUI.prototype.getHam = function () {
        var _this = this;
        RES.getResByUrl(loading_c, function (texture) {
            _this.imgHam = new eui.Image(texture);
            _this.imgHam.x = 316;
            _this.imgHam.y = 660;
            // this.imgHam.x = 640;
            // this.imgHam.y = 360
            _this.addChild(_this.imgHam);
            // this.imgHam.anchorOffsetX = 250;
            // this.imgHam.anchorOffsetY = 170;
            _this.imgHam.anchorOffsetY = 597;
            _this.imgHam.y = _this.imgHam.y + (_this.getStageH() - 720) / 2;
            _this.imgHam.x = _this.imgHam.x + (_this.getStageW() - 1280) / 2;
            // egret.Tween.get(this.imgHam,{loop:true}).to({scaleY:0.8,scaleX:0.8},400).to({scaleY:1,scaleX:1},800);
            egret.Tween.get(_this.imgHam, { loop: true }).to({ scaleY: 0.8 }, 400).to({ scaleY: 1 }, 800);
        }, this, RES.ResourceItem.TYPE_IMAGE);
        // RES.getResByUrl(tap_bg, (texture) => {
        //     this.tap = new eui.Image(texture);
        //     this.tap.anchorOffsetX = this.tap.anchorOffsetY = 127;
        //     this.tap.x = 615;
        //     this.tap.y = 350;
        //     this.tap.scaleX = this.tap.scaleY = 1.2;
        //     this.addChild(this.tap);
        //     egret.Tween.get(this.tap, { loop: true }).to({ rotation: 360 }, 1500);
        //     this.tap.once(egret.TouchEvent.TOUCH_TAP, () => {
        //         // this.addChild(this._video);
        //         // this._video.play();
        //         this.stage.addChild(GameStart.instance);
        //         SoundManager.instance.playBg(SoundConst.bgm2);
        //     }, this);
        // }, this, RES.ResourceItem.TYPE_IMAGE);
        // RES.getResByUrl(tap, (texture) => {
        //     this.tap_content = new eui.Image(texture);
        //     this.tap_content.anchorOffsetX = 64;
        //     this.tap_content.anchorOffsetY = 28;
        //     this.tap_content.x = 614;
        //     this.tap_content.y = 348;
        //     this.addChild(this.tap_content);
        //     this.tap_content.touchEnabled = false;
        //     egret.Tween.get(this.tap_content,{loop:true}).to({scaleX:1.5,scaleY: 1.5 }, 400).to({ scaleX:1,scaleY: 1 }, 800);
        // }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.getStageH = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    LoadingUI.prototype.getStageW = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map