import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDown, eyeOutline } from 'ionicons/icons';

import project1 from '@assets/project-1.jpg';

const ProjectListData = [
  {
    title: 'Finance',
    category: 'web development',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'web development',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'web design',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'applications',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'web design',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'web design',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'applications',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'web development',
    img: project1,
    link: '#',
  },
  {
    title: 'Finance',
    category: 'applications',
    img: project1,
    link: '#',
  },
];

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
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        <ul className="filter-list">
          <li className="filter-item">
            <button
              className={activeButton === 'All' ? 'active' : ''}
              onClick={() => handleFilterClick('all', 'All')}
            >
              All
            </button>
          </li>

          <li className="filter-item">
            <button
              className={activeButton === 'Web design' ? 'active' : ''}
              onClick={() => handleFilterClick('web design', 'Web design')}
            >
              Web design
            </button>
          </li>

          <li className="filter-item">
            <button
              className={activeButton === 'Applications' ? 'active' : ''}
              onClick={() => handleFilterClick('applications', 'Applications')}
            >
              Applications
            </button>
          </li>

          <li className="filter-item">
            <button
              className={activeButton === 'Web development' ? 'active' : ''}
              onClick={() =>
                handleFilterClick('web development', 'Web development')
              }
            >
              Web development
            </button>
          </li>
        </ul>

         <div className="filter-select-box">

            <button className="filter-select" data-select>

              <div className="select-value" data-selecct-value>Select category</div>

              <div className="select-icon">
                <IonIcon icon={chevronDown}></IonIcon>
              </div>

            </button>

            <ul className="select-list">

              <li className="select-item">
                <button data-select-item>All</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web design</button>
              </li>

              <li className="select-item">
                <button data-select-item>Applications</button>
              </li>

              <li className="select-item">
                <button data-select-item>Web development</button>
              </li>

            </ul>

          </div>

        <ul className="project-list">
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
              <a href={project.link}>
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon className='md hydrated' icon={eyeOutline}></IonIcon>
                  </div>

                  <img src={project.img} alt={project.title} loading="lazy" />
                </figure>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
