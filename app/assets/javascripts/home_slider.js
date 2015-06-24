$(function(){

	var tAutoSlide = 6000; //オートスライドする間隔（ミリ秒）
	var isNaviJump = 1;	//ナビ（コントローラ）クリックですぐ該当スライドへ（1=する/0=しない）


	var nNowSlide = 0; //現在の（最初の）スライド番号
	var xStage = 0;	//ステージのX位置
	var tIdAutoSlide;	//オートスライド用タイマーID

//	var isModernBrowser = $.support.leadingWhitespace;	//モダンブラウザフラグ

	var oSlideList = $("#slideList li");	//スライドリスト（オリジナル）
	var w=oSlideList.eq(0);
	var wSlide = w.width() + parseInt(w.css("marginRight")); //画像＋隙間の幅
	var nMaxSlide = oSlideList.length; //スライド数

	$.fx.interval=1000/120;


	//マウスオーバーでオートスライドを止める
	$('#slideList a').hover(moverImg, moutImg);

	//スライドステージHTML生成
	$('#homeSlider').append('<ul id="slideStage"></ul>');
	var oSlideStage = $("#slideStage");
	appendSlide(0);

	//スライドをクローン
	function appendSlide(n)
	{
		var o=oSlideStage.append(oSlideList.eq(n).clone(true));
		//ページ内スムーズスクロール
		if(n>=1)
		{
			var oa=o.find('a');
			oa.attr('href','#');
			oa.click(function(){$('html,body').animate({scrollTop:$(oSlideList.eq(nNowSlide).find('a').attr('href')).offset().top},500)});
		}
	}

	//スライドリスト（オリジナル）を隠す
	$("#slideList").css('margin-top', '-10000px');
	//$("#slideList").css('visibility', 'hidden');

	//矢印HTML生成
	$("#homeSlider").append('<div id="sliderArrow"><span class="l"></span><span class="r"></span></div>');
	$("#sliderArrow span").hover(moverImg, moutImg).focus(function(){
		$(this).blur();
	});
	setArrowClick();
	
	//矢印クリックイベント設定
	function setArrowClick()
	{
		$("#sliderArrow .l").click(clickArrowL);
		$("#sliderArrow .r").click(clickArrowR);
	}
	function clickArrowL() {
		clickArrow(-1);
	}
	function clickArrowR() {
		clickArrow(1);
	}
	function clickArrow(dir) {
		$(this).blur();
		slideSlider(nNowSlide+dir, dir);
		return false;
	}

	//矢印クリックイベント解除
	function unbindArrowClick()
	{
		$("#sliderArrow span").unbind('click');
	}

	//ナビ（コントローラ）HTML生成
	var s="";
	for(i=0;i<nMaxSlide;i++) s += "<a href='#'></a>";
	$("#homeSlider").append("<div id='sliderNavi'>" + s + "</div>");
	var oSliderNavi = $('#sliderNavi a');
	var wSlide1 = $('#slideList img').width();
	var wNavi1 = oSliderNavi.width();
	$('#sliderNavi').css('marginLeft', wSlide1/2 - wNavi1*nMaxSlide/2);
	oSliderNavi.click(function(){
		var posNum = oSliderNavi.index(this);
		if(posNum==nNowSlide) return false;
		slideSlider(posNum, 0);
		return false;
	});
	oSliderNavi.eq(nNowSlide).addClass("now");
	oSliderNavi.focus(function(){
		$(this).blur();
	});
	
	//オートスクロール
	function scrollTimter(){
		clearScrollTimer();
		tIdAutoSlide =setInterval(function(){
			slideSlider(nNowSlide+1, 1);
		},tAutoSlide);
	}
	function clearScrollTimer()
	{
		if(tIdAutoSlide)
		{
			clearInterval(tIdAutoSlide);
			tIdAutoSlide=undefined;
		}
	}
	scrollTimter();

	//スライドマウスオーバー
	function moverImg()
	{
		clearScrollTimer();
	}
	//スライドマウスアウト
	function moutImg()
	{
		scrollTimter();
	}
	
	//スライド実行（次のスライド番号,スライド方向 -1=左/1=右/0=オート）
	function slideSlider(nDst, dir)
	{
		clearScrollTimer();
		
		if(dir==0) dir=(nNowSlide<nDst ? 1 : -1);		//方向オート

		var nJump = Math.abs(nDst-nNowSlide);	//いくつスライドするか（ナビクリック時）

		var i=(isNaviJump==1 ? nJump-1 : 0);	//nDstスライドをすぐ出す（ナビクリック時）
		for(;i<nJump;i++)
		{
			nDst = ((nNowSlide + (i+1)*dir) + nMaxSlide)%nMaxSlide;	//スライド番号のループ修正
			appendSlide(nDst);	//次のスライド生成
			xStage += (dir==1 ? wSlide : -wSlide);	//次のステージ位置
			oSlideStage.find('li:last').css('margin-left', xStage);	//生成スライド位置設定
		}

		//ナビ（コントローラ）現在地変更
		oSliderNavi.eq(nNowSlide).removeClass('now');
		nNowSlide = nDst;
	    oSliderNavi.eq(nNowSlide).addClass('now');
//		unbindArrowClick();	//矢印クリックイベント解除

		//スライド
		oSlideStage.stop().animate({ marginLeft: -xStage },500,"easeOutQuad",function(){
			oSlideStage.find('li:not(:last)').remove();	//最後以外のスライド削除
//			setArrowClick();	//矢印クリックイベント設定
		});

		scrollTimter();
	}
	
});



