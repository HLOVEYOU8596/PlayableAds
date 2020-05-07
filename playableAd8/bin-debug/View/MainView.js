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
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super.call(this) || this;
        _this.layoutMenu = [0, 0, 0];
        //引导相关变量
        // new egret.Point(286, 498),new egret.Point(1024, 460)
        _this.guideArr = [new egret.Point(292, 612), new egret.Point(378, 442), new egret.Point(872, 606),
            new egret.Point(1006, 558), new egret.Point(952, 346)];
        _this.clickNum = 0; //点击次数
        _this.swiperNum = 0; //滑动次数
        _this.skinName = "MainViewDevSkin";
        // this.skinName = "MainViewSkin";
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
        this.kGrpPeople1.x = this.kGrpPeople2.x = -200;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgPeople1.source = main_people2;
        this.kImgPeople2.source = main_people1;
        this.kImgMenu1.source = this.kImgMenu2.source = main_menu;
        this.kImgSwipe.source = main_swipe;
        this.kImgOrder3.source = main_menu2;
        this.kImgOrder1.source = main_cake;
        this.kImgOrder2.source = main_menu1;
        this.kImgShadow1.source = main_shadow1;
        this.kImgShadow2.source = main_shadow2;
        this.kImgShadow3.source = main_shadow3;
        this.kImgNum1.source = this.kImgNum2.source = main_x3;
        this.kImgRabbit.source = main_rabbit;
        this.kImgCoke1.source = main_coke1;
        this.kImgCoke2.source = this.kImgCoke3.source = main_coke2;
        this.kImgRabbit1.source = main_rabbit1;
        this.kImgRabbit2.source = main_rabbit2;
        this.kImgRabbit3.source = main_rabbit3;
        this.kImgBeef1.source = main_beef1;
        this.kImgBeef2.source = main_beef2;
        this.kImgBeef3.source = main_beef3;
        this.kImgEgg.source = main_egg;
        this.kImgEgg1.source = main_egg1;
        this.kImgEgg2.source = main_egg2;
        this.kImgEgg3.source = main_egg3;
        this.kImgEgg4.source = main_egg4;
        this.kImgChicken.source = main_segg;
        this.kImgMachie.source = main_machie;
        this.kImgBear.source = main_bear;
        this.kImgCake1.source = this.kImgCake2.source = this.kImgCake3.source = main_cake;
        this.kImgTea1.source = main_tea1;
        this.kImgTea2.source = main_tea2;
        this.kImgTea3.source = main_tea3;
        this.kImgHand.source = main_guide_arrow;
        this.arrLeft = [this.kImgRabbit, this.kImgRabbit1, this.kImgRabbit2, this.kImgRabbit3, this.kImgCoke1, this.kImgCoke2, this.kImgCoke3, this.kImgBeef1, this.kImgBeef2, this.kImgBeef3];
        this.arrMiddle = [this.kImgEgg, this.kImgEgg1, this.kImgEgg2, this.kImgEgg3, this.kImgEgg4, this.kImgMachie, this.kImgChicken, this.kImgBear];
        this.arrRight = [this.kImgCake1, this.kImgCake2, this.kImgCake3, this.kImgTea1, this.kImgTea2, this.kImgTea3];
        this.rabbitArr = [this.kImgA1, this.kImgA2, this.kImgA3, this.kImgA4, this.kImgA5, this.kImgA6];
        this.shadowArr = [this.kImgShadow1, this.kImgShadow2, this.kImgShadow3];
        var arr = this.arrLeft.concat(this.arrMiddle, this.arrRight, this.rabbitArr);
        arr.forEach(function (item) { item.scaleX = item.scaleY = 0; });
        this.rabbitArr.forEach(function (item) { item.source = main_menu1; });
        this.playStartAni();
        this.addEvents();
    };
    /**
     *  @description 播放入场动画
     */
    MainView.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
                        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
                        //281 697
                        // this.kGrpMenu1.x = this.kGrpMenu2.x = 60;
                        this.kImgPeople1.visible = this.kImgPeople2.visible = false;
                        _a = this;
                        return [4 /*yield*/, Dragon.createArmature(100, 260, 'easterbunny', this.kGrpPeople1, easterbunny1_ske_j, easterbunny1_tex, easterbunny1_tex_j)];
                    case 1:
                        _a.rabbit1 = _c.sent();
                        this.rabbit1.animation.play('walk');
                        _b = this;
                        return [4 /*yield*/, McManger.instance.getMcAtH5('rabbit2', rabbit2_j, rabbit2, 'walk')];
                    case 2:
                        _b.rabbit2 = (_c.sent());
                        this.rabbit2.gotoAndPlay(0, 3);
                        this.rabbit2.stop();
                        this.rabbit2.scaleX = -2;
                        this.rabbit2.scaleY = 2;
                        this.rabbit2.x = 160;
                        this.kGrpPeople2.addChild(this.rabbit2);
                        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(function () { return __awaiter(_this, void 0, void 0, function () {
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        this.kGrpPeople2.removeChild(this.rabbit2);
                                        this.rabbit2.stop();
                                        this.rabbit2 = null;
                                        _a = this;
                                        return [4 /*yield*/, McManger.instance.getMcAtH5('rabbit2', rabbit2_j, rabbit2, 'stand')];
                                    case 1:
                                        _a.rabbit2 = (_b.sent());
                                        this.kGrpPeople2.addChild(this.rabbit2);
                                        this.rabbit2.gotoAndPlay(0, -1);
                                        this.rabbit2.scaleX = -2;
                                        this.rabbit2.scaleY = 2;
                                        this.rabbit2.x = 160;
                                        egret.Tween.removeTweens(this.kGrpPeople2);
                                        this.kGrpMenu2.visible = true;
                                        this.kGrpMenu2.scaleX = this.kGrpMenu2.scaleY = 0;
                                        egret.Tween.get(this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        this.setTimeCallBack(500, function () {
                            egret.Tween.get(_this.kGrpPeople1).to({ x: 313 }, 280).call(function () {
                                _this.rabbit1.animation.play('stand', 0);
                                egret.Tween.removeTweens(_this.kGrpPeople1);
                                _this.kGrpMenu1.visible = true;
                                _this.kGrpMenu1.scaleX = _this.kGrpMenu1.scaleY = 0;
                                egret.Tween.get(_this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                                _this.initData();
                                _this.kImgRect.visible = true;
                                _this.showShadow();
                            });
                        });
                        return [2 /*return*/];
                }
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
                // GuideStep.instance.moveHand(this.clickButton.bind(this),3);
                this.kImgRect.addEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.clickButton = function () {
        // GuideStep.instance.clearHand();
        // egret.Tween.removeTweens(this.shadowArr[this.clickNum]);
        // this.shadowArr[this.clickNum].visible = false;
        egret.Tween.removeAllTweens();
        this.shadowArr.forEach(function (item) { item.visible = false; });
        this.clickNum++;
        this.openChoicePanel();
    };
    MainView.prototype.showShadow = function () {
        var _this = this;
        var arr = [];
        for (var i = 0; i < this.layoutMenu.length; i++) {
            if (this.layoutMenu[i] === 0 && arr.length < 2)
                arr.push(i);
        }
        arr.forEach(function (item) {
            _this.shadowArr[item].visible = true;
            egret.Tween.get(_this.shadowArr[item], { loop: true }).to({ alpha: 0 }, 500).to({ alpha: 1 }, 500);
        });
    };
    MainView.prototype.clickOrder1 = function () {
        var _this = this;
        //586,138  586,198 586,272 964,268
        GuideStep.instance.clearHand();
        var pointArr = [new egret.Point(586, 272), new egret.Point(596, 198), new egret.Point(586, 138)];
        var arr = [this.kImgBeef1, this.kImgBeef2, this.kImgBeef3];
        arr.forEach(function (item, index) {
            egret.Tween.get(item).to({ x: pointArr[index].x, y: pointArr[index].y }, 400).call(function () {
                item.visible = false;
            });
        });
        this.setTimeCallBack(400, function () { return __awaiter(_this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, pointArr[1].x, pointArr[1].y, 700)];
                    case 1:
                        system = _a.sent();
                        this.rabbit1.animation.play('happy', 2);
                        this.kImgOrder3.source = main_right;
                        egret.Tween.get(this.kGrpPeople1).wait(1500).to({ alpha: 0 }, 500);
                        GuideStep.instance.moveHand(this.clickOrder2.bind(this));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainView.prototype.clickOrder2 = function () {
        var _this = this;
        GuideStep.instance.clearHand();
        var arr = [this.kImgA1, this.kImgA2, this.kImgA3];
        arr.forEach(function (item) {
            egret.Tween.get(item).to({ x: 964, y: 268 }, 400).call(function () {
                item.visible = false;
            });
        });
        this.setTimeCallBack(400, function () { return __awaiter(_this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, coinJson, coin, 964, 268, 700)];
                    case 1:
                        system = _a.sent();
                        this.kImgOrder2.source = main_right;
                        this.kImgNum1.visible = false;
                        GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                        this.setTimeCallBack(2400, this.showButton.bind(this));
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainView.prototype.openChoicePanel = function () {
        var _this = this;
        // switch (this.clickNum) {
        //     case 1:
        //         this.kImgChoice1.source = main_a1;
        //         this.kImgChoice2.source = main_a2;
        //         break;
        //     case 2:
        //         this.kImgChoice1.source = main_a1;
        //         this.kImgChoice2.source = main_a2;
        //         break;
        //     case 3:
        //         this.kImgChoice1.source = main_a1;
        //         this.kImgChoice2.source = main_a2;
        //         break;
        // }
        this.findShow();
        egret.Tween.get(this.kGrpChoice).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut).call(function () {
            egret.Tween.get(_this.kImgChoice1, { loop: true }).to({ scaleX: 1.1, scaleY: 1.1 }, 400).to({ scaleX: 1, scaleY: 1 }, 200).wait(700);
            egret.Tween.get(_this.kImgChoice2, { loop: true }).wait(700).to({ scaleX: 1.1, scaleY: 1.1 }, 400).to({ scaleX: 1, scaleY: 1 }, 200);
        });
    };
    MainView.prototype.findShow = function () {
        var arr = [];
        var flag = false;
        var imgArr = [main_a, main_b, main_c];
        for (var i = 0; i < this.layoutMenu.length; i++) {
            if (this.layoutMenu[i] === 0 && arr.length < 2)
                arr.push(i);
        }
        if (arr.length < 2) {
            arr.push(this.tempIndex - 1);
            flag = true;
        }
        this.kImgChoice1.source = imgArr[arr[0]];
        this.kImgChoice1.name = arr[0] + 1;
        this.kImgChoice2.source = imgArr[arr[1]];
        this.kImgChoice2.name = arr[1] + 1;
        if (flag) {
            this.kImgChoice2.name = arr[0] + 1;
        }
    };
    MainView.prototype.showMenu = function (event) {
        var _this = this;
        egret.Tween.removeAllTweens();
        this.kGrpChoice.scaleX = this.kGrpChoice.scaleY = 0;
        this.kImgChoice1.scaleX = this.kImgChoice1.scaleY = this.kImgChoice2.scaleX = this.kImgChoice2.scaleY = 1;
        this.kImgRect.visible = false;
        this.layoutMenu[event.target.name - 1]++;
        this.tempIndex = event.target.name;
        var arr = this.filterImg(event.target.name);
        var num = 0;
        var t = new egret.Timer(100, 0);
        t.addEventListener(egret.TimerEvent.TIMER, function () {
            if (num === arr.length) {
                t.stop();
                t = null;
                if (_this.clickNum == 3) {
                    _this.kImgRect.removeEventListener(egret.TouchEvent.TOUCH_TAP, _this.clickButton, _this);
                    GuideStep.instance.moveHand(_this.clickOrder1.bind(_this), 2);
                    return;
                }
                _this.kImgRect.visible = true;
                // GuideStep.instance.moveHand(this.clickButton.bind(this));
                _this.showShadow();
                // this.shadowArr[this.clickNum].visible = true;
                // egret.Tween.get(this.shadowArr[this.clickNum], { loop: true }).to({ alpha: 0 }, 500).to({ alpha: 1 }, 500);
            }
            if (arr[num])
                egret.Tween.get(arr[num]).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
            num++;
        }, this);
        t.start();
    };
    MainView.prototype.filterImg = function (c) {
        var arr = [];
        switch (c) {
            case 1:
                arr.push.apply(arr, this.arrLeft);
                break;
            case 2:
                arr.push.apply(arr, this.arrMiddle.concat(this.rabbitArr));
                break;
            case 3:
                arr.push.apply(arr, this.arrRight);
                break;
        }
        // if (c == 2) {
        //     arr = this.deleteElement(arr, this.kImgRabbit, this.kImgCoke1, this.kImgCoke2, this.kImgCoke3);
        //     arr = this.deleteElement(arr, this.kImgEgg);
        //     arr = this.deleteElement(arr, this.kImgTea1, this.kImgTea2, this.kImgTea3);
        // }
        return arr;
    };
    MainView.prototype.deleteElement = function (arr) {
        var c = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            c[_i - 1] = arguments[_i];
        }
        c.forEach(function (item) {
            var index = arr.indexOf(item);
            if (index > -1)
                arr.splice(index, 1);
        });
        return arr;
    };
    /**
     *  @description 添加游戏事件
    */
    MainView.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgChoice1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMenu, this);
        this.kImgChoice2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.showMenu, this);
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
    MainView.prototype.showButton = function () {
        var _this = this;
        this.kImgSwipe.visible = true;
        this.kImgSwipe.scaleX = this.kImgSwipe.scaleY = 0;
        egret.Tween.get(this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgSwipe);
            egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    };
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map