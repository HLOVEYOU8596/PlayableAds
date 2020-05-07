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
var arr = [{ x: 578, y: 464 }, { x: 798, y: 467 }, { x: 617, y: 359 }, { x: 786, y: 360 }];
var GameMain = (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        var _this = _super.call(this) || this;
        _this.endType = false;
        //引导相关变量
        _this.guideArr = [new egret.Point(260, 652), new egret.Point(1100, 650), new egret.Point(280, 410),
            new egret.Point(450, 610), new egret.Point(600, 610), new egret.Point(580, 480),
            new egret.Point(620, 380), new egret.Point(790, 480), new egret.Point(1100, 480),
            new egret.Point(1040, 400), new egret.Point(896, 298)];
        _this.mcArr = [];
        _this.cachSound = {};
        _this.bubbleArr = [];
        _this.skinName = GameMainDevSkin;
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        _this.height = egret.MainContext.instance.stage.stageHeight;
        _this.width = egret.MainContext.instance.stage.stageWidth;
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
    /**
     * 初始化游戏界面UI
    */
    GameMain.prototype.initUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.kImgBg.source = main_bg1;
                        this.kImgCoke1.source = this.kImgCoke2.source = this.kImgCoke3.source = main_coke1;
                        this.kImgXu.source = main_xuxian;
                        this.kImgPeople1.source = main_grampa_normal;
                        this.kImgPeople2.source = main_aunt_normal;
                        this.kImgAlert1.source = this.kImgAlert2.source = main_alert_bg;
                        this.kImgOrder2.source = main_order2;
                        this.kImgOrder1.source = this.kImgOrder3.source = this.kImgOrder4.source = main_order1;
                        this.kImgSwipe.source = main_swipe;
                        this.kImgFloat1.source = this.kImgFloat2.source = end_float_bg;
                        this.kImgEnd.source = end_bg;
                        this.kImgContinue.source = end_continue;
                        this.kImgShare.source = end_share;
                        _a = this;
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.stage, starsJson, stars, 0, 0)];
                    case 1:
                        _a.system = (_b.sent());
                        this.system.scaleX = -1;
                        this.playStartAni();
                        this.addEvents();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *  @description 播放入场动画
     */
    GameMain.prototype.playStartAni = function () {
        var _this = this;
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        //281 697
        egret.Tween.get(this.system).to({ x: 1280 }, 2500, egret.Ease.quartOut).call(function () { _this.stage.removeChild(_this.system); });
        egret.Tween.get(this.kGrpContent).to({ width: 1280 }, 2500, egret.Ease.quartOut).call(function () {
            _this.kGrpPeople1.x = _this.kGrpPeople2.x = -300;
            egret.Tween.get(_this.kGrpPeople2).to({ x: 391 }, 700).call(function () {
                egret.Tween.removeTweens(_this.kGrpPeople2);
                _this.kGrpMenu2.scaleX = _this.kGrpMenu2.scaleY = 0;
                egret.Tween.get(_this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                var maskIcon = new egret.Shape();
                maskIcon.graphics.beginFill(0x000000, 1);
                maskIcon.graphics.drawCircle(0, 0, 85);
                maskIcon.graphics.endFill();
                maskIcon.x = 252;
                maskIcon.y = 640;
                // maskIcon.scaleY = 0.6;
                //-------------------------------------------------------------------------
                var guide = new two.Guide();
                guide.init(maskIcon, _this.stage.stageWidth, _this.stage.stageHeight);
                _this.kGrpAction.addChild(guide);
                // this.kGrpPeople2.visible = false;
                // this.kImgPeople1.visible = false
                _this.kGrpMask.visible = true;
                _this.initData();
            });
            egret.Tween.get(_this.kGrpPeople1).to({ x: 667 }, 280).call(function () {
                egret.Tween.removeTweens(_this.kGrpPeople1);
                _this.kGrpMenu1.scaleX = _this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(_this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
            });
        });
    };
    /**
     * 初始化游戏数据
    */
    GameMain.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GuideStep.instance.init(this.kGrpGuide, this.guideArr);
                GuideStep.instance.moveHand(this.clickButton1.bind(this));
                this.foodArr = [this.kFood1, this.kFood2, this.kFood3, this.kFood4];
                this.cokeArr = [this.kImgCoke1, this.kImgCoke2, this.kImgCoke3];
                return [2 /*return*/];
            });
        });
    };
    GameMain.prototype.clickButton1 = function () {
        var _this = this;
        egret.log("点击");
        this.kGrpAction.removeChildren();
        this.kGrpMask.visible = false;
        this.foodArr.forEach(function (item) {
            item.visible = true;
            item.scaleX = item.scaleY = 0;
            egret.Tween.get(item).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
                egret.Tween.removeTweens(item);
                _this.setProgress(700, function () { item.cookComplete(); }, item.x, item.y);
                _this.playFei(0, item.x - 60, item.y - 20);
                _this.playSmog(0, item.x, item.y);
            });
        });
        this.playCook();
        GuideStep.instance.clearHand();
        this.setTimeCallBack(300, function () {
            GuideStep.instance.moveHand(_this.clickButton2.bind(_this));
        });
    };
    GameMain.prototype.clickButton2 = function () {
        var _this = this;
        this.kGrpCoke.visible = true;
        GuideStep.instance.clearHand();
        this.soundBubble();
        this.setProgress(700, function () { }, 1100, 650);
        this.cokeArr.forEach(function (item) {
            item.scaleX = item.scaleY = 0;
            var point = item.localToGlobal();
            egret.Tween.get(item).to({ scaleX: 1, scaleY: 1 }, 1000).call(function () {
                _this.playBubble(point.x, point.y + 50);
                egret.Tween.removeTweens(item);
            });
        });
        GuideStep.instance.moveHand(this.clikButton3.bind(this));
    };
    GameMain.prototype.clikButton3 = function () {
        var _this = this;
        this.clearMc();
        this.cachSound["soil"].close();
        GuideStep.instance.clearHand();
        var _loop_1 = function (i) {
            this_1.foodArr[i].flyBefore();
            egret.Tween.get(this_1.foodArr[i]).to({ x: arr[i].x, y: arr[i].y }, 300, egret.Ease.quadOut).call(function () {
                egret.Tween.removeTweens(_this.foodArr[i]);
            });
        };
        var this_1 = this;
        for (var i = 0; i < 4; i++) {
            _loop_1(i);
        }
        GuideStep.instance.moveHand(this.clikButton4.bind(this));
    };
    GameMain.prototype.clikButton4 = function () {
        GuideStep.instance.clearHand();
        this.foodArr.forEach(function (item) {
            item.showTomoto();
        });
        GuideStep.instance.moveHand(this.clikButton5.bind(this));
    };
    GameMain.prototype.clikButton5 = function () {
        GuideStep.instance.clearHand();
        this.foodArr.forEach(function (item) {
            item.showFrties();
        });
        GuideStep.instance.moveHand(this.clikButton6.bind(this));
    };
    GameMain.prototype.clikButton6 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        this.upIndex(this.foodArr[0], this.kGrpMain);
        egret.Tween.get(this.foodArr[0]).to({ x: 586, y: 140, scaleX: .6, scaleY: .6 }, 300).call(function () {
            _this.kGrpMain.removeChild(_this.foodArr[0]);
            _this.kImgOrder3.source = main_complete;
            GuideStep.instance.moveHand(_this.clikButton7.bind(_this));
        });
    };
    GameMain.prototype.clikButton7 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        this.upIndex(this.foodArr[2], this.kGrpMain);
        egret.Tween.get(this.foodArr[2]).to({ x: 586, y: 218, scaleX: .6, scaleY: .6 }, 300).call(function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.kGrpMain.removeChild(this.foodArr[2]);
                        this.kImgOrder4.source = main_complete;
                        this.kImgPeople2.source = main_aunt_laugh;
                        SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpGuide, coinJson, coin, this.kImgOrder3.localToGlobal().x, this.kImgOrder4.localToGlobal().y + 50, 700)];
                    case 1:
                        x = _a.sent();
                        GuideStep.instance.moveHand(this.clikButton8.bind(this));
                        this.setTimeCallBack(1200, function () { _this.kGrpGuide.removeChild(x); });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    GameMain.prototype.clikButton8 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        this.upIndex(this.foodArr[1], this.kGrpMain);
        egret.Tween.get(this.foodArr[1]).to({ x: 862, y: 140, scaleX: .6, scaleY: .6 }, 300).call(function () {
            _this.kGrpMain.removeChild(_this.foodArr[1]);
            _this.kImgOrder1.source = main_complete;
            GuideStep.instance.moveHand(_this.clikButton9.bind(_this));
        });
    };
    GameMain.prototype.clikButton9 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        this.kImgCoke3.visible = false;
        var img = new eui.Image(main_coke1);
        img.x = 1035;
        img.y = 356;
        this.kGrpMain.addChild(img);
        this.kGrpAction.removeChild(this.bubbleArr[0]);
        egret.Tween.get(img).to({ x: 840, y: 188, scaleX: 0.6, scaleY: 0.6 }, 300).call(function () {
            egret.Tween.removeTweens(img);
            _this.kGrpMain.removeChild(img);
            _this.kImgOrder2.source = main_complete;
            _this.playEndAni();
        });
    };
    GameMain.prototype.playEndAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpGuide, coinJson, coin, this.kImgOrder1.localToGlobal().x, this.kImgOrder1.localToGlobal().y + 50, 700)];
                    case 1:
                        x = _a.sent();
                        if (this.endType) {
                            this.setTimeCallBack(1200, function () {
                                _this.kGrpGuide.removeChild(x);
                                _this.kImgPeople1.source = main_grampa_laugh;
                                ;
                                _this.kRecEnd.visible = _this.kImgFloat1.visible = _this.kImgFloat2.visible = _this.kGrpAlert.visible = true;
                                egret.Tween.get(_this.kImgFloat1, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
                                egret.Tween.get(_this.kImgFloat2, { loop: true }).to({ scaleX: 0.9, scaleY: 0.9 }, 2000).to({ scaleX: 1, scaleY: 1 }, 2000);
                                _this.kGrpAlert.scaleX = _this.kGrpAlert.scaleY = 0;
                                egret.Tween.get(_this.kGrpAlert).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
                                    egret.Tween.removeTweens(_this.kGrpAlert);
                                    egret.Tween.get(_this.kImgContinue, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
                                    egret.Tween.get(_this.kImgShare, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 300).to({ scaleX: 1, scaleY: 1 }, 150);
                                });
                            });
                        }
                        else {
                            this.setTimeCallBack(1200, function () {
                                _this.kGrpGuide.removeChild(x);
                                _this.kGrpMenu1.scaleX = _this.kGrpMenu1.scaleY = 0;
                                _this.kImgOrder1.source = main_order2;
                                _this.kImgOrder2.source = main_order2;
                                egret.Tween.get(_this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 200).wait(600).call(function () {
                                    egret.Tween.removeTweens(_this.kGrpMenu1);
                                    GuideStep.instance.moveHand(_this.openPlateForm.bind(_this), 2);
                                    _this.kImgSwipe.visible = true;
                                    _this.kImgSwipe.scaleX = _this.kImgSwipe.scaleY = 0;
                                    egret.Tween.get(_this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
                                        egret.Tween.removeTweens(_this.kImgSwipe);
                                        egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
                                    });
                                });
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.upIndex = function (_target, _parent) {
        _parent.setChildIndex(_target, _parent.getChildIndex(this.kGrpPeople2) + 100);
    };
    /**
     *  @description 添加游戏事件
    */
    GameMain.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgShare.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    GameMain.prototype.setProgress = function (t, f, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc, 'progress')];
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
    GameMain.prototype.playFei = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc, "soil")];
                    case 1:
                        mm = _a.sent();
                        this.kGrpAction.addChild(mm);
                        mm.x = x;
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
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smJson, sm, x + 50, y, 0, 0.15)];
                    case 1:
                        system = _a.sent();
                        this.mcArr.push(system);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.playBubble = function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, bubbleJson, bubble, x, y)];
                    case 1:
                        system = _a.sent();
                        system.scaleX = system.scaleY = 0.18;
                        this.bubbleArr.push(system);
                        return [2 /*return*/];
                }
            });
        });
    };
    GameMain.prototype.playCook = function () {
        var sound = new egret.Sound();
        this.cachSound["soil"] = sound;
        sound.load(SoundConst.soil);
        sound.once(egret.Event.COMPLETE, function () {
            sound.play(0, -1);
        }, this);
    };
    GameMain.prototype.soundBubble = function () {
        var sound = new egret.Sound();
        sound.load(SoundConst.maopao);
        this.cachSound["bubble"] = sound;
        sound.addEventListener(egret.Event.COMPLETE, function () {
            sound.play(0, -1).volume = 0.1;
        }, this);
    };
    GameMain.prototype.clearMc = function () {
        var _this = this;
        this.mcArr.forEach(function (item) {
            _this.kGrpAction.removeChild(item);
        });
        this.mcArr = [];
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
    };
    //设置延迟回调
    GameMain.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    //屏幕旋转
    GameMain.prototype.onRotation = function (event) {
        // alert("resize")
        //此处需要重置Ui
        function CallBack() {
            this.width = egret.MainContext.instance.stage.stageWidth;
            this.height = egret.MainContext.instance.stage.stageHeight;
            this.x = this.y = 0;
            this.scaleX = this.scaleY = 1;
        }
        this.setTimeCallBack(600, CallBack.bind(this));
    };
    return GameMain;
}(eui.Component));
__reflect(GameMain.prototype, "GameMain", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map