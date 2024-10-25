import avatar from '../assets/my-avatar.png';
import { IonIcon } from '@ionic/react';
import {
  mailOutline,
  phonePortraitOutline,
  calendarOutline,
  locationOutline,
  logoFacebook,
  logoTwitter,
  logoGithub,
  chevronDown,
} from 'ionicons/icons';
import { useState } from 'react';

export const Sidebar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    if (active){
      setActive(false);
    }else{
      setActive(true);
    }
  };

  return (
    <aside className={active?'sidebar active':'sidebar'}>
      <div className='sidebar-info'>
        <figure className='avatar-box'>
          <img src={avatar} alt='Animesh Maiti' width='80' />
        </figure>

        <div className='info-content'>
          <h1 className='name' title='Animesh Maiti'>
            Animesh Maiti
          </h1>

          <p className='title'>Full Stack Developer</p>
        </div>

        <button className='info_more-btn' onClick={isActive}>
          <span>Show Contacts</span>

          <IonIcon icon={chevronDown}></IonIcon>
        </button>
      </div>

      <div className='sidebar-info_more'>
        <div className='separator'></div>

        <ul className='contacts-list'>
          <li className='contact-item'>
            <div className='icon-box'>
              <IonIcon icon={mailOutline}></IonIcon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Email</p>

              <a href='mailto:a.maiti770@gmail.com' className='contact-link'>
                a.maiti770@gmail.com
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IonIcon icon={phonePortraitOutline}></IonIcon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Phone</p>

              <a href='tel:+918597668032' className='contact-link'>
                +91 8597668032
              </a>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IonIcon icon={calendarOutline}></IonIcon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Birthday</p>
              <time dateTime='1982-06-23'>25 Feb, 2002</time>
            </div>
          </li>

          <li className='contact-item'>
            <div className='icon-box'>
              <IonIcon icon={locationOutline}></IonIcon>
            </div>

            <div className='contact-info'>
              <p className='contact-title'>Location</p>
              <address>Bhubaneswar, India</address>
            </div>
          </li>
        </ul>

        <div className='separator'></div>

        <ul className='social-list'>
          <li className='social-item'>
            <a href='https://www.facebook.com/animesh.maiti.566' className='social-link' target='_blank'>
              <IonIcon icon={logoFacebook}></IonIcon>
            </a>
          </li>

          <li className='social-item'>
            <a href='https://x.com/AnimeshMaiti7' className='social-link' target='_blank'>
              <IonIcon icon={logoTwitter}></IonIcon>
            </a>
          </li>

          <li className='social-item'>
            <a href='https://github.com/animeshmaiti' className='social-link' target='_blank'>
              <IonIcon icon={logoGithub}></IonIcon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};
