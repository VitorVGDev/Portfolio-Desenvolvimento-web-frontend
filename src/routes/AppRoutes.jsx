import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ProjectsPage from '../pages/ProjectsPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sobre" element={<AboutPage />} />
        <Route path="projetos" element={<ProjectsPage />} />
        <Route path="contato" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}