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
var Dragon = (function (_super) {
    __extends(Dragon, _super);
    function Dragon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dragon.createArmature = function (_x, _y, armatureName, _target, a, b, c) {
        return __awaiter(this, void 0, void 0, function () {
            var texture, factory, armature;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getImageData(b)];
                    case 1:
                        texture = _a.sent();
                        factory = new dragonBones.EgretFactory();
                        factory.parseDragonBonesData(a, armatureName);
                        factory.parseTextureAtlasData(c, texture);
                        armature = factory.buildArmatureDisplay(armatureName);
                        _target.addChild(armature);
                        armature.x = _x;
                        armature.y = _y;
                        return [2 /*return*/, armature];
                }
            });
        });
    };
    Dragon.getImageData = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (reslove, reject) {
                        RES.getResByUrl(url, function (texture) {
                            reslove(texture);
                        }, _this, RES.ResourceItem.TYPE_IMAGE);
                    })];
            });
        });
    };
    Dragon.createArmature1 = function (_x, _y, armatureName, target) {
        if (target != null) {
            var rawData = RES.getRes(armatureName + "_ske_json");
            var texture = RES.getRes(armatureName + "_tex_png");
            var textureData = RES.getRes(armatureName + "_tex_json");
            var dragonbonesFactory = new dragonBones.EgretFactory();
            dragonbonesFactory.parseDragonBonesData(rawData, armatureName);
            dragonbonesFactory.parseTextureAtlasData(textureData, texture, armatureName);
            var armature = dragonbonesFactory.buildArmature("Armature");
            target.addChild(armature);
            armature.display.x = _x;
            armature.display.y = _y;
            dragonBones.WorldClock.clock.add(armature);
            return armature;
        }
        else {
            console.log("装载容器不存在");
            return null;
        }
    };
    return Dragon;
}(BaseClass));
__reflect(Dragon.prototype, "Dragon");
//# sourceMappingURL=Dragon.js.map