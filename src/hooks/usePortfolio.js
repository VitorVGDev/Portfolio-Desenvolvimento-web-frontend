import { useContext } from 'react';
import portfolioContext from '../context/portfolioContext';

export function usePortfolio() {
  const context = useContext(portfolioContext);

  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }

  return context;
}