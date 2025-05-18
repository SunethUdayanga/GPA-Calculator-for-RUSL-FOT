import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';

import ICTCourseData from '../data/ICTCourseData.js';
import BPTCourseData from '../data/BPTCourseData.js';
import FDTCourseData from '../data/FDTCourseData.js';
import MTTCourseData from '../data/MTTCourseData.js';
import EETCourseData from '../data/EETCourseData.js';

// Define types for our course data
export interface Course {
  year: number;
  semester: number;
  courseCode: string;
  subject: string;
  credits: number;
  status: string;
  grade: string;
  includeInGPA?: boolean; // New property to track if optional course is included in GPA
}

interface CourseContextType {
  courses: Course[];
  loading: boolean;
  error: string | null;
  overallGPA: number;
  totalCredits: number;
  loadDepartmentData: (department: string) => void;
  updateCourse: (originalCourseCode: string, updatedCourse: Course) => void;
  deleteCourse: (courseCode: string) => void;
}

const CourseContext = createContext<CourseContextType | undefined>(undefined);

export const useCourseContext = () => {
  const context = useContext(CourseContext);
  if (!context) {
    throw new Error('useCourseContext must be used within a CourseProvider');
  }
  return context;
};

interface CourseProviderProps {
  children: ReactNode;
}

export const CourseProvider: React.FC<CourseProviderProps> = ({ children }) => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [overallGPA, setOverallGPA] = useState<number>(0);
  const [totalCredits, setTotalCredits] = useState<number>(0);
  const [currentDepartment, setCurrentDepartment] = useState<string>('ICT');

  // Calculate GPA based on grades
  const calculateGPA = (courseList: Course[]) => {
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

    courseList.forEach(course => {
      // Skip courses with no grade or non-credit courses
      if (course.grade && course.credits > 0 && !course.status.includes('NGP')) {
        totalPoints += gradePoints[course.grade] * course.credits;
        totalCreditHours += course.credits;
      }
    });

    setTotalCredits(totalCreditHours);
    
    if (totalCreditHours === 0) return 0;
    return parseFloat((totalPoints / totalCreditHours).toFixed(2));
  };

  // Get default data for a department
  const getDefaultDepartmentData = (department: string): Course[] => {
    switch (department) {
      case 'ICT':
        return ICTCourseData;
      case 'BPT':
        return BPTCourseData || []; // Fallback to empty array if data is undefined
      case 'MTT':
        return MTTCourseData || [];
      case 'EET':
        return EETCourseData || [];
      case 'FDT':
        return FDTCourseData || [];
      default:
        return [];
    }
  };

  // Load department data
  const loadDepartmentData = (department: string) => {
    setLoading(true);
    try {
      setCurrentDepartment(department);
      
      // Check if we have saved data in localStorage
      const savedData = localStorage.getItem(`${department}Courses`);
      let departmentData: Course[];
      
      if (savedData) {
        departmentData = JSON.parse(savedData);
      } else {
        // Use default data if no saved data exists
        departmentData = getDefaultDepartmentData(department);
        // Save the default data to localStorage
        localStorage.setItem(`${department}Courses`, JSON.stringify(departmentData));
      }
      
      setCourses(departmentData);
      const gpa = calculateGPA(departmentData);
      setOverallGPA(gpa);
      setError(null);
      
      // Save the selected department
      localStorage.setItem('selectedDepartment', department);
    } catch (err) {
      setError('Failed to load department data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Update a course
  const updateCourse = (courseCode: string, updatedCourse: Course) => {
    try {
      // Find the course index
      const courseIndex = courses.findIndex(c => c.courseCode === courseCode);
      
      if (courseIndex === -1) {
        throw new Error(`Course with code ${courseCode} not found`);
      }
      
      // Create a new array with the updated course
      const updatedCourses = [...courses];
      updatedCourses[courseIndex] = updatedCourse;
      
      // Update state
      setCourses(updatedCourses);
      
      // Recalculate GPA
      const gpa = calculateGPA(updatedCourses);
      setOverallGPA(gpa);
      
      // Save to localStorage
      localStorage.setItem(`${currentDepartment}Courses`, JSON.stringify(updatedCourses));
    } catch (err) {
      setError('Failed to update course');
      console.error(err);
    }
  };

  // Load initial data from localStorage
  useEffect(() => {
    const savedDepartment = localStorage.getItem('selectedDepartment') || 'ICT';
    loadDepartmentData(savedDepartment);
  }, []);

  const deleteCourse = (courseCode: string) => {
    try {
      const updatedCourses = courses.filter(course => course.courseCode !== courseCode);
      
      setCourses(updatedCourses);
      const gpa = calculateGPA(updatedCourses);
      setOverallGPA(gpa);
      
      // Save to localStorage
      localStorage.setItem(`${currentDepartment}Courses`, JSON.stringify(updatedCourses));
    } catch (err) {
      setError('Failed to delete course');
      console.error(err);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        courses,
        loading,
        error,
        overallGPA,
        totalCredits,
        loadDepartmentData,
        updateCourse,
        deleteCourse
      }}
    >
      {children}
    </CourseContext.Provider>
  );
};
