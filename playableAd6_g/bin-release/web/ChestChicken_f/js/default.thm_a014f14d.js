
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
		this.skinParts = ["kImgDrumstick1","kImgDrumstick2","kImgDrumstick3"];
		
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
		t.elementsContent = [this.kImgDrumstick1_i(),this.kImgDrumstick2_i(),this.kImgDrumstick3_i()];
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 88;
		t.bottom = 16;
		t.source = "";
		t.x = 159.5;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 54;
		t.horizontalCenter = -68.5;
		t.source = "";
		t.y = 144;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 30;
		t.source = "";
		t.x = 193;
		t.y = 152;
		return t;
	};
	return DrumstickDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DrumstickSkin.exml'] = window.DrumstickSkin = (function (_super) {
	__extends(DrumstickSkin, _super);
	function DrumstickSkin() {
		_super.call(this);
		this.skinParts = ["kImgDrumstick1","kImgDrumstick2","kImgDrumstick3"];
		
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
		t.elementsContent = [this.kImgDrumstick1_i(),this.kImgDrumstick2_i(),this.kImgDrumstick3_i()];
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 88;
		t.bottom = 16;
		t.source = "main_food1_png";
		t.x = 159.5;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 54;
		t.horizontalCenter = -68.5;
		t.source = "main_food2_png";
		t.y = 144;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 30;
		t.source = "main_food3_png";
		t.x = 193;
		t.y = 152;
		return t;
	};
	return DrumstickSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainDevSkin.exml'] = window.GameMainDevSkin = (function (_super) {
	__extends(GameMainDevSkin, _super);
	function GameMainDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgMenu1","kImgOrder1","kImgOrder2","kGrpMenu1","kGrpPeople1","kImgMenu2","kImgOrder3","kImgOrder4","kGrpMenu2","kGrpPeople2","kImgMenu3","kImgOrder5","kImgOrder6","kGrpMenu3","kGrpPeople3","kImgBg2","kDrumstick3","kDrumstick6","kDrumstick2","kDrumstick5","kDrumstick4","kDrumstick1","kImgDrumstick1","kImgDrumstick2","kImgDrumstick3","kImgDrumstick4","kImgDrumstick5","kImgDrumstick6","kGrpAction","kImgLux","kImgBox","kGrpEnd","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpPeople3_i(),this.kImgBg2_i(),this.kDrumstick3_i(),this.kDrumstick6_i(),this.kDrumstick2_i(),this.kDrumstick5_i(),this.kDrumstick4_i(),this.kDrumstick1_i(),this.kImgDrumstick1_i(),this.kImgDrumstick2_i(),this.kImgDrumstick3_i(),this.kImgDrumstick4_i(),this.kImgDrumstick5_i(),this.kImgDrumstick6_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kGrpGuide_i()];
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
		t.x = 798;
		t.y = 372;
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
		t.skinName = "DrumstickDevSkin";
		t.width = 272;
		t.x = 949;
		t.y = 368;
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
		t.x = 805;
		t.y = 455;
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
		t.x = 983;
		t.y = 455;
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
		t.x = 1031;
		t.y = 555;
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
		t.x = 823;
		t.y = 561;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.x = 414;
		t.y = 535;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "";
		t.x = 260;
		t.y = 521;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "";
		t.x = 450.5;
		t.y = 441.8;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "";
		t.x = 312.5;
		t.y = 433.8;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 372.5;
		t.y = 357.8;
		return t;
	};
	_proto.kImgDrumstick6_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick6 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "";
		t.x = 478.5;
		t.y = 355.8;
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
		this.skinParts = ["kImgBg1","kImgMenu1","kImgOrder1","kImgOrder2","kGrpMenu1","kGrpPeople1","kImgMenu2","kImgOrder3","kImgOrder4","kGrpMenu2","kGrpPeople2","kImgMenu3","kImgOrder5","kImgOrder6","kGrpMenu3","kGrpPeople3","kImgBg2","kDrumstick3","kDrumstick6","kDrumstick2","kDrumstick5","kDrumstick4","kDrumstick1","kImgDrumstick1","kImgDrumstick2","kImgDrumstick3","kImgDrumstick4","kImgDrumstick5","kImgDrumstick6","kGrpAction","kImgLux","kImgBox","kGrpEnd","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpPeople3_i(),this.kImgBg2_i(),this.kDrumstick3_i(),this.kDrumstick6_i(),this.kDrumstick2_i(),this.kDrumstick5_i(),this.kDrumstick4_i(),this.kDrumstick1_i(),this.kImgDrumstick1_i(),this.kImgDrumstick2_i(),this.kImgDrumstick3_i(),this.kImgDrumstick4_i(),this.kImgDrumstick5_i(),this.kImgDrumstick6_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kGrpGuide_i()];
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
		t.x = 798;
		t.y = 372;
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
		t.x = 949;
		t.y = 368;
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
		t.x = 805;
		t.y = 455;
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
		t.x = 983;
		t.y = 455;
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
		t.x = 1031;
		t.y = 555;
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
		t.x = 823;
		t.y = 561;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "main_food1_png";
		t.x = 414;
		t.y = 535;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "main_food1_png";
		t.x = 260;
		t.y = 521;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "main_food1_png";
		t.x = 450.5;
		t.y = 441.8;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "main_food1_png";
		t.x = 312.5;
		t.y = 433.8;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "main_food1_png";
		t.x = 372.5;
		t.y = 357.8;
		return t;
	};
	_proto.kImgDrumstick6_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick6 = t;
		t.anchorOffsetX = 92;
		t.anchorOffsetY = 82;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "main_food1_png";
		t.x = 478.5;
		t.y = 355.8;
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