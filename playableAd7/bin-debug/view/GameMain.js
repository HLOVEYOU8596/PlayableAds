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
        _this.mcArr = [];
        _this.adType = AD_TYPE.normal;
        _this.guideArr = [new egret.Point(780, 624),
            new egret.Point(182, 600),
            new egret.Point(958, 638),
            new egret.Point(1134, 638),
            new egret.Point(1008, 488),
            new egret.Point(767, 264),
            new egret.Point(672, 436)];
        _this.kImgTapButton = new eui.Image(main_tap);
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
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, McManger.instance.getMcAtH5('stand', aunt_j, aunt, 'walk')];
                    case 1:
                        _a.aunt = (_b.sent());
                        this.kGrpPeople.addChild(this.aunt);
                        this.aunt.scaleY = 2;
                        this.aunt.scaleX = -2;
                        this.kImgBg1.source = main_bg1;
                        this.kImgBg2.source = main_bg2;
                        this.kImgAlert.source = main_alert_bg;
                        this.kImgPeople.source = main_cook_3;
                        this.kImgOrder1.source = main_order;
                        this.kImgOrder2.source = main_coke1;
                        this.kImgPao.source = pao;
                        this.kImgDesk.source = main_small_bg;
                        this.playStartAni();
                        this.addEvents();
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // 182,620
                this.aunt.gotoAndPlay(0, 1);
                egret.Tween.get(this.aunt).to({ x: 380 }, 1500).call(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _this = this;
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.kGrpPeople.removeChild(this.aunt);
                                this.aunt = null;
                                _a = this;
                                return [4 /*yield*/, McManger.instance.getMcAtH5('stand', aunt_j, aunt, 'stand')];
                            case 1:
                                _a.aunt = (_b.sent());
                                this.aunt.x = 380;
                                this.aunt.scaleX = -2;
                                this.aunt.scaleY = 2;
                                this.kGrpPeople.addChild(this.aunt);
                                this.aunt.gotoAndPlay(0, 1);
                                egret.setInterval(function () { _this.aunt.gotoAndPlay(0, 1); }, this, 4000);
                                this.showTips(400, 200, '1 Pancake\n1 Orange', function () {
                                    egret.Tween.get(_this.kGrpMenu).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut).call(function () {
                                        _this.showTips(753, 284, "OK", function () {
                                            GuideStep.instance.init(_this.kGrpGuide, _this.guideArr);
                                            GuideStep.instance.moveHand(_this.touchFirst.bind(_this));
                                            _this.makeCoke();
                                            _this.kImgPeople.source = main_cook_1;
                                        });
                                    });
                                });
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    GameMain.prototype.addEvents = function () {
    };
    GameMain.prototype.touchFirst = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        GuideStep.instance.clearHand();
                        return [4 /*yield*/, this.makePancake(182, 620)];
                    case 1:
                        _a.sent();
                        egret.Tween.get(this).wait(400).call(this.makePancake.bind(this, 316, 620))
                            .wait(400).call(this.makePancake.bind(this, 460, 632))
                            .wait(400).call(this.makePancake.bind(this, 592, 634)).call(egret.Tween.removeTweens.bind(this, this)).call(function () {
                            GuideStep.instance.moveHand(_this.touchSecond.bind(_this));
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.touchSecond = function () {
        var _this = this;
        if (!this.kGrpFood)
            return;
        GuideStep.instance.clearHand();
        this.kGrpAction.removeChild(this.mcArr[0]);
        egret.Tween.get(this.kGrpFood).to({ x: 767, y: 264 }, 200).call(function () {
            GuideStep.instance.moveHand(_this.touchThird.bind(_this));
        });
    };
    GameMain.prototype.touchThird = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        var img = new eui.Image(main_tomoto);
        img.horizontalCenter = 0;
        img.y = -70;
        this.kGrpFood.addChild(img);
        egret.Tween.get(img).to({ y: 25 }, 300, egret.Ease.quartOut).call(function () {
            GuideStep.instance.moveHand(_this.touchFourth.bind(_this));
        });
    };
    GameMain.prototype.touchFourth = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        var img = new eui.Image(main_milk);
        img.horizontalCenter = 0;
        img.y = -70;
        this.kGrpFood.addChild(img);
        egret.Tween.get(img).to({ y: 20 }, 300, egret.Ease.quartOut).wait(300).call(function () {
            _this.kImgPeople.source = main_cook_2;
            _this.kGrpFood.x = 527;
            _this.kGrpFood.y = 336;
            _this.kGrpFood.scaleX = _this.kGrpFood.scaleY = .7;
            egret.Tween.get(_this.kGrpFood).wait(300).to({ x: 398, y: 132, scaleX: .5, scaleY: .5 }, 200).call(function () {
                _this.kGrpFood.visible = false;
                _this.kImgOrder1.source = main_right;
                ParticleUtil.instance.getParticleAtH5(_this.kGrpAction, coin_j, coin, 398, 132, 150);
                ParticleUtil.instance.getParticleAtH5(_this.kGrpAction, coin_j, diamond, 398, 132, 300);
                // this.aunt.animation.play('happy',0);
                _this.kImgPeople.source = main_cook_1;
                GuideStep.instance.moveHand(_this.touchFifth.bind(_this));
            });
        });
    };
    GameMain.prototype.touchFifth = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        egret.Tween.get(this.kImgCoke).to({ x: 767, y: 264, scaleX: 1, scaleY: 1 }, 400).call(function () {
            GuideStep.instance.moveHand(_this.touchSixth.bind(_this));
        });
    };
    GameMain.prototype.touchSixth = function () {
        GuideStep.instance.clearHand();
        GuideStep.instance.moveHand(this.openPlateForm.bind(this));
        this.showButton();
    };
    GameMain.prototype.makeCoke = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var img, stream;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        img = new eui.Image(main_coke2);
                        img.scaleX = img.scaleY = .7;
                        img.anchorOffsetX = 46;
                        img.anchorOffsetY = 55;
                        img.x = 1012;
                        img.y = 494;
                        this.setProgress(1000, function () {
                            stream.stop();
                            _this.kGrpAction.removeChild(stream);
                            img.anchorOffsetX = 63;
                            img.anchorOffsetY = 57;
                            img.source = main_coke1;
                            _this.kImgCoke = img;
                        }, 924, 442);
                        return [4 /*yield*/, McManger.instance.getMcAtH5('coke', pancake_j, pancake, 'coke')];
                    case 1:
                        stream = _a.sent();
                        stream.x = 1016;
                        stream.y = 462;
                        this.kGrpAction.addChild(img);
                        this.kGrpAction.addChild(stream);
                        stream.gotoAndPlay(0, -1);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.makePancake = function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mc1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('di', pancake_j, pancake, 'di')];
                    case 1:
                        mc1 = _a.sent();
                        this.kGrpAction.addChild(mc1);
                        mc1.x = x;
                        mc1.y = y;
                        mc1.gotoAndPlay(0, 1);
                        mc1.once(egret.Event.COMPLETE, function () {
                            _this.kGrpAction.removeChild(mc1);
                            var group = new eui.Group();
                            group.width = 180;
                            group.height = 170;
                            group.anchorOffsetX = 90;
                            group.anchorOffsetY = 85;
                            group.x = x;
                            group.y = y;
                            var img = new eui.Image(main_pancake1);
                            group.addChild(img);
                            _this.kGrpAction.addChild(group);
                            img.horizontalCenter = 0;
                            img.verticalCenter = 0;
                            img.scaleX = img.scaleY = 0;
                            egret.Tween.get(img).to({ scaleX: 1, scaleY: 1 }, 400).call(function () { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    img.source = main_pancake2;
                                    this.playSmog(0, x, y - 70);
                                    return [2 /*return*/];
                                });
                            }); }).wait(300).call(function () { return __awaiter(_this, void 0, void 0, function () {
                                var _this = this;
                                var mc2;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('pancake', pancake_j, pancake, 'pancake')];
                                        case 1:
                                            mc2 = _a.sent();
                                            this.kGrpAction.addChild(mc2);
                                            mc2.x = x;
                                            mc2.y = y;
                                            mc2.scaleX = mc2.scaleY = 1.3;
                                            mc2.gotoAndPlay(0, 1);
                                            mc2.once(egret.Event.COMPLETE, function () {
                                                _this.kGrpAction.removeChild(mc2);
                                                img.source = main_pancake3;
                                                group.y = group.y - 25;
                                                if (!_this.kGrpFood)
                                                    _this.kGrpFood = group;
                                            }, this);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.showTips = function (x, y, txt, callBack) {
        var _this = this;
        this.kLbPaoContent.text = txt;
        this.kGrpPao.x = x;
        this.kGrpPao.y = y;
        egret.Tween.get(this.kGrpPao).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.bounceOut).wait(600).call(function () {
            callBack();
            _this.kGrpPao.scaleX = _this.kGrpPao.scaleY = 0;
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
        var _this = this;
        this.mcArr.forEach(function (item) {
            _this.kGrpAction.removeChild(item);
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
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('pacake', pancake_j, pancake, 'progress')];
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
    GameMain.prototype.showButton = function () {
        var _this = this;
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kGrpGuide.setChildIndex(this.kImgTapButton, 0);
        this.kImgTapButton.horizontalCenter = 0;
        this.kImgTapButton.verticalCenter = 50;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgTapButton);
            egret.Tween.get(_this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain", ["eui.UIComponent", "egret.DisplayObject"]);
