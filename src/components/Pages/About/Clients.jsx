import { languageData } from '../../Data/Data';

export const Clients = () => {
  return (
    <section className="languages">
      <h3 className="h3 languages-title">Languages and Tools</h3>
      {/* has-scrollbar */}
      <ul className="languages-list">
        {languageData.map((clientData, index) => (
          <li key={index} className="languages-item">
            <img src={clientData} alt="client logo" />
          </li>
        ))}
      </ul>
    </section>
  );
};
