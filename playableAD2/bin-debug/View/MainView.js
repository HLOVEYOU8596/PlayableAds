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
        //引导相关变量
        _this.guideArr = [new egret.Point(640, 360), new egret.Point(640, 360),
            // new egret.Point(640, 360), 
            new egret.Point(495, 597),
            new egret.Point(663, 597), new egret.Point(831, 597),
            new egret.Point(640, 360)];
        _this.btnClickNum = 0; //按钮点击次数
        _this.cirle = new eui.Rect(50, 50, 0x000000);
        _this.skinName = "MainViewDevSkin";
        // this.skinName = "MainViewSkin";
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.initUI, _this);
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
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.initUI, this);
        //TO DO 项目结束阶段需要对所有eui.Image对象进行赋值
        this.kImgBg.source = main_bg;
        this.kImgMain.source = main_a;
        this.kImgDecorate1.source = main_decorate1;
        this.kImgDecorate2.source = main_decorate2;
        this.kImgDecorate3.source = main_decorate3;
        this.kImgTipsBg.source = main_tips_bg;
        this.kImgTips.source = main_tips1;
        this.kBtn1.source = main_btn1;
        this.kBtn2.source = main_btn2;
        this.kBtn3.source = main_btn3;
        this.kGrpBtn.$children.forEach(function (item, index) {
            var img = item["getChildByName"]("main_button_bg");
            img.source = main_button_bg;
        });
        this.initPoint(this.kImgMain, "main_a");
        this.playStartAni();
        this.addEvents();
        this.initData();
    };
    /**
     *  @description 播放入场动画
     */
    MainView.prototype.playStartAni = function () {
        var _this = this;
        SoundManager.instance.playBg(SoundConst.bgm);
        // ParticleUtil.instance.creatParticle("snow",this.kGrpSnow,0,0)
        // ParticleUtil.instance.getParticleAtH5(this.kGrpSnow,snowJson,snow,0,0);
        this.kGrpTips.scaleX = this.kGrpTips.scaleY = 0;
        egret.Tween.get(this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kGrpTips);
        });
    };
    /**
     * 初始化游戏数据
    */
    MainView.prototype.initData = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                GuideStep.instance.init(this.kGrpGuide, this.guideArr);
                GuideStep.instance.moveHand(this.touchFirst.bind(this));
                return [2 /*return*/];
            });
        });
    };
    /**
     * @description 第一次点击
    */
    MainView.prototype.touchFirst = function () {
        var _this = this;
        console.log("touch first!");
        GuideStep.instance.clearHand();
        this.kGrpTips.visible = false;
        egret.Tween.removeTweens(this.kImgMain);
        this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
        this.kImgMain.source = main_b;
        this.initPoint(this.kImgMain, "main_b");
        egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgMain);
        });
        this.setTimeCallBack(300, function () { GuideStep.instance.moveHand(_this.touchSecond.bind(_this)); });
    };
    /**
     * @description 第二次点击
    */
    MainView.prototype.touchSecond = function () {
        var _this = this;
        console.log("touch second!");
        GuideStep.instance.clearHand();
        this.kGrpBtn.visible = true;
        egret.Tween.removeTweens(this.kImgMain);
        this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
        this.kImgMain.source = main_c;
        this.initPoint(this.kImgMain, "main_c");
        egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgMain);
        });
        // this.setTimeCallBack(300, () => { GuideStep.instance.moveHand(this.touchThird.bind(this)); });
        this.setTimeCallBack(300, function () {
            GuideStep.instance.moveHand(_this.clickBtn.bind(_this));
            _this.kGrpTips.visible = true;
            _this.kImgTips.source = main_tips2;
            _this.kGrpTips.scaleX = _this.kGrpTips.scaleY = 0;
            egret.Tween.get(_this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
                egret.Tween.removeTweens(_this.kGrpTips);
            });
        });
    };
    /**
     * @description 第三次点击
    */
    MainView.prototype.touchThird = function () {
        var _this = this;
        console.log("touch third!");
        GuideStep.instance.clearHand();
        this.kGrpBtn.visible = true;
        egret.Tween.removeTweens(this.kImgMain);
        this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
        // this.kImgMain.source = main_d;
        this.initPoint(this.kImgMain, "main_d");
        egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this.kImgMain);
        });
        this.setTimeCallBack(300, function () {
            GuideStep.instance.moveHand(_this.clickBtn.bind(_this));
            _this.kGrpTips.visible = true;
            _this.kImgTips.source = main_tips2;
            _this.kGrpTips.scaleX = _this.kGrpTips.scaleY = 0;
            egret.Tween.get(_this.kGrpTips).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
                egret.Tween.removeTweens(_this.kGrpTips);
            });
        });
    };
    /**
     * @description 点击按钮执行方法
    */
    MainView.prototype.clickBtn = function () {
        var _this = this;
        console.log("touch btn!");
        this.kGrpTips.visible = false;
        this.btnClickNum++;
        GuideStep.instance.clearHand();
        this["kImgDecorate" + this.btnClickNum].visible = true;
        this["kBtn" + this.btnClickNum].alpha = 0.5;
        this.initPoint(this["kImgDecorate" + this.btnClickNum], "main_decorate" + this.btnClickNum);
        this["kImgDecorate" + this.btnClickNum].scaleX = this["kImgDecorate" + this.btnClickNum].scaleY = 0;
        egret.Tween.get(this["kImgDecorate" + this.btnClickNum]).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(function () {
            egret.Tween.removeTweens(_this["kImgDecorate" + _this.btnClickNum]);
            if (_this.btnClickNum == 3) {
                // this.kImgMain.source = main_complete;
                // //建造完成，播放结束动画
                // this.kGrpTips.visible = false;
                // this.kGrpBtn.visible = false;
                // this.playEndAni();
            }
        });
        this.setTimeCallBack(300, function () {
            // if (this.btnClickNum == 3) {
            // } else {
            //     GuideStep.instance.moveHand(this.clickBtn.bind(this));
            // }
            if (_this.btnClickNum == 2) {
                var img = new eui.Image(main_taptips);
                img.horizontalCenter = 0;
                img.verticalCenter = 0;
                _this.kGrpMain.addChild(img);
                img.addEventListener(egret.TouchEvent.TOUCH_TAP, _this.openPlateForm, _this);
                egret.Tween.get(img, { loop: true }).to({ scaleX: 1.3, scaleY: 1.3 }, 600).to({ scaleX: 1, scaleY: 1 }, 200);
                GuideStep.instance.moveHand(_this.openPlateForm.bind(_this));
            }
            else {
                GuideStep.instance.moveHand(_this.clickBtn.bind(_this));
            }
        });
    };
    /**
     * @description 点击按钮执行方法
    */
    // private clickBtn() {
    //     console.log("touch btn!");
    //     this.btnClickNum++;
    //     switch (this.btnClickNum) {
    //         case 1:
    //         case 3:
    //             GuideStep.instance.clearHand();
    //             this["kImgDecorate" + this.btnClickNum].visible = true;
    //             this[`kBtn${this.btnClickNum}`].alpha = 0.5;
    //             this.initPoint(this["kImgDecorate" + this.btnClickNum],"main_decorate"+this.btnClickNum);
    //             this["kImgDecorate" + this.btnClickNum].scaleX = this["kImgDecorate" + this.btnClickNum].scaleY = 0;
    //             egret.Tween.get(this["kImgDecorate" + this.btnClickNum]).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
    //                 egret.Tween.removeTweens(this["kImgDecorate" + this.btnClickNum]);
    //                 if (this.btnClickNum == 1) {GuideStep.instance.moveHand(this.clickBtn.bind(this));}
    //                 else {
    //                     //建造完成，播放结束动画
    //                     this.kGrpTips.visible = false;
    //                     this.kGrpBtn.visible = false;
    //                     this.playEndAni();
    //                 }
    //             });
    //             break;
    //         case 2:
    //             GuideStep.instance.clearHand();
    //             this.kBtn2.alpha = 0.5;
    //             egret.Tween.removeTweens(this.kImgMain);
    //             this.kImgMain.scaleX = this.kImgMain.scaleY = 0;
    //             this.kImgMain.source = main_complete;
    //             this.initPoint(this.kImgMain,"main_complete");
    //             egret.Tween.get(this.kImgMain).to({ scaleX: 1, scaleY: 1 }, 1000, egret.Ease.elasticOut).call(() => {
    //                 egret.Tween.removeTweens(this.kImgMain);
    //             });
    //             this.setTimeCallBack(300,()=>{GuideStep.instance.moveHand(this.clickBtn.bind(this));});
    //             break;
    //     }
    // }
    /**
     * 初始化游戏交互事件
    */
    MainView.prototype.addEvents = function () {
        this.addEventListener(egret.Event.CHANGE, this.onRotation, this);
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onBegin, this);
        this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMove, this);
        this.addEventListener(egret.TouchEvent.TOUCH_END, this.onEnd, this);
    };
    // //播放转场动画及打开结束界面
    // private playEndAni() {
    //     // SoundManager.instance.playEffect(SoundConst.win);
    //     //添加蒙板
    //     let rect: eui.Rect = new eui.Rect(1280, 720, 0x000000);
    //     rect.alpha = 0.6;
    //     this.kGrpAction.addChild(rect);
    //     //添加完成动画
    //     // let img = new eui.Image(main_perfect);
    //     img.horizontalCenter = 0;
    //     img.verticalCenter = 0;
    //     img.scaleX = img.scaleY = 0;
    //     this.kGrpAction.addChild(img);
    //     egret.Tween.get(img).to({ scaleX: 1, scaleY: 1 }, 500, egret.Ease.elasticOut).call(() => {
    //         egret.Tween.removeTweens(img);
    //     });
    //     let t = egret.setTimeout(() => {
    //         egret.clearTimeout(t);
    //         this.kGrpAction.removeChild(rect);
    //         this.gameOver = GameOver.instance;
    //         this.gameOver.width = this.kGrpAction.width;
    //         this.gameOver.height = this.kGrpAction.height;
    //         this.kGrpAction.addChild(this.gameOver);
    //         GuideStep.instance.moveHand(this.openPlateForm.bind(this));
    //     }, this, 1500);
    //     this.playCaidai(200, 2000);
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    //     this.playYanhua();
    // }
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
        img.x = jso[str][0] + img.anchorOffsetX;
        img.y = jso[str][1] + img.anchorOffsetY;
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
        var _this = this;
        // alert("resize")
        //此处需要重置Ui
        var t = egret.setTimeout(function () {
            _this.width = egret.MainContext.instance.stage.stageWidth;
            _this.height = egret.MainContext.instance.stage.stageHeight;
            _this.x = _this.y = 0;
            _this.scaleX = _this.scaleY = 1;
        }, this, 600);
    };
    MainView.prototype.onBegin = function (event) {
        this.cirle.ellipseWidth = 50;
        this.cirle.ellipseHeight = 50;
        this.cirle.anchorOffsetX = 25;
        this.cirle.anchorOffsetY = 25;
        this.cirle.x = event.stageX;
        this.cirle.y = event.stageY;
        this.kGrpAction.addChild(this.cirle);
        console.log("开始", event.stageX, event.stageY);
        this.startPoint = new egret.Point(event.stageX, event.stageY);
    };
    MainView.prototype.onMove = function (event) {
        var _this = this;
        var tail = new eui.Rect(40, 60, 0x000000);
        tail.anchorOffsetX = 40;
        tail.anchorOffsetY = 30;
        tail.alpha = 0.7;
        var endPoint = new egret.Point(event.stageX, event.stageY);
        var rotation = 180 * Math.atan2((endPoint.y - this.startPoint.y), (endPoint.x - this.startPoint.x)) / Math.PI;
        tail.rotation = rotation;
        egret.Tween.get(tail).to({ height: 20, alpha: 0 }, 300).call(function () {
            egret.Tween.removeTweens(tail);
            _this.kGrpAction.removeChild(tail);
        });
        console.log("滑动", event.stageX, event.stageY);
        this.cirle.x = endPoint.x;
        this.cirle.y = endPoint.y;
        tail.x = endPoint.x;
        tail.y = endPoint.y;
        this.kGrpAction.addChild(tail);
        this.kGrpAction.setChildIndex(tail, this.kGrpAction.getChildIndex(this.cirle) - 1);
        this.startPoint = endPoint;
    };
    MainView.prototype.onEnd = function (event) {
        this.kGrpAction.removeChild(this.cirle);
        console.log("结束", event.stageX, event.stageY);
    };
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=MainView.js.map