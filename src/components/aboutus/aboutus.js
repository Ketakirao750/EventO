import React from "react";
import "./aboutus.css";
import Header from "../header/header";
import About from "./about.png";

const aboutus = () => {
  return (
    //     <div class="responsive-container-block bigContainer">

    //   <div class="responsive-container-block Container">
    //     <p class="text-blk heading">
    //       About Us
    //     </p>
    //     <p class="text-blk subHeading">
    //     Welcome to EVENTO, where event excellence meets seamless execution. With a passion for turning visions into reality, we have been a driving force for maintaining events at smooth pace. At EVENTO, we pride ourselves on our unwavering commitment to perfection, ensuring that every detail of your event is meticulously curated and flawlessly executed. From intimate celebrations to grand corporate affairs, our dedicated team of experienced professionals is here to transform your ideas into unforgettable experiences. With a client-centric approach, creativity at our core, and a track record of delivering exceptional results, EVENTO is your trusted partner in creating extraordinary moments that last a lifetime. Let's collaborate to bring your event to life and make it an unforgettable success.
    //     </p>
    //     <div class="social-icons-container">
    //       <a class="social-icon">
    //         <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"/>
    //       </a>
    //       <a class="social-icon">
    //         <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"/>
    //       </a>
    //       <a class="social-icon">
    //         <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"/>
    //       </a>
    //       <a class="social-icon">
    //         <img class="socialIcon image-block" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"/>
    //       </a>
    //     </div>
    //   </div>
    // </div>
    <div className="Aboutttt">
      <div>
        <Header/>
      </div>
      <div className="About-box">

      
      <section class="about section" id="about">
        <div class="about__container containerr grid">
          <h2 class="section__title-1">
            <span>About Us.</span>
          </h2>

          <div class="about__perfil">
            <div class="about__image">
              <img src={About} alt="image" class="about__img" />

              <div class="about__shadow"></div>

              <div class="geometric-box"></div>

              <div class="about__box"></div>
            </div>
          </div>

          <div class="about__info">
            <p class="about__description">
              Welcome to EVENTO, where event excellence meets seamless
              execution. With a passion for turning visions into reality, we
              have been a driving force for maintaining events at smooth pace.
              At EVENTO, we pride ourselves on our unwavering commitment to
              perfection, ensuring that every detail of your event is
              meticulously curated and flawlessly executed. From intimate
              celebrations to grand corporate affairs, our dedicated team of
              experienced professionals is here to transform your ideas into
              unforgettable experiences. With a client-centric approach,
              creativity at our core, and a track record of delivering
              exceptional results, EVENTO is your trusted partner in creating
              extraordinary moments that last a lifetime. Let's collaborate to
              bring your event to life and make it an unforgettable success.
            </p>
            
          </div>
          <div class="social-icons-container">
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb33.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb34.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb35.png"
              />
            </a>
            <a class="social-icon">
              <img
                class="socialIcon image-block"
                src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/bb36.png"
              />
            </a>
          </div> 
        </div>

         
      </section>
      </div>
    </div>
  );
};

export default aboutus;
