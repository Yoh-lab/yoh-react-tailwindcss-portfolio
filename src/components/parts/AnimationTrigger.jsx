import React, { useEffect, useState } from 'react';
import './Animation.css'; // 任意のCSSファイルをインポートする
import $ from 'jquery'; // jQueryをインポート
import CardActivity from '../contents_about/CardActivity';

function AnimationTrigger() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const fadeAnime = () => {
      $('.fadeUpTrigger').each(function() {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
          $(this).addClass('fadeUp');
        }
      });
    };

    // 画面をスクロールをしたら動かしたい場合の記述
    const handleScroll = () => {
      if (!fadeIn) {
        fadeAnime();
        setFadeIn(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 画面が読み込まれたらすぐに動かしたい場合の記述
    fadeAnime();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fadeIn]);

  return (
    <div className="wrapper">
      {/* JSXコンテンツ */}
      <CardActivity />
    </div>
  );
}

export default AnimationTrigger;