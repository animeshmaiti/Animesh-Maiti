import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import {closeOutline} from 'ionicons/icons'

import quoteIcon from '@assets/icon-quote.svg';
import avatar1 from '@assets/avatar-1.png';

const testimonialsData = [
    {
      avatar: avatar1,
      name: 'Rohit Patil',
      text: `Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor
              sit amet, ullamcous cididt consectetur adipiscing elit, seds
              do et eiusmod tempor incididunt ut laborels dolore magnarels
              alia.`,
    },
    {
      avatar: avatar1,
      name: 'Rohit Patil',
      text: `Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor
              sit amet, ullamcous cididt consectetur adipiscing elit, seds
              do et eiusmod tempor incididunt ut laborels dolore magnarels
              alia.`,
    },
    {
      avatar: avatar1,
      name: 'Rohit Patil',
      text: `Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor
              sit amet, ullamcous cididt consectetur adipiscing elit, seds
              do et eiusmod tempor incididunt ut laborels dolore magnarels
              alia.`,
    },
    {
      avatar: avatar1,
      name: 'Rohit Patil',
      text: `Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor
              sit amet, ullamcous cididt consectetur adipiscing elit, seds
              do et eiusmod tempor incididunt ut laborels dolore magnarels
              alia.`,
    },
  ];

export const Testimonial = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  const openModal = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedTestimonial(null);
  };
  return (
    <>
      <section className="testimonials">
        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {testimonialsData.map((testimonial, index) => (
            <li key={index} className="testimonials-item">
              <div
                className="content-card"
                onClick={() => openModal(testimonial)}
              >
                <figure className="testimonials-avatar-box">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width="60"
                  />
                </figure>

                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>

                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* - testimonials modal */}

      {isModalOpen && (
        <div className="modal-container">
          <div className="overlay" onClick={closeModal}></div>

          <section className="testimonials-modal">
            <button className="modal-close-btn" onClick={closeModal}>
              <IonIcon icon={closeOutline}></IonIcon>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <img
                  src={selectedTestimonial.avatar}
                  alt={selectedTestimonial.name}
                  width="80"
                />
              </figure>

              <img src={quoteIcon} alt="quote icon" />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{selectedTestimonial.name}</h4>

              <time dateTime="2021-06-14">14 June, 2021</time>

              <div>
                <p>{selectedTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};
