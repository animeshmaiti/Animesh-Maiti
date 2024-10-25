import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';

import { EducationData } from '../../Data/Data';

export const Education = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <IonIcon icon={bookOutline}></IonIcon>
        </div>

        <h3 className='h3'>Education</h3>
      </div>

      <ol className='timeline-list'>
        {EducationData.map((education, index) => (
          <li key={index} className='timeline-item'>
            <h4 className='h4 timeline-item-title'>{education.title}</h4>

            <span>{education.date}</span>

            <p className='timeline-text'>{education.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
