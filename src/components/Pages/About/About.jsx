import iconDesign from '@assets/icon-design.svg';
import { Testimonial } from './Testimonial';


export const About = () => {

  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Im Creative Director and UI/UX Designer from Sydney, Australia,
          working in web development and print media. I enjoy turning complex
          problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      {/* - service */}

      <section className="service">
        <h3 className="h3 service-title">What im doing</h3>

        <ul className="service-list">
          <li className="service-item">
            <div className="service-icon-box">
              <img src={iconDesign} alt="design icon" width="40" />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web design</h4>

              <p className="service-item-text">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-dev.svg"
                alt="Web development icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Web development</h4>

              <p className="service-item-text">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-app.svg"
                alt="mobile app icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Mobile apps</h4>

              <p className="service-item-text">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </li>

          <li className="service-item">
            <div className="service-icon-box">
              <img
                src="./assets/images/icon-photo.svg"
                alt="camera icon"
                width="40"
              />
            </div>

            <div className="service-content-box">
              <h4 className="h4 service-item-title">Photography</h4>

              <p className="service-item-text">
                I make high-quality photos of any category at a professional
                level.
              </p>
            </div>
          </li>
        </ul>
      </section>
      <Testimonial/>

      {/* - clients */}

      <section className="clients">
        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          <li className="clients-item">
            <a href="#">
              <img src="./assets/images/logo-1-color.png" alt="client logo" />
            </a>
          </li>
        </ul>
      </section>
    </article>
  );
};
