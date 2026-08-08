/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LocationLanding from './pages/LocationLanding';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atakent-kuafor" element={<LocationLanding location="Atakent" />} />
        <Route path="/kucukcekmece-kuafor" element={<LocationLanding location="Küçükçekmece" />} />
      </Routes>
    </BrowserRouter>
  );
}

