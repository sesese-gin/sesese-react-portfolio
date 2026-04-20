import { useState, useEffect } from 'react' // ← useEffectを忘れずに！
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Works from './components/Works/Works';
import Hero from './components/Hero/Hero';
import Contact from './components/Contact/Contact';
import LeftVisual from './components/LeftVisual/leftvisual';
import './App.css'


function App() { 

  // 変数を作っておくと楽です
const baseUrl = import.meta.env.BASE_URL;
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

      <LeftVisual baseUrl={baseUrl} />
      

      {/* 右側エリア */}
      <div className="right-side">

        {/* ヘッダー */}
        <Header />

        <Hero baseUrl={baseUrl} />

        <Works baseUrl={baseUrl} />
      
        <Profile baseUrl={baseUrl}/>

        <Contact baseUrl={baseUrl}/>

        {/* フッター */}
        <footer className="js-fade-up">
             <p>&copy; 2026 Sesese Portfolio.</p>
        </footer>

      </div>
    </div>
 
  );
}
 
export default App