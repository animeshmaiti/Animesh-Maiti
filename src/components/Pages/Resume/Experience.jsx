import { IonIcon } from '@ionic/react';
import { checkmarkDoneOutline } from 'ionicons/icons';

const ExperienceData = [
  {
    title: 'Creative director',
    date: '2015 — Present',
    description:
      'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
  {
    title: 'Creative director',
    date: '2015 — Present',
    description:
      'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
  {
    title: 'Creative director',
    date: '2015 — Present',
    description:
      'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
  {
    title: 'Creative director',
    date: '2015 — Present',
    description:
      'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.',
  },
];

export const Experience = () => {
  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <IonIcon icon={checkmarkDoneOutline}></IonIcon>
        </div>

        <h3 className="h3">Experience</h3>
      </div>

      <ol className="timeline-list">
        {ExperienceData.map((experience, index) => (
          <li key={index} className="timeline-item">
            <h4 className="h4 timeline-item-title">{experience.title}</h4>

            <span>{experience.date}</span>

            <p className="timeline-text">{experience.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};
