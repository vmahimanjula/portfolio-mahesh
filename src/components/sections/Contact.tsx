import { motion } from 'framer-motion';
import { profile } from '@/data/portfolio';
import SectionHeading from '@/components/ui/SectionHeading';
import Icon from '@/components/ui/Icon';
import './Contact.css';

const channels = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'manjula-v-mahesh',
    href: profile.linkedin,
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'vmahimanjula',
    href: profile.github,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionHeading
          index="06 / Contact"
          title="Let's work together."
          subtitle="I'm open to front-end roles, collaborations and freelance work. Reach out through any of these."
        />

        <div className="contact__grid">
          {channels.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="contact__card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              data-hover
            >
              <span className="contact__icon">
                <Icon name={c.icon} size={22} />
              </span>
              <div className="contact__info">
                <span className="contact__label">{c.label}</span>
                <span className="contact__value">{c.value}</span>
              </div>
              <span className="contact__arrow">
                <Icon name="arrowUpRight" size={18} />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
