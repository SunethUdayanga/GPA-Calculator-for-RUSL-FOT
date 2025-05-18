import React, { useState, useEffect } from 'react';
import { useCourseContext } from '../context/CourseContext';

const OptionalSubjects: React.FC = () => {
  const { courses, loading, error, overallGPA, totalCredits, updateCourse } = useCourseContext();
  const [includedOptionals, setIncludedOptionals] = useState<Set<string>>(new Set());
  const [simulatedGPA, setSimulatedGPA] = useState<number>(overallGPA);
  const [simulatedCredits, setSimulatedCredits] = useState<number>(totalCredits);
  const [targetCredits, setTargetCredits] = useState<number>(120); // Default value

  // Load target credits from localStorage
  useEffect(() => {
    const savedTargetCredits = localStorage.getItem('targetCredits');
    if (savedTargetCredits) {
      setTargetCredits(parseInt(savedTargetCredits));
    }
  }, []);

  // Initialize included optionals from courses that are already marked as included
  useEffect(() => {
    const initialIncluded = new Set<string>();
    courses.forEach(course => {
      if (course.status === 'O' && course.includeInGPA) {
        initialIncluded.add(course.courseCode);
      }
    });
    setIncludedOptionals(initialIncluded);
  }, [courses]);

  // Calculate simulated GPA whenever included optionals change
  useEffect(() => {
    const newGPA = calculateSimulatedGPA(includedOptionals);
    setSimulatedGPA(newGPA);
  }, [includedOptionals, courses]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <p>Loading optional subjects...</p>
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

  // Filter only optional courses (status 'O')
  const optionalCourses = courses.filter(course => course.status === 'O');

  // Group by year and semester
  const coursesByYearAndSemester = optionalCourses.reduce((acc, course) => {
    const key = `${course.year}-${course.semester}`;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(course);
    return acc;
  }, {} as Record<string, typeof courses>);

  // Sort keys by year and semester
  const sortedKeys = Object.keys(coursesByYearAndSemester).sort((a, b) => {
    const [yearA, semesterA] = a.split('-').map(Number);
    const [yearB, semesterB] = b.split('-').map(Number);
    if (yearA !== yearB) return yearA - yearB;
    return semesterA - semesterB;
  });

  // Calculate GPA with selected optional subjects
  const calculateSimulatedGPA = (included: Set<string>) => {
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

    // Get all compulsory courses
    const compulsoryCourses = courses.filter(course => 
      course.status === 'C' && course.grade && course.credits > 0 && !course.status.includes('NGP')
    );

    // Get included optional courses
    const includedOptionalCourses = courses.filter(course => 
      course.status === 'O' && included.has(course.courseCode) && 
      course.grade && course.credits > 0
    );

    // Combine courses for GPA calculation
    const coursesForGPA = [...compulsoryCourses, ...includedOptionalCourses];

    let totalPoints = 0;
    let totalCreditHours = 0;

    coursesForGPA.forEach(course => {
      totalPoints += gradePoints[course.grade] * course.credits;
      totalCreditHours += course.credits;
    });

    setSimulatedCredits(totalCreditHours);
    
    if (totalCreditHours === 0) return 0;
    return parseFloat((totalPoints / totalCreditHours).toFixed(2));
  };

  // Toggle subject inclusion in GPA
  const toggleSubjectInclusion = (courseCode: string) => {
    const newIncluded = new Set(includedOptionals);
    const isCurrentlyIncluded = newIncluded.has(courseCode);
    
    if (isCurrentlyIncluded) {
      newIncluded.delete(courseCode);
    } else {
      newIncluded.add(courseCode);
    }
    
    setIncludedOptionals(newIncluded);
    
    // Update the course in the context
    const course = courses.find(c => c.courseCode === courseCode);
    if (course) {
      const updatedCourse = { 
        ...course, 
        includeInGPA: !isCurrentlyIncluded 
      };
      updateCourse(courseCode, updatedCourse);
    }
  };

  // Calculate progress percentage
  const progressPercentage = Math.min(100, Math.round((simulatedCredits / targetCredits) * 100));
  
  // Calculate remaining credits needed
  const remainingCredits = Math.max(0, targetCredits - simulatedCredits);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Optional Subjects</h2>
      
      {optionalCourses.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-500">No optional subjects found.</p>
        </div>
      ) : (
        <>
          {/* GPA Summary Panel */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">GPA Summary</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-600 mb-1">Current GPA</p>
                <p className="text-3xl font-bold text-blue-800">{simulatedGPA.toFixed(2)}</p>
                <p className="text-xs text-blue-600 mt-1">
                  With {includedOptionals.size} optional subjects
                </p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <p className="text-sm text-green-600 mb-1">Total Credits</p>
                <p className="text-3xl font-bold text-green-800">{simulatedCredits}</p>
                <p className="text-xs text-green-600 mt-1">
                  {remainingCredits > 0 
                    ? `${remainingCredits} more credits needed` 
                    : 'Minimum credits achieved'}
                </p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <p className="text-sm text-purple-600 mb-1">Credits Progress</p>
                <div className="mt-2">
                  <div className="w-full bg-gray-200 rounded-full h-4">
                    <div 
                      className={`h-4 rounded-full ${
                        progressPercentage >= 100 
                          ? 'bg-green-500' 
                          : progressPercentage >= 75 
                            ? 'bg-blue-500' 
                            : progressPercentage >= 50 
                              ? 'bg-yellow-500' 
                              : 'bg-red-500'
                      }`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-purple-600 mt-1">
                    {progressPercentage}% of required {targetCredits} credits
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Optional Subjects List */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="mb-4 text-gray-600">
              Add optional subjects to your GPA calculation by clicking the "Add" button. 
              You need at least {targetCredits} credits to graduate.
            </p>
            
            {sortedKeys.map(key => {
              const [year, semester] = key.split('-').map(Number);
              const coursesInSemester = coursesByYearAndSemester[key];
              
              return (
                <div key={key} className="mb-6">
                  <h3 className="text-lg font-semibold mb-2">Year {year}, Semester {semester}</h3>
                  
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Code</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {coursesInSemester.map(course => {
                          const isIncluded = includedOptionals.has(course.courseCode);
                          
                          return (
                            <tr key={course.courseCode} className={isIncluded ? 'bg-blue-50' : ''}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {course.courseCode}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {course.subject}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {course.credits}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap">
                                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                                  ${course.grade.startsWith('A') ? 'bg-green-100 text-green-800' : 
                                    course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' : 
                                    course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' : 
                                    course.grade.startsWith('D') ? 'bg-orange-100 text-orange-800' : 
                                    'bg-red-100 text-red-800'}`}>
                                  {course.grade}
                                </span>
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm">
                                <button
                                  onClick={() => toggleSubjectInclusion(course.courseCode)}
                                  className={`px-3 py-1 rounded-md ${
                                    isIncluded
                                      ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                      : 'bg-green-100 text-green-700 hover:bg-green-200'
                                  }`}
                                >
                                  {isIncluded ? 'Remove' : 'Add'}
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default OptionalSubjects;
