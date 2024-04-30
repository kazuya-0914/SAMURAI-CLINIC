export function GSAP() {
  // ヘッダー（共通）
  gsap.from('header', {
    y: -80,
    opacity: 0,
    duration: 0.5,
    scrollTrigger: {
      trigger: 'header',
      start: 'top top',
      toggleActions: 'play none none none',
      markers: false,
    },
  });
  // ヘッダー（トップページ）
  if($('#header-top').length) {
    gsap.to('#header-top', {
      backgroundColor: 'white',
      duration: 0.5,
      scrollTrigger: {
        trigger: '#news',
        start: 'top top',
        toggleActions: 'play none none reverse',
        markers: false,
      },
    });
    document.querySelectorAll('#header-top .nav-pc ul li a').forEach((el, index, array) => {
      if (index != array.length - 1) {
        gsap.to(el, {
          color: '#0C4324',
          duration: 0.5,
          scrollTrigger: {
            trigger: '#news',
            start: 'top top',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        });
      }
    });
  }

  // メインビジュアル
  gsap.from('#main-visual, #sub-visual', {
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: 'header',
      start: 'top top',
      toggleActions: 'play none none none',
      markers: false,
    },
  });

  // 固定ページ共通
  if($('.thumbnail').length) {
    gsap.from('.thumbnail', {
      y: 150,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '#main-visual, #sub-visual',
        start: 'bottom center',
        toggleActions: 'play none none none',
        markers: false,
      },
    });
  }

  // 施術の流れ（Aboutページ）、診療内容（コース・料金ページ）
  if($('.flow-img, .insurance-img').length) {
    gsap.from('.flow-img, .insurance-img', {
      y: 150,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.flow, .insurance',
        start: 'top 80%',
        toggleActions: 'play none none none',
        markers: false,
      },
    });
  }
  if($('.self-pay-img').length) {
    gsap.from('.self-pay-img', {
      y: 150,
      opacity: 0,
      duration: 0.5,
      scrollTrigger: {
        trigger: '.self-pay',
        start: 'top 80%',
        toggleActions: 'play none none none',
        markers: false,
      },
    });
  }

  // ここからレスポンシブ対応
  ScrollTrigger.matchMedia({
    // PC版
    "(min-width: 768px)": function () {
      // コース（コース・料金ページも含む）
      if($('.course-img').length) {
        gsap.from('.course-img', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#concept, #sub-visual',
            start: 'bottom center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
      }

      // お客様の声
      if($('.voice-slide').length || $('.voice-img').length) {
        gsap.from('.voice-slide', {
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#course',
            start: '60% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
        gsap.from('.voice-img', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#course',
            start: 'bottom center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
      }
      
      // 根本改善のポイント
      if($('.point-img').length) {
        gsap.from('.point-img', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '.point',
            start: 'top center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
      }
    },
    // PC版（TB版対応）
    "(min-width: 900px)": function () {
      // フッター
      gsap.from('footer iframe', {
        y: 150,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: 'footer',
          start: 'top 70%',
          toggleActions: 'play none none none',
          markers: false,
        },
      });
    },
    // SP版
    "(max-width: 767px)": function () {
      // コース（コース・料金ページも含む）
      if($('.course-img.img1').length || $('.course-img.img2').length) {
        gsap.from('.course-img.img1', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#concept, #sub-visual',
            start: 'bottom center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
        gsap.from('.course-img.img2', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#course, .course',
            start: '40% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
      }

      // お客様の声
      if($('.voice-slide').length || $('.voice-img.img1').length || $('.voice-img.img2').length || $('.voice-img.img3').length ) {
        gsap.from('.voice-slide', {
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#course',
            start: '80% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
        gsap.from('.voice-img.img1', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#voice',
            start: '20% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
        gsap.from('.voice-img.img2', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#voice',
            start: '40% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
        gsap.from('.voice-img.img3', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '#voice',
            start: '60% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
      }
      // 根本改善のポイント
      if($('.point-img.img1').length || $('.point-img.img2').length || $('.point-img.img3').length ) {
        gsap.from('.point-img.img1', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '.point',
            start: '20% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
        gsap.from('.point-img.img2', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '.point',
            start: '40% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
        gsap.from('.point-img.img3', {
          y: 150,
          opacity: 0,
          duration: 0.5,
          scrollTrigger: {
            trigger: '.point',
            start: '60% center',
            toggleActions: 'play none none none',
            markers: false,
          },
        });
      }
    },
    // TB版
    "(max-width: 899px)": function () {
      // フッター
      gsap.from('footer iframe', {
        y: 150,
        opacity: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: 'footer',
          start: '20% center',
          toggleActions: 'play none none none',
          markers: false,
        },
      });
    },
  });
} 