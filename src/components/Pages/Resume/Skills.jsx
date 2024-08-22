const SkillsData = [
  {
    title: 'Web design',
    value: 80,
  },
  {
    title: 'Graphic design',
    value: 70,
  },
  {
    title: 'Branding',
    value: 90,
  },
  {
    title: 'WordPress',
    value: 50,
  },
];

export const Skills = () => {
  return (
    <section className="skill">
      <h3 className="h3 skills-title">My skills</h3>

      <ul className="skills-list content-card">
        {SkillsData.map((skill, index) => (
          <li key={index} className="skills-item">
            <div className="title-wrapper">
              <h5 className="h5">{skill.title}</h5>
              <data value={`${skill.value}`}>{skill.value}%</data>
            </div>

            <div className="skill-progress-bg">
              <div
                className="skill-progress-fill"
                style={{ width: `${skill.value}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
