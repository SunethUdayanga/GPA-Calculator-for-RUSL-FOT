import React, { useState } from 'react';
import { useCourseContext } from '../context/CourseContext';
import { 
  FaUniversity, 
  FaGraduationCap, 
  FaDatabase, 
  FaInfoCircle,
  FaCheck,
  FaExclamationTriangle,
  FaCloudDownloadAlt,
  FaCloudUploadAlt,
  FaTrashAlt
} from 'react-icons/fa';

const Settings: React.FC = () => {
  const { loadDepartmentData } = useCourseContext();
  const [selectedDepartment, setSelectedDepartment] = useState<string>(
    localStorage.getItem('selectedDepartment') || 'ICT'
  );
  const [targetCredits, setTargetCredits] = useState<number>(
    parseInt(localStorage.getItem('targetCredits') || '120')
  );
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' | 'warning' } | null>(null);
  const [activeTab, setActiveTab] = useState<string>('academic');

  const departments = [
    { id: 'ICT', name: 'Information & Communication Technology' },
    { id: 'EET', name: 'Electrical & Electronic Technology' },
    { id: 'MTT', name: 'Mechanical Technology' },
    { id: 'BPT', name: 'Bio-Process Technology' },
    { id: 'FDT', name: 'Food Technology' }
  ];

  const handleDepartmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newDepartment = e.target.value;
    setSelectedDepartment(newDepartment);
    localStorage.setItem('selectedDepartment', newDepartment);

    // Load the data for the selected department
    loadDepartmentData(newDepartment);

    // Show success message
    showMessage({
      text: `Department changed to ${departments.find(d => d.id === newDepartment)?.name}`,
      type: 'success'
    });
  };

  const handleTargetCreditsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setTargetCredits(value);
      localStorage.setItem('targetCredits', value.toString());

      // Show success message
      showMessage({ text: 'Target credits updated', type: 'success' });
    }
  };

  const handleClearData = () => {
    if (window.confirm('Are you sure you want to clear all data? This action cannot be undone.')) {
      // Clear all department data from localStorage
      departments.forEach(dept => {
        localStorage.removeItem(`${dept.id}Courses`);
      });

      // Reload the default data for the current department
      loadDepartmentData(selectedDepartment);

      // Show success message
      showMessage({ text: 'All data has been reset to defaults', type: 'success' });
    }
  };

  const handleClearDepartmentData = () => {
    if (window.confirm(`Are you sure you want to clear all data for ${departments.find(d => d.id === selectedDepartment)?.name}? This action cannot be undone.`)) {
      // Clear the selected department data from localStorage
      localStorage.removeItem(`${selectedDepartment}Courses`);

      // Reload the default data for the current department
      loadDepartmentData(selectedDepartment);

      // Show success message
      showMessage({ 
        text: `Data for ${departments.find(d => d.id === selectedDepartment)?.name} has been reset to defaults`, 
        type: 'success' 
      });
    }
  };

  const handleExportData = () => {
    try {
      // Collect all data from localStorage
      const exportData: Record<string, unknown> = {};
      
      // Add all department course data
      departments.forEach(dept => {
        const courseData = localStorage.getItem(`${dept.id}Courses`);
        if (courseData) {
          exportData[`${dept.id}Courses`] = JSON.parse(courseData);
        }
      });
      
      // Add settings
      exportData.settings = {
        selectedDepartment,
        targetCredits
      };
      
      // Convert to JSON and create download link
      const dataStr = JSON.stringify(exportData, null, 2);
      const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
      
      const exportFileDefaultName = `gpa-calculator-backup-${new Date().toISOString().slice(0, 10)}.json`;
      
      const linkElement = document.createElement('a');
      linkElement.setAttribute('href', dataUri);
      linkElement.setAttribute('download', exportFileDefaultName);
      linkElement.click();
      
      showMessage({ text: 'Data exported successfully', type: 'success' });
    } catch (error) {
      console.error('Export failed:', error);
      showMessage({ text: 'Failed to export data', type: 'error' });
    }
  };
  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const importedData = JSON.parse(event.target?.result as string);
        
        // Import department course data
        departments.forEach(dept => {
          const key = `${dept.id}Courses`;
          if (importedData[key]) {
            localStorage.setItem(key, JSON.stringify(importedData[key]));
          }
        });
        
        // Import settings
        if (importedData.settings) {
          const { selectedDepartment: newDept, targetCredits: newCredits } = importedData.settings;
          
          if (newDept) {
            setSelectedDepartment(newDept);
            localStorage.setItem('selectedDepartment', newDept);
          }
          
          if (newCredits) {
            setTargetCredits(newCredits);
            localStorage.setItem('targetCredits', newCredits.toString());
          }
        }
        
        // Reload data
        loadDepartmentData(importedData.settings?.selectedDepartment || selectedDepartment);
        
        showMessage({ text: 'Data imported successfully', type: 'success' });
      } catch (error) {
        console.error('Import failed:', error);
        showMessage({ text: 'Failed to import data. Invalid file format.', type: 'error' });
      }
    };
    reader.readAsText(file);
    
    // Reset the input
    e.target.value = '';
  };

  const showMessage = (msg: { text: string; type: 'success' | 'error' | 'warning' }) => {
    setMessage(msg);
    setTimeout(() => setMessage(null), 3000);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'academic':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-blue-500 text-xl mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Academic Settings</h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="targetCredits" className="block text-sm font-medium text-gray-700 mb-2">
                    Target Credits for Graduation
                  </label>
                  <div className="flex items-center">
                    <input
                      type="number"
                      id="targetCredits"
                      value={targetCredits}
                      onChange={handleTargetCreditsChange}
                      min="1"
                      max="300"
                      className="block w-32 px-3 py-2 text-base border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-500">credits</span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    This is the number of credits required for graduation. Your progress will be tracked against this value.
                  </p>
                </div>
                
                {/* <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    GPA Calculation Method
                  </label>
                  <div className="mt-1 relative">
                    <select
                      className="block w-full px-3 py-2 text-base border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      defaultValue="weighted"
                    >
                      <option value="weighted">Weighted by Credit Hours</option>
                      <option value="simple">Simple Average</option>
                    </select>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">
                    Choose how your GPA is calculated. Weighted calculation is recommended for most academic programs.
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        );
        
      case 'department':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <FaUniversity className="text-indigo-500 text-xl mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Department Settings</h3>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Department
                </label>
                <div className="mt-1 relative">
                  <select
                    value={selectedDepartment}
                    onChange={handleDepartmentChange}
                    className="block w-full px-3 py-2 text-base border border-gray-300 rounded-md bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {departments.map(dept => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Changing your department will load the corresponding course data and requirements.
                </p>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <FaInfoCircle className="h-5 w-5 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Department Information</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p>
                        You are currently viewing data for the <strong>{departments.find(d => d.id === selectedDepartment)?.name}</strong> department.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'data':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <FaDatabase className="text-green-500 text-xl mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">Data Management</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    onClick={handleExportData}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    <FaCloudDownloadAlt className="mr-2" />
                    Export Data
                  </button>
                  
                  <div className="relative">
                    <input
                      type="file"
                      id="import-file"
                      accept=".json"
                      onChange={handleImportData}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <label
                      htmlFor="import-file"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors cursor-pointer"
                    >
                      <FaCloudUploadAlt className="mr-2" />
                      Import Data
                    </label>
                  </div>
                </div>
                
                <p className="text-sm text-gray-500">
                  Export your data to create a backup or transfer to another device. Import previously exported data to restore your information.
                </p>
                
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-3">Reset Data</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <button
                        onClick={handleClearDepartmentData}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                      >
                        <FaTrashAlt className="mr-2" />
                        Reset Current Department Data
                      </button>
                      <p className="mt-1 text-sm text-gray-500">
                        This will reset all data for the currently selected department to default values.
                      </p>
                    </div>

                    <div>
                      <button
                        onClick={handleClearData}
                                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
                      >
                        <FaExclamationTriangle className="mr-2" />
                        Reset All Data
                      </button>
                      <p className="mt-1 text-sm text-gray-500">
                        This will reset all data for all departments to default values.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 'about':
      default:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <FaInfoCircle className="text-gray-500 text-xl mr-3" />
                <h3 className="text-lg font-semibold text-gray-800">About</h3>
              </div>
              
              <div className="flex flex-col items-center justify-center py-6">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                  <FaGraduationCap className="text-white text-3xl" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">GPA Calculator</h2>
                <p className="text-sm text-gray-500 mb-4">Version 3.6.194</p>
                
                <div className="text-center max-w-md">
                  <p className="text-gray-600 mb-4">
                    A comprehensive tool for tracking and calculating your academic progress.
                  </p>
                  
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 text-left">
                    <h4 className="font-medium text-blue-800 mb-2">Developed by</h4>
                    <p className="text-blue-700">Suneth Udayanga</p>
                    <p className="text-sm text-blue-600 mt-1">Faculty of Technology, Rajarata University of Sri Lanka</p>
                  </div>
                </div>
              </div>
              
              {/* <div className="mt-6 border-t border-gray-200 pt-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Acknowledgements</h4>
                <p className="text-sm text-gray-600">
                  Special thanks to the Faculty of Technology, RUSL for their support and guidance.
                </p>
              </div> */}
            </div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
        
        {message && (
          <div className={`animate-fade-in flex items-center px-4 py-2 rounded-full text-sm font-medium ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-800' 
              : message.type === 'warning'
                ? 'bg-yellow-100 text-yellow-800'
                : 'bg-red-100 text-red-800'
          }`}>
            {message.type === 'success' && <FaCheck className="mr-2" />}
            {message.type === 'warning' && <FaExclamationTriangle className="mr-2" />}
            {message.type === 'error' && <FaExclamationTriangle className="mr-2" />}
            {message.text}
          </div>
        )}
      </div>
      
      {/* Settings Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="flex overflow-x-auto scrollbar-hide">
          {[
            { id: 'academic', label: 'Academic', icon: <FaGraduationCap /> },
            { id: 'department', label: 'Department', icon: <FaUniversity /> },
            { id: 'data', label: 'Data', icon: <FaDatabase /> },
            { id: 'about', label: 'About', icon: <FaInfoCircle /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default Settings;

