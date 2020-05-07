
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
                generateEUI.skins = {"eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/GameOverDevSkin.exml'] = window.GameOverDevSkin = (function (_super) {
	__extends(GameOverDevSkin, _super);
	function GameOverDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgLeft","kImgRight","kImgBan","kImgBuildA","kImgBuildB"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = GameOverDevSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg_i(),this._Group1_i(),this._Group2_i()];
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 721;
		t.horizontalCenter = 0;
		t.width = 1280;
		t.y = -2;
		t.elementsContent = [this.kImgLeft_i(),this.kImgRight_i()];
		return t;
	};
	_proto.kImgLeft_i = function () {
		var t = new eui.Image();
		this.kImgLeft = t;
		t.anchorOffsetX = 848;
		t.anchorOffsetY = 284;
		t.height = 721;
		t.source = "";
		t.width = 849;
		t.x = 848;
		t.y = 284;
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.anchorOffsetX = 850;
		t.anchorOffsetY = 290;
		t.height = 721;
		t.rotation = 180;
		t.source = "";
		t.width = 849;
		t.x = 430;
		t.y = 431;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 171.5;
		t.y = 0;
		t.elementsContent = [this.kImgBan_i(),this.kImgBuildA_i(),this.kImgBuildB_i()];
		return t;
	};
	_proto.kImgBan_i = function () {
		var t = new eui.Image();
		this.kImgBan = t;
		t.source = "";
		t.x = 8.5;
		t.y = 0;
		return t;
	};
	_proto.kImgBuildA_i = function () {
		var t = new eui.Image();
		this.kImgBuildA = t;
		t.anchorOffsetX = 226;
		t.anchorOffsetY = 178;
		t.source = "";
		t.x = 226;
		t.y = 414;
		return t;
	};
	_proto.kImgBuildB_i = function () {
		var t = new eui.Image();
		this.kImgBuildB = t;
		t.anchorOffsetX = 230;
		t.anchorOffsetY = 176;
		t.source = "";
		t.x = 705;
		t.y = 412;
		return t;
	};
	return GameOverDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/GameOverSkin.exml'] = window.GameOverSkin = (function (_super) {
	__extends(GameOverSkin, _super);
	function GameOverSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgLeft","kImgRight","kImgBan","kImgBuildA","kImgBuildB"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Group3_i()];
	}
	var _proto = GameOverSkin.prototype;

	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgBg_i(),this._Group1_i(),this._Group2_i()];
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
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetY = 0;
		t.height = 721;
		t.horizontalCenter = 0;
		t.width = 1280;
		t.y = -2;
		t.elementsContent = [this.kImgLeft_i(),this.kImgRight_i()];
		return t;
	};
	_proto.kImgLeft_i = function () {
		var t = new eui.Image();
		this.kImgLeft = t;
		t.anchorOffsetX = 848;
		t.anchorOffsetY = 284;
		t.height = 721;
		t.source = "end_float_png";
		t.width = 849;
		t.x = 848;
		t.y = 284;
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.anchorOffsetX = 850;
		t.anchorOffsetY = 290;
		t.height = 721;
		t.rotation = 180;
		t.source = "end_float_png";
		t.width = 849;
		t.x = 430;
		t.y = 431;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.x = 171.5;
		t.y = 0;
		t.elementsContent = [this.kImgBan_i(),this.kImgBuildA_i(),this.kImgBuildB_i()];
		return t;
	};
	_proto.kImgBan_i = function () {
		var t = new eui.Image();
		this.kImgBan = t;
		t.source = "end_small_bg_png";
		t.x = 8.5;
		t.y = 0;
		return t;
	};
	_proto.kImgBuildA_i = function () {
		var t = new eui.Image();
		this.kImgBuildA = t;
		t.anchorOffsetX = 226;
		t.anchorOffsetY = 178;
		t.source = "end_build_left_png";
		t.x = 226;
		t.y = 414;
		return t;
	};
	_proto.kImgBuildB_i = function () {
		var t = new eui.Image();
		this.kImgBuildB = t;
		t.anchorOffsetX = 230;
		t.anchorOffsetY = 176;
		t.source = "end_build_right_png";
		t.x = 705;
		t.y = 412;
		return t;
	};
	return GameOverSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewDevSkin.exml'] = window.MainViewDevSkin = (function (_super) {
	__extends(MainViewDevSkin, _super);
	function MainViewDevSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgDecorate1","kImgDecorate3","kImgMain","kImgDecorate2","kBtn1","kBtn2","kBtn3","kGrpBtn","kGrpAction","kGrpGuide","kImgTipsBg","kImgTips","kGrpTips","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewDevSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xe291e1;
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
		t.elementsContent = [this.kImgBg_i(),this.kImgDecorate1_i(),this.kImgDecorate3_i(),this.kImgMain_i(),this.kImgDecorate2_i(),this.kGrpBtn_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kGrpTips_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kImgDecorate1_i = function () {
		var t = new eui.Image();
		this.kImgDecorate1 = t;
		t.anchorOffsetX = 384;
		t.anchorOffsetY = 210;
		t.source = "";
		t.visible = false;
		t.x = 662;
		t.y = 232;
		return t;
	};
	_proto.kImgDecorate3_i = function () {
		var t = new eui.Image();
		this.kImgDecorate3 = t;
		t.anchorOffsetX = 124;
		t.anchorOffsetY = 100;
		t.source = "";
		t.visible = false;
		t.x = 940;
		t.y = 448;
		return t;
	};
	_proto.kImgMain_i = function () {
		var t = new eui.Image();
		this.kImgMain = t;
		t.anchorOffsetX = 298;
		t.anchorOffsetY = 274;
		t.source = "";
		t.x = 689.5;
		t.y = 313.5;
		return t;
	};
	_proto.kImgDecorate2_i = function () {
		var t = new eui.Image();
		this.kImgDecorate2 = t;
		t.source = "";
		t.visible = false;
		t.x = 404;
		t.y = 272;
		return t;
	};
	_proto.kGrpBtn_i = function () {
		var t = new eui.Group();
		this.kGrpBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 168;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 476;
		t.y = 524;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 36;
		t.horizontalAlign = "contentJustify";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 133;
		t.width = 133;
		t.x = 0;
		t.y = 18;
		t.elementsContent = [this._Image1_i(),this.kBtn1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "main_button_bg";
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtn1_i = function () {
		var t = new eui.Image();
		this.kBtn1 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 133;
		t.width = 133;
		t.x = 169;
		t.y = 18;
		t.elementsContent = [this._Image2_i(),this.kBtn2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "main_button_bg";
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtn2_i = function () {
		var t = new eui.Image();
		this.kBtn2 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 133;
		t.width = 133;
		t.x = 338;
		t.y = 18;
		t.elementsContent = [this._Image3_i(),this.kBtn3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "main_button_bg";
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtn3_i = function () {
		var t = new eui.Image();
		this.kBtn3 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
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
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpTips_i = function () {
		var t = new eui.Group();
		this.kGrpTips = t;
		t.anchorOffsetX = 380;
		t.anchorOffsetY = 42;
		t.height = 89;
		t.horizontalCenter = 0;
		t.width = 758;
		t.y = 100;
		t.elementsContent = [this.kImgTipsBg_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgTipsBg_i = function () {
		var t = new eui.Image();
		this.kImgTipsBg = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg","kImgMain","kImgDecorate1","kImgDecorate2","kImgDecorate3","kBtn1","kBtn2","kBtn3","kGrpBtn","kGrpAction","kGrpGuide","kImgTipsBg","kImgTips","kGrpTips","kGrpMain"];
		
		this.height = 720;
		this.width = 1280;
		this.elementsContent = [this._Rect1_i(),this.kGrpMain_i()];
	}
	var _proto = MainViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillColor = 0xe291e1;
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
		t.elementsContent = [this.kImgBg_i(),this.kImgMain_i(),this.kImgDecorate1_i(),this.kImgDecorate2_i(),this.kImgDecorate3_i(),this.kGrpBtn_i(),this.kGrpAction_i(),this.kGrpGuide_i(),this.kGrpTips_i()];
		return t;
	};
	_proto.kImgBg_i = function () {
		var t = new eui.Image();
		this.kImgBg = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scaleX = 0.3;
		t.scaleY = 0.3;
		t.source = "main_bg_png";
		t.top = 0;
		return t;
	};
	_proto.kImgMain_i = function () {
		var t = new eui.Image();
		this.kImgMain = t;
		t.anchorOffsetX = 298;
		t.anchorOffsetY = 274;
		t.source = "main_a_png";
		t.x = 689.5;
		t.y = 313.5;
		return t;
	};
	_proto.kImgDecorate1_i = function () {
		var t = new eui.Image();
		this.kImgDecorate1 = t;
		t.anchorOffsetX = 384;
		t.anchorOffsetY = 210;
		t.source = "main_decorate1_png";
		t.visible = false;
		t.x = 662;
		t.y = 232;
		return t;
	};
	_proto.kImgDecorate2_i = function () {
		var t = new eui.Image();
		this.kImgDecorate2 = t;
		t.source = "";
		t.visible = false;
		t.x = 404;
		t.y = 272;
		return t;
	};
	_proto.kImgDecorate3_i = function () {
		var t = new eui.Image();
		this.kImgDecorate3 = t;
		t.anchorOffsetX = 124;
		t.anchorOffsetY = 100;
		t.source = "main_decorate3_png";
		t.visible = false;
		t.x = 940;
		t.y = 448;
		return t;
	};
	_proto.kGrpBtn_i = function () {
		var t = new eui.Group();
		this.kGrpBtn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 168;
		t.horizontalCenter = 0;
		t.visible = false;
		t.width = 476;
		t.y = 524;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.gap = 36;
		t.horizontalAlign = "contentJustify";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.height = 133;
		t.width = 133;
		t.x = 0;
		t.y = 18;
		t.elementsContent = [this._Image1_i(),this.kBtn1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "main_button_bg";
		t.source = "main_button_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtn1_i = function () {
		var t = new eui.Image();
		this.kBtn1 = t;
		t.horizontalCenter = 0;
		t.source = "main_btn1_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 133;
		t.width = 133;
		t.x = 169;
		t.y = 18;
		t.elementsContent = [this._Image2_i(),this.kBtn2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "main_button_bg";
		t.source = "main_button_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtn2_i = function () {
		var t = new eui.Image();
		this.kBtn2 = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.source = "main_btn2_png";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 133;
		t.width = 133;
		t.x = 338;
		t.y = 18;
		t.elementsContent = [this._Image3_i(),this.kBtn3_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.name = "main_button_bg";
		t.source = "main_button_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kBtn3_i = function () {
		var t = new eui.Image();
		this.kBtn3 = t;
		t.height = 120;
		t.horizontalCenter = 0;
		t.source = "main_btn3_png";
		t.verticalCenter = 0;
		t.width = 120;
		return t;
	};
	_proto.kGrpAction_i = function () {
		var t = new eui.Group();
		this.kGrpAction = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
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
		t.touchThrough = true;
		return t;
	};
	_proto.kGrpTips_i = function () {
		var t = new eui.Group();
		this.kGrpTips = t;
		t.anchorOffsetX = 380;
		t.anchorOffsetY = 42;
		t.height = 89;
		t.horizontalCenter = 0;
		t.width = 758;
		t.y = 100;
		t.elementsContent = [this.kImgTipsBg_i(),this.kImgTips_i()];
		return t;
	};
	_proto.kImgTipsBg_i = function () {
		var t = new eui.Image();
		this.kImgTipsBg = t;
		t.alpha = 0.7;
		t.horizontalCenter = 0;
		t.source = "main_tips_bg_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgTips_i = function () {
		var t = new eui.Image();
		this.kImgTips = t;
		t.horizontalCenter = 0;
		t.source = "main_tips1_png";
		t.verticalCenter = 0;
		return t;
	};
	return MainViewSkin;
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