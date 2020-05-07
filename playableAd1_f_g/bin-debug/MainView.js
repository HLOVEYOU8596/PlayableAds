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
        _this.kProgress = new ProgressBar();
        _this.guideStep = 0;
        _this.arr = [new egret.Point(270, 544),
            new egret.Point(330, 440),
            new egret.Point(520, 509),
            new egret.Point(428, 509),
            new egret.Point(540, 440),
            new egret.Point(908, 374),
            new egret.Point(650, 510)];
        _this.kImgTapButton = new eui.Image(main_tap);
        // this.skinName = "MainViewSkin";
        _this.skinName = "MainViewDevSkin";
        _this.width = egret.MainContext.instance.stage.stageWidth;
        _this.height = egret.MainContext.instance.stage.stageHeight;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
        return _this;
        // this.addEventListener(egret,TouchEvent.)
    }
    MainView.prototype.initUI = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, McManger.instance.getMcAtH5('egg', egg_j, egg, 'egg')];
                    case 1:
                        _a.egg = (_d.sent());
                        _b = this;
                        return [4 /*yield*/, Dragon.createArmature(-300, 40, 'geek', this.kGrpPeople, geek_ske_j, geek_tex, geek_tex_j)];
                    case 2:
                        _b.geek = _d.sent();
                        this.geek.scaleX = this.geek.scaleY = 0.7;
                        _c = this;
                        return [4 /*yield*/, Dragon.createArmature(1280, 200, 'gramma', this.kGrpPeople, gramma_ske_j, gramma_tex, gramma_tex_j)];
                    case 3:
                        _c.gramma = _d.sent();
                        this.gramma.animation.play('walk_happy', 0);
                        this.geek.animation.play('walk_happy', 0);
                        this.gramma.scaleX = this.gramma.scaleY = 0.9;
                        this.kProgress.x = 348;
                        this.kProgress.y = 0;
                        this.kGrpProgress.addChild(this.kProgress);
                        //base64纹理赋值
                        // this.rect.source = rect;
                        // this.kImgMan.source = main_grampa_normal;
                        // this.kImgWoman.source = main_aunt_normal;
                        this.kImgArrow.source = main_guide_arrow;
                        this.kImgFood1.source = main_drumstick_0;
                        this.kImgFood2.source = this.kImgRight0.source = main_coke2;
                        this.kImgCoin.source = this.kImgCoin0.source = main_icon_coin;
                        this.kImgAlert.source = this.kImgAlert0.source = main_alert_bg;
                        this.kImgRight.source = main_coke1;
                        this.kImgBg1.source = main_bg1;
                        this.kImgBg2.source = main_bg2;
                        this.kImgBg3.source = main_bg3;
                        this.kImgXu.source = main_xuxian;
                        // this.kImgPlayNow.source = main_button;
                        this.kImgLogo1.source = main_logo1;
                        this.kImgLogo2.source = main_logo2;
                        this.kImgFu0.source = main_food3;
                        this.kImgFu.source = main_food2;
                        this.kImgTopic.source = main_rock;
                        this.main_reward_bg.source = main_reward_bg;
                        // this.kLbEnd.alpha = 0;
                        // if(!window["mraid"])this.kImgPlayNow.visible = false;
                        this.kImgArrow.touchEnabled = false;
                        this.playStartAni();
                        this.addEvents();
                        return [2 /*return*/];
                }
            });
        });
    };
    //入场动画
    MainView.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // this.system = await ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
                egret.Tween.get(this.gramma).to({ x: 840 }, 400, egret.Ease.cubicOut).call(function () {
                    _this.gramma.animation.play('stand', 0);
                    var maskIcon = new egret.Shape();
                    maskIcon.graphics.beginFill(0x000000, 1);
                    maskIcon.graphics.drawCircle(0, 0, 85);
                    maskIcon.graphics.endFill();
                    maskIcon.x = 242;
                    maskIcon.y = 542;
                    // maskIcon.scaleY = 0.6;
                    //-------------------------------------------------------------------------
                    var guide = new two.Guide();
                    guide.init(maskIcon, 1136, 640, _this.arr);
                    _this.kGrpAction.addChild(guide);
                    _this.kGrpAlert.visible = true;
                    // this.kGrpRect.visible = true;
                    _this.kImgXu.visible = true;
                    // this.moveHand();
                    _this.guide = new GuideStep();
                    _this.guide.init(_this.kGrpGuide, _this.arr);
                    _this.guide.moveHand(_this.touchFirst.bind(_this));
                });
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.addEvents = function () {
        // this.kImgXu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFirst, this);
        // this.kImgFood1.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchSecond, this);
        // this.kImgArrow.addEventListener(egret.TouchEvent.TOUCH_TAP, this.touchThird, this);
        // // this.kImgFu.addEventListener(egret.TouchEvent.TOUCH_TAP,this.touchFouth,this);
        // this.kImgFood2.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onCompleteFood, this);
        // this.kImgPlayNow.addEventListener(egret.TouchEvent.TOUCH_TAP,this.openPlateForm,this);
        this.addEventListener(egret.Event.CHANGE, this.onRotation, this);
        egret.MainContext.instance.stage.addEventListener(egret.Event.RESIZE, this.onRotation, this);
    };
    MainView.prototype.touchFirst = function () {
        var _this = this;
        this.kGrpAction.removeChildren();
        this.kImgXu.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchFirst, this);
        this.kImgXu.visible = false;
        this.kGrpRect.visible = false;
        this.guide.clearHand();
        this.kGrpFood1.addChild(this.egg);
        this.egg.frameRate = 24;
        this.egg.gotoAndPlay(0, 1);
        this.egg.x = 40;
        this.egg.y = -60;
        this.egg.scaleX = this.egg.scaleY = 0.85;
        this.egg.once(egret.Event.COMPLETE, function () {
            _this.kGrpFood1.removeChild(_this.egg);
            _this.egg = null;
            _this.kImgFood1.source = main_drumstick_1;
            _this.kImgFood1.scaleX = _this.kImgFood1.scaleY = 1;
            _this.guide.moveHand(_this.touchSecond.bind(_this));
            _this.kImgFood1.touchEnabled = true;
        }, this);
        //x:218,y320
        // egret.Tween.get(this.kImgFood1).to({ scaleX: 1, scaleY: 1 }, 400, egret.Ease.elasticIn).call(() => {
        //TODO  播放进度条代码，传入回调
        this.setProgress(200, function () {
            // this.kImgFood1.source = main_drumstick_1;
            // this.guide.moveHand(this.touchSecond.bind(this));
            // this.kImgFood1.touchEnabled = true;
        }, 300, 280);
        // });
    };
    MainView.prototype.touchSecond = function () {
        var _this = this;
        this.guide.clearHand();
        this.kImgFood1.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.touchSecond, this);
        //x:450,y:336
        egret.Tween.get(this.kGrpFood1).to({ x: 495, y: 385 }, 300, egret.Ease.sineOut).call(function () {
            _this.kImgFood1.source = main_drumstick_2;
            // this.kImgFood1.scaleX = this.kImgFood1.scaleY = 0.6;
            egret.Tween.get(_this.geek).to({ x: 200 }, 400, egret.Ease.cubicOut).call(function () {
                _this.kGrpAlert0.visible = true;
                _this.geek.animation.play('stand', 0);
                _this.guide.moveHand(_this.touchThird.bind(_this));
                _this.kImgFood2.visible = true;
                _this.kImgFood2.scaleX = _this.kImgFood2.scaleY = 0;
                egret.Tween.get(_this.kImgFood2).to({ scaleX: 0.5, scaleY: 0.5 }, 400);
                _this.setProgress(400, function () {
                    egret.Tween.get(_this.kImgFood2).to({ x: 884, y: 369, scaleX: 1, scaleY: 1 }, 300, egret.Ease.sineIn);
                    _this.kImgArrow.touchEnabled = true;
                }, 1000, 520);
            });
        });
    };
    MainView.prototype.touchThird = function () {
        var _this = this;
        this.kImgArrow.touchEnabled = false;
        this.guide.clearHand();
        egret.Tween.get(this.kImgFu).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut).call(function () {
            _this.guide.moveHand(_this.touchAdd.bind(_this));
        });
    };
    MainView.prototype.touchAdd = function () {
        var _this = this;
        this.guide.clearHand();
        egret.Tween.get(this.kImgFu0).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut).call(function () {
            _this.guide.moveHand(_this.touchFouth.bind(_this));
        });
    };
    MainView.prototype.touchFouth = function () {
        var _this = this;
        this.guide.clearHand();
        //x:633,y:131,0.8
        egret.Tween.get(this.kGrpFood1).to({ x: 690, y: 170 }, 300, egret.Ease.sineOut).to({ scaleX: 0.68, scaleY: 0.68 }, 100).wait(100).call(function () {
            _this.gramma.animation.play('happy', 0);
            _this.kGrpFood1.visible = false;
            _this.kImgRight.source = main_right;
            _this.kImgCoin.visible = true;
            _this.playFlyCoin(new egret.Point(675, 210), new egret.Point(340, 0), function () {
                _this.kProgress.value += 50;
                _this.kGrpAlert.visible = false;
                _this.gramma.visible = false;
                if (_this.kProgress.value == 50) {
                    // this.guide.moveHand(this.onCompleteFood.bind(this));
                    _this.guide.moveHand(_this.openPlateForm.bind(_this));
                    _this.showButton();
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
        // egret.Tween.get(this.kImgFu).to({ x: 636, y: 224 }, 1000, egret.Ease.sineOut).to({ scaleX: 0.85, scaleY: 0.85 }, 300);
    };
    MainView.prototype.onCompleteFood = function () {
        var _this = this;
        if (this.kProgress.value === 50)
            this.guide.clearHand();
        egret.Tween.get(this.kImgFood2).to({ x: 420, y: 172 }, 300, egret.Ease.sineOut).to({ scaleX: 0.7, scaleY: 0.7 }, 100).wait(100).call(function () {
            _this.geek.animation.play('happy', 0);
            _this.kImgFood2.visible = false;
            _this.kImgRight0.source = main_right;
            _this.kImgRight0.scaleX = _this.kImgRight0.scaleY = 1;
            _this.kImgCoin0.visible = true;
            //TODO 飞金币动画
            _this.playFlyCoin(new egret.Point(400, 210), new egret.Point(340, 0), function () {
                _this.kProgress.value += 50;
                _this.geek.visible = false;
                _this.kGrpAlert0.visible = false;
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
        var _this = this;
        var distance = 6; /// 阴影的偏移距离，以像素为单位
        var angle = 45; /// 阴影的角度，0 到 360 度
        var color = 0x000000; /// 阴影的颜色，不包含透明度
        var alpha = 0.7; /// 光晕的颜色透明度，是对 color 参数的透明度设定
        var blurX = 16; /// 水平模糊量。有效值为 0 到 255.0（浮点）
        var blurY = 16; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
        var strength = 0.65; /// 压印的强度，值越大，压印的颜色越深，而且阴影与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
        var quality = 1 /* LOW */; /// 应用滤镜的次数，暂无实现
        var inner = false; /// 指定发光是否为内侧发光
        var knockout = false; /// 指定对象是否具有挖空效果
        var dropShadowFilter = new egret.DropShadowFilter(distance, angle, color, alpha, blurX, blurY, strength, quality, inner, knockout);
        console.log("set Progress");
        var progress = new CircleTimer(12, false, 0x11c668, 1);
        var progress1 = new CircleTimer(18, false, 0xffffff, 1);
        progress.x = x + 6;
        progress.y = y + 6;
        progress1.x = x;
        progress1.y = y;
        progress1.filters = [dropShadowFilter];
        this.kGrpAction.addChild(progress1);
        this.kGrpAction.addChild(progress);
        var n = t / 100;
        var a = 0;
        var tim = egret.setInterval(function () {
            a++;
            progress.percent = a / 100;
            progress1.percent = a / 100;
            if (a === 100) {
                egret.clearInterval(tim);
                _this.kGrpAction.removeChild(progress);
                _this.kGrpAction.removeChild(progress1);
                f();
            }
        }, this, n);
    };
    MainView.prototype.playFlyCoin = function (start, end, f) {
        var _this = this;
        var arr = [];
        var num = 20;
        var a = 0;
        for (var i = 0; i < num; i++) {
            var img = new eui.Image(main_icon_coin);
            // img.x = start.x - (egret.MainContext.instance.stage.stageWidth - 1136) / 2 - this.kImgCoin.width - 15;
            // img.y = start.y - (egret.MainContext.instance.stage.stageHeight - 640) / 2;
            img.x = start.x;
            img.y = start.y;
            this.kGrpCoin.addChild(img);
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
                    _this.kGrpCoin.removeChild(arr[a_1]);
                }
            }
        }, this, 40);
    };
    MainView.prototype.playEndAni = function () {
        var _this = this;
        // this.system.stop();
        this.kGrpEnd.visible = true;
        // this.kLbEnd.alpha = 0;
        //播放烟花动画
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        egret.Tween.get(this.kLbEnd).wait(1500).call(function () {
            // this.kImgPlayNow.visible = false;
            _this.guide.moveHand(function () {
                _this.openPlateForm();
            });
            _this.kImgLogo2.scaleX = _this.kImgLogo2.scaleY = _this.kImgLogo1.scaleX = _this.kImgLogo1.scaleY = 0.8;
            _this.playToggleA();
            _this.guide.moveHand(_this.openPlateForm.bind(_this));
            _this.kImgLogo1.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.openPlateForm, _this);
            _this.kImgLogo2.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.openPlateForm, _this);
            // this.addEventListener(egret.TouchEvent.TOUCH_TAP, () => { window["dapi"].openStoreUrl() }, this);
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
        return new egret.Point(200 + Math.floor(Math.random() * 736), 100 + Math.floor(Math.random() * 440));
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
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(function () {
                egret.Tween.removeTweens(img);
                _this.kGrpEnd.removeChild(img);
            });
        }, this, t);
    };
    //屏幕旋转
    MainView.prototype.onRotation = function (event) {
        var _this = this;
        // alert("resize")
        //此处需要重置Ui
        var t = egret.setTimeout(function () {
            _this.width = egret.MainContext.instance.stage.stageWidth;
            _this.height = egret.MainContext.instance.stage.stageHeight;
            _this.x = _this.y = 0;
            _this.scaleX = _this.scaleY = 1;
        }, this, 800);
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
    //ad5pancake_huafang_choose_z
    MainView.prototype.showButton = function () {
        var _this = this;
        this.kImgTapButton.addEventListener(egret.TouchEvent.TOUCH_TAP, this.openPlateForm, this);
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