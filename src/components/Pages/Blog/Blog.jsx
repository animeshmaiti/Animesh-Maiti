import blog1 from '@assets/blog-1.jpg';

const blogPosts = [
  {
    link: '#',
    img: blog1,
    category: 'Design',
    date: 'Feb 23, 2022',
    title: 'Design conferences in 2022',
    sortDescription:
      'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    link: '#',
    img: blog1,
    category: 'Design',
    date: 'Feb 23, 2022',
    title: 'Design conferences in 2022',
    sortDescription:
      'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    link: '#',
    img: blog1,
    category: 'Design',
    date: 'Feb 23, 2022',
    title: 'Design conferences in 2022',
    sortDescription:
      'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    link: '#',
    img: blog1,
    category: 'Design',
    date: 'Feb 23, 2022',
    title: 'Design conferences in 2022',
    sortDescription:
      'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
  {
    link: '#',
    img: blog1,
    category: 'Design',
    date: 'Feb 23, 2022',
    title: 'Design conferences in 2022',
    sortDescription:
      'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
  },
];

export const Blog = () => {
  return (
    <article className="blog" data-page="blog">
      <header>
        <h2 className="h2 article-title">Blog</h2>
      </header>

      <section className="blog-posts">
        <ul className="blog-posts-list">
          {blogPosts.map((blog, index) => (
            <li key={index} className="blog-post-item">
              <a href={blog.link}>
                <figure className="blog-banner-box">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    loading="lazy"
                  />
                </figure>

                <div className="blog-content">
                  <div className="blog-meta">
                    <p className="blog-category">{blog.category}</p>

                    <span className="dot"></span>

                    <time dateTime={blog.date}>{blog.date}</time>
                  </div>

                  <h3 className="h3 blog-item-title">
                    {blog.title}
                  </h3>

                  <p className="blog-text">
                    {blog.sortDescription}
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};
