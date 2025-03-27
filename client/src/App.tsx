import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from './components/mode-toggle';

function App() {
    return (
        <ThemeProvider storageKey='vite-ui-theme'>
            <ModeToggle />
            <Router>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
