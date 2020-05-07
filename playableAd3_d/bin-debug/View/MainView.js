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
        _this.guideArr = [new egret.Point(577, 632), new egret.Point(577, 632), new egret.Point(577, 632),
            new egret.Point(724, 632), new egret.Point(724, 632), new egret.Point(724, 632),
            new egret.Point(506, 534), new egret.Point(538, 274), new egret.Point(710, 536),
            new egret.Point(662, 276), new egret.Point(934, 524), new egret.Point(796, 284),];
        _this.clickNum = 0; //点击次数
        _this.swiperNum = 0; //滑动次数
        _this.endType = false;
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
                drum.setData({ status: 1, filter: this.filter });
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
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
        this.playStartAni();
        this.addEvents();
    };
    /**
     *  @description 播放入场动画
     */
    MainView.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var action1, action2, action3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc, 'fire')];
                    case 1:
                        action1 = _a.sent();
                        return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc, 'fire')];
                    case 2:
                        action2 = _a.sent();
                        return [4 /*yield*/, McManger.instance.getMcAtH5('mc', mcJson, mc, 'fire')];
                    case 3:
                        action3 = _a.sent();
                        this.kGrpAction.addChild(action1);
                        this.addChild(action2);
                        this.addChild(action3);
                        action1.gotoAndPlay(0, -1);
                        action2.gotoAndPlay(0, -1);
                        action3.gotoAndPlay(0, -1);
                        action1.x = 350;
                        action1.y = 240;
                        action2.x = 300;
                        action2.y = 310;
                        action3.x = 250;
                        action3.y = 400;
                        action1.frameRate = action2.frameRate = action3.frameRate = 8;
                        action1.scaleX = action1.scaleY = action2.scaleX = action2.scaleY = action3.scaleX = action3.scaleY = 1;
                        //281 697
                        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(function () {
                            egret.Tween.removeTweens(_this.kGrpPeople2);
                            _this.kGrpMenu2.visible = true;
                            _this.kGrpMenu2.scaleX = _this.kGrpMenu2.scaleY = 0;
                            egret.Tween.get(_this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                        });
                        this.setTimeCallBack(500, function () {
                            egret.Tween.get(_this.kGrpPeople1).to({ x: 281 }, 280).call(function () {
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
        var _this = this;
        if (this.clickNum == 0)
            SoundManager.instance.playBg(SoundConst.bgm);
        egret.log("点击");
        var char = (2 + Math.floor(this.clickNum / 3)).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        for (var i = 0; i < 3; i++)
            this.drumArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3]["showImg" + char]();
        if (this.clickNum == 6) {
            this.setTimeCallBack(600, function () {
                GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
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
    };
    MainView.prototype.conacthHam = function () {
        var _this = this;
        this.swiperNum++;
        GuideStep.instance.clearHand();
        var arr = [new egret.Point(541, 332), new egret.Point(957, 332), new egret.Point(957, 332)];
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
                        egret.Tween.get(this.drumArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 567 : 987, y: 105, scaleX: 0.6, scaleY: 0.6 }, 150).call(function () {
                            _this.drumArr[9 - _this.swiperNum].visible = false;
                        });
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, arr[this.swiperNum - 1].x, arr[this.swiperNum - 1].y - 200, 700)];
                    case 1:
                        x = _a.sent();
                        SoundManager.instance.playEffect(SoundConst.sfx_get_coins);
                        this.setTimeCallBack(700, function () {
                            x["stop"]();
                            if (_this.swiperNum == 1) {
                                _this.kGrpMenu1.visible = false;
                                GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
                            }
                            else if (_this.swiperNum == 2) {
                                _this.kImgNum2.source = main_x3;
                                if (!_this.endType) {
                                    // GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                                    _this.kImgSwipe.visible = true;
                                    _this.kImgSwipe.scaleX = _this.kImgSwipe.scaleY = 0;
                                    egret.Tween.get(_this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
                                        egret.Tween.removeTweens(_this.kImgSwipe);
                                        egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
                                    });
                                }
                                else {
                                    GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
                                }
                            }
                            else {
                                _this.kGrpMenu2.visible = false;
                                _this.stage.addChild(GameEnd.instance);
                                _this.stage.removeChild(_this);
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
    MainView.prototype.playShade = function () {
        var vertexSrc = "attribute vec2 aVertexPosition;\n" +
            "attribute vec2 aTextureCoord;\n" +
            "attribute vec2 aColor;\n" +
            "uniform vec2 projectionVector;\n" +
            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +
            "const vec2 center = vec2(-1.0, 1.0);\n" +
            "void main(void) {\n" +
            "   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n" +
            "   vTextureCoord = aTextureCoord;\n" +
            "   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n" +
            "}";
        var fragmentSrc = "precision lowp float;\n" +
            "varying vec2 vTextureCoord;\n" +
            "varying vec4 vColor;\n" +
            "uniform sampler2D uSampler;\n" +
            "uniform float customUniform;\n" +
            "void main(void) {\n" +
            "vec2 uvs = vTextureCoord.xy;\n" +
            "vec4 fg = texture2D(uSampler, vTextureCoord);\n" +
            "fg.rgb += sin(customUniform + uvs.x * 2. + uvs.y * 2.) * 0.2;\n" +
            "gl_FragColor = fg * vColor;\n" +
            "}";
        var customFilter = new egret.CustomFilter(vertexSrc, fragmentSrc, {
            customUniform: 0
        });
        this.addEventListener(egret.Event.ENTER_FRAME, function () {
            customFilter.uniforms.customUniform += 0.13;
            if (customFilter.uniforms.customUniform > Math.PI * 2) {
                customFilter.uniforms.customUniform = 0.0;
            }
        }, this);
        this.filter = customFilter;
    };
    MainView.prototype.playTest = function () {
        var _this = this;
        var shape = new egret.Shape();
        shape.width = 1280;
        shape.height = 720;
        this.addChild(shape);
        /******** 开始绘制 ********/
        var gra = shape.graphics;
        gra.beginFill(0x000000);
        gra.drawRect(0, 0, 1280, 720);
        gra.endFill();
        var tim = new egret.Timer(20);
        //r=a
        tim.start();
        var a = 0;
        tim.addEventListener(egret.TimerEvent.TIMER, function () {
            a++;
            var point = new egret.Point(640, 320);
            var p = Math.PI;
            var e = Math.E;
            var radios = a * p / 180;
            point.x = point.x + 20 * e * Math.sin(25 * radios / 23) * Math.cos(radios);
            point.y = point.y + 20 * e * Math.sin(25 * radios / 23) * Math.sin(radios);
            _this.drawCirle(gra, point.x, point.y, 1);
        }, this);
    };
    MainView.prototype.drawCirle = function (gra, x, y, r) {
        gra.lineStyle(3, 0xff0000, 1);
        gra.drawCircle(x, y, r);
        gra.endFill();
    };
    MainView.prototype.showArea = function (x, y, w, h) {
        var rect1 = new eui.Rect(x, 720, 0x000000);
        var rect2 = new eui.Rect(1280 - x, y, 0x000000);
        rect2.x = x;
        var rect3 = new eui.Rect(1280 - x, 720 - y - h, 0x000000);
        rect3.x = x, rect3.y = y + h;
        var rect4 = new eui.Rect(1280 - x - w, h, 0x000000);
        rect4.x = x + w;
        rect4.y = y;
        this.addChild(rect1);
        this.addChild(rect2);
        this.addChild(rect3);
        this.addChild(rect4);
        rect1.alpha = rect2.alpha = rect3.alpha = rect4.alpha = 0.6;
    };
    MainView.prototype.showColorfullLoading = function () {
        var box = new eui.Group();
        var layout = new eui.HorizontalLayout();
        var arr = [];
        var a = 0;
        box.width = 375;
        box.y = 50;
        box.horizontalCenter = 0;
        layout.horizontalAlign = "center";
        layout.gap = 12.5;
        layout.verticalAlign = "middle";
        box.layout = layout;
        for (var i = 0; i < 6; i++) {
            var rect = new eui.Rect(50, 50, Math.floor(Math.random() * 16777215));
            // rect.ellipseWidth = rect.ellipseHeight = 50;
            box.addChild(rect);
            arr.push(rect);
        }
        this.addChild(box);
        (function run() {
            egret.Tween.get(arr[a]).to({ alpha: 0 }, 100).call(function () {
                a++;
                if (a == 6)
                    a = 0;
                run();
            }).to({ alpha: 1 }, 100);
        })();
    };
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map