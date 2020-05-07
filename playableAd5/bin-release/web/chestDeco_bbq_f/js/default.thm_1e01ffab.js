
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = undefined;generateEUI.paths['resource/eui_skins/BuildSkin.exml'] = window.BuildSkin = (function (_super) {
	__extends(BuildSkin, _super);
	function BuildSkin() {
		_super.call(this);
		this.skinParts = ["bg","kImgContent"];
		
		this.height = 140;
		this.width = 200;
		this.elementsContent = [this.bg_i(),this.kImgContent_i()];
	}
	var _proto = BuildSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.left = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.horizontalCenter = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return BuildSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameEndDevSkin.exml'] = window.GameEndDevSkin = (function (_super) {
	__extends(GameEndDevSkin, _super);
	function GameEndDevSkin() {
		_super.call(this);
		this.skinParts = ["kGrpAction","kImgLeft","kImgRight","kImgContent","kGrpContent","kImgTopic","kImgWelldown","kGrpTopic","kImgRedesign","kImgShare","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpAction_i(),this.kGrpMain_i()];
	}
	var _proto = GameEndDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.3;
		t.top = 0;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Group1_i(),this.kGrpContent_i(),this.kGrpTopic_i(),this.kImgRedesign_i(),this.kImgShare_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 721;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 1280;
		t.y = -2;
		t.elementsContent = [this.kImgLeft_i(),this.kImgRight_i()];
		return t;
	};
	_proto.kImgLeft_i = function () {
		var t = new eui.Image();
		this.kImgLeft = t;
		t.anchorOffsetX = 846.48;
		t.anchorOffsetY = 362.79;
		t.height = 721;
		t.source = "";
		t.width = 849;
		t.x = 846.48;
		t.y = 362.79;
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.anchorOffsetX = 850;
		t.anchorOffsetY = 358.18;
		t.height = 721;
		t.rotation = 180;
		t.source = "";
		t.width = 849;
		t.x = 426.97;
		t.y = 364.82;
		return t;
	};
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetX = 417.14;
		t.anchorOffsetY = 311.43;
		t.height = 609;
		t.horizontalCenter = -0.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.width = 833;
		t.elementsContent = [this._Rect2_i(),this.kImgContent_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.height = 589;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 813;
		return t;
	};
	_proto.kGrpTopic_i = function () {
		var t = new eui.Group();
		this.kGrpTopic = t;
		t.anchorOffsetX = 252;
		t.anchorOffsetY = 60;
		t.horizontalCenter = 0.5;
		t.y = 120;
		t.elementsContent = [this.kImgTopic_i(),this.kImgWelldown_i()];
		return t;
	};
	_proto.kImgTopic_i = function () {
		var t = new eui.Image();
		this.kImgTopic = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgWelldown_i = function () {
		var t = new eui.Image();
		this.kImgWelldown = t;
		t.source = "";
		t.x = 97;
		t.y = 8;
		return t;
	};
	_proto.kImgRedesign_i = function () {
		var t = new eui.Image();
		this.kImgRedesign = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 54;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "";
		t.x = 471;
		t.y = 644;
		return t;
	};
	_proto.kImgShare_i = function () {
		var t = new eui.Image();
		this.kImgShare = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 52;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "";
		t.x = 809.5;
		t.y = 642;
		return t;
	};
	return GameEndDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameEndSkin.exml'] = window.GameEndSkin = (function (_super) {
	__extends(GameEndSkin, _super);
	function GameEndSkin() {
		_super.call(this);
		this.skinParts = ["kGrpAction","kImgLeft","kImgRight","kImgContent","kGrpContent","kImgTopic","kImgWelldown","kGrpTopic","kImgRedesign","kImgShare","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpAction_i(),this.kGrpMain_i()];
	}
	var _proto = GameEndSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.strokeAlpha = 0.3;
		t.top = 0;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this._Group1_i(),this.kGrpContent_i(),this.kGrpTopic_i(),this.kImgRedesign_i(),this.kImgShare_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 721;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 1280;
		t.y = -2;
		t.elementsContent = [this.kImgLeft_i(),this.kImgRight_i()];
		return t;
	};
	_proto.kImgLeft_i = function () {
		var t = new eui.Image();
		this.kImgLeft = t;
		t.anchorOffsetX = 846.48;
		t.anchorOffsetY = 362.79;
		t.height = 721;
		t.source = "end_float_png";
		t.width = 849;
		t.x = 846.48;
		t.y = 362.79;
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.anchorOffsetX = 850;
		t.anchorOffsetY = 358.18;
		t.height = 721;
		t.rotation = 180;
		t.source = "end_float_png";
		t.width = 849;
		t.x = 426.97;
		t.y = 364.82;
		return t;
	};
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetX = 417.14;
		t.anchorOffsetY = 311.43;
		t.height = 609;
		t.horizontalCenter = -0.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.verticalCenter = 0;
		t.width = 833;
		t.elementsContent = [this._Rect2_i(),this.kImgContent_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.ellipseHeight = 60;
		t.ellipseWidth = 60;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.height = 589;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 813;
		return t;
	};
	_proto.kGrpTopic_i = function () {
		var t = new eui.Group();
		this.kGrpTopic = t;
		t.anchorOffsetX = 252;
		t.anchorOffsetY = 60;
		t.horizontalCenter = 0.5;
		t.y = 120;
		t.elementsContent = [this.kImgTopic_i(),this.kImgWelldown_i()];
		return t;
	};
	_proto.kImgTopic_i = function () {
		var t = new eui.Image();
		this.kImgTopic = t;
		t.source = "main_reward_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgWelldown_i = function () {
		var t = new eui.Image();
		this.kImgWelldown = t;
		t.source = "end_welldone_png";
		t.x = 97;
		t.y = 8;
		return t;
	};
	_proto.kImgRedesign_i = function () {
		var t = new eui.Image();
		this.kImgRedesign = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 54;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "end_design_png";
		t.x = 471;
		t.y = 644;
		return t;
	};
	_proto.kImgShare_i = function () {
		var t = new eui.Image();
		this.kImgShare = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 52;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "end_share_png";
		t.x = 809.5;
		t.y = 642;
		return t;
	};
	return GameEndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainDevSkin.exml'] = window.GameMainDevSkin = (function (_super) {
	__extends(GameMainDevSkin, _super);
	function GameMainDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgShape1","kImgBuild1","kGrpBuild1","kImgShape2","kImgBuild2","kGrpBuild2","kImgShape3","kImgBuild3","kGrpBuild3","kImgDeocrate","kImgMenuBg","kImgGift","kBuild1","kBuild2","kBuild3","kGrpMenu","kGrpAction","kGrpGuide","kImgPlayfree","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameMainDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i(),this.kGrpBuild1_i(),this.kGrpBuild2_i(),this.kGrpBuild3_i(),this.kImgDeocrate_i(),this.kGrpMenu_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kImgPlayfree_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpBuild1_i = function () {
		var t = new eui.Group();
		this.kGrpBuild1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 420;
		t.width = 512;
		t.x = 256;
		t.y = 6;
		t.elementsContent = [this.kImgShape1_i(),this.kImgBuild1_i()];
		return t;
	};
	_proto.kImgShape1_i = function () {
		var t = new eui.Image();
		this.kImgShape1 = t;
		t.source = "";
		t.visible = false;
		t.x = 17.82;
		t.y = 212.09;
		return t;
	};
	_proto.kImgBuild1_i = function () {
		var t = new eui.Image();
		this.kImgBuild1 = t;
		t.alpha = 0;
		t.source = "";
		t.x = 8;
		t.y = 12;
		return t;
	};
	_proto.kGrpBuild2_i = function () {
		var t = new eui.Group();
		this.kGrpBuild2 = t;
		t.height = 272;
		t.width = 488;
		t.x = 532;
		t.y = 382;
		t.elementsContent = [this.kImgShape2_i(),this.kImgBuild2_i()];
		return t;
	};
	_proto.kImgShape2_i = function () {
		var t = new eui.Image();
		this.kImgShape2 = t;
		t.source = "";
		t.visible = false;
		t.x = -80;
		t.y = -20;
		return t;
	};
	_proto.kImgBuild2_i = function () {
		var t = new eui.Image();
		this.kImgBuild2 = t;
		t.alpha = 0;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpBuild3_i = function () {
		var t = new eui.Group();
		this.kGrpBuild3 = t;
		t.x = 674;
		t.y = 126;
		t.elementsContent = [this.kImgShape3_i(),this.kImgBuild3_i()];
		return t;
	};
	_proto.kImgShape3_i = function () {
		var t = new eui.Image();
		this.kImgShape3 = t;
		t.source = "";
		t.visible = false;
		t.x = 0;
		t.y = 48;
		return t;
	};
	_proto.kImgBuild3_i = function () {
		var t = new eui.Image();
		this.kImgBuild3 = t;
		t.alpha = 0;
		t.source = "";
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.kImgDeocrate_i = function () {
		var t = new eui.Image();
		this.kImgDeocrate = t;
		t.alpha = 0;
		t.source = "";
		t.x = -0.5;
		t.y = 224;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgMenuBg_i(),this.kImgGift_i(),this.kBuild1_i(),this.kBuild2_i(),this.kBuild3_i()];
		return t;
	};
	_proto.kImgMenuBg_i = function () {
		var t = new eui.Image();
		this.kImgMenuBg = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgGift_i = function () {
		var t = new eui.Image();
		this.kImgGift = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 120;
		t.source = "";
		t.x = 114.35;
		t.y = 681.09;
		return t;
	};
	_proto.kBuild1_i = function () {
		var t = new Build();
		this.kBuild1 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 70;
		t.height = 140;
		t.horizontalCenter = -18;
		t.width = 200;
		t.y = 176;
		return t;
	};
	_proto.kBuild2_i = function () {
		var t = new Build();
		this.kBuild2 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 72;
		t.height = 140;
		t.horizontalCenter = -18;
		t.width = 200;
		t.y = 340;
		return t;
	};
	_proto.kBuild3_i = function () {
		var t = new Build();
		this.kBuild3 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 70;
		t.height = 140;
		t.horizontalCenter = -18;
		t.width = 200;
		t.y = 504;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kImgPlayfree_i = function () {
		var t = new eui.Image();
		this.kImgPlayfree = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 52;
		t.source = "";
		t.x = 1133;
		t.y = 649.59;
		return t;
	};
	return GameMainDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainSkin.exml'] = window.GameMainSkin = (function (_super) {
	__extends(GameMainSkin, _super);
	function GameMainSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgShape1","kImgBuild1","kGrpBuild1","kImgShape2","kImgBuild2","kGrpBuild2","kImgShape3","kImgBuild3","kGrpBuild3","kImgDeocrate","kImgMenuBg","kImgGift","kBuild1","kBuild2","kBuild3","kGrpMenu","kGrpAction","kGrpGuide","kImgPlayfree","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameMainSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i(),this.kGrpBuild1_i(),this.kGrpBuild2_i(),this.kGrpBuild3_i(),this.kImgDeocrate_i(),this.kGrpMenu_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kImgPlayfree_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.horizontalCenter = 0;
		t.source = "main_bg1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpBuild1_i = function () {
		var t = new eui.Group();
		this.kGrpBuild1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 420;
		t.width = 512;
		t.x = 256;
		t.y = 6;
		t.elementsContent = [this.kImgShape1_i(),this.kImgBuild1_i()];
		return t;
	};
	_proto.kImgShape1_i = function () {
		var t = new eui.Image();
		this.kImgShape1 = t;
		t.source = "main_shape1_png";
		t.visible = false;
		t.x = 17.82;
		t.y = 212.09;
		return t;
	};
	_proto.kImgBuild1_i = function () {
		var t = new eui.Image();
		this.kImgBuild1 = t;
		t.alpha = 0;
		t.source = "main_build1_png";
		t.x = 8;
		t.y = 12;
		return t;
	};
	_proto.kGrpBuild2_i = function () {
		var t = new eui.Group();
		this.kGrpBuild2 = t;
		t.height = 272;
		t.width = 488;
		t.x = 532;
		t.y = 382;
		t.elementsContent = [this.kImgShape2_i(),this.kImgBuild2_i()];
		return t;
	};
	_proto.kImgShape2_i = function () {
		var t = new eui.Image();
		this.kImgShape2 = t;
		t.source = "main_shape1_png";
		t.visible = false;
		t.x = 62;
		t.y = 20.09;
		return t;
	};
	_proto.kImgBuild2_i = function () {
		var t = new eui.Image();
		this.kImgBuild2 = t;
		t.alpha = 0;
		t.source = "main_build2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpBuild3_i = function () {
		var t = new eui.Group();
		this.kGrpBuild3 = t;
		t.height = 304;
		t.width = 514;
		t.x = 674;
		t.y = 126;
		t.elementsContent = [this.kImgShape3_i(),this.kImgBuild3_i()];
		return t;
	};
	_proto.kImgShape3_i = function () {
		var t = new eui.Image();
		this.kImgShape3 = t;
		t.source = "main_shape3_png";
		t.visible = false;
		t.x = 0;
		t.y = 48;
		return t;
	};
	_proto.kImgBuild3_i = function () {
		var t = new eui.Image();
		this.kImgBuild3 = t;
		t.alpha = 0;
		t.source = "main_build3_png";
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.kImgDeocrate_i = function () {
		var t = new eui.Image();
		this.kImgDeocrate = t;
		t.alpha = 0;
		t.source = "main_decorate_png";
		t.x = -0.5;
		t.y = 224;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgMenuBg_i(),this.kImgGift_i(),this.kBuild1_i(),this.kBuild2_i(),this.kBuild3_i()];
		return t;
	};
	_proto.kImgMenuBg_i = function () {
		var t = new eui.Image();
		this.kImgMenuBg = t;
		t.source = "main_alertbg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgGift_i = function () {
		var t = new eui.Image();
		this.kImgGift = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 120;
		t.source = "main_build4_png";
		t.x = 114.35;
		t.y = 681.09;
		return t;
	};
	_proto.kBuild1_i = function () {
		var t = new Build();
		this.kBuild1 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 70;
		t.height = 140;
		t.horizontalCenter = -18;
		t.width = 200;
		t.y = 176;
		return t;
	};
	_proto.kBuild2_i = function () {
		var t = new Build();
		this.kBuild2 = t;
		t.anchorOffsetX = 100;
		t.anchorOffsetY = 72;
		t.height = 140;
		t.horizontalCenter = -18;
		t.width = 200;
		t.y = 340;
		return t;
	};
	_proto.kBuild3_i = function () {
		var t = new Build();
		this.kBuild3 = t;
		t.anchorOffsetX = 102;
		t.anchorOffsetY = 70;
		t.height = 140;
		t.horizontalCenter = -18;
		t.width = 200;
		t.y = 504;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kImgPlayfree_i = function () {
		var t = new eui.Image();
		this.kImgPlayfree = t;
		t.anchorOffsetX = 146;
		t.anchorOffsetY = 52;
		t.source = "play_png";
		t.x = 1133;
		t.y = 649.59;
		return t;
	};
	return GameMainSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameStartDevSkin.exml'] = window.GameStartDevSkin = (function (_super) {
	__extends(GameStartDevSkin, _super);
	function GameStartDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgLux","kImgBox","kBtnTap","kImgHand","kGrpAction","kImgMask","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameStartDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i(),this.kImgLux_i(),this.kImgBox_i(),this.kBtnTap_i(),this.kImgHand_i(),this.kGrpAction_i(),this.kImgMask_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kImgLux_i = function () {
		var t = new eui.Image();
		this.kImgLux = t;
		t.anchorOffsetX = 398;
		t.anchorOffsetY = 402;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "";
		t.visible = false;
		t.x = 707.5;
		t.y = 250;
		return t;
	};
	_proto.kImgBox_i = function () {
		var t = new eui.Image();
		this.kImgBox = t;
		t.anchorOffsetX = 208;
		t.anchorOffsetY = 256;
		t.source = "";
		t.x = 705.5;
		t.y = 314;
		return t;
	};
	_proto.kBtnTap_i = function () {
		var t = new eui.Image();
		this.kBtnTap = t;
		t.anchorOffsetX = 246;
		t.anchorOffsetY = 88;
		t.source = "";
		t.x = 706.5;
		t.y = 498;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 684.5;
		t.y = 186;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		return t;
	};
	_proto.kImgMask_i = function () {
		var t = new eui.Rect();
		this.kImgMask = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	return GameStartDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameStartSkin.exml'] = window.GameStartSkin = (function (_super) {
	__extends(GameStartSkin, _super);
	function GameStartSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgLux","kImgBox","kBtnTap","kImgHand","kGrpAction","kImgMask","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameStartSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i(),this.kImgLux_i(),this.kImgBox_i(),this.kBtnTap_i(),this.kImgHand_i(),this.kGrpAction_i(),this.kImgMask_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "start_bg_png";
		t.top = 0;
		return t;
	};
	_proto.kImgLux_i = function () {
		var t = new eui.Image();
		this.kImgLux = t;
		t.anchorOffsetX = 398;
		t.anchorOffsetY = 402;
		t.scaleX = 2;
		t.scaleY = 2;
		t.source = "start_lux_png";
		t.visible = false;
		t.x = 707.5;
		t.y = 250;
		return t;
	};
	_proto.kImgBox_i = function () {
		var t = new eui.Image();
		this.kImgBox = t;
		t.anchorOffsetX = 208;
		t.anchorOffsetY = 256;
		t.source = "start_box_close_png";
		t.x = 705.5;
		t.y = 314;
		return t;
	};
	_proto.kBtnTap_i = function () {
		var t = new eui.Image();
		this.kBtnTap = t;
		t.anchorOffsetX = 246;
		t.anchorOffsetY = 88;
		t.source = "start_tap_png";
		t.x = 706.5;
		t.y = 498;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 684.5;
		t.y = 186;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		t.touchThrough = true;
		return t;
	};
	_proto.kImgMask_i = function () {
		var t = new eui.Rect();
		this.kImgMask = t;
		t.bottom = 0;
		t.fillAlpha = 0;
		t.fillColor = 0xffffff;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	return GameStartSkin;
})(eui.Skin);