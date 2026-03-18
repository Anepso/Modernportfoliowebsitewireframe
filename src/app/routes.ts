import { createBrowserRouter } from 'react-router';
import Root from './pages/Root';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import DesignSystem from './pages/DesignSystem';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'projects', Component: Projects },
      { path: 'about', Component: About },
      { path: 'contact', Component: Contact },
      { path: 'design-system', Component: DesignSystem },
    ],
  },
]);
