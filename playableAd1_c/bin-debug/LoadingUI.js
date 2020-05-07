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
        this.width = 1136;
        this.height = 640;
        RES.getResByUrl(loading_bg, function (texture) {
            _this.bg = new egret.Bitmap(texture);
            _this.width = egret.MainContext.instance.stage.stageWidth;
            _this.height = egret.MainContext.instance.stage.stageHeight;
            _this.bg.width = egret.MainContext.instance.stage.stageWidth;
            _this.bg.height = egret.MainContext.instance.stage.stageHeight;
            _this.addChild(_this.bg);
            ;
            _this.getHam();
            // this.addPro();
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        if (this.load) {
            this.pro.scaleX = current / total;
        }
    };
    LoadingUI.prototype.getHam = function () {
        var _this = this;
        RES.getResByUrl(loading_c, function (texture) {
            _this.imgHam = new eui.Image(texture);
            _this.imgHam.x = 324;
            _this.imgHam.y = 620;
            _this.imgHam.anchorOffsetY = 597;
            _this.addChild(_this.imgHam);
            _this.setY();
            egret.Tween.get(_this.imgHam, { loop: true }).to({ scaleY: 0.8 }, 400).to({ scaleY: 1 }, 800);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.addPro = function () {
        var _this = this;
        RES.getResByUrl(progress_bg, function (texture) {
            _this.proBg = new egret.Bitmap(texture);
            _this.proBg.y = 600;
            _this.proBg.x = (_this.getStageW() - _this.proBg.width) / 2;
            _this.addChild(_this.proBg);
            RES.getResByUrl(progress_c, function (texture) {
                _this.pro = new egret.Bitmap(texture);
                _this.pro.y = 600;
                _this.pro.x = 335;
                _this.pro.width = 467;
                _this.pro.scaleX = 0;
                _this.pro["scale9Grid"] = new egret.Rectangle(10, 7, 10, 1);
                _this.addChild(_this.pro);
                _this.load = true;
                _this.setY();
            }, _this, RES.ResourceItem.TYPE_IMAGE);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.setY = function () {
        this.imgHam.y = this.imgHam.y + (this.getStageH() - 720) / 2;
        // this.proBg.y = this.proBg.y + (this.getStageH() - 720)/2;
        // this.pro.y = this.pro.y + (this.getStageH() - 720)/2;
        this.imgHam.x = this.imgHam.x + (this.getStageW() - 1280) / 2;
        // this.proBg.x = this.proBg.x + (this.getStageW() - 1280)/2;
        // this.pro.x = this.pro.x + (this.getStageW() - 1280)/2;
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