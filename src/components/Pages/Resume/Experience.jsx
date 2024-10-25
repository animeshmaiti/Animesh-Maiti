import { IonIcon } from '@ionic/react';
import { checkmarkDoneOutline, downloadOutline } from 'ionicons/icons';
import resume from '@assets/Animesh_Maiti.pdf';
import { ExperienceData } from '../../Data/Data';

export const Experience = () => {
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = resume;
    link.setAttribute('download', 'Animesh_Maiti.pdf'); // name the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
      <button className="btn" onClick={() => downloadPDF()}>
        <IonIcon icon={downloadOutline}></IonIcon>
        <span>Download Resume</span>
      </button>
    </section>
  );
};
