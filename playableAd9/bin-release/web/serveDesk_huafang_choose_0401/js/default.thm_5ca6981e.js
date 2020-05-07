
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
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgOrder1","kImgOrder2","kImgRight1","kImgRight2","kGrpMenu1","kGrpPeople1","kImgbg2","kGrpBg","kGrpAction","kImgFood10","kImgFood5","kImgFood6","kImgFood2","kImgFood7","kImgFood4","kImgFood1","kImgFood3","kImgFood8","kImgFood9","kImgFood11","kImgFood12","kImgFood13","kImgError","kGrpMenu","kGrpSnow","kImgSwipe","kGrpGuide","kImgHand","kImgRect","kImgChoice1","kImgChoice2","kGrpChoice","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpMenu_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kGrpGuide_i(),this.kImgHand_i(),this.kImgRect_i(),this.kGrpChoice_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kImgbg2_i()];
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
		t.x = 412;
		t.y = 80;
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
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 194.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 244;
		t.y = 194.36;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgOrder2_i(),this.kImgRight1_i(),this.kImgRight2_i()];
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
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 76;
		t.horizontalCenter = -34.5;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 84.5;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgRight1_i = function () {
		var t = new eui.Image();
		this.kImgRight1 = t;
		t.horizontalCenter = -32;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgRight2_i = function () {
		var t = new eui.Image();
		this.kImgRight2 = t;
		t.horizontalCenter = 100;
		t.source = "";
		t.verticalCenter = 0;
		t.visible = false;
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
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgFood10_i(),this.kImgFood5_i(),this.kImgFood6_i(),this.kImgFood2_i(),this.kImgFood7_i(),this.kImgFood4_i(),this.kImgFood1_i(),this.kImgFood3_i(),this.kImgFood8_i(),this.kImgFood9_i(),this.kImgFood11_i(),this.kImgFood12_i(),this.kImgFood13_i(),this.kImgError_i()];
		return t;
	};
	_proto.kImgFood10_i = function () {
		var t = new eui.Image();
		this.kImgFood10 = t;
		t.anchorOffsetX = 51.52;
		t.anchorOffsetY = 72.73;
		t.name = "10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.x = 924.67;
		t.y = 345.36;
		return t;
	};
	_proto.kImgFood5_i = function () {
		var t = new eui.Image();
		this.kImgFood5 = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 87;
		t.name = "5";
		t.source = "";
		t.x = 342;
		t.y = 489;
		return t;
	};
	_proto.kImgFood6_i = function () {
		var t = new eui.Image();
		this.kImgFood6 = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 59;
		t.name = "6";
		t.source = "";
		t.x = 945;
		t.y = 449;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 54;
		t.name = "2";
		t.source = "";
		t.x = 349;
		t.y = 391;
		return t;
	};
	_proto.kImgFood7_i = function () {
		var t = new eui.Image();
		this.kImgFood7 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 54;
		t.name = "7";
		t.source = "";
		t.visible = false;
		t.x = 408.73;
		t.y = 391.91;
		return t;
	};
	_proto.kImgFood4_i = function () {
		var t = new eui.Image();
		this.kImgFood4 = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 49;
		t.name = "4";
		t.source = "";
		t.x = 970;
		t.y = 549;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 77;
		t.name = "1";
		t.source = "";
		t.x = 492;
		t.y = 628;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 98;
		t.name = "3";
		t.source = "";
		t.x = 1137;
		t.y = 583;
		return t;
	};
	_proto.kImgFood8_i = function () {
		var t = new eui.Image();
		this.kImgFood8 = t;
		t.anchorOffsetX = 148.48;
		t.anchorOffsetY = 160.61;
		t.name = "8";
		t.source = "";
		t.x = 128;
		t.y = 421.61;
		return t;
	};
	_proto.kImgFood9_i = function () {
		var t = new eui.Image();
		this.kImgFood9 = t;
		t.anchorOffsetX = 103.03;
		t.anchorOffsetY = 103.03;
		t.name = "9";
		t.source = "";
		t.x = 1065.15;
		t.y = 413.44;
		return t;
	};
	_proto.kImgFood11_i = function () {
		var t = new eui.Image();
		this.kImgFood11 = t;
		t.anchorOffsetX = 78.79;
		t.anchorOffsetY = 72.73;
		t.name = "11";
		t.source = "";
		t.x = 640.76;
		t.y = 625.73;
		return t;
	};
	_proto.kImgFood12_i = function () {
		var t = new eui.Image();
		this.kImgFood12 = t;
		t.anchorOffsetX = 81.82;
		t.anchorOffsetY = 69.7;
		t.name = "12";
		t.source = "";
		t.x = 802.17;
		t.y = 622.7;
		return t;
	};
	_proto.kImgFood13_i = function () {
		var t = new eui.Image();
		this.kImgFood13 = t;
		t.anchorOffsetX = 84.85;
		t.anchorOffsetY = 57.58;
		t.name = "13";
		t.source = "";
		t.x = 966.64;
		t.y = 627.76;
		return t;
	};
	_proto.kImgError_i = function () {
		var t = new eui.Image();
		this.kImgError = t;
		t.anchorOffsetX = 172.73;
		t.anchorOffsetY = 172.73;
		t.source = "";
		t.visible = false;
		t.x = 336.73;
		t.y = 360.73;
		return t;
	};
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		return t;
	};
	_proto.kImgSwipe_i = function () {
		var t = new eui.Image();
		this.kImgSwipe = t;
		t.anchorOffsetX = 242;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 0;
		t.source = "";
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
		t.touchThrough = true;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.visible = false;
		t.x = 126.48;
		t.y = 175.45;
		return t;
	};
	_proto.kImgRect_i = function () {
		var t = new eui.Rect();
		this.kImgRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpChoice_i = function () {
		var t = new eui.Group();
		this.kGrpChoice = t;
		t.anchorOffsetX = 343.82;
		t.anchorOffsetY = 49.52;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.x = 643.82;
		t.elementsContent = [this.kImgChoice1_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 137.25;
		t.anchorOffsetY = 53.64;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 137.25;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 138.23;
		t.anchorOffsetY = 50.48;
		t.source = "";
		t.verticalCenter = 0;
		t.x = 550.23;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgOrder1","kImgOrder2","kImgRight1","kImgRight2","kGrpMenu1","kGrpPeople1","kImgbg2","kGrpBg","kGrpAction","kImgFood10","kImgFood5","kImgFood6","kImgFood2","kImgFood7","kImgFood4","kImgFood1","kImgFood3","kImgFood8","kImgFood9","kImgFood11","kImgFood12","kImgFood13","kImgError","kGrpMenu","kGrpSnow","kImgSwipe","kGrpGuide","kImgHand","kImgRect","kImgChoice1","kImgChoice2","kGrpChoice","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpAction_i(),this.kGrpMenu_i(),this.kGrpSnow_i(),this.kImgSwipe_i(),this.kGrpGuide_i(),this.kImgHand_i(),this.kImgRect_i(),this.kGrpChoice_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople1_i(),this.kImgbg2_i()];
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
		t.x = 412;
		t.y = 80;
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
		t.anchorOffsetX = 1;
		t.anchorOffsetY = 194.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 244;
		t.y = 194.36;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgOrder2_i(),this.kImgRight1_i(),this.kImgRight2_i()];
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
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 76;
		t.horizontalCenter = -34.5;
		t.source = "main_order1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 54;
		t.horizontalCenter = 84.5;
		t.source = "main_order2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgRight1_i = function () {
		var t = new eui.Image();
		this.kImgRight1 = t;
		t.horizontalCenter = -32;
		t.source = "main_right_png";
		t.verticalCenter = 0;
		t.visible = false;
		return t;
	};
	_proto.kImgRight2_i = function () {
		var t = new eui.Image();
		this.kImgRight2 = t;
		t.horizontalCenter = 100;
		t.source = "main_right_png";
		t.verticalCenter = 0;
		t.visible = false;
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
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgFood10_i(),this.kImgFood5_i(),this.kImgFood6_i(),this.kImgFood2_i(),this.kImgFood7_i(),this.kImgFood4_i(),this.kImgFood1_i(),this.kImgFood3_i(),this.kImgFood8_i(),this.kImgFood9_i(),this.kImgFood11_i(),this.kImgFood12_i(),this.kImgFood13_i(),this.kImgError_i()];
		return t;
	};
	_proto.kImgFood10_i = function () {
		var t = new eui.Image();
		this.kImgFood10 = t;
		t.anchorOffsetX = 51.52;
		t.anchorOffsetY = 72.73;
		t.name = "10";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_zhi_png";
		t.x = 924.67;
		t.y = 345.36;
		return t;
	};
	_proto.kImgFood5_i = function () {
		var t = new eui.Image();
		this.kImgFood5 = t;
		t.anchorOffsetX = 116;
		t.anchorOffsetY = 87;
		t.name = "5";
		t.source = "main_chicken_png";
		t.x = 342;
		t.y = 489;
		return t;
	};
	_proto.kImgFood6_i = function () {
		var t = new eui.Image();
		this.kImgFood6 = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 59;
		t.name = "6";
		t.source = "main_coke_png";
		t.x = 945;
		t.y = 449;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 54;
		t.name = "2";
		t.source = "main_shu_png";
		t.x = 349;
		t.y = 391;
		return t;
	};
	_proto.kImgFood7_i = function () {
		var t = new eui.Image();
		this.kImgFood7 = t;
		t.anchorOffsetX = 51;
		t.anchorOffsetY = 54;
		t.name = "2";
		t.source = "main_shu_png";
		t.visible = false;
		t.x = 408.73;
		t.y = 391.91;
		return t;
	};
	_proto.kImgFood4_i = function () {
		var t = new eui.Image();
		this.kImgFood4 = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 49;
		t.name = "4";
		t.source = "main_wine_png";
		t.x = 970;
		t.y = 542.94;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 77;
		t.name = "1";
		t.source = "main_ham_png";
		t.x = 492;
		t.y = 628;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 98;
		t.name = "3";
		t.source = "main_shousi_png";
		t.x = 1137;
		t.y = 583;
		return t;
	};
	_proto.kImgFood8_i = function () {
		var t = new eui.Image();
		this.kImgFood8 = t;
		t.anchorOffsetX = 148.48;
		t.anchorOffsetY = 160.61;
		t.name = "8";
		t.source = "main_cheng_png";
		t.x = 128;
		t.y = 421.61;
		return t;
	};
	_proto.kImgFood9_i = function () {
		var t = new eui.Image();
		this.kImgFood9 = t;
		t.anchorOffsetX = 103.03;
		t.anchorOffsetY = 103.03;
		t.name = "9";
		t.source = "main_noodle_png";
		t.x = 1065.15;
		t.y = 413.44;
		return t;
	};
	_proto.kImgFood11_i = function () {
		var t = new eui.Image();
		this.kImgFood11 = t;
		t.anchorOffsetX = 78.79;
		t.anchorOffsetY = 72.73;
		t.name = "11";
		t.source = "main_san_png";
		t.x = 640.76;
		t.y = 632;
		return t;
	};
	_proto.kImgFood12_i = function () {
		var t = new eui.Image();
		this.kImgFood12 = t;
		t.anchorOffsetX = 81.82;
		t.anchorOffsetY = 69.7;
		t.name = "12";
		t.source = "main_pancake_png";
		t.x = 802.17;
		t.y = 632;
		return t;
	};
	_proto.kImgFood13_i = function () {
		var t = new eui.Image();
		this.kImgFood13 = t;
		t.anchorOffsetX = 84.85;
		t.anchorOffsetY = 57.58;
		t.name = "13";
		t.source = "main_fish_png";
		t.x = 966.64;
		t.y = 636;
		return t;
	};
	_proto.kImgError_i = function () {
		var t = new eui.Image();
		this.kImgError = t;
		t.anchorOffsetX = 172.73;
		t.anchorOffsetY = 172.73;
		t.source = "main_error_png";
		t.visible = false;
		t.x = 336.73;
		t.y = 360.73;
		return t;
	};
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
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
		t.touchThrough = true;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 126.48;
		t.y = 175.45;
		return t;
	};
	_proto.kImgRect_i = function () {
		var t = new eui.Rect();
		this.kImgRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.3;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto.kGrpChoice_i = function () {
		var t = new eui.Group();
		this.kGrpChoice = t;
		t.anchorOffsetX = 343.82;
		t.anchorOffsetY = 49.52;
		t.scaleX = 0;
		t.scaleY = 0;
		t.verticalCenter = 0;
		t.x = 643.82;
		t.elementsContent = [this.kImgChoice1_i(),this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 137.25;
		t.anchorOffsetY = 53.64;
		t.source = "main_continue_png";
		t.verticalCenter = 0;
		t.x = 137.25;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 138.23;
		t.anchorOffsetY = 50.48;
		t.source = "main_skip_png";
		t.verticalCenter = 0;
		t.x = 550.23;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);