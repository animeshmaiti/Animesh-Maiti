import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDown, eyeOutline } from 'ionicons/icons';

import { ProjectListData } from '../../Data/Data';

export const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeButton, setActiveButton] = useState('All');

  const handleFilterClick = (category, buttonName) => {
    setSelectedCategory(category);
    setActiveButton(buttonName);
  };

  const filteredProjects = ProjectListData.filter(
    (project) =>
      selectedCategory === 'all' || project.category === selectedCategory
  );
  return (
    <article className='portfolio' data-page='portfolio'>
      <header>
        <h2 className='h2 article-title'>Projects</h2>
      </header>

      <section className='projects'>
        <ul className='filter-list'>
          <li className='filter-item'>
            <button
              className={activeButton === 'All' ? 'active' : ''}
              onClick={() => handleFilterClick('all', 'All')}
            >
              All
            </button>
          </li>

          <li className='filter-item'>
            <button
              className={activeButton === 'Machine Learning' ? 'active' : ''}
              onClick={() => handleFilterClick('Machine Learning', 'Machine Learning')}
            >
              Machine Learning
            </button>
          </li>

          <li className='filter-item'>
            <button
              className={activeButton === 'Web App' ? 'active' : ''}
              onClick={() =>
                handleFilterClick('Web App', 'Web App')
              }
            >
              Web App
            </button>
          </li>
        </ul>

         <div className='filter-select-box'>

            <button className='filter-select' data-select>

              <div className='select-value' data-selecct-value>Select category</div>

              <div className='select-icon'>
                <IonIcon icon={chevronDown}></IonIcon>
              </div>

            </button>

            <ul className='select-list'>

              <li className='select-item'>
                <button data-select-item>All</button>
              </li>

              <li className='select-item'>
                <button data-select-item>Web design</button>
              </li>

              <li className='select-item'>
                <button data-select-item>Applications</button>
              </li>

              <li className='select-item'>
                <button data-select-item>Web development</button>
              </li>

            </ul>

          </div>

        <ul className='project-list'>
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className={`project-item ${
                selectedCategory === project.category ||
                selectedCategory === 'all'
                  ? 'active'
                  : ''
              }`}
              data-category={project.category}
            >
              <a href={project.link} target='_blank'>
                <figure className='project-img'>
                  <div className='project-item-icon-box'>
                    <IonIcon className='md hydrated' icon={eyeOutline}></IonIcon>
                  </div>

                  <img src={project.img} alt={project.title} loading='lazy' />
                </figure>

                <h3 className='project-title'>{project.title}</h3>

                <p className='project-category'>{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
