
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
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/DrumstickSkin.exml'] = window.DrumstickSkin = (function (_super) {
	__extends(DrumstickSkin, _super);
	function DrumstickSkin() {
		_super.call(this);
		this.skinParts = ["kImgDrumstick5","kImgDrumstick1","kImgDrumstick3","kImgDrumstick4"];
		
		this.height = 200;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick5","visible",false),
					new eui.SetProperty("kImgDrumstick3","visible",false),
					new eui.SetProperty("kImgDrumstick4","visible",false)
				])
		];
	}
	var _proto = DrumstickSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgDrumstick5_i(),this.kImgDrumstick1_i(),this.kImgDrumstick3_i(),this.kImgDrumstick4_i()];
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 61;
		t.anchorOffsetY = 40;
		t.source = "main_drumstick5_png";
		t.x = 61;
		t.y = 82;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 56;
		t.source = "main_drumstick1_png";
		t.x = 134;
		t.y = 76;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 37;
		t.source = "main_drumstick4_png";
		t.x = 139;
		t.y = 133.5;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 27;
		t.source = "main_drumstick3_png";
		t.x = 73;
		t.y = 138;
		return t;
	};
	return DrumstickSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameStartDevSkin.exml'] = window.GameStartDevSkin = (function (_super) {
	__extends(GameStartDevSkin, _super);
	function GameStartDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgTips1Bg","kImgTips1","kGrpTips1","kImgTips2Bg","kImgTips2","kGrpTips2","kImgBuildA","kImgBuildB","kImgBuildC","kImgArrow","kGrpContent","kImgGirl","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameStartDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x000000;
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
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i(),this.kGrpTips1_i(),this.kGrpTips2_i(),this.kGrpContent_i(),this.kImgGirl_i()];
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
	_proto.kGrpTips1_i = function () {
		var t = new eui.Group();
		this.kGrpTips1 = t;
		t.anchorOffsetX = 378.79;
		t.anchorOffsetY = 42.42;
		t.horizontalCenter = 0;
		t.y = 88.42;
		t.elementsContent = [this.kImgTips1Bg_i(),this.kImgTips1_i()];
		return t;
	};
	_proto.kImgTips1Bg_i = function () {
		var t = new eui.Image();
		this.kImgTips1Bg = t;
		t.horizontalCenter = 0;
		t.source = "start_tips_bg1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips1_i = function () {
		var t = new eui.Image();
		this.kImgTips1 = t;
		t.horizontalCenter = 0;
		t.source = "start_choose_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpTips2_i = function () {
		var t = new eui.Group();
		this.kGrpTips2 = t;
		t.anchorOffsetX = 551.52;
		t.anchorOffsetY = 48.48;
		t.horizontalCenter = 0;
		t.y = 633.78;
		t.elementsContent = [this.kImgTips2Bg_i(),this.kImgTips2_i()];
		return t;
	};
	_proto.kImgTips2Bg_i = function () {
		var t = new eui.Image();
		this.kImgTips2Bg = t;
		t.horizontalCenter = 0;
		t.source = "start_tips_bg2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips2_i = function () {
		var t = new eui.Image();
		this.kImgTips2 = t;
		t.horizontalCenter = 0;
		t.source = "start_resturent_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372.73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0.5;
		t.width = 1143.64;
		t.elementsContent = [this.kImgBuildA_i(),this.kImgBuildB_i(),this.kImgBuildC_i(),this.kImgArrow_i()];
		return t;
	};
	_proto.kImgBuildA_i = function () {
		var t = new eui.Image();
		this.kImgBuildA = t;
		t.anchorOffsetX = 190.91;
		t.anchorOffsetY = 184.85;
		t.source = "start_house2_png";
		t.x = 190.91;
		t.y = 184.85;
		return t;
	};
	_proto.kImgBuildB_i = function () {
		var t = new eui.Image();
		this.kImgBuildB = t;
		t.anchorOffsetX = 190.91;
		t.anchorOffsetY = 193.53;
		t.height = 403.15;
		t.horizontalCenter = 0;
		t.source = "start_house1_png";
		t.y = 195.53;
		return t;
	};
	_proto.kImgBuildC_i = function () {
		var t = new eui.Image();
		this.kImgBuildC = t;
		t.anchorOffsetX = 207.58;
		t.anchorOffsetY = 183.34;
		t.source = "start_house3_png";
		t.x = 967.2200000000001;
		t.y = 185.34;
		return t;
	};
	_proto.kImgArrow_i = function () {
		var t = new eui.Image();
		this.kImgArrow = t;
		t.source = "main_guide_arrow_png";
		t.x = 1134;
		t.y = 563;
		return t;
	};
	_proto.kImgGirl_i = function () {
		var t = new eui.Image();
		this.kImgGirl = t;
		t.bottom = 0;
		t.right = 0;
		t.source = "start_girl_png";
		t.touchEnabled = false;
		return t;
	};
	return GameStartDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameStartSkin.exml'] = window.GameStartSkin = (function (_super) {
	__extends(GameStartSkin, _super);
	function GameStartSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgTips1Bg","kImgTips1","kGrpTips1","kImgTips2Bg","kImgTips2","kGrpTips2","kImgBuildA","kImgBuildB","kImgBuildC","kImgArrow","kGrpContent","kImgGirl","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameStartSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x000000;
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
		t.elementsContent = [this.kImgBg_i(),this.kGrpTips1_i(),this.kGrpTips2_i(),this.kGrpContent_i(),this.kImgGirl_i()];
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
	_proto.kGrpTips1_i = function () {
		var t = new eui.Group();
		this.kGrpTips1 = t;
		t.anchorOffsetX = 378.79;
		t.anchorOffsetY = 42.42;
		t.horizontalCenter = 0;
		t.y = 88.42;
		t.elementsContent = [this.kImgTips1Bg_i(),this.kImgTips1_i()];
		return t;
	};
	_proto.kImgTips1Bg_i = function () {
		var t = new eui.Image();
		this.kImgTips1Bg = t;
		t.horizontalCenter = 0;
		t.source = "start_tips_bg1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips1_i = function () {
		var t = new eui.Image();
		this.kImgTips1 = t;
		t.horizontalCenter = 0;
		t.source = "start_choose_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpTips2_i = function () {
		var t = new eui.Group();
		this.kGrpTips2 = t;
		t.anchorOffsetX = 551.52;
		t.anchorOffsetY = 48.48;
		t.horizontalCenter = 0;
		t.y = 633.78;
		t.elementsContent = [this.kImgTips2Bg_i(),this.kImgTips2_i()];
		return t;
	};
	_proto.kImgTips2Bg_i = function () {
		var t = new eui.Image();
		this.kImgTips2Bg = t;
		t.horizontalCenter = 0;
		t.source = "start_tips_bg2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips2_i = function () {
		var t = new eui.Image();
		this.kImgTips2 = t;
		t.horizontalCenter = 0;
		t.source = "start_resturent_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpContent_i = function () {
		var t = new eui.Group();
		this.kGrpContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 372.73;
		t.horizontalCenter = 0;
		t.verticalCenter = 0.5;
		t.width = 1143.64;
		t.elementsContent = [this.kImgBuildA_i(),this.kImgBuildB_i(),this.kImgBuildC_i(),this.kImgArrow_i()];
		return t;
	};
	_proto.kImgBuildA_i = function () {
		var t = new eui.Image();
		this.kImgBuildA = t;
		t.anchorOffsetX = 190.91;
		t.anchorOffsetY = 184.85;
		t.source = "start_house2_png";
		t.x = 190.91;
		t.y = 184.85;
		return t;
	};
	_proto.kImgBuildB_i = function () {
		var t = new eui.Image();
		this.kImgBuildB = t;
		t.anchorOffsetX = 190.91;
		t.anchorOffsetY = 193.53;
		t.height = 403.15;
		t.horizontalCenter = 0;
		t.source = "start_house1_png";
		t.y = 195.53;
		return t;
	};
	_proto.kImgBuildC_i = function () {
		var t = new eui.Image();
		this.kImgBuildC = t;
		t.anchorOffsetX = 207.58;
		t.anchorOffsetY = 183.34;
		t.source = "start_house3_png";
		t.x = 967.2200000000001;
		t.y = 185.34;
		return t;
	};
	_proto.kImgArrow_i = function () {
		var t = new eui.Image();
		this.kImgArrow = t;
		t.source = "main_guide_arrow_png";
		t.x = 1134;
		t.y = 563;
		return t;
	};
	_proto.kImgGirl_i = function () {
		var t = new eui.Image();
		this.kImgGirl = t;
		t.bottom = 0;
		t.right = 0;
		t.source = "start_girl_png";
		t.touchEnabled = false;
		return t;
	};
	return GameStartSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgbg2","kGrpBg","kGrpAction","kGrpHam","kImgArrow","kGrpSnow","kImgSwipe","kGrpGuide","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x000000;
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
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpHam_i(),this.kImgArrow_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kImgbg2_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.x = -365;
		t.y = 30;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 88;
		t.visible = false;
		t.x = 200;
		t.y = 117;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgNum1_i()];
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
	_proto.kImgNum1_i = function () {
		var t = new eui.Image();
		this.kImgNum1 = t;
		t.source = "";
		t.x = 93;
		t.y = 93.5;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -357;
		t.y = 30;
		t.elementsContent = [this.kImgPeople2_i(),this.kGrpMenu2_i()];
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 82;
		t.visible = false;
		t.x = 192;
		t.y = 110;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgNum2_i()];
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
	_proto.kImgNum2_i = function () {
		var t = new eui.Image();
		this.kImgNum2 = t;
		t.source = "";
		t.x = 88;
		t.y = 86;
		return t;
	};
	_proto.kImgbg2_i = function () {
		var t = new eui.Image();
		this.kImgbg2 = t;
		t.bottom = 0;
		t.source = "";
		t.x = 0;
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
	_proto.kGrpHam_i = function () {
		var t = new eui.Group();
		this.kGrpHam = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgArrow_i = function () {
		var t = new eui.Image();
		this.kImgArrow = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 124;
		t.rotation = 5;
		t.source = "";
		t.visible = false;
		t.x = 898;
		t.y = 362;
		return t;
	};
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 174;
		t.anchorOffsetY = 40.5;
		t.source = "";
		t.visible = false;
		t.x = 603;
		t.y = 456;
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
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgbg2","kGrpBg","kGrpAction","kGrpHam","kGrpSnow","kImgSwipe","kGrpGuide","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0x000000;
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
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpHam_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kImgbg2_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.source = "main_bg1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.x = -365;
		t.y = 30;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "main_people2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 88;
		t.visible = false;
		t.x = 200;
		t.y = 117;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgNum1_i()];
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
	_proto.kImgNum1_i = function () {
		var t = new eui.Image();
		this.kImgNum1 = t;
		t.source = "main_x3_png";
		t.x = 93;
		t.y = 93.5;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -357;
		t.y = 30;
		t.elementsContent = [this.kImgPeople2_i(),this.kGrpMenu2_i()];
		return t;
	};
	_proto.kImgPeople2_i = function () {
		var t = new eui.Image();
		this.kImgPeople2 = t;
		t.source = "main_people1_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 82;
		t.visible = false;
		t.x = 192;
		t.y = 110;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgNum2_i()];
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
	_proto.kImgNum2_i = function () {
		var t = new eui.Image();
		this.kImgNum2 = t;
		t.source = "main_x6_png";
		t.x = 88;
		t.y = 86;
		return t;
	};
	_proto.kImgbg2_i = function () {
		var t = new eui.Image();
		this.kImgbg2 = t;
		t.bottom = 0;
		t.source = "main_bg2_png";
		t.x = 0;
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
	_proto.kGrpHam_i = function () {
		var t = new eui.Group();
		this.kGrpHam = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 242;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 0;
		t.source = "main_swipe_png";
		t.visible = false;
		t.y = 486;
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
	return MainViewSkin;
})(eui.Skin);