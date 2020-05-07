
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
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/DrumstickDevSkin.exml'] = window.DrumstickDevSkin = (function (_super) {
	__extends(DrumstickDevSkin, _super);
	function DrumstickDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgDisk","kImgDrumstick1","kImgDrumstick3","kImgDrumstick4","kImgDrumstick5","kImgLocked"];
		
		this.height = 150;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick3","visible",false),
					new eui.SetProperty("kImgDrumstick4","visible",false),
					new eui.SetProperty("kImgDrumstick5","visible",false),
					new eui.SetProperty("kImgLocked","visible",false)
				])
			,
			new eui.State ("state2",
				[
					new eui.SetProperty("kImgDrumstick1","visible",false),
					new eui.SetProperty("kImgDrumstick3","visible",false),
					new eui.SetProperty("kImgDrumstick4","visible",false),
					new eui.SetProperty("kImgDrumstick5","visible",false),
					new eui.SetProperty("kImgLocked","visible",false)
				])
		];
	}
	var _proto = DrumstickDevSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgDisk_i(),this.kImgDrumstick1_i(),this.kImgDrumstick3_i(),this.kImgDrumstick4_i(),this.kImgDrumstick5_i(),this.kImgLocked_i()];
		return t;
	};
	_proto.kImgDisk_i = function () {
		var t = new eui.Image();
		this.kImgDisk = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 27;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 55;
		t.bottom = 23;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 59;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 71.5;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 33;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 92;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 21;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 22.5;
		return t;
	};
	_proto.kImgLocked_i = function () {
		var t = new eui.Image();
		this.kImgLocked = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 48;
		t.source = "";
		t.x = 102;
		t.y = 82;
		return t;
	};
	return DrumstickDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DrumstickSkin.exml'] = window.DrumstickSkin = (function (_super) {
	__extends(DrumstickSkin, _super);
	function DrumstickSkin() {
		_super.call(this);
		this.skinParts = ["kImgDisk","kImgDrumstick1","kImgDrumstick3","kImgDrumstick4","kImgDrumstick5","kImgLocked"];
		
		this.height = 150;
		this.width = 200;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick3","visible",false),
					new eui.SetProperty("kImgDrumstick4","visible",false),
					new eui.SetProperty("kImgDrumstick5","visible",false),
					new eui.SetProperty("kImgLocked","visible",false)
				])
			,
			new eui.State ("state2",
				[
					new eui.SetProperty("kImgDrumstick1","visible",false),
					new eui.SetProperty("kImgDrumstick3","visible",false),
					new eui.SetProperty("kImgDrumstick4","visible",false),
					new eui.SetProperty("kImgDrumstick5","visible",false),
					new eui.SetProperty("kImgLocked","visible",false)
				])
		];
	}
	var _proto = DrumstickSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgDisk_i(),this.kImgDrumstick1_i(),this.kImgDrumstick3_i(),this.kImgDrumstick4_i(),this.kImgDrumstick5_i(),this.kImgLocked_i()];
		return t;
	};
	_proto.kImgDisk_i = function () {
		var t = new eui.Image();
		this.kImgDisk = t;
		t.horizontalCenter = 0.5;
		t.source = "main_disk_png";
		t.y = 27;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 55;
		t.bottom = 23;
		t.horizontalCenter = 0;
		t.source = "main_cake1_png";
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 69;
		t.anchorOffsetY = 59;
		t.horizontalCenter = 0.5;
		t.source = "main_cake2_png";
		t.y = 71.5;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 33;
		t.horizontalCenter = 0;
		t.source = "main_cake3_png";
		t.y = 92;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 27;
		t.anchorOffsetY = 21;
		t.horizontalCenter = 0;
		t.source = "main_Cake4_png";
		t.y = 22.5;
		return t;
	};
	_proto.kImgLocked_i = function () {
		var t = new eui.Image();
		this.kImgLocked = t;
		t.anchorOffsetX = 67;
		t.anchorOffsetY = 48;
		t.source = "main_suo_png";
		t.x = 102;
		t.y = 82;
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
		t.source = "";
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
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips1_i = function () {
		var t = new eui.Image();
		this.kImgTips1 = t;
		t.horizontalCenter = 0;
		t.source = "";
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
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips2_i = function () {
		var t = new eui.Image();
		this.kImgTips2 = t;
		t.horizontalCenter = 0;
		t.source = "";
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
		t.source = "";
		t.x = 190.91;
		t.y = 230;
		return t;
	};
	_proto.kImgBuildB_i = function () {
		var t = new eui.Image();
		this.kImgBuildB = t;
		t.anchorOffsetX = 190.91;
		t.anchorOffsetY = 193.53;
		t.height = 403.15;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 165;
		return t;
	};
	_proto.kImgBuildC_i = function () {
		var t = new eui.Image();
		this.kImgBuildC = t;
		t.anchorOffsetX = 207.58;
		t.anchorOffsetY = 183.34;
		t.source = "";
		t.x = 1030;
		t.y = 200.34;
		return t;
	};
	_proto.kImgArrow_i = function () {
		var t = new eui.Image();
		this.kImgArrow = t;
		t.source = "";
		t.x = 1134;
		t.y = 563;
		return t;
	};
	_proto.kImgGirl_i = function () {
		var t = new eui.Image();
		this.kImgGirl = t;
		t.bottom = 0;
		t.right = 0;
		t.source = "";
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["bg","thumb"];
		
		this.height = 27;
		this.width = 158;
		this.elementsContent = [this.bg_i(),this.thumb_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "";
		t.verticalCenter = 0;
		t.width = 148;
		t.x = 5;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kProgress1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgPeople2","kProgress2","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgPeople3","kProgress3","kImgMenu3","kImgNum3","kGrpMenu3","kGrpPeople3","kImgbg2","kImgPancake3","kImgPancake2","kImgPancake1","kImgPancake6","kImgPancake5","kImgPancake4","kImgLocked6","kImgLocked5","kImgLocked4","kGrpBg","kGrpAction","kGrpHam","kImgTipsBg","kImgTips","kGrpTips","kBtnContinue","kGrpSnow","kImgSwipe","kImgRect","kImgShop","kImgGoods1","kImgGoods2","kBtnUpgrade1","kBtnUpgrade2","kGrpShop","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpHam_i(),this.kGrpTips_i(),this.kBtnContinue_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kImgRect_i(),this.kGrpShop_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpPeople3_i(),this.kImgbg2_i(),this.kImgPancake3_i(),this.kImgPancake2_i(),this.kImgPancake1_i(),this.kImgPancake6_i(),this.kImgPancake5_i(),this.kImgPancake4_i(),this.kImgLocked6_i(),this.kImgLocked5_i(),this.kImgLocked4_i()];
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
		t.elementsContent = [this.kImgPeople1_i(),this.kProgress1_i(),this.kGrpMenu1_i()];
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
	_proto.kProgress1_i = function () {
		var t = new eui.ProgressBar();
		this.kProgress1 = t;
		t.height = 15;
		t.rotation = -90;
		t.skinName = "ProgressBarSkin";
		t.value = 0;
		t.width = 147;
		t.x = 150;
		t.y = 180;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 88;
		t.visible = false;
		t.x = 180;
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
		t.elementsContent = [this.kImgPeople2_i(),this.kProgress2_i(),this.kGrpMenu2_i()];
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
	_proto.kProgress2_i = function () {
		var t = new eui.ProgressBar();
		this.kProgress2 = t;
		t.height = 15;
		t.rotation = -90;
		t.skinName = "ProgressBarSkin";
		t.value = 0;
		t.width = 147;
		t.x = 150;
		t.y = 180;
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 82;
		t.visible = false;
		t.x = 180;
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
	_proto.kGrpPeople3_i = function () {
		var t = new eui.Group();
		this.kGrpPeople3 = t;
		t.x = -365;
		t.y = 30;
		t.elementsContent = [this.kImgPeople3_i(),this.kProgress3_i(),this.kGrpMenu3_i()];
		return t;
	};
	_proto.kImgPeople3_i = function () {
		var t = new eui.Image();
		this.kImgPeople3 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kProgress3_i = function () {
		var t = new eui.ProgressBar();
		this.kProgress3 = t;
		t.height = 15;
		t.rotation = -90;
		t.skinName = "ProgressBarSkin";
		t.value = 0;
		t.width = 147;
		t.x = 150;
		t.y = 180;
		return t;
	};
	_proto.kGrpMenu3_i = function () {
		var t = new eui.Group();
		this.kGrpMenu3 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 88;
		t.visible = false;
		t.x = 180;
		t.y = 117;
		t.elementsContent = [this.kImgMenu3_i(),this.kImgNum3_i()];
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
	_proto.kImgNum3_i = function () {
		var t = new eui.Image();
		this.kImgNum3 = t;
		t.source = "";
		t.x = 93;
		t.y = 93.5;
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
	_proto.kImgPancake3_i = function () {
		var t = new eui.Image();
		this.kImgPancake3 = t;
		t.anchorOffsetX = 66.67;
		t.anchorOffsetY = 57.58;
		t.source = "";
		t.x = 253.55;
		t.y = 359.33;
		return t;
	};
	_proto.kImgPancake2_i = function () {
		var t = new eui.Image();
		this.kImgPancake2 = t;
		t.anchorOffsetX = 66.67;
		t.anchorOffsetY = 57.58;
		t.source = "";
		t.x = 189.01;
		t.y = 440.24;
		return t;
	};
	_proto.kImgPancake1_i = function () {
		var t = new eui.Image();
		this.kImgPancake1 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "";
		t.x = 121.43;
		t.y = 524.18;
		return t;
	};
	_proto.kImgPancake6_i = function () {
		var t = new eui.Image();
		this.kImgPancake6 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "";
		t.visible = false;
		t.x = 385.97;
		t.y = 367.51;
		return t;
	};
	_proto.kImgPancake5_i = function () {
		var t = new eui.Image();
		this.kImgPancake5 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "";
		t.visible = false;
		t.x = 329.31;
		t.y = 444.17;
		return t;
	};
	_proto.kImgPancake4_i = function () {
		var t = new eui.Image();
		this.kImgPancake4 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "";
		t.visible = false;
		t.x = 269.61;
		t.y = 532.97;
		return t;
	};
	_proto.kImgLocked6_i = function () {
		var t = new eui.Image();
		this.kImgLocked6 = t;
		t.source = "";
		t.x = 260.3;
		t.y = 401.54;
		return t;
	};
	_proto.kImgLocked5_i = function () {
		var t = new eui.Image();
		this.kImgLocked5 = t;
		t.source = "";
		t.x = 310.91;
		t.y = 315.78;
		return t;
	};
	_proto.kImgLocked4_i = function () {
		var t = new eui.Image();
		this.kImgLocked4 = t;
		t.source = "";
		t.x = 200.91;
		t.y = 496.69;
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
	_proto.kGrpTips_i = function () {
		var t = new eui.Group();
		this.kGrpTips = t;
		t.anchorOffsetX = 636.36;
		t.anchorOffsetY = 112.12;
		t.visible = false;
		t.x = 636.36;
		t.y = 356.12;
		t.elementsContent = [this.kImgTipsBg_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgTipsBg_i = function () {
		var t = new eui.Image();
		this.kImgTipsBg = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.source = "";
		t.x = 173;
		t.y = 33;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.source = "";
		t.x = 1090.17;
		t.y = 603.84;
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
		t.anchorOffsetX = 178.36;
		t.anchorOffsetY = 44.91;
		t.horizontalCenter = 60;
		t.source = "";
		t.visible = false;
		t.y = 476.91;
		return t;
	};
	_proto.kImgRect_i = function () {
		var t = new eui.Rect();
		this.kImgRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpShop_i = function () {
		var t = new eui.Group();
		this.kGrpShop = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.kImgShop_i(),this.kImgGoods1_i(),this.kImgGoods2_i(),this.kBtnUpgrade1_i(),this.kBtnUpgrade2_i()];
		return t;
	};
	_proto.kImgShop_i = function () {
		var t = new eui.Image();
		this.kImgShop = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgGoods1_i = function () {
		var t = new eui.Image();
		this.kImgGoods1 = t;
		t.source = "";
		t.x = 148.22;
		t.y = 477.84;
		return t;
	};
	_proto.kImgGoods2_i = function () {
		var t = new eui.Image();
		this.kImgGoods2 = t;
		t.anchorOffsetX = 81.82;
		t.anchorOffsetY = 57.58;
		t.source = "";
		t.x = 519.74;
		t.y = 545.12;
		return t;
	};
	_proto.kBtnUpgrade1_i = function () {
		var t = new eui.Image();
		this.kBtnUpgrade1 = t;
		t.anchorOffsetX = 78.79;
		t.anchorOffsetY = 30.3;
		t.source = "";
		t.x = 264.06;
		t.y = 650.2;
		return t;
	};
	_proto.kBtnUpgrade2_i = function () {
		var t = new eui.Image();
		this.kBtnUpgrade2 = t;
		t.anchorOffsetX = 78.79;
		t.anchorOffsetY = 30.3;
		t.source = "";
		t.x = 521.09;
		t.y = 650.2;
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
		this.skinParts = ["kImgBg1","kImgPeople1","kProgress1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgPeople2","kProgress2","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgPeople3","kProgress3","kImgMenu3","kImgNum3","kGrpMenu3","kGrpPeople3","kImgbg2","kImgPancake3","kImgPancake2","kImgPancake1","kImgPancake6","kImgPancake5","kImgPancake4","kImgLocked6","kImgLocked5","kImgLocked4","kGrpBg","kGrpAction","kGrpHam","kImgTipsBg","kImgTips","kGrpTips","kBtnContinue","kGrpSnow","kImgSwipe","kImgRect","kImgShop","kImgGoods1","kImgGoods2","kBtnUpgrade1","kBtnUpgrade2","kGrpShop","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpHam_i(),this.kGrpTips_i(),this.kBtnContinue_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kImgRect_i(),this.kGrpShop_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kGrpPeople2_i(),this.kGrpPeople3_i(),this.kImgbg2_i(),this.kImgPancake3_i(),this.kImgPancake2_i(),this.kImgPancake1_i(),this.kImgPancake6_i(),this.kImgPancake5_i(),this.kImgPancake4_i(),this.kImgLocked6_i(),this.kImgLocked5_i(),this.kImgLocked4_i()];
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
		t.elementsContent = [this.kImgPeople1_i(),this.kProgress1_i(),this.kGrpMenu1_i()];
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
	_proto.kProgress1_i = function () {
		var t = new eui.ProgressBar();
		this.kProgress1 = t;
		t.height = 15;
		t.rotation = -90;
		t.skinName = "ProgressBarSkin";
		t.value = 0;
		t.width = 147;
		t.x = 150;
		t.y = 180;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 88;
		t.visible = false;
		t.x = 180;
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
		t.elementsContent = [this.kImgPeople2_i(),this.kProgress2_i(),this.kGrpMenu2_i()];
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
	_proto.kProgress2_i = function () {
		var t = new eui.ProgressBar();
		this.kProgress2 = t;
		t.height = 15;
		t.rotation = -90;
		t.skinName = "ProgressBarSkin";
		t.value = 0;
		t.width = 147;
		t.x = 150;
		t.y = 180;
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 82;
		t.visible = false;
		t.x = 180;
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
	_proto.kGrpPeople3_i = function () {
		var t = new eui.Group();
		this.kGrpPeople3 = t;
		t.x = -365;
		t.y = 30;
		t.elementsContent = [this.kImgPeople3_i(),this.kProgress3_i(),this.kGrpMenu3_i()];
		return t;
	};
	_proto.kImgPeople3_i = function () {
		var t = new eui.Image();
		this.kImgPeople3 = t;
		t.source = "main_people3_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kProgress3_i = function () {
		var t = new eui.ProgressBar();
		this.kProgress3 = t;
		t.height = 15;
		t.rotation = -90;
		t.skinName = "ProgressBarSkin";
		t.value = 0;
		t.width = 147;
		t.x = 150;
		t.y = 180;
		return t;
	};
	_proto.kGrpMenu3_i = function () {
		var t = new eui.Group();
		this.kGrpMenu3 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 88;
		t.visible = false;
		t.x = 180;
		t.y = 117;
		t.elementsContent = [this.kImgMenu3_i(),this.kImgNum3_i()];
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
	_proto.kImgNum3_i = function () {
		var t = new eui.Image();
		this.kImgNum3 = t;
		t.source = "main_x3_png";
		t.x = 93;
		t.y = 93.5;
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
	_proto.kImgPancake3_i = function () {
		var t = new eui.Image();
		this.kImgPancake3 = t;
		t.anchorOffsetX = 66.67;
		t.anchorOffsetY = 57.58;
		t.source = "main_cake1_png";
		t.x = 253.55;
		t.y = 359.33;
		return t;
	};
	_proto.kImgPancake2_i = function () {
		var t = new eui.Image();
		this.kImgPancake2 = t;
		t.anchorOffsetX = 66.67;
		t.anchorOffsetY = 57.58;
		t.source = "main_cake1_png";
		t.x = 189.01;
		t.y = 440.24;
		return t;
	};
	_proto.kImgPancake1_i = function () {
		var t = new eui.Image();
		this.kImgPancake1 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "main_cake1_png";
		t.x = 121.43;
		t.y = 524.18;
		return t;
	};
	_proto.kImgPancake6_i = function () {
		var t = new eui.Image();
		this.kImgPancake6 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "main_cake1_png";
		t.visible = false;
		t.x = 385.97;
		t.y = 367.51;
		return t;
	};
	_proto.kImgPancake5_i = function () {
		var t = new eui.Image();
		this.kImgPancake5 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "main_cake1_png";
		t.visible = false;
		t.x = 329.31;
		t.y = 444.17;
		return t;
	};
	_proto.kImgPancake4_i = function () {
		var t = new eui.Image();
		this.kImgPancake4 = t;
		t.anchorOffsetX = 69.7;
		t.anchorOffsetY = 60.61;
		t.source = "main_cake1_png";
		t.visible = false;
		t.x = 269.61;
		t.y = 532.97;
		return t;
	};
	_proto.kImgLocked6_i = function () {
		var t = new eui.Image();
		this.kImgLocked6 = t;
		t.source = "main_suo_png";
		t.x = 260.3;
		t.y = 401.54;
		return t;
	};
	_proto.kImgLocked5_i = function () {
		var t = new eui.Image();
		this.kImgLocked5 = t;
		t.source = "main_suo_png";
		t.x = 310.91;
		t.y = 315.78;
		return t;
	};
	_proto.kImgLocked4_i = function () {
		var t = new eui.Image();
		this.kImgLocked4 = t;
		t.source = "main_suo_png";
		t.x = 200.91;
		t.y = 496.69;
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
	_proto.kGrpTips_i = function () {
		var t = new eui.Group();
		this.kGrpTips = t;
		t.anchorOffsetX = 636.36;
		t.anchorOffsetY = 112.12;
		t.visible = false;
		t.x = 636.36;
		t.y = 356.12;
		t.elementsContent = [this.kImgTipsBg_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgTipsBg_i = function () {
		var t = new eui.Image();
		this.kImgTipsBg = t;
		t.source = "main_tips_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.source = "main_tips_png";
		t.x = 173;
		t.y = 33;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.source = "main_continue_png";
		t.x = 1090.17;
		t.y = 603.84;
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
		t.anchorOffsetX = 178.36;
		t.anchorOffsetY = 44.91;
		t.horizontalCenter = 60;
		t.source = "main_swipe_png";
		t.visible = false;
		t.y = 476.91;
		return t;
	};
	_proto.kImgRect_i = function () {
		var t = new eui.Rect();
		this.kImgRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpShop_i = function () {
		var t = new eui.Group();
		this.kGrpShop = t;
		t.horizontalCenter = 0;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.elementsContent = [this.kImgShop_i(),this.kImgGoods1_i(),this.kImgGoods2_i(),this.kBtnUpgrade1_i(),this.kBtnUpgrade2_i()];
		return t;
	};
	_proto.kImgShop_i = function () {
		var t = new eui.Image();
		this.kImgShop = t;
		t.horizontalCenter = 0;
		t.source = "main_jia_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgGoods1_i = function () {
		var t = new eui.Image();
		this.kImgGoods1 = t;
		t.source = "main_good1_png";
		t.x = 148.22;
		t.y = 477.84;
		return t;
	};
	_proto.kImgGoods2_i = function () {
		var t = new eui.Image();
		this.kImgGoods2 = t;
		t.anchorOffsetX = 81.82;
		t.anchorOffsetY = 57.58;
		t.source = "main_good2_png";
		t.x = 519.74;
		t.y = 545.12;
		return t;
	};
	_proto.kBtnUpgrade1_i = function () {
		var t = new eui.Image();
		this.kBtnUpgrade1 = t;
		t.anchorOffsetX = 78.79;
		t.anchorOffsetY = 30.3;
		t.source = "main_upgrade_png";
		t.x = 264.06;
		t.y = 650.2;
		return t;
	};
	_proto.kBtnUpgrade2_i = function () {
		var t = new eui.Image();
		this.kBtnUpgrade2 = t;
		t.anchorOffsetX = 78.79;
		t.anchorOffsetY = 30.3;
		t.source = "main_upgrade_png";
		t.x = 521.09;
		t.y = 650.2;
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