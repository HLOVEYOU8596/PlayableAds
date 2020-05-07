
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
                generateEUI.skins = {};generateEUI.paths['resource/eui_skins/MainView.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["rect","kImgBg1","kGrpBg","kImgWoman","kImgMan","main_drumstick_1","kImgBg2","kGrpProgress","kGrpAction","kGrpSnow","kImgAlert0","kImgRight0","kImgCoin0","kGrpAlert0","kImgAlert","kImgRight","kImgCoin","kGrpAlert","kGrpCoin","kRect","kGrpRect","kImgFood1","kImgFu","kImgXu","kImgFood2","main_reward_bg","kLbEnd","kImgBg3","kImgLogo1","kImgLogo2","kGrpBg3","kGrpEnd","kImgArrow","kGrpGuide","kImgPlayNow"];
		
		this.height = 320;
		this.width = 480;
		this.elementsContent = [this._Rect1_i(),this.rect_i(),this._Group3_i()];
	}
	var _proto = MainViewSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.rect_i = function () {
		var t = new eui.Image();
		this.rect = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 640;
		t.horizontalCenter = 0;
		t.scaleX = 0.422;
		t.scaleY = 0.5;
		t.scrollEnabled = true;
		t.verticalCenter = 0;
		t.width = 1136;
		t.elementsContent = [this.kGrpBg_i(),this._Group1_i(),this.kImgBg2_i(),this.kGrpProgress_i(),this.kGrpAction_i(),this.kGrpSnow_i(),this.kGrpAlert0_i(),this.kGrpAlert_i(),this.kGrpCoin_i(),this.kGrpRect_i(),this.kImgFood1_i(),this.kImgFu_i(),this.kImgXu_i(),this.kImgFood2_i(),this.kGrpEnd_i(),this.kImgArrow_i(),this.kGrpGuide_i(),this.kImgPlayNow_i()];
		return t;
	};
	_proto.kGrpBg_i = function () {
		var t = new eui.Group();
		this.kGrpBg = t;
		t.height = 640;
		t.left = 0;
		t.right = 0;
		t.elementsContent = [this.kImgBg1_i()];
		return t;
	};
	_proto.kImgBg1_i = function () {
		var t = new eui.Image();
		this.kImgBg1 = t;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgWoman_i(),this.kImgMan_i(),this.main_drumstick_1_i()];
		return t;
	};
	_proto.kImgWoman_i = function () {
		var t = new eui.Image();
		this.kImgWoman = t;
		t.anchorOffsetX = 95.45;
		t.anchorOffsetY = 137.88;
		t.source = "";
		t.x = -140;
		t.y = 200;
		return t;
	};
	_proto.kImgMan_i = function () {
		var t = new eui.Image();
		this.kImgMan = t;
		t.anchorOffsetX = 119.7;
		t.anchorOffsetY = 146.97;
		t.source = "";
		t.x = 1210;
		t.y = 200;
		return t;
	};
	_proto.main_drumstick_1_i = function () {
		var t = new eui.Image();
		this.main_drumstick_1 = t;
		t.source = "";
		t.x = 403;
		t.y = 305;
		return t;
	};
	_proto.kImgBg2_i = function () {
		var t = new eui.Image();
		this.kImgBg2 = t;
		t.bottom = 0;
		t.source = "";
		return t;
	};
	_proto.kGrpProgress_i = function () {
		var t = new eui.Group();
		this.kGrpProgress = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.touchEnabled = false;
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
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpAlert0_i = function () {
		var t = new eui.Group();
		this.kGrpAlert0 = t;
		t.visible = false;
		t.x = 367.27;
		t.y = 60.84;
		t.elementsContent = [this.kImgAlert0_i(),this.kImgRight0_i(),this.kImgCoin0_i()];
		return t;
	};
	_proto.kImgAlert0_i = function () {
		var t = new eui.Image();
		this.kImgAlert0 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.rotation = -180;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto.kImgRight0_i = function () {
		var t = new eui.Image();
		this.kImgRight0 = t;
		t.anchorOffsetX = 25.89;
		t.anchorOffsetY = 28.96;
		t.fillMode = "scale";
		t.horizontalCenter = 1;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "";
		t.verticalCenter = -20.5;
		return t;
	};
	_proto.kImgCoin0_i = function () {
		var t = new eui.Image();
		this.kImgCoin0 = t;
		t.source = "";
		t.visible = false;
		t.x = 38.59;
		t.y = 138;
		return t;
	};
	_proto.kGrpAlert_i = function () {
		var t = new eui.Group();
		this.kGrpAlert = t;
		t.visible = false;
		t.x = 642;
		t.y = 73;
		t.elementsContent = [this.kImgAlert_i(),this.kImgRight_i(),this.kImgCoin_i()];
		return t;
	};
	_proto.kImgAlert_i = function () {
		var t = new eui.Image();
		this.kImgAlert = t;
		t.horizontalCenter = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kImgRight_i = function () {
		var t = new eui.Image();
		this.kImgRight = t;
		t.anchorOffsetX = 68.18;
		t.anchorOffsetY = 115.15;
		t.source = "";
		t.x = 62.18;
		t.y = 120.15;
		return t;
	};
	_proto.kImgCoin_i = function () {
		var t = new eui.Image();
		this.kImgCoin = t;
		t.source = "";
		t.visible = false;
		t.x = 27.59;
		t.y = 138;
		return t;
	};
	_proto.kGrpCoin_i = function () {
		var t = new eui.Group();
		this.kGrpCoin = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.kGrpRect_i = function () {
		var t = new eui.Group();
		this.kGrpRect = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.kRect_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto.kRect_i = function () {
		var t = new eui.Rect();
		this.kRect = t;
		t.bottom = 0;
		t.fillAlpha = 0.8;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 90;
		t.stroke = 6;
		t.text = "Tap to start";
		t.width = 597.06;
		t.x = 79.5;
		t.y = 231.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.bold = true;
		t.size = 90;
		t.stroke = 6;
		t.text = "Cooking";
		t.width = 365.3;
		t.x = 135.5;
		t.y = 325;
		return t;
	};
	_proto.kImgFood1_i = function () {
		var t = new eui.Image();
		this.kImgFood1 = t;
		t.source = "";
		t.visible = false;
		t.x = 155;
		t.y = 475.5;
		return t;
	};
	_proto.kImgFu_i = function () {
		var t = new eui.Image();
		this.kImgFu = t;
		t.anchorOffsetX = 43.94;
		t.anchorOffsetY = 43.94;
		t.source = "";
		t.visible = false;
		t.x = 477.77;
		t.y = 419.99;
		return t;
	};
	_proto.kImgXu_i = function () {
		var t = new eui.Image();
		this.kImgXu = t;
		t.source = "";
		t.visible = false;
		t.x = 153;
		t.y = 450;
		return t;
	};
	_proto.kImgFood2_i = function () {
		var t = new eui.Image();
		this.kImgFood2 = t;
		t.anchorOffsetX = 56;
		t.anchorOffsetY = 82;
		t.source = "";
		t.visible = false;
		t.x = 960;
		t.y = 556;
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
		t.elementsContent = [this._Rect2_i(),this.main_reward_bg_i(),this.kLbEnd_i(),this.kGrpBg3_i()];
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.bottom = 0;
		t.fillAlpha = 0.5;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.main_reward_bg_i = function () {
		var t = new eui.Image();
		this.main_reward_bg = t;
		t.horizontalCenter = 0.5;
		t.source = "";
		t.verticalCenter = -49.5;
		return t;
	};
	_proto.kLbEnd_i = function () {
		var t = new eui.Label();
		this.kLbEnd = t;
		t.alpha = 0;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 78;
		t.size = 66;
		t.text = "Delicious";
		t.textAlign = "center";
		t.textColor = 0xb78721;
		t.verticalAlign = "middle";
		t.verticalCenter = -61;
		t.width = 346;
		t.x = 397;
		return t;
	};
	_proto.kGrpBg3_i = function () {
		var t = new eui.Group();
		this.kGrpBg3 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.visible = false;
		t.elementsContent = [this.kImgBg3_i(),this._Group2_i()];
		return t;
	};
	_proto.kImgBg3_i = function () {
		var t = new eui.Image();
		this.kImgBg3 = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "";
		t.top = 0;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.left = 0;
		t.right = 0;
		t.y = 204;
		t.elementsContent = [this.kImgLogo1_i(),this.kImgLogo2_i()];
		return t;
	};
	_proto.kImgLogo1_i = function () {
		var t = new eui.Image();
		this.kImgLogo1 = t;
		t.anchorOffsetX = 237.88;
		t.anchorOffsetY = 162.12;
		t.height = 333;
		t.width = 476;
		t.x = 237.88;
		t.y = 162.12;
		return t;
	};
	_proto.kImgLogo2_i = function () {
		var t = new eui.Image();
		this.kImgLogo2 = t;
		t.anchorOffsetX = 239.39;
		t.anchorOffsetY = 162.12;
		t.height = 333;
		t.width = 476;
		t.x = 899.39;
		t.y = 162.12;
		return t;
	};
	_proto.kImgArrow_i = function () {
		var t = new eui.Image();
		this.kImgArrow = t;
		t.anchorOffsetX = 15.82;
		t.anchorOffsetY = 13.33;
		t.source = "";
		t.visible = false;
		t.x = 254;
		t.y = 457.01;
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
	_proto.kImgPlayNow_i = function () {
		var t = new eui.Image();
		this.kImgPlayNow = t;
		t.height = 137;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.width = 394;
		t.x = 15;
		t.y = 12;
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