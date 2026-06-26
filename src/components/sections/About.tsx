import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import './About.css';

const facts = [
  { icon: 'location', label: 'Based in', value: 'Chennai, India' },
  { icon: 'briefcase', label: 'Currently', value: 'Front-End Developer @ Photon' },
  { icon: 'code', label: 'Focus', value: 'React · TypeScript · UI Systems' },
  { icon: 'spark', label: 'Also into', value: 'AI & Computer Vision' },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionHeading
          index="01 / About"
          title="Turning complex problems into clean interfaces."
        />

        <div className="about__grid">
          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p>{profile.summary}</p>
            <p className="about__highlight">
              I love building <span className="gradient-text">reusable component
              architectures</span> and enterprise-grade UIs that feel fast,
              accessible and delightful to use.
            </p>
          </motion.div>

          <div className="about__facts">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                className="about__fact glass"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                data-hover
              >
                <span className="about__fact-icon">
                  <Icon name={f.icon} size={20} />
                </span>
                <div>
                  <span className="about__fact-label">{f.label}</span>
                  <span className="about__fact-value">{f.value}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
