import { IonIcon } from '@ionic/react';
import { bookOutline } from 'ionicons/icons';

const EducationData = [
  {
    title: 'University Of Engineering Pune',
    date: '2021 — 2024',
    description:
      'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    title: 'University Of Engineering Pune',
    date: '2021 — 2024',
    description:
      'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    title: 'University Of Engineering Pune',
    date: '2021 — 2024',
    description:
      'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
  {
    title: 'University Of Engineering Pune',
    date: '2021 — 2024',
    description:
      'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.',
  },
];

export const Education = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={bookOutline}></IonIcon>
        </div>

        <h3 className="h3">Education</h3>
      </div>

      <ol className="timeline-list">
        {EducationData.map((education, index) => (
          <li key={index} className="timeline-item">
            <h4 className="h4 timeline-item-title">{education.title}</h4>

            <span>{education.date}</span>

            <p className="timeline-text">{education.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
