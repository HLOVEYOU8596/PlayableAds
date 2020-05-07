
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
                generateEUI.skins = undefined;generateEUI.paths['resource/eui_skins/FoodDevSkin.exml'] = window.FoodDevSkin = (function (_super) {
	__extends(FoodDevSkin, _super);
	function FoodDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgDrumstick","kImgFrties","kImgTomoto","kGrpAll"];
		
		this.currentState = "state1";
		this.height = 156;
		this.width = 169;
		this.elementsContent = [this.kGrpAll_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick","source",""),
					new eui.SetProperty("kImgFrties","visible",false),
					new eui.SetProperty("kImgTomoto","visible",false)
				])
		];
	}
	var _proto = FoodDevSkin.prototype;

	_proto.kGrpAll_i = function () {
		var t = new eui.Group();
		this.kGrpAll = t;
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 77;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgDrumstick_i(),this.kImgFrties_i(),this.kImgTomoto_i()];
		return t;
	};
	_proto.kImgDrumstick_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 63;
		t.source = "";
		t.x = 99;
		t.y = 65;
		return t;
	};
	_proto.kImgFrties_i = function () {
		var t = new eui.Image();
		this.kImgFrties = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 35;
		t.left = 0;
		t.source = "";
		t.y = 118.5;
		return t;
	};
	_proto.kImgTomoto_i = function () {
		var t = new eui.Image();
		this.kImgTomoto = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 29;
		t.source = "";
		t.x = 124.5;
		t.y = 124.5;
		return t;
	};
	return FoodDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/FoodSkin.exml'] = window.FoodSkin = (function (_super) {
	__extends(FoodSkin, _super);
	function FoodSkin() {
		_super.call(this);
		this.skinParts = ["kImgDrumstick","kImgFrties","kImgTomoto","kGrpAll"];
		
		this.currentState = "state1";
		this.height = 156;
		this.width = 169;
		this.elementsContent = [this.kGrpAll_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick","source","main_drumstick0_png"),
					new eui.SetProperty("kImgFrties","visible",false),
					new eui.SetProperty("kImgTomoto","visible",false)
				])
		];
	}
	var _proto = FoodSkin.prototype;

	_proto.kGrpAll_i = function () {
		var t = new eui.Group();
		this.kGrpAll = t;
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 77;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgDrumstick_i(),this.kImgFrties_i(),this.kImgTomoto_i()];
		return t;
	};
	_proto.kImgDrumstick_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 63;
		t.source = "main_drumstick2_png";
		t.x = 99;
		t.y = 65;
		return t;
	};
	_proto.kImgFrties_i = function () {
		var t = new eui.Image();
		this.kImgFrties = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 35;
		t.left = 0;
		t.source = "main_fries_png";
		t.y = 118.5;
		return t;
	};
	_proto.kImgTomoto_i = function () {
		var t = new eui.Image();
		this.kImgTomoto = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 29;
		t.source = "main_tomoto_png";
		t.x = 124.5;
		t.y = 124.5;
		return t;
	};
	return FoodSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainDevSkin.exml'] = window.GameMainDevSkin = (function (_super) {
	__extends(GameMainDevSkin, _super);
	function GameMainDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kFood4","kFood3","kFood2","kFood1","kImgCoke1","kImgCoke2","kImgCoke3","kGrpCoke","kGrpAction","kImgXu","kGrpMask","kImgPeople1","kImgAlert1","kImgOrder1","kImgOrder2","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgAlert2","kImgOrder3","kImgOrder4","kGrpMenu2","kGrpPeople2","kGrpGuide","kImgSwipe","kRecEnd","kImgFloat1","kImgFloat2","kImgEnd","kImgContinue","kImgShare","kGrpAlert","kGrpMain","kGrpContent"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpContent_i()];
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
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 357.58;
		t.height = 720;
		t.scaleX = -1;
		t.scrollEnabled = true;
		t.width = 0;
		t.x = 1280;
		t.y = 357.58;
		t.elementsContent = [this.kGrpMain_i()];
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.scaleX = -1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.width = 1280;
		t.x = 1280;
		t.y = 0;
		t.elementsContent = [this.kImgBg_i(),this.kFood4_i(),this.kFood3_i(),this.kFood2_i(),this.kFood1_i(),this.kGrpCoke_i(),this.kGrpAction_i(),this.kGrpMask_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpGuide_i(),this.kImgSwipe_i(),this.kRecEnd_i(),this.kImgFloat1_i(),this.kImgFloat2_i(),this.kGrpAlert_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kFood4_i = function () {
		var t = new Food();
		this.kFood4 = t;
		t.anchorOffsetX = 84.85;
		t.anchorOffsetY = 78.79;
		t.height = 156;
		t.skinName = "FoodDevSkin";
		t.visible = false;
		t.width = 169;
		t.x = 404.51;
		t.y = 358.79;
		return t;
	};
	_proto.kFood3_i = function () {
		var t = new Food();
		this.kFood3 = t;
		t.anchorOffsetX = 84.85;
		t.anchorOffsetY = 77.27;
		t.height = 156;
		t.skinName = "FoodDevSkin";
		t.visible = false;
		t.width = 169;
		t.x = 283.51;
		t.y = 361.27;
		return t;
	};
	_proto.kFood2_i = function () {
		var t = new Food();
		this.kFood2 = t;
		t.anchorOffsetX = 81.81;
		t.anchorOffsetY = 81.82;
		t.height = 156;
		t.skinName = "FoodDevSkin";
		t.visible = false;
		t.width = 169;
		t.x = 336.97;
		t.y = 473.82;
		return t;
	};
	_proto.kFood1_i = function () {
		var t = new Food();
		this.kFood1 = t;
		t.anchorOffsetX = 86.36;
		t.anchorOffsetY = 78.79;
		t.height = 156;
		t.skinName = "FoodDevSkin";
		t.visible = false;
		t.width = 169;
		t.x = 198.52;
		t.y = 464.79;
		return t;
	};
	_proto.kGrpCoke_i = function () {
		var t = new eui.Group();
		this.kGrpCoke = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.rotation = -55;
		t.visible = false;
		t.width = 103;
		t.x = 856;
		t.y = 390;
		t.elementsContent = [this.kImgCoke1_i(),this.kImgCoke2_i(),this.kImgCoke3_i()];
		return t;
	};
	_proto.kImgCoke1_i = function () {
		var t = new eui.Image();
		this.kImgCoke1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 72;
		t.rotation = 55;
		t.source = "";
		t.x = 89.5;
		t.y = 27.23;
		return t;
	};
	_proto.kImgCoke2_i = function () {
		var t = new eui.Image();
		this.kImgCoke2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 74;
		t.rotation = 55;
		t.source = "";
		t.x = 87.49;
		t.y = 118.21;
		return t;
	};
	_proto.kImgCoke3_i = function () {
		var t = new eui.Image();
		this.kImgCoke3 = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 76;
		t.rotation = 55;
		t.source = "";
		t.x = 97.05;
		t.y = 212.2;
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
	_proto.kGrpMask_i = function () {
		var t = new eui.Group();
		this.kGrpMask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.kImgXu_i(),this._Label1_i()];
		return t;
	};
	_proto.kImgXu_i = function () {
		var t = new eui.Image();
		this.kImgXu = t;
		t.source = "";
		t.x = 155.72;
		t.y = 553.68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = -218;
		t.size = 92;
		t.strokeColor = 0xaf8e52;
		t.text = "Let’s start cooking";
		t.textColor = 0xe2dede;
		t.y = 360;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.x = -300;
		t.y = 70;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 112;
		t.height = 223;
		t.width = 107;
		t.x = 147;
		t.y = 112;
		t.elementsContent = [this.kImgAlert1_i(),this.kImgOrder1_i(),this.kImgOrder2_i()];
		return t;
	};
	_proto.kImgAlert1_i = function () {
		var t = new eui.Image();
		this.kImgAlert1 = t;
		t.source = "";
		t.x = -12;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 23;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 115;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -300;
		t.y = 70;
		t.elementsContent = [this.kImgPeople2_i(),this.kGrpMenu2_i()];
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.source = "";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 114;
		t.width = 109;
		t.x = 140;
		t.y = 114;
		t.elementsContent = [this.kImgAlert2_i(),this.kImgOrder3_i(),this.kImgOrder4_i()];
		return t;
	};
	_proto.kImgAlert2_i = function () {
		var t = new eui.Image();
		this.kImgAlert2 = t;
		t.anchorOffsetX = 0;
		t.source = "";
		t.x = -12;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 23;
		return t;
	};
	_proto.kImgOrder4_i = function () {
		var t = new eui.Image();
		this.kImgOrder4 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 115;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 171.21;
		t.anchorOffsetY = 42.42;
		t.source = "";
		t.visible = false;
		t.x = 681.38;
		t.y = 419.98;
		return t;
	};
	_proto.kRecEnd_i = function () {
		var t = new eui.Rect();
		this.kRecEnd = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgFloat1_i = function () {
		var t = new eui.Image();
		this.kImgFloat1 = t;
		t.anchorOffsetX = 602;
		t.anchorOffsetY = 362;
		t.bottom = 0;
		t.source = "";
		t.top = 0;
		t.visible = false;
		t.width = 601;
		t.x = 602;
		return t;
	};
	_proto.kImgFloat2_i = function () {
		var t = new eui.Image();
		this.kImgFloat2 = t;
		t.anchorOffsetX = 604;
		t.anchorOffsetY = 362;
		t.bottom = 0;
		t.rotation = -180;
		t.scaleX = 1;
		t.source = "";
		t.top = 0;
		t.visible = false;
		t.width = 601;
		t.x = 676;
		return t;
	};
	_proto.kGrpAlert_i = function () {
		var t = new eui.Group();
		this.kGrpAlert = t;
		t.anchorOffsetX = 278.28;
		t.anchorOffsetY = 304;
		t.height = 620;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 541;
		t.elementsContent = [this.kImgEnd_i(),this.kImgContinue_i(),this.kImgShare_i()];
		return t;
	};
	_proto.kImgEnd_i = function () {
		var t = new eui.Image();
		this.kImgEnd = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgContinue_i = function () {
		var t = new eui.Image();
		this.kImgContinue = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 40;
		t.source = "";
		t.x = 405;
		t.y = 560;
		return t;
	};
	_proto.kImgShare_i = function () {
		var t = new eui.Image();
		this.kImgShare = t;
		t.anchorOffsetX = 124;
		t.anchorOffsetY = 42;
		t.source = "";
		t.x = 136;
		t.y = 562;
		return t;
	};
	return GameMainDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainSkin.exml'] = window.GameMainSkin = (function (_super) {
	__extends(GameMainSkin, _super);
	function GameMainSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kFood4","kFood3","kFood2","kFood1","kImgCoke1","kImgCoke2","kImgCoke3","kGrpCoke","kGrpAction","kImgXu","kGrpMask","kImgPeople1","kImgAlert1","kImgOrder1","kImgOrder2","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgAlert2","kImgOrder3","kImgOrder4","kGrpMenu2","kGrpPeople2","kGrpGuide","kImgSwipe","kRecEnd","kImgFloat1","kImgFloat2","kIImgEnd","kImgContinue","kImgShare","kGrpAlert","kGrpMain","kGrpContent"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpContent_i()];
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
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 357.58;
		t.height = 720;
		t.scaleX = -1;
		t.scrollEnabled = true;
		t.width = 0;
		t.x = 1280;
		t.y = 357.58;
		t.elementsContent = [this.kGrpMain_i()];
		return t;
	};
	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.scaleX = -1;
		t.scaleY = 1;
		t.scrollEnabled = true;
		t.width = 1280;
		t.x = 1280;
		t.y = 0;
		t.elementsContent = [this.kImgBg_i(),this.kFood4_i(),this.kFood3_i(),this.kFood2_i(),this.kFood1_i(),this.kGrpCoke_i(),this.kGrpAction_i(),this.kGrpMask_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpGuide_i(),this.kImgSwipe_i(),this.kRecEnd_i(),this.kImgFloat1_i(),this.kImgFloat2_i(),this.kGrpAlert_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_bg1_jpg";
		t.top = 0;
		return t;
	};
	_proto.kFood4_i = function () {
		var t = new Food();
		this.kFood4 = t;
		t.anchorOffsetX = 84.85;
		t.anchorOffsetY = 78.79;
		t.height = 156;
		t.skinName = "FoodSkin";
		t.visible = false;
		t.width = 169;
		t.x = 404.51;
		t.y = 358.79;
		return t;
	};
	_proto.kFood3_i = function () {
		var t = new Food();
		this.kFood3 = t;
		t.anchorOffsetX = 84.85;
		t.anchorOffsetY = 77.27;
		t.height = 156;
		t.skinName = "FoodSkin";
		t.visible = false;
		t.width = 169;
		t.x = 283.51;
		t.y = 361.27;
		return t;
	};
	_proto.kFood2_i = function () {
		var t = new Food();
		this.kFood2 = t;
		t.anchorOffsetX = 81.81;
		t.anchorOffsetY = 81.82;
		t.height = 156;
		t.skinName = "FoodSkin";
		t.visible = false;
		t.width = 169;
		t.x = 336.97;
		t.y = 473.82;
		return t;
	};
	_proto.kFood1_i = function () {
		var t = new Food();
		this.kFood1 = t;
		t.anchorOffsetX = 86.36;
		t.anchorOffsetY = 78.79;
		t.height = 156;
		t.skinName = "FoodSkin";
		t.visible = false;
		t.width = 169;
		t.x = 198.52;
		t.y = 464.79;
		return t;
	};
	_proto.kGrpCoke_i = function () {
		var t = new eui.Group();
		this.kGrpCoke = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 300;
		t.rotation = -55;
		t.visible = false;
		t.width = 103;
		t.x = 856;
		t.y = 390;
		t.elementsContent = [this.kImgCoke1_i(),this.kImgCoke2_i(),this.kImgCoke3_i()];
		return t;
	};
	_proto.kImgCoke1_i = function () {
		var t = new eui.Image();
		this.kImgCoke1 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 72;
		t.rotation = 55;
		t.source = "main_doke1_png";
		t.x = 89.5;
		t.y = 27.23;
		return t;
	};
	_proto.kImgCoke2_i = function () {
		var t = new eui.Image();
		this.kImgCoke2 = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 74;
		t.rotation = 55;
		t.source = "main_doke1_png";
		t.x = 87.49;
		t.y = 118.21;
		return t;
	};
	_proto.kImgCoke3_i = function () {
		var t = new eui.Image();
		this.kImgCoke3 = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 76;
		t.rotation = 55;
		t.source = "main_doke1_png";
		t.x = 97.05;
		t.y = 212.2;
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
	_proto.kGrpMask_i = function () {
		var t = new eui.Group();
		this.kGrpMask = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.kImgXu_i(),this._Label1_i()];
		return t;
	};
	_proto.kImgXu_i = function () {
		var t = new eui.Image();
		this.kImgXu = t;
		t.source = "main_xuxian_png";
		t.x = 155.72;
		t.y = 553.68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = -218;
		t.size = 92;
		t.strokeColor = 0xaf8e52;
		t.text = "Let’s start cooking";
		t.textColor = 0xe2dede;
		t.y = 360;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.x = -300;
		t.y = 70;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "main_grampa_normal_png";
		t.x = 0;
		t.y = 2;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 112;
		t.height = 223;
		t.width = 107;
		t.x = 147;
		t.y = 112;
		t.elementsContent = [this.kImgAlert1_i(),this.kImgOrder1_i(),this.kImgOrder2_i()];
		return t;
	};
	_proto.kImgAlert1_i = function () {
		var t = new eui.Image();
		this.kImgAlert1 = t;
		t.source = "main_alert_bg_png";
		t.x = -12;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = 0;
		t.source = "main_order1_png";
		t.y = 23;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0;
		t.source = "main_order2_png";
		t.y = 115;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -300;
		t.y = 70;
		t.elementsContent = [this.kImgPeople2_i(),this.kGrpMenu2_i()];
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.source = "main_aunt_normal_png";
		t.x = 0;
		t.y = 11;
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 114;
		t.width = 109;
		t.x = 140;
		t.y = 114;
		t.elementsContent = [this.kImgAlert2_i(),this.kImgOrder3_i(),this.kImgOrder4_i()];
		return t;
	};
	_proto.kImgAlert2_i = function () {
		var t = new eui.Image();
		this.kImgAlert2 = t;
		t.anchorOffsetX = 0;
		t.source = "main_alert_bg_png";
		t.x = -12;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.horizontalCenter = 0;
		t.source = "main_order1_png";
		t.y = 23;
		return t;
	};
	_proto.kImgOrder4_i = function () {
		var t = new eui.Image();
		this.kImgOrder4 = t;
		t.horizontalCenter = 0;
		t.source = "main_order1_png";
		t.y = 115;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 171.21;
		t.anchorOffsetY = 42.42;
		t.source = "main_swipe_png";
		t.visible = false;
		t.x = 681.38;
		t.y = 419.98;
		return t;
	};
	_proto.kRecEnd_i = function () {
		var t = new eui.Rect();
		this.kRecEnd = t;
		t.bottom = 0;
		t.fillAlpha = 0.6;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgFloat1_i = function () {
		var t = new eui.Image();
		this.kImgFloat1 = t;
		t.anchorOffsetX = 602;
		t.anchorOffsetY = 362;
		t.bottom = 0;
		t.source = "end_float_bg_png";
		t.top = 0;
		t.visible = false;
		t.width = 601;
		t.x = 602;
		return t;
	};
	_proto.kImgFloat2_i = function () {
		var t = new eui.Image();
		this.kImgFloat2 = t;
		t.anchorOffsetX = 604;
		t.anchorOffsetY = 362;
		t.bottom = 0;
		t.rotation = -180;
		t.scaleX = 1;
		t.source = "end_float_bg_png";
		t.top = 0;
		t.visible = false;
		t.width = 601;
		t.x = 676;
		return t;
	};
	_proto.kGrpAlert_i = function () {
		var t = new eui.Group();
		this.kGrpAlert = t;
		t.anchorOffsetX = 278.28;
		t.anchorOffsetY = 304;
		t.height = 620;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 541;
		t.elementsContent = [this.kIImgEnd_i(),this.kImgContinue_i(),this.kImgShare_i()];
		return t;
	};
	_proto.kIImgEnd_i = function () {
		var t = new eui.Image();
		this.kIImgEnd = t;
		t.horizontalCenter = 0;
		t.source = "end_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgContinue_i = function () {
		var t = new eui.Image();
		this.kImgContinue = t;
		t.anchorOffsetX = 120;
		t.anchorOffsetY = 40;
		t.source = "end_continue_png";
		t.x = 405;
		t.y = 560;
		return t;
	};
	_proto.kImgShare_i = function () {
		var t = new eui.Image();
		this.kImgShare = t;
		t.anchorOffsetX = 124;
		t.anchorOffsetY = 42;
		t.source = "end_share_png";
		t.x = 136;
		t.y = 562;
		return t;
	};
	return GameMainSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameStartDevSkin.exml'] = window.GameStartDevSkin = (function (_super) {
	__extends(GameStartDevSkin, _super);
	function GameStartDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kGrpVideo","kImgMask","kImgDo","kImgUpgrade","kGrpShow","kGrpMain"];
		
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
		t.elementsContent = [this.kImgBg_i(),this.kGrpVideo_i(),this.kImgMask_i(),this.kGrpShow_i()];
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
	_proto.kGrpVideo_i = function () {
		var t = new eui.Group();
		this.kGrpVideo = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgMask_i = function () {
		var t = new eui.Rect();
		this.kImgMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpShow_i = function () {
		var t = new eui.Group();
		this.kGrpShow = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this.kImgDo_i(),this.kImgUpgrade_i(),this._Label1_i()];
		return t;
	};
	_proto.kImgDo_i = function () {
		var t = new eui.Image();
		this.kImgDo = t;
		t.anchorOffsetX = 148.48;
		t.anchorOffsetY = 51.52;
		t.source = "";
		t.x = 444.48;
		t.y = 507.52;
		return t;
	};
	_proto.kImgUpgrade_i = function () {
		var t = new eui.Image();
		this.kImgUpgrade = t;
		t.anchorOffsetX = 151.52;
		t.anchorOffsetY = 51.51;
		t.source = "";
		t.x = 853.52;
		t.y = 507.51;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 452.19;
		t.left = 0;
		t.right = 0;
		t.size = 93;
		t.strokeColor = 0xd18227;
		t.text = "It’s time to upgrade!";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return GameStartDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameStartSkin.exml'] = window.GameStartSkin = (function (_super) {
	__extends(GameStartSkin, _super);
	function GameStartSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kGrpVideo","kImgMask","kImgDo","kImgUpgrade","kGrpShow","kGrpMain"];
		
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
		t.elementsContent = [this.kImgBg_i(),this.kGrpVideo_i(),this.kImgMask_i(),this.kGrpShow_i()];
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
	_proto.kGrpVideo_i = function () {
		var t = new eui.Group();
		this.kGrpVideo = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgMask_i = function () {
		var t = new eui.Rect();
		this.kImgMask = t;
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpShow_i = function () {
		var t = new eui.Group();
		this.kGrpShow = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this.kImgDo_i(),this.kImgUpgrade_i(),this._Label1_i()];
		return t;
	};
	_proto.kImgDo_i = function () {
		var t = new eui.Image();
		this.kImgDo = t;
		t.anchorOffsetX = 148.48;
		t.anchorOffsetY = 51.52;
		t.source = "main_do_png";
		t.x = 444.48;
		t.y = 507.52;
		return t;
	};
	_proto.kImgUpgrade_i = function () {
		var t = new eui.Image();
		this.kImgUpgrade = t;
		t.anchorOffsetX = 151.52;
		t.anchorOffsetY = 51.51;
		t.source = "main_upgrade_png";
		t.x = 853.52;
		t.y = 507.51;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 452.19;
		t.left = 0;
		t.right = 0;
		t.size = 93;
		t.strokeColor = 0xd18227;
		t.text = "It’s time to upgrade!";
		t.textAlign = "center";
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return GameStartSkin;
})(eui.Skin);