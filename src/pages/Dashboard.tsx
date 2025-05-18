import React, { useState, useEffect } from 'react';
import { useCourseContext } from '../context/CourseContext';
import { FaGraduationCap, FaBook, FaChartLine, FaMedal, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';

const Dashboard: React.FC = () => {
  const { courses, overallGPA, totalCredits, loading, error } = useCourseContext();
  const [targetCredits, setTargetCredits] = useState<number>(120);
  const [animatedGPA, setAnimatedGPA] = useState<number>(0);
  const [selectedYear, setSelectedYear] = useState<number | null>(null);

  // Load target credits from localStorage
  useEffect(() => {
    const savedTargetCredits = localStorage.getItem('targetCredits');
    if (savedTargetCredits) {
      setTargetCredits(parseInt(savedTargetCredits));
    }
  }, []);

  // Animate GPA on load
  useEffect(() => {
    if (!loading && !error) {
      const timer = setTimeout(() => {
        setAnimatedGPA(overallGPA);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [loading, error, overallGPA]);

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your academic data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-red-700">
                Error: {error}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Calculate GPA for compulsory courses only
  const calculateCompulsoryGPA = () => {
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

    courses.forEach(course => {
      // Only include compulsory courses with grades and credits
      if (course.status === 'C' && course.grade && course.credits > 0) {
        totalPoints += gradePoints[course.grade] * course.credits;
        totalCreditHours += course.credits;
      }
    });

    if (totalCreditHours === 0) return 0;
    return parseFloat((totalPoints / totalCreditHours).toFixed(2));
  };

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

  // Calculate semester credits
  const calculateSemesterCredits = (year: number, semester: number) => {
    return courses
      .filter(course => course.year === year && course.semester === semester)
      .reduce((total, course) => total + course.credits, 0);
  };

  // Get unique years and semesters
  const years = [...new Set(courses.map(course => course.year))].sort((a, b) => a - b);

  // Calculate credit breakdowns
  const compulsoryCourses = courses.filter(course => course.status === 'C');
  const optionalCourses = courses.filter(course => course.status === 'O');
  const nonGPACourses = courses.filter(course => course.status.includes('NGP'));

  const compulsoryCredits = compulsoryCourses.reduce((total, course) => total + course.credits, 0);
  const optionalCredits = optionalCourses.reduce((total, course) => total + course.credits, 0);
  const nonGPACredits = nonGPACourses.reduce((total, course) => total + course.credits, 0);

  // Determine class based on GPA
  const determineClass = (gpa: number) => {
    if (gpa >= 3.7) return "First Class";
    if (gpa >= 3.3) return "Second Upper";
    if (gpa >= 3.0) return "Second Lower";
    if (gpa >= 2.0) return "General";
    return "No Class";
  };

  // Get class color
  const getClassColor = (gpa: number) => {
    if (gpa >= 3.7) return "text-purple-700";
    if (gpa >= 3.3) return "text-blue-700";
    if (gpa >= 3.0) return "text-green-700";
    if (gpa >= 2.0) return "text-yellow-700";
    return "text-red-700";
  };

  // Calculate grade distribution
  const gradeDistribution = {
    A: courses.filter(c => c.grade?.startsWith('A')).length,
    B: courses.filter(c => c.grade?.startsWith('B')).length,
    C: courses.filter(c => c.grade?.startsWith('C')).length,
    D: courses.filter(c => c.grade?.startsWith('D')).length,
    F: courses.filter(c => c.grade === 'F').length
  };

  // Calculate total grades
  const totalGrades = Object.values(gradeDistribution).reduce((a, b) => a + b, 0);

  // Calculate progress percentage
  const progressPercentage = Math.min(100, Math.round((totalCredits / targetCredits) * 100));

  const compulsoryGPA = calculateCompulsoryGPA();
  const degreeClass = determineClass(overallGPA);
  const classColor = getClassColor(overallGPA);

  // Get semesters for selected year
  // const semestersForYear = selectedYear 
  //   ? [...new Set(courses.filter(c => c.year === selectedYear).map(c => c.semester))].sort((a, b) => a - b)
  //   : [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Academic Dashboard</h2>
        <div className="text-sm text-gray-500">
          <span className="font-medium">Last Updated:</span> {new Date().toLocaleDateString()}
        </div>
      </div>

      {/* Main Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* GPA Card */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-md p-6 border border-blue-100 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-16 w-16 bg-blue-100 rounded-bl-full opacity-50"></div>
          <div className="flex items-center mb-4">
            <FaChartLine className="text-blue-500 text-xl mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Overall GPA</h3>
          </div>
          <div className="flex items-end">
            <div className="text-4xl font-bold text-blue-700" style={{ transition: 'all 1s ease-out' }}>
              {animatedGPA.toFixed(2)}
            </div>
            <div className="text-sm text-blue-600 ml-2 mb-1">/ 4.0</div>
          </div>
          <div className={`mt-2 text-sm font-medium ${classColor}`}>
            {degreeClass}
          </div>
        </div>

        {/* Credits Card */}
        <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl shadow-md p-6 border border-green-100 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-16 w-16 bg-green-100 rounded-bl-full opacity-50"></div>
          <div className="flex items-center mb-4">
            <FaBook className="text-green-500 text-xl mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Credits Earned</h3>
          </div>
          <div className="flex items-end">
            <div className="text-4xl font-bold text-green-700">
              {totalCredits}
            </div>
            <div className="text-sm text-green-600 ml-2 mb-1">/ {targetCredits}</div>
          </div>
          <div className="mt-3">
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-green-600 h-2.5 rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-xs text-green-700 mt-1">{progressPercentage}% Complete</div>
          </div>
        </div>

                {/* Courses Card */}
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl shadow-md p-5 border border-purple-100 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-16 w-16 bg-purple-100 rounded-bl-full opacity-50"></div>
          <div className="flex items-center mb-4">
            <FaGraduationCap className="text-purple-500 text-xl mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Courses</h3>
          </div>
          <div className="flex items-end mb-3">
            <div className="text-4xl font-bold text-purple-700">
              {courses.length}
            </div>
            <div className="text-sm text-purple-600 ml-2 mb-1">total courses</div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <div className="flex flex-row bg-purple-100 rounded-lg text-center justify-center gap-2">
              <div className="text-xs text-purple-600 content-center">Compulsory</div>
              <div className="font-medium text-purple-800 text-lg content-center">{compulsoryCourses.length}</div>
              
            </div>
            <div className="flex flex-row bg-purple-100 rounded-lg text-center justify-center gap-2">
              <div className="text-xs text-purple-600 content-center">Optional</div>
              <div className="font-medium text-purple-800 text-lg content-center">{optionalCourses.length}</div>
              
            </div>
            <div className="flex flex-row bg-purple-100 rounded-lg text-center justify-center gap-2">
              <div className="text-xs text-purple-600 content-center">Non-GPA</div>
              <div className="font-medium text-purple-800 text-lg content-center">{nonGPACourses.length}</div>
              
            </div>
          </div>
        </div>



        {/* Grade Distribution Card */}
        <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl shadow-md p-6 border border-yellow-100 relative overflow-hidden">
          <div className="absolute right-0 top-0 h-16 w-16 bg-yellow-100 rounded-bl-full opacity-50"></div>
          <div className="flex items-center mb-4">
            <FaMedal className="text-yellow-500 text-xl mr-2" />
            <h3 className="text-lg font-semibold text-gray-800">Grade Distribution</h3>
          </div>
          {totalGrades > 0 ? (
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="w-8 text-sm font-medium">A</div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${(gradeDistribution.A / totalGrades) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-right text-sm">{gradeDistribution.A}</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 text-sm font-medium">B</div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${(gradeDistribution.B / totalGrades) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-right text-sm">{gradeDistribution.B}</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 text-sm font-medium">C</div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-500 h-2 rounded-full"
                      style={{ width: `${(gradeDistribution.C / totalGrades) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-right text-sm">{gradeDistribution.C}</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 text-sm font-medium">D</div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full"
                      style={{ width: `${(gradeDistribution.D / totalGrades) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-right text-sm">{gradeDistribution.D}</div>
              </div>
              <div className="flex items-center">
                <div className="w-8 text-sm font-medium">F</div>
                <div className="flex-1">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: `${(gradeDistribution.F / totalGrades) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="w-8 text-right text-sm">{gradeDistribution.F}</div>
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-2">No grades available</div>
          )}
        </div>
      </div>

      {/* Credits Breakdown Section */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <FaBook className="text-gray-500 text-xl mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Credits Breakdown</h3>
        </div>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
            <div className="flex h-4 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 transition-all duration-500"
                style={{ width: `${(compulsoryCredits / (compulsoryCredits + optionalCredits + nonGPACredits)) * 100}%` }}
              ></div>
              <div
                className="bg-green-500 transition-all duration-500"
                style={{ width: `${(optionalCredits / (compulsoryCredits + optionalCredits + nonGPACredits)) * 100}%` }}
              ></div>
              <div
                className="bg-yellow-500 transition-all duration-500"
                style={{ width: `${(nonGPACredits / (compulsoryCredits + optionalCredits + nonGPACredits)) * 100}%` }}
              ></div>
            </div>
          </div>
          <div className="flex text-xs text-gray-600 justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-1"></div>
              <span>Compulsory ({compulsoryCredits} credits)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-1"></div>
              <span>Optional ({optionalCredits} credits)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-1"></div>
              <span>Non-GPA ({nonGPACredits} credits)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-blue-700">Compulsory Credits</p>
              <p className="text-lg font-bold text-blue-800">{compulsoryCredits}</p>
            </div>
            <p className="text-xs text-blue-600">From {compulsoryCourses.length} courses</p>
            <div className="mt-2 text-xs text-blue-700">
              GPA: <span className="font-bold">{compulsoryGPA.toFixed(2)}</span>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border border-green-100">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-green-700">Optional Credits</p>
              <p className="text-lg font-bold text-green-800">{optionalCredits}</p>
            </div>
            <p className="text-xs text-green-600">From {optionalCourses.length} courses</p>
            <div className="mt-2 text-xs text-green-700">
              {optionalCourses.filter(c => c.includeInGPA).length} included in GPA
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-100">
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-yellow-700">Non-GPA Credits</p>
              <p className="text-lg font-bold text-yellow-800">{nonGPACredits}</p>
            </div>
            <p className="text-xs text-yellow-600">From {nonGPACourses.length} courses</p>
            <div className="mt-2 text-xs text-yellow-700">
              Not counted in GPA calculation
            </div>
          </div>
        </div>
      </div>

      {/* Year & Semester Breakdown */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <FaCalendarAlt className="text-gray-500 text-xl mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Academic Progress</h3>
        </div>

        <div className="mb-6">
          <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
            <button
              onClick={() => setSelectedYear(null)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedYear === null
                  ? 'bg-indigo-100 text-indigo-800'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              All Years
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedYear === year
                    ? 'bg-indigo-100 text-indigo-800'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                Year {year}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          {(selectedYear ? [selectedYear] : years).map(year => (
            <div key={year} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-4 py-3 font-medium flex items-center">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <span>Year {year}</span>
              </div>

              <div className="divide-y divide-gray-200">
                {[...new Set(courses.filter(c => c.year === year).map(c => c.semester))]
                  .sort((a, b) => a - b)
                  .map(semester => {
                    const semesterGPA = calculateSemesterGPA(year, semester);
                    const semesterCredits = calculateSemesterCredits(year, semester);
                    const semesterClass = determineClass(semesterGPA);
                    const semesterClassColor = getClassColor(semesterGPA);
                    const semesterCourses = courses.filter(c => c.year === year && c.semester === semester);

                    return (
                      <div key={`${year}-${semester}`} className="p-4">
                        <div className="flex flex-wrap justify-between items-center mb-3">
                          <h4 className="text-lg font-medium flex items-center">
                            <span className="w-8 h-8 flex items-center justify-center bg-indigo-100 text-indigo-800 rounded-full mr-2 text-sm">
                              {semester}
                            </span>
                            Semester {semester}
                          </h4>
                          <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
                            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                              <FaChartLine className="mr-1" /> GPA: {semesterGPA.toFixed(2)}
                            </span>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium flex items-center">
                              <FaBook className="mr-1" /> Credits: {semesterCredits}
                            </span>
                            <span className={`bg-purple-100 ${semesterClassColor} px-3 py-1 rounded-full text-sm font-medium flex items-center`}>
                              <FaMedal className="mr-1" /> {semesterClass}
                            </span>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                          {semesterCourses.map(course => (
                            <div
                              key={course.courseCode}
                              className={`p-3 rounded-lg border text-sm ${course.status === 'C'
                                  ? 'bg-blue-50 border-blue-100'
                                  : course.status === 'O'
                                    ? 'bg-green-50 border-green-100'
                                    : 'bg-yellow-50 border-yellow-100'
                                }`}
                            >
                              <div className="flex justify-between items-start">
                                <div>
                                  <div className="font-medium">{course.courseCode}</div>
                                  <div className="text-gray-600 text-xs mt-1">{course.subject}</div>
                                </div>
                                <div className="flex items-center">
                                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${course.grade.startsWith('A') ? 'bg-green-100 text-green-800' :
                                      course.grade.startsWith('B') ? 'bg-blue-100 text-blue-800' :
                                        course.grade.startsWith('C') ? 'bg-yellow-100 text-yellow-800' :
                                          course.grade.startsWith('D') ? 'bg-orange-100 text-orange-800' :
                                            'bg-red-100 text-red-800'
                                    }`}>
                                    {course.grade}
                                  </span>
                                </div>
                              </div>
                              <div className="flex justify-between mt-2 text-xs">
                                <span className="text-gray-600">Credits: {course.credits}</span>
                                <span className="text-gray-600">
                                  {course.status === 'C' ? 'Compulsory' :
                                    course.status === 'O' ? 'Optional' : 'Non-GPA'}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Degree Progress */}
      <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
        <div className="flex items-center mb-4">
          <FaCheckCircle className="text-gray-500 text-xl mr-2" />
          <h3 className="text-lg font-semibold text-gray-800">Degree Progress</h3>
        </div>

        <div className="mb-6">
          <div className="flex justify-between mb-1">
            <span className="text-sm font-medium text-gray-700">Progress toward {targetCredits} credits</span>
            <span className="text-sm font-medium text-gray-700">{progressPercentage}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
            <div
              className={`h-2.5 rounded-full transition-all duration-1000 ${progressPercentage >= 100
                  ? 'bg-green-600'
                  : progressPercentage >= 75
                    ? 'bg-blue-600'
                    : progressPercentage >= 50
                      ? 'bg-yellow-600'
                      : 'bg-red-600'
                }`}
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                  <FaGraduationCap className="text-indigo-600" />
                </div>
                <h4 className="font-medium text-indigo-800">Degree Status</h4>
              </div>
              <div className="pl-10">
                <div className="text-sm text-indigo-700 mb-1">
                  <span className="font-medium">Current GPA:</span> {overallGPA.toFixed(2)}
                </div>
                <div className="text-sm text-indigo-700 mb-1">
                  <span className="font-medium">Projected Class:</span> {degreeClass}
                </div>
                <div className="text-sm text-indigo-700">
                  <span className="font-medium">Credits Needed:</span> {Math.max(0, targetCredits - totalCredits)}
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-2">
                  <FaMedal className="text-purple-600" />
                </div>
                <h4 className="font-medium text-purple-800">GPA Requirements</h4>
              </div>
              <div className="pl-10 space-y-2">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${overallGPA >= 3.7 ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
                  <div className="text-sm text-purple-700">
                    First Class: <span className="font-medium">3.70 - 4.00</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${overallGPA >= 3.3 && overallGPA < 3.7 ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
                  <div className="text-sm text-purple-700">
                    Second Upper: <span className="font-medium">3.30 - 3.69</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${overallGPA >= 3.0 && overallGPA < 3.3 ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
                  <div className="text-sm text-purple-700">
                    Second Lower: <span className="font-medium">3.00 - 3.29</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full ${overallGPA >= 2.0 && overallGPA < 3.0 ? 'bg-green-500' : 'bg-gray-300'} mr-2`}></div>
                  <div className="text-sm text-purple-700">
                    General: <span className="font-medium">2.00 - 2.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* GPA Improvement Suggestions */}
          {overallGPA < 3.7 && (
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <h4 className="font-medium text-gray-800 mb-2">GPA Improvement Suggestions</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {overallGPA < 2.0 && (
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 text-red-500 mr-2">⚠️</div>
                    <div>Your GPA is below the graduation requirement. Focus on improving grades in all courses.</div>
                  </li>
                )}
                {overallGPA < 3.0 && (
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 text-blue-500 mr-2">💡</div>
                    <div>Consider retaking courses with D or F grades to improve your GPA.</div>
                  </li>
                )}
                {overallGPA < 3.3 && (
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 text-blue-500 mr-2">💡</div>
                    <div>To reach Second Upper, focus on getting A's in your remaining courses.</div>
                  </li>
                )}
                {overallGPA < 3.7 && (
                  <li className="flex items-start">
                    <div className="flex-shrink-0 w-5 h-5 text-blue-500 mr-2">💡</div>
                    <div>For First Class honors, you'll need mostly A/A+ grades in your remaining courses.</div>
                  </li>
                )}
                <li className="flex items-start">
                  <div className="flex-shrink-0 w-5 h-5 text-green-500 mr-2">✓</div>
                  <div>Visit the Optional Subjects page to optimize which courses count toward your GPA.</div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;


