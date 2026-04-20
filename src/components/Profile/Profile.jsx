import React from 'react';
import './Profile.css';

 const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "Git", "Figma"
];

function Profile({ baseUrl }){
    return(
        <section id="profile" className="section-wrapper profile-section">
             <div className="profile-container js-fade-up">
                
                {/* 上段：左テキスト / 右画像 */}
                <div className="profile-top">
                    {/* 左：紹介文 */}
                    <div className="profile-text">
                        <h3 className="profile-title">PROFILE</h3>
                        <h4 className="my-name">Sesese</h4>
                        <p className="my-desc">
                            情報科学を専攻する学生です。<br />
                            デザインと実装の両立を目指して日々勉強中。<br />
                            シンプルな中に遊び心のあるWebサイトを作るのが好きです。
                        </p>
                    </div>

                    {/* 右：写真 */}
                    <div className="profile-image-area">
                        {/* 画像パスは適宜調整してください */}
                        <img src={`${baseUrl}image-home/reco-do.png`} alt="Profile" className="big-profile-img" />
                    </div>
                </div>

                {/* 下段：スキル欄 */}
                <div className="profile-bottom">
                    <p className="skills-label">TOOLS & LANGUAGES</p>
                    <div className="skills-list">
                        {skills.map((skill, index) => (
                            <span key={index} className="skill-tag">{skill}</span>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Profile;
