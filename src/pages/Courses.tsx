import React, { useState, useRef, useEffect } from 'react';
import { useCourseContext, Course } from '../context/CourseContext';

const Courses: React.FC = () => {
  const { courses, loading, error, updateCourse, deleteCourse } = useCourseContext();
  const [selectedYear, setSelectedYear] = useState<number | null>(null);
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [editingField, setEditingField] = useState<{ courseCode: string; field: string } | null>(null);
  const [editValue, setEditValue] = useState<string | number>('');
  const [showGradeDropdown, setShowGradeDropdown] = useState<string | null>(null);
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close dropdown or cancel editing
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (showGradeDropdown && dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowGradeDropdown(null);
      }
      
      if (editingField && inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setEditingField(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showGradeDropdown, editingField]);

  // Focus input when editing starts
  useEffect(() => {
    if (editingField && inputRef.current) {
      inputRef.current.focus();
    }
  }, [editingField]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p>Loading courses...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  // Get unique years and semesters
  const years = [...new Set(courses.map(course => course.year))].sort((a, b) => a - b);
  
  // Get semesters for the selected year
  const semesters = selectedYear 
    ? [...new Set(courses.filter(course => course.year === selectedYear).map(course => course.semester))].sort((a, b) => a - b)
    : [];

  // Filter courses based on selection
  const filteredCourses = courses.filter(course => {
    if (selectedYear && course.year !== selectedYear) return false;
    if (selectedSemester && course.semester !== selectedSemester) return false;
    return true;
  });

  // Calculate semester GPA
  const calculateSemesterGPA = (year: number, semester: number) => {
    const semesterCourses = courses.filter(
      course => course.year === year && course.semester === semester
    );
    
    const gradePoints: { [key: string]: number } = {
      'A+': 4.0,
      'A': 4.0,
      'A-': 3.7,
      'B+': 3.3,
      'B': 3.0,
      'B-': 2.7,
      'C+': 2.3,
      'C': 2.0,
      'C-': 1.7,
      'D+': 1.3,
      'D': 1.0,
      'F': 0.0
    };

    let totalPoints = 0;
    let totalCreditHours = 0;

    semesterCourses.forEach(course => {
      if (course.grade && course.credits > 0 && !course.status.includes('NGP')) {
        totalPoints += gradePoints[course.grade] * course.credits;
        totalCreditHours += course.credits;
      }
    });

    if (totalCreditHours === 0) return 0;
    return parseFloat((totalPoints / totalCreditHours).toFixed(2));
  };

  // Handle field click for inline editing
  const handleFieldClick = (courseCode: string, field: string, value: string | number) => {
    setEditingField({ courseCode, field });
    setEditValue(value);
  };

  // Handle grade cell click to show dropdown
  const handleGradeClick = (courseCode: string) => {
    setShowGradeDropdown(courseCode);
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = e.target.type === 'number' ? parseInt(e.target.value) : e.target.value;
    setEditValue(value);
  };

  // Handle input key press (Enter to save, Escape to cancel)
  const handleInputKeyPress = (e: React.KeyboardEvent, courseCode: string) => {
    if (e.key === 'Enter') {
      handleSaveField(courseCode);
    } else if (e.key === 'Escape') {
      setEditingField(null);
    }
  };

  // Handle grade selection
  const handleGradeSelect = (courseCode: string, grade: string) => {
    const course = courses.find(c => c.courseCode === courseCode);
    if (course) {
      const updatedCourse = { ...course, grade };
      updateCourse(courseCode, updatedCourse);
      setShowGradeDropdown(null);
      
      // Show success message
      setMessage({ text: 'Grade updated successfully', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  // Handle status selection
  const handleStatusSelect = (courseCode: string, status: string) => {
    const course = courses.find(c => c.courseCode === courseCode);
    if (course) {
      const updatedCourse = { ...course, status };
      updateCourse(courseCode, updatedCourse);
      setEditingField(null);
      
      // Show success message
      setMessage({ text: 'Status updated successfully', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  // Handle save field
  const handleSaveField = (courseCode: string) => {
    if (!editingField) return;
    
    const course = courses.find(c => c.courseCode === courseCode);
    if (!course) return;
    
    const { field } = editingField;
    const updatedCourse = { ...course };
    
    // Update the specific field
    if (field === 'courseCode') {
      updatedCourse.courseCode = editValue as string;
    } else if (field === 'subject') {
      updatedCourse.subject = editValue as string;
    } else if (field === 'credits') {
      updatedCourse.credits = editValue as number;
    }
    
    // Update the course
    updateCourse(courseCode, updatedCourse);
    setEditingField(null);
    
    // Show success message
    setMessage({ text: 'Course updated successfully', type: 'success' });
    setTimeout(() => setMessage(null), 3000);
  };

  // Handle delete course
  const handleDeleteCourse = (courseCode: string) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      deleteCourse(courseCode);
      
      // Show success message
      setMessage({ text: 'Course deleted successfully', type: 'success' });
      setTimeout(() => setMessage(null), 3000);
    }
  };

  // Render a table cell with inline editing
  const renderEditableCell = (course: Course, field: string, value: string | number) => {
    const isEditing = editingField?.courseCode === course.courseCode && editingField?.field === field;
    
    return (
      <td 
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer hover:bg-gray-50"
        onClick={() => !isEditing && handleFieldClick(course.courseCode, field, value)}
      >
        {isEditing ? (
          <input
            ref={inputRef}
            type={field === 'credits' ? 'number' : 'text'}
            value={editValue}
            onChange={handleInputChange}
            onKeyDown={(e) => handleInputKeyPress(e, course.courseCode)}
            onBlur={() => handleSaveField(course.courseCode)}
            className="w-full border border-gray-300 rounded-md p-1 text-sm"
            min={field === 'credits' ? 0 : undefined}
            max={field === 'credits' ? 10 : undefined}
          />
        ) : (
          value
        )}
      </td>
    );
  };

  // Render status cell with dropdown
  const renderStatusCell = (course: Course) => {
    const isEditing = editingField?.courseCode === course.courseCode && editingField?.field === 'status';
    
    return (
      <td 
        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 cursor-pointer hover:bg-gray-50"
        onClick={() => !isEditing && handleFieldClick(course.courseCode, 'status', course.status)}
      >
        {isEditing ? (
          <select
            value={editValue}
            onChange={(e) => handleStatusSelect(course.courseCode, e.target.value)}
            className="border border-gray-300 rounded-md p-1 text-sm"
            autoFocus
          >
            <option value="C">Compulsory (C)</option>
            <option value="O">Optional (O)</option>
            <option value="C-NGP">Compulsory Non-GPA (C-NGP)</option>
          </select>
        ) : (
          course.status === 'C' ? 'Compulsory' : 
          course.status === 'O' ? 'Optional' : 
          'Non-GPA'
        )}
      </td>
    );
  };

  // Render grade cell with dropdown
  const renderGradeCell = (course: Course) => {
    const grades = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D+', 'D', 'F'];
    
    return (
      <td className="px-6 py-4 whitespace-nowrap relative">
        {course.grade ? (
          <span 
            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full cursor-pointer
              ${course.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                course.grade.startsWith('D') ? 'bg-orange-100 text-orange-800' : 
                'bg-red-100 text-red-800'}`}
            onClick={() => handleGradeClick(course.courseCode)}
          >
            {course.grade}
          </span>
        ) : (
          <button
            className="px-2 py-1 text-xs border border-gray-300 rounded hover:bg-gray-100"
            onClick={() => handleGradeClick(course.courseCode)}
          >
            Add Grade
          </button>
        )}
        
        {showGradeDropdown === course.courseCode && (
          <div 
            ref={dropdownRef}
            className="absolute z-10 mt-1 w-40 bg-white shadow-lg rounded-md py-1 text-sm ring-1 ring-black ring-opacity-5 focus:outline-none"
            style={{ left: '50%', transform: 'translateX(-50%)' }}
          >
            <div className="p-2 border-b border-gray-200">
              <h4 className="font-medium text-gray-700 mb-1">Select Grade</h4>
            </div>
            <div className="max-h-60 overflow-auto p-1">
              <div className="grid grid-cols-3 gap-1">
                {grades.map(grade => (
                  <div
                    key={grade}
                    className={`px-2 py-1 text-center hover:bg-gray-100 cursor-pointer rounded ${grade === course.grade ? 'bg-blue-100 text-blue-800 font-medium' : ''}`}
                    onClick={() => handleGradeSelect(course.courseCode, grade)}
                  >
                    {grade}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </td>
    );
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Courses</h2>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        {message && (
          <div className={`mb-4 p-3 rounded-md ${
            message.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            {message.text}
          </div>
        )}
        
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Year</label>
            <select 
              className="border border-gray-300 rounded-md p-2 w-40"
              value={selectedYear || ''}
              onChange={(e) => {
                const value = e.target.value ? parseInt(e.target.value) : null;
                setSelectedYear(value);
                setSelectedSemester(null);
              }}
            >
              <option value="">All Years</option>
              {years.map(year => (
                <option key={year} value={year}>Year {year}</option>
              ))}
            </select>
          </div>
          
          {selectedYear && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Semester</label>
              <select 
                className="border border-gray-300 rounded-md p-2 w-40"
                value={selectedSemester || ''}
                onChange={(e) => {
                  const value = e.target.value ? parseInt(e.target.value) : null;
                  setSelectedSemester(value);
                }}
              >
                <option value="">All Semesters</option>
                {semesters.map(semester => (
                  <option key={semester} value={semester}>Semester {semester}</option>
                ))}
              </select>
            </div>
          )}
          
          <div className="ml-auto">
            <button 
                           className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-300 mt-6"
              onClick={() => {
                setSelectedYear(null);
                setSelectedSemester(null);
              }}
            >
              Reset Filters
            </button>
          </div>
        </div>
        
        {/* Display courses by year and semester */}
        {selectedYear === null ? (
          // Display all years and semesters
          years.map(year => (
            <div key={year} className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Year {year}</h3>
              
              {[...new Set(courses.filter(course => course.year === year).map(course => course.semester))]
                .sort((a, b) => a - b)
                .map(semester => (
                  <div key={`${year}-${semester}`} className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="text-lg font-medium">Semester {semester}</h4>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        GPA: {calculateSemesterGPA(year, semester)}
                      </span>
                    </div>
                    
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {courses
                            .filter(course => course.year === year && course.semester === semester)
                            .map(course => (
                              <tr key={course.courseCode}>
                                {renderEditableCell(course, 'courseCode', course.courseCode)}
                                {renderEditableCell(course, 'subject', course.subject)}
                                {renderEditableCell(course, 'credits', course.credits)}
                                {renderStatusCell(course)}
                                {renderGradeCell(course)}
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <button
                                    onClick={() => handleDeleteCourse(course.courseCode)}
                                    className="text-red-600 hover:text-red-900"
                                  >
                                    Delete
                                  </button>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
            </div>
          ))
        ) : selectedSemester === null ? (
          // Display selected year, all semesters
          <div>
            <h3 className="text-xl font-semibold mb-4">Year {selectedYear}</h3>
            
            {[...new Set(courses.filter(course => course.year === selectedYear).map(course => course.semester))]
              .sort((a, b) => a - b)
              .map(semester => (
                <div key={`${selectedYear}-${semester}`} className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-medium">Semester {semester}</h4>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      GPA: {calculateSemesterGPA(selectedYear, semester)}
                    </span>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {courses
                          .filter(course => course.year === selectedYear && course.semester === semester)
                          .map(course => (
                            <tr key={course.courseCode}>
                              {renderEditableCell(course, 'courseCode', course.courseCode)}
                              {renderEditableCell(course, 'subject', course.subject)}
                              {renderEditableCell(course, 'credits', course.credits)}
                              {renderStatusCell(course)}
                              {renderGradeCell(course)}
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                <button
                                  onClick={() => handleDeleteCourse(course.courseCode)}
                                  className="text-red-600 hover:text-red-900"
                                >
                                  Delete
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
          </div>
        ) : (
          // Display selected year and semester
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Year {selectedYear}, Semester {selectedSemester}</h3>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                GPA: {calculateSemesterGPA(selectedYear, selectedSemester)}
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredCourses.map(course => (
                    <tr key={course.courseCode}>
                      {renderEditableCell(course, 'courseCode', course.courseCode)}
                      {renderEditableCell(course, 'subject', course.subject)}
                      {renderEditableCell(course, 'credits', course.credits)}
                      {renderStatusCell(course)}
                      {renderGradeCell(course)}
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => handleDeleteCourse(course.courseCode)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        
        {filteredCourses.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500">No courses found for the selected filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;

