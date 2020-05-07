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
        this.width = this.W;
        this.height = this.H;
        RES.getResByUrl(loading_bg, function (texture) {
            _this.bg = new egret.Bitmap(texture);
            _this.addChild(_this.bg);
            _this.bg.width = _this.W;
            _this.bg.height = _this.H;
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
            _this.imgHam.width = _this.W * 139 / 480;
            _this.imgHam.height = _this.H * 123 / 320;
            _this.imgHam.anchorOffsetX = _this.imgHam.width / 2;
            _this.imgHam.anchorOffsetY = 0.7 * _this.imgHam.height;
            _this.imgHam.y = _this.H / 2 + .2 * _this.imgHam.height;
            _this.imgHam.x = _this.W / 2;
            _this.addChild(_this.imgHam);
            egret.Tween.get(_this.imgHam, { loop: true }).to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50);
        }, this, RES.ResourceItem.TYPE_IMAGE);
    };
    Object.defineProperty(LoadingUI.prototype, "H", {
        get: function () {
            return egret.MainContext.instance.stage.stageHeight;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoadingUI.prototype, "W", {
        get: function () {
            return egret.MainContext.instance.stage.stageWidth;
        },
        enumerable: true,
        configurable: true
    });
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map