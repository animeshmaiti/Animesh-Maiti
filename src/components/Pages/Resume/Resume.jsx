import { Education } from './Education';
import { Experience } from './Experience';
import { Skills } from './Skills';
export const Resume = () => {
  return (
    <article className='resume active' data-page='resume'>
      <header>
        <h2 className='h2 article-title'>Resume</h2>
      </header>
      <Education />
      <Experience />
      <Skills />
    </article>
  );
};
