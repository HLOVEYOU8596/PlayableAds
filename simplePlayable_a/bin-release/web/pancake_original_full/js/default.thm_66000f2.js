
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
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/GameMainDevView.exml'] = window.GameMainDevSkin = (function (_super) {
	__extends(GameMainDevSkin, _super);
	function GameMainDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgMenu2","kImgOrder2","kImgCoin2","kGrpMenu2","kGrpPeople2","kImgMenu1","kImgOrder1","kImgCoin1","kGrpMenu1","kGrpPeople1","kImgCoke","kImgDrumstick","kImgShu","kImgFan","kGrpFood","kGrpAction","kImgTopic","kLbTopic","kImgEndBg","kImgFood4","kImgFood2","kImgFood1","kImgFood3","kImgTips","kImgContent","kImgHand","kGrpClose","kGrpEnd","kImgXu","kLbTips","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kImgBg_i(),this.kGrpPeople2_i(),this.kGrpPeople1_i(),this.kImgCoke_i(),this.kGrpFood_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kImgXu_i(),this.kLbTips_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetY = 0;
		t.height = 252;
		t.scrollEnabled = true;
		t.width = 350;
		t.x = -250;
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
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder2_i(),this.kImgCoin2_i()];
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
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "";
		t.verticalCenter = -20;
		return t;
	};
	_proto.kImgCoin2_i = function () {
		var t = new eui.Image();
		this.kImgCoin2 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 49;
		t.visible = false;
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
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgCoin1_i()];
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
		t.verticalCenter = -30;
		return t;
	};
	_proto.kImgCoin1_i = function () {
		var t = new eui.Image();
		this.kImgCoin1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 51;
		t.visible = false;
		return t;
	};
	_proto.kImgCoke_i = function () {
		var t = new eui.Image();
		this.kImgCoke = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 48;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "";
		t.x = 918.96;
		t.y = 691.64;
		return t;
	};
	_proto.kGrpFood_i = function () {
		var t = new eui.Group();
		this.kGrpFood = t;
		t.anchorOffsetX = 87.45;
		t.anchorOffsetY = 79.51;
		t.height = 150.33;
		t.visible = false;
		t.width = 169;
		t.x = 301.45;
		t.y = 649.51;
		t.elementsContent = [this.kImgDrumstick_i(),this.kImgShu_i(),this.kImgFan_i()];
		return t;
	};
	_proto.kImgDrumstick_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick = t;
		t.height = 117;
		t.source = "";
		t.width = 121;
		t.x = 48;
		t.y = 0;
		return t;
	};
	_proto.kImgShu_i = function () {
		var t = new eui.Image();
		this.kImgShu = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 48;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "";
		t.x = 68;
		t.y = 99.33000000000001;
		return t;
	};
	_proto.kImgFan_i = function () {
		var t = new eui.Image();
		this.kImgFan = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 32;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "";
		t.x = 139;
		t.y = 125.33000000000001;
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
		t.x = 1281.5;
		t.y = 325.15;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.source = "";
		t.x = -295;
		t.y = 290;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.source = "";
		t.x = 1279.79;
		t.y = 412.15;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.source = "";
		t.x = -260.8;
		t.y = 403.15;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 736;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.anchorOffsetX = 359.09;
		t.anchorOffsetY = 87.88;
		t.source = "";
		t.x = 639.09;
		t.y = 277.88;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "";
		t.visible = false;
		t.x = 640;
		t.y = 570;
		return t;
	};
	_proto.kImgXu_i = function () {
		var t = new eui.Image();
		this.kImgXu = t;
		t.source = "";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 203;
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
		t.x = 112.33;
		t.y = 365.41;
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
		this.skinParts = ["kImgBg","kImgMenu2","kImgOrder2","kImgCoin2","kGrpMenu2","kGrpPeople2","kImgMenu1","kImgOrder1","kImgCoin1","kGrpMenu1","kGrpPeople1","kImgCoke","kImgDrumstick","kImgShu","kImgFan","kGrpFood","kGrpAction","kImgTopic","kLbTopic","kImgEndBg","kImgFood4","kImgFood2","kImgFood1","kImgFood3","kImgTips","kImgContent","kImgHand","kGrpClose","kGrpEnd","kImgXu","kLbTips","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kImgBg_i(),this.kGrpPeople2_i(),this.kGrpPeople1_i(),this.kImgCoke_i(),this.kGrpFood_i(),this.kGrpAction_i(),this.kGrpEnd_i(),this.kImgXu_i(),this.kLbTips_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.horizontalCenter = 0;
		t.source = "main_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.anchorOffsetY = 0;
		t.height = 252;
		t.scrollEnabled = true;
		t.width = 350;
		t.x = -250;
		t.y = 55.6;
		t.elementsContent = [this.kGrpMenu2_i()];
		return t;
	};
	_proto.kGrpMenu2_i = function () {
		var t = new eui.Group();
		this.kGrpMenu2 = t;
		t.anchorOffsetX = 0.48;
		t.anchorOffsetY = 84.3;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 228.48;
		t.y = 124.3;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder2_i(),this.kImgCoin2_i()];
		return t;
	};
	_proto.kImgMenu2_i = function () {
		var t = new eui.Image();
		this.kImgMenu2 = t;
		t.source = "main_alert_bg_png";
		t.x = 0;
		t.y = 21.28;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.horizontalCenter = 7;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "main_coke3_png";
		t.verticalCenter = -20.5;
		return t;
	};
	_proto.kImgCoin2_i = function () {
		var t = new eui.Image();
		this.kImgCoin2 = t;
		t.horizontalCenter = 6;
		t.source = "main_icon_coin_png";
		t.verticalCenter = 47;
		t.visible = false;
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
		t.anchorOffsetX = 89.33;
		t.anchorOffsetY = 103.52;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 90.68;
		t.y = 145.52;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder1_i(),this.kImgCoin1_i()];
		return t;
	};
	_proto.kImgMenu1_i = function () {
		var t = new eui.Image();
		this.kImgMenu1 = t;
		t.scaleX = -1;
		t.source = "main_alert_bg_png";
		t.x = 95.5;
		t.y = 28.82;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = -57.5;
		t.source = "main_order_png";
		t.verticalCenter = -19;
		return t;
	};
	_proto.kImgCoin1_i = function () {
		var t = new eui.Image();
		this.kImgCoin1 = t;
		t.horizontalCenter = -57.5;
		t.source = "main_icon_coin_png";
		t.verticalCenter = 51;
		t.visible = false;
		return t;
	};
	_proto.kImgCoke_i = function () {
		var t = new eui.Image();
		this.kImgCoke = t;
		t.anchorOffsetX = 66.36;
		t.anchorOffsetY = 66.18;
		t.scaleX = 0.4;
		t.scaleY = 0.4;
		t.source = "main_coke3_png";
		t.x = 842.97;
		t.y = 408.67;
		return t;
	};
	_proto.kGrpFood_i = function () {
		var t = new eui.Group();
		this.kGrpFood = t;
		t.anchorOffsetX = 102.35;
		t.anchorOffsetY = 90.73;
		t.height = 171.54;
		t.visible = false;
		t.width = 197.79;
		t.x = 298.17;
		t.y = 639.52;
		t.elementsContent = [this.kImgDrumstick_i(),this.kImgShu_i(),this.kImgFan_i()];
		return t;
	};
	_proto.kImgDrumstick_i = function () {
		var t = new eui.Image();
		this.kImgDrumstick = t;
		t.height = 117;
		t.source = "main_drumstick0_png";
		t.width = 121;
		t.x = 40.43;
		t.y = 42.48;
		return t;
	};
	_proto.kImgShu_i = function () {
		var t = new eui.Image();
		this.kImgShu = t;
		t.anchorOffsetX = 90.73;
		t.anchorOffsetY = 70.73;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "main_food_fu_png";
		t.x = 99.82;
		t.y = 82.58;
		return t;
	};
	_proto.kImgFan_i = function () {
		var t = new eui.Image();
		this.kImgFan = t;
		t.anchorOffsetX = 38.61;
		t.anchorOffsetY = 35.03;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "main_coke_png";
		t.x = 95.05;
		t.y = 25.33;
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
		t.x = 1281.5;
		t.y = 325.15;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.source = "end_food2_png";
		t.x = -295;
		t.y = 290;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.source = "end_fodo1_png";
		t.x = 1279.79;
		t.y = 412.15;
		return t;
	};
	_proto.kImgFood3_i = function () {
		var t = new eui.Image();
		this.kImgFood3 = t;
		t.source = "end_food3_png";
		t.x = -260.8;
		t.y = 403.15;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.source = "end_tips_png";
		t.y = 736;
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.anchorOffsetX = 359.09;
		t.anchorOffsetY = 87.88;
		t.source = "end_topic_png";
		t.x = 639.09;
		t.y = 277.88;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 640;
		t.y = 570;
		return t;
	};
	_proto.kImgXu_i = function () {
		var t = new eui.Image();
		this.kImgXu = t;
		t.source = "main_xuxian_png";
		t.touchEnabled = false;
		t.visible = false;
		t.x = 203;
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
		t.x = 112.33;
		t.y = 365.41;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["bg","thumb","labelDisplay","logo"];
		
		this.height = 51;
		this.minHeight = 18;
		this.minWidth = 30;
		this.width = 439;
		this.elementsContent = [this.bg_i(),this.thumb_i(),this.labelDisplay_i(),this.logo_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto.bg_i = function () {
		var t = new eui.Image();
		this.bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.scale9Grid = new egret.Rectangle(13,9,21,1);
		t.source = "";
		t.verticalCenter = 0;
		t.width = 401;
		t.x = 21;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.anchorOffsetX = 1;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 8;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = -4;
		t.visible = false;
		return t;
	};
	_proto.logo_i = function () {
		var t = new eui.Image();
		this.logo = t;
		t.source = "";
		t.x = -7.5;
		t.y = -5;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);