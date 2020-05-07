
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
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/GameEndDevSkin.exml'] = window.GameEndDevSkin = (function (_super) {
	__extends(GameEndDevSkin, _super);
	function GameEndDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgTips","kImgLogo1","kImgLogo2","kImgTopic","kImgHand","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.kGrpMain_i()];
	}
	var _proto = GameEndDevSkin.prototype;

	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i(),this.kImgTips_i(),this.kImgLogo1_i(),this.kImgLogo2_i(),this.kImgTopic_i(),this.kImgHand_i()];
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
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 24;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 647;
		return t;
	};
	_proto.kImgLogo1_i = function () {
		var t = new eui.Image();
		this.kImgLogo1 = t;
		t.anchorOffsetX = 186;
		t.anchorOffsetY = 188;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "";
		t.x = -211;
		t.y = 332;
		return t;
	};
	_proto.kImgLogo2_i = function () {
		var t = new eui.Image();
		this.kImgLogo2 = t;
		t.anchorOffsetX = 184;
		t.anchorOffsetY = 184;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "";
		t.x = 1503;
		t.y = 340;
		return t;
	};
	_proto.kImgTopic_i = function () {
		var t = new eui.Image();
		this.kImgTopic = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = -171;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.source = "";
		t.visible = false;
		t.x = 380;
		t.y = 360;
		return t;
	};
	return GameEndDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameEndSkin.exml'] = window.GameEndSkin = (function (_super) {
	__extends(GameEndSkin, _super);
	function GameEndSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgTips","kImgLogo1","kImgLogo2","kImgTopic","kImgHand","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this.kGrpMain_i()];
	}
	var _proto = GameEndSkin.prototype;

	_proto.kGrpMain_i = function () {
		var t = new eui.Group();
		this.kGrpMain = t;
		t.height = 720;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		t.width = 1280;
		t.elementsContent = [this.kImgBg_i(),this.kImgTips_i(),this.kImgLogo1_i(),this.kImgLogo2_i(),this.kImgTopic_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.horizontalCenter = 0;
		t.source = "main_bg3_jpg";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetX = 240;
		t.anchorOffsetY = 24;
		t.horizontalCenter = 0;
		t.source = "main_tips_png";
		t.y = 647;
		return t;
	};
	_proto.kImgLogo1_i = function () {
		var t = new eui.Image();
		this.kImgLogo1 = t;
		t.anchorOffsetX = 186;
		t.anchorOffsetY = 188;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "main_logo1_png";
		t.x = -211;
		t.y = 332;
		return t;
	};
	_proto.kImgLogo2_i = function () {
		var t = new eui.Image();
		this.kImgLogo2 = t;
		t.anchorOffsetX = 184;
		t.anchorOffsetY = 184;
		t.scaleX = 1.2;
		t.scaleY = 1.2;
		t.source = "main_logo2_png";
		t.x = 1503;
		t.y = 340;
		return t;
	};
	_proto.kImgTopic_i = function () {
		var t = new eui.Image();
		this.kImgTopic = t;
		t.horizontalCenter = 0;
		t.source = "main_topic_png";
		t.y = -171;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 62;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 380;
		t.y = 360;
		return t;
	};
	return GameEndSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgContent","kGrpSnow","kBtnPlay","kGrpBottom","kImgBg1","kImgPeople","kImgTips","kImgArrow","kImgHand","kGrpSwipe","kGrpTop","kGrpAction","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBottom_i(),this.kGrpTop_i(),this.kGrpAction_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kGrpBottom_i = function () {
		var t = new eui.Group();
		this.kGrpBottom = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgContent_i(),this.kGrpSnow_i(),this.kBtnPlay_i()];
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
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
	_proto.kBtnPlay_i = function () {
		var t = new eui.Image();
		this.kBtnPlay = t;
		t.anchorOffsetX = 154;
		t.anchorOffsetY = 50;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "";
		t.x = 640;
		t.y = 579;
		return t;
	};
	_proto.kGrpTop_i = function () {
		var t = new eui.Group();
		this.kGrpTop = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kImgPeople_i(),this.kImgTips_i(),this.kGrpSwipe_i()];
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
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.source = "";
		t.x = 286;
		t.y = 70;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetX = 252;
		t.anchorOffsetY = 22;
		t.horizontalCenter = 0;
		t.source = "";
		t.y = 670;
		return t;
	};
	_proto.kGrpSwipe_i = function () {
		var t = new eui.Group();
		this.kGrpSwipe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.width = 148;
		t.x = 618;
		t.y = 559;
		t.elementsContent = [this.kImgArrow_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgArrow_i = function () {
		var t = new eui.Image();
		this.kImgArrow = t;
		t.source = "";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 66;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "";
		t.x = 110.2;
		t.y = 48.8;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgContent","kGrpSnow","kBtnPlay","kGrpBottom","kImgBg1","kImgPeople","kImgTips","kImgArrow","kImgHand","kGrpSwipe","kGrpTop","kGrpAction","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBottom_i(),this.kGrpTop_i(),this.kGrpAction_i(),this.kGrpGuide_i()];
		return t;
	};
	_proto.kGrpBottom_i = function () {
		var t = new eui.Group();
		this.kGrpBottom = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgContent_i(),this.kGrpSnow_i(),this.kBtnPlay_i()];
		return t;
	};
	_proto.kImgContent_i = function () {
		var t = new eui.Image();
		this.kImgContent = t;
		t.source = "main_bg2_jpg";
		t.x = 0;
		t.y = 0;
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
	_proto.kBtnPlay_i = function () {
		var t = new eui.Image();
		this.kBtnPlay = t;
		t.anchorOffsetX = 154;
		t.anchorOffsetY = 50;
		t.scaleX = 0;
		t.scaleY = 0;
		t.source = "play_free_png";
		t.x = 640;
		t.y = 579;
		return t;
	};
	_proto.kGrpTop_i = function () {
		var t = new eui.Group();
		this.kGrpTop = t;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.kImgBg1_i(),this.kImgPeople_i(),this.kImgTips_i(),this.kGrpSwipe_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.source = "main_bg1_jpg";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgPeople_i = function () {
		var t = new eui.Image();
		this.kImgPeople = t;
		t.source = "main_logo_png";
		t.x = 286;
		t.y = 70;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.anchorOffsetX = 252;
		t.anchorOffsetY = 22;
		t.horizontalCenter = 0;
		t.source = "main_swiper_png";
		t.y = 670;
		return t;
	};
	_proto.kGrpSwipe_i = function () {
		var t = new eui.Group();
		this.kGrpSwipe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.width = 148;
		t.x = 618;
		t.y = 559;
		t.elementsContent = [this.kImgArrow_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgArrow_i = function () {
		var t = new eui.Image();
		this.kImgArrow = t;
		t.source = "main_arrow_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 66;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "main_guide_arrow_png";
		t.x = 110.2;
		t.y = 48.8;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	_proto.kGrpGuide_i = function () {
		var t = new eui.Group();
		this.kGrpGuide = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
		return t;
	};
	return MainViewSkin;
})(eui.Skin);