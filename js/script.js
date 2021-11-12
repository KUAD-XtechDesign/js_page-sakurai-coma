jQuery(function($){
    
    $('.slider').slick({
        arrows:false,
        asNavFor:'.thumb',
    });
    $('.thumb').slick({
        asNavFor:'.slider',
        focusOnSelect: true,
        slidesToShow:4,
        slidesToScroll:1
    });    
});


$('.slider').slick({
    arrows:false,
    asNavFor:'.thumb',
});
$('.thumb').slick({
    asNavFor:'.slider',
    focusOnSelect: true,
    slidesToShow:4,
    slidesToScroll:1
});    
jQuery('.grid').masonry({
    itemSelector: '.grid-item'
  });

  var $grid = jQuery('.grid').imagesLoaded(function(){
	$grid.masonry({
		itemSelector: '.grid-item'
  });
});
$(function(){
	
    var imgWidth = $('images/itou_puroguramingu.jpeg').width();
    var imgHeight = $('.sample img').height();
    
    aspectRatio = imgWidth / imgHeight

    if(aspectRatio >= 1){
        //横長画像の場合 divのheightに数値を合わせる
        $('.sample img').css('height','200px');
    }else{
        //縦長画像の場合 divのwidthに数値を合わせる
        $('.sample img').css('width','300px');

        //上下中央揃えにする場合は下記2行も
        var i = (imgHeight-200)/2  //はみ出た部分を計算して÷2し、ネガティブマージンをつける
        $(this).find('img').css('margin-top', '-'+i+'px');

    }


});

document.getElementById("DAZN").addEventListener("click", function () {
    location.replace("https://www.dazn.com/ja-JP/home");
  }, false);