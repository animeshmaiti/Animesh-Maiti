import avatar from '../assets/my-avatar.png';
import { IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

export const Sidebar = () => {
  return (
    <aside className="sidebar w-auto sticky top-16 max-h-max h-full mb-0 pt-16 z-[1]">
      <div className="relative flex flex-col justify-start items-center gap-3.5">
        <figure className="avatar-box">
          <img
            src={avatar}
            alt="Animesh Maiti"
            className='w-36'
          />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Animesh Maiti">
            Animesh Maiti
          </h1>

          <p className="title">Full Stack Developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <ion-icon name="chevron-down"></ion-icon>
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
            <IonIcon icon={logoIonic}></IonIcon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:omtestmail@gmail.com" className="contact-link">
                omtestmail@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="phone-portrait-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+12133522795" className="contact-link">
                +91 935960743
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="calendar-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>
              <time dateTime="1982-06-23">2 March, 2003</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Pune, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
