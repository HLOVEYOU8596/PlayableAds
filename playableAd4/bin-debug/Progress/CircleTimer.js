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
// TypeScript file
var CircleTimer = (function (_super) {
    __extends(CircleTimer, _super);
    function CircleTimer(r, showLab, color, alpha) {
        if (showLab === void 0) { showLab = false; }
        if (color === void 0) { color = 0x00ff00; }
        if (alpha === void 0) { alpha = 0.7; }
        var _this = _super.call(this) || this;
        _this.rotateTimer = -1;
        _this.lastArc = 0;
        _this.radius = r;
        _this.c = color;
        _this.optical = alpha;
        _this.showLabel = showLab;
        _this.init();
        return _this;
    }
    CircleTimer.prototype.init = function () {
        this.display = new egret.Shape();
        this.mg = this.display.graphics;
        // let g1:egret.Graphics = this.display.graphics;
        // g1.beginFill(0x00ff00,0.3);
        // g1.drawCircle(this.startX,this.startY,this.radius);
        // g1.endFill();
        this.addChild(this.display);
        this.mg.moveTo(this.radius, this.radius);
        this.mg.lineTo(this.radius, 0);
    };
    CircleTimer.prototype.redraw = function () {
        var arc = this._percent * 2 * Math.PI;
        this.mg.beginFill(this.c, this.optical);
        this.mg.moveTo((1 + Math.sin(this.lastArc)) * this.radius, (1 - Math.cos(this.lastArc)) * this.radius);
        this.mg.lineTo((1 + Math.sin(arc)) * this.radius, (1 - Math.cos(arc)) * this.radius);
        this.mg.lineTo(this.radius, this.radius);
        this.lastArc = arc;
        if (this._showLabel) {
            this._lab.text = (this._percent * 100).toFixed(2) + '%...';
        }
    };
    Object.defineProperty(CircleTimer.prototype, "percent", {
        /**
         * 0-1
         */
        get: function () {
            return this._percent;
        },
        set: function (v) {
            if (v < 0 || v > 1) {
                console.warn('Percentage illegal:', v);
                if (this._percent >= 1)
                    return;
                else
                    v = 1;
            }
            if (this._percent == v)
                return;
            this._percent = v;
            this.redraw();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CircleTimer.prototype, "showLabel", {
        /**
         * 0-1
         */
        get: function () {
            return this._showLabel;
        },
        set: function (v) {
            if (this._showLabel == v)
                return;
            this._showLabel = v;
            if (this._showLabel) {
                if (!this._lab) {
                    this._lab = new egret.TextField();
                    this._lab.width = this.radius * 2;
                    this._lab.textAlign = 'center';
                    this._lab.text = '1%...';
                    this._lab.fontFamily = 'Microsoft Yahei';
                    this._lab.y = this.radius * 2 - this._lab.height >> 1;
                }
                if (!this._lab.parent) {
                    this.addChild(this._lab);
                }
            }
            else {
                if (this._lab && this._lab.parent) {
                    this._lab.parent.removeChild(this._lab);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    return CircleTimer;
}(egret.DisplayObjectContainer));
__reflect(CircleTimer.prototype, "CircleTimer");
//# sourceMappingURL=CircleTimer.js.map