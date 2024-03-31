$(function () {
  // カルーセル
  if ($('body').hasClass('top-page')) {
    $('.slideshow').slick({
      autoplay: true,
      dots: true,
      infinite: true,
      autoplaySpeed: 5000,
      arrows: false,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true
    });
  
    $('.voice-slide').slick({
      autoplay: true,
      dots: false,
      infinite: true,
      autoplaySpeed: 5000,
      arrows: false,
      fade: true,
      cssEase: 'linear',
      adaptiveHeight: true
    });
  };

  // スムーススクロール
  $('a[href^="#"]').on('click', function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    } else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false
  });

  // トップに戻るボタンの表示非表示
  $(window).scroll(function () { 
    if ($(this).scrollTop() > 100) {
      $('.top-btn').fadeIn();
    } else {
      $('.top-btn').fadeOut();
    }
  });

  // ハンバーガーボタン
  $('.hamburger').on('click', function () {
    $(this).toggleClass('on');
    $('.nav-sp').toggleClass('block');
  });
  $('a[href^="#"]').on('click', function () {
    $('.nav-sp').removeClass('block');
  });
});
