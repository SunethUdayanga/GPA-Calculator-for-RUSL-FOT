const MTTCourseData = [
    // Year 1 Semester 1
    { year: 1, semester: 1, courseCode: 'CMT 1301', subject: 'Fundamentals of Physics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1302', subject: 'Fundamentals of Chemistry for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1303', subject: 'Fundamentals of Mathematics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CMT 1304', subject: 'Fundamentals of Computer for Technology', credits: 3, status: 'C', grade: '' },
    { year: 1, semester: 1, courseCode: 'CML 1201', subject: 'Personality Development (Soft Skills)', credits: 2, status: 'C', grade: '' },
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
    { year: 2, semester: 1, courseCode: 'EET 2301', subject: 'Digital & Analog Electronics', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'EET 2202', subject: 'Electricity Network', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'EET 2208', subject: 'Introduction to Electrical Power', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'MTT 2204', subject: 'Computer Aided Design (CAD)', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'ICT 2304', subject: 'Object Oriented Programming', credits: 3, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'ICT 2202', subject: 'Operating Systems', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'ICT 2303', subject: 'Data Structures and Algorithms', credits: 3, status: 'O', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2306', subject: 'Mathematics for Technology II', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2301', subject: 'Fundamentals of Statistics for Technology', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CMT 2002', subject: 'Communication Skills III', credits: 0, status: 'C-NGP', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2202', subject: 'Engineering Economics', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2201', subject: 'Social Sciences and Humanity', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 1, courseCode: 'CML 2206', subject: 'Indigenous Technology', credits: 2, status: 'O', grade: '' },
    
    // Year 2 Semester 2
    { year: 2, semester: 2, courseCode: 'EET 2203', subject: 'Electronic Devices and Circuits', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'EET 2204', subject: 'Electrical Measurements and Instrumentation', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'EET 2305', subject: 'Electrical Machines', credits: 3, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'EET 2206', subject: 'Signals and Systems', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CMT 2203', subject: 'Computational Mathematics', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2204', subject: 'Foreign Language', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2205', subject: 'Ethics in Science and Technology', credits: 2, status: 'C', grade: '' },
    { year: 2, semester: 2, courseCode: 'CML 2208', subject: 'Introduction to Marketing', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'EET 2207', subject: 'Computer Aided Machine Design', credits: 2, status: 'O', grade: '' },
    { year: 2, semester: 2, courseCode: 'ICT 2213', subject: 'Data Communication and Networking', credits: 2, status: 'O', grade: '' },
    
    // Year 3 Semester 1
    { year: 3, semester: 1, courseCode: 'EET 3301', subject: 'Electrical Power Systems', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3202', subject: 'Communication Systems', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3203', subject: 'Computer Systems', credits: 2, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3304', subject: 'Digital Signal Processing', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3305', subject: 'Control Systems', credits: 3, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'CML 3101', subject: 'Legal and Patent Aspects', credits: 1, status: 'C', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3206', subject: 'Automation Technology I', credits: 2, status: 'O', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3209', subject: 'Automobile Electrical Systems', credits: 2, status: 'O', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3210', subject: 'Electrical Installations', credits: 2, status: 'O', grade: '' },
    { year: 3, semester: 1, courseCode: 'EET 3211', subject: 'Machine Element Design', credits: 2, status: 'O', grade: '' },
    { year: 3, semester: 1, courseCode: 'ICT 3217', subject: 'Advanced Computer Networking', credits: 2, status: 'O', grade: '' },
    
    // Year 3 Semester 2
    { year: 3, semester: 2, courseCode: 'EET 3607', subject: 'Industrial Training', credits: 6, status: 'C', grade: '' },
    { year: 3, semester: 2, courseCode: 'CML 3102', subject: 'Industrial Safety', credits: 1, status: 'C', grade: '' },
    
    // Year 4 Semester 1
    { year: 4, semester: 1, courseCode: 'EET 4301', subject: 'Electronic Circuit Design and Simulations', credits: 3, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4303', subject: 'Electrical Energy Utilization', credits: 3, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4304', subject: 'Power Electronics', credits: 3, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4818', subject: 'Undergraduate Project', credits: 4, status: 'C', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4202', subject: 'Embedded System Design', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4305', subject: 'Digital Communication', credits: 3, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4206', subject: 'Automation Technology II', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4207', subject: 'Telecommunication Systems', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4208', subject: 'Fiber Optics Techniques', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'EET 4216', subject: 'Energy and Environment', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4201', subject: 'Entrepreneurship', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 1, courseCode: 'CML 4202', subject: 'Human Resources Management', credits: 2, status: 'O', grade: '' },
    
    // Year 4 Semester 2
    { year: 4, semester: 2, courseCode: 'EET 4818', subject: 'Undergraduate Project', credits: 4, status: 'C', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4210', subject: 'Electronic Product Design', credits: 2, status: 'C', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4217', subject: 'Electrical Machines and Drives', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4209', subject: 'High Voltage Engineering', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4311', subject: 'Internet Technology and Applications', credits: 3, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4312', subject: 'Power System Analysis', credits: 3, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4213', subject: 'Antenna and Propagation', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4214', subject: 'Wireless Communication', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4215', subject: 'Mechatronics', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4219', subject: 'Green Energy and Zero Emission Concepts', credits: 2, status: 'O', grade: '' },
    { year: 4, semester: 2, courseCode: 'EET 4220', subject: 'Graphical Programming and Data Acquisition', credits: 2, status: 'O', grade: '' }
];

export default MTTCourseData;