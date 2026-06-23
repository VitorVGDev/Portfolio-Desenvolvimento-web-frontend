import { useMemo } from 'react';
import PortfolioContext from './portfolioContext';

const portfolioData = {
  navigation: [
    { label: 'Home', path: '/' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Projetos', path: '/projetos' },
    { label: 'Contato', path: '/contato' },
  ],
  contact: {
    title: 'Contact',
    email: 'ibrhaimmemon930@gmail.com',
    phone: '+55 43 XXXXX-XXXX',
    description:
      "I'm currently looking to join a cross-functional team that values improving people's lives through accessible design. Or have a project in mind? Let's connect.",
    social: {
      instagram: 'https://www.instagram.com/',
      linkedin: 'https://www.linkedin.com/',
      email: 'mailto:ibrhaimmemon930@gmail.com',
    },
  },
};

export function PortfolioProvider({ children }) {
  const value = useMemo(() => portfolioData, []);

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
}
