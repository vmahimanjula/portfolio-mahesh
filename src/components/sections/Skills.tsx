import { motion } from 'framer-motion';
import { skillCategories } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <SectionHeading
          index="02 / Skills"
          title="My technical toolkit."
          subtitle="The languages, frameworks and tools I reach for to ship reliable, scalable front-ends."
        />

        <div className="skills__grid">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              className="skill-card glass"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -8 }}
              data-hover
            >
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={cat.icon} size={22} />
                </span>
                <h3 className="skill-card__title">{cat.title}</h3>
              </div>
              <div className="skill-card__tags">
                {cat.skills.map((s) => (
                  <span key={s} className="skill-tag">
                    {s}
                  </span>
                ))}
              </div>
              <span className="skill-card__glow" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
