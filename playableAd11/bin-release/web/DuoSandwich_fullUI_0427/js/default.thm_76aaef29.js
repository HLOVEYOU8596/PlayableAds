
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/GameMainDevView.exml'] = window.GameMainDevSkin = (function (_super) {
	__extends(GameMainDevSkin, _super);
	function GameMainDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgMenu2","kImgOrder2","kImgOrder3","kGrpMenu2","kGrpPeople2","kImgMenu1","kImgOrder1","kGrpMenu1","kGrpPeople1","kImgBg2","kImgCoke1","kImgCoke2","kImgCoke3","kImgB1","kImgB2","kImgB3","kImgA1","kImgA2","kImgA3","kImgA4","kGrpFood","kGrpAction","kImgTopic","kLbTopic","kImgEndBg","kBtnNext","kBtnVideo","kImgHand","kGrpClose","kGrpEnd","kImgXu","kLbTips","kGrpGuide","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.kGrpMain_i()];
	}
	var _proto = GameMainDevSkin.prototype;

	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople2_i(),this.kGrpPeople1_i(),this.kImgBg2_i(),this.kGrpFood_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kImgXu_i(),this.kLbTips_i(),this.kGrpGuide_i()];
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
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetY = 0;
		t.height = 252;
		t.scrollEnabled = true;
		t.width = 350;
		t.x = -300;
		t.y = 48;
		t.elementsContent = [this.kGrpMenu2_i()];
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 104;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 230;
		t.y = 144;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder2_i(),this.kImgOrder3_i()];
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
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 11;
		return t;
	};
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.y = 152;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 254;
		t.scrollEnabled = true;
		t.width = 300;
		t.x = 1280;
		t.y = 48;
		t.elementsContent = [this.kGrpMenu1_i()];
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 102;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 106;
		t.y = 144;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i()];
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
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 2.5;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		t.x = 10;
		return t;
	};
	_proto.kGrpFood_i = function () {
		var t = new eui.Group();
		this.kGrpFood = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgCoke1_i(),this.kImgCoke2_i(),this.kImgCoke3_i(),this.kImgB1_i(),this.kImgB2_i(),this.kImgB3_i(),this.kImgA1_i(),this.kImgA2_i(),this.kImgA3_i(),this.kImgA4_i()];
		return t;
	};
	_proto.kImgCoke1_i = function () {
		var t = new eui.Image();
		this.kImgCoke1 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_coke0_png";
		t.x = 929.38;
		t.y = 388.01;
		return t;
	};
	_proto.kImgCoke2_i = function () {
		var t = new eui.Image();
		this.kImgCoke2 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_coke0_png";
		t.x = 972.72;
		t.y = 440.43;
		return t;
	};
	_proto.kImgCoke3_i = function () {
		var t = new eui.Image();
		this.kImgCoke3 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_coke0_png";
		t.x = 1016.05;
		t.y = 492.85;
		return t;
	};
	_proto.kImgB1_i = function () {
		var t = new eui.Image();
		this.kImgB1 = t;
		t.source = "main_cake0__png";
		t.x = 899.24;
		t.y = 356.32;
		return t;
	};
	_proto.kImgB2_i = function () {
		var t = new eui.Image();
		this.kImgB2 = t;
		t.source = "main_cake0__png";
		t.x = 942.57;
		t.y = 407.74;
		return t;
	};
	_proto.kImgB3_i = function () {
		var t = new eui.Image();
		this.kImgB3 = t;
		t.source = "main_cake0__png";
		t.x = 989.96;
		t.y = 466.23;
		return t;
	};
	_proto.kImgA1_i = function () {
		var t = new eui.Image();
		this.kImgA1 = t;
		t.anchorOffsetX = 36.36;
		t.anchorOffsetY = 30.3;
		t.source = "";
		t.x = 416.42;
		t.y = 487.97;
		return t;
	};
	_proto.kImgA2_i = function () {
		var t = new eui.Image();
		this.kImgA2 = t;
		t.anchorOffsetX = 39.39;
		t.anchorOffsetY = 27.27;
		t.source = "";
		t.x = 269.36;
		t.y = 474.88;
		return t;
	};
	_proto.kImgA3_i = function () {
		var t = new eui.Image();
		this.kImgA3 = t;
		t.anchorOffsetX = 39.39;
		t.anchorOffsetY = 30.3;
		t.source = "";
		t.x = 314.42;
		t.y = 378.94;
		return t;
	};
	_proto.kImgA4_i = function () {
		var t = new eui.Image();
		this.kImgA4 = t;
		t.anchorOffsetX = 42.42;
		t.anchorOffsetY = 30.3;
		t.source = "";
		t.x = 455.42;
		t.y = 381.21;
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
		t.verticalCenter = -131;
		return t;
	};
	_proto.kLbTopic_i = function () {
		var t = new eui.Label();
		this.kLbTopic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 96.66;
		t.size = 65;
		t.text = "Delicious";
		t.textAlign = "center";
		t.textColor = 0x9b6937;
		t.verticalAlign = "middle";
		t.width = 367.94;
		t.x = 457.29;
		t.y = 168;
		return t;
	};
	_proto.kGrpClose_i = function () {
		var t = new eui.Group();
		this.kGrpClose = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this.kImgEndBg_i(),this.kBtnNext_i(),this.kBtnVideo_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgEndBg_i = function () {
		var t = new eui.Image();
		this.kImgEndBg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtnNext_i = function () {
		var t = new eui.Image();
		this.kBtnNext = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 42;
		t.source = "";
		t.x = 527;
		t.y = 610;
		return t;
	};
	_proto.kBtnVideo_i = function () {
		var t = new eui.Image();
		this.kBtnVideo = t;
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 34;
		t.source = "";
		t.x = 745.26;
		t.y = 602;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.visible = false;
		t.x = 527;
		t.y = 565;
		return t;
	};
	_proto.kImgXu_i = function () {
		var t = new eui.Image();
		this.kImgXu = t;
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 315;
		t.y = 550;
		return t;
	};
	_proto.kLbTips_i = function () {
		var t = new eui.Label();
		this.kLbTips = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 73;
		t.stroke = 3;
		t.text = "Tap to start cooking";
		t.textAlign = "center";
		t.visible = false;
		t.width = 430.88;
		t.wordWrap = true;
		t.x = 212;
		t.y = 365;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainView.exml'] = window.GameMainSkin = (function (_super) {
	__extends(GameMainSkin, _super);
	function GameMainSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgMenu2","kImgOrder2","kImgOrder3","kGrpMenu2","kGrpPeople2","kImgMenu1","kImgOrder1","kGrpMenu1","kGrpPeople1","kImgBg2","kImgCoke1","kImgCoke2","kImgCoke3","kImgB1","kImgB2","kImgB3","kImgA1","kImgA2","kImgA3","kImgA4","kGrpFood","kGrpAction","kImgTopic","kLbTopic","kImgEndBg","kBtnNext","kBtnVideo","kImgHand","kGrpClose","kGrpEnd","kImgXu","kLbTips","kGrpGuide","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.kGrpMain_i()];
	}
	var _proto = GameMainSkin.prototype;

	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople2_i(),this.kGrpPeople1_i(),this.kImgBg2_i(),this.kGrpFood_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kImgXu_i(),this.kLbTips_i(),this.kGrpGuide_i()];
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
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetY = 0;
		t.height = 252;
		t.scrollEnabled = true;
		t.width = 350;
		t.x = -300;
		t.y = 48;
		t.elementsContent = [this.kGrpMenu2_i()];
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 2;
		t.anchorOffsetY = 104;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 230;
		t.y = 144;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder2_i(),this.kImgOrder3_i()];
		return t;
	};
	_proto.kImgMenu2_i = function () {
		var t = new eui.Image();
		this.kImgMenu2 = t;
		t.source = "main_alert_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0;
		t.source = "main_order2_png";
		t.y = 11;
		return t;
	};
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 38;
		t.horizontalCenter = 0.5;
		t.source = "main_order3_png";
		t.y = 152;
		return t;
	};
	_proto.kGrpPeople1_i = function () {
		var t = new eui.Group();
		this.kGrpPeople1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 254;
		t.scrollEnabled = true;
		t.width = 300;
		t.x = 1280;
		t.y = 48;
		t.elementsContent = [this.kGrpMenu1_i()];
		return t;
	};
	_proto.kGrpMenu1_i = function () {
		var t = new eui.Group();
		this.kGrpMenu1 = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 102;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 106;
		t.y = 144;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.source = "main_alert_bg_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = 0;
		t.source = "main_order2_png";
		t.verticalCenter = 2.5;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "main_bg2_png";
		t.x = 10;
		return t;
	};
	_proto.kGrpFood_i = function () {
		var t = new eui.Group();
		this.kGrpFood = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgCoke1_i(),this.kImgCoke2_i(),this.kImgCoke3_i(),this.kImgB1_i(),this.kImgB2_i(),this.kImgB3_i(),this.kImgA1_i(),this.kImgA2_i(),this.kImgA3_i(),this.kImgA4_i()];
		return t;
	};
	_proto.kImgCoke1_i = function () {
		var t = new eui.Image();
		this.kImgCoke1 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_coke0_png";
		t.x = 935;
		t.y = 387;
		return t;
	};
	_proto.kImgCoke2_i = function () {
		var t = new eui.Image();
		this.kImgCoke2 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_coke0_png";
		t.x = 975.75;
		t.y = 440.43;
		return t;
	};
	_proto.kImgCoke3_i = function () {
		var t = new eui.Image();
		this.kImgCoke3 = t;
		t.anchorOffsetX = 44;
		t.anchorOffsetY = 56;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_coke0_png";
		t.x = 1022.11;
		t.y = 492.85;
		return t;
	};
	_proto.kImgB1_i = function () {
		var t = new eui.Image();
		this.kImgB1 = t;
		t.source = "main_cake0__png";
		t.x = 904.56;
		t.y = 357.65;
		return t;
	};
	_proto.kImgB2_i = function () {
		var t = new eui.Image();
		this.kImgB2 = t;
		t.source = "main_cake0__png";
		t.x = 945.23;
		t.y = 411.73;
		return t;
	};
	_proto.kImgB3_i = function () {
		var t = new eui.Image();
		this.kImgB3 = t;
		t.source = "main_cake0__png";
		t.x = 992.62;
		t.y = 463.57;
		return t;
	};
	_proto.kImgA1_i = function () {
		var t = new eui.Image();
		this.kImgA1 = t;
		t.anchorOffsetX = 36.36;
		t.anchorOffsetY = 30.3;
		t.source = "main_drumstick_0_png";
		t.x = 416.42;
		t.y = 487.97;
		return t;
	};
	_proto.kImgA2_i = function () {
		var t = new eui.Image();
		this.kImgA2 = t;
		t.anchorOffsetX = 39.39;
		t.anchorOffsetY = 27.27;
		t.source = "main_drumstick_0_png";
		t.x = 269.36;
		t.y = 474.88;
		return t;
	};
	_proto.kImgA3_i = function () {
		var t = new eui.Image();
		this.kImgA3 = t;
		t.anchorOffsetX = 39.39;
		t.anchorOffsetY = 30.3;
		t.source = "main_drumstick_0_png";
		t.x = 314.42;
		t.y = 378.94;
		return t;
	};
	_proto.kImgA4_i = function () {
		var t = new eui.Image();
		this.kImgA4 = t;
		t.anchorOffsetX = 42.42;
		t.anchorOffsetY = 30.3;
		t.source = "main_drumstick_0_png";
		t.x = 455.42;
		t.y = 381.21;
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
		t.verticalCenter = -131;
		return t;
	};
	_proto.kLbTopic_i = function () {
		var t = new eui.Label();
		this.kLbTopic = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 96.66;
		t.size = 65;
		t.text = "Delicious";
		t.textAlign = "center";
		t.textColor = 0x9b6937;
		t.verticalAlign = "middle";
		t.width = 367.94;
		t.x = 457.29;
		t.y = 168;
		return t;
	};
	_proto.kGrpClose_i = function () {
		var t = new eui.Group();
		this.kGrpClose = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.visible = false;
		t.width = 1280;
		t.elementsContent = [this.kImgEndBg_i(),this.kBtnNext_i(),this.kBtnVideo_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgEndBg_i = function () {
		var t = new eui.Image();
		this.kImgEndBg = t;
		t.horizontalCenter = 0;
		t.source = "main_end_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtnNext_i = function () {
		var t = new eui.Image();
		this.kBtnNext = t;
		t.anchorOffsetX = 110;
		t.anchorOffsetY = 42;
		t.source = "main_btn_next_png";
		t.x = 527;
		t.y = 610;
		return t;
	};
	_proto.kBtnVideo_i = function () {
		var t = new eui.Image();
		this.kBtnVideo = t;
		t.anchorOffsetX = 104;
		t.anchorOffsetY = 34;
		t.source = "main_btn_video_png";
		t.x = 745.26;
		t.y = 602;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 527;
		t.y = 565;
		return t;
	};
	_proto.kImgXu_i = function () {
		var t = new eui.Image();
		this.kImgXu = t;
		t.source = "main_xuxian_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 315;
		t.y = 550;
		return t;
	};
	_proto.kLbTips_i = function () {
		var t = new eui.Label();
		this.kLbTips = t;
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 73;
		t.stroke = 3;
		t.text = "Tap to start cooking";
		t.textAlign = "center";
		t.visible = false;
		t.width = 430.88;
		t.wordWrap = true;
		t.x = 212;
		t.y = 365;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/San.exml'] = window.SanSkin = (function (_super) {
	__extends(SanSkin, _super);
	function SanSkin() {
		_super.call(this);
		this.skinParts = ["kImgFood1","kImgFood2","kImgFood3","kImgFood4","kImgFood5","kGrpDiv"];
		
		this.currentState = "state1";
		this.height = 170;
		this.width = 170;
		this.elementsContent = [this.kGrpDiv_i()];
		this.states = [
			new eui.State ("state1",
				[
					new eui.SetProperty("kImgFood2","visible",false),
					new eui.SetProperty("kImgFood3","visible",false),
					new eui.SetProperty("kImgFood4","visible",false),
					new eui.SetProperty("kImgFood5","visible",false)
				])
		];
	}
	var _proto = SanSkin.prototype;

	_proto.kGrpDiv_i = function () {
		var t = new eui.Group();
		this.kGrpDiv = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgFood1_i(),this.kImgFood2_i(),this.kImgFood3_i(),this.kImgFood4_i(),this.kImgFood5_i()];
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.anchorOffsetX = 73;
		t.anchorOffsetY = 45;
		t.bottom = 0;
		t.horizontalCenter = 0;
		t.source = "";
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 70;
		t.anchorOffsetY = 49;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 109;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 45;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 90;
		return t;
	};
	_proto.kImgFood4_i = function () {
		var t = new eui.Image();
		this.kImgFood4 = t;
		t.anchorOffsetX = 75;
		t.anchorOffsetY = 43;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 74;
		return t;
	};
	_proto.kImgFood5_i = function () {
		var t = new eui.Image();
		this.kImgFood5 = t;
		t.anchorOffsetX = 76;
		t.anchorOffsetY = 50;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 50;
		return t;
	};
	return SanSkin;
})(eui.Skin);