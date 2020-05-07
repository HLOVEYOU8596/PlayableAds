
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
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/HamburgDevSkin.exml'] = window.HamburgDevSkin = (function (_super) {
	__extends(HamburgDevSkin, _super);
	function HamburgDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgHam1","kImgHam2","kImgHam3","kImgHam4","kImgHam5","kGrpMaster"];
		
		this.currentState = "state1";
		this.height = 80;
		this.width = 100;
		this.elementsContent = [this.kGrpMaster_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgHam3","visible",false),
					new eui.SetProperty("kImgHam4","visible",false),
					new eui.SetProperty("kImgHam5","visible",false)
				])
		];
	}
	var _proto = HamburgDevSkin.prototype;

	_proto.kGrpMaster_i = function () {
		var t = new eui.Group();
		this.kGrpMaster = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 39;
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
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 27;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.kImgHam2_i = function () {
		var t = new eui.Image();
		this.kImgHam2 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.source = "";
		t.visible = false;
		t.y = 100;
		return t;
	};
	_proto.kImgHam3_i = function () {
		var t = new eui.Image();
		this.kImgHam3 = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 23;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 39;
		return t;
	};
	_proto.kImgHam4_i = function () {
		var t = new eui.Image();
		this.kImgHam4 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 21;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 34;
		return t;
	};
	_proto.kImgHam5_i = function () {
		var t = new eui.Image();
		this.kImgHam5 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 25;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 24;
		return t;
	};
	return HamburgDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HamburgSkin.exml'] = window.HamburgSkin = (function (_super) {
	__extends(HamburgSkin, _super);
	function HamburgSkin() {
		_super.call(this);
		this.skinParts = ["kImgHam1","kImgHam2","kImgHam3","kImgHam4","kImgHam5","kGrpMaster"];
		
		this.currentState = "state1";
		this.height = 80;
		this.width = 100;
		this.elementsContent = [this.kGrpMaster_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgHam3","visible",false),
					new eui.SetProperty("kImgHam4","visible",false),
					new eui.SetProperty("kImgHam5","visible",false)
				])
		];
	}
	var _proto = HamburgSkin.prototype;

	_proto.kGrpMaster_i = function () {
		var t = new eui.Group();
		this.kGrpMaster = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 39;
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
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 27;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "main_ham1_png";
		return t;
	};
	_proto.kImgHam2_i = function () {
		var t = new eui.Image();
		this.kImgHam2 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 40;
		t.horizontalCenter = 0;
		t.source = "main_ham2_png";
		t.visible = false;
		t.y = 100;
		return t;
	};
	_proto.kImgHam3_i = function () {
		var t = new eui.Image();
		this.kImgHam3 = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 23;
		t.horizontalCenter = 0.5;
		t.source = "main_ham3_png";
		t.y = 39;
		return t;
	};
	_proto.kImgHam4_i = function () {
		var t = new eui.Image();
		this.kImgHam4 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 21;
		t.horizontalCenter = 0.5;
		t.source = "main_ham4_png";
		t.y = 34;
		return t;
	};
	_proto.kImgHam5_i = function () {
		var t = new eui.Image();
		this.kImgHam5 = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 25;
		t.horizontalCenter = 0;
		t.source = "main_ham5_png";
		t.y = 24;
		return t;
	};
	return HamburgSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgbg2","kGrpBg","kGrpAction","kGrpHam","kGrpSnow","kImgSwipe","kGrpGuide","kGrpMain"];
		
		this.height = 320;
		this.width = 480;
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
		t.height = 320;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 480;
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
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.x = -200;
		t.y = 18.61;
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
		t.anchorOffsetX = -0.67;
		t.anchorOffsetY = 34;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 84.57;
		t.y = 43;
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
		t.left = 34;
		t.source = "";
		t.top = 38;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -200;
		t.y = 17;
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
		t.anchorOffsetX = 0.67;
		t.anchorOffsetY = 34;
		t.visible = false;
		t.x = 94.68;
		t.y = 43;
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
		t.left = 36;
		t.source = "";
		t.top = 36;
		t.width = 31;
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
		t.anchorOffsetX = 112.67;
		t.anchorOffsetY = 24.67;
		t.horizontalCenter = -40.5;
		t.source = "";
		t.visible = false;
		t.y = 199.34;
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
		
		this.height = 320;
		this.width = 480;
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
		t.height = 320;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 480;
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
		t.x = -200;
		t.y = 18.61;
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
		t.anchorOffsetX = -0.67;
		t.anchorOffsetY = 34;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 84.57;
		t.y = 43;
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
		t.left = 34;
		t.source = "main_x3_png";
		t.top = 38;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -200;
		t.y = 17;
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
		t.anchorOffsetX = 0.67;
		t.anchorOffsetY = 34;
		t.visible = false;
		t.x = 94.68;
		t.y = 43;
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
		t.left = 36;
		t.source = "main_x6_png";
		t.top = 36;
		t.width = 31;
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
		t.anchorOffsetX = 112.67;
		t.anchorOffsetY = 24.67;
		t.horizontalCenter = -40.5;
		t.source = "main_swipe_png";
		t.visible = false;
		t.y = 199.34;
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