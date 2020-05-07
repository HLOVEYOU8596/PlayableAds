// TypeScript file
/**
 * Copy by Liu Yang
 * Sound管理类
 */
class SoundManager {
	private static _manager: SoundManager;
	public static get Instance() {
		if (!SoundManager._manager) {
			SoundManager._manager = new SoundManager();
		}
		return SoundManager._manager;
	}

	private bgMusic: egret.Sound;	//背景音乐
	private bgMusic_channel: egret.SoundChannel;
	private isbgMusicComplete: boolean = false;//背景音乐是否加载完成

	private click: egret.Sound;		//点击时的声音
	private isClickComplete: boolean = false;

	private _isMusic: boolean = false;// 背景音乐是否播放
	private _isEffect: boolean = false;//音效是否播放

	private _voluem: number = 1;//音量
	private cs: number = 1;	//控制背景音乐不会重复添加
	public constructor() {
		this.bgMusic = new egret.Sound();
		this.bgMusic.load("resource/Pianoboy.mp3");
		this.bgMusic.addEventListener(egret.Event.COMPLETE, () => {
			this.isbgMusicComplete = true;
		}, this);

		this.click = new egret.Sound();
		this.click.load("resource/lianji101.mp3");
		this.click.addEventListener(egret.Event.COMPLETE, () => {
			this.isClickComplete = true;
		}, this);

	}

	//播放背景音乐
	public playBgMusic() {
		if (this.isbgMusicComplete && this.isMusic && this.cs) {
			this.bgMusic_channel = this.bgMusic.play(0, 0);
			this.cs = 0;
		}
	}
	//停止背景音乐
	public stopBgMusic() {
		if (this.bgMusic_channel) {
			this.bgMusic_channel.stop();
			this.bgMusic_channel = null;
			this.cs = 1;
		}
	}
	//播放音效
	public playClickEffect() {
		// this.isEffect 调用getter方法
		if (this.isClickComplete && this.isEffect) {
			this.click.play(0, 1);
		}
	}

	//设置音量
	private setVolume(v: number) {
		if (this.bgMusic_channel) {
			this.bgMusic_channel.volume = v;
		}
	}

	public get isMusic() {
		let ret = egret.localStorage.getItem("isMusic");
		if (ret == "true" || !ret) {
			this._isMusic = true;
		} else {
			this._isMusic = false;
		}
		return this._isMusic;
	}

	public set isMusic(b: boolean) {
		this._isMusic = b;
		egret.localStorage.setItem("isMusic", b.toString());
		if (b) {
			//播放声音
			this.playBgMusic();
		} else {
			//关闭声音
			this.stopBgMusic();
		}
	}
	//设置_isEffect属性的值
	public set isEffect(b: boolean) {
		this._isEffect = b;
		egret.localStorage.setItem("isEffect", b.toString());
	}

	//获取_isEffect属性的值
	public get isEffect() {
		let ret = egret.localStorage.getItem("isEffect");
		if (ret == "true" || ret == null) {
			this._isEffect = true;
		} else {
			this._isEffect = false;
		}
		return this._isEffect;
	}

	//设置音量
	public set volume(v:number){
		this._voluem = v;
		egret.localStorage.setItem("volume",v.toString());
		this.setVolume(v);
	}

	public get volume(){
		let ret =  egret.localStorage.getItem("volume");
		if(ret==null){
			this._voluem = 1;
		}else{
			this._voluem = Number(ret);
		}
		return this._voluem;
	}
}