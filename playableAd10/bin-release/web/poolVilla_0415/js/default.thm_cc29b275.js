
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
		this.skinParts = ["kImgBg2","kImgTree1","kImgTree2","kImgTree3","kImgTree4","kImgBg1","kImgPool1","kImgUmbllear1","kImgUmbllear2","kImgCirle1","kImgCirle2","kImgChair1","kImgChair2","kImgSetting2","kImgSetting1","kImgSetting4","kImgSetting3","kGrpBg","kImgPeople","kImgTips","kGrpPeople","kGrpSnow","kGrpAction","kImgSwipe","kImgRight","kImgLine1","kImgLine2","kImgChoice1","kGrpChoice1","kImgChoice2","kGrpChoice2","kGrpMenu","kGrpGuide","kImgEnd","kBtnContinue","kGrpEnd","kGrpMain"];
		
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
		t.anchorOffsetX = 1006.06;
		t.anchorOffsetY = 481.82;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpPeople_i(),this.kGrpSnow_i(),this.kGrpAction_i(),this.kImgSwipe_i(),this.kGrpMenu_i(),this.kGrpGuide_i(),this.kGrpEnd_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg2_i(),this.kImgTree1_i(),this.kImgTree2_i(),this.kImgTree3_i(),this.kImgTree4_i(),this.kImgBg1_i(),this.kImgPool1_i(),this.kImgUmbllear1_i(),this.kImgUmbllear2_i(),this.kImgCirle1_i(),this.kImgCirle2_i(),this.kImgChair1_i(),this.kImgChair2_i(),this.kImgSetting2_i(),this.kImgSetting1_i(),this.kImgSetting4_i(),this.kImgSetting3_i()];
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTree1_i = function () {
		var t = new eui.Image();
		this.kImgTree1 = t;
		t.anchorOffsetX = 294;
		t.anchorOffsetY = 226;
		t.source = "";
		t.x = 990;
		t.y = 230;
		return t;
	};
	_proto.kImgTree2_i = function () {
		var t = new eui.Image();
		this.kImgTree2 = t;
		t.anchorOffsetX = 208;
		t.anchorOffsetY = 306;
		t.source = "";
		t.x = 1057;
		t.y = 308;
		return t;
	};
	_proto.kImgTree3_i = function () {
		var t = new eui.Image();
		this.kImgTree3 = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 189.39;
		t.source = "";
		t.top = 34;
		t.x = 152;
		return t;
	};
	_proto.kImgTree4_i = function () {
		var t = new eui.Image();
		this.kImgTree4 = t;
		t.anchorOffsetX = 334.85;
		t.anchorOffsetY = 307.58;
		t.source = "";
		t.x = 335.01;
		t.y = 311.58;
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.bottom = 0;
		t.source = "";
		t.x = 0;
		return t;
	};
	_proto.kImgPool1_i = function () {
		var t = new eui.Image();
		this.kImgPool1 = t;
		t.anchorOffsetX = 583;
		t.anchorOffsetY = 125;
		t.source = "";
		t.x = 697.36;
		t.y = 594.24;
		return t;
	};
	_proto.kImgUmbllear1_i = function () {
		var t = new eui.Image();
		this.kImgUmbllear1 = t;
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 172;
		t.source = "";
		t.x = 132;
		t.y = 368;
		return t;
	};
	_proto.kImgUmbllear2_i = function () {
		var t = new eui.Image();
		this.kImgUmbllear2 = t;
		t.anchorOffsetX = 201.52;
		t.anchorOffsetY = 175.76;
		t.source = "";
		t.x = 301.52;
		t.y = 359.76;
		return t;
	};
	_proto.kImgCirle1_i = function () {
		var t = new eui.Image();
		this.kImgCirle1 = t;
		t.anchorOffsetX = 84;
		t.anchorOffsetY = 80;
		t.source = "";
		t.x = 1034;
		t.y = 536;
		return t;
	};
	_proto.kImgCirle2_i = function () {
		var t = new eui.Image();
		this.kImgCirle2 = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 74;
		t.source = "";
		t.x = 1020;
		t.y = 536;
		return t;
	};
	_proto.kImgChair1_i = function () {
		var t = new eui.Image();
		this.kImgChair1 = t;
		t.anchorOffsetX = 224.24;
		t.anchorOffsetY = 51.52;
		t.source = "";
		t.x = 690.24;
		t.y = 411.52;
		return t;
	};
	_proto.kImgChair2_i = function () {
		var t = new eui.Image();
		this.kImgChair2 = t;
		t.anchorOffsetX = 193.94;
		t.anchorOffsetY = 60.61;
		t.source = "";
		t.x = 681.94;
		t.y = 414.61;
		return t;
	};
	_proto.kImgSetting2_i = function () {
		var t = new eui.Image();
		this.kImgSetting2 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 78;
		t.source = "";
		t.x = 96;
		t.y = 349;
		return t;
	};
	_proto.kImgSetting1_i = function () {
		var t = new eui.Image();
		this.kImgSetting1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 78;
		t.source = "";
		t.x = 1111;
		t.y = 198;
		return t;
	};
	_proto.kImgSetting4_i = function () {
		var t = new eui.Image();
		this.kImgSetting4 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 76;
		t.source = "";
		t.x = 1052;
		t.y = 525;
		return t;
	};
	_proto.kImgSetting3_i = function () {
		var t = new eui.Image();
		this.kImgSetting3 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 80;
		t.source = "";
		t.x = 681;
		t.y = 406;
		return t;
	};
	_proto.kGrpPeople_i = function () {
		var t = new eui.Group();
		this.kGrpPeople = t;
		t.x = -500;
		t.y = 58;
		t.elementsContent = [this.kImgPeople_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetY = 168;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "";
		t.x = 353;
		t.y = 294;
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
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 163;
		t.width = 542;
		t.x = 637.59;
		t.y = 113.94;
		t.elementsContent = [this.kImgRight_i(),this.kImgLine1_i(),this.kImgLine2_i(),this.kGrpChoice1_i(),this.kGrpChoice2_i()];
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 62;
		t.source = "";
		t.verticalCenter = 0.5;
		t.x = 470.5;
		return t;
	};
	_proto.kImgLine1_i = function () {
		var t = new eui.Image();
		this.kImgLine1 = t;
		t.horizontalCenter = -173.5;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgLine2_i = function () {
		var t = new eui.Image();
		this.kImgLine2 = t;
		t.horizontalCenter = 25.5;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice1_i = function () {
		var t = new eui.Group();
		this.kGrpChoice1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.width = 183;
		t.x = 6;
		t.y = 4;
		t.elementsContent = [this.kImgChoice1_i()];
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice2_i = function () {
		var t = new eui.Group();
		this.kGrpChoice2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.width = 183;
		t.x = 205.06;
		t.y = 1;
		t.elementsContent = [this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
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
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.visible = false;
		t.elementsContent = [this._Rect2_i(),this.kImgEnd_i(),this.kBtnContinue_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgEnd_i = function () {
		var t = new eui.Image();
		this.kImgEnd = t;
		t.source = "main_end_png";
		t.x = 161;
		t.y = 70;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.anchorOffsetX = 130.3;
		t.anchorOffsetY = 42.42;
		t.source = "main_continue_png";
		t.x = 929.45;
		t.y = 545.39;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg2","kImgTree1","kImgTree2","kImgTree3","kImgTree4","kImgBg1","kImgPool1","kImgUmbllear1","kImgUmbllear2","kImgCirle1","kImgCirle2","kImgChair1","kImgChair2","kImgSetting2","kImgSetting1","kImgSetting4","kImgSetting3","kGrpBg","kImgPeople","kImgTips","kGrpPeople","kGrpSnow","kGrpAction","kImgSwipe","kImgRight","kImgLine1","kImgLine2","kImgChoice1","kGrpChoice1","kImgChoice2","kGrpChoice2","kGrpMenu","kGrpGuide","kImgEnd","kBtnContinue","kGrpEnd","kGrpMain"];
		
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
		t.anchorOffsetX = 1006.06;
		t.anchorOffsetY = 481.82;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kGrpBg_i(),this.kGrpPeople_i(),this.kGrpSnow_i(),this.kGrpAction_i(),this.kImgSwipe_i(),this.kGrpMenu_i(),this.kGrpGuide_i(),this.kGrpEnd_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg2_i(),this.kImgTree1_i(),this.kImgTree2_i(),this.kImgTree3_i(),this.kImgTree4_i(),this.kImgBg1_i(),this.kImgPool1_i(),this.kImgUmbllear1_i(),this.kImgUmbllear2_i(),this.kImgCirle1_i(),this.kImgCirle2_i(),this.kImgChair1_i(),this.kImgChair2_i(),this.kImgSetting2_i(),this.kImgSetting1_i(),this.kImgSetting4_i(),this.kImgSetting3_i()];
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.source = "main_bg2_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTree1_i = function () {
		var t = new eui.Image();
		this.kImgTree1 = t;
		t.anchorOffsetX = 294;
		t.anchorOffsetY = 226;
		t.source = "main_tree3_png";
		t.x = 990;
		t.y = 230;
		return t;
	};
	_proto.kImgTree2_i = function () {
		var t = new eui.Image();
		this.kImgTree2 = t;
		t.anchorOffsetX = 208;
		t.anchorOffsetY = 306;
		t.source = "main_tree4_png";
		t.x = 1057;
		t.y = 308;
		return t;
	};
	_proto.kImgTree3_i = function () {
		var t = new eui.Image();
		this.kImgTree3 = t;
		t.anchorOffsetX = 150;
		t.anchorOffsetY = 189.39;
		t.source = "main_tree5_png";
		t.top = 34;
		t.x = 152;
		return t;
	};
	_proto.kImgTree4_i = function () {
		var t = new eui.Image();
		this.kImgTree4 = t;
		t.anchorOffsetX = 334.85;
		t.anchorOffsetY = 307.58;
		t.source = "main_tree6_png";
		t.x = 335.01;
		t.y = 311.58;
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.bottom = 0;
		t.source = "main_bg1_png";
		t.x = 0;
		return t;
	};
	_proto.kImgPool1_i = function () {
		var t = new eui.Image();
		this.kImgPool1 = t;
		t.anchorOffsetX = 583;
		t.anchorOffsetY = 125;
		t.source = "main_pool1_png";
		t.x = 697.36;
		t.y = 594.24;
		return t;
	};
	_proto.kImgUmbllear1_i = function () {
		var t = new eui.Image();
		this.kImgUmbllear1 = t;
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 172;
		t.source = "main_umbllera3_png";
		t.x = 132;
		t.y = 368;
		return t;
	};
	_proto.kImgUmbllear2_i = function () {
		var t = new eui.Image();
		this.kImgUmbllear2 = t;
		t.anchorOffsetX = 201.52;
		t.anchorOffsetY = 175.76;
		t.source = "main_umbllera4_png";
		t.x = 301.52;
		t.y = 359.76;
		return t;
	};
	_proto.kImgCirle1_i = function () {
		var t = new eui.Image();
		this.kImgCirle1 = t;
		t.anchorOffsetX = 84;
		t.anchorOffsetY = 80;
		t.source = "main_cirle3_png";
		t.x = 1034;
		t.y = 536;
		return t;
	};
	_proto.kImgCirle2_i = function () {
		var t = new eui.Image();
		this.kImgCirle2 = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 74;
		t.source = "main_cirle4_png";
		t.x = 1020;
		t.y = 536;
		return t;
	};
	_proto.kImgChair1_i = function () {
		var t = new eui.Image();
		this.kImgChair1 = t;
		t.anchorOffsetX = 224.24;
		t.anchorOffsetY = 51.52;
		t.source = "main_chair3_png";
		t.x = 690.24;
		t.y = 411.52;
		return t;
	};
	_proto.kImgChair2_i = function () {
		var t = new eui.Image();
		this.kImgChair2 = t;
		t.anchorOffsetX = 193.94;
		t.anchorOffsetY = 60.61;
		t.source = "main_chair4_png";
		t.x = 681.94;
		t.y = 414.61;
		return t;
	};
	_proto.kImgSetting2_i = function () {
		var t = new eui.Image();
		this.kImgSetting2 = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 78;
		t.source = "mnain_setting_png";
		t.x = 96;
		t.y = 349;
		return t;
	};
	_proto.kImgSetting1_i = function () {
		var t = new eui.Image();
		this.kImgSetting1 = t;
		t.anchorOffsetX = 77;
		t.anchorOffsetY = 78;
		t.source = "mnain_setting_png";
		t.x = 1111;
		t.y = 198;
		return t;
	};
	_proto.kImgSetting4_i = function () {
		var t = new eui.Image();
		this.kImgSetting4 = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 76;
		t.source = "mnain_setting_png";
		t.x = 1052;
		t.y = 525;
		return t;
	};
	_proto.kImgSetting3_i = function () {
		var t = new eui.Image();
		this.kImgSetting3 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 80;
		t.source = "mnain_setting_png";
		t.x = 681;
		t.y = 406;
		return t;
	};
	_proto.kGrpPeople_i = function () {
		var t = new eui.Group();
		this.kGrpPeople = t;
		t.x = -500;
		t.y = 58;
		t.elementsContent = [this.kImgPeople_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.source = "main_people_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetY = 168;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "main_tips_png";
		t.x = 353;
		t.y = 294;
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
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 163;
		t.width = 542;
		t.x = 637.59;
		t.y = 113.94;
		t.elementsContent = [this.kImgRight_i(),this.kImgLine1_i(),this.kImgLine2_i(),this.kGrpChoice1_i(),this.kGrpChoice2_i()];
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 62;
		t.source = "main_right_png";
		t.verticalCenter = 0.5;
		t.x = 470.5;
		return t;
	};
	_proto.kImgLine1_i = function () {
		var t = new eui.Image();
		this.kImgLine1 = t;
		t.horizontalCenter = -173.5;
		t.source = "main_check_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgLine2_i = function () {
		var t = new eui.Image();
		this.kImgLine2 = t;
		t.horizontalCenter = 25.5;
		t.source = "main_check_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice1_i = function () {
		var t = new eui.Group();
		this.kGrpChoice1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.width = 183;
		t.x = 6;
		t.y = 4;
		t.elementsContent = [this.kImgChoice1_i()];
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.horizontalCenter = 0;
		t.source = "main_tree1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpChoice2_i = function () {
		var t = new eui.Group();
		this.kGrpChoice2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 156;
		t.width = 183;
		t.x = 205.06;
		t.y = 1;
		t.elementsContent = [this.kImgChoice2_i()];
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.horizontalCenter = 0;
		t.source = "main_tree1_png";
		t.verticalCenter = 0;
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
	_proto.kGrpEnd_i = function () {
		var t = new eui.Group();
		this.kGrpEnd = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchThrough = true;
		t.visible = false;
		t.elementsContent = [this._Rect2_i(),this.kImgEnd_i(),this.kBtnContinue_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.4;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgEnd_i = function () {
		var t = new eui.Image();
		this.kImgEnd = t;
		t.source = "main_end_png";
		t.x = 161;
		t.y = 70;
		return t;
	};
	_proto.kBtnContinue_i = function () {
		var t = new eui.Image();
		this.kBtnContinue = t;
		t.anchorOffsetX = 130.3;
		t.anchorOffsetY = 42.42;
		t.source = "main_continue_png";
		t.x = 929.45;
		t.y = 545.39;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);