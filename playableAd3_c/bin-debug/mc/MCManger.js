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
var McManger = (function (_super) {
    __extends(McManger, _super);
    function McManger() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._cach = {};
        return _this;
    }
    Object.defineProperty(McManger, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new McManger();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param(str) 将要加载的序列帧动画名称
     * 在白鹭游戏引擎中使用，可玩视频需要另行实现
    */
    McManger.prototype.getMc = function (str) {
        return __awaiter(this, void 0, void 0, function () {
            var data, txtr, mcFactory, mc;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this._cach[str])
                            return [2 /*return*/, this._cach[str]];
                        return [4 /*yield*/, RES.getResAsync(str + "_json")];
                    case 1:
                        data = _a.sent();
                        return [4 /*yield*/, RES.getResAsync(str + "_png")];
                    case 2:
                        txtr = _a.sent();
                        mcFactory = new egret.MovieClipDataFactory(data, txtr);
                        mc = new egret.MovieClip(mcFactory.generateMovieClipData());
                        this._cach[str] = mc;
                        return [2 /*return*/, mc];
                }
            });
        });
    };
    McManger.prototype.getMcAtH5 = function (str, data, url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (reslove, reject) {
                        if (_this._cach[str])
                            reslove(_this._cach[str]);
                        RES.getResByUrl(url, function (texture) {
                            var mcFactory = new egret.MovieClipDataFactory(texture, texture);
                            var mc = new egret.MovieClip(mcFactory.generateMovieClipData());
                            _this._cach[str] = mc;
                            reslove(mc);
                        }, _this, RES.ResourceItem.TYPE_IMAGE);
                    })];
            });
        });
    };
    return McManger;
}(egret.DisplayObjectContainer));
__reflect(McManger.prototype, "McManger");
//# sourceMappingURL=MCManger.js.map