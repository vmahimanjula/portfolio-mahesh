import { motion } from 'framer-motion';
import { education } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionHeading index="05 / Education" title="Academic background." />

        <div className="education__list">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              className="education__card glass"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              data-hover
            >
              <span className="education__icon">
                <Icon name="cap" size={26} />
              </span>
              <div className="education__body">
                <h3 className="education__degree">
                  {edu.degree} · <span className="gradient-text">{edu.field}</span>
                </h3>
                <p className="education__inst">{edu.institution}</p>
              </div>
              <div className="education__meta">
                <span className="education__period">{edu.period}</span>
                <span className="education__score">{edu.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
