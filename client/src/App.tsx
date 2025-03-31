import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import HeroSection from './components/landing/Hero';
import Landing from './pages/Landing';

function App() {
    return (
        <ThemeProvider storageKey='vite-ui-theme'>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
