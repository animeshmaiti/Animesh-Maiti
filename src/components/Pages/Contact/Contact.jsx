import { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { paperPlaneOutline } from 'ionicons/icons';
import emailjs from '@emailjs/browser';


export const Contact = () => {
  const serviceId = import.meta.env.VITE_APP_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // check if form is valid
    const form = e.target.closest('form');
    setIsFormValid(form.checkValidity());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Please fill all the fields');
      return;
    }
    emailjs
      .send(
        serviceId,
        templateId,
        {
          user_name: formData.fullName,
          user_email: formData.email,
          message: formData.message,
        },
        publicKey
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          setFormData({
            fullName: '',
            email: '',
            message: '',
          });

        },
        (error) => {
          console.error('Failed to send message:', error.text);
        }
      );
  };

  return (
    <article className='contact' data-page='contact'>
      <header>
        <h2 className='h2 article-title'>Contact</h2>
      </header>

      <section className='mapbox' data-mapbox>
        <figure>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7481.288041800725!2d85.81987715385534!3d20.356319542877074!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724477246818!5m2!1sen!2sin'
            width='400'
            height='300'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </figure>
      </section>

      <section className='contact-form'>
        <h3 className='h3 form-title'>Contact Form</h3>

        <form className='form' onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <input
              type='text'
              name='fullName'
              className='form-input'
              placeholder='Full name'
              required
              value={formData.fullName}
              onChange={handleChange}
            />

            <input
              type='email'
              name='email'
              className='form-input'
              placeholder='example@service.domain'
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <textarea
            name='message'
            className='form-input'
            placeholder='Your Message'
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button className='form-btn' type='submit' disabled={!isFormValid}>
            <IonIcon icon={paperPlaneOutline}></IonIcon>
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
};
