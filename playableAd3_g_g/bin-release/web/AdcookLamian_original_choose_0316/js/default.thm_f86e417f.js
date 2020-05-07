
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
		this.skinParts = ["kImgDrumstick1","kImgDrumstick4","kImgDrumstick3","kImgDrumstick5"];
		
		this.height = 70;
		this.width = 70;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick4","visible",false),
					new eui.SetProperty("kImgDrumstick3","visible",false),
					new eui.SetProperty("kImgDrumstick5","visible",false)
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
		t.elementsContent = [this.kImgDrumstick1_i(),this.kImgDrumstick4_i(),this.kImgDrumstick3_i(),this.kImgDrumstick5_i()];
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 30.17;
		t.anchorOffsetY = 22.5;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 19.08;
		t.anchorOffsetY = 15.33;
		t.source = "";
		t.x = 44.18;
		t.y = 28.33;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 16;
		t.anchorOffsetY = 10.33;
		t.horizontalCenter = -11;
		t.source = "";
		t.y = 32.5;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 23.33;
		t.anchorOffsetY = 15.25;
		t.source = "";
		t.x = 37.83;
		t.y = 30.09;
		return t;
	};
	return DrumstickDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/DrumstickSkin.exml'] = window.DrumstickSkin = (function (_super) {
	__extends(DrumstickSkin, _super);
	function DrumstickSkin() {
		_super.call(this);
		this.skinParts = ["kImgDrumstick1","kImgDrumstick4","kImgDrumstick3","kImgDrumstick5"];
		
		this.height = 70;
		this.width = 70;
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgDrumstick4","visible",false),
					new eui.SetProperty("kImgDrumstick3","visible",false),
					new eui.SetProperty("kImgDrumstick5","visible",false)
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
		t.elementsContent = [this.kImgDrumstick1_i(),this.kImgDrumstick4_i(),this.kImgDrumstick3_i(),this.kImgDrumstick5_i()];
		return t;
	};
	_proto.kImgDrumstick1_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick1 = t;
		t.anchorOffsetX = 30.17;
		t.anchorOffsetY = 22.5;
		t.horizontalCenter = 0.5;
		t.source = "main_cake1_png";
		t.verticalCenter = 0.5;
		return t;
	};
	_proto.kImgDrumstick4_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick4 = t;
		t.anchorOffsetX = 19.08;
		t.anchorOffsetY = 15.33;
		t.source = "main_cake3_png";
		t.x = 44.18;
		t.y = 28.33;
		return t;
	};
	_proto.kImgDrumstick3_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick3 = t;
		t.anchorOffsetX = 16;
		t.anchorOffsetY = 10.33;
		t.horizontalCenter = -11;
		t.source = "main_cake2_png";
		t.y = 32.5;
		return t;
	};
	_proto.kImgDrumstick5_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick5 = t;
		t.anchorOffsetX = 23.33;
		t.anchorOffsetY = 15.25;
		t.source = "main_Cake4_png";
		t.x = 37.83;
		t.y = 30.09;
		return t;
	};
	return DrumstickSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgbg2","kGrpBg","kGrpAction","kGrpHam","kGrpSnow","kImgTopic","kLbTopic","kImgEndBg","kImgFood4","kImgFood2","kImgFood1","kImgFood3","kImgTips","kImgContent","kImgHand","kGrpClose","kGrpEnd","kImgSwipe","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpHam_i(),this.kGrpSnow_i(),this.kGrpEnd_i(),this.kImgSwipe_i(),this.kGrpGuide_i()];
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
		t.x = -142;
		t.y = 0;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 0.15;
		t.anchorOffsetY = 31.06;
		t.height = 63;
		t.visible = false;
		t.width = 67;
		t.x = 76.15;
		t.y = 90;
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
		t.bottom = 5;
		t.right = 3;
		t.source = "";
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -208;
		t.y = 0;
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
		t.anchorOffsetX = 1.19;
		t.anchorOffsetY = 28.08;
		t.height = 59;
		t.visible = false;
		t.width = 67;
		t.x = 76;
		t.y = 90;
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
		t.bottom = 1;
		t.right = 3;
		t.source = "";
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
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.kImgTopic_i(),this.kLbTopic_i(),this.kGrpClose_i()];
		return t;
	};
	_proto.kImgTopic_i = function () {
		var t = new eui.Image();
		this.kImgTopic = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = -64;
		return t;
	};
	_proto.kLbTopic_i = function () {
		var t = new eui.Label();
		this.kLbTopic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 96.66;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "Delicious";
		t.textAlign = "center";
		t.textColor = 0x9b6937;
		t.verticalAlign = "middle";
		t.width = 367.94;
		t.y = 47;
		return t;
	};
	_proto.kGrpClose_i = function () {
		var t = new eui.Group();
		this.kGrpClose = t;
		t.height = 320;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 480;
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
		t.source = "";
		t.x = 320.5;
		t.y = 148.15;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.source = "";
		t.x = 29;
		t.y = 133;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.source = "";
		t.x = 354;
		t.y = 183.15;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.source = "";
		t.x = 1.2;
		t.y = 181.15;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "";
		t.y = 288;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.anchorOffsetX = 133.09;
		t.anchorOffsetY = 31.88;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = -67;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.x = 244;
		t.y = 256;
		return t;
	};
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 178;
		t.anchorOffsetY = 41;
		t.horizontalCenter = 0;
		t.source = "";
		t.visible = false;
		t.y = 473;
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
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgNum1","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgMenu2","kImgNum2","kGrpMenu2","kGrpPeople2","kImgbg2","kGrpBg","kGrpAction","kGrpHam","kGrpSnow","kImgTopic","kLbTopic","kImgEndBg","kImgFood4","kImgFood2","kImgFood1","kImgFood3","kImgTips","kImgContent","kImgHand","kGrpClose","kGrpEnd","kImgSwipe","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpHam_i(),this.kGrpSnow_i(),this.kGrpEnd_i(),this.kImgSwipe_i(),this.kGrpGuide_i()];
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
		t.x = -142;
		t.y = 0;
		t.elementsContent = [this.kImgPeople1_i(),this.kGrpMenu1_i()];
		return t;
	};
	_proto.kImgPeople1_i = function () {
		var t = new eui.Image();
		this.kImgPeople1 = t;
		t.source = "main_people2_png";
		t.visible = false;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 0.15;
		t.anchorOffsetY = 31.06;
		t.height = 63;
		t.visible = false;
		t.width = 67;
		t.x = 76.15;
		t.y = 90;
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
		t.bottom = 5;
		t.right = 3;
		t.source = "main_x3_png";
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = -208;
		t.y = 0;
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
		t.anchorOffsetX = 1.19;
		t.anchorOffsetY = 28.08;
		t.height = 59;
		t.visible = false;
		t.width = 67;
		t.x = 76;
		t.y = 90;
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
		t.bottom = 1;
		t.right = 3;
		t.source = "main_x6_png";
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
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.kImgTopic_i(),this.kLbTopic_i(),this.kGrpClose_i()];
		return t;
	};
	_proto.kImgTopic_i = function () {
		var t = new eui.Image();
		this.kImgTopic = t;
		t.horizontalCenter = 0;
		t.source = "main_reward_bg_png";
		t.verticalCenter = -64;
		return t;
	};
	_proto.kLbTopic_i = function () {
		var t = new eui.Label();
		this.kLbTopic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 96.66;
		t.horizontalCenter = 0;
		t.size = 26;
		t.text = "Delicious";
		t.textAlign = "center";
		t.textColor = 0x9b6937;
		t.verticalAlign = "middle";
		t.width = 367.94;
		t.y = 47;
		return t;
	};
	_proto.kGrpClose_i = function () {
		var t = new eui.Group();
		this.kGrpClose = t;
		t.height = 320;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 480;
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
		t.source = "end_food4_png";
		t.x = 320.5;
		t.y = 148.15;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.source = "end_food2_png";
		t.x = 29;
		t.y = 133;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.source = "end_fodo1_png";
		t.x = 354;
		t.y = 183.15;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.source = "end_food3_png";
		t.x = 1.2;
		t.y = 181.15;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.scaleX = 1.3;
		t.scaleY = 1.3;
		t.source = "end_tips_png";
		t.y = 288;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.anchorOffsetX = 133.09;
		t.anchorOffsetY = 31.88;
		t.horizontalCenter = 0;
		t.source = "end_topic_png";
		t.verticalCenter = -67;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.x = 244;
		t.y = 256;
		return t;
	};
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 178;
		t.anchorOffsetY = 41;
		t.horizontalCenter = 0;
		t.source = "main_swipe_png";
		t.visible = false;
		t.y = 473;
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