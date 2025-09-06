import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PlexTutorial from './pages/tutorials/PlexTutorial';
import OverseerrTutorial from './pages/tutorials/OverseerrTutorial';
import KomgaTutorial from './pages/tutorials/KomgaTutorial';
import NextcloudTutorial from './pages/tutorials/NextcloudTutorial';
import BitwardenTutorial from './pages/tutorials/BitwardenTutorial';
import Header from './components/Header';
import Footer from './components/Footer';
export function App() {
  return <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tutoriels/plex" element={<PlexTutorial />} />
            <Route path="/tutoriels/overseerr" element={<OverseerrTutorial />} />
            <Route path="/tutoriels/komga" element={<KomgaTutorial />} />
            <Route path="/tutoriels/nextcloud" element={<NextcloudTutorial />} />
            <Route path="/tutoriels/bitwarden" element={<BitwardenTutorial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>;
}