/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LocationLanding from './pages/LocationLanding';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/atakent-kuafor" element={<LocationLanding location="Atakent" keyword="Kuaför" />} />
        <Route path="/atakent-bayan-kuaforu" element={<LocationLanding location="Atakent" keyword="Bayan Kuaförü" />} />
        <Route path="/atakent-kadin-kuaforu" element={<LocationLanding location="Atakent" keyword="Kadın Kuaförü" />} />
        <Route path="/kucukcekmece-kuafor" element={<LocationLanding location="Küçükçekmece" keyword="Kuaför" />} />
      </Routes>
    </BrowserRouter>
  );
}

