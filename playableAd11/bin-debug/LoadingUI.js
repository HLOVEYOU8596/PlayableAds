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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
        this.width = 1280;
        this.height = 720;
        this.getHam();
    };
    LoadingUI.prototype.onProgress = function (current, total) {
        if (this.load) {
            this.pro.scaleX = current / total;
        }
    };
    LoadingUI.prototype.getHam = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // let load =<dragonBones.EgretArmatureDisplay>await Dragon.createArmature(610,360,'load',this,load_ske_j,load_tex,load_tex_j);
                // load.animation.play('load',0);
                //199,202 201,206 249,214
                RES.getResByUrl(load1, function (texture) {
                    var img = new eui.Image(texture);
                    img.anchorOffsetX = 99.5;
                    img.anchorOffsetY = 101;
                    _this.addChild(img);
                    egret.Tween.get(img, { loop: true }).to({ scaleX: .8, scaleY: .8 }, 200).to({ scaleX: 1, scaleY: 1 }, 200);
                    img.x = 400;
                    img.y = 360;
                }, this, RES.ResourceItem.TYPE_IMAGE);
                RES.getResByUrl(load2, function (texture) {
                    var img = new eui.Image(texture);
                    img.anchorOffsetX = 100.5;
                    img.anchorOffsetY = 103;
                    _this.addChild(img);
                    egret.Tween.get(img, { loop: true }).to({ scaleX: .8, scaleY: .8 }, 200).to({ scaleX: 1, scaleY: 1 }, 200);
                    img.x = 640;
                    img.y = 360;
                }, this, RES.ResourceItem.TYPE_IMAGE);
                RES.getResByUrl(load3, function (texture) {
                    var img = new eui.Image(texture);
                    img.anchorOffsetX = 124.5;
                    img.anchorOffsetY = 107;
                    _this.addChild(img);
                    egret.Tween.get(img, { loop: true }).to({ scaleX: .8, scaleY: .8 }, 200).to({ scaleX: 1, scaleY: 1 }, 200);
                    img.x = 880;
                    img.y = 360;
                }, this, RES.ResourceItem.TYPE_IMAGE);
                this.showColorfullLoading(20);
                return [2 /*return*/];
            });
        });
    };
    LoadingUI.prototype.getStageH = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    LoadingUI.prototype.getStageW = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    LoadingUI.prototype.showColorfullLoading = function (d, cirle) {
        if (cirle === void 0) { cirle = true; }
        var box = new eui.Group();
        var layout = new eui.HorizontalLayout();
        var arr = [];
        var a = 0;
        box.width = 7.25 * d;
        box.y = 550;
        box.x = (1280 - box.width) / 2;
        box.horizontalCenter = 0;
        layout.horizontalAlign = "center";
        layout.gap = 0.25 * d;
        layout.verticalAlign = "middle";
        box.layout = layout;
        for (var i = 0; i < 6; i++) {
            var rect = new eui.Rect(d, d, Math.floor(Math.random() * 16777215));
            if (cirle)
                rect.ellipseWidth = rect.ellipseHeight = d;
            box.addChild(rect);
            arr.push(rect);
        }
        this.addChild(box);
        (function run() {
            egret.Tween.get(arr[a]).to({ alpha: 0 }, 100).call(function () {
                a++;
                if (a == 6)
                    a = 0;
                run();
            }).to({ alpha: 1 }, 100);
        })();
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI", ["RES.PromiseTaskReporter"]);
//# sourceMappingURL=LoadingUI.js.map