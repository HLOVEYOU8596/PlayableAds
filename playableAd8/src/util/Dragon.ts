// TypeScript file
class Dragon extends BaseClass {
    public static async createArmature(_x: number, _y: number, armatureName: string, _target, a: any, b: any, c: any) {
        // let rawData = RES.getRes(armatureName + "_ske_dbbin");
        let texture = await this.getImageData(b);
        // let textureData = RES.getRes(armatureName + "_tex_json");

        let factory = new dragonBones.EgretFactory();
        factory.parseDragonBonesData(a);
        factory.parseTextureAtlasData(c, texture);
        var armature = factory.buildArmatureDisplay(armatureName);
        _target.addChild(armature);
        armature.x = _x;
        armature.y = _y;
        return armature;
    }

    private static async getImageData(url: string) {
        return new Promise((reslove, reject) => {
            RES.getResByUrl(url, (texture) => {
                reslove(texture);
            }, this, RES.ResourceItem.TYPE_IMAGE);
        });

    }
}