const FDTCourseData = [
    // Year 1 Semester 1
    { year: 1, semester: 1, courseCode: 'CMT 1301', subject: 'Fundamentals of Physics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1302', subject: 'Fundamentals of Chemistry for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1303', subject: 'Fundamentals of Mathematics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1304', subject: 'Fundamentals of Computer for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1306', subject: 'Fundamentals of Biology for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1005', subject: 'Communication Skills I (English)', credits: 0, status: 'C-NGP', grade: '' },
    { year: 1, semester: 1, courseCode: 'CML 1201', subject: 'Personality Development (Soft Skills)', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CML 1202', subject: 'Presentation Skills', credits: 2, status: 'C', grade: '' },
    
    // Year 1 Semester 2
    { year: 1, semester: 2, courseCode: 'BPT 1201', subject: 'General Microbiology', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'BPT 1202', subject: 'Cell Biology', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'FDT 1201', subject: 'Organic Chemistry', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1307', subject: 'Mathematics for Technology I', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1208', subject: 'Computer Programming for Technology', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1009', subject: 'Communication Skills II', credits: 0, status: 'C-NGP', grade: '' },
    { year: 1, semester: 2, courseCode: 'CML 1203', subject: 'Principles of Management', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CML 1204', subject: 'Health and Wellbeing', credits: 2, status: 'C', grade: '' },
    
    // Year 2 Semester 1
    { year: 2, semester: 1, courseCode: 'FDT 2201', subject: 'Physical Chemistry', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'FDT 2202', subject: 'Basic Biochemistry', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'FDT 2203', subject: 'Introduction to Food Industry', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'FDT 2204', subject: 'Food Preservation', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2301', subject: 'Fundamental of Statistics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2306', subject: 'Mathematics for Technology II', credits: 3, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2002', subject: 'Communication Skills III', credits: 0, status: 'C-NGP', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2201', subject: 'Social Sciences and Humanities', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2206', subject: 'Indigenous Technology', credits: 2, status: 'O', grade: '' },
    
    // Year 2 Semester 2
    { year: 2, semester: 2, courseCode: 'FDT 2305', subject: 'Analytical Chemistry', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'FDT 2206', subject: 'Food Physics', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'FDT 2207', subject: 'Food Chemistry', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'FDT 2208', subject: 'Food Microbiology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'FDT 2209', subject: 'Introduction to Human Nutrition', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'FDT 2210', subject: 'Food Biotechnology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CMT 2203', subject: 'Computational Mathematics', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2204', subject: 'Foreign Language', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2205', subject: 'Ethics in Science and Technology', credits: 2, status: 'C', grade: '' },
    
    // Year 3 Semester 1
    { year: 3, semester: 1, courseCode: 'FDT 3201', subject: 'Fruits & Vegetables Processing Technology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3202', subject: 'Food Engineering', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3203', subject: 'Food Analysis', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3204', subject: 'Meat and Fish Processing Technology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3205', subject: 'Functional Food and Food Toxicology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3206', subject: 'Dairy Product Technology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3207', subject: 'Confectionary and Beverage Technology', credits: 2, status: 'O', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3108', subject: 'Current Topics in Food Industry', credits: 1, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'FDT 3209', subject: 'Cereals and Pulses Processing Technology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'CML 3101', subject: 'Legal and Patent Aspects', credits: 1, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3207', subject: 'Enzyme Technology', credits: 2, status: 'O', grade: '' },
    
    // Year 3 Semester 2
    { year: 3, semester: 2, courseCode: 'FDT 3212', subject: 'Spices and Oil Processing Technology', credits: 2, status: 'O', grade: '' },
    { year: 3, semester: 2, courseCode: 'FDT 3614', subject: 'Industrial Training', credits: 6, status: 'C', grade: '' },
    { year: 3, semester: 2, courseCode: 'FDT 3215', subject: 'Food Packaging Technology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 2, courseCode: 'CML 3102', subject: 'Industrial Safety', credits: 1, status: 'C', grade: '' },
    
    // Year 4 Semester 1
    { year: 4, semester: 1, courseCode: 'FDT 4302', subject: 'Food Product Development', credits: 3, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'FDT 4203', subject: 'Water Science and Technology', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'FDT 4206', subject: 'Supply Chain Analysis', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'FDT 4107', subject: 'Scientific Writing', credits: 1, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'FDT 4208', subject: 'Cleaner Production', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'FDT 4209', subject: 'Sensory Evaluation', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4201', subject: 'Entrepreneurship', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4202', subject: 'Human Resource Management', credits: 2, status: 'O', grade: '' },
    
    // Year 4 Semester 2
    { year: 4, semester: 2, courseCode: 'FDT 4801', subject: 'Research Project', credits: 8, status: 'C', grade: '' },
    { year: 4, semester: 2, courseCode: 'FDT 4204', subject: 'Quality Assurance, Safety and Standards in Food Industry', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 2, courseCode: 'FDT 4205', subject: 'Food Marketing', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 2, courseCode: 'FDT 4207', subject: 'Nanotechnology', credits: 2, status: 'O', grade: '' }
];

export default FDTCourseData;