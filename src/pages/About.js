import React from 'react';
import '../styles/About.css'

const About = () => {
  return (

    <div className="about">
    <h2 className="about-title">About Us</h2>

          <div className="split-about">
          {/* Left section */}
          <div className="left-aboutsection">
              {/* content for left section */}
              <div className='about-card'>
                  <img src="https://images.pexels.com/photos/16010617/pexels-photo-16010617.jpeg?auto=compress&cs=tinysrgb&w=600" className='about-img'/>
              </div>


          </div>

          {/* Right section */}
          <div className="right-aboutsection">
              {/* content for right section */}
              <div className="about-text">
              <p>We are a recipe website dedicated to providing delicious and healthy meal ideas.</p>
                <p>Our team of expert chefs and nutritionists work hard to ensure that each recipe is not only tasty, but also packed with nutrients.</p>
                <p>Whether you're a beginner or a seasoned cook, our recipes are easy to follow and guaranteed to satisfy your taste buds.</p>
                <p>At our website, we believe that eating healthy should not mean sacrificing taste. That's why we strive to create recipes that are both nutritious and delicious.</p>
                <p>We understand that life can get busy, and sometimes it's hard to find the time to cook. That's why we offer a variety of quick and easy recipes that can be prepared in under 30 minutes.</p>
                {/* <p>In addition to our recipes, we also offer a wealth of information on nutrition and healthy eating. Our blog features articles on topics such as meal planning, food prep, and healthy eating habits.</p> */}
                <p>Thank you for visiting our website, and we hope that our recipes and resources can help you on your journey towards a healthier and happier life!</p>
              </div>

          </div>
          </div>
    </div>

  );
}

export default About;
