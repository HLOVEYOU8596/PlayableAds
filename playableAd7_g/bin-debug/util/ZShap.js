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
 *
 * @author
 *
 */
var ZShap = (function (_super) {
    __extends(ZShap, _super);
    function ZShap() {
        return _super.call(this) || this;
    }
    ZShap.prototype.draw = function (arr) {
        this.graphics.clear();
        var len = arr.length;
        var k;
        for (var i = 0; i < len; i++) {
            var o = arr[i];
            if ("ef" == o) {
                this.graphics.endFill();
            }
            else if (null != o.color) {
                this.graphics.beginFill(o.color, o.alpha);
            }
            else if (null != o.commands) {
                var cm = o.commands;
                var data = o.data;
                var len2 = cm.length;
                k = 0;
                for (var j = 0; j < len2; j++) {
                    var ci = cm[j];
                    try {
                        if (1 == ci) {
                            this.graphics.moveTo(data[k], data[k + 1]);
                            k += 2;
                        }
                        else if (2 == ci) {
                            this.graphics.lineTo(data[k], data[k + 1]);
                            k += 2;
                        }
                        else if (3 == ci) {
                            this.graphics.curveTo(data[k], data[k + 1], data[k + 2], data[k + 3]);
                            k += 4;
                        }
                        else if (6 == ci) {
                            this.graphics.cubicCurveTo(data[k], data[k + 1], data[k + 2], data[k + 3], data[k + 4], data[k + 5]);
                            k += 6;
                        }
                    }
                    catch (err) {
                    }
                }
            }
        }
    };
    return ZShap;
}(egret.Shape));
__reflect(ZShap.prototype, "ZShap");
//# sourceMappingURL=ZShap.js.map