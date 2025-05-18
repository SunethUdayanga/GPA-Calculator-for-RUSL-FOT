const MTTCourseData = [
    // Year 1 Semester 1
    { year: 1, semester: 1, courseCode: 'CMT 1301', subject: 'Fundamentals of Physics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1302', subject: 'Fundamentals of Chemistry for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1303', subject: 'Fundamentals of Mathematics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1304', subject: 'Fundamentals of Computer for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CML 1201', subject: 'Personality Development', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CML 1202', subject: 'Presentation Skills', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1005', subject: 'Communication Skills I (English)', credits: 0, status: 'C-NGP', grade: '' },
    
    // Year 1 Semester 2
    { year: 1, semester: 2, courseCode: 'ENT 1301', subject: 'Introduction to Basic Electronics', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'ENT 1302', subject: 'Fundamentals of Electricity and Magnetism', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1307', subject: 'Mathematics for Technology I', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1208', subject: 'Computer Programming for Technology', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'ENT 1204', subject: 'Workshop Technology I', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CML 1203', subject: 'Principles of Management', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CML 1204', subject: 'Health and Wellbeing', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1009', subject: 'Communication Skills II', credits: 0, status: 'C-NGP', grade: '' },
    { year: 1, semester: 2, courseCode: 'ENT 1203', subject: 'Engineering Drawing', credits: 2, status: 'O', grade: '' },
    
    // Year 2 Semester 1
    { year: 2, semester: 1, courseCode: 'MTT 2201', subject: 'Fundamentals of Solid State Physics', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'MTT 2202', subject: 'Chemistry for Materials Technology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'MTT 2203', subject: 'Introduction to Ceramic Technology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'MTT 2204', subject: 'Computer Aided Design (CAD)', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2306', subject: 'Mathematics for Technology II', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2301', subject: 'Fundamentals of Statistics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2201', subject: 'Social Sciences and Humanities', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2206', subject: 'Indigenous Technology', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2202', subject: 'Engineering Economics', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2002', subject: 'Communication Skills III', credits: 0, status: 'C-NGP', grade: '' },
    { year: 2, semester: 1, courseCode: 'ICT 2304', subject: 'Object Oriented Programming', credits: 3, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'MTT 2206', subject: 'Graphical Programming', credits: 2, status: 'O', grade: '' },
    
    // Year 2 Semester 2
    { year: 2, semester: 2, courseCode: 'MTT 2210', subject: 'Mechanical Behavior of Materials', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'MTT 2311', subject: 'Ceramic Technology I', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'MTT 2205', subject: 'Introduction to Metallurgy', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'MTT 2207', subject: 'Measurements, Error Analysis and Instrumentation', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'MTT 2108', subject: 'Chemical Engineering Sciences', credits: 1, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'MTT 2209', subject: 'Introduction to Polymer Technology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'MTT 2112', subject: 'Introduction to Thermodynamics', credits: 1, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CMT 2203', subject: 'Computational Mathematics', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2204', subject: 'Foreign Language', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2208', subject: 'Introduction to Marketing', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2205', subject: 'Ethics in Science and Technology', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'ICT 2206', subject: 'Multimedia and Web Technology', credits: 2, status: 'O', grade: '' },
    
    // Year 3 Semester 1
    { year: 3, semester: 1, courseCode: 'MTT 3308', subject: 'Polymer Technology I', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'MTT 3307', subject: 'Metallurgy I', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'MTT 3306', subject: 'Ceramic Technology II', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'MTT 3202', subject: 'Degradation of Materials', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'MTT 3103', subject: 'Ceramic Pilot Plant Practices', credits: 1, status: 'O', grade: '' },
    { year: 3, semester: 1, courseCode: 'MTT 3204', subject: 'Workshop Technology II', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'MTT 3212', subject: 'Non Destructive Testing of Materials', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'MTT 3111', subject: 'Thermodynamics for Materials Technology', credits: 1, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'CML 3101', subject: 'Legal and Patent aspects', credits: 1, status: 'O', grade: '' },
    
    // Year 3 Semester 2
    { year: 3, semester: 2, courseCode: 'CML 3102', subject: 'Industrial Safety', credits: 1, status: 'C', grade: '' },
    { year: 3, semester: 2, courseCode: 'MTT 3609', subject: 'Industrial Training', credits: 6, status: 'C', grade: '' },
    
    // Year 4 Semester 1
    { year: 4, semester: 1, courseCode: 'MTT 4201', subject: 'Fluid Mechanics', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4121', subject: 'Research Methodology and Scientific Writing', credits: 1, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4303', subject: 'Ceramic Technology III', credits: 3, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4219', subject: 'Applied Mechanics', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4104', subject: 'Glass Technology', credits: 1, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4305', subject: 'Polymer Technology II', credits: 3, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4106', subject: 'Mineral Processing', credits: 1, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4307', subject: 'Metallurgy II', credits: 3, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4820', subject: 'Research Project (Continue in 4-2)', credits: 0, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4108', subject: 'Directed Reading', credits: 1, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4109', subject: 'Seminar', credits: 1, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'MTT 4210', subject: 'Work Shadowing', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4201', subject: 'Entrepreneurship', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4202', subject: 'Human Resource Management', credits: 2, status: 'O', grade: '' },
    
    // Year 4 Semester 2
    { year: 4, semester: 2, courseCode: 'MTT 4820', subject: 'Research Project', credits: 8, status: 'C', grade: '' }
];

export default MTTCourseData;
