const BPTCourseData = [
    // Year 1 Semester 1
    { year: 1, semester: 1, courseCode: 'CMT 1301', subject: 'Fundamentals of Physics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1302', subject: 'Fundamentals of Chemistry for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1303', subject: 'Fundamentals of Mathematics for technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1304', subject: 'Fundamentals of Computer for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1005', subject: 'Communication Skills I (English)', credits: 0, status: 'C-NGP', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1306', subject: 'Fundamentals of Biology for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CML 1201', subject: 'Personality Development', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CML 1202', subject: 'Presentation Skills', credits: 2, status: 'C', grade: '' },
    
    // Year 1 Semester 2
    { year: 1, semester: 2, courseCode: 'BPT 1201', subject: 'General Microbiology', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'BPT 1202', subject: 'Cell Biology', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1307', subject: 'Mathematics for Technology I', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1208', subject: 'Computer Programming for Technology', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CMT 1009', subject: 'Communication Skills II', credits: 0, status: 'C-NGP', grade: '' },
    { year: 1, semester: 2, courseCode: 'FDT 1201', subject: 'Organic Chemistry', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CML 1203', subject: 'Principles of Management', credits: 2, status: 'C', grade: '' },
    { year: 1, semester: 2, courseCode: 'CML 1204', subject: 'Health and Wellbeing', credits: 2, status: 'C', grade: '' },
    
    // Year 2 Semester 1
    { year: 2, semester: 1, courseCode: 'BPT 2201', subject: 'Quality Management', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'BPT 2202', subject: 'Introduction to Bioprocess Technology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'BPT 2203', subject: 'Genetics and Evolution', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'BPT 2204', subject: 'Plant Tissue Culture', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'BPT 2205', subject: 'Molecular Biology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'FDT 2202', subject: 'Basic Biochemistry', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2301', subject: 'Fundamentals of Statistics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2002', subject: 'Communication Skills III', credits: 0, status: 'C-NGP', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2306', subject: 'Mathematics for Technology II', credits: 3, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2201', subject: 'Social Sciences and Humanities', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2202', subject: 'Engineering Economics', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2206', subject: 'Indigenous Technology', credits: 2, status: 'O', grade: '' },
    
    // Year 2 Semester 2
    { year: 2, semester: 2, courseCode: 'BPT 2206', subject: 'Bioreactor Operation and Design', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'BPT 2207', subject: 'Basic Immunology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'BPT 2108', subject: 'Quality Assurance and Safety of Bioprocessed Products', credits: 1, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'BPT 2209', subject: 'Molecular Biotechnology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'FDT 2305', subject: 'Analytical Chemistry', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CMT 2203', subject: 'Computational Mathematics', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2204', subject: 'Foreign Language', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2205', subject: 'Ethics in Science and Technology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2208', subject: 'Introduction to Marketing', credits: 2, status: 'O', grade: '' },
    
    // Year 3 Semester 1
    { year: 3, semester: 1, courseCode: 'BPT 3201', subject: 'Molecular Microbiology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3302', subject: 'Bioinformatics', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3203', subject: 'Bioprocess Instrumentation and Control', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3304', subject: 'Molecular Modeling', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3205', subject: 'Bioprocess Optimization and Simulation', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3206', subject: 'Molecular Immunology and Current Applications', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3207', subject: 'Enzyme Technology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'BPT 3208', subject: 'Industrial Microbiology', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'CML 3101', subject: 'Legal and Patent Aspects', credits: 1, status: 'C', grade: '' },
    
    // Year 3 Semester 2
    { year: 3, semester: 2, courseCode: 'BPT 3108', subject: 'Seminar', credits: 1, status: 'C', grade: '' },
    { year: 3, semester: 2, courseCode: 'BPT 3209', subject: 'Scientific Writing', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 2, courseCode: 'BPT 3610', subject: 'Internship', credits: 6, status: 'C', grade: '' },
    { year: 3, semester: 2, courseCode: 'CML 3102', subject: 'Industrial Safety', credits: 1, status: 'C', grade: '' },
    
    // Year 4 Semester 1
    { year: 4, semester: 1, courseCode: 'BPT 4301', subject: 'Drug Designing', credits: 3, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'BPT 4302', subject: 'Downstream Process Technology', credits: 3, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'BPT 4303', subject: 'Bioremediation and Waste Management', credits: 3, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'BPT 4204', subject: 'Molecular Virology', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'BPT 4205', subject: 'Plant Cell Culture', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'BPT 4206', subject: 'Pharmaceutical Biotechnology', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'BPT 4207', subject: 'Bioproduct Development', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4201', subject: 'Entrepreneurship', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4202', subject: 'Human Resource Management', credits: 2, status: 'O', grade: '' },
    
    // Year 4 Semester 2
    { year: 4, semester: 2, courseCode: 'BPT 4808', subject: 'Bioprocess Technology Project', credits: 8, status: 'C', grade: '' }
];

export default BPTCourseData;