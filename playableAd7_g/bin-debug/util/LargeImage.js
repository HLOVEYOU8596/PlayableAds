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
    var LargeImage = (function (_super) {
        __extends(LargeImage, _super);
        function LargeImage(imgArr, libObj, libName) {
            var _this = _super.call(this) || this;
            _this.setObject(imgArr, libObj, libName);
            return _this;
        }
        LargeImage.prototype.setObject = function (imgArr, libObj, libName) {
            if (this.libObj == libObj && this.libName == libName) {
                return;
            }
            this.libName = libName;
            this.libObj = libObj;
            zmovie.Util.clearDisposeDisplay(this);
            var arr = zmovie.Util.getTextureArrByName(imgArr, libObj, libName);
            var len = arr.length;
            for (var i = len - 1; i >= 0; i--) {
                var o = arr[i];
                var img = new egret.Bitmap();
                img.touchEnabled = false;
                img.texture = o.t;
                img.x = o.x / libObj.scale;
                img.y = o.y / libObj.scale;
                this.addChild(img);
            }
        };
        return LargeImage;
    }(egret.DisplayObjectContainer));
    zmovie.LargeImage = LargeImage;
    __reflect(LargeImage.prototype, "zmovie.LargeImage");
})(zmovie || (zmovie = {}));
//# sourceMappingURL=LargeImage.js.map