
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
                generateEUI.skins = undefined;generateEUI.paths['resource/eui_skins/DrumstickDevSkin.exml'] = window.DrumstickDevSkin = (function (_super) {
	__extends(DrumstickDevSkin, _super);
	function DrumstickDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgDrumstick4","kImgDrumstick2","kImgDrumstick1","kImgDrumstick3"];
		
		this.height = 190;
		this.width = 272;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick2","visible",false),
					new eui.SetProperty("kImgDrumstick3","visible",false)
				])
		];
	}
	var _proto = DrumstickDevSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 1;
		t.top = 0;
		t.elementsContent = [this.kImgDrumstick4_i(),this.kImgDrumstick2_i(),this.kImgDrumstick1_i(),this.kImgDrumstick3_i()];
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.source = "";
		t.visible = true;
		t.x = 48;
		t.y = 72;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 50;
		t.horizontalCenter = -36.5;
		t.source = "";
		t.y = 90;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 66;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 38;
		t.source = "";
		t.x = 174;
		t.y = 135;
		return t;
	};
	return DrumstickDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DrumstickSkin.exml'] = window.DrumstickSkin = (function (_super) {
	__extends(DrumstickSkin, _super);
	function DrumstickSkin() {
		_super.call(this);
		this.skinParts = ["kImgDrumstick4","kImgDrumstick2","kImgDrumstick1","kImgDrumstick3"];
		
		this.height = 190;
		this.width = 272;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick2","visible",false),
					new eui.SetProperty("kImgDrumstick3","visible",false)
				])
		];
	}
	var _proto = DrumstickSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 1;
		t.top = 0;
		t.elementsContent = [this.kImgDrumstick4_i(),this.kImgDrumstick2_i(),this.kImgDrumstick1_i(),this.kImgDrumstick3_i()];
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.source = "main_food4_png";
		t.x = 48;
		t.y = 72;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 50;
		t.horizontalCenter = -36.5;
		t.source = "main_food2_png";
		t.y = 90;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 66;
		t.horizontalCenter = 0;
		t.source = "main_food1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 38;
		t.source = "main_food3_png";
		t.x = 174;
		t.y = 135;
		return t;
	};
	return DrumstickSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainDevSkin.exml'] = window.GameMainDevSkin = (function (_super) {
	__extends(GameMainDevSkin, _super);
	function GameMainDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgMenu1","kImgOrder1","kImgOrder2","kGrpMenu1","kGrpPeople1","kImgMenu2","kImgOrder3","kImgOrder4","kGrpMenu2","kGrpPeople2","kImgMenu3","kImgOrder5","kImgOrder6","kGrpMenu3","kGrpPeople3","kImgBg2","kImgBow1","kImgBow2","kImgBow3","kGrpBow","kDrumstick3","kDrumstick6","kDrumstick2","kDrumstick5","kDrumstick4","kDrumstick1","kImgDrumstick6","kImgDrumstick3","kImgDrumstick5","kImgDrumstick4","kImgDrumstick1","kImgDrumstick2","kGrpAction","kImgLux","kImgBox","kGrpEnd","kImgEndBg","kImgFood4","kImgFood2","kImgFood1","kImgFood3","kImgTips","kImgContent","kImgHand","kGrpClose","kGrpGuide","kGrpMain"];
		
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
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpPeople3_i(),this.kImgBg2_i(),this.kGrpBow_i(),this.kDrumstick3_i(),this.kDrumstick6_i(),this.kDrumstick2_i(),this.kDrumstick5_i(),this.kDrumstick4_i(),this.kDrumstick1_i(),this.kImgDrumstick6_i(),this.kImgDrumstick3_i(),this.kImgDrumstick5_i(),this.kImgDrumstick4_i(),this.kImgDrumstick1_i(),this.kImgDrumstick2_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kGrpClose_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.x = -200;
		t.y = 55;
		t.elementsContent = [this.kGrpMenu1_i()];
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 102;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 158;
		t.y = 131;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgOrder2_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 10;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 102;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -200;
		t.y = 55;
		t.elementsContent = [this.kGrpMenu2_i()];
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = -2;
		t.anchorOffsetY = 102;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 188;
		t.y = 130;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder3_i(),this.kImgOrder4_i()];
		return t;
	};
	_proto.kImgMenu2_i = function () {
		var t = new eui.Image();
		this.kImgMenu2 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 18;
		return t;
	};
	_proto.kImgOrder4_i = function () {
		var t = new eui.Image();
		this.kImgOrder4 = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 106;
		return t;
	};
	_proto.kGrpPeople3_i = function () {
		var t = new eui.Group();
		this.kGrpPeople3 = t;
		t.x = -200;
		t.y = 55;
		t.elementsContent = [this.kGrpMenu3_i()];
		return t;
	};
	_proto.kGrpMenu3_i = function () {
		var t = new eui.Group();
		this.kGrpMenu3 = t;
		t.anchorOffsetX = -2;
		t.anchorOffsetY = 104;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 146;
		t.y = 132;
		t.elementsContent = [this.kImgMenu3_i(),this.kImgOrder5_i(),this.kImgOrder6_i()];
		return t;
	};
	_proto.kImgMenu3_i = function () {
		var t = new eui.Image();
		this.kImgMenu3 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder5_i = function () {
		var t = new eui.Image();
		this.kImgOrder5 = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 14;
		return t;
	};
	_proto.kImgOrder6_i = function () {
		var t = new eui.Image();
		this.kImgOrder6 = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 106;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.kGrpBow_i = function () {
		var t = new eui.Group();
		this.kGrpBow = t;
		t.x = 940;
		t.y = 297.55;
		t.elementsContent = [this.kImgBow1_i(),this.kImgBow2_i(),this.kImgBow3_i()];
		return t;
	};
	_proto.kImgBow1_i = function () {
		var t = new eui.Image();
		this.kImgBow1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgBow2_i = function () {
		var t = new eui.Image();
		this.kImgBow2 = t;
		t.source = "";
		t.x = 32.5;
		t.y = 56.45;
		return t;
	};
	_proto.kImgBow3_i = function () {
		var t = new eui.Image();
		this.kImgBow3 = t;
		t.source = "";
		t.x = 74;
		t.y = 142.28;
		return t;
	};
	_proto.kDrumstick3_i = function () {
		var t = new Drumstick();
		this.kDrumstick3 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickDevSkin";
		t.width = 272;
		t.x = 659;
		t.y = 354;
		return t;
	};
	_proto.kDrumstick6_i = function () {
		var t = new Drumstick();
		this.kDrumstick6 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickSkin";
		t.width = 272;
		t.x = 819;
		t.y = 350;
		return t;
	};
	_proto.kDrumstick2_i = function () {
		var t = new Drumstick();
		this.kDrumstick2 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickDevSkin";
		t.width = 272;
		t.x = 651;
		t.y = 456;
		return t;
	};
	_proto.kDrumstick5_i = function () {
		var t = new Drumstick();
		this.kDrumstick5 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickDevSkin";
		t.width = 272;
		t.x = 829;
		t.y = 454;
		return t;
	};
	_proto.kDrumstick4_i = function () {
		var t = new Drumstick();
		this.kDrumstick4 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickDevSkin";
		t.width = 272;
		t.x = 841;
		t.y = 569;
		return t;
	};
	_proto.kDrumstick1_i = function () {
		var t = new Drumstick();
		this.kDrumstick1 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickDevSkin";
		t.width = 272;
		t.x = 635;
		t.y = 570;
		return t;
	};
	_proto.kImgDrumstick6_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick6 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 69.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "";
		t.x = 517.5;
		t.y = 297.8;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 64;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.x = 493.5;
		t.y = 369.8;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 64.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "";
		t.x = 353.5;
		t.y = 296.8;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "";
		t.x = 323.5;
		t.y = 369.8;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 68.67;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "";
		t.x = 469;
		t.y = 441;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 65.33;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "";
		t.x = 290;
		t.y = 441;
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
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.anchorOffsetX = 324;
		t.anchorOffsetY = 332;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 636;
		t.y = 363;
		t.elementsContent = [this.kImgLux_i(),this.kImgBox_i()];
		return t;
	};
	_proto.kImgLux_i = function () {
		var t = new eui.Image();
		this.kImgLux = t;
		t.anchorOffsetX = 324;
		t.anchorOffsetY = 328;
		t.source = "";
		t.x = 324;
		t.y = 328;
		return t;
	};
	_proto.kImgBox_i = function () {
		var t = new eui.Image();
		this.kImgBox = t;
		t.anchorOffsetX = 156;
		t.anchorOffsetY = 192;
		t.source = "";
		t.x = 316;
		t.y = 384.5;
		return t;
	};
	_proto.kGrpClose_i = function () {
		var t = new eui.Group();
		this.kGrpClose = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1136;
		t.elementsContent = [this.kImgEndBg_i(),this.kImgFood4_i(),this.kImgFood2_i(),this.kImgFood1_i(),this.kImgFood3_i(),this.kImgTips_i(),this.kImgContent_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgEndBg_i = function () {
		var t = new eui.Image();
		this.kImgEndBg = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgFood4_i = function () {
		var t = new eui.Image();
		this.kImgFood4 = t;
		t.anchorOffsetX = 54.55;
		t.anchorOffsetY = 84.85;
		t.source = "";
		t.x = 1193.05;
		t.y = 319.85;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 106;
		t.source = "";
		t.x = -57.28;
		t.y = 316;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.anchorOffsetX = 195.76;
		t.anchorOffsetY = 166.42;
		t.source = "";
		t.x = 1331.61;
		t.y = 426.42;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.anchorOffsetX = 205.94;
		t.anchorOffsetY = 168.24;
		t.source = "";
		t.x = -186.61;
		t.y = 418;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 736;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.anchorOffsetX = 359.09;
		t.anchorOffsetY = 130;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 200;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.visible = false;
		t.x = 200;
		t.y = 380;
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
	return GameMainDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainSkin.exml'] = window.GameMainSkin = (function (_super) {
	__extends(GameMainSkin, _super);
	function GameMainSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgMenu1","kImgOrder1","kImgOrder2","kGrpMenu1","kGrpPeople1","kImgMenu2","kImgOrder3","kImgOrder4","kGrpMenu2","kGrpPeople2","kImgMenu3","kImgOrder5","kImgOrder6","kGrpMenu3","kGrpPeople3","kImgBg2","kImgBow1","kImgBow2","kImgBow3","kGrpBow","kDrumstick3","kDrumstick6","kDrumstick2","kDrumstick5","kDrumstick4","kDrumstick1","kImgDrumstick6","kImgDrumstick3","kImgDrumstick5","kImgDrumstick4","kImgDrumstick1","kImgDrumstick2","kGrpAction","kImgLux","kImgBox","kGrpEnd","kImgEndBg","kImgFood4","kImgFood2","kImgFood1","kImgFood3","kImgTips","kImgContent","kImgHand","kGrpClose","kGrpGuide","kGrpMain"];
		
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
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpPeople3_i(),this.kImgBg2_i(),this.kGrpBow_i(),this.kDrumstick3_i(),this.kDrumstick6_i(),this.kDrumstick2_i(),this.kDrumstick5_i(),this.kDrumstick4_i(),this.kDrumstick1_i(),this.kImgDrumstick6_i(),this.kImgDrumstick3_i(),this.kImgDrumstick5_i(),this.kImgDrumstick4_i(),this.kImgDrumstick1_i(),this.kImgDrumstick2_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kGrpClose_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.horizontalCenter = 0;
		t.source = "main_bg1_png";
		t.top = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.x = -200;
		t.y = 55;
		t.elementsContent = [this.kGrpMenu1_i()];
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 102;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 158;
		t.y = 131;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgOrder2_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.source = "main_menu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = 0.5;
		t.source = "main_order_png";
		t.y = 10;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0.5;
		t.source = "main_order_png";
		t.y = 102;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -200;
		t.y = 55;
		t.elementsContent = [this.kGrpMenu2_i()];
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = -2;
		t.anchorOffsetY = 102;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 188;
		t.y = 130;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder3_i(),this.kImgOrder4_i()];
		return t;
	};
	_proto.kImgMenu2_i = function () {
		var t = new eui.Image();
		this.kImgMenu2 = t;
		t.source = "main_menu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.horizontalCenter = 0.5;
		t.source = "main_order_png";
		t.y = 18;
		return t;
	};
	_proto.kImgOrder4_i = function () {
		var t = new eui.Image();
		this.kImgOrder4 = t;
		t.horizontalCenter = 0.5;
		t.source = "main_order_png";
		t.y = 106;
		return t;
	};
	_proto.kGrpPeople3_i = function () {
		var t = new eui.Group();
		this.kGrpPeople3 = t;
		t.x = -200;
		t.y = 55;
		t.elementsContent = [this.kGrpMenu3_i()];
		return t;
	};
	_proto.kGrpMenu3_i = function () {
		var t = new eui.Group();
		this.kGrpMenu3 = t;
		t.anchorOffsetX = -2;
		t.anchorOffsetY = 104;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 146;
		t.y = 132;
		t.elementsContent = [this.kImgMenu3_i(),this.kImgOrder5_i(),this.kImgOrder6_i()];
		return t;
	};
	_proto.kImgMenu3_i = function () {
		var t = new eui.Image();
		this.kImgMenu3 = t;
		t.source = "main_menu_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder5_i = function () {
		var t = new eui.Image();
		this.kImgOrder5 = t;
		t.horizontalCenter = 0.5;
		t.source = "main_order_png";
		t.y = 14;
		return t;
	};
	_proto.kImgOrder6_i = function () {
		var t = new eui.Image();
		this.kImgOrder6 = t;
		t.horizontalCenter = 0.5;
		t.source = "main_order_png";
		t.y = 106;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "main_bg2_png";
		return t;
	};
	_proto.kGrpBow_i = function () {
		var t = new eui.Group();
		this.kGrpBow = t;
		t.x = 940;
		t.y = 297.55;
		t.elementsContent = [this.kImgBow1_i(),this.kImgBow2_i(),this.kImgBow3_i()];
		return t;
	};
	_proto.kImgBow1_i = function () {
		var t = new eui.Image();
		this.kImgBow1 = t;
		t.source = "main_bow_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgBow2_i = function () {
		var t = new eui.Image();
		this.kImgBow2 = t;
		t.source = "main_bow_png";
		t.x = 32.5;
		t.y = 56.45;
		return t;
	};
	_proto.kImgBow3_i = function () {
		var t = new eui.Image();
		this.kImgBow3 = t;
		t.source = "main_bow_png";
		t.x = 74;
		t.y = 142.28;
		return t;
	};
	_proto.kDrumstick3_i = function () {
		var t = new Drumstick();
		this.kDrumstick3 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickSkin";
		t.width = 272;
		t.x = 659;
		t.y = 354;
		return t;
	};
	_proto.kDrumstick6_i = function () {
		var t = new Drumstick();
		this.kDrumstick6 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickSkin";
		t.width = 272;
		t.x = 819;
		t.y = 350;
		return t;
	};
	_proto.kDrumstick2_i = function () {
		var t = new Drumstick();
		this.kDrumstick2 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickSkin";
		t.width = 272;
		t.x = 651;
		t.y = 456;
		return t;
	};
	_proto.kDrumstick5_i = function () {
		var t = new Drumstick();
		this.kDrumstick5 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickSkin";
		t.width = 272;
		t.x = 829;
		t.y = 454;
		return t;
	};
	_proto.kDrumstick4_i = function () {
		var t = new Drumstick();
		this.kDrumstick4 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickSkin";
		t.width = 272;
		t.x = 841;
		t.y = 569;
		return t;
	};
	_proto.kDrumstick1_i = function () {
		var t = new Drumstick();
		this.kDrumstick1 = t;
		t.anchorOffsetX = 136;
		t.anchorOffsetY = 94;
		t.currentState = "state1";
		t.height = 189;
		t.scaleX = 0;
		t.scaleY = 0;
		t.skinName = "DrumstickSkin";
		t.width = 272;
		t.x = 635;
		t.y = 570;
		return t;
	};
	_proto.kImgDrumstick6_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick6 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 69.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "main_food1_png";
		t.x = 517.5;
		t.y = 297.8;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 64;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "main_food1_png";
		t.x = 493.5;
		t.y = 369.8;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 64.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "main_food1_png";
		t.x = 353.5;
		t.y = 296.8;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 70;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "main_food1_png";
		t.x = 323.5;
		t.y = 369.8;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 68.67;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "main_food1_png";
		t.x = 469;
		t.y = 441;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 65.33;
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "main_food1_png";
		t.x = 290;
		t.y = 441;
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
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.anchorOffsetX = 324;
		t.anchorOffsetY = 332;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 636;
		t.y = 363;
		t.elementsContent = [this.kImgLux_i(),this.kImgBox_i()];
		return t;
	};
	_proto.kImgLux_i = function () {
		var t = new eui.Image();
		this.kImgLux = t;
		t.anchorOffsetX = 324;
		t.anchorOffsetY = 328;
		t.source = "main_lux_png";
		t.x = 324;
		t.y = 328;
		return t;
	};
	_proto.kImgBox_i = function () {
		var t = new eui.Image();
		this.kImgBox = t;
		t.anchorOffsetX = 156;
		t.anchorOffsetY = 192;
		t.source = "loading_c_png";
		t.x = 316;
		t.y = 384.5;
		return t;
	};
	_proto.kGrpClose_i = function () {
		var t = new eui.Group();
		this.kGrpClose = t;
		t.height = 640;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1136;
		t.elementsContent = [this.kImgEndBg_i(),this.kImgFood4_i(),this.kImgFood2_i(),this.kImgFood1_i(),this.kImgFood3_i(),this.kImgTips_i(),this.kImgContent_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgEndBg_i = function () {
		var t = new eui.Image();
		this.kImgEndBg = t;
		t.source = "end_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgFood4_i = function () {
		var t = new eui.Image();
		this.kImgFood4 = t;
		t.anchorOffsetX = 54.55;
		t.anchorOffsetY = 84.85;
		t.source = "end_food4_png";
		t.x = 1193.05;
		t.y = 319.85;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 106;
		t.source = "end_food2_png";
		t.x = -57.28;
		t.y = 316;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.anchorOffsetX = 175.76;
		t.anchorOffsetY = 142.42;
		t.source = "end_fodo1_png";
		t.x = 1311.61;
		t.y = 422.42;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.anchorOffsetX = 193.94;
		t.anchorOffsetY = 124.24;
		t.source = "end_food3_png";
		t.x = -142.61;
		t.y = 424.24;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.source = "end_tips_png";
		t.y = 736;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.anchorOffsetX = 359.09;
		t.anchorOffsetY = 130;
		t.horizontalCenter = 0;
		t.source = "end_topic_png";
		t.y = 200;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 200;
		t.y = 380;
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
	return GameMainSkin;
})(eui.Skin);