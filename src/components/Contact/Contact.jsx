import React from 'react';
import './Contact.css';

function Contact({ baseUrl}){
    return(
        <section id="contact" className="section-wrapper contact-section">
            <div className="contact-content js-fade-up">
                
                {/* 1. 小さなラベル */}
                <p className="contact-label">GET IN TOUCH</p>
                
                {/* 2. 主役のメールアドレス（クリックでメーラー起動） */}
                <a href="mailto:ginchan0603ks@gmail.com" className="email-big">
                    ginchan0603ks<br className="sp-only" />@gmail.com
                </a>

                {/* 3. SNSリンク（ここを書き換えてください） */}
                <div className="social-links">
                <a
                href="https://x.com/@sen__ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="sns-link"
                >
                X (Twitter)
                </a>
                    <span className="separator">/</span>
                    <a  href="https://instagram.com/sensen_0603" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="sns-link"
                    >
                        Instagram
                    </a>
                </div>

                {/* フッターをここに含めてしまうのもアリですが、今回は外に出しておきます */}
            </div>
        </section>
    );
};

export default Contact;