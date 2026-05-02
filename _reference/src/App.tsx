import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { Placeholder } from './pages/Placeholder';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Placeholder />} />
          <Route path="services" element={<Placeholder />} />
          <Route path="services/cleaning" element={<Placeholder />} />
          <Route path="services/maintenance" element={<Placeholder />} />
          <Route path="services/traffic-control" element={<Placeholder />} />
          <Route path="services/lawn-care" element={<Placeholder />} />
          <Route path="projects" element={<Placeholder />} />
          <Route path="contact" element={<Placeholder />} />
          <Route path="*" element={<Placeholder />} />
        </Route>
      </Routes>
    </BrowserRouter>);

}