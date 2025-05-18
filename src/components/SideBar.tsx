import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaHome, 
  FaBook, 
  FaPlus, 
  FaCog, 
  FaBookmark,
  FaFileExport,
  FaGraduationCap,
  FaChevronRight,
  FaFileCsv,
  FaFileCode
} from 'react-icons/fa';
import { useExportContext } from '../context/ExportContext';

const SideBar: React.FC = () => {
  const location = useLocation();
  const [collapsed] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [showExportDropdown, setShowExportDropdown] = useState(false);
  const exportDropdownRef = useRef<HTMLDivElement>(null);
  const { exportToJson, exportToCsv } = useExportContext();



  const toggleExportDropdown = () => {
    setShowExportDropdown(!showExportDropdown);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (exportDropdownRef.current && !exportDropdownRef.current.contains(event.target as Node)) {
        setShowExportDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const menuItems = [
    { 
      path: '/dashboard', 
      name: 'Dashboard', 
      icon: <FaHome />, 
      description: 'Overview of your academic progress'
    },
    { 
      path: '/courses', 
      name: 'Courses', 
      icon: <FaBook />, 
      description: 'Manage your course list and grades'
    },
    { 
      path: '/optional-subjects', 
      name: 'Optional Subjects', 
      icon: <FaBookmark />, 
      description: 'Select optional courses for your GPA'
    },
    { 
      path: '/add-course', 
      name: 'Add Course', 
      icon: <FaPlus />, 
      description: 'Add a new course to your record'
    },
    { 
      path: '/settings', 
      name: 'Settings', 
      icon: <FaCog />, 
      description: 'Configure application settings'
    },
  ];

  return (
    <div 
      className={`h-full bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Header with App Title */}
      <div className="p-4 border-b border-gray-700 flex items-center justify-between">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
            <FaGraduationCap className="text-white text-xl" />
          </div>
          
          {!collapsed && (
            <div className="ml-3">
              <h1 className="text-xl font-bold text-white">GPA Calculator</h1>
              <p className="text-xs text-blue-300">by Suneth Udayanga</p>
            </div>
          )}
        </div>
        
        {/* <button 
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white focus:outline-none transition-colors"
        >
          {collapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button> */}
      </div>

      {/* Menu Items */}
      <div className="flex-grow py-4 flex flex-col">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          
          return (
            <Link 
              to={item.path} 
              key={item.path}
              className={`relative flex items-center px-4 py-3 mb-1 mx-2 rounded-lg transition-all duration-200 group ${
                isActive 
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md' 
                  : 'text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`text-xl ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                {item.icon}
              </div>
              
              {!collapsed && (
                <span className="ml-3">{item.name}</span>
              )}
              
              {/* Active indicator */}
              {isActive && (
                <span className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-blue-300 rounded-l-full"></span>
              )}
              
              {/* Tooltip for collapsed mode */}
              {collapsed && hoveredItem === item.path && (
                <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-10 whitespace-nowrap">
                  <div className="font-medium mb-1">{item.name}</div>
                  <div className="text-xs text-gray-300">{item.description}</div>
                </div>
              )}
            </Link>
          );
        })}
      </div>

      {/* Quick Stats Section */}
      {!collapsed && (
        <div className="px-4 py-3 border-t border-b border-gray-700">
          <h3 className="text-xs uppercase text-gray-500 font-medium mb-2">Quick Stats</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-700 rounded-lg p-2 text-center">
              <div className="text-xs text-gray-400">Credits</div>
              <div className="text-lg font-bold text-white flex items-center justify-center">
                <FaGraduationCap className="text-blue-400 mr-1 text-sm" />
                <span>120</span>
              </div>
            </div>
            <div className="bg-gray-700 rounded-lg p-2 text-center">
              <div className="text-xs text-gray-400">Courses</div>
              <div className="text-lg font-bold text-white flex items-center justify-center">
                <FaBook className="text-green-400 mr-1 text-sm" />
                <span>42</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="p-4 border-t border-gray-700 mt-auto">
        {!collapsed ? (
          <>
            <div className="relative" ref={exportDropdownRef}>
              <button 
                className="flex items-center w-full px-3 py-2 text-sm text-gray-400 hover:text-white bg-gray-700 hover:bg-gray-600 rounded-lg mb-3 transition-colors"
                onClick={toggleExportDropdown}
              >
                <FaFileExport className="mr-2" />
                Export Data
                <FaChevronRight className={`ml-auto transition-transform duration-200 ${showExportDropdown ? 'rotate-90' : ''}`} />
              </button>
              
              {showExportDropdown && (
                <div className="absolute bottom-full mb-1 left-0 w-full bg-gray-700 rounded-lg shadow-lg overflow-hidden z-10">
                  <button 
                    className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                    onClick={() => {
                      exportToJson();
                      setShowExportDropdown(false);
                    }}
                  >
                    <FaFileCode className="mr-2 text-blue-400" />
                    Export as JSON
                  </button>
                  <button 
                    className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                    onClick={() => {
                      exportToCsv();
                      setShowExportDropdown(false);
                    }}
                  >
                    <FaFileCsv className="mr-2 text-green-400" />
                    Export as CSV
                  </button>
                </div>
              )}
            </div>
            <div className="flex justify-between text-xs text-gray-500">
              <p>Version 3.6.194</p>
              <p>© 2025</p>
            </div>
          </>
        ) : (
          <div className="flex justify-center relative" ref={exportDropdownRef}>
            <button 
              className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
              onClick={toggleExportDropdown}
            >
              <FaFileExport />
            </button>
            
            {showExportDropdown && (
              <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-gray-700 rounded-lg shadow-lg overflow-hidden z-10 w-32">
                <button 
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                  onClick={() => {
                    exportToJson();
                    setShowExportDropdown(false);
                  }}
                >
                  <FaFileCode className="mr-2 text-blue-400" />
                  JSON
                </button>
                <button 
                  className="flex items-center w-full px-3 py-2 text-sm text-gray-300 hover:bg-gray-600 transition-colors"
                  onClick={() => {
                    exportToCsv();
                    setShowExportDropdown(false);
                  }}
                >
                  <FaFileCsv className="mr-2 text-green-400" />
                  CSV
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
