
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
		this.skinParts = ["kImgDisk","kImgDrumstick2","kImgDrumstick3","kImgDrumstick1"];
		
		this.height = 200;
		this.width = 200;
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
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgDisk_i(),this.kImgDrumstick2_i(),this.kImgDrumstick3_i(),this.kImgDrumstick1_i()];
		return t;
	};
	_proto.kImgDisk_i = function () {
		var t = new eui.Image();
		this.kImgDisk = t;
		t.horizontalCenter = -0.5;
		t.source = "";
		t.y = 65;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 93;
		t.anchorOffsetY = 47;
		t.source = "";
		t.x = 102;
		t.y = 132;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 45;
		t.source = "";
		t.x = 142;
		t.y = 91.5;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 43;
		t.source = "";
		t.x = 86;
		t.y = 122.5;
		return t;
	};
	return DrumstickDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DrumstickSkin.exml'] = window.DrumstickSkin = (function (_super) {
	__extends(DrumstickSkin, _super);
	function DrumstickSkin() {
		_super.call(this);
		this.skinParts = ["kImgDisk","kImgDrumstick2","kImgDrumstick3","kImgDrumstick1"];
		
		this.height = 200;
		this.width = 200;
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
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgDisk_i(),this.kImgDrumstick2_i(),this.kImgDrumstick3_i(),this.kImgDrumstick1_i()];
		return t;
	};
	_proto.kImgDisk_i = function () {
		var t = new eui.Image();
		this.kImgDisk = t;
		t.horizontalCenter = -0.5;
		t.source = "main_disk_png";
		t.y = 65;
		return t;
	};
	_proto.kImgDrumstick2_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick2 = t;
		t.anchorOffsetX = 93;
		t.anchorOffsetY = 47;
		t.source = "main_drumstick2_png";
		t.x = 102;
		t.y = 132;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 45;
		t.source = "main_drumstick3_png";
		t.x = 142;
		t.y = 91.5;
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 43;
		t.source = "main_drumstick1_png";
		t.x = 86;
		t.y = 122.5;
		return t;
	};
	return DrumstickSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameEndDevSkin.exml'] = window.GameEndDevSkin = (function (_super) {
	__extends(GameEndDevSkin, _super);
	function GameEndDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kGrpAction","kImgAlertBg","kImgRetry","kImgStar1","kImgStar2","kImgStar3","kGrpStart","kGrpAlert","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameEndDevSkin.prototype;

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
		t.elementsContent = [this.kImgBg_i(),this.kGrpAction_i(),this.kGrpAlert_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "end_bg_png";
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
	_proto.kGrpAlert_i = function () {
		var t = new eui.Group();
		this.kGrpAlert = t;
		t.anchorOffsetX = 272.73;
		t.anchorOffsetY = 293.94;
		t.x = 959.73;
		t.y = 364.94;
		t.elementsContent = [this.kImgAlertBg_i(),this.kImgRetry_i(),this.kGrpStart_i()];
		return t;
	};
	_proto.kImgAlertBg_i = function () {
		var t = new eui.Image();
		this.kImgAlertBg = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgRetry_i = function () {
		var t = new eui.Image();
		this.kImgRetry = t;
		t.anchorOffsetX = 130.3;
		t.anchorOffsetY = 33.33;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 546.45;
		return t;
	};
	_proto.kGrpStart_i = function () {
		var t = new eui.Group();
		this.kGrpStart = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.width = 307.58;
		t.y = 327.14;
		t.elementsContent = [this.kImgStar1_i(),this.kImgStar2_i(),this.kImgStar3_i()];
		return t;
	};
	_proto.kImgStar1_i = function () {
		var t = new eui.Image();
		this.kImgStar1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 47;
		t.rotation = -24;
		t.source = "";
		t.x = 48.48;
		t.y = 92.95;
		return t;
	};
	_proto.kImgStar2_i = function () {
		var t = new eui.Image();
		this.kImgStar2 = t;
		t.anchorOffsetX = 47.54;
		t.anchorOffsetY = 48.76;
		t.horizontalCenter = 1.210000000000008;
		t.rotation = -12;
		t.source = "";
		t.y = 57.58;
		return t;
	};
	_proto.kImgStar3_i = function () {
		var t = new eui.Image();
		this.kImgStar3 = t;
		t.source = "";
		t.x = 211.58;
		t.y = 48.5;
		return t;
	};
	return GameEndDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameEndSkin.exml'] = window.GameEndSkin = (function (_super) {
	__extends(GameEndSkin, _super);
	function GameEndSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kGrpAction","kImgAlertBg","kImgRetry","kImgStar1","kImgStar2","kImgStar3","kGrpStart","kGrpAlert","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = GameEndSkin.prototype;

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
		t.elementsContent = [this.kImgBg_i(),this.kGrpAction_i(),this.kGrpAlert_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "end_bg_png";
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
	_proto.kGrpAlert_i = function () {
		var t = new eui.Group();
		this.kGrpAlert = t;
		t.anchorOffsetX = 272.73;
		t.anchorOffsetY = 293.94;
		t.x = 959.73;
		t.y = 364.94;
		t.elementsContent = [this.kImgAlertBg_i(),this.kImgRetry_i(),this.kGrpStart_i()];
		return t;
	};
	_proto.kImgAlertBg_i = function () {
		var t = new eui.Image();
		this.kImgAlertBg = t;
		t.source = "end_alert_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgRetry_i = function () {
		var t = new eui.Image();
		this.kImgRetry = t;
		t.anchorOffsetX = 130.3;
		t.anchorOffsetY = 33.33;
		t.horizontalCenter = 0;
		t.source = "end_retry_png";
		t.y = 546.45;
		return t;
	};
	_proto.kGrpStart_i = function () {
		var t = new eui.Group();
		this.kGrpStart = t;
		t.anchorOffsetX = 0;
		t.horizontalCenter = 0;
		t.width = 307.58;
		t.y = 327.14;
		t.elementsContent = [this.kImgStar1_i(),this.kImgStar2_i(),this.kImgStar3_i()];
		return t;
	};
	_proto.kImgStar1_i = function () {
		var t = new eui.Image();
		this.kImgStar1 = t;
		t.anchorOffsetX = 47;
		t.anchorOffsetY = 47;
		t.rotation = -24;
		t.source = "end_starw_png";
		t.x = 48.48;
		t.y = 92.95;
		return t;
	};
	_proto.kImgStar2_i = function () {
		var t = new eui.Image();
		this.kImgStar2 = t;
		t.anchorOffsetX = 47.54;
		t.anchorOffsetY = 48.76;
		t.horizontalCenter = 1.210000000000008;
		t.rotation = -12;
		t.source = "end_starw_png";
		t.y = 57.58;
		return t;
	};
	_proto.kImgStar3_i = function () {
		var t = new eui.Image();
		this.kImgStar3 = t;
		t.source = "end_starw_png";
		t.x = 211.58;
		t.y = 48.5;
		return t;
	};
	return GameEndSkin;
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