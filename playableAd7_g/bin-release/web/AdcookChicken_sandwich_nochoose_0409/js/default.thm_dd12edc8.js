
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
		this.skinParts = ["kImgBg1","kGrpPeople","kImgBg2","kImgPeople","kImgDesk","kGrpBg","kImgAlert","kImgOrder1","kImgOrder2","kGrpMenu","kGrpAction","kGrpGuide","kImgPao","kLbPaoContent","kGrpPao","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpMenu_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kGrpPao_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople_i(),this.kImgBg2_i(),this.kImgPeople_i(),this.kImgDesk_i()];
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
	_proto.kGrpPeople_i = function () {
		var t = new eui.Group();
		this.kGrpPeople = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.source = "";
		t.x = 0;
		t.y = 138;
		return t;
	};
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 296;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.y = 432;
		return t;
	};
	_proto.kImgDesk_i = function () {
		var t = new eui.Image();
		this.kImgDesk = t;
		t.source = "";
		t.x = 0;
		t.y = 571;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 109.74;
		t.height = 224;
		t.scaleX = 0;
		t.scaleY = 0;
		t.width = 108;
		t.x = 342;
		t.y = 173.74;
		t.elementsContent = [this.kImgAlert_i(),this.kImgOrder1_i(),this.kImgOrder2_i()];
		return t;
	};
	_proto.kImgAlert_i = function () {
		var t = new eui.Image();
		this.kImgAlert = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,33,40,45);
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.y = 32;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "";
		t.y = 130;
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
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpPao_i = function () {
		var t = new eui.Group();
		this.kGrpPao = t;
		t.anchorOffsetX = 1.64;
		t.anchorOffsetY = 148.81;
		t.height = 146;
		t.scaleX = 0;
		t.scaleY = 0;
		t.tint = 0xffffff;
		t.width = 172;
		t.x = 754.64;
		t.y = 265.81;
		t.elementsContent = [this.kImgPao_i(),this.kLbPaoContent_i()];
		return t;
	};
	_proto.kImgPao_i = function () {
		var t = new eui.Image();
		this.kImgPao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 178;
		t.horizontalCenter = 0;
		t.source = "";
		t.tint = 0xffffff;
		t.verticalCenter = 0;
		t.width = 204;
		return t;
	};
	_proto.kLbPaoContent_i = function () {
		var t = new eui.Label();
		this.kLbPaoContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.text = "OK";
		t.textAlign = "center";
		t.textColor = 0x0f0404;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return GameMainDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameMainView.exml'] = window.GameMainSkin = (function (_super) {
	__extends(GameMainSkin, _super);
	function GameMainSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kGrpPeople","kImgBg2","kImgPeople","kImgDesk","kGrpBg","kImgAlert","kImgOrder1","kImgOrder2","kGrpMenu","kGrpAction","kGrpGuide","kImgPao","kLbPaoContent","kGrpPao","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kGrpMenu_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kGrpPao_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kGrpPeople_i(),this.kImgBg2_i(),this.kImgPeople_i(),this.kImgDesk_i()];
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
	_proto.kGrpPeople_i = function () {
		var t = new eui.Group();
		this.kGrpPeople = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.source = "main_bg2_png";
		t.x = 0;
		t.y = 138;
		return t;
	};
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 296;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_cook_3_png";
		t.y = 432;
		return t;
	};
	_proto.kImgDesk_i = function () {
		var t = new eui.Image();
		this.kImgDesk = t;
		t.source = "main_small_bg_png";
		t.x = 0;
		t.y = 571;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 109.74;
		t.height = 224;
		t.scaleX = 0;
		t.scaleY = 0;
		t.width = 108;
		t.x = 342;
		t.y = 173.74;
		t.elementsContent = [this.kImgAlert_i(),this.kImgOrder1_i(),this.kImgOrder2_i()];
		return t;
	};
	_proto.kImgAlert_i = function () {
		var t = new eui.Image();
		this.kImgAlert = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(35,33,40,45);
		t.source = "main_alert_bg_png";
		t.top = 0;
		return t;
	};
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "main_order_png";
		t.y = 32;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.horizontalCenter = 0.5;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "main_coke1_png";
		t.y = 130;
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
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpPao_i = function () {
		var t = new eui.Group();
		this.kGrpPao = t;
		t.anchorOffsetX = 1.64;
		t.anchorOffsetY = 148.81;
		t.height = 146;
		t.scaleX = 0;
		t.scaleY = 0;
		t.tint = 0xffffff;
		t.width = 172;
		t.x = 754.64;
		t.y = 265.81;
		t.elementsContent = [this.kImgPao_i(),this.kLbPaoContent_i()];
		return t;
	};
	_proto.kImgPao_i = function () {
		var t = new eui.Image();
		this.kImgPao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 178;
		t.horizontalCenter = 0;
		t.source = "pao_png";
		t.tint = 0xffffff;
		t.verticalCenter = 0;
		t.width = 204;
		return t;
	};
	_proto.kLbPaoContent_i = function () {
		var t = new eui.Label();
		this.kLbPaoContent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.size = 30;
		t.text = "OK";
		t.textAlign = "center";
		t.textColor = 0x0f0404;
		t.top = 0;
		t.verticalAlign = "middle";
		return t;
	};
	return GameMainSkin;
})(eui.Skin);