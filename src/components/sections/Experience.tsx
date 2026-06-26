import { motion } from 'framer-motion';
import { experiences } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionHeading
          index="03 / Experience"
          title="Where I've been building."
          subtitle="Hands-on experience shipping enterprise-grade products in fast-moving teams."
        />

        <div className="timeline">
          <motion.span
            className="timeline__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          />

          {experiences.map((exp, i) => (
            <motion.article
              key={`${exp.company}-${exp.title}`}
              className="timeline__item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <span className="timeline__dot">
                <Icon name={exp.type === 'work' ? 'briefcase' : 'spark'} size={16} />
              </span>

              <div className="timeline__card glass" data-hover>
                <div className="timeline__head">
                  <div>
                    <h3 className="timeline__role">{exp.title}</h3>
                    <p className="timeline__company">{exp.company}</p>
                  </div>
                  <span className="timeline__period">{exp.period}</span>
                </div>
                <p className="timeline__location">
                  <Icon name="location" size={14} /> {exp.location}
                </p>
                <ul className="timeline__points">
                  {exp.points.map((p, idx) => (
                    <li key={idx}>
                      <span className="timeline__bullet" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
