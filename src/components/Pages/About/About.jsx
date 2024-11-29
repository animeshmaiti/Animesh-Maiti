import { Tools } from './Tools';
import { Services } from './Services';
import { HighlightedProject } from './HighlightedProject';

export const About = () => {
  return (
    <article className='about active' data-page='about'>
      <header>
        <h2 className='h2 article-title'>About me</h2>
      </header>
      <section className='about-text'>
        <p>
          Hi! I'm Animesh Maiti, a passionate engineer with a background in
          Electronics and Computer Science Engineering, currently exploring the
          intersections of web development, machine learning, and cloud
          solutions. Over the past few years, I've enjoyed tackling projects
          from creating real-time chat applications to building ML models for
          EEG data analysis to aid in dyslexia prediction.
        </p>
        <p>
          My technical stack includes Python, C++, React, Node.js, and
          TensorFlow, with recent work in AWS architecture for web hosting and
          cost optimization. Currently, I'm working on enhancing my skills in
          scalable model deployment and cost-efficient cloud design.
        </p>
        <p>
          I'm always eager to learn and open to new challenges—especially if
          they involve using innovative tech to solve real-world problems. When
          I'm not coding, you can find me reading, gaming, or sleeping.
        </p>
      </section>
      <Services />
      <HighlightedProject />
      <Tools />
    </article>
  );
};
