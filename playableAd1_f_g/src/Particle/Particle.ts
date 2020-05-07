// TypeScript file
//创建播放粒子动画: 资源名,加载的容器,x,y,常规适配
class ParticleUtil {
    //单例写法
    private static _instance: ParticleUtil;
    public static get instance(): ParticleUtil {
        if (!this._instance) {
            this._instance = new ParticleUtil();
        }
        return this._instance;
    }

    public creatParticle(_pname: string, _target, _x: number, _y: number) {
        let texture = RES.getRes(_pname + "_png");
        let config = RES.getRes(_pname + "_json");
        var _particle = new particle.GravityParticleSystem(texture, config);
        _target.addChild(_particle);
        _particle.x = _x;
        _particle.y = _y;
        _particle.start();
        return _particle;
    }

    public async getParticleAtH5(_target: eui.Group, data: Object, url: string, _x: number = 0, _y: number = 0) {
        return new Promise((reslove, reject) => {
            RES.getResByUrl(url, (texture) => {
                var _particle = new particle.GravityParticleSystem(texture, data);
                _target.addChild(_particle);
                _particle.x = _x;
                _particle.y = _y;
                _particle.start();
                reslove(_particle);
            }, this, RES.ResourceItem.TYPE_IMAGE);
        });
    }
}