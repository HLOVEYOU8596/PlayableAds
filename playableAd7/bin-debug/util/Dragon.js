// // TypeScript file
// class Dragon extends BaseClass {
//     public static async createArmature(_x: number, _y: number, armatureName: string, _target, a: any, b: any, c: any) {
//         // let rawData = RES.getRes(armatureName + "_ske_dbbin");
//         let texture = await this.getImageData(b);
//         // let textureData = RES.getRes(armatureName + "_tex_json");
//         let factory = new dragonBones.EgretFactory();
//         factory.parseDragonBonesData(a,armatureName);
//         factory.parseTextureAtlasData(c, texture);
//         var armature = factory.buildArmatureDisplay(armatureName);
//         _target.addChild(armature);
//         armature.x = _x;
//         armature.y = _y;
//         return armature;
//     }
//     public static async getImageData(url: string) {
//         return new Promise((reslove, reject) => {
//             RES.getResByUrl(url, (texture) => {
//                 reslove(texture);
//             }, this, RES.ResourceItem.TYPE_IMAGE);
//         });
//     }
//     public static createArmature1(_x: number, _y: number, armatureName: string, target) {
//         if (target != null) {
//             let rawData = RES.getRes(armatureName + "_ske_json");
//             let texture = RES.getRes(armatureName + "_tex_png");
//             let textureData = RES.getRes(armatureName + "_tex_json");
//             var dragonbonesFactory: dragonBones.EgretFactory = new dragonBones.EgretFactory();
//             dragonbonesFactory.parseDragonBonesData(rawData, armatureName);
//             dragonbonesFactory.parseTextureAtlasData(textureData, texture, armatureName);
//             var armature: dragonBones.Armature = dragonbonesFactory.buildArmature("Armature");
//             target.addChild(armature);
//             armature.display.x = _x;
//             armature.display.y = _y;
//             dragonBones.WorldClock.clock.add(armature);
//             return armature;
//         } else{
//             console.log("装载容器不存在")
//             return null
//         }
//     }
// } 
