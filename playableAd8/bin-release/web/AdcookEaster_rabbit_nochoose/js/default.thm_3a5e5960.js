
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
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgOrder3","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgMenu2","kImgOrder1","kImgNum2","kImgOrder2","kImgNum1","kGrpMenu2","kGrpPeople2","kImgbg2","kGrpBg","kImgShadow1","kImgShadow2","kImgShadow3","kImgRabbit","kImgCoke1","kImgCoke2","kImgCoke3","kImgRabbit1","kImgRabbit2","kImgRabbit3","kImgBeef3","kImgBeef2","kImgBeef1","kImgEgg","kImgEgg1","kImgEgg2","kImgEgg4","kImgEgg3","kImgChicken","kImgMachie","kImgBear","kImgCake3","kImgCake2","kImgCake1","kImgTea3","kImgTea2","kImgTea1","kImgA4","kImgA5","kImgA6","kImgA3","kImgA2","kImgA1","kGrpMenu","kGrpAction","kGrpSnow","kImgRect","kImgChoice1","kImgChoice2","kImgHand","kGrpChoice","kImgSwipe","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kImgShadow1_i(),this.kImgShadow2_i(),this.kImgShadow3_i(),this.kGrpMenu_i(),this.kGrpAction_i(),this.kGrpSnow_i(),this.kImgRect_i(),this.kGrpChoice_i(),this.kImgSwipe_i(),this.kGrpGuide_i()];
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
		t.x = 313;
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
		t.anchorOffsetX = -2;
		t.anchorOffsetY = 126.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 196;
		t.y = 126.36;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder3_i()];
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
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.horizontalCenter = 0;
		t.source = "";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = 697;
		t.y = 80;
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
		t.anchorOffsetY = 128.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 190.67;
		t.y = 130.07;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder1_i(),this.kImgNum2_i(),this.kImgOrder2_i(),this.kImgNum1_i()];
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
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.anchorOffsetX = 61.33;
		t.anchorOffsetY = 84;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "";
		t.top = 14;
		return t;
	};
	_proto.kImgNum2_i = function () {
		var t = new eui.Image();
		this.kImgNum2 = t;
		t.source = "";
		t.x = 77.36;
		t.y = 79.35;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.source = "";
		t.x = 55;
		t.y = 141.35;
		return t;
	};
	_proto.kImgNum1_i = function () {
		var t = new eui.Image();
		this.kImgNum1 = t;
		t.source = "";
		t.x = 79.38;
		t.y = 168.35;
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
	_proto.kImgShadow1_i = function () {
		var t = new eui.Image();
		this.kImgShadow1 = t;
		t.source = "";
		t.visible = false;
		t.x = 92.5;
		t.y = 394;
		return t;
	};
	_proto.kImgShadow2_i = function () {
		var t = new eui.Image();
		this.kImgShadow2 = t;
		t.source = "";
		t.visible = false;
		t.x = 426.5;
		t.y = 390;
		return t;
	};
	_proto.kImgShadow3_i = function () {
		var t = new eui.Image();
		this.kImgShadow3 = t;
		t.source = "";
		t.visible = false;
		t.x = 894;
		t.y = 394;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgRabbit_i(),this.kImgCoke1_i(),this.kImgCoke2_i(),this.kImgCoke3_i(),this.kImgRabbit1_i(),this.kImgRabbit2_i(),this.kImgRabbit3_i(),this.kImgBeef3_i(),this.kImgBeef2_i(),this.kImgBeef1_i(),this.kImgEgg_i(),this.kImgEgg1_i(),this.kImgEgg2_i(),this.kImgEgg4_i(),this.kImgEgg3_i(),this.kImgChicken_i(),this.kImgMachie_i(),this.kImgBear_i(),this.kImgCake3_i(),this.kImgCake2_i(),this.kImgCake1_i(),this.kImgTea3_i(),this.kImgTea2_i(),this.kImgTea1_i(),this.kImgA4_i(),this.kImgA5_i(),this.kImgA6_i(),this.kImgA3_i(),this.kImgA2_i(),this.kImgA1_i()];
		return t;
	};
	_proto.kImgRabbit_i = function () {
		var t = new eui.Image();
		this.kImgRabbit = t;
		t.anchorOffsetX = 66;
		t.anchorOffsetY = 78;
		t.source = "";
		t.x = 200;
		t.y = 346;
		return t;
	};
	_proto.kImgCoke1_i = function () {
		var t = new eui.Image();
		this.kImgCoke1 = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 52;
		t.source = "";
		t.x = 296;
		t.y = 372;
		return t;
	};
	_proto.kImgCoke2_i = function () {
		var t = new eui.Image();
		this.kImgCoke2 = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 48;
		t.source = "";
		t.x = 354;
		t.y = 372;
		return t;
	};
	_proto.kImgCoke3_i = function () {
		var t = new eui.Image();
		this.kImgCoke3 = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 46;
		t.source = "";
		t.x = 414;
		t.y = 371.5;
		return t;
	};
	_proto.kImgRabbit1_i = function () {
		var t = new eui.Image();
		this.kImgRabbit1 = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 38;
		t.source = "";
		t.x = 169.5;
		t.y = 586;
		return t;
	};
	_proto.kImgRabbit2_i = function () {
		var t = new eui.Image();
		this.kImgRabbit2 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 36;
		t.source = "";
		t.x = 194;
		t.y = 526;
		return t;
	};
	_proto.kImgRabbit3_i = function () {
		var t = new eui.Image();
		this.kImgRabbit3 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 32;
		t.source = "";
		t.x = 228;
		t.y = 472;
		return t;
	};
	_proto.kImgBeef3_i = function () {
		var t = new eui.Image();
		this.kImgBeef3 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 44;
		t.source = "";
		t.x = 362;
		t.y = 466;
		return t;
	};
	_proto.kImgBeef2_i = function () {
		var t = new eui.Image();
		this.kImgBeef2 = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 44;
		t.source = "";
		t.x = 334;
		t.y = 536;
		return t;
	};
	_proto.kImgBeef1_i = function () {
		var t = new eui.Image();
		this.kImgBeef1 = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 54;
		t.source = "";
		t.x = 300;
		t.y = 594;
		return t;
	};
	_proto.kImgEgg_i = function () {
		var t = new eui.Image();
		this.kImgEgg = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 104;
		t.source = "";
		t.x = 674;
		t.y = 428;
		return t;
	};
	_proto.kImgEgg1_i = function () {
		var t = new eui.Image();
		this.kImgEgg1 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 56;
		t.source = "";
		t.x = 789;
		t.y = 416;
		return t;
	};
	_proto.kImgEgg2_i = function () {
		var t = new eui.Image();
		this.kImgEgg2 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 56;
		t.source = "";
		t.x = 560;
		t.y = 420;
		return t;
	};
	_proto.kImgEgg4_i = function () {
		var t = new eui.Image();
		this.kImgEgg4 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 60;
		t.source = "";
		t.x = 506;
		t.y = 510;
		return t;
	};
	_proto.kImgEgg3_i = function () {
		var t = new eui.Image();
		this.kImgEgg3 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 58;
		t.source = "";
		t.x = 844;
		t.y = 508;
		return t;
	};
	_proto.kImgChicken_i = function () {
		var t = new eui.Image();
		this.kImgChicken = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 64;
		t.source = "";
		t.x = 480;
		t.y = 616;
		return t;
	};
	_proto.kImgMachie_i = function () {
		var t = new eui.Image();
		this.kImgMachie = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 110;
		t.source = "";
		t.x = 674;
		t.y = 618;
		return t;
	};
	_proto.kImgBear_i = function () {
		var t = new eui.Image();
		this.kImgBear = t;
		t.anchorOffsetX = 89;
		t.anchorOffsetY = 51;
		t.source = "";
		t.x = 869;
		t.y = 615;
		return t;
	};
	_proto.kImgCake3_i = function () {
		var t = new eui.Image();
		this.kImgCake3 = t;
		t.anchorOffsetX = 58.67;
		t.anchorOffsetY = 89.33;
		t.source = "";
		t.x = 956;
		t.y = 407.99;
		return t;
	};
	_proto.kImgCake2_i = function () {
		var t = new eui.Image();
		this.kImgCake2 = t;
		t.anchorOffsetX = 61.33;
		t.anchorOffsetY = 88;
		t.source = "";
		t.x = 975.31;
		t.y = 479.2;
		return t;
	};
	_proto.kImgCake1_i = function () {
		var t = new eui.Image();
		this.kImgCake1 = t;
		t.anchorOffsetX = 58.67;
		t.anchorOffsetY = 88;
		t.source = "";
		t.x = 994.69;
		t.y = 551.63;
		return t;
	};
	_proto.kImgTea3_i = function () {
		var t = new eui.Image();
		this.kImgTea3 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 53.33;
		t.source = "";
		t.x = 1060.02;
		t.y = 406.33;
		return t;
	};
	_proto.kImgTea2_i = function () {
		var t = new eui.Image();
		this.kImgTea2 = t;
		t.anchorOffsetX = 50.67;
		t.anchorOffsetY = 56;
		t.source = "";
		t.x = 1085.38;
		t.y = 477.35;
		return t;
	};
	_proto.kImgTea1_i = function () {
		var t = new eui.Image();
		this.kImgTea1 = t;
		t.anchorOffsetX = 54.67;
		t.anchorOffsetY = 62.67;
		t.source = "";
		t.x = 1111.03;
		t.y = 567.65;
		return t;
	};
	_proto.kImgA4_i = function () {
		var t = new eui.Image();
		this.kImgA4 = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 38;
		t.source = "";
		t.x = 824;
		t.y = 577;
		return t;
	};
	_proto.kImgA5_i = function () {
		var t = new eui.Image();
		this.kImgA5 = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 40;
		t.source = "";
		t.x = 874;
		t.y = 579;
		return t;
	};
	_proto.kImgA6_i = function () {
		var t = new eui.Image();
		this.kImgA6 = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 41;
		t.source = "";
		t.x = 915;
		t.y = 581;
		return t;
	};
	_proto.kImgA3_i = function () {
		var t = new eui.Image();
		this.kImgA3 = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 39;
		t.source = "";
		t.x = 833;
		t.y = 602;
		return t;
	};
	_proto.kImgA2_i = function () {
		var t = new eui.Image();
		this.kImgA2 = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 38;
		t.source = "";
		t.x = 881;
		t.y = 603;
		return t;
	};
	_proto.kImgA1_i = function () {
		var t = new eui.Image();
		this.kImgA1 = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 39;
		t.source = "";
		t.x = 921;
		t.y = 603;
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
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
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
		t.anchorOffsetX = 362;
		t.anchorOffsetY = 198;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 662;
		t.y = 362;
		t.elementsContent = [this.kImgChoice1_i(),this.kImgChoice2_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 190;
		t.source = "";
		t.x = 140;
		t.y = 198;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 202;
		t.source = "";
		t.x = 564;
		t.y = 202;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 56;
		t.source = "";
		t.visible = false;
		t.x = 178;
		t.y = 230;
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
		return t;
	};
	return MainViewDevSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/MainViewSkin.exml'] = window.MainViewSkin = (function (_super) {
	__extends(MainViewSkin, _super);
	function MainViewSkin() {
		_super.call(this);
		this.skinParts = ["kImgBg1","kImgPeople1","kImgMenu1","kImgOrder3","kGrpMenu1","kGrpPeople1","kImgPeople2","kImgMenu2","kImgOrder1","kImgNum2","kImgOrder2","kImgNum1","kGrpMenu2","kGrpPeople2","kImgbg2","kGrpBg","kImgShadow1","kImgShadow2","kImgShadow3","kImgRabbit","kImgCoke1","kImgCoke2","kImgCoke3","kImgRabbit1","kImgRabbit2","kImgRabbit3","kImgBeef3","kImgBeef2","kImgBeef1","kImgEgg","kImgEgg1","kImgEgg2","kImgEgg4","kImgEgg3","kImgChicken","kImgMachie","kImgBear","kImgCake3","kImgCake2","kImgCake1","kImgTea3","kImgTea2","kImgTea1","kImgA4","kImgA5","kImgA6","kImgA3","kImgA2","kImgA1","kGrpMenu","kGrpAction","kGrpSnow","kImgRect","kImgChoice1","kImgChoice2","kImgHand","kGrpChoice","kImgSwipe","kGrpGuide","kGrpMain"];
		
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
		t.elementsContent = [this.kGrpBg_i(),this.kImgShadow1_i(),this.kImgShadow2_i(),this.kImgShadow3_i(),this.kGrpMenu_i(),this.kGrpAction_i(),this.kGrpSnow_i(),this.kImgRect_i(),this.kGrpChoice_i(),this.kImgSwipe_i(),this.kGrpGuide_i()];
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
		t.x = 313;
		t.y = 80;
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
		t.anchorOffsetX = -2;
		t.anchorOffsetY = 126.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 196;
		t.y = 126.36;
		t.elementsContent = [this.kImgMenu1_i(),this.kImgOrder3_i()];
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
	_proto.kImgOrder3_i = function () {
		var t = new eui.Image();
		this.kImgOrder3 = t;
		t.horizontalCenter = 0;
		t.source = "main_menu2_png";
		t.verticalCenter = 0;
		return t;
	};
	_proto.kGrpPeople2_i = function () {
		var t = new eui.Group();
		this.kGrpPeople2 = t;
		t.x = 697;
		t.y = 80;
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
		t.anchorOffsetY = 128.67;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 190.67;
		t.y = 130.07;
		t.elementsContent = [this.kImgMenu2_i(),this.kImgOrder1_i(),this.kImgNum2_i(),this.kImgOrder2_i(),this.kImgNum1_i()];
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
	_proto.kImgOrder1_i = function () {
		var t = new eui.Image();
		this.kImgOrder1 = t;
		t.anchorOffsetX = 61.33;
		t.anchorOffsetY = 84;
		t.horizontalCenter = 0;
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.source = "main_cake_png";
		t.top = 14;
		return t;
	};
	_proto.kImgNum2_i = function () {
		var t = new eui.Image();
		this.kImgNum2 = t;
		t.source = "main_x3_png";
		t.x = 77.36;
		t.y = 79.35;
		return t;
	};
	_proto.kImgOrder2_i = function () {
		var t = new eui.Image();
		this.kImgOrder2 = t;
		t.source = "main_menu1_png";
		t.x = 55;
		t.y = 141.35;
		return t;
	};
	_proto.kImgNum1_i = function () {
		var t = new eui.Image();
		this.kImgNum1 = t;
		t.source = "main_x3_png";
		t.x = 79.38;
		t.y = 168.35;
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
	_proto.kImgShadow1_i = function () {
		var t = new eui.Image();
		this.kImgShadow1 = t;
		t.source = "main_shadow1_png";
		t.visible = false;
		t.x = 92.5;
		t.y = 394;
		return t;
	};
	_proto.kImgShadow2_i = function () {
		var t = new eui.Image();
		this.kImgShadow2 = t;
		t.source = "main_shadow2_png";
		t.visible = false;
		t.x = 426.5;
		t.y = 390;
		return t;
	};
	_proto.kImgShadow3_i = function () {
		var t = new eui.Image();
		this.kImgShadow3 = t;
		t.source = "main_shadow3_png";
		t.visible = false;
		t.x = 894;
		t.y = 394;
		return t;
	};
	_proto.kGrpMenu_i = function () {
		var t = new eui.Group();
		this.kGrpMenu = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this.kImgRabbit_i(),this.kImgCoke1_i(),this.kImgCoke2_i(),this.kImgCoke3_i(),this.kImgRabbit1_i(),this.kImgRabbit2_i(),this.kImgRabbit3_i(),this.kImgBeef3_i(),this.kImgBeef2_i(),this.kImgBeef1_i(),this.kImgEgg_i(),this.kImgEgg1_i(),this.kImgEgg2_i(),this.kImgEgg4_i(),this.kImgEgg3_i(),this.kImgChicken_i(),this.kImgMachie_i(),this.kImgBear_i(),this.kImgCake3_i(),this.kImgCake2_i(),this.kImgCake1_i(),this.kImgTea3_i(),this.kImgTea2_i(),this.kImgTea1_i(),this.kImgA4_i(),this.kImgA5_i(),this.kImgA6_i(),this.kImgA3_i(),this.kImgA2_i(),this.kImgA1_i()];
		return t;
	};
	_proto.kImgRabbit_i = function () {
		var t = new eui.Image();
		this.kImgRabbit = t;
		t.anchorOffsetX = 66;
		t.anchorOffsetY = 78;
		t.source = "main_rabbit_png";
		t.x = 200;
		t.y = 346;
		return t;
	};
	_proto.kImgCoke1_i = function () {
		var t = new eui.Image();
		this.kImgCoke1 = t;
		t.anchorOffsetX = 30;
		t.anchorOffsetY = 52;
		t.source = "main_coke1_png";
		t.x = 296;
		t.y = 372;
		return t;
	};
	_proto.kImgCoke2_i = function () {
		var t = new eui.Image();
		this.kImgCoke2 = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 48;
		t.source = "main_coke2_png";
		t.x = 354;
		t.y = 372;
		return t;
	};
	_proto.kImgCoke3_i = function () {
		var t = new eui.Image();
		this.kImgCoke3 = t;
		t.anchorOffsetX = 28;
		t.anchorOffsetY = 46;
		t.source = "main_coke2_png";
		t.x = 414;
		t.y = 371.5;
		return t;
	};
	_proto.kImgRabbit1_i = function () {
		var t = new eui.Image();
		this.kImgRabbit1 = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 38;
		t.source = "main_rabbit1_png";
		t.x = 169.5;
		t.y = 586;
		return t;
	};
	_proto.kImgRabbit2_i = function () {
		var t = new eui.Image();
		this.kImgRabbit2 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 36;
		t.source = "main_rabbit2_png";
		t.x = 194;
		t.y = 526;
		return t;
	};
	_proto.kImgRabbit3_i = function () {
		var t = new eui.Image();
		this.kImgRabbit3 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 32;
		t.source = "main_rabbit3_png";
		t.x = 228;
		t.y = 472;
		return t;
	};
	_proto.kImgBeef3_i = function () {
		var t = new eui.Image();
		this.kImgBeef3 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 44;
		t.source = "main_beef3_png";
		t.x = 362;
		t.y = 466;
		return t;
	};
	_proto.kImgBeef2_i = function () {
		var t = new eui.Image();
		this.kImgBeef2 = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 44;
		t.source = "main_beef2_png";
		t.x = 334;
		t.y = 536;
		return t;
	};
	_proto.kImgBeef1_i = function () {
		var t = new eui.Image();
		this.kImgBeef1 = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 54;
		t.source = "main_beef1_png";
		t.x = 300;
		t.y = 594;
		return t;
	};
	_proto.kImgEgg_i = function () {
		var t = new eui.Image();
		this.kImgEgg = t;
		t.anchorOffsetX = 90;
		t.anchorOffsetY = 104;
		t.source = "main_egg_png";
		t.x = 674;
		t.y = 428;
		return t;
	};
	_proto.kImgEgg1_i = function () {
		var t = new eui.Image();
		this.kImgEgg1 = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 56;
		t.source = "main_egg1_png";
		t.x = 789;
		t.y = 416;
		return t;
	};
	_proto.kImgEgg2_i = function () {
		var t = new eui.Image();
		this.kImgEgg2 = t;
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 56;
		t.source = "main_egg2_png";
		t.x = 560;
		t.y = 420;
		return t;
	};
	_proto.kImgEgg4_i = function () {
		var t = new eui.Image();
		this.kImgEgg4 = t;
		t.anchorOffsetX = 62;
		t.anchorOffsetY = 60;
		t.source = "main_egg5_png";
		t.x = 506;
		t.y = 510;
		return t;
	};
	_proto.kImgEgg3_i = function () {
		var t = new eui.Image();
		this.kImgEgg3 = t;
		t.anchorOffsetX = 64;
		t.anchorOffsetY = 58;
		t.source = "main_egg3_png";
		t.x = 844;
		t.y = 508;
		return t;
	};
	_proto.kImgChicken_i = function () {
		var t = new eui.Image();
		this.kImgChicken = t;
		t.anchorOffsetX = 72;
		t.anchorOffsetY = 64;
		t.source = "main_segg_png";
		t.x = 480;
		t.y = 616;
		return t;
	};
	_proto.kImgMachie_i = function () {
		var t = new eui.Image();
		this.kImgMachie = t;
		t.anchorOffsetX = 106;
		t.anchorOffsetY = 110;
		t.source = "main_machie_png";
		t.x = 674;
		t.y = 618;
		return t;
	};
	_proto.kImgBear_i = function () {
		var t = new eui.Image();
		this.kImgBear = t;
		t.anchorOffsetX = 89;
		t.anchorOffsetY = 51;
		t.source = "main_bear_png";
		t.x = 869;
		t.y = 615;
		return t;
	};
	_proto.kImgCake3_i = function () {
		var t = new eui.Image();
		this.kImgCake3 = t;
		t.anchorOffsetX = 58.67;
		t.anchorOffsetY = 89.33;
		t.source = "main_cake_png";
		t.x = 956;
		t.y = 407.99;
		return t;
	};
	_proto.kImgCake2_i = function () {
		var t = new eui.Image();
		this.kImgCake2 = t;
		t.anchorOffsetX = 61.33;
		t.anchorOffsetY = 88;
		t.source = "main_cake_png";
		t.x = 975.31;
		t.y = 479.2;
		return t;
	};
	_proto.kImgCake1_i = function () {
		var t = new eui.Image();
		this.kImgCake1 = t;
		t.anchorOffsetX = 58.67;
		t.anchorOffsetY = 88;
		t.source = "main_cake_png";
		t.x = 994.69;
		t.y = 551.63;
		return t;
	};
	_proto.kImgTea3_i = function () {
		var t = new eui.Image();
		this.kImgTea3 = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 53.33;
		t.source = "main_tea3_png";
		t.x = 1060.02;
		t.y = 406.33;
		return t;
	};
	_proto.kImgTea2_i = function () {
		var t = new eui.Image();
		this.kImgTea2 = t;
		t.anchorOffsetX = 50.67;
		t.anchorOffsetY = 56;
		t.source = "main_tea2_png";
		t.x = 1085.38;
		t.y = 477.35;
		return t;
	};
	_proto.kImgTea1_i = function () {
		var t = new eui.Image();
		this.kImgTea1 = t;
		t.anchorOffsetX = 54.67;
		t.anchorOffsetY = 62.67;
		t.source = "main_tea1_png";
		t.x = 1111.03;
		t.y = 567.65;
		return t;
	};
	_proto.kImgA4_i = function () {
		var t = new eui.Image();
		this.kImgA4 = t;
		t.anchorOffsetX = 23;
		t.anchorOffsetY = 38;
		t.source = "main_menu1_png";
		t.x = 824;
		t.y = 577;
		return t;
	};
	_proto.kImgA5_i = function () {
		var t = new eui.Image();
		this.kImgA5 = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 40;
		t.source = "main_menu1_png";
		t.x = 874;
		t.y = 579;
		return t;
	};
	_proto.kImgA6_i = function () {
		var t = new eui.Image();
		this.kImgA6 = t;
		t.anchorOffsetX = 24;
		t.anchorOffsetY = 41;
		t.source = "main_menu1_png";
		t.x = 915;
		t.y = 581;
		return t;
	};
	_proto.kImgA3_i = function () {
		var t = new eui.Image();
		this.kImgA3 = t;
		t.anchorOffsetX = 25;
		t.anchorOffsetY = 39;
		t.source = "main_menu1_png";
		t.x = 833;
		t.y = 602;
		return t;
	};
	_proto.kImgA2_i = function () {
		var t = new eui.Image();
		this.kImgA2 = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 38;
		t.source = "main_menu1_png";
		t.x = 881;
		t.y = 603;
		return t;
	};
	_proto.kImgA1_i = function () {
		var t = new eui.Image();
		this.kImgA1 = t;
		t.anchorOffsetX = 26;
		t.anchorOffsetY = 39;
		t.source = "main_menu1_png";
		t.x = 921;
		t.y = 603;
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
	_proto.kGrpSnow_i = function () {
		var t = new eui.Group();
		this.kGrpSnow = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
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
		t.anchorOffsetX = 362;
		t.anchorOffsetY = 198;
		t.scaleX = 0;
		t.scaleY = 0;
		t.x = 662;
		t.y = 362;
		t.elementsContent = [this.kImgChoice1_i(),this.kImgChoice2_i(),this.kImgHand_i()];
		return t;
	};
	_proto.kImgChoice1_i = function () {
		var t = new eui.Image();
		this.kImgChoice1 = t;
		t.anchorOffsetX = 140;
		t.anchorOffsetY = 190;
		t.source = "main_a1_png";
		t.x = 140;
		t.y = 198;
		return t;
	};
	_proto.kImgChoice2_i = function () {
		var t = new eui.Image();
		this.kImgChoice2 = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 202;
		t.source = "main_a2_png";
		t.x = 564;
		t.y = 202;
		return t;
	};
	_proto.kImgHand_i = function () {
		var t = new eui.Image();
		this.kImgHand = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 56;
		t.source = "main_guide_arrow_png";
		t.visible = false;
		t.x = 178;
		t.y = 230;
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
		return t;
	};
	return MainViewSkin;
})(eui.Skin);