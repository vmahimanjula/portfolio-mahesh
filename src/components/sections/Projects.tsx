import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionHeading
          index="04 / Projects"
          title="Selected work."
          subtitle="Enterprise products and internal tools I've helped design and build from the ground up."
        />

        <div className="projects__list">
          {projects.map((project, i) => (
            <motion.article
              key={project.name}
              className="project glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              data-hover
            >
              <div className="project__top">
                <span className="project__number">0{i + 1}</span>
                <span className="project__role">{project.role}</span>
              </div>

              <h3 className="project__name">{project.name}</h3>
              <p className="project__desc">{project.description}</p>

              <ul className="project__highlights">
                {project.highlights.map((h) => (
                  <li key={h}>
                    <Icon name="spark" size={15} />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="project__tags">
                {project.tags.map((t) => (
                  <span key={t} className="project__tag">
                    {t}
                  </span>
                ))}
              </div>

              <span className="project__shine" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
