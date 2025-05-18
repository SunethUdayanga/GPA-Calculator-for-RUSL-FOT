import React, { useState, useEffect } from 'react';
import { useCourseContext, Course } from '../context/CourseContext';
import {  
  FaCheck, 
  FaTimes, 
  FaInfoCircle, 
  FaBook, 
  FaGraduationCap,
  FaCalendarAlt,
  FaClipboardCheck
} from 'react-icons/fa';

const AddCourse: React.FC = () => {
  const { courses, loadDepartmentData } = useCourseContext();
  const [formData, setFormData] = useState<Partial<Course>>({
    year: 1,
    semester: 1,
    courseCode: '',
    subject: '',
    credits: 3,
    status: 'C',
    grade: 'A'
  });
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  const [recentlyAdded, setRecentlyAdded] = useState<Course[]>([]);
  const [activeStep, setActiveStep] = useState<number>(1);

  // Load recently added courses from localStorage
  useEffect(() => {
    const savedRecent = localStorage.getItem('recentlyAddedCourses');
    if (savedRecent) {
      try {
        const parsed = JSON.parse(savedRecent);
        setRecentlyAdded(Array.isArray(parsed) ? parsed.slice(0, 5) : []);
      } catch (e) {
        console.error('Failed to parse recently added courses', e);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'credits' || name === 'year' || name === 'semester' 
        ? parseInt(value) 
        : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.courseCode || !formData.subject) {
      setMessage({ text: 'Please fill in all required fields', type: 'error' });
      return;
    }
    
    // Check if course code already exists
    if (courses.some(course => course.courseCode === formData.courseCode)) {
      setMessage({ text: 'Course with this code already exists', type: 'error' });
      return;
    }
    
    // Create a complete course object
    const newCourse = formData as Course;
    const updatedCourses = [...courses, newCourse];
    
    // Update the context with the new course
    const selectedDepartment = localStorage.getItem('selectedDepartment') || 'ICT';
    localStorage.setItem(`${selectedDepartment}Courses`, JSON.stringify(updatedCourses));
    loadDepartmentData(selectedDepartment);
    
    // Update recently added courses
    const updatedRecent = [newCourse, ...recentlyAdded].slice(0, 5);
    setRecentlyAdded(updatedRecent);
    localStorage.setItem('recentlyAddedCourses', JSON.stringify(updatedRecent));
    
    // Show success message
    setMessage({ text: 'Course added successfully', type: 'success' });
    
    // Reset form
    setFormData({
      year: 1,
      semester: 1,
      courseCode: '',
      subject: '',
      credits: 3,
      status: 'C',
      grade: 'A'
    });
    
    // Clear message after 3 seconds
    setTimeout(() => {
      setMessage(null);
    }, 3000);
  };

  const handleNextStep = () => {
    if (activeStep < 3) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <select
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2, 3, 4].map(year => (
                      <option key={year} value={year}>Year {year}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaCalendarAlt className="text-gray-400" />
                  </div>
                  <select
                    name="semester"
                    value={formData.semester}
                    onChange={handleChange}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  >
                    {[1, 2].map(semester => (
                      <option key={semester} value={semester}>Semester {semester}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course Code*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBook className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="courseCode"
                  value={formData.courseCode}
                  onChange={handleChange}
                  placeholder="e.g., ICT 1101"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject Name*</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaBook className="text-gray-400" />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Programming Fundamentals"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaGraduationCap className="text-gray-400" />
                </div>
                <input
                  type="number"
                  name="credits"
                  value={formData.credits}
                  onChange={handleChange}
                  min="0"
                  max="10"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaClipboardCheck className="text-gray-400" />
                </div>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="C">Compulsory (C)</option>
                  <option value="O">Optional (O)</option>
                  <option value="C-NGP">Compulsory Non-GPA (C-NGP)</option>
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Grade</label>
              <div className="grid grid-cols-4 gap-2">
                {['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'].map(grade => (
                  <div
                    key={grade}
                    onClick={() => setFormData(prev => ({ ...prev, grade }))}
                    className={`cursor-pointer rounded-md py-2 text-center transition-colors ${
                      formData.grade === grade 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                  >
                    {grade}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Course</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Progress Steps */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                {[1, 2, 3].map(step => (
                  <div 
                    key={step} 
                    className="flex flex-col items-center"
                    onClick={() => setActiveStep(step)}
                  >
                    <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                      activeStep === step 
                        ? 'bg-blue-500 text-white' 
                        : activeStep > step 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-600'
                    }`}>
                      {activeStep > step ? <FaCheck /> : step}
                    </div>
                    <div className="text-xs mt-1 font-medium text-gray-600">
                      {step === 1 ? 'Year & Semester' : step === 2 ? 'Course Details' : 'Status & Grade'}
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative mt-2">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
                <div 
                  className="absolute top-1/2 left-0 h-1 bg-blue-500 -translate-y-1/2 transition-all duration-300"
                  style={{ width: `${((activeStep - 1) / 2) * 100}%` }}
                ></div>
              </div>
            </div>
            
            {/* Form Content */}
            <div className="p-6">
              {message && (
                <div className={`mb-6 p-4 rounded-md flex items-start ${
                  message.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  <div className="flex-shrink-0">
                    {message.type === 'success' ? (
                      <FaCheck className="h-5 w-5 text-green-500" />
                    ) : (
                      <FaTimes className="h-5 w-5 text-red-500" />
                    )}
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium">{message.text}</p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                {renderStepContent()}
                
                <div className="mt-8 flex justify-between">
                  {activeStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStep}
                      className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      Previous
                    </button>
                  ) : (
                    <div></div>
                  )}
                  
                  {activeStep < 3 ? (
                    <button
                      type="button"
                      onClick={handleNextStep}
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                        >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Add Course
                    </button>
                  )}
                </div>
              </form>
              
              {/* Course Preview */}
              {activeStep === 3 && (
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-medium text-gray-800 mb-4">Course Preview</h3>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Year & Semester</p>
                        <p className="font-medium">Year {formData.year}, Semester {formData.semester}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Course Code</p>
                        <p className="font-medium">{formData.courseCode || '-'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Subject</p>
                        <p className="font-medium">{formData.subject || '-'}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Credits</p>
                        <p className="font-medium">{formData.credits}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <p className="font-medium">
                          {formData.status === 'C' ? 'Compulsory' : 
                           formData.status === 'O' ? 'Optional' : 
                           'Non-GPA'}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Grade</p>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          formData.grade?.startsWith('A') ? 'bg-green-100 text-green-800' : 
                          formData.grade?.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                          formData.grade?.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                          formData.grade?.startsWith('D') ? 'bg-orange-100 text-orange-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {formData.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-4">
              <h3 className="text-lg font-medium text-white">Recently Added</h3>
            </div>
            
            <div className="p-6">
              {recentlyAdded.length > 0 ? (
                <div className="space-y-4">
                  {recentlyAdded.map((course, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium text-gray-800">{course.courseCode}</p>
                          <p className="text-sm text-gray-600 truncate">{course.subject}</p>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          course.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                          course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                          course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                          course.grade.startsWith('D') ? 'bg-orange-100 text-orange-800' : 
                          'bg-red-100 text-red-800'
                        }`}>
                          {course.grade}
                        </span>
                      </div>
                      <div className="mt-2 flex justify-between text-xs text-gray-500">
                        <span>Year {course.year}, Sem {course.semester}</span>
                        <span>{course.credits} credits</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6">
                  <FaBook className="mx-auto h-12 w-12 text-gray-300" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No courses added yet</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Start adding courses to see them here.
                  </p>
                </div>
              )}
            </div>
            
            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <FaInfoCircle className="h-5 w-5 text-blue-500" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-gray-800">Quick Tips</h3>
                  <div className="mt-2 text-sm text-gray-600">
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Course codes should follow your university's format</li>
                      <li>Compulsory courses are required for your degree</li>
                      <li>Optional courses can be selected based on your interests</li>
                      <li>Non-GPA courses don't affect your GPA calculation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-md overflow-hidden">
            <div className="px-6 py-8 text-white">
              <h3 className="text-lg font-medium mb-2">Bulk Import</h3>
              <p className="text-sm opacity-90 mb-4">
                Need to add multiple courses at once? Try our bulk import feature.
              </p>
              <button
                type="button"
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-purple-600 bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                Import from CSV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;

