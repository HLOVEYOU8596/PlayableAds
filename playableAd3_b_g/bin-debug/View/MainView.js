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
        _this.hamArr = [];
        //引导相关变量
        _this.guideArr = [new egret.Point(304, 277), new egret.Point(304, 277), new egret.Point(304, 277),
            new egret.Point(383, 277), new egret.Point(383, 277), new egret.Point(383, 277),
            new egret.Point(231, 277), new egret.Point(148, 241), new egret.Point(165, 90),
            new egret.Point(250, 241), new egret.Point(230, 90), new egret.Point(370, 241),
            new egret.Point(280, 90),
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
        // this.playShade();
        for (var i = 2; i >= 0; i--) {
            for (var j = 2; j >= 0; j--) {
                var ham = Hamburg.produce();
                ham.anchorOffsetX = ham.width / 2;
                ham.anchorOffsetY = ham.height / 2;
                ham.x = pointJson[i + "_" + j].x;
                ham.y = pointJson[i + "_" + j].y - 15;
                ham.scaleX = ham.scaleY = pointJson[i + "_" + j].scale;
                ham.setData({ status: 1, filter: this.filter });
                this.kGrpHam.addChild(ham);
                this.hamArr.push(ham);
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
        var _this = this;
        // ParticleUtil.instance.creatParticle("snow", this.kGrpSnow);
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, snowJson, snow);
        //281 697
        egret.Tween.get(this.kGrpPeople2).to({ x: 240 }, 700).call(function () {
            egret.Tween.removeTweens(_this.kGrpPeople2);
            _this.kGrpMenu2.visible = true;
            _this.kGrpMenu2.scaleX = _this.kGrpMenu2.scaleY = 0;
            egret.Tween.get(_this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
        });
        this.setTimeCallBack(500, function () {
            egret.Tween.get(_this.kGrpPeople1).to({ x: 80 }, 280).call(function () {
                egret.Tween.removeTweens(_this.kGrpPeople1);
                _this.kGrpMenu1.visible = true;
                _this.kGrpMenu1.scaleX = _this.kGrpMenu1.scaleY = 0;
                egret.Tween.get(_this.kGrpMenu1).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                _this.initData();
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
        egret.log("点击");
        var char = (3 + Math.floor(this.clickNum / 3)).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        for (var i = 0; i < 3; i++)
            this.hamArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3]["showImg" + char]();
        if (this.clickNum == 6) {
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
    };
    MainView.prototype.downHam = function () {
        var _this = this;
        this.hamArr.forEach(function (item) {
            item.downHam();
        });
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, function () {
            SoundManager.instance.playEffect(SoundConst.down);
            GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
        });
    };
    MainView.prototype.conacthHam = function () {
        var _this = this;
        this.swiperNum++;
        GuideStep.instance.clearHand();
        var coinPoint = [new egret.Point(188, 56), new egret.Point(368, 56)];
        var arr = [new egret.Point(177, 132), new egret.Point(241, 132), new egret.Point(241, 132)];
        for (var i = 0; i < 3; i++) {
            egret.Tween.get(this.hamArr[(i + 1) * 3 - this.swiperNum]).to({ x: arr[this.swiperNum - 1].x, y: arr[this.swiperNum - 1].y }, 150);
        }
        this.setTimeCallBack(160, function () { return __awaiter(_this, void 0, void 0, function () {
            var _this = this;
            var x;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.hamArr[6 - this.swiperNum].visible = this.hamArr[3 - this.swiperNum].visible = false;
                        egret.Tween.get(this.hamArr[9 - this.swiperNum]).to({ x: this.swiperNum == 1 ? 188 : 368, y: 56, scaleX: 0.6, scaleY: 0.6 }, 150).call(function () {
                            _this.hamArr[9 - _this.swiperNum].visible = false;
                        });
                        return [4 /*yield*/, ParticleUtil.instance.getParticleAtH5(this.kGrpSnow, coinJson, coin, coinPoint[this.swiperNum - 1].x, coinPoint[this.swiperNum - 1].y, 700)];
                    case 1:
                        x = _a.sent();
                        x["scaleX"] = x["scaleY"] = 0.3;
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
                                    egret.Tween.get(_this.kImgSwipe).to({ scaleX: .8, scaleY: .8 }, 700, egret.Ease.elasticOut).call(function () {
                                        egret.Tween.removeTweens(_this.kImgSwipe);
                                        egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 1, scaleY: 1 }, 600).to({ scaleX: .8, scaleY: .8 }, 100);
                                    });
                                });
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
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
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map