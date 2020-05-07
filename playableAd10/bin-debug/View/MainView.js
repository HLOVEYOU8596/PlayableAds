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
        _this.mcArr = [];
        _this.choiceType = 0;
        _this.buildArr = [0, 0, 0, 0];
        _this.tempIndex = 0;
        _this.callBack1 = function () { };
        _this.callBack2 = function () { };
        // private a1_mc: egret.MovieClip;
        // private a2_mc: egret.MovieClip;
        //引导相关变量
        _this.guideArr = [new egret.Point(1042, 524), new egret.Point(714, 632), new egret.Point(714, 632),
        ];
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
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgSwipe.source = main_swipe;
        this.kImgHand.source = main_guide_arrow;
        this.kImgTips2.source = main_tips1;
        this.settingArr = [this.kImgSetting1, this.kImgSetting2, this.kImgSetting3, this.kImgSetting4];
        this.settingArr.forEach(function (item) { return item.source = main_setting; });
        this.kImgTree1.source = main_tree3;
        this.kImgTree2.source = main_tree4;
        this.kImgTree3.source = main_tree5;
        this.kImgTree4.source = main_tree6;
        this.kImgPool1.source = main_pool1;
        this.kImgCirle1.source = main_cirle3;
        this.kImgCirle2.source = main_cirle4;
        this.kImgUmbllear1.source = main_umbllera3;
        this.kImgUmbllear2.source = main_umbllera4;
        this.kImgChair1.source = main_chair3;
        this.kImgChair2.source = main_chair4;
        this.kImgEnd.source = main_end;
        this.kBtnContinue.source = main_continue;
        this.kImgRight.source = main_right;
        this.kImgLine1.source = this.kImgLine2.source = main_check;
        this.kImgPeople.source = main_people;
        this.kImgTips.source = main_tips;
        //进行舞台场景初始化
        this.kGrpMenu.visible = false;
        this.kImgTree1.visible = this.kImgTree2.visible = this.kImgTree3.visible = this.kImgTree4.visible = false;
        this.kImgChair1.visible = this.kImgChair2.visible = false;
        this.kImgCirle1.visible = this.kImgCirle2.visible = false;
        this.kImgPool1.visible = false;
        this.kImgUmbllear1.visible = this.kImgUmbllear2.visible = false;
        this.settingArr.forEach(function (item) { return item.touchEnabled = false; });
        this.playStartAni();
        this.addEvents();
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
                egret.Tween.get(this.kGrpPeople).to({ x: 0 }, 400).call(function () {
                    egret.Tween.get(_this.kImgTips).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticOut);
                    _this.initData();
                    _this.settingArr.forEach(function (item) {
                        var y = item.y;
                        egret.Tween.get(item, { loop: true }).to({ y: y - 30 }, 600).to({ y: y }, 400);
                    });
                });
                return [2 /*return*/];
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
                GuideStep.instance.moveHand(this.setting4.bind(this));
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.clickButton = function () {
        egret.log("点击");
        GuideStep.instance.clearHand();
        GuideStep.instance.moveHand(this.clickButton.bind(this));
    };
    /**
     *  @description 添加游戏事件
    */
    MainView.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgSwipe.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
        this.kImgSetting1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting1, this);
        this.kImgSetting2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting2, this);
        this.kImgSetting3.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting3, this);
        this.kImgSetting4.addEventListener(egret.TouchEvent.TOUCH_TAP, this.setting4, this);
        this.kImgRight.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeCard, this);
        this.kGrpChoice1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch1, this);
        this.kGrpChoice2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touch2, this);
        this.kBtnContinue.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    MainView.prototype.closeButton = function () {
        this.settingArr.forEach(function (item) { return item.visible = false; });
    };
    //637,113  1111,198
    MainView.prototype.setting1 = function () {
        var _this = this;
        if (this.buildArr[0])
            return;
        this.tempIndex = 0;
        this.showMenu(main_tree1, main_tree2);
        this.callBack1 = function () {
            _this.playAnimation(_this.kImgTree1);
            _this.playAnimation(_this.kImgTree3);
            _this.kImgTree1.visible = _this.kImgTree3.visible = true;
            _this.kImgTree2.visible = _this.kImgTree4.visible = false;
        };
        this.callBack2 = function () {
            _this.playAnimation(_this.kImgTree2);
            _this.playAnimation(_this.kImgTree4);
            _this.kImgTree1.visible = _this.kImgTree3.visible = false;
            _this.kImgTree2.visible = _this.kImgTree4.visible = true;
        };
    };
    MainView.prototype.setting2 = function () {
        var _this = this;
        if (this.buildArr[1])
            return;
        this.tempIndex = 1;
        this.showMenu(main_umbllera1, main_umbllera2);
        this.callBack1 = function () {
            _this.playAnimation(_this.kImgUmbllear1);
            _this.kImgUmbllear1.visible = true;
            _this.kImgUmbllear2.visible = false;
        };
        this.callBack2 = function () {
            _this.playAnimation(_this.kImgUmbllear2);
            _this.kImgUmbllear1.visible = false;
            _this.kImgUmbllear2.visible = true;
        };
    };
    MainView.prototype.setting3 = function () {
        var _this = this;
        if (this.buildArr[2])
            return;
        this.tempIndex = 2;
        this.showMenu(main_chair1, main_chair2);
        this.callBack1 = function () {
            _this.playAnimation(_this.kImgChair1);
            _this.kImgChair1.visible = true;
            _this.kImgChair2.visible = false;
        };
        this.callBack2 = function () {
            _this.playAnimation(_this.kImgChair2);
            _this.kImgChair1.visible = false;
            _this.kImgChair2.visible = true;
        };
    };
    MainView.prototype.setting4 = function () {
        var _this = this;
        if (this.buildArr[3])
            return;
        this.settingArr.forEach(function (item) { return item.touchEnabled = true; });
        this.kGrpPeople.visible = false;
        GuideStep.instance.clearHand();
        this.tempIndex = 3;
        this.showMenu(main_circle1, main_cirle2);
        this.callBack1 = function () {
            _this.playAnimation(_this.kImgPool1);
            _this.playAnimation(_this.kImgCirle1);
            _this.kImgPool1.visible = true;
            _this.kImgPool1.source = main_pool1;
            _this.kImgCirle1.visible = true;
            _this.kImgCirle2.visible = false;
        };
        this.callBack2 = function () {
            _this.playAnimation(_this.kImgPool1);
            _this.playAnimation(_this.kImgCirle2);
            _this.kImgPool1.visible = true;
            _this.kImgPool1.source = main_pool2;
            _this.kImgCirle1.visible = false;
            _this.kImgCirle2.visible = true;
        };
    };
    MainView.prototype.touch1 = function (a) {
        this.checkGuide(a);
        this.buildArr[this.tempIndex] = this.choiceType = 1;
        this.kImgLine1.source = main_checked;
        this.kImgLine2.source = main_check;
        this.callBack1();
    };
    MainView.prototype.checkGuide = function (a) {
        if (a) {
            egret.clearTimeout(this.tempTimer);
            egret.Tween.removeTweens(this.kImgHand);
            egret.Tween.removeTweens(this.kImgTips2);
            this.kImgTips2.visible = false;
            this.kImgHand.x = this.kGrpMenu.x + 470;
            this.kImgHand.y = this.kGrpMenu.y + 83;
            egret.Tween.get(this.kImgHand, { loop: true }).
                to({ scaleX: 1.1, scaleY: 1.1 }, 500, egret.Ease.quartInOut)
                .to({ scaleX: 0.8, scaleY: 0.8 }, 500, egret.Ease.quartInOut);
        }
    };
    MainView.prototype.touch2 = function (a) {
        this.checkGuide(a);
        this.buildArr[this.tempIndex] = this.choiceType = 2;
        this.kImgLine1.source = main_check;
        this.kImgLine2.source = main_checked;
        this.callBack2();
    };
    MainView.prototype.showMenu = function (source1, source2) {
        this.closeButton();
        egret.clearTimeout(this.tempTimer);
        this.setTimeCallBack(3000, this.showTips2.bind(this));
        this.kGrpMenu.visible = true;
        this.kImgChoice1.source = source1;
        this.kImgChoice2.source = source2;
        this.kGrpMenu.x = this.settingArr[this.tempIndex].x - 474;
        this.kGrpMenu.y = this.settingArr[this.tempIndex].y - 85;
        if (this.tempIndex == 3) {
            this.kGrpMenu.x = 478;
            this.kGrpMenu.y = 287;
        }
        if (this.tempIndex == 2) {
            this.kGrpMenu.x = 543;
            this.kGrpMenu.y = 512;
        }
        if (this.tempIndex == 1) {
            this.kGrpMenu.x = 269;
            this.kGrpMenu.y = 500;
        }
        this.kImgHand.visible = true;
        this.kImgHand.touchEnabled = this.kImgTips2.touchEnabled = false;
        this.kImgHand.x = this.kGrpMenu.x + 91;
        this.kImgHand.y = this.kGrpMenu.y + 63;
        var x = this.kImgHand.x;
        if (this.tempIndex === 3)
            egret.Tween.get(this.kImgHand, { loop: true }).call(this.touch1.bind(this)).wait(300).to({ x: x + 183 }, 500).call(this.touch2.bind(this)).wait(300).to({ x: x }, 500);
        else
            egret.Tween.get(this.kImgHand, { loop: true }).wait(300).to({ x: x + 183 }, 500).wait(300).to({ x: x }, 500);
    };
    MainView.prototype.closeCard = function () {
        var _this = this;
        if (this.buildArr[this.tempIndex]) {
            egret.Tween.removeTweens(this.kImgHand);
            this.kImgHand.visible = false;
            this.callBack1 = this.callBack2 = function () { };
            this.choiceType = 0;
            this.kImgLine1.source = this.kImgLine2.source = main_check;
            this.kGrpMenu.visible = false;
            this.buildArr.forEach(function (item, index) {
                if (item === 0)
                    _this.settingArr[index].visible = true;
            });
            this.checkSuccess();
        }
    };
    MainView.prototype.checkSuccess = function () {
        var arr = this.buildArr.filter(function (item) { return item === 0; });
        if (arr.length == 0) {
            this.openPlateForm();
            this.kGrpEnd.visible = true;
            egret.Tween.get(this.kBtnContinue, { loop: true }).to({ scaleX: 1.2, scaleY: 1.2 }, 300).to({ scaleX: 1, scaleY: 1 }, 100);
        }
        else {
            this.tempTimer = this.setTimeCallBack(3000, this.showTips2.bind(this));
        }
    };
    MainView.prototype.showTips2 = function () {
        this.kImgTips2.visible = true;
        egret.Tween.get(this.kImgTips2, { loop: true })
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
            .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1480);
    };
    MainView.prototype.playAnimation = function (target) {
        egret.Tween.removeTweens(target);
        target.scaleX = target.scaleY = 1;
        egret.Tween.get(target).to({ scaleX: 1.2, scaleY: 1.2 }, 250, egret.Ease.quartOut).to({ scaleX: 1, scaleY: 1 }, 100, egret.Ease.quartOut);
        this.playBuling(target.x, target.y, 300, 2);
    };
    MainView.prototype.playBuling = function (x, y, t, scale) {
        if (scale === void 0) { scale = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, starJson, star, x, y - 60, t)];
                    case 1:
                        system = _a.sent();
                        system.scaleX = system.scaleY = scale;
                        system.once(egret.Event.COMPLETE, function () { _this.kGrpAction.removeChild(system); system.stop(); system = null; }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.playSmog = function (t, x, y, target) {
        if (target === void 0) { target = null; }
        return __awaiter(this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, smoke_j, smoke, x, y)];
                    case 1:
                        system = _a.sent();
                        system.alpha = 0.4;
                        this.mcArr.push(system);
                        return [2 /*return*/];
                }
            });
        });
    };
    // //彩带动画
    // private playCaidai(num: number, delay: number) {
    //     let arr: eui.Image[] = [];
    //     let imgArr: string[] = [main_dai1, main_dai2, main_dai3,
    //         main_dai4, main_dai5, main_dai6,
    //         main_dai7, main_dai8, main_dai9,
    //         main_dai10];
    //     for (let i = 0; i < num; i++) {
    //         let img: eui.Image = new eui.Image(imgArr[Math.floor(Math.random() * 10)]);
    //         img.x = Math.floor(Math.random() * this.stage.width);
    //         img.y = 0;
    //         arr.push(img);
    //         let t = egret.setTimeout(() => {
    //             egret.clearTimeout(t);
    //             this.kGrpAction.addChild(img);
    //             egret.Tween.get(img).to({ rotation: Math.random() * 90 }, 300);
    //             egret.Tween.get(img).to({ y: this.stage.height }, 800).call(() => {
    //                 egret.Tween.removeTweens(img);
    //                 this.kGrpAction.removeChild(img);
    //             });
    //         }, this, delay * Math.random());
    //     }
    // }
    // //烟花动画
    // private playYanhua() {
    //     let t = Math.floor(Math.random() * 800);
    //     let arr = [main_yanhua_1, main_yanhua_2, main_yanhua_3];
    //     let tim = egret.setTimeout(() => {
    //         egret.clearTimeout(tim);
    //         let p: egret.Point = this.createPoint();
    //         let img: eui.Image = new eui.Image(arr[Math.floor(Math.random() * 3)]);
    //         img.anchorOffsetX = 102.5;
    //         img.anchorOffsetY = 96.5;
    //         img.scaleX = img.scaleY = 0;
    //         img.x = p.x;
    //         img.y = p.y;
    //         this.kGrpAction.addChild(img);
    //         egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(() => {
    //             egret.Tween.removeTweens(img);
    //             this.kGrpAction.removeChild(img);
    //         });
    //     }, this, t);
    // }
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
        if (window['ExitApi'])
            window['ExitApi'].exit();
        parent.postMessage('complete', '*');
    };
    //初始化游戏图片位置
    MainView.prototype.initPoint = function (img, str) {
        img.anchorOffsetX = img.width / 2;
        img.anchorOffsetY = img.height / 2;
        // img.x = jso[str][0] + img.anchorOffsetX;
        // img.y = jso[str][1] + img.anchorOffsetY;
    };
    //设置延迟回调
    MainView.prototype.setTimeCallBack = function (t, f) {
        var ti = egret.setTimeout(function () {
            egret.clearTimeout(ti);
            f();
        }, this, t);
        return ti;
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
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map