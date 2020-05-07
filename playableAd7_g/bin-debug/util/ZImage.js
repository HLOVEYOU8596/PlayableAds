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
/**
 * Created by ASUS on 15-2-9.
 */
var zmovie;
(function (zmovie) {
    var ZImage = (function (_super) {
        __extends(ZImage, _super);
        function ZImage(t) {
            var _this = _super.call(this) || this;
            _this.img = new egret.Bitmap();
            _this.addChild(_this.img);
            _this.setTexture(t);
            return _this;
        }
        ZImage.prototype.setTexture = function (t) {
            this.img.texture = t;
        };
        ZImage.prototype.setScale = function (s) {
            this.img.scaleX = 1 / s;
            this.img.scaleY = 1 / s;
        };
        return ZImage;
    }(egret.DisplayObjectContainer));
    zmovie.ZImage = ZImage;
    __reflect(ZImage.prototype, "zmovie.ZImage");
})(zmovie || (zmovie = {}));
//# sourceMappingURL=ZImage.js.map