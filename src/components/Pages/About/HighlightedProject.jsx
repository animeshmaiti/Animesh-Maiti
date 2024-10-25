import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';

import quoteIcon from '@assets/icon-quote.svg';
import { projectData } from '../../Data/Data';

export const HighlightedProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };
  return (
    <>
      <section className='projects'>
        <h3 className='h3 projects-title'>Highlighted Projects</h3>

        <ul className='projects-list has-scrollbar'>
          {projectData.map((project, index) => (
            <li key={index} className='projects-item'>
              <div className='content-card' onClick={() => openModal(project)}>
                <figure className='projects-avatar-box'>
                  <img src={project.avatar} alt={project.name} width='40' />
                </figure>

                <h4 className='h4 projects-item-title'>{project.name}</h4>

                <div className='projects-text'>
                  <p>{project.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* - projects modal */}

      {isModalOpen && (
        <div className='modal-container'>
          <div className='overlay' onClick={closeModal}></div>

          <section className='projects-modal'>
            <button className='modal-close-btn' onClick={closeModal}>
              <IonIcon icon={closeOutline}></IonIcon>
            </button>

            <div className='modal-img-wrapper'>
              <figure className='modal-avatar-box'>
                <img
                  src={selectedProject.avatar}
                  alt={selectedProject.name}
                  width='80'
                />
              </figure>

              <img src={quoteIcon} alt='quote icon' />
            </div>

            <div className='modal-content'>
              <h4 className='h3 modal-title'>{selectedProject.name}</h4>

              <time dateTime='2021-06-14'>14 June, 2021</time>

              <div>
                <p style={{ whiteSpace: 'pre-wrap' }}>{selectedProject.text}</p>
                <a href={selectedProject.link} target='_blank'>Project Link</a>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
