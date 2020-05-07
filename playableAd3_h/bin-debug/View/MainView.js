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
        _this.mcArr = [];
        _this.pao = new egret.Timer(600);
        //引导相关变量
        _this.guideArr = [new egret.Point(846, 560), new egret.Point(846, 560), new egret.Point(846, 560),
            new egret.Point(583, 30),
            new egret.Point(712, 586), new egret.Point(712, 586), new egret.Point(712, 586),
            // new egret.Point(400, 632),
            new egret.Point(506, 534), new egret.Point(538, 274), new egret.Point(710, 536),
            new egret.Point(662, 276), new egret.Point(934, 524), new egret.Point(796, 284)];
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
        // this.playShade();
        for (var i = 2; i >= 0; i--) {
            for (var j = 2; j >= 0; j--) {
                var drum = Drumstick.produce();
                drum.anchorOffsetX = drum.width / 2;
                drum.anchorOffsetY = drum.height / 2;
                drum.x = pointJson[i + "_" + j].x;
                drum.y = pointJson[i + "_" + j].y - 30;
                drum.scaleX = drum.scaleY = pointJson[i + "_" + j].scale;
                // drum.setData({ status: 1 ,filter:this.filter});
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
                // this.playSmog(0,drum.x,drum.y);
                // drum.filters = [this.filter];
            }
        }
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgPeople1.source = main_people2;
        this.kImgPeople2.source = main_people1;
        this.kImgMenu1.source = this.kImgMenu2.source = main_menu;
        this.kImgNum1.source = main_x3;
        this.kImgNum2.source = main_x6;
        this.kImgSwipe.source = main_swipe;
        this.kImgNum1.visible = this.kImgNum2.visible = false;
        this.kImgOrder1.source = main_order1;
        this.kImgOrder2.source = main_order2;
        this.kImgDi.source = main_di;
        this.kImgCandy.source = main_candy;
        // this.kImgD1.source = this.kImgD2.source = this.kImgD3.source = main_drumstick0;
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
                        // this.playSmog(0,this.kImgD1.x,this.kImgD1.y);
                        // this.playSmog(0,this.kImgD2.x,this.kImgD2.y);
                        // this.playSmog(0,this.kImgD3.x,this.kImgD3.y);
                        // this.playFei(0,this.kImgD1.x-65,this.kImgD1.y-10);
                        // this.playFei(0,this.kImgD2.x-65,this.kImgD2.y-10);
                        // this.playFei(0,this.kImgD3.x-65,this.kImgD3.y-10);
                        this.kImgPeople2.visible = false;
                        this.kImgPeople1.visible = false;
                        _a = this;
                        return [4 /*yield*/, Dragon.createArmature(0, -30, 'geek', this.kGrpPeople1, geek_ske_j, geek_tex, geek_tex_j)];
                    case 1:
                        _a.geek = _c.sent();
                        _b = this;
                        return [4 /*yield*/, Dragon.createArmature(100, 160, 'gramma', this.kGrpPeople2, gramma_ske_j, gramma_tex, gramma_tex_j)];
                    case 2:
                        _b.gramma = _c.sent();
                        this.gramma.scaleX = -1;
                        this.geek.animation.play('walk', -1);
                        this.gramma.animation.play('walk', -1);
                        //281 697
                        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(function () {
                            _this.gramma.animation.play('stand', -1);
                            egret.Tween.removeTweens(_this.kGrpPeople2);
                            _this.kGrpMenu2.visible = true;
                            _this.kGrpMenu2.scaleX = _this.kGrpMenu2.scaleY = 0;
                            egret.Tween.get(_this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                        });
                        this.setTimeCallBack(500, function () {
                            egret.Tween.get(_this.kGrpPeople1).to({ x: 281 }, 280).call(function () {
                                _this.geek.animation.play('stand', -1);
                                egret.Tween.removeTweens(_this.kGrpPeople1);
                                _this.kGrpMenu1.visible = true;
                                _this.kGrpMenu1.scaleX = _this.kGrpMenu1.scaleY = 0;
                                egret.Tween.get(_this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                                _this.initData();
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
                GuideStep.instance.moveHand(this.clickButton.bind(this));
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.clickButton = function () {
        egret.log("点击");
        var char = (3 + Math.floor(this.clickNum / 3)).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        for (var i = 0; i < 3; i++)
            this.drumArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3]["showImg" + char]();
        if (this.clickNum == 3) {
            this.gramma.animation.play('angry', -1);
            GuideStep.instance.moveHand(this.clickCandy.bind(this));
            return;
        }
        if (this.clickNum == 4) {
            this.gramma.animation.play('stand', -1);
            this.pao.stop();
        }
        if (this.clickNum == 6) {
            // GuideStep.instance.moveHand(this.downHam.bind(this));
            GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
            return;
            // this.setTimeCallBack(600, () => {
            //     SoundManager.instance.playEffect(SoundConst.down);
            //     GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
            // });
        }
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    };
    MainView.prototype.clickCandy = function () {
        GuideStep.instance.clearHand();
        this.gramma.animation.stop();
        this.gramma.animation.play("happy", -1);
        this.playPao(670, 200, 250);
        this.pao.addEventListener(egret.TimerEvent.TIMER, this.playPao.bind(this, 670, 200, 250), this);
        this.pao.start();
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    };
    /**
     *  @description 添加游戏事件
    */
    MainView.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    MainView.prototype.downHam = function () {
        var _this = this;
        this.drumArr.forEach(function (item) {
            item.showImg5();
        });
        SoundManager.instance.playEffect(SoundConst.down);
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, function () {
            GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
        });
    };
    MainView.prototype.playFei = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mc_j, mc, "soil")];
                    case 1:
                        mm = _a.sent();
                        this.kGrpAction.addChild(mm);
                        mm.x = x;
                        mm.y = y;
                        mm.gotoAndPlay(0, -1);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.playSmog = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, smoke_j, smoke, x, y)];
                    case 1:
                        system = _a.sent();
                        system.alpha = 0.2;
                        this.mcArr.push(system);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.conacthHam = function () {
        var _this = this;
        this.swiperNum++;
        GuideStep.instance.clearHand();
        var arr = [new egret.Point(541, 332), new egret.Point(957, 332), new egret.Point(957, 332)];
        for (var i = 0; i < 3; i++) {
            egret.Tween.get(this.drumArr[(i + 1) * 3 - this.swiperNum]).to({ x: arr[this.swiperNum - 1].x, y: arr[this.swiperNum - 1].y }, 150);
            // this.mcArr[(i + 1) * 3 - this.swiperNum].parent.removeChild(this.mcArr[(i + 1) * 3 - this.swiperNum]);
        }
        this.setTimeCallBack(160, function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.drumArr[6 - this.swiperNum].visible = this.drumArr[3 - this.swiperNum].visible = false;
                        egret.Tween.get(this.drumArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 567 : 987, y: 105, scaleX: 0.6, scaleY: 0.6 }, 150).call(function () {
                            _this.drumArr[9 - _this.swiperNum].visible = false;
                        });
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, arr[this.swiperNum - 1].x, arr[this.swiperNum - 1].y - 200, 700)];
                    case 1:
                        x = _a.sent();
                        SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
                        if (this.swiperNum == 1) {
                            this.geek.animation.play('happy', -1);
                        }
                        this.setTimeCallBack(700, function () {
                            x["stop"]();
                            if (_this.swiperNum == 1) {
                                _this.kGrpMenu1.visible = false;
                                _this.setTimeCallBack(2000, function () { _this.geek.visible = false; });
                                GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
                            }
                            else if (_this.swiperNum == 2) {
                                // this.kImgNum2.source = main_x3;
                                _this.kImgOrder2.source = main_order1;
                                GuideStep.instance.moveHand(_this.openPlateForm.bind(_this), 2);
                                _this.kImgSwipe.visible = true;
                                _this.kImgSwipe.scaleX = _this.kImgSwipe.scaleY = 0;
                                egret.Tween.get(_this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
                                    egret.Tween.removeTweens(_this.kImgSwipe);
                                    egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
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
        parent.postMessage('download', '*');
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
    MainView.prototype.playPao = function (x, random, y) {
        var _this = this;
        //400-600，100-336
        var arr1 = [];
        // let arr2: eui.Image[] = [];
        for (var i = 0; i < 4; i++) {
            var point1 = new egret.Point(x + Math.random() * random, y);
            // let point2 = new egret.Point(400 + Math.random() * 200, 336);
            var img1 = new eui.Image(main_heart);
            // let img2 = new eui.Image(main_hand);
            img1.anchorOffsetX = 37;
            img1.anchorOffsetY = 29;
            // img2.anchorOffsetX = 40;
            // img2.anchorOffsetY = 45;
            img1.x = point1.x;
            img1.y = point1.y;
            // img2.x = point2.x;
            // img2.y = point2.y;
            img1.scaleX = img1.scaleY = 0.5;
            img1.alpha = 0;
            this.kGrpSnow.addChild(img1);
            // this.kGrpSnow.addChild(img2);
            arr1.push(img1);
            // arr2.push(img2);
        }
        arr1.forEach(function (item) {
            egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: y - 10, x: x + Math.random() * random }, 300)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y - 25 }, 100).to({ scaleX: 1, scaleY: 1, y: y - 40 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y - 55 }, 100).to({ scaleX: 1, scaleY: 1, y: y - 70 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y - 85 }, 100).to({ scaleX: 1, scaleY: 1, y: y - 100 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y - 115 }, 100).to({ scaleX: 1, scaleY: 1, y: y - 130 }, 100)
                .to({ scaleX: 0.8, scaleY: 0.8, y: y - 145, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: y - 160, alpha: 0 }, 200).call(function () {
                _this.kGrpSnow.removeChild(item);
            });
        });
        // arr2.forEach(item => {
        //     egret.Tween.get(item).wait(600 * Math.random()).to({ alpha: 1, scaleX: 1, scaleY: 1, y: 250, x: 400 + Math.random() * 200 }, 300)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 235 }, 100).to({ scaleX: 1, scaleY: 1, y: 220 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 205 }, 100).to({ scaleX: 1, scaleY: 1, y: 190 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 175 }, 100).to({ scaleX: 1, scaleY: 1, y: 160 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 145 }, 100).to({ scaleX: 1, scaleY: 1, y: 130 }, 100)
        //         .to({ scaleX: 0.8, scaleY: 0.8, y: 115, alpha: 0.5 }, 200).to({ scaleX: 1, scaleY: 1, y: 100, alpha: 0 }, 200);
        // });
    };
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map