var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
/**
 * Copy by Liu Yang
 * Sound管理类
 */
var SoundManager = (function () {
    function SoundManager() {
        var _this = this;
        this.isbgMusicComplete = false; //背景音乐是否加载完成
        this.isClickComplete = false;
        this._isMusic = false; // 背景音乐是否播放
        this._isEffect = false; //音效是否播放
        this._voluem = 1; //音量
        this.cs = 1; //控制背景音乐不会重复添加
        this.bgMusic = new egret.Sound();
        this.bgMusic.load("resource/Pianoboy.mp3");
        this.bgMusic.addEventListener(egret.Event.COMPLETE, function () {
            _this.isbgMusicComplete = true;
        }, this);
        this.click = new egret.Sound();
        this.click.load("resource/lianji101.mp3");
        this.click.addEventListener(egret.Event.COMPLETE, function () {
            _this.isClickComplete = true;
        }, this);
    }
    Object.defineProperty(SoundManager, "Instance", {
        get: function () {
            if (!SoundManager._manager) {
                SoundManager._manager = new SoundManager();
            }
            return SoundManager._manager;
        },
        enumerable: true,
        configurable: true
    });
    //播放背景音乐
    SoundManager.prototype.playBgMusic = function () {
        if (this.isbgMusicComplete && this.isMusic && this.cs) {
            this.bgMusic_channel = this.bgMusic.play(0, 0);
            this.cs = 0;
        }
    };
    //停止背景音乐
    SoundManager.prototype.stopBgMusic = function () {
        if (this.bgMusic_channel) {
            this.bgMusic_channel.stop();
            this.bgMusic_channel = null;
            this.cs = 1;
        }
    };
    //播放音效
    SoundManager.prototype.playClickEffect = function () {
        // this.isEffect 调用getter方法
        if (this.isClickComplete && this.isEffect) {
            this.click.play(0, 1);
        }
    };
    //设置音量
    SoundManager.prototype.setVolume = function (v) {
        if (this.bgMusic_channel) {
            this.bgMusic_channel.volume = v;
        }
    };
    Object.defineProperty(SoundManager.prototype, "isMusic", {
        get: function () {
            var ret = egret.localStorage.getItem("isMusic");
            if (ret == "true" || !ret) {
                this._isMusic = true;
            }
            else {
                this._isMusic = false;
            }
            return this._isMusic;
        },
        set: function (b) {
            this._isMusic = b;
            egret.localStorage.setItem("isMusic", b.toString());
            if (b) {
                //播放声音
                this.playBgMusic();
            }
            else {
                //关闭声音
                this.stopBgMusic();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "isEffect", {
        //获取_isEffect属性的值
        get: function () {
            var ret = egret.localStorage.getItem("isEffect");
            if (ret == "true" || ret == null) {
                this._isEffect = true;
            }
            else {
                this._isEffect = false;
            }
            return this._isEffect;
        },
        //设置_isEffect属性的值
        set: function (b) {
            this._isEffect = b;
            egret.localStorage.setItem("isEffect", b.toString());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "volume", {
        get: function () {
            var ret = egret.localStorage.getItem("volume");
            if (ret == null) {
                this._voluem = 1;
            }
            else {
                this._voluem = Number(ret);
            }
            return this._voluem;
        },
        //设置音量
        set: function (v) {
            this._voluem = v;
            egret.localStorage.setItem("volume", v.toString());
            this.setVolume(v);
        },
        enumerable: true,
        configurable: true
    });
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
