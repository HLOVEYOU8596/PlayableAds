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
        _this.end_Card = false;
        _this.mcArr = [];
        //引导相关变量
        _this.guideArr = [new egret.Point(583, 664), new egret.Point(583, 664), new egret.Point(583, 664),
            new egret.Point(753, 664), new egret.Point(753, 664), new egret.Point(753, 664),
            new egret.Point(907, 664),
            new egret.Point(526, 534), new egret.Point(550, 274), new egret.Point(720, 536),
            new egret.Point(680, 276), new egret.Point(904, 524), new egret.Point(810, 284),];
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
        this.playShade();
        for (var i = 2; i >= 0; i--) {
            for (var j = 2; j >= 0; j--) {
                var drum = Drumstick.produce();
                drum.anchorOffsetX = drum.width / 2;
                drum.anchorOffsetY = drum.height / 2;
                drum.x = pointJson[i + "_" + j].x;
                drum.y = pointJson[i + "_" + j].y - 20;
                drum.scaleX = drum.scaleY = pointJson[i + "_" + j].scale;
                drum.setData({ status: 1, filter: this.filter });
                this.kGrpHam.addChild(drum);
                this.drumArr.push(drum);
                // this.playSmog(0, drum.x, drum.y - 30);
                // drum.filters = [this.filter];
            }
        }
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg1.source = main_bg1;
        this.kImgbg2.source = main_bg2;
        this.kImgMenu1.source = this.kImgMenu2.source = main_menu;
        this.kImgNum1.source = main_x3;
        this.kImgNum2.source = main_x6;
        this.kImgSwipe.source = main_swipe;
        this.kImgPeople1.visible = this.kImgPeople2.visible = false;
        this.kImgFood1.source = end_fodo1;
        this.kImgFood2.source = end_food2;
        this.kImgFood3.source = end_food3;
        this.kImgFood4.source = end_food4;
        this.kImgContent.source = end_topic;
        this.kImgTips.source = end_tips;
        this.kImgEndBg.source = end_bg;
        this.kImgTopic.source = main_reward_bg;
        this.kImgHand.source = main_guide_arrow;
        this.playStartAni();
        this.addEvents();
    };
    /**
     *  @description 播放入场动画
     */
    MainView.prototype.playStartAni = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var arrP, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        arrP = [new egret.Point(260, 324), new egret.Point(404, 324), new egret.Point(204, 416), new egret.Point(376, 416)];
                        arrP.forEach(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            var a1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, McManger.instance.getMcAtH5('noodle', noodle_j, noodle, 'noodle')];
                                    case 1:
                                        a1 = _a.sent();
                                        a1.x = item.x + 3;
                                        a1.y = item.y - 7;
                                        this.kGrpBg.addChild(a1);
                                        a1.gotoAndPlay(0, -1);
                                        this.playSmog(0, item.x, item.y - 40);
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        _a = this;
                        return [4 /*yield*/, Dragon.createArmature(0, 30, 'geek', this.kGrpPeople2, geek_ske_j, geek_tex, geek_tex_j)];
                    case 1:
                        _a.geek = (_c.sent());
                        this.geek.animation.play('walk', 1);
                        this.geek.scaleX = this.geek.scaleY = 0.75;
                        egret.Tween.get(this.kGrpPeople2).to({ x: 697 }, 700).call(function () {
                            _this.geek.animation.play('stand', 0);
                            egret.Tween.removeTweens(_this.kGrpPeople2);
                            _this.kGrpMenu2.visible = true;
                            _this.kGrpMenu2.scaleX = _this.kGrpMenu2.scaleY = 0;
                            egret.Tween.get(_this.kGrpMenu2).to({ scaleX: 1, scaleY: 1 }, 300, egret.Ease.elasticOut);
                        });
                        _b = this;
                        return [4 /*yield*/, McManger.instance.getMcAtH5('a1', a1_j, a1, 'a1')];
                    case 2:
                        _b.aunt = (_c.sent());
                        this.kGrpPeople1.addChild(this.aunt);
                        this.aunt.y = 60;
                        this.aunt.x = 50;
                        this.setTimeCallBack(500, function () {
                            egret.Tween.get(_this.kGrpPeople1).to({ x: 281 }, 280).call(function () {
                                _this.aunt.gotoAndPlay(0, -1);
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
        egret.log("点击");
        var char = (3 + Math.floor(this.clickNum / 3)).toString();
        this.clickNum++;
        GuideStep.instance.clearHand();
        for (var i = 0; i < 3; i++)
            this.drumArr[3 - (this.clickNum % 3 == 0 ? 3 : this.clickNum % 3) + i * 3]["showImg" + char]();
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
        SoundManager.instance.playEffect(SoundConst.down);
        this.drumArr.forEach(function (item) {
            item.showImg5();
        });
        GuideStep.instance.clearHand();
        this.setTimeCallBack(600, function () {
            GuideStep.instance.moveHand(_this.conacthHam.bind(_this), 2);
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
                        this.setTimeCallBack(700, function () { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        x["stop"]();
                                        if (!(this.swiperNum == 1)) return [3 /*break*/, 2];
                                        this.kGrpMenu1.visible = false;
                                        this.aunt.frameRate = 6;
                                        this.kGrpPeople1.removeChild(this.aunt);
                                        _a = this;
                                        return [4 /*yield*/, McManger.instance.getMcAtH5('a1', a1_j, a1, 'a2')];
                                    case 1:
                                        _a.aunt = (_b.sent());
                                        this.kGrpPeople1.addChild(this.aunt);
                                        this.aunt.y = 20;
                                        this.aunt.x = 50;
                                        this.aunt.gotoAndPlay(0, 2);
                                        this.aunt.once(egret.Event.COMPLETE, function () { _this.aunt.visible = false; }, this);
                                        GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                                        return [3 /*break*/, 3];
                                    case 2:
                                        if (this.swiperNum == 2) {
                                            this.kImgNum2.source = main_x3;
                                            if (!this.end_Card) {
                                                GuideStep.instance.moveHand(this.openPlateForm.bind(this), 2);
                                                this.setTimeCallBack(2400, function () {
                                                    _this.kImgSwipe.horizontalCenter = -100;
                                                    _this.kImgSwipe.visible = true;
                                                    _this.kImgSwipe.scaleX = _this.kImgSwipe.scaleY = 0;
                                                    egret.Tween.get(_this.kImgSwipe).to({ scaleX: 1, scaleY: 1 }, 700, egret.Ease.elasticOut).call(function () {
                                                        egret.Tween.removeTweens(_this.kImgSwipe);
                                                        egret.Tween.get(_this.kImgSwipe, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1.1, scaleY: 1.1 }, 100);
                                                    });
                                                });
                                            }
                                            else {
                                                GuideStep.instance.moveHand(this.conacthHam.bind(this), 2);
                                            }
                                        }
                                        else {
                                            this.kGrpMenu2.visible = false;
                                            this.geek.animation.play('happy', 1);
                                            this.geek.once(egret.Event.COMPLETE, function () { _this.geek.visible = false; }, this);
                                            this.setTimeCallBack(1500, function () { _this.playEndAni(); });
                                        }
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    MainView.prototype.playEndAni = function () {
        var _this = this;
        this.kGrpAction.removeChildren();
        this.kLbTopic.visible = true;
        var rect = new eui.Rect(1280, 720, 0x000000);
        rect.fillAlpha = 0.5;
        this.kGrpAction.addChild(rect);
        this.kGrpEnd.visible = true;
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playYanhua();
        this.playCaidai(400, 2000);
        this.setTimeCallBack(1500, function () {
            _this.kGrpClose.visible = true;
            //2,3 90 28  1,4 964,861  tip:634
            _this.kImgHand.visible = true;
            egret.Tween.get(_this.kImgFood1).to({ x: 964 }, 800, egret.Ease.backOut);
            egret.Tween.get(_this.kImgFood2).to({ x: 90 }, 800, egret.Ease.backOut);
            egret.Tween.get(_this.kImgFood3).to({ x: 28 }, 800, egret.Ease.backOut);
            egret.Tween.get(_this.kImgFood4).to({ x: 861 }, 800, egret.Ease.backOut);
            egret.Tween.get(_this.kImgTips).to({ y: 634 }, 800, egret.Ease.sineOut);
            egret.Tween.get(_this.kImgContent, { loop: true })
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30)
                .to({ rotation: 5 }, 50).to({ rotation: -5 }, 100).to({ rotation: 0 }, 30).wait(1000);
            egret.Tween.get(_this.kImgHand, { loop: true }).to({ y: 515 }, 500).to({ alpha: 0 }, 300).call(function () {
                _this.kImgHand.y = 570;
                _this.kImgHand.alpha = 1;
            });
            _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.openPlateForm, _this);
        });
    };
    //产生随机点
    MainView.prototype.createPoint = function () {
        return new egret.Point(200 + Math.floor(Math.random() * 736), 100 + Math.floor(Math.random() * 440));
    };
    //彩带动画
    MainView.prototype.playCaidai = function (num, delay) {
        var _this = this;
        var arr = [];
        var imgArr = [main_dai1, main_dai2, main_dai3,
            main_dai4, main_dai5, main_dai6,
            main_dai7, main_dai8, main_dai9,
            main_dai10];
        var _loop_1 = function (i) {
            var img = new eui.Image(imgArr[Math.floor(Math.random() * 10)]);
            img.x = Math.floor(Math.random() * this_1.stage.width);
            img.y = 0;
            arr.push(img);
            var t = egret.setTimeout(function () {
                egret.clearTimeout(t);
                _this.kGrpAction.addChild(img);
                egret.Tween.get(img).to({ rotation: Math.random() * 90 }, 300);
                egret.Tween.get(img).to({ y: _this.stage.height }, 1000).call(function () {
                    egret.Tween.removeTweens(img);
                    _this.kGrpAction.removeChild(img);
                });
            }, this_1, delay * Math.random());
        };
        var this_1 = this;
        for (var i = 0; i < num; i++) {
            _loop_1(i);
        }
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
            _this.kGrpAction.addChild(img);
            egret.Tween.get(img).to({ scaleX: 2, scaleY: 2 }, 1200, egret.Ease.quadOut).to({ alpha: 0 }, 300).call(function () {
                egret.Tween.removeTweens(img);
                _this.kGrpAction.removeChild(img);
            });
        }, this, t);
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
                        this.mcArr.push(mm);
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
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map