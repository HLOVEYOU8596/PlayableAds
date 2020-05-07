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
// TypeScript file
var AD_TYPE;
(function (AD_TYPE) {
    AD_TYPE[AD_TYPE["tap1"] = 1] = "tap1";
    AD_TYPE[AD_TYPE["tap2"] = 2] = "tap2";
    AD_TYPE[AD_TYPE["normal"] = 3] = "normal";
})(AD_TYPE || (AD_TYPE = {}));
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.SanArr = [];
        _this.mcArr = [];
        _this.adType = AD_TYPE.normal;
        _this.guideArr = [new egret.Point(392, 624),
            new egret.Point(348, 412),
            new egret.Point(560, 634),
            new egret.Point(722, 634),
            new egret.Point(892, 634),
            new egret.Point(588, 512),
            new egret.Point(608, 280),
            new egret.Point(768, 496),
            new egret.Point(762, 280),
            new egret.Point(1024, 372),
            new egret.Point(963, 430)];
        _this.kImgTapButton = new eui.Image(_this.adType == AD_TYPE.tap1 ? main_swipe : main_tap);
        // this.skinName = GameMainSkin;
        _this.skinName = GameMainDevSkin;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    Object.defineProperty(GameMain, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new GameMain();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    GameMain.prototype.initUI = function () {
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgMenu1.source = this.kImgMenu2.source = main_alert_bg;
        this.kImgOrder1.source = main_order2;
        this.kImgOrder2.source = main_order2;
        this.kImgOrder3.source = main_order3;
        this.kImgCoke1.source = this.kImgCoke2.source = this.kImgCoke3.source = main_coke0;
        this.kImgB1.source = this.kImgB2.source = this.kImgB3.source = main_cake0_;
        this.kBtnNext.source = main_btn_next;
        this.kBtnVideo.source = main_btn_video;
        this.kImgXu.source = main_xuxian;
        this.kImgHand.source = main_guide_arrow;
        this.kImgEndBg.source = main_end;
        this.kImgTopic.source = main_reward_bg;
        //添加煎饼幼虫 85，117
        var pointArr = [{ x: 588, y: 490, scale: 1 }, { x: 771, y: 490, scale: 1 }, { x: 602, y: 376, scale: .9 }, { x: 761, y: 376, scale: .9 }];
        for (var i = 0; i < 4; i++) {
            var san = new San();
            san.anchorOffsetX = 85;
            san.anchorOffsetY = 117;
            san.x = pointArr[3 - i].x;
            san.y = pointArr[3 - i].y;
            san.scaleX = san.scaleY = pointArr[3 - i].scale;
            this.SanArr.push(san);
            this.kGrpFood.addChild(san);
        }
        this.AArr = [this.kImgA1, this.kImgA2, this.kImgA3, this.kImgA4];
        this.AArr.forEach(function (item) { item.source = main_drumstick_0; item.scaleX = item.scaleY = 0; });
        this.playStartAni();
        this.addEvents();
    };
    GameMain.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, Dragon.createArmature(0, 0, 'geek', this.kGrpPeople2, geek_ske_j, geek_tex, geek_tex_j)];
                    case 1:
                        _a.geek = (_c.sent());
                        _b = this;
                        return [4 /*yield*/, Dragon.createArmature(120, 30, 'aunt', this.kGrpPeople1, aunt_ske_j, aunt_tex, aunt_tex_j)];
                    case 2:
                        _b.aunt = (_c.sent());
                        this.geek.animation.play('walk_happy', 0);
                        this.aunt.animation.play('walk_happy', 0);
                        egret.Tween.get(this.kGrpPeople2).to({ x: 260 }, 500, egret.Ease.sineIn).call(function () {
                            _this.geek.animation.reset();
                            _this.geek.animation.play('stand', 0);
                            egret.Tween.get(_this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut);
                        });
                        egret.Tween.get(this.kGrpPeople1).to({ x: 662 }, 500, egret.Ease.sineOut).call(function () {
                            _this.aunt.animation.reset();
                            _this.aunt.animation.play('stand', 0);
                            egret.Tween.get(_this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut);
                            var maskIcon = new egret.Shape();
                            maskIcon.graphics.beginFill(0x000000, 1);
                            maskIcon.graphics.drawCircle(0, 0, 85);
                            maskIcon.graphics.endFill();
                            maskIcon.x = 404;
                            maskIcon.y = 642;
                            // maskIcon.scaleY = 0.6;
                            //-------------------------------------------------------------------------
                            var guide = new Guide();
                            guide.init(maskIcon, 1280, 720);
                            _this.kGrpAction.addChild(guide);
                            _this.kImgXu.visible = true;
                            _this.kLbTips.visible = true;
                            GuideStep.instance.init(_this.kGrpGuide, _this.guideArr);
                            GuideStep.instance.moveHand(_this.touchFirst.bind(_this));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.addEvents = function () {
    };
    GameMain.prototype.touchFirst = function () {
        var _this = this;
        this.geek.animation.reset();
        this.geek.animation.play('stand', 0);
        this.kGrpAction.removeChildren();
        this.kImgXu.visible = false;
        this.kLbTips.visible = false;
        GuideStep.instance.clearHand();
        //442,468
        this.AArr.forEach(function (item) {
            var a = item;
            egret.Tween.get(item).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut).call(function (a) {
                _this.playFei(0, item.x, item.y + 20);
                // this.playSmog(0, this.kGrpFood.x, this.kGrpFood.y - 40);
                _this.setProgress(1000, function (a) {
                    item.source = main_drumstick_1;
                    GuideStep.instance.moveHand(_this.touchSecond.bind(_this));
                }, item.x - 60, item.y - 60);
            });
        });
    };
    GameMain.prototype.touchSecond = function () {
        GuideStep.instance.clearHand();
        this.clearMc();
        this.AArr.forEach(function (item) { egret.Tween.get(item).to({ scaleX: 0, scaleY: 0 }, 300); });
        this.SanArr.forEach(function (item) {
            item.showImg2();
        });
        GuideStep.instance.moveHand(this.touchThird.bind(this));
    };
    GameMain.prototype.touchThird = function () {
        GuideStep.instance.clearHand();
        this.SanArr.forEach(function (item) {
            item.showImg3();
        });
        GuideStep.instance.moveHand(this.touchFourth.bind(this));
    };
    GameMain.prototype.touchFourth = function () {
        GuideStep.instance.clearHand();
        this.SanArr.forEach(function (item) {
            item.showImg4();
        });
        GuideStep.instance.moveHand(this.touchFifth.bind(this));
    };
    GameMain.prototype.touchFifth = function () {
        // if (this.adType === AD_TYPE.tap1) { this.openPlateForm(); return; }
        GuideStep.instance.clearHand();
        this.SanArr.forEach(function (item) {
            item.showImg5();
        });
        GuideStep.instance.moveHand(this.touchSixth.bind(this), 2);
    };
    GameMain.prototype.touchSixth = function () {
        var _this = this;
        // if (this.adType === AD_TYPE.tap2) { this.openPlateForm(); return; }
        GuideStep.instance.clearHand();
        egret.Tween.get(this.SanArr[3]).to({ x: this.SanArr[1].x, y: this.SanArr[1].y, scaleX: this.SanArr[1].scaleX, scaleY: this.SanArr[1].scaleY }, 300).call(function () {
            _this.SanArr[3].visible = _this.SanArr[1].visible = false;
            _this.kImgOrder1.source = main_right;
            var point = _this.kImgOrder1.localToGlobal();
            var xx = ParticleUtil.instance.getParticleAtH5(_this.kGrpAction, coin_j, main_icon_coin, point.x + 40, point.y + 40, 600);
            if (_this.adType === AD_TYPE.tap1) {
                GuideStep.instance.moveHand(_this.openPlateForm.bind(_this), 2);
                _this.setTimeCallBack(2400, _this.showButton.bind(_this));
                return;
            }
            GuideStep.instance.moveHand(_this.touchSeventh.bind(_this), 2);
            _this.aunt.animation.play('happy', 0);
            _this.setTimeCallBack(1500, function () {
                // this.aunt.animation.play('walk_happy', 0);
                egret.Tween.get(_this.kGrpPeople1).to({ alpha: 0 }, 600);
                // egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 600);
            });
        });
    };
    GameMain.prototype.touchSeventh = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        egret.Tween.get(this.SanArr[2]).to({ x: this.SanArr[0].x, y: this.SanArr[0].y, scaleX: this.SanArr[0].scaleX, scaleY: this.SanArr[0].scaleY }, 300).call(function () {
            _this.SanArr[2].visible = _this.SanArr[0].visible = false;
            _this.kImgOrder2.source = main_right;
            _this.kImgOrder2.y = _this.kImgOrder2.y + 30;
            var point = _this.kImgOrder2.localToGlobal();
            var xx = ParticleUtil.instance.getParticleAtH5(_this.kGrpAction, coin_j, main_icon_coin, point.x + 40, point.y + 40, 600);
            GuideStep.instance.moveHand(_this.touchEigth.bind(_this));
            egret.Tween.get(_this.kImgOrder3, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1000);
        });
    };
    GameMain.prototype.touchEigth = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        this.setStream(600, function () { _this.kImgCoke1.source = main_coke3; }, this.kImgCoke1.x, this.kImgCoke1.y - 56);
        this.setStream(600, function () { _this.kImgCoke2.source = main_coke3; }, this.kImgCoke2.x, this.kImgCoke2.y - 56);
        this.setStream(600, function () { _this.kImgCoke3.source = main_coke3; }, this.kImgCoke3.x, this.kImgCoke3.y - 56);
        this.setProgress(600, function () { }, this.kImgCoke1.x - 100, this.kImgCoke1.y - 100);
        this.setProgress(600, function () { }, this.kImgCoke2.x - 100, this.kImgCoke2.y - 100);
        this.setProgress(600, function () {
            _this.kImgB1.visible = _this.kImgB2.visible = _this.kImgB3.visible = false;
            if (_this.adType == AD_TYPE.tap2) {
                GuideStep.instance.moveHand(_this.openPlateForm.bind(_this));
                _this.setTimeCallBack(2400, _this.showButton.bind(_this));
                return;
            }
            GuideStep.instance.moveHand(_this.touchNinth.bind(_this));
        }, this.kImgCoke3.x - 100, this.kImgCoke3.y - 100);
    };
    GameMain.prototype.touchNinth = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kImgCoke1).to({ x: 542, y: 218 }, 400);
        egret.Tween.get(this.kImgCoke2).to({ x: 542, y: 218 }, 400).call(function () {
            _this.kImgCoke1.visible = _this.kImgCoke2.visible = false;
            egret.Tween.removeTweens(_this.kImgOrder3);
            _this.kImgOrder3.source = main_right;
            var xx = ParticleUtil.instance.getParticleAtH5(_this.kGrpAction, coin_j, main_icon_coin, 542, 218, 600);
            _this.geek.animation.play('happy', 0);
            _this.setTimeCallBack(1500, function () {
                // this.aunt.animation.play('walk_happy', 0);
                egret.Tween.get(_this.kGrpPeople2).to({ alpha: 0 }, 600);
                // egret.Tween.get(this.kGrpPeople1).to({ x: 1280 }, 600);
                _this.setTimeCallBack(600, _this.playEndAni.bind(_this));
            });
        });
    };
    GameMain.prototype.playEndAni = function () {
        // this.playLux();
        var _this = this;
        var rect = new eui.Rect(1280, 720, 0x000000);
        rect.fillAlpha = 0.5;
        this.kGrpAction.addChild(rect);
        this.kGrpEnd.visible = true;
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playCaidai(400, 2000);
        this.setTimeCallBack(1500, function () {
            _this.kGrpClose.visible = true;
            // this.playEffect(this.kGrpClose,10000,()=>{})
            //2,3 90 28  1,4 964,861  tip:634
            _this.kImgHand.visible = true;
            _this.kGrpClose.scaleX = _this.kGrpClose.scaleY = 0;
            egret.Tween.get(_this.kGrpClose).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
            egret.Tween.get(_this.kImgHand, { loop: true }).call(function () {
                egret.Tween.get(_this.kBtnNext).to({ scaleX: .8, scaleY: .8 }, 200).wait(400).to({ scaleX: 1, scaleY: 1 }, 100);
            }).wait(400).to({ x: 745 }, 600).call(function () {
                egret.Tween.get(_this.kBtnVideo).to({ scaleX: .8, scaleY: .8 }, 200).wait(400).to({ scaleX: 1, scaleY: 1 }, 100);
            }).wait(400).to({ x: 527 }, 600);
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.openPlateForm, _this);
        });
    };
    GameMain.prototype.playFei = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mc_j, mc, "soil")];
                    case 1:
                        mm = _a.sent();
                        this.kGrpFood.addChild(mm);
                        mm.x = x;
                        this.kGrpFood.setChildIndex(mm, this.kGrpFood.getChildIndex(this.kImgA1) - 1);
                        mm.y = y;
                        mm.gotoAndPlay(0, -1);
                        this.mcArr.push(mm);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.playSmog = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smoke_j, smoke, x, y)];
                    case 1:
                        system = _a.sent();
                        system.alpha = 0.4;
                        this.mcArr.push(system);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.clearMc = function () {
        this.mcArr.forEach(function (item) {
            if (item.parent)
                item.parent.removeChild(item);
            item = null;
        });
        this.mcArr = [];
    };
    GameMain.prototype.setProgress = function (t, f, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mc_j, mc, 'progress')];
                    case 1:
                        mm = _a.sent();
                        this.kGrpAction.addChild(mm);
                        mm.x = x;
                        mm.y = y;
                        mm.frameRate = 8000 / t;
                        mm.gotoAndPlay(0);
                        mm.once(egret.Event.COMPLETE, function () {
                            _this.kGrpAction.removeChild(mm);
                            f();
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.setStream = function (t, f, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mc_j, mc, 'coke')];
                    case 1:
                        mm = _a.sent();
                        this.kGrpFood.addChild(mm);
                        mm.x = x;
                        mm.y = y;
                        this.kGrpFood.setChildIndex(mm, 0);
                        // mm.scaleX = mm.scaleY = 0.5;
                        mm.frameRate = 24000 / t;
                        mm.gotoAndPlay(0);
                        mm.once(egret.Event.COMPLETE, function () {
                            _this.kGrpFood.removeChild(mm);
                            f();
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @param {start} egret.Point 金币飞出的起始点
     * @param {end} egret.Point 金币飞入的终点
     * @param {f:Function}
    */
    GameMain.prototype.playFlyCoin = function (start, end, f) {
        var _this = this;
        var arr = [];
        var num = 20;
        var a = 0;
        for (var i = 0; i < num; i++) {
            var img = new eui.Image(main_icon_coin);
            img.x = start.x - 20;
            img.y = start.y - 20;
            this.kGrpAction.addChild(img);
            arr.push(img);
        }
        var t = egret.setInterval(function () {
            egret.Tween.get(arr[a]).to({ x: end.x, y: end.y }, 300);
            a++;
            if (a == 20) {
                egret.clearInterval(t);
                f();
                for (var a_1 = 0; a_1 < arr.length; a_1++) {
                    egret.Tween.removeTweens(arr[a_1]);
                    _this.kGrpAction.removeChild(arr[a_1]);
                }
            }
        }, this, 40);
    };
    //彩带动画
    GameMain.prototype.playCaidai = function (num, delay) {
        var _this = this;
        var arr = [];
        var imgArr = [main_dai1, main_dai2, main_dai3,
            main_dai4, main_dai5, main_dai6,
            main_dai7, main_dai8, main_dai9,
            main_dai10];
        var _loop_1 = function (i) {
            var img = new eui.Image(imgArr[Math.floor(Math.random() * 10)]);
            img.x = Math.floor(Math.random() * this_1.stage.width);
            img.y = 0;
            arr.push(img);
            var t = egret.setTimeout(function () {
                egret.clearTimeout(t);
                _this.kGrpAction.addChild(img);
                egret.Tween.get(img).to({ rotation: Math.random() * 90 }, 300);
                egret.Tween.get(img).to({ y: _this.stage.height }, 800).call(function () {
                    egret.Tween.removeTweens(img);
                    _this.kGrpAction.removeChild(img);
                });
            }, this_1, delay * Math.random());
        };
        var this_1 = this;
        for (var i = 0; i < num; i++) {
            _loop_1(i);
        }
    };
    //烟花动画
    GameMain.prototype.playYanhua = function () {
        var _this = this;
        var t = Math.floor(Math.random() * 800);
        var arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
        var tim = egret.setTimeout(function () {
            egret.clearTimeout(tim);
            var p = _this.createPoint();
            var img = new eui.Image(arr[Math.floor(Math.random() * 3)]);
            img.anchorOffsetX = 102.5;
            img.anchorOffsetY = 96.5;
            img.scaleX = img.scaleY = 0;
            img.x = p.x;
            img.y = p.y;
            _this.kGrpAction.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(function () {
                egret.Tween.removeTweens(img);
                _this.kGrpAction.removeChild(img);
            });
        }, this, t);
    };
    //产生随机点
    GameMain.prototype.createPoint = function () {
        return new egret.Point(0.2 * this.width + Math.floor(Math.random() * 0.6 * this.width), 0.2 * this.height + Math.floor(Math.random() * 0.8 * this.height));
    };
    //设置延迟回调
    GameMain.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    //平台跳转应用商店
    GameMain.prototype.openPlateForm = function () {
        console.log("平台跳转");
        if (window["dapi"])
            window["dapi"].openStoreUrl();
        if (window["Liftoff"])
            window["Liftoff"].open();
        if (window["mraid"])
            window["mraid"].open();
        if (window["FBPlayableOnCTAClick"])
            window["FBPlayableOnCTAClick"]();
        parent.postMessage('download', '*');
        if (window['ExitApi'])
            window['ExitApi'].exit();
        parent.postMessage('complete', '*');
        var userAgent = navigator.userAgent || navigator.vendor;
        var url = 'https://apps.apple.com/app/id1471955633';
        var android = 'https://play.google.com/store/apps/details?id=com.dragonplus.cookingfrenzy';
        if (/android/i.test(userAgent)) {
            url = android;
        }
        if (window["mraid"])
            window["mraid"].open(url);
        // ,parent.postMessage('download','*'),window['ExitApi']&&window['ExitApi'].exit(),parent.postMessage('complete','*')
    };
    //ad5pancake_huafang_choose_z
    GameMain.prototype.showButton = function () {
        var _this = this;
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kImgTapButton.horizontalCenter = 0;
        if (this.adType == AD_TYPE.tap1)
            this.kImgTapButton.horizontalCenter = -200;
        this.kImgTapButton.verticalCenter = 50;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgTapButton);
            egret.Tween.get(_this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    };
    GameMain.prototype.playLux = function () {
        return __awaiter(this, void 0, void 0, function () {
            var width, height, gameTitle, _a, _b, x, y, gameTitle_mask, _c, _d, lux, _e, _f, MOVE_MIN_X, MOVE_MAX_X, speed, direction;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        width = this.stage.stageWidth;
                        height = this.stage.stageHeight;
                        _b = (_a = egret.Bitmap).bind;
                        return [4 /*yield*/, Dragon.getImageData(main_coke3)];
                    case 1:
                        gameTitle = new (_b.apply(_a, [void 0, _g.sent()]))();
                        x = gameTitle.x = (width - gameTitle.width) / 2;
                        y = gameTitle.y = (height - gameTitle.height) / 2;
                        this.kGrpEnd.addChild(gameTitle);
                        _d = (_c = egret.Bitmap).bind;
                        return [4 /*yield*/, Dragon.getImageData(main_coke3)];
                    case 2:
                        gameTitle_mask = new (_d.apply(_c, [void 0, _g.sent()]))();
                        gameTitle_mask.x = x;
                        gameTitle_mask.y = y;
                        this.kGrpEnd.addChild(gameTitle_mask);
                        _f = (_e = egret.Bitmap).bind;
                        return [4 /*yield*/, Dragon.getImageData(spark)];
                    case 3:
                        lux = new (_f.apply(_e, [void 0, _g.sent()]))();
                        MOVE_MIN_X = x - lux.width;
                        MOVE_MAX_X = x + gameTitle.width;
                        lux.x = MOVE_MIN_X;
                        lux.y = y;
                        lux.mask = gameTitle_mask;
                        this.kGrpEnd.addChild(lux);
                        speed = 2;
                        direction = 1;
                        egret.Ticker.getInstance().register(function () {
                            lux.x += speed * direction;
                            if (lux.x > MOVE_MAX_X || lux.x < MOVE_MIN_X)
                                direction *= -1;
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.getEffectArr = function () {
        return [
            SpecialEffects.EffectBrightnessContrast,
            SpecialEffects.EffectHueSaturation,
            SpecialEffects.EffectVibrance,
            SpecialEffects.EffectDenoise,
            SpecialEffects.EffectNoise,
            SpecialEffects.EffectSepia,
            SpecialEffects.EffectVignette,
            SpecialEffects.EffectZoomblur,
            SpecialEffects.EffectTriangleblur,
            SpecialEffects.EffectTiltShift,
            SpecialEffects.EffectSwirl,
            SpecialEffects.EffectBulgePinch,
            SpecialEffects.EffectPerspective
        ];
    };
    GameMain.prototype.playEffect = function (_target, t, callBack) {
        var effect = SpecialEffects.createEffects(_target, SpecialEffects.EffectSwirl);
        var data = { angle: 10, radius: 0 };
        effect.refreshData(data.angle, data.radius);
        var tim = new egret.Timer(16, Math.floor(t / 16));
        tim.start();
        tim.addEventListener(egret.TimerEvent.TIMER, function () {
            // data.angle +=3;
            data.radius += 3;
            effect.refreshData(data.angle, data.radius);
        }, this);
        tim.addEventListener(egret.TimerEvent.COMPLETE, function () { tim.stop(); tim = null; }, this);
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=GameMain.js.map