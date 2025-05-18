import React from 'react';
import { Routes, Route, MemoryRouter } from 'react-router-dom';
import './App.css';
import SideBar from './components/SideBar';

// Import pages
import Dashboard from './pages/Dashboard';
import Courses from './pages/Courses';
import OptionalSubjects from './pages/OptionalSubjects';
import AddCourse from './pages/AddCourse';
import Settings from './pages/Settings';

// Import context
import { CourseProvider } from './context/CourseContext';
import { ExportProvider } from './context/ExportContext';

const App: React.FC = () => {
  return (
    <CourseProvider>
      <ExportProvider>
        <MemoryRouter>
          <div className="flex h-screen w-full overflow-hidden">
            {/* Sidebar - 4/12 (1/3) of the width */}
            <div className="w-1/5 bg-blue-500">
              <SideBar />
            </div>
            
            {/* Main Content - 8/12 (2/3) of the width */}
            <div className="w-4/5 bg-gray-100 overflow-auto p-6">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/optional-subjects" element={<OptionalSubjects />} />
                <Route path="/add-course" element={<AddCourse />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </div>
          </div>
        </MemoryRouter>
      </ExportProvider>
    </CourseProvider>
  );
};

export default App;
