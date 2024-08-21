import logoComp from '@assets/logo-1-color.png';

const clientsData = [
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
  {
    link: '#',
    img: logoComp,
  },
];

export const Clients = () => {
  return (
    <section className="clients">
      <h3 className="h3 clients-title">Clients</h3>

      <ul className="clients-list has-scrollbar">
        {clientsData.map((clientData, index) => (
          <li key={index} className="clients-item">
            <a href={clientData.link}>
              <img src={clientData.img} alt="client logo" />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
