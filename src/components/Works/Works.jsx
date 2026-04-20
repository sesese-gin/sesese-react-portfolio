 import React from 'react';
 import './Works.css';

// 作品データ
  const worksData = [
    {
      title: "自室探索ゲーム",
      desc: "HTML/CSS/JS",
      // ↓ publicフォルダに入れた画像のパス
      image: "image-home/room_picture.jpg", 
      link: "https://sesese-gin.github.io/sesese-roomtour/"
    },
     {
      title: "MESI-KO",
      desc: "Next.js/React/NextAuth/Vercel/Neon/PostgreSQL/チーム開発",
      // ↓ publicフォルダに入れた画像のパス
      image: "image-home/MESI-KO_icon.png", 
      link: "https://mesi-ko.vercel.app/"
    },
    {
      title: "Coming Soon...",
      desc: "Preparation",
      image: "",
      link: "#"
    }
  ];


 
 {/* WORKSセクション */}
       {/* WORKSセクション */}
    function Works({ baseUrl }) {
    return(
        <section id="works" className="section-wrapper">
            <h3 className="js-fade-up">WORKS</h3>
            <div className="works-grid">
              {worksData.map((work, index) => (
                <a 
                    key={index} 
                    href={work.link} 
                    className="work-card js-fade-up" 
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  
                  <div 
                    className="card-img-wrapper" 
                  style={{ backgroundColor: work.image ? '#e0e0e0' : '#333333' }} 
                  >             
                      {work.image ? (
                        <img src={`/${work.image}`} alt={work.title} className="work-thumbnail" />
                      ) : (
                        <span className="no-image-text">
                        Coming Soon...
                        </span>
                      )}
                  </div>
                  {/* ▲▲▲ ここまで ▲▲▲ */}

                  <div className="card-text">
                    <h4>{work.title}</h4>
                    <p>{work.desc}</p>
                  </div>
                </a>
              ))}
            </div>
        </section>
        );
    };
    export default Works;
       