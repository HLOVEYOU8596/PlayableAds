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
        _this.jumpFlag = true;
        _this.adType = 0;
        _this.guideNum = 1;
        _this.scaleArr = [.8, .5, .8, .5, .8, .5];
        _this.callBack = null;
        //引导相关变量
        // new egret.Point(286, 498),new egret.Point(1024, 460)
        _this.guideArr = [new egret.Point(494, 623), new egret.Point(349, 381), new egret.Point(1127, 578),
            new egret.Point(960, 528), new egret.Point(327, 496), new egret.Point(939, 431)];
        _this.clickNum = 0; //点击次数
        _this.swiperNum = 0; //滑动次数
        _this.guideObj = {
            1: false,
            2: false,
            3: false,
            4: false,
            5: false,
            6: false,
        };
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
    ;
    /**
     * 初始化游戏界面UI
    */
    MainView.prototype.initUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        this.kGrpPeople1.x = -200;
                        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
                        this.kImgBg1.source = main_bg1;
                        this.kImgbg2.source = main_bg2;
                        this.kImgMenu1.source = main_menu;
                        this.kImgSwipe.source = main_swipe;
                        this.kImgHand.source = main_guide_arrow;
                        this.kImgFood1.source = main_ham;
                        this.kImgFood2.source = main_shu;
                        this.kImgFood3.source = main_shousi;
                        this.kImgFood4.source = main_wine;
                        this.kImgFood5.source = main_chicken;
                        this.kImgFood6.source = main_coke;
                        this.kImgFood7.source = main_shu;
                        this.kImgFood8.source = main_cheng;
                        this.kImgFood9.source = main_noodle;
                        this.kImgFood10.source = main_zhi;
                        this.kImgFood11.source = main_san;
                        this.kImgFood12.source = main_pancake;
                        this.kImgFood13.source = main_fish;
                        this.kImgOrder1.source = main_order1;
                        this.kImgOrder2.source = main_order2;
                        this.kImgRight1.source = this.kImgRight2.source = main_right;
                        this.kImgError.source = main_error;
                        this.kImgChoice1.source = main_continue;
                        this.kImgChoice2.source = main_skip;
                        _a = this;
                        return [4 /*yield*/, Dragon.createArmature(0, -40, 'geek', this.kGrpPeople1, geek_ske_j, geek_tex, geek_tex_j)];
                    case 1:
                        _a.people1 = _d.sent();
                        this.people1.scaleX = this.people1.scaleY = 1.2;
                        this.people1.animation.play('walk', 0);
                        _b = this;
                        return [4 /*yield*/, McManger.instance.getMcAtH5('a1', a1_j, a1, 'a1')];
                    case 2:
                        _b.people2 = (_d.sent());
                        _c = this;
                        return [4 /*yield*/, McManger.instance.getMcAtH5('fatguy', fatguy_j, fatguy, 'stand')];
                    case 3:
                        _c.people3 = (_d.sent());
                        this.foodArr = [this.kImgFood1, this.kImgFood2, this.kImgFood3, this.kImgFood4, this.kImgFood5, this.kImgFood6,
                            this.kImgFood7, this.kImgFood8, this.kImgFood9, this.kImgFood10, this.kImgFood11, this.kImgFood12, this.kImgFood13];
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
    MainView.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
                // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
                //281 697
                this.kGrpMenu1.alpha = 1;
                this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(function () {
                    _this.people1.animation.play('stand', 0);
                    _this.showMenu();
                    _this.showMenuGUide();
                    _this.initData();
                });
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.comePeople1 = function () {
        var _this = this;
        GuideStep.instance.guideStep = 2;
        this.kGrpMenu1.alpha = 1;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
        egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(function () {
            _this.people2.gotoAndPlay(0, -1);
            _this.showMenu();
            if (_this.adType === 3) {
                _this.jumpFlag = false;
                _this.openChoice(_this.showMenuGUide.bind(_this));
            }
            else
                _this.showMenuGUide();
        });
    };
    MainView.prototype.comePeople2 = function () {
        var _this = this;
        GuideStep.instance.guideStep = 4;
        this.kGrpMenu1.alpha = 1;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
        egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(function () {
            _this.people3.gotoAndPlay(0, -1);
            _this.showMenu();
            if (_this.adType === 1)
                _this.jumpFlag = false;
            _this.openChoice(_this.showMenuGUide.bind(_this));
        });
    };
    MainView.prototype.comePeople3 = function () {
        var _this = this;
        // GuideStep.instance.guideStep = 4;
        this.kGrpMenu1.alpha = 1;
        this.kGrpMenu1.scaleX = this.kGrpMenu1.scaleY = 0;
        egret.Tween.get(this.kGrpPeople1).to({ x: 412 }, 700).call(function () {
            _this.people3.gotoAndPlay(0, -1);
            _this.showMenu();
            _this.openChoice(_this.openPlateForm.bind(_this));
            _this.jumpFlag = false;
        });
    };
    MainView.prototype.showMenu = function () {
        egret.Tween.removeTweens(this.kGrpPeople1);
        this.kGrpMenu1.visible = true;
        egret.Tween.get(this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
    };
    MainView.prototype.showMenuGUide = function () {
        var _this = this;
        egret.Tween.get(this.kImgOrder1, { loop: true })
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .wait(300);
        egret.Tween.get(this.kImgOrder2, { loop: true })
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .to({ rotation: 15 }, 50).to({ rotation: -15 }, 100).to({ rotation: 0 }, 50)
            .wait(300);
        this.setTimeCallBack(2000, function () {
            if (!_this.guideObj[_this.guideNum * 2 - 1])
                GuideStep.instance.moveHand(_this.clickButton.bind(_this, { target: { name: _this.guideNum * 2 - 1 } }));
        });
    };
    /**
     * 初始化游戏数据
    */
    MainView.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GuideStep.instance.init(this.kGrpGuide, this.guideArr);
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.addCoin = function (p, scale) {
        return __awaiter(this, void 0, void 0, function () {
            var coinAni;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('coinDie', coinDie_j, coinDie, 'coinDie')];
                    case 1:
                        coinAni = _a.sent();
                        coinAni.x = p.x;
                        coinAni.y = p.y + 20;
                        coinAni.scaleX = coinAni.scaleY = this.scaleArr[scale];
                        coinAni.gotoAndPlay(0);
                        this.kGrpSnow.addChild(coinAni);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.clickButton = function (e) {
        var _this = this;
        var cai = Number(e.target.name);
        if (cai <= this.guideNum * 2) {
            this.guideObj[cai] = true;
            var point1 = new egret.Point(624, 430);
            var point2 = new egret.Point(769, 430);
            var point = Boolean(cai % 2 === 0) ? point2 : point1;
            var img1_1 = Boolean(cai % 2 === 0) ? this.kImgRight2 : this.kImgRight1;
            var img2_1 = Boolean(cai % 2 === 0) ? this.kImgOrder2 : this.kImgOrder1;
            if (this.guideObj[this.guideNum * 2 - 1] && this.guideObj[this.guideNum * 2] && this.adType === 0 && this.guideNum == 3) {
                this.openPlateForm();
                return;
            }
            GuideStep.instance.clearHand();
            this.foodArr[cai - 1].removeEventListener(egret.TouchEvent.TOUCH_TAP, this.clickButton, this);
            egret.Tween.get(this.foodArr[cai - 1]).to({ x: point.x, y: point.y }, 400).call(function () {
                _this.addCoin(_this.guideArr[cai - 1], cai - 1);
                egret.Tween.removeTweens(img2_1);
                img2_1.rotation = 0;
                img1_1.visible = true;
                if (_this.guideObj[_this.guideNum * 2 - 1] && _this.guideObj[_this.guideNum * 2]) {
                    //769,178  900,178
                    egret.Tween.get(_this.foodArr[_this.guideNum * 2 - 1]).wait(500).to({ x: 900, y: 178 }, 300).call(function () { _this.foodArr[_this.guideNum * 2 - 1].visible = false; });
                    egret.Tween.get(_this.foodArr[_this.guideNum * 2 - 2]).wait(500).to({ x: 769, y: 178 }, 300).call(function () { _this.foodArr[_this.guideNum * 2 - 2].visible = false; }).wait(300).call(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _this = this;
                        var _a, _b;
                        return __generator(this, function (_c) {
                            switch (_c.label) {
                                case 0:
                                    egret.Tween.get(this.kGrpMenu1).wait(400).to({ alpha: 0 }, 600);
                                    this.playPao();
                                    if (!(this.guideNum === 1)) return [3 /*break*/, 1];
                                    this.people1.animation.play('happy', 0);
                                    this.setTimeCallBack(1000, function () {
                                        egret.Tween.get(_this.kGrpPeople1).to({ x: 1280 }, 500).call(function () {
                                            _this.guideNum++;
                                            _this.kGrpPeople1.x = -200;
                                            _this.kGrpPeople1.removeChild(_this.people1);
                                            _this.kGrpPeople1.addChild(_this.people2);
                                            _this.people2.y = -30;
                                            // this.people2.x = 50;
                                            _this.people2.scaleX = _this.people2.scaleY = 1.4;
                                            _this.comePeople1();
                                            _this.kImgRight1.visible = _this.kImgRight2.visible = false;
                                            _this.kImgOrder1.source = main_order3;
                                            _this.kImgOrder2.source = main_order4;
                                        });
                                    });
                                    return [3 /*break*/, 5];
                                case 1:
                                    if (!(this.guideNum == 2)) return [3 /*break*/, 3];
                                    this.kGrpPeople1.removeChild(this.people2);
                                    _a = this;
                                    return [4 /*yield*/, McManger.instance.getMcAtH5('a1', a1_j, a1, 'a2')];
                                case 2:
                                    _a.people2 = (_c.sent());
                                    this.people2.y = -30;
                                    // this.people2.x = 0;
                                    this.people2.scaleX = this.people2.scaleY = 1.3;
                                    this.people2.gotoAndPlay(0, -1);
                                    this.kGrpPeople1.addChild(this.people2);
                                    this.setTimeCallBack(1000, function () {
                                        egret.Tween.get(_this.kGrpPeople1).to({ x: 1280 }, 500).call(function () {
                                            _this.guideNum++;
                                            _this.kGrpPeople1.x = -200;
                                            _this.kGrpPeople1.removeChild(_this.people2);
                                            _this.kGrpPeople1.addChild(_this.people3);
                                            _this.people3.scaleX = -1.3;
                                            _this.people3.scaleY = 1.3;
                                            _this.people3.y = -40;
                                            _this.people3.x = 260;
                                            _this.comePeople2();
                                            _this.kImgRight1.visible = _this.kImgRight2.visible = false;
                                            _this.kImgOrder1.source = main_order5;
                                            _this.kImgOrder2.source = main_order6;
                                        });
                                    });
                                    return [3 /*break*/, 5];
                                case 3:
                                    if (!(this.guideNum == 3)) return [3 /*break*/, 5];
                                    this.kGrpPeople1.removeChild(this.people3);
                                    _b = this;
                                    return [4 /*yield*/, McManger.instance.getMcAtH5('fatguy', a1_j, a1, 'happy')];
                                case 4:
                                    _b.people3 = (_c.sent());
                                    this.people3.scaleX = -1.3;
                                    this.people3.scaleY = 1.3;
                                    this.people3.y = -40;
                                    this.people3.x = 260;
                                    this.people3.gotoAndPlay(0, -1);
                                    this.kGrpPeople1.addChild(this.people3);
                                    if (this.adType === 0) {
                                        // this.openPlateForm()
                                        this.openChoice();
                                        this.jumpFlag = false;
                                    }
                                    ;
                                    this.setTimeCallBack(1000, function () {
                                        egret.Tween.get(_this.kGrpPeople1).to({ x: 1280 }, 500).call(function () {
                                            _this.guideNum++;
                                            if (_this.adType == 2) {
                                                _this.kGrpPeople1.x = -200;
                                                _this.kGrpPeople1.removeChild(_this.people3);
                                                _this.kGrpPeople1.addChild(_this.people1);
                                                _this.kImgOrder1.source = main_pancake;
                                                _this.kImgOrder2.source = main_zhi;
                                                _this.kImgRight1.visible = _this.kImgRight2.visible = false;
                                                _this.people1.animation.play('stand', -1);
                                                _this.comePeople3();
                                            }
                                        });
                                    });
                                    _c.label = 5;
                                case 5: return [2 /*return*/];
                            }
                        });
                    }); });
                }
            });
            if (!this.guideObj[this.guideNum * 2] && cai % 2 === 1) {
                if (GuideStep.instance.guideStep % 2 === 0) {
                    GuideStep.instance.moveHand(this.clickButton.bind(this, { target: { name: this.guideNum * 2 } }));
                    GuideStep.instance.clearHand();
                }
                GuideStep.instance.moveHand(this.clickButton.bind(this, { target: { name: this.guideNum * 2 } }));
            }
            else if (cai % 2 === 0 && this.guideObj[this.guideNum * 2] && !this.guideObj[this.guideNum * 2 - 1]) {
                GuideStep.instance.guideStep = this.guideNum * 2 - 2;
                GuideStep.instance.moveHand(this.clickButton.bind(this, { target: { name: this.guideNum * 2 - 1 } }));
            }
        }
        else {
            var point = new egret.Point(e.target.x, e.target.y);
            this.kImgError.x = point.x;
            this.kImgError.y = point.y;
            this.kImgError.visible = true;
            this.kImgError.alpha = 1;
            egret.Tween.removeTweens(this.kImgError);
            egret.Tween.get(this.kImgError).to({ alpha: 0 }, 1000).call(function () {
                _this.kImgError.visible = false;
                _this.kImgError.alpha = 1;
            });
            return;
        }
    };
    MainView.prototype.openChoice = function (callBack) {
        if (callBack === void 0) { callBack = function () { }; }
        this.callBack = callBack;
        this.kImgRect.visible = true;
        egret.Tween.get(this.kGrpChoice).to({ scaleX: 1, scaleY: 1 }, 600, egret.Ease.elasticOut);
    };
    MainView.prototype.playPao = function () {
        //400-600，100-336
        var arr1 = [];
        var arr2 = [];
        for (var i = 0; i < 6; i++) {
            var point1 = new egret.Point(400 + Math.random() * 200, 336);
            var point2 = new egret.Point(400 + Math.random() * 200, 336);
            var img1 = new eui.Image(main_heart);
            var img2 = new eui.Image(main_hand);
            img1.anchorOffsetX = 37;
            img1.anchorOffsetY = 29;
            img2.anchorOffsetX = 40;
            img2.anchorOffsetY = 45;
            img1.x = point1.x;
            img1.y = point1.y;
            img2.x = point2.x;
            img2.y = point2.y;
            img1.scaleX = img1.scaleY = img2.scaleX = img2.scaleY = 0.5;
            img1.alpha = img2.alpha = 0;
            this.kGrpSnow.addChild(img1);
            this.kGrpSnow.addChild(img2);
            arr1.push(img1);
            arr2.push(img2);
        }
        arr1.forEach(function (item) {
            egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: 250, x: 400 + Math.random() * 200 }, 300)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 235 }, 100).to({ scaleX: 1, scaleY: 1, y: 220 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 205 }, 100).to({ scaleX: 1, scaleY: 1, y: 190 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 175 }, 100).to({ scaleX: 1, scaleY: 1, y: 160 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 145 }, 100).to({ scaleX: 1, scaleY: 1, y: 130 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 115, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: 100, alpha: 0 }, 200);
        });
        arr2.forEach(function (item) {
            egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: 250, x: 400 + Math.random() * 200 }, 300)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 235 }, 100).to({ scaleX: 1, scaleY: 1, y: 220 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 205 }, 100).to({ scaleX: 1, scaleY: 1, y: 190 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 175 }, 100).to({ scaleX: 1, scaleY: 1, y: 160 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 145 }, 100).to({ scaleX: 1, scaleY: 1, y: 130 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: 115, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: 100, alpha: 0 }, 200);
        });
    };
    /**
     *  @description 添加游戏事件
    */
    MainView.prototype.addEvents = function () {
        var _this = this;
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.foodArr.forEach(function (item) {
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.clickButton, _this);
        });
        this.kImgChoice1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeChoice, this);
        this.kImgChoice2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    MainView.prototype.closeChoice = function () {
        if (!this.jumpFlag) {
            this.openPlateForm();
            return;
        }
        if (this.callBack)
            this.callBack();
        this.kImgRect.visible = false;
        this.kGrpChoice.scaleX = this.kGrpChoice.scaleY = 0;
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