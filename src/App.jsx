import { useState, useEffect } from 'react' // ← useEffectを忘れずに！
import './App.css'

function App() { 

  // 作品データ
  const worksData = [
    {
      title: "自室探索ゲーム",
      desc: "HTML/CSS/JS",
      // ↓ publicフォルダに入れた画像のパス
      image: "/image-home/room_picture.jpg", 
      link: "https://sesese-gin.github.io/sesese-roomtour/"
    },
    {
      title: "Coming Soon...",
      desc: "Preparation",
      image: "",
      link: "#"
    }
  ];

  // ★この「useEffect」がないと、画面はずっと真っ黒（透明）のままです！
  useEffect(() => {
    const targets = document.querySelectorAll('.js-fade-up');
    
    const options = {
        root: document.querySelector('.right-side'),
        rootMargin: '-10% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    targets.forEach(target => {
        observer.observe(target);
    });

    return () => {
        targets.forEach(target => observer.unobserve(target));
    };
  }, []); // 最初の1回だけ実行

  
  return (
    <div className="container">
      {/* 左側エリア */}
      <div className="left-side">
        <div className="overlay-text">
          <h1 className="main-title font-chalk">MY WORLD</h1>
          <p className="sub-title font-chalk">Welcome to</p>
        </div>
      </div>

      {/* 右側エリア */}
      <div className="right-side">

        {/* ヘッダー */}
        <header className="site-header">
            <nav className="nav-container">
                <ul className="nav-list">
                    <li><a href="#home">HOME</a></li>
                    <li><a href="#works">WORKS</a></li>
                    <li><a href="#profile">PROFILE</a></li>
                    <li><a href="#contact">CONTACT</a></li>
                </ul>
            </nav>
        </header>

        {/* HOMEセクション */}
        <section id="home" className="section-wrapper">
          <div className="content-box home-box js-fade-up">
            <h2 className="font-chalk">Hello, World.</h2>
            <p className="intro-text">
              ここには私の作品と、<br />
              ちょっとした日常が詰まっています。<br />
              ゆっくりしていってください。
            </p>
          </div>
        </section>

        {/* WORKSセクション */}
        <section id="works" className="section-wrapper">
          <div className="content-box">
            <h3 className="js-fade-up">WORKS</h3>
            <div className="works-grid">
              {worksData.map((work, index) => (
                <a key={index} href={work.link} className="work-card js-fade-up" style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div 
                    className="card-img" 
                    style={{ 
                        backgroundImage: work.image ? `url(${work.image})` : 'none',
                        backgroundColor: '#333'
                    }}
                  ></div>
                  <div className="card-text">
                    <h4>{work.title}</h4>
                    <p>{work.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* PROFILEセクション */}
        <section id="profile" className="section-wrapper">
            <div className="content-box">
                <h3 className="js-fade-up">PROFILE</h3> 
                <div className="profile-box js-fade-up delay-1">
                    <img src="/image-home/reco-do.png" alt="プロフィール画像" className="profile-img" />
                    <div className="profile-info">
                        <h4 className="font-chalk">Sesese</h4>
                        <p>Webデザイン勉強中の学生です。<br />面白いものを作るのが好きです。</p>
                    </div>
                </div>
            </div>
        </section>

        {/* CONTACTセクション */}
        <section id="contact" className="section-wrapper">
            <div className="content-box">
                <h3 className="js-fade-up">CONTACT</h3> 
                <h4 className="font-chalk js-fade-up delay-1">ginchan0603ks@gmail.com</h4>
            </div>
        </section>

        {/* フッター */}
        <footer className="js-fade-up">
             <p>&copy; 2026 Sesese Portfolio.</p>
        </footer>

      </div>
    </div>
  );
}
 
export default App