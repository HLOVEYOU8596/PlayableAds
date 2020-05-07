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
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super.call(this) || this;
        _this.drumArr = [];
        //引导相关变量
        _this.guideArr = [new egret.Point(1160, 639), new egret.Point(430, 654), new egret.Point(669, 657), new egret.Point(381, 596),
            new egret.Point(120, 510), new egret.Point(280, 304), new egret.Point(252, 510), new egret.Point(396, 302),
            new egret.Point(530, 580),
            new egret.Point(680, 580),
            new egret.Point(830, 580),
            new egret.Point(506, 534), new egret.Point(538, 274), new egret.Point(710, 536),
            new egret.Point(662, 276), new egret.Point(934, 524), new egret.Point(796, 284),];
        _this.clickNum = 0; //点击次数
        _this.swiperNum = 0; //滑动次数
        _this.time1 = new egret.Timer(60);
        _this.time2 = new egret.Timer(60);
        _this.time3 = new egret.Timer(60);
        _this.step = 1;
        _this.proMax = 50;
        // this.skinName = "MainViewDevSkin";
        _this.skinName = "MainViewSkin";
        _this.once(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        _this.height = egret.MainContext.instance.stage.stageHeight;
        _this.width = egret.MainContext.instance.stage.stageWidth;
        return _this;
    }
    Object.defineProperty(MainView, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new MainView();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 初始化游戏界面UI
    */
    MainView.prototype.initUI = function () {
        this.kProgress1.thumb["source"] = main_progress;
        this.kProgress2.thumb["source"] = main_progress;
        this.kProgress3.thumb["source"] = main_progress;
        this.kProgress1.bg.source = main_progress_bg;
        this.kProgress2.bg.source = main_progress_bg;
        this.kProgress3.bg.source = main_progress_bg;
        for (var i = 2; i >= 0; i--) {
            for (var j = 2; j >= 0; j--) {
                var drum = Drumstick.produce();
                drum.anchorOffsetX = drum.width / 2;
                drum.anchorOffsetY = drum.height / 2;
                drum.x = pointJson[i + "_" + j].x;
                drum.y = (pointJson[i + "_" + j].y - 15);
                drum.scaleX = drum.scaleY = pointJson[i + "_" + j].scale;
                if (j > 0) {
                    drum.setData({ status: 2 });
                    drum.visible = false;
                }
                else {
                    drum.setData({ status: 1 });
                }
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
                // drum.filters = [this.filter];
            }
        }
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgShop.source = main_jia;
        this.kImgGoods1.source = main_good1;
        this.kImgGoods2.source = main_good2;
        this.kImgLocked4.source = this.kImgLocked5.source = this.kImgLocked6.source = main_suo;
        this.kImgTipsBg.source = main_tips_bg;
        this.kImgTips.source = main_tips;
        this.kBtnUpgrade1.source = this.kBtnUpgrade2.source = main_upgrade;
        this.kBtnContinue.source = main_continue;
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgPeople1.source = main_people2;
        this.kImgPeople2.source = main_people1;
        this.kImgPeople3.source = main_people3;
        this.kImgMenu1.source = this.kImgMenu2.source = this.kImgMenu3.source = main_menu;
        this.kImgNum1.source = main_x3;
        this.kImgNum2.source = main_x3;
        this.kImgNum3.source = main_x3;
        this.kImgSwipe.source = main_swipe;
        this.pancakeArr = [this.kImgPancake1, this.kImgPancake2, this.kImgPancake3, this.kImgPancake4, this.kImgPancake5, this.kImgPancake6];
        var arr = [1, .85, .75];
        this.pancakeArr.forEach(function (item, index) { item.source = main_cake1; item.scaleX = item.scaleY = arr[index < 3 ? index : index - 3]; });
        this.playStartAni();
        this.addEvents();
    };
    /**
     *  @description 播放入场动画
     */
    MainView.prototype.playStartAni = function () {
        var _this = this;
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        //281 697
        // this.kGrpMenu1.x = this.kGrpMenu2.x = 60;
        egret.Tween.get(this.kGrpPeople3).to({ x: 900 }, 700).call(function () {
            egret.Tween.removeTweens(_this.kGrpPeople3);
            _this.kGrpMenu3.visible = true;
            _this.kGrpMenu3.scaleX = _this.kGrpMenu3.scaleY = 0;
            egret.Tween.get(_this.kGrpMenu3).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
            _this.time3.start();
        });
        this.setTimeCallBack(500, function () {
            egret.Tween.get(_this.kGrpPeople2).to({ x: 500 }, 280).call(function () {
                egret.Tween.removeTweens(_this.kGrpPeople2);
                _this.kGrpMenu2.visible = true;
                _this.kGrpMenu2.scaleX = _this.kGrpMenu2.scaleY = 0;
                egret.Tween.get(_this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                // this.initData();
                _this.time2.start();
            });
        });
        this.setTimeCallBack(1000, function () {
            egret.Tween.get(_this.kGrpPeople1).to({ x: 180 }, 280).call(function () {
                egret.Tween.removeTweens(_this.kGrpPeople1);
                _this.kGrpMenu1.visible = true;
                _this.kGrpMenu1.scaleX = _this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(_this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                _this.initData();
                _this.time1.start();
            });
        });
    };
    /**
     * 初始化游戏数据
    */
    MainView.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GuideStep.instance.init(this.kGrpGuide, this.guideArr);
                GuideStep.instance.moveHand(this.continue.bind(this));
                this.kGrpTips.visible = true;
                this.kGrpTips.scaleX = this.kGrpTips.scaleY = 0;
                egret.Tween.get(this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.continue = function () {
        GuideStep.instance.clearHand();
        this.time1.stop();
        this.time2.stop();
        this.time3.stop();
        this.proMax = 80;
        this.kImgRect.visible = true;
        this.kGrpTips.visible = false;
        this.kBtnContinue.visible = false;
        egret.Tween.get(this.kGrpShop).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
        GuideStep.instance.moveHand(this.upgrade1.bind(this));
    };
    MainView.prototype.upgrade1 = function () {
        GuideStep.instance.clearHand();
        this.playBuling(this.kImgGoods1.localToGlobal().x + 120, this.kImgGoods1.localToGlobal().y + 120, 300);
        this.kImgGoods1.source = main_good3;
        this.kBtnUpgrade1.visible = false;
        // this.kImgPancake4.visible = this.kImgPancake5.visible = this.kImgPancake6.visible = true;
        this.kImgLocked4.visible = this.kImgLocked5.visible = this.kImgLocked6.visible = false;
        GuideStep.instance.moveHand(this.upgrade2.bind(this));
    };
    MainView.prototype.upgrade2 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        this.playBuling(this.kImgGoods2.localToGlobal().x + 120, this.kImgGoods2.localToGlobal().y + 120, 300);
        this.kImgGoods2.source = main_disks;
        this.kBtnUpgrade2.visible = false;
        this.drumArr.forEach(function (item) {
            item.visible = true;
        });
        this.setTimeCallBack(600, function () {
            _this.kGrpShop.visible = false;
            _this.kImgRect.visible = false;
            _this.time1.delay = _this.time2.delay = _this.time3.delay = 300;
            _this.time1.start();
            _this.time2.start();
            _this.time3.start();
            GuideStep.instance.moveHand(_this.order1.bind(_this));
        });
    };
    MainView.prototype.order1 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        var arr = [1, .85, .75];
        for (var i = 0; i < 3; i++) {
            this.pancakeArr[3 + i].visible = true;
            this.pancakeArr[3 + i].scaleX = this.pancakeArr[3 + i].scaleY = 0;
            egret.Tween.get(this.pancakeArr[3 + i]).to({ scaleX: arr[i], scaleY: arr[i] }, 600, egret.Ease.elasticOut);
            this.setTimeCallBack(400, function () {
                GuideStep.instance.moveHand(_this.order2.bind(_this), 2);
            });
        }
    };
    MainView.prototype.order2 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        for (var i = 1; i < 4; i++) {
            this.drumArr[i * 3 - 2].setData({ status: 1 });
            egret.Tween.get(this.pancakeArr[i - 1]).to({ scaleX: 0, scaleY: 0 }, 300);
        }
        this.setTimeCallBack(400, function () {
            GuideStep.instance.moveHand(_this.order3.bind(_this), 2);
        });
    };
    MainView.prototype.order3 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        for (var i = 1; i < 4; i++) {
            this.drumArr[i * 3 - 3].setData({ status: 1 });
            egret.Tween.get(this.pancakeArr[i + 2]).to({ scaleX: 0, scaleY: 0 }, 300);
        }
        this.setTimeCallBack(400, function () {
            GuideStep.instance.moveHand(_this.clickButton.bind(_this));
        });
    };
    MainView.prototype.clickButton = function () {
        var _this = this;
        egret.log("点击");
        // let char: string = (3 + Math.floor(this.clickNum / 3)).toString();
        var char = (this.clickNum + 3).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        // for (let i = 0; i < 3; i++)this.drumArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3][`showImg${char}`]();
        this.drumArr.forEach(function (item) { item["showImg" + char](); });
        if (this.clickNum == 2) {
            this.setTimeCallBack(600, function () {
                GuideStep.instance.moveHand(_this.downHam.bind(_this));
            });
            return;
        }
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    };
    /**
     *  @description 添加游戏事件
    */
    MainView.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.time1.addEventListener(egret.TimerEvent.TIMER, this.startProgress1, this);
        this.time2.addEventListener(egret.TimerEvent.TIMER, this.startProgress2, this);
        this.time3.addEventListener(egret.TimerEvent.TIMER, this.startProgress3, this);
    };
    MainView.prototype.downHam = function () {
        var _this = this;
        this.drumArr.forEach(function (item) {
            item.showImg5();
        });
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, function () {
            SoundManager.instance.playEffect(SoundConst.down);
            GuideStep.instance.moveHand(_this.openPlateForm.bind(_this), 2);
            _this.setTimeCallBack(2400, function () {
                _this.kImgSwipe.visible = true;
                _this.kImgSwipe.scaleX = _this.kImgSwipe.scaleY = 0;
                egret.Tween.get(_this.kImgSwipe).to({ scaleX: 0.5, scaleY: 0.5 }, 700, egret.Ease.elasticOut).call(function () {
                    egret.Tween.removeTweens(_this.kImgSwipe);
                    egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 0.5, scaleY: .5 }, 100);
                });
            });
        });
    };
    MainView.prototype.conacthHam = function () {
        var _this = this;
        this.swiperNum++;
        GuideStep.instance.clearHand();
        var coinPoint = [new egret.Point(215, 85), new egret.Point(335, 85)];
        var arr = [new egret.Point(193, 168), new egret.Point(241, 168), new egret.Point(241, 168)];
        for (var i = 0; i < 3; i++) {
            egret.Tween.get(this.drumArr[(i + 1) * 3 - this.swiperNum]).to({ x: arr[this.swiperNum - 1].x, y: arr[this.swiperNum - 1].y }, 150);
        }
        this.setTimeCallBack(160, function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.drumArr[6 - this.swiperNum].visible = this.drumArr[3 - this.swiperNum].visible = false;
                        egret.Tween.get(this.drumArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 215 : 335, y: 85, scaleX: 0.6, scaleY: 0.6 }, 150).call(function () {
                            _this.drumArr[9 - _this.swiperNum].visible = false;
                        });
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, coinPoint[this.swiperNum - 1].x, coinPoint[this.swiperNum - 1].y, 700)];
                    case 1:
                        x = _a.sent();
                        x.scaleX = x.scaleY = 0.3;
                        SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
                        this.setTimeCallBack(700, function () {
                            x["stop"]();
                            if (_this.swiperNum == 1) {
                                _this.kGrpMenu1.visible = false;
                                GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
                            }
                            else if (_this.swiperNum == 2) {
                                _this.kImgNum2.source = main_x3;
                                GuideStep.instance.moveHand(_this.openPlateForm.bind(_this), 2);
                                _this.setTimeCallBack(2400, function () {
                                    _this.kImgSwipe.visible = true;
                                    _this.kImgSwipe.scaleX = _this.kImgSwipe.scaleY = 0;
                                    egret.Tween.get(_this.kImgSwipe).to({ scaleX: 0.5, scaleY: 0.5 }, 700, egret.Ease.elasticOut).call(function () {
                                        egret.Tween.removeTweens(_this.kImgSwipe);
                                        egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 0.8, scaleY: 0.8 }, 600).to({ scaleX: 0.5, scaleY: .5 }, 100);
                                    });
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    //产生随机点
    MainView.prototype.createPoint = function () {
        return new egret.Point(200 + Math.floor(Math.random() * 736), 100 + Math.floor(Math.random() * 440));
    };
    //平台跳转应用商店
    MainView.prototype.openPlateForm = function () {
        console.log("平台跳转");
        if (window["dapi"])
            window["dapi"].openStoreUrl();
        if (window["Liftoff"])
            window["Liftoff"].open();
        if (window["mraid"])
            window["mraid"].open();
        if (window["FBPlayableOnCTAClick"])
            window["FBPlayableOnCTAClick"]();
    };
    //设置延迟回调
    MainView.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
    };
    //屏幕旋转
    MainView.prototype.onRotation = function (event) {
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
    MainView.prototype.startProgress1 = function () {
        this.kProgress1.value += this.step;
        if (this.kProgress1.value > this.proMax) {
            this.time1.stop();
        }
    };
    MainView.prototype.startProgress2 = function () {
        this.kProgress2.value += this.step;
        if (this.kProgress2.value > this.proMax) {
            this.time2.stop();
        }
    };
    MainView.prototype.startProgress3 = function () {
        this.kProgress3.value += this.step;
        if (this.kProgress3.value > this.proMax) {
            this.time3.stop();
        }
    };
    MainView.prototype.playBuling = function (x, y, t, scale) {
        if (scale === void 0) { scale = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpGuide, starJson, star, x, y - 60, t)];
                    case 1:
                        system = _a.sent();
                        system.scaleX = system.scaleY = scale;
                        system.once(egret.Event.COMPLETE, function () { _this.kGrpGuide.removeChild(system); system.stop(); system = null; }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map