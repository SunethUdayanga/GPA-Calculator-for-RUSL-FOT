import React, { createContext, useContext, ReactNode } from 'react';
import { useCourseContext, Course } from './CourseContext';

// Define the types for our export functions
interface ExportContextType {
  exportToJson: () => void;
  exportToCsv: () => void;
}

const ExportContext = createContext<ExportContextType | undefined>(undefined);

export const useExportContext = () => {
  const context = useContext(ExportContext);
  if (!context) {
    throw new Error('useExportContext must be used within an ExportProvider');
  }
  return context;
};

interface ExportProviderProps {
  children: ReactNode;
}

export const ExportProvider: React.FC<ExportProviderProps> = ({ children }) => {
  const { courses, overallGPA, totalCredits } = useCourseContext();

  // Helper function to download a file
  const downloadFile = (content: string, fileName: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Export to JSON format
  const exportToJson = () => {
    try {
      const selectedDepartment = localStorage.getItem('selectedDepartment') || 'ICT';
      const exportData = {
        department: selectedDepartment,
        exportDate: new Date().toISOString(),
        overallGPA,
        totalCredits,
        courses
      };
      
      const jsonContent = JSON.stringify(exportData, null, 2);
      const fileName = `${selectedDepartment}_GPA_Data_${new Date().toISOString().split('T')[0]}.json`;
      
      downloadFile(jsonContent, fileName, 'application/json');
    } catch (error) {
      console.error('Error exporting to JSON:', error);
      alert('Failed to export data to JSON. Please try again.');
    }
  };

  // Export to CSV format
  const exportToCsv = () => {
    try {
      const selectedDepartment = localStorage.getItem('selectedDepartment') || 'ICT';
      
      // Create CSV header
      const headers = ['Year', 'Semester', 'Course Code', 'Subject', 'Credits', 'Status', 'Grade'];
      
      // Convert courses to CSV rows
      const rows = courses.map((course: Course) => [
        course.year,
        course.semester,
        course.courseCode,
        course.subject,
        course.credits,
        course.status,
        course.grade
      ]);
      
      // Add summary row
      rows.push(['', '', '', '', '', '', '']);
      rows.push(['Overall GPA', overallGPA, '', '', '', '', '']);
      rows.push(['Total Credits', totalCredits, '', '', '', '', '']);
      
      // Combine headers and rows
      const csvContent = [
        headers.join(','),
        ...rows.map(row => row.map(cell => {
          // Wrap text fields in quotes to handle commas in text
          return typeof cell === 'string' && cell.includes(',') 
            ? `"${cell}"` 
            : cell;
        }).join(','))
      ].join('\n');
      
      const fileName = `${selectedDepartment}_GPA_Data_${new Date().toISOString().split('T')[0]}.csv`;
      
      downloadFile(csvContent, fileName, 'text/csv');
    } catch (error) {
      console.error('Error exporting to CSV:', error);
      alert('Failed to export data to CSV. Please try again.');
    }
  };

  return (
    <ExportContext.Provider value={{ exportToJson, exportToCsv }}>
      {children}
    </ExportContext.Provider>
  );
};
