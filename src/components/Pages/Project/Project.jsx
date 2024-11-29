import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { chevronDown, eyeOutline } from 'ionicons/icons';

import { ProjectListData } from '../../Data/Data';

export const Project = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeButton, setActiveButton] = useState('All');
  const [isOpen, setIsOpen] = useState(false);
  const categories = ['All', 'Machine Learning', 'Web App'];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
    setActiveButton(category);
    setIsOpen(false);
  };

  const filteredProjects = ProjectListData.filter(
    (project) =>
      selectedCategory === 'All' || project.category === selectedCategory
  );
  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="h2 article-title">Projects</h2>
      </header>

      <section className="projects">
        {/* desktop version list all visible */}
        <ul className="filter-list">
          {categories.map((category, index) => (
            <li key={index} className="filter-item">
              <button
                className={activeButton === category ? 'active' : ''}
                onClick={() => handleFilterClick(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
        {/* mobile view dropdown menu*/}
        <div className="filter-select-box">
          {/* Dropdown Button */}
          <button
            className={`filter-select ${isOpen ? 'active' : ''}`}
            onClick={toggleDropdown}
          >
            <div className="select-value">{selectedCategory}</div>

            <div className="select-icon">
              <IonIcon icon={chevronDown}></IonIcon>
            </div>
          </button>

          {/* Dropdown List */}
          <ul className={`select-list ${isOpen ? 'active' : ''}`}>
            {categories.map((category, index) => (
              <li key={index} className="select-item">
                <button onClick={() => handleFilterClick(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className={`project-item ${
                selectedCategory === project.category ||
                selectedCategory === 'All'
                  ? 'active'
                  : ''
              }`}
              data-category={project.category}
            >
              <a href={project.link} target="_blank">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IonIcon
                      className="md hydrated"
                      icon={eyeOutline}
                    ></IonIcon>
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
