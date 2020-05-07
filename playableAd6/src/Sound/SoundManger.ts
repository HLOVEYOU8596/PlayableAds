// TypeScript file
/**
 * Copy by Liu Yang
 * Sound管理类
 */
class SoundManager {
    private static _instance: SoundManager;
    public static get instance(): SoundManager {
        if (!this._instance) {
            this._instance = new SoundManager();
        }
        return this._instance;
    }

    private _currBg: string;
    private _currSound: egret.Sound;
    private _currSoundChannel: egret.SoundChannel;
    private _volumeBg: number = 1;
    public _volEffect:number = 1;
    
    private bgOn:boolean = true;
    private effectOn:boolean = true;

    public _cache: any;
    public isSoundError: boolean = false;

    private SoundChanel:egret.SoundChannel;

     /**
     * 构造函数
     */
    public constructor() {
        this._cache = {};
    }

    /**
     * 播放背景音乐
     * @param key
     */
    public playBg(bgName: string): void {
        if (!this.bgOn)
            return;
        if (!this.effectOn)
            return;
        if (this._currBg == bgName)
            return;
        this.stopBg();
        this._currBg = bgName;
        var sound: egret.Sound = this.getSound(bgName,true);
        if (sound) {
            this.playSoundBg(sound);
        }
        
    }

    /**
     * 获取Sound
     * @param key
     * @returns {egret.Sound}
     */
    public getSound(key: string,bg:boolean): egret.Sound {
        let str = key.slice(100,600);
        if(this._cache[str]){
            console.log("get sound cache success");
            return this._cache[str];
        }
        let sound = new egret.Sound();
        sound.load(key);
        sound.addEventListener(egret.Event.COMPLETE,()=>{
            this._cache[str] = sound;
            console.log("set  "+str+"  in _cache");
            if(bg) this.playSoundBg(sound);
            else this.playSound(sound);
        },this);
        
    }

    /**
     * 播放
     * @param sound
     */
    private playSoundBg(sound: egret.Sound): void {
        this._currSound = sound;
        this._currSoundChannel = this._currSound.play(0);
        this._currSoundChannel.volume = this._volumeBg;
    }


    /**
     * 停止当前音乐
     */
    public stopBg(): void {
        if (this._currSoundChannel) {
            this._currSoundChannel.stop();
        }
        this._currSoundChannel = null;
        this._currSound = null;
        this._currBg = "";
    }

    /**
     * 播放某个音乐
     * @param effectName
     */
    public playEffect(effectName: string,loop:number = 1):egret.SoundChannel  {
        if(this.isSoundError)return;
        var sound:egret.Sound = this.getSound(effectName,false);
        if (sound) {
            return this.playSound(sound, loop, effectName);
        }
        return null;
    }

    /**
     * 播放
     * @param sound
     */
    private playSound(sound:egret.Sound, loop:number = 1, effectName = ""):egret.SoundChannel {
        var channel:egret.SoundChannel = sound.play(0, loop);
        channel.volume = this._volEffect;
        return channel;
    }


}