var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
// TypeScript file
/**
 * Copy by Liu Yang
 * Sound管理类
 */
var SoundManager = (function () {
    /**
    * 构造函数
    */
    function SoundManager() {
        this._volumeBg = 0.6;
        this._volEffect = 0.8;
        this.bgOn = true;
        this.effectOn = true;
        this.isSoundError = false;
        this._cache = {};
    }
    Object.defineProperty(SoundManager, "instance", {
        get: function () {
            if (!this._instance) {
                this._instance = new SoundManager();
            }
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 播放背景音乐
     * @param key
     */
    SoundManager.prototype.playBg = function (bgName) {
        if (!this.bgOn)
            return;
        if (!this.effectOn)
            return;
        if (this._currBg == bgName)
            return;
        this.stopBg();
        this._currBg = bgName;
        var sound = this.getSound(bgName, true);
        if (sound) {
            this.playSoundBg(sound);
        }
    };
    /**
     * 获取Sound
     * @param key
     * @returns {egret.Sound}
     */
    SoundManager.prototype.getSound = function (key, bg) {
        var _this = this;
        var str = key.slice(2450, 2500);
        if (this._cache[str]) {
            console.log("get sound cache success");
            return this._cache[str];
        }
        var sound = new egret.Sound();
        sound.load(key);
        sound.addEventListener(egret.Event.COMPLETE, function () {
            _this._cache[str] = sound;
            console.log("set  " + str + "  in _cache");
            if (bg)
                _this.playSoundBg(sound);
            else
                _this.playSound(sound);
        }, this);
    };
    /**
     * 播放
     * @param sound
     */
    SoundManager.prototype.playSoundBg = function (sound) {
        this._currSound = sound;
        this._currSoundChannel = this._currSound.play(0);
        this._currSoundChannel.volume = this._volumeBg;
    };
    /**
     * 停止当前音乐
     */
    SoundManager.prototype.stopBg = function () {
        if (this._currSoundChannel) {
            this._currSoundChannel.stop();
        }
        this._currSoundChannel = null;
        this._currSound = null;
        this._currBg = "";
    };
    /**
     * 播放某个音乐
     * @param effectName
     */
    SoundManager.prototype.playEffect = function (effectName, loop) {
        if (loop === void 0) { loop = 1; }
        if (this.isSoundError)
            return;
        var sound = this.getSound(effectName, false);
        if (sound) {
            return this.playSound(sound, loop, effectName);
        }
        return null;
    };
    /**
     * 播放
     * @param sound
     */
    SoundManager.prototype.playSound = function (sound, loop, effectName) {
        if (loop === void 0) { loop = 1; }
        if (effectName === void 0) { effectName = ""; }
        var channel = sound.play(0, loop);
        channel.volume = this._volEffect;
        return channel;
    };
    return SoundManager;
}());
__reflect(SoundManager.prototype, "SoundManager");
//# sourceMappingURL=SoundManger.js.map