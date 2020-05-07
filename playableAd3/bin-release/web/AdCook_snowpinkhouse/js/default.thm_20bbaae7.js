
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
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/GameStartDevSkin.exml'] = window.GameStartDevSkin = (function (_super) {
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
		t.y = 88;
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
		t.y = 633;
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
		t.height = 350;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 0;
		t.width = 1074.91;
		t.elementsContent = [this.kImgBuildA_i(),this.kImgBuildB_i(),this.kImgBuildC_i(),this.kImgArrow_i()];
		return t;
	};
	_proto.kImgBuildA_i = function () {
		var t = new eui.Image();
		this.kImgBuildA = t;
		t.anchorOffsetX = 181.82;
		t.anchorOffsetY = 181.82;
		t.source = "";
		t.x = 181.82;
		t.y = 183.82;
		return t;
	};
	_proto.kImgBuildB_i = function () {
		var t = new eui.Image();
		this.kImgBuildB = t;
		t.anchorOffsetX = 178.79;
		t.anchorOffsetY = 178.79;
		t.source = "";
		t.x = 545.79;
		t.y = 178.79;
		return t;
	};
	_proto.kImgBuildC_i = function () {
		var t = new eui.Image();
		this.kImgBuildC = t;
		t.anchorOffsetX = 187.88;
		t.anchorOffsetY = 175.76;
		t.source = "";
		t.x = 904.88;
		t.y = 181.76;
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
		t.height = 350;
		t.horizontalCenter = 0.5;
		t.verticalCenter = 0;
		t.width = 1074.91;
		t.elementsContent = [this.kImgBuildA_i(),this.kImgBuildB_i(),this.kImgBuildC_i(),this.kImgArrow_i()];
		return t;
	};
	_proto.kImgBuildA_i = function () {
		var t = new eui.Image();
		this.kImgBuildA = t;
		t.anchorOffsetX = 181.82;
		t.anchorOffsetY = 181.82;
		t.source = "start_house1_png";
		t.x = 181.82;
		t.y = 183.82;
		return t;
	};
	_proto.kImgBuildB_i = function () {
		var t = new eui.Image();
		this.kImgBuildB = t;
		t.anchorOffsetX = 178.79;
		t.anchorOffsetY = 178.79;
		t.source = "start_house2_png";
		t.x = 545.79;
		t.y = 178.79;
		return t;
	};
	_proto.kImgBuildC_i = function () {
		var t = new eui.Image();
		this.kImgBuildC = t;
		t.anchorOffsetX = 187.88;
		t.anchorOffsetY = 175.76;
		t.source = "start_house3_png";
		t.x = 904.88;
		t.y = 181.76;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/HamburgDevSkin.exml'] = window.HamburgDevSkin = (function (_super) {
	__extends(HamburgDevSkin, _super);
	function HamburgDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgHam1","kImgHam2","kImgHam3","kImgHam4","kImgHam5","kGrpMaster"];
		
		this.currentState = "state1";
		this.height = 229;
		this.width = 216;
		this.elementsContent = [this.kGrpMaster_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgHam2","y",145),
					new eui.SetProperty("kImgHam3","y",128),
					new eui.SetProperty("kImgHam3","visible",false),
					new eui.SetProperty("kImgHam4","horizontalCenter",0.5),
					new eui.SetProperty("kImgHam4","y",106),
					new eui.SetProperty("kImgHam4","visible",false),
					new eui.SetProperty("kImgHam5","horizontalCenter",0),
					new eui.SetProperty("kImgHam5","y",74),
					new eui.SetProperty("kImgHam5","anchorOffsetX",88),
					new eui.SetProperty("kImgHam5","anchorOffsetY",64),
					new eui.SetProperty("kImgHam5","visible",false)
				])
		];
	}
	var _proto = HamburgDevSkin.prototype;

	_proto.kGrpMaster_i = function () {
		var t = new eui.Group();
		this.kGrpMaster = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 114;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgHam1_i(),this.kImgHam2_i(),this.kImgHam3_i(),this.kImgHam4_i(),this.kImgHam5_i()];
		return t;
	};
	_proto.kImgHam1_i = function () {
		var t = new eui.Image();
		this.kImgHam1 = t;
		t.anchorOffsetX = 81;
		t.anchorOffsetY = 59;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.kImgHam2_i = function () {
		var t = new eui.Image();
		this.kImgHam2 = t;
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 61;
		t.source = "";
		t.x = 106;
		t.y = 140;
		return t;
	};
	_proto.kImgHam3_i = function () {
		var t = new eui.Image();
		this.kImgHam3 = t;
		t.anchorOffsetX = 99;
		t.anchorOffsetY = 73;
		t.source = "";
		t.x = 104;
		t.y = 124;
		return t;
	};
	_proto.kImgHam4_i = function () {
		var t = new eui.Image();
		this.kImgHam4 = t;
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 67;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 102;
		return t;
	};
	_proto.kImgHam5_i = function () {
		var t = new eui.Image();
		this.kImgHam5 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 2;
		return t;
	};
	return HamburgDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HamburgSkin.exml'] = window.HamburgSkin = (function (_super) {
	__extends(HamburgSkin, _super);
	function HamburgSkin() {
		_super.call(this);
		this.skinParts = ["kImgHam1","kImgHam2","kImgHam3","kImgHam4","kImgHam5","kGrpMaster"];
		
		this.currentState = "state1";
		this.height = 229;
		this.width = 216;
		this.elementsContent = [this.kGrpMaster_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgHam2","y",145),
					new eui.SetProperty("kImgHam3","y",128),
					new eui.SetProperty("kImgHam3","visible",false),
					new eui.SetProperty("kImgHam4","horizontalCenter",0.5),
					new eui.SetProperty("kImgHam4","y",106),
					new eui.SetProperty("kImgHam4","visible",false),
					new eui.SetProperty("kImgHam5","horizontalCenter",0),
					new eui.SetProperty("kImgHam5","y",74),
					new eui.SetProperty("kImgHam5","anchorOffsetX",88),
					new eui.SetProperty("kImgHam5","anchorOffsetY",64),
					new eui.SetProperty("kImgHam5","visible",false)
				])
		];
	}
	var _proto = HamburgSkin.prototype;

	_proto.kGrpMaster_i = function () {
		var t = new eui.Group();
		this.kGrpMaster = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 114;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgHam1_i(),this.kImgHam2_i(),this.kImgHam3_i(),this.kImgHam4_i(),this.kImgHam5_i()];
		return t;
	};
	_proto.kImgHam1_i = function () {
		var t = new eui.Image();
		this.kImgHam1 = t;
		t.anchorOffsetX = 81;
		t.anchorOffsetY = 59;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "main_ham1_png";
		return t;
	};
	_proto.kImgHam2_i = function () {
		var t = new eui.Image();
		this.kImgHam2 = t;
		t.anchorOffsetX = 85;
		t.anchorOffsetY = 61;
		t.source = "main_ham2_png";
		t.x = 106;
		t.y = 140;
		return t;
	};
	_proto.kImgHam3_i = function () {
		var t = new eui.Image();
		this.kImgHam3 = t;
		t.anchorOffsetX = 99;
		t.anchorOffsetY = 73;
		t.source = "main_ham3_png";
		t.x = 104;
		t.y = 124;
		return t;
	};
	_proto.kImgHam4_i = function () {
		var t = new eui.Image();
		this.kImgHam4 = t;
		t.anchorOffsetX = 101;
		t.anchorOffsetY = 67;
		t.horizontalCenter = 0.5;
		t.source = "main_ham4_png";
		t.y = 102;
		return t;
	};
	_proto.kImgHam5_i = function () {
		var t = new eui.Image();
		this.kImgHam5 = t;
		t.horizontalCenter = 0;
		t.source = "main_ham5_png";
		t.y = 2;
		return t;
	};
	return HamburgSkin;
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