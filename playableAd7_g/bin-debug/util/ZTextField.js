var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 *
 * @author
 *
 */
var ZTextField = (function () {
    //word-break:break-all;width:100%,height:100%
    function ZTextField() {
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.textAlign = "left";
        this.div.style.width = "1000px";
        var object = document.getElementById("bookValue").appendChild(this.div);
    }
    ZTextField.prototype.resizeText = function (w, h, str) {
        this.div.style.worldBreak = "break-all";
        this.div.style.width = w + "px";
        //this.div.style.height = h+"px";
        //this.div.innerHTML = "<pre style='world-break:break-all;width:"+w+"px'>"+str+"</pre>";
        this.div.innerHTML = str;
        /*var childN:any = this.div.childNodes;
        var len:number = (childN.length);
        for(var i: number = 0;i < len;i++){
            this.checkHTML(childN[i])
        }*/
        this.cont = document.createElement("div");
        this.cont.style.worldBreak = "break-all";
        this.cont.style.width = w + "px";
        this.cont.style.textAlign = "left";
        document.getElementById("bookValue").appendChild(this.cont);
        var ret = new Array();
        this.checkHTML(this.div, h, ret);
        this.div.innerHTML = "";
        this.cont.innerHTML = "";
        return ret;
        //alert(this.div.offsetHeight);
    };
    ZTextField.prototype.checkEndText = function (str, spine, h) {
        var c_num = str.length >> 1;
        var c_str = str.substring(0, c_num);
        var c_str2 = str.substring(c_num);
        spine.innerHTML = c_str;
        var ret = 0;
        if (this.cont.offsetHeight > h) {
            ret = this.checkEndText(c_str, spine, h);
        }
        else {
            c_num = c_str2.length >> 1;
            var c_str2_1 = c_str2.substring(0, c_num);
            var c_str2_2 = c_str2.substring(c_num);
            spine.innerHTML = c_str + c_str2_1;
            if (this.cont.offsetHeight > h) {
                spine.innerHTML = c_str;
                ret = c_str.length;
            }
            else {
                ret = c_str.length + c_str2_1.length;
            }
        }
        return ret;
    };
    ZTextField.prototype.checkTextHeight = function (text, spine, h, ret) {
        while (true) {
            spine.innerHTML = text;
            if (this.cont.offsetHeight > h) {
                var num = this.checkEndText(text, spine, h);
                ret.push(this.cont.innerHTML);
                this.cont.innerHTML = "";
                text.substring(num);
                spine = document.createElement("spine");
                this.cont.appendChild(spine);
            }
            else {
                break;
            }
        }
    };
    ZTextField.prototype.checkHTML = function (child, h, ret) {
        if ("#text" == child.nodeName) {
            console.log(child.nodeValue);
            var text = document.createElement("spine");
            this.cont.appendChild(text);
            //text.nodeValue = child.nodeValue;
            /*text.innerHTML = child.nodeValue;
            this.cont.appendChild(text);*/
            this.checkTextHeight(child.nodeValue, text, h, ret);
            //alert(this.cont.offsetHeight);
        }
        else {
            if ("BR" == child.nodeName || "P" == child.nodeName) {
                this.cont.appendChild(document.createElement(child.nodeName));
                if (h <= this.cont.offsetHeight) {
                    ret.push(this.cont.innerHTML);
                    this.cont.innerHTML = "";
                }
            }
            console.log(child.nodeName);
            var childN = child.childNodes;
            var len = (childN.length);
            for (var i = 0; i < len; i++) {
                this.checkHTML(childN[i], h, ret);
            }
        }
    };
    Object.defineProperty(ZTextField.prototype, "x", {
        set: function (num) {
            this.div.style.left = num + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZTextField.prototype, "y", {
        set: function (num) {
            this.div.style.top = num + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZTextField.prototype, "text", {
        set: function (str) {
            this.div.innerHTML = str;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZTextField.prototype, "size", {
        set: function (num) {
            this.div.style.fontSize = num + "px";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZTextField.prototype, "visible", {
        set: function (b) {
            if (b) {
                this.div.style.display = "";
            }
            else {
                this.div.style.display = "none";
            }
        },
        enumerable: true,
        configurable: true
    });
    return ZTextField;
}());
__reflect(ZTextField.prototype, "ZTextField");
//# sourceMappingURL=ZTextField.js.map