// 背景切り替わり
// ---------------------------------------------

// document.addEventListener('DOMContentLoaded', () => {
//   const hamburger = document.querySelector('.hamburger-morph');
//   const nav = document.querySelector('.nav-morph');

//   hamburger.addEventListener('click', () => {
//     hamburger.classList.toggle('active');
//     nav.classList.toggle('active');

//     const isOpen = hamburger.classList.contains('active');
//     hamburger.setAttribute('aria-expanded', isOpen);
//     nav.setAttribute('aria-hidden', !isOpen);
//     document.body.style.overflow = isOpen ? 'hidden' : '';
//   });


  // メニューリンクのホバーエフェクト用のイベントリスナー
  // ---------------------------------------------
//   const menuLinks = document.querySelectorAll('.nav-morph__link');
//   menuLinks.forEach(link => {
//     link.addEventListener('mouseenter', () => {
//       link.querySelector('.nav-morph__text').style.transform = 'translateY(-100%)';
//       link.querySelector('.nav-morph__hover').style.transform = 'translateY(-100%)';
//     });

//     link.addEventListener('mouseleave', () => {
//       link.querySelector('.nav-morph__text').style.transform = 'translateY(0)';
//       link.querySelector('.nav-morph__hover').style.transform = 'translateY(0)';
//     });
//   });
// });






document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger-morph');
  const nav = document.querySelector('.nav-morph');
  const menuLinks = document.querySelectorAll('.nav-morph__link'); // 追加

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // ✅ メニューリンクをクリックした時も閉じる
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });

  // 共通でメニューを閉じる関数
  function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('active');
    hamburger.setAttribute('aria-expanded', false);
    nav.setAttribute('aria-hidden', true);
    document.body.style.overflow = '';
  }

  // 既存のホバーエフェクト用コード
  menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      const text = link.querySelector('.nav-morph__text');
      if (text) text.style.transform = 'translateY(-100%)';
    });

    link.addEventListener('mouseleave', () => {
      const text = link.querySelector('.nav-morph__text');
      if (text) text.style.transform = 'translateY(0)';
    });
  });
});






// スムーススクロール
// ---------------------------------------------

$(function () {
  $('a[href^="#"]').click(function () {
    var adjust = 0;
    var speed = 600; 
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;

    // ✅ メニューを閉じる（クリックと同時）
    document.querySelector('.hamburger-morph').classList.remove('active');
    document.querySelector('.nav-morph').classList.remove('active');
    document.body.style.overflow = '';

    // ✅ スクロールを同時に開始
    $('body,html').animate({
        scrollTop: position
    }, speed, 'swing');
    return false;
  });
});




// フェードイン
// ---------------------------------------------

$(function () {
  $(window).scroll(function () {
    $(".effect-fade").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
  });
  jQuery(window).scroll();
});


// スライダー
// ---------------------------------------------
$('.slick').slick({
  autoplay:true, // 自動再生を設定
  autoplaySpeed:4000, // スライド切り替えの時間を設定
  dots:true // インジケーターを表示
});



// テキスト表示/非表示
// ---------------------------------------------

$(function(){
  $(".more-1").on("click", function() {
    $(this).toggleClass("on-click");
    $(".txt-hide-1").slideToggle(1000);
  });
}); 

$(function(){
  $(".more-2").on("click", function() {
    $(this).toggleClass("on-click");
    $(".txt-hide-2").slideToggle(1000);
  });
}); 

