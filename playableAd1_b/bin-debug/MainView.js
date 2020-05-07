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
    // private progress:CircleTimer;
    function MainView() {
        var _this = _super.call(this) || this;
        _this.kProgress = new ProgressBar();
        _this.mcArr = [];
        _this.guideStep = 0;
        _this.arr = [new egret.Point(210, 544),
            new egret.Point(330, 400),
            new egret.Point(570, 509),
            new egret.Point(540, 397),
            new egret.Point(908, 374),
            new egret.Point(600, 477)];
        _this.kImgTapButton = new eui.Image(main_tap);
        _this.skinName = "MainViewSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
    }
    MainView.prototype.initUI = function () {
        this.kProgress.x = 348;
        this.kProgress.y = 0;
        this.kGrpProgress.addChild(this.kProgress);
        //base64纹理赋值
        this.kImgMan.source = main_grampa_normal;
        this.kImgWoman.source = main_aunt_normal;
        this.kImgArrow.source = main_guide_arrow;
        this.kImgFood1.source = main_drumstick_0;
        this.kImgFood2.source = this.kImgRight0.source = main_coke2;
        this.kImgCoin.source = this.kImgCoin0.source = main_icon_coin;
        this.kImgAlert.source = this.kImgAlert0.source = main_alert_bg;
        this.kImgRight.source = main_order1;
        this.kImgBg1.source = main_bg1;
        this.kImgBg2.source = main_bg2;
        this.kImgBg3.source = main_bg3;
        this.main_reward_bg.source = main_reward_bg;
        this.main_drumstick_1.source = main_drumstick_1;
        this.kImgFu.source = main_food_fu;
        this.kImgXu.source = main_xuxian;
        this.kImgLogo1.source = main_logo1;
        this.kImgLogo2.source = main_logo2;
        // this.kImgTopic.source = main_rock;
        this.kImgTopic.scaleX = this.kImgTopic.scaleY = 0.8;
        this.kImgArrow.touchEnabled = false;
        this.playStartAni();
        this.addEvents();
        this.height = egret.MainContext.instance.stage.stageHeight;
        this.width = egret.MainContext.instance.stage.stageWidth;
        this.scaleX = this.scaleY = 1;
        this.x = this.y = 0;
    };
    //入场动画
    MainView.prototype.playStartAni = function () {
        var _this = this;
        this.playBgm();
        egret.Tween.get(this.kImgMan).to({ x: 800 }, 600, egret.Ease.cubicOut).call(function () {
            var maskIcon = new egret.Shape();
            maskIcon.graphics.beginFill(0x000000, 1);
            maskIcon.graphics.drawCircle(0, 0, 85);
            maskIcon.graphics.endFill();
            maskIcon.x = 212;
            maskIcon.y = 542;
            // maskIcon.scaleY = 0.6;
            //-------------------------------------------------------------------------
            var guide = new two.Guide();
            guide.init(maskIcon, _this.stage.stageWidth, _this.stage.stageHeight);
            _this.kGrpAction.addChild(guide);
            _this.kGrpAlert.visible = true;
            // this.kGrpRect.visible = true; 
            _this.kImgXu.visible = true;
            // this.moveHand();
            _this.guide = new GuideStep();
            _this.guide.init(_this.kGrpGuide, _this.arr);
            _this.guide.moveHand(_this.touchFirst.bind(_this));
            //下雪了，想必雪人也会冷的吧
            // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow, 0, 0);
        });
        // egret.Tween.removeTweens(this.kImgMan);
        // egret.Tween.get(this.kImgMan,{loop:true})
        // .to({scaleX:0.9,scaleY:0.9},700,egret.Ease.backIn)
        // .to({scaleX:1,scaleY:1},700,egret.Ease.backOut);
    };
    MainView.prototype.addEvents = function () {
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
    };
    MainView.prototype.touchFirst = function () {
        var _this = this;
        this.kGrpAction.removeChildren();
        // this.kImgXu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFirst, this);
        this.kImgFood1.visible = true;
        this.kImgFood1.touchEnabled = false;
        this.kImgXu.visible = false;
        this.kGrpRect.visible = false;
        this.guide.clearHand();
        egret.Tween.get(this.kImgFood1).to({ x: 228, y: 300 }, 400, egret.Ease.sineIn).call(function () {
            //TODO  播放进度条代码，传入回调
            _this.playSmog(1000, 240, 350);
            _this.playFei(1000, 240, 375);
            _this.playSoil();
            _this.setProgress(1000, function () {
                _this.kImgFood1.source = main_drumstick_1;
                _this.guide.moveHand(_this.touchSecond.bind(_this));
                _this.kImgFood1.touchEnabled = true;
            }, 280, 260);
        });
    };
    MainView.prototype.touchSecond = function () {
        var _this = this;
        this.kGrpMain.setChildIndex(this.kGrpAlert, this.kGrpMain.getChildIndex(this.kImgBg2) + 1);
        this.kGrpMain.setChildIndex(this.kGrpAlert0, this.kGrpMain.getChildIndex(this.kImgBg2) + 1);
        this.guide.clearHand();
        this.clearMc();
        this.soil.close();
        egret.Tween.get(this.kImgFood1).to({ x: 436, y: 296 }, 400, egret.Ease.sineOut).call(function () {
            _this.kImgFood1.source = main_drumstick_2;
            egret.Tween.get(_this.kImgWoman).to({ x: 300 }, 400, egret.Ease.cubicOut).call(function () {
                _this.kGrpAlert0.visible = true;
                _this.guide.moveHand(_this.touchThird.bind(_this));
                _this.kImgFood2.visible = true;
                _this.kImgFood2.scaleX = _this.kImgFood2.scaleY = 0;
                egret.Tween.get(_this.kImgFood2).to({ scaleX: 0.5, scaleY: 0.5 }, 600);
                _this.setProgress(1000, function () {
                    egret.Tween.get(_this.kImgFood2).to({ x: 884, y: 329, scaleX: 1, scaleY: 1 }, 400, egret.Ease.sineIn);
                    _this.kImgArrow.touchEnabled = true;
                    _this.playBubble(890, 380);
                    _this.soundBubble();
                }, 900, 540);
            });
        });
    };
    MainView.prototype.touchThird = function () {
        var _this = this;
        this.kImgArrow.touchEnabled = false;
        this.guide.clearHand();
        this.kImgFu.visible = true;
        this.kImgFu.scaleX = this.kImgFu.scaleY = 0;
        // this.kImgFood1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchSecond, this);
        // this.kImgFood1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFouth, this);
        egret.Tween.get(this.kImgFu).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.sineIn).call(function () {
            _this.guide.moveHand(_this.touchFouth.bind(_this));
        });
    };
    MainView.prototype.touchFouth = function () {
        var _this = this;
        this.guide.clearHand();
        egret.Tween.get(this.kImgFood1).to({ x: 597, y: 121 }, 300, egret.Ease.sineOut).to({ scaleX: 0.85, scaleY: 0.85 }, 100).wait(100).call(function () {
            _this.kImgFood1.visible = false;
            _this.kImgFu.visible = false;
            _this.kImgRight.source = main_right;
            _this.kImgRight.x = 97;
            _this.kImgRight.y = 185;
            _this.kImgCoin.visible = true;
            _this.playFlyCoin(_this.kImgCoin.localToGlobal(), new egret.Point(340, 0), function () {
                _this.kProgress.value += 50;
                if (_this.kProgress.value == 50) {
                    // this.guide.moveHand(this.openPlateForm.bind(this));
                    _this.guide.moveHand(_this.onCompleteFood.bind(_this));
                    // this.showButton();
                }
                else if (_this.kProgress.value == 100) {
                    _this.guide.moveHand(function () { });
                    _this.guide.clearHand();
                    //TODO 播放结束动画
                    egret.log("play end Ani");
                    _this.playEndAni();
                }
            });
        });
        egret.Tween.get(this.kImgFu).to({ x: 636, y: 224 }, 300, egret.Ease.sineOut).to({ scaleX: 0.85, scaleY: 0.85 }, 100);
    };
    MainView.prototype.onCompleteFood = function () {
        var _this = this;
        if (this.kProgress.value == 50)
            this.guide.clearHand();
        // if(this.kProgress.value != 0){
        this.clearMc();
        egret.Tween.get(this.kImgFood2).to({ x: 389, y: 172 }, 300, egret.Ease.sineOut).to({ scaleX: 0.7, scaleY: 0.7 }, 100).wait(100).call(function () {
            _this.kImgFood2.visible = false;
            _this.kImgRight0.source = main_right;
            _this.kImgRight0.scaleX = _this.kImgRight0.scaleY = 1;
            _this.kImgCoin0.visible = true;
            //TODO 飞金币动画
            _this.playFlyCoin(_this.kImgCoin0.localToGlobal(), new egret.Point(340, 0), function () {
                _this.kProgress.value += 50;
                if (_this.kProgress.value == 100) {
                    //TODO 播放结束动画
                    egret.log("play end Ani");
                    _this.playEndAni();
                }
            });
        });
        // }
    };
    MainView.prototype.setProgress = function (t, f, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var mm;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc)];
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
    MainView.prototype.playFei = function (t, x, y) {
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
                        mm.once(egret.Event.COMPLETE, function () {
                            // this.kGrpAction.removeChild(mm);
                        }, this);
                        this.mcArr.push(mm);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.playSmog = function (t, x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, smJson, sm, -180, -180)];
                    case 1:
                        _a.system = (_b.sent());
                        this.system.alpha = 0.45;
                        this.mcArr.push(this.system);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.playBubble = function (x, y) {
        return __awaiter(this, void 0, void 0, function () {
            var system;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpAction, bubbleJson, bubble, x, y)];
                    case 1:
                        system = _a.sent();
                        system.scaleX = system.scaleY = 0.2;
                        this.mcArr.push(system);
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.clearMc = function () {
        var _this = this;
        this.mcArr.forEach(function (item) {
            _this.kGrpAction.removeChild(item);
        });
        this.mcArr = [];
    };
    // private setProgress(t: number, f: Function, x, y) {
    //     var distance: number = 6;           /// 阴影的偏移距离，以像素为单位
    //     var angle: number = 45;              /// 阴影的角度，0 到 360 度
    //     var color: number = 0x000000;        /// 阴影的颜色，不包含透明度
    //     var alpha: number = 0.7;             /// 光晕的颜色透明度，是对 color 参数的透明度设定
    //     var blurX: number = 16;              /// 水平模糊量。有效值为 0 到 255.0（浮点）
    //     var blurY: number = 16;              /// 垂直模糊量。有效值为 0 到 255.0（浮点）
    //     var strength: number = 0.65;                /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
    //     var quality: number = egret.BitmapFilterQuality.LOW;              /// 应用滤镜的次数，暂无实现
    //     var inner: boolean = false;            /// 指定发光是否为内侧发光
    //     var knockout: boolean = false;            /// 指定对象是否具有挖空效果
    //     var dropShadowFilter: egret.DropShadowFilter = new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY,
    //         strength, quality, inner, knockout);
    //     console.log("set Progress");
    //     let progress = new CircleTimer(12, false, 0x11c668, 1);
    //     let progress1 = new CircleTimer(18, false, 0xffffff, 1);
    //     progress.x = x + 6;
    //     progress.y = y + 6;
    //     progress1.x = x;
    //     progress1.y = y;
    //     progress1.filters = [dropShadowFilter];
    //     this.kGrpAction.addChild(progress1);
    //     this.kGrpAction.addChild(progress);
    //     let n: number = t / 50;
    //     let a = 0;
    //     let tim = egret.setInterval(() => {
    //         a++;
    //         progress.percent = a / 50;
    //         progress1.percent = a / 50;
    //         if (a === 50) {
    //             egret.clearInterval(tim);
    //             this.kGrpAction.removeChild(progress);
    //             this.kGrpAction.removeChild(progress1);
    //             f();
    //         }
    //     }, this, n);
    // }
    MainView.prototype.playFlyCoin = function (start, end, f) {
        var _this = this;
        var arr = [];
        var num = 20;
        var a = 0;
        for (var i = 0; i < num; i++) {
            var img = new eui.Image(main_icon_coin);
            img.x = start.x - (egret.MainContext.instance.stage.stageWidth - 1136) / 2;
            img.y = start.y - (egret.MainContext.instance.stage.stageHeight - 640) / 2;
            this.kGrpCoin.addChild(img);
            arr.push(img);
        }
        var t = egret.setInterval(function () {
            egret.Tween.get(arr[a]).to({ x: end.x, y: end.y }, 200);
            a++;
            if (a == 20) {
                egret.clearInterval(t);
                f();
                for (var a_1 = 0; a_1 < arr.length; a_1++) {
                    egret.Tween.removeTweens(arr[a_1]);
                    _this.kGrpCoin.removeChild(arr[a_1]);
                }
            }
        }, this, 40);
    };
    MainView.prototype.playEndAni = function () {
        var _this = this;
        this.kGrpEnd.visible = true;
        this.kLbEnd.alpha = 0;
        //播放烟花动画
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        // egret.Tween.get(this.kLbEnd).to({ alpha: 1 }, 500).wait(2000).call(() => {
        egret.Tween.get(this.kLbEnd).wait(2000).call(function () {
            _this.kImgLogo2.scaleX = _this.kImgLogo2.scaleY = _this.kImgLogo1.scaleX = _this.kImgLogo1.scaleY = 0.8;
            _this.playToggleA();
            _this.guide.moveHand(function () { });
            _this.kImgLogo1.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.openPlateForm, _this);
            _this.kImgLogo2.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.openPlateForm, _this);
            egret.Tween.get(_this.kImgTopic, { loop: true })
                .to({ rotation: 3 }, 150, egret.Ease.circInOut).to({ rotation: -6 }, 300, egret.Ease.circInOut).to({ rotation: 0 }, 150, egret.Ease.circInOut)
                .to({ rotation: 3 }, 150, egret.Ease.circInOut).to({ rotation: -6 }, 300, egret.Ease.circInOut).to({ rotation: 0 }, 150, egret.Ease.circInOut)
                .wait(2000);
            _this.kGrpBg3.visible = true;
        });
    };
    MainView.prototype.playToggleA = function () {
        var _this = this;
        egret.Tween.get(this.kImgLogo1).to({ scaleX: 1, scaleY: 1 }, 300).wait(200).to({ scaleX: 0.8, scaleY: 0.8 }, 100).wait(900).call(function () {
            _this.playToggleB();
        });
    };
    MainView.prototype.playToggleB = function () {
        var _this = this;
        egret.Tween.get(this.kImgLogo2).to({ scaleX: 1, scaleY: 1 }, 300).wait(200).to({ scaleX: 0.8, scaleY: 0.8 }, 100).wait(900).call(function () {
            _this.playToggleA();
        });
    };
    //产生随机点
    MainView.prototype.createPoint = function () {
        return new egret.Point(Math.floor(Math.random() * 1136), Math.floor(Math.random() * 640));
    };
    //烟花动画
    MainView.prototype.playYanhua = function () {
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
            _this.kGrpEnd.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quartOut).to({ alpha: 0 }, 600).call(function () {
                egret.Tween.removeTweens(img);
                _this.kGrpEnd.removeChild(img);
            });
        }, this, t);
    };
    MainView.prototype.playBgm = function () {
        var sound = new egret.Sound();
        sound.load(SoundConst.bgm1);
        sound.addEventListener(egret.Event.COMPLETE, function () {
            sound.play(0, -1);
        }, this);
    };
    MainView.prototype.playSoil = function () {
        var sound = new egret.Sound();
        sound.load(SoundConst.soil);
        this.soil = sound;
        sound.addEventListener(egret.Event.COMPLETE, function () {
            sound.play(0, -1);
        }, this);
    };
    MainView.prototype.soundBubble = function () {
        var sound = new egret.Sound();
        sound.load(SoundConst.bubble);
        this.bubble = sound;
        sound.addEventListener(egret.Event.COMPLETE, function () {
            sound.play(0, -1);
        }, this);
    };
    MainView.prototype.onRotation = function () {
        var _this = this;
        var t = egret.setTimeout(function () {
            _this.height = egret.MainContext.instance.stage.stageHeight;
            _this.width = egret.MainContext.instance.stage.stageWidth;
            _this.scaleX = _this.scaleY = 1;
            _this.x = _this.y = 0;
            egret.clearTimeout(t);
        }, this, 500);
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
    MainView.prototype.showButton = function () {
        var _this = this;
        this.kGrpGuide.addChild(this.kImgTapButton);
        this.kImgTapButton.horizontalCenter = 0;
        this.kImgTapButton.verticalCenter = 50;
        this.kImgTapButton.scaleX = this.kImgTapButton.scaleY = 0;
        egret.Tween.get(this.kImgTapButton).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgTapButton);
            egret.Tween.get(_this.kImgTapButton, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
        });
    };
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map