const gradePoints = {
  "A+": 4.0,
  A: 4.0,
  "A-": 3.7,
  "B+": 3.3,
  B: 3.0,
  "B-": 2.7,
  "C+": 2.3,
  C: 2.0,
  "C-": 1.7,
  "D+": 1.3,
  D: 1.0,
  E: 0.0,
};

// Sample data from the provided information
const sampleData = [
  // Year 1 Semester 1
  {
    year: 1,
    semester: 1,
    courseCode: "ICT 1101",
    subject: "Productivity Tools",
    credits: 1,
    status: "C",
    grade: "B+",
  },
  {
    year: 1,
    semester: 1,
    courseCode: "ICT 1202",
    subject: "Electronic circuits",
    credits: 2,
    status: "C",
    grade: "A",
  },
  {
    year: 1,
    semester: 1,
    courseCode: "ICT 1305",
    subject: "Program Designing and Programming",
    credits: 3,
    status: "C",
    grade: "A-",
  },
  {
    year: 1,
    semester: 1,
    courseCode: "CMT 1301",
    subject: "Fundamentals of Physics for Technology",
    credits: 3,
    status: "C",
    grade: "B",
  },
  {
    year: 1,
    semester: 1,
    courseCode: "CMT 1303",
    subject: "Fundamentals of Mathematics for Technology",
    credits: 3,
    status: "C",
    grade: "B+",
  },
  {
    year: 1,
    semester: 1,
    courseCode: "CML 1301",
    subject: "Personality Development",
    credits: 3,
    status: "C",
    grade: "A",
  },
  {
    year: 1,
    semester: 1,
    courseCode: "CMT 1005",
    subject: "Communication Skills I",
    credits: 0,
    status: "C-NGP",
    grade: "A",
  },

  // Year 1 Semester 2
  {
    year: 1,
    semester: 2,
    courseCode: "ICT 1110",
    subject: "Introduction to Multimedia",
    credits: 1,
    status: "C",
    grade: "A-",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "ICT 1108",
    subject: "Skill Development Project I",
    credits: 1,
    status: "C",
    grade: "A",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "ICT 1209",
    subject: "Web Technologies",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "ICT 1207",
    subject: "Human Computer Interaction",
    credits: 2,
    status: "C",
    grade: "A",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "ENT 1302",
    subject: "Fundamentals of Electricity and Magnetism",
    credits: 3,
    status: "O",
    grade: "B",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "CML 1203",
    subject: "Principles of Management",
    credits: 2,
    status: "C",
    grade: "A-",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "CML 1204",
    subject: "Health and Wellbeing",
    credits: 2,
    status: "C",
    grade: "A",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "CMT 1009",
    subject: "Communication Skills II",
    credits: 0,
    status: "C-NGP",
    grade: "A",
  },
  {
    year: 1,
    semester: 2,
    courseCode: "CMT 1307",
    subject: "Mathematics For Technology 1",
    credits: 3,
    status: "C",
    grade: "B+",
  },

  // Year 2 Semester 1
  {
    year: 2,
    semester: 1,
    courseCode: "ICT 2101",
    subject: "Advanced applications",
    credits: 1,
    status: "C",
    grade: "A",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "ICT 2202",
    subject: "Operating Systems",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "ICT 2303",
    subject: "Data Structures and Algorithms",
    credits: 3,
    status: "C",
    grade: "A-",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "ICT 2304",
    subject: "Object Oriented Programming",
    credits: 3,
    status: "C",
    grade: "A",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "ICT 2207",
    subject: "Software System Design",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "ICT 2212",
    subject: "Skill Development Project II",
    credits: 2,
    status: "C",
    grade: "A",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "CML 2202",
    subject: "Engineering Economics",
    credits: 2,
    status: "C",
    grade: "B",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "CMT 2002",
    subject: "Communication Skills III",
    credits: 0,
    status: "C-NGP",
    grade: "A",
  },
  {
    year: 2,
    semester: 1,
    courseCode: "EET 2207",
    subject: "Mathematics for Technology II",
    credits: 2,
    status: "O",
    grade: "B+",
  },

  // Year 2 Semester 2
  {
    year: 2,
    semester: 2,
    courseCode: "ICT 2305",
    subject: "Computational Mathematics",
    credits: 3,
    status: "C",
    grade: "B",
  },
  {
    year: 2,
    semester: 2,
    courseCode: "ICT 2314",
    subject: "Introduction to the Information Systems",
    credits: 3,
    status: "C",
    grade: "A-",
  },
  {
    year: 2,
    semester: 2,
    courseCode: "ICT 2211",
    subject: "Fundamentals of Statistics",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 2,
    semester: 2,
    courseCode: "ICT 2213",
    subject: "Data Communication and Networking",
    credits: 2,
    status: "C",
    grade: "A",
  },
  {
    year: 2,
    semester: 2,
    courseCode: "ICT 2308",
    subject: "Database Systems",
    credits: 3,
    status: "C",
    grade: "A",
  },
  {
    year: 2,
    semester: 2,
    courseCode: "ICT 2109",
    subject: "Communication and Learning Skills",
    credits: 1,
    status: "C",
    grade: "A-",
  },
  {
    year: 2,
    semester: 2,
    courseCode: "CML 2204",
    subject: "Foreign Language",
    credits: 2,
    status: "C",
    grade: "B",
  },
  {
    year: 2,
    semester: 2,
    courseCode: "CML 2205",
    subject: "Ethics for Science and Technology",
    credits: 2,
    status: "C",
    grade: "A",
  },

  // Year 3 Semester 1
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3201",
    subject: "Project Management",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3217",
    subject: "Advance Computer Networks",
    credits: 2,
    status: "O",
    grade: "A-",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3203",
    subject: "Scientific Computer Applications",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "CML 3101",
    subject: "Legal and Patent aspects",
    credits: 1,
    status: "C",
    grade: "B",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3312",
    subject: "Software Verification and Validation",
    credits: 3,
    status: "C",
    grade: "A-",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3206",
    subject: "Skills Development Project III",
    credits: 2,
    status: "C",
    grade: "A",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3307",
    subject: "Computational Statistics",
    credits: 3,
    status: "O",
    grade: "B",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3314",
    subject: "Embedded Systems",
    credits: 3,
    status: "C",
    grade: "B+",
  },
  {
    year: 3,
    semester: 1,
    courseCode: "ICT 3208",
    subject: "Design and Analysis of Algorithms",
    credits: 2,
    status: "C",
    grade: "A",
  },

  // Year 3 Semester 2
  {
    year: 3,
    semester: 2,
    courseCode: "ICT 3209",
    subject: "Computer Organization and Architecture",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 3,
    semester: 2,
    courseCode: "ICT 3310",
    subject: "Information Security",
    credits: 3,
    status: "C",
    grade: "A",
  },
  {
    year: 3,
    semester: 2,
    courseCode: "ICT 3311",
    subject: "Robotics",
    credits: 3,
    status: "O",
    grade: "A-",
  },
  {
    year: 3,
    semester: 2,
    courseCode: "ICT 3315",
    subject: "Internet of Things",
    credits: 3,
    status: "O",
    grade: "B",
  },
  {
    year: 3,
    semester: 2,
    courseCode: "ICT 3213",
    subject: "Advanced SW System Design",
    credits: 2,
    status: "C",
    grade: "A",
  },
  {
    year: 3,
    semester: 2,
    courseCode: "ICT 3216",
    subject: "Research Methodology",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 3,
    semester: 2,
    courseCode: "ICT 3204",
    subject: "E-Commerce",
    credits: 2,
    status: "C",
    grade: "A-",
  },
  {
    year: 3,
    semester: 2,
    courseCode: "CML 3203",
    subject: "Basics of Accountancy",
    credits: 2,
    status: "C",
    grade: "B",
  },

  // Year 4 Semester 1
  {
    year: 4,
    semester: 1,
    courseCode: "ICT 4301",
    subject: "Mobile Computing",
    credits: 3,
    status: "C",
    grade: "A",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "ICT 4302",
    subject: "Internet Applications",
    credits: 3,
    status: "C",
    grade: "A-",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "ICT 4103",
    subject: "Software Engineering",
    credits: 1,
    status: "C",
    grade: "B+",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "ICT 4204",
    subject: "Graphics and Image Processing",
    credits: 2,
    status: "O",
    grade: "A",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "ICT 4205",
    subject: "Current Topics in Information Technology",
    credits: 2,
    status: "C",
    grade: "B",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "ICT 4306",
    subject: "Data Science",
    credits: 3,
    status: "O",
    grade: "A-",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "ICT 4207",
    subject: "Artificial Intelligence",
    credits: 2,
    status: "O",
    grade: "A",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "CML 4201",
    subject: "Entrepreneurship",
    credits: 2,
    status: "C",
    grade: "B+",
  },
  {
    year: 4,
    semester: 1,
    courseCode: "CML 4202",
    subject: "Human Resource Management",
    credits: 2,
    status: "O",
    grade: "A",
  },

  // Year 4 Semester 2
  {
    year: 4,
    semester: 2,
    courseCode: "ICT 4808",
    subject: "Project",
    credits: 8,
    status: "C",
    grade: "A",
  },
  {
    year: 4,
    semester: 2,
    courseCode: "ICT 4609",
    subject: "Industrial Training",
    credits: 6,
    status: "C",
    grade: "A-",
  },
];

// Materials Technology curriculum data
const materialTech = [
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


// Electrical and Electronic Technology curriculum data
const tricalTronicTech = [
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

// Food Technology curriculum data
const foodTech = [
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

// Bioprocess Technology curriculum data
const bioTech = [
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


// Empty array to replace the removed optional subjects
const availableOptionalSubjects = [];

// Constants
const TOTAL_CREDITS_REQUIRED = 120;
const COMPULSORY_CREDITS = 114; // As per requirement

// Global variables
let courses = [];
let currentCourseId = null;
let modal;
let activeYearTab = null;

// DOM elements
const overallGPAElement = document.getElementById("overallGPA");
const compulsoryOnlyGPAElement = document.getElementById("compulsoryOnlyGPA");
const gpaChangeElement = document.getElementById("gpaChange");
const compulsoryCreditsElement = document.getElementById("compulsoryCredits");
const optionalCreditsElement = document.getElementById("optionalCredits");
const nonGPACreditsElement = document.getElementById("nonGPACredits");
const totalCreditsElement = document.getElementById("totalCredits");
const courseForm = document.getElementById("courseForm");
const loadSampleDataBtn = document.getElementById("loadSampleData");
const clearDataBtn = document.getElementById("clearData");
const exportBtn = document.getElementById("exportBtn");
const yearTabs = document.getElementById("yearTabs");
const yearTabContent = document.getElementById("yearTabContent");
const semesterSummaryList = document.getElementById("semesterSummaryList");
const classHonorsElement = document.getElementById("classHonors");
const optionalSubjectsContainer = document.getElementById("optionalSubjectsContainer");

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  // Initialize the modal
  const modalElement = document.getElementById("gradeModal");
  if (modalElement) {
    modal = new bootstrap.Modal(modalElement);
  } else {
    console.error("Modal element not found!");
  }

  // Load courses from localStorage
  loadCourses();

  // If no courses loaded, initialize with empty array
  if (!courses || !Array.isArray(courses)) {
    courses = [];
  }

  // Make sure all courses have IDs
  courses.forEach((course) => {
    if (!course.id) {
      course.id = generateId();
    }
  });

  // Save courses with IDs
  saveCourses();

  // Set up navigation
  setupNavigation();

  // Render dashboard
  updateDashboard();

  // Render courses by year and semester
  renderCoursesByYear();

  // Render optional subjects
  renderOptionalSubjects();

  // Set up event listeners
  setupEventListeners();
  
  // Add event listener for tab changes
  document.querySelectorAll('[data-bs-toggle="pill"]').forEach(tabEl => {
    tabEl.addEventListener('shown.bs.tab', event => {
      activeYearTab = event.target.getAttribute('data-bs-target');
    });
  });
});

// Load courses from localStorage
function loadCourses() {
  const storedCourses = localStorage.getItem("courses");
  if (storedCourses) {
    courses = JSON.parse(storedCourses);
  }
}

// Save courses to localStorage
function saveCourses() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

// Set up navigation between sections
function setupNavigation() {
  const navItems = document.querySelectorAll(".sidebar-menu li");
  const sections = document.querySelectorAll("section");

  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      const targetSection = item.getAttribute("data-section");

      // Update active nav item
      navItems.forEach((navItem) => navItem.classList.remove("active"));
      item.classList.add("active");

      // Show target section
      sections.forEach((section) => {
        section.classList.remove("active-section");
        if (section.id === targetSection) {
          section.classList.add("active-section");
        }
      });
    });
  });
}

// Calculate GPA with only compulsory subjects
function calculateCompulsoryOnlyGPA() {
  let totalGradePoints = 0;
  let totalGPACredits = 0;

  courses.forEach((course) => {
    if (course.status === "C" && course.credits > 0) {
      totalGradePoints += gradePoints[course.grade] * course.credits;
      totalGPACredits += course.credits;
    }
  });

  return totalGPACredits > 0
    ? (totalGradePoints / totalGPACredits).toFixed(2)
    : "0.00";
}

// Update dashboard with GPA and credit summary
function updateDashboard() {
  updateGPASummary();
  updateSemesterSummary();
  updateDegreeProgress();
}

// Calculate GPA and update summary
function updateGPASummary() {
  let totalGradePoints = 0;
  let totalGPACredits = 0;
  let compulsoryCredits = 0;
  let optionalCredits = 0;
  let nonGPACredits = 0;
  let totalCredits = 0;
  
  // Calculate compulsory-only GPA first
  const compulsoryOnlyGPA = calculateCompulsoryOnlyGPA();

  // Now calculate overall GPA including optional subjects
  courses.forEach((course) => {
    const credits = course.credits;
    
    // Only count active courses in total
    if (!course.isInactive) {
      totalCredits += credits;
    }

    if (course.status === "C") {
      compulsoryCredits += credits;
      if (credits > 0) {
        totalGradePoints += gradePoints[course.grade] * course.credits;
        totalGPACredits += credits;
      }
    } else if (course.status === "O" && !course.isInactive) {
      // Only count active optional courses
      optionalCredits += credits;
      if (credits > 0) {
        totalGradePoints += gradePoints[course.grade] * course.credits;
        totalGPACredits += credits;
      }
    } else if (course.status === "C-NGP") {
      nonGPACredits += credits;
    }
  });

  const overallGPA =
    totalGPACredits > 0
      ? (totalGradePoints / totalGPACredits).toFixed(2)
      : "0.00";

  // Update the UI with both GPAs
  overallGPAElement.textContent = overallGPA;
  
  // Update the compulsory-only GPA display
  if (compulsoryOnlyGPAElement) {
    compulsoryOnlyGPAElement.textContent = compulsoryOnlyGPA;
  }
  
  // Show GPA difference if there are optional subjects
  if (gpaChangeElement && optionalCredits > 0) {
    const gpaDifference = (parseFloat(overallGPA) - parseFloat(compulsoryOnlyGPA)).toFixed(2);
    const isPositive = gpaDifference > 0;
    
    gpaChangeElement.innerHTML = `
      <span class="${isPositive ? 'text-success' : 'text-danger'}">
        ${isPositive ? '+' : ''}${gpaDifference}
        <i class="fas fa-${isPositive ? 'arrow-up' : 'arrow-down'}"></i>
      </span>
    `;
    gpaChangeElement.style.display = 'block';
  } else if (gpaChangeElement) {
    gpaChangeElement.style.display = 'none';
  }

  compulsoryCreditsElement.textContent = compulsoryCredits;
  optionalCreditsElement.textContent = optionalCredits;
  nonGPACreditsElement.textContent = nonGPACredits;
  totalCreditsElement.textContent = totalCredits;
  
  // Update class honors based on GPA
  updateClassHonors(parseFloat(overallGPA));
}

// Update class honors display
function updateClassHonors(gpa) {
  if (!classHonorsElement) return;
  
  let honorsClass = "";
  let honorsColor = "";
  
  if (gpa >= 3.70) {
    honorsClass = "First Class";
    honorsColor = "#FFD700"; // Gold color
  } else if (gpa >= 3.30) {
    honorsClass = "Second Class (Upper Division)";
    honorsColor = "#C0C0C0"; // Silver color
  } else if (gpa >= 3.00) {
    honorsClass = "Second Class (Lower Division)";
    honorsColor = "#CD7F32"; // Bronze color
  } else {
    honorsClass = "Pass";
    honorsColor = "#6c757d"; // Gray color
  }
  
  classHonorsElement.innerHTML = `<span style="color: ${honorsColor}; font-weight: bold;">${honorsClass}</span>`;
}

// Update semester summary
function updateSemesterSummary() {
  if (!semesterSummaryList) return;
  
  // Clear existing summary
  semesterSummaryList.innerHTML = "";

  // Get unique year-semester combinations
  const semesters = [];
  courses.forEach((course) => {
    if (course.isInactive) return; // Skip inactive courses
    
    const semKey = `${course.year}-${course.semester}`;
    if (!semesters.some((sem) => sem.key === semKey)) {
      semesters.push({
        key: semKey,
        year: course.year,
        semester: course.semester,
      });
    }
  });

  // Sort semesters
  semesters.sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.semester - b.semester;
  });

  // Create semester summary rows
  semesters.forEach((sem) => {
    const gpa = calculateSemesterGPA(sem.year, sem.semester);
    const credits = calculateSemesterCredits(sem.year, sem.semester);

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${sem.year}</td>
            <td>${sem.semester}</td>
            <td>${gpa}</td>
            <td>${credits}</td>
        `;

    semesterSummaryList.appendChild(row);
  });
}

// Calculate semester GPA
function calculateSemesterGPA(year, semester) {
  const semesterCourses = courses.filter(
    (course) =>
      course.year === year &&
      course.semester === semester &&
      (course.status === "C" || (course.status === "O" && !course.isInactive)) &&
      course.credits > 0
  );

  let totalGradePoints = 0;
  let totalCredits = 0;

  semesterCourses.forEach((course) => {
    totalGradePoints += gradePoints[course.grade] * course.credits;
    totalCredits += course.credits;
  });

  return totalCredits > 0
    ? (totalGradePoints / totalCredits).toFixed(2)
    : "0.00";
}

// Calculate semester credits
function calculateSemesterCredits(year, semester) {
  const semesterCourses = courses.filter(
    (course) => course.year === year && course.semester === semester && !course.isInactive
  );

  return semesterCourses.reduce((total, course) => total + course.credits, 0);
}

// Update degree progress
function updateDegreeProgress() {
  const degreeProgressBar = document.getElementById("degreeProgressBar");
  const creditsRemainingElement = document.getElementById("creditsRemaining");
  const departmentInfoElement = document.getElementById("departmentInfo");
  const totalRequiredElement = document.getElementById("totalRequiredCredits");
  
  if (!degreeProgressBar || !creditsRemainingElement) {
    console.warn("Degree progress elements not found in the DOM");
    return;
  }
  
  // Determine current department based on courses
  const currentDepartment = determineDepartment();
  
  // Get department-specific requirements
  const requirements = getDepartmentRequirements(currentDepartment);
  
  // Calculate total credits (only active courses)
  const totalCredits = courses.reduce((total, course) => {
    return total + (course.isInactive ? 0 : course.credits);
  }, 0);
  
  // Calculate compulsory and optional credits
  const compulsoryCredits = courses.reduce((total, course) => {
    return course.status === "C" && !course.isInactive ? total + course.credits : total;
  }, 0);
  
  const optionalCredits = courses.reduce((total, course) => {
    return course.status === "O" && !course.isInactive ? total + course.credits : total;
  }, 0);
  
  // Calculate remaining credits needed
  const creditsRemaining = Math.max(0, requirements.totalCredits - totalCredits);
  
  // Calculate progress percentage
  const progressPercentage = Math.min(100, (totalCredits / requirements.totalCredits) * 100);
  
  // Update progress bar
  degreeProgressBar.style.width = `${progressPercentage}%`;
  degreeProgressBar.textContent = `${Math.round(progressPercentage)}%`;
  degreeProgressBar.setAttribute("aria-valuenow", progressPercentage);
  
  // Update credits remaining text
  creditsRemainingElement.textContent = creditsRemaining;
  totalRequiredElement.textContent = requirements.totalCredits;
  
  // Update progress bar color based on progress
  if (progressPercentage < 50) {
    degreeProgressBar.classList.remove("bg-success", "bg-warning");
    degreeProgressBar.classList.add("bg-danger");
  } else if (progressPercentage < 80) {
    degreeProgressBar.classList.remove("bg-success", "bg-danger");
    degreeProgressBar.classList.add("bg-warning");
  } else {
    degreeProgressBar.classList.remove("bg-warning", "bg-danger");
    degreeProgressBar.classList.add("bg-success");
  }
  
  // Update department-specific information
  if (departmentInfoElement) {
    departmentInfoElement.innerHTML = `
      <div class=" mt-3">
        <div class="card-header">
          <h5>${getDepartmentName(currentDepartment)} Requirements</h5>
        </div>
        <div class="">
          <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Compulsory Credits
              <span class="badge bg-primary rounded-pill">${compulsoryCredits}/${requirements.compulsoryCredits}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center">
              Optional Credits
              <span class="badge bg-info rounded-pill">${optionalCredits}/${requirements.optionalCredits}</span>
            </li>
            
          </ul>
        </div>
      </div>
    `;
  }
  
  console.log("Degree progress updated:", {
    department: currentDepartment,
    totalCredits,
    creditsRemaining,
    progressPercentage,
    requirements
  });
}

// Get department-specific requirements
function getDepartmentRequirements(department) {
  // Default requirements
  const defaultRequirements = {
    totalCredits: 120,
    compulsoryCredits: 114,
    optionalCredits: 6,
    additionalRequirements: [
      "Complete the degree program within four academic years",
      "Obtain grades of C or better in all compulsory courses"
    ]
  };
  
  // Department-specific requirements
  const departmentRequirements = {
    'ict': {
      totalCredits: 120,
      compulsoryCredits: 114,
      optionalCredits: 6,
      additionalRequirements: [
        "Complete the degree program within four academic years",
        "Obtain grades of C or better in all compulsory courses",
        "Complete at least one industry project"
      ]
    },
    'material': {
      totalCredits: 120,
      compulsoryCredits: 104,
      optionalCredits: 16,
      additionalRequirements: [
        "Complete the degree program within four academic years",
        "Obtain grades of C or better in all compulsory courses",
        "Complete materials laboratory courses"
      ]
    },
    'electrical': {
      totalCredits: 120,
      compulsoryCredits: 100,
      optionalCredits: 20,
      additionalRequirements: [
        "Complete the degree program within four academic years",
        "Obtain grades of C or better in all compulsory courses",
        "Complete electrical workshop requirements"
      ]
    },
    'food': {
      totalCredits: 120,
      compulsoryCredits: 111,
      optionalCredits: 9,
      additionalRequirements: [
        "Complete the degree program within four academic years",
        "Obtain grades of C or better in all compulsory courses",
        "Complete food safety certification"
      ]
    },
    'bio': {
      totalCredits: 120,
      compulsoryCredits: 115,
      optionalCredits: 5,
      additionalRequirements: [
        "Complete the degree program within four academic years",
        "Obtain grades of C or better in all compulsory courses",
        "Complete laboratory safety training"
      ]
    }
  };
  
  return departmentRequirements[department] || defaultRequirements;
}

// Determine current department based on courses
function determineDepartment() {
  // Check for department-specific course codes
  const courseCodePatterns = {
    'ict': /^ICT/,
    'material': /^MTT/,
    'electrical': /^EET/,
    'food': /^FDT/,
    'bio': /^BPT/
  };
  
  // Count occurrences of each department's course codes
  const departmentCounts = {};
  
  for (const [dept, pattern] of Object.entries(courseCodePatterns)) {
    departmentCounts[dept] = courses.filter(course => pattern.test(course.courseCode)).length;
  }
  
  // Find department with most courses
  let maxCount = 0;
  let detectedDepartment = 'ict'; // Default to ICT
  
  for (const [dept, count] of Object.entries(departmentCounts)) {
    if (count > maxCount) {
      maxCount = count;
      detectedDepartment = dept;
    }
  }
  
  return detectedDepartment;
}

// Render courses organized by year and semester
function renderCoursesByYear() {
  // Store the currently active year tab before clearing content
  if (!activeYearTab && yearTabs.querySelector('.nav-link.active')) {
    activeYearTab = yearTabs.querySelector('.nav-link.active').getAttribute('data-bs-target');
  }

  // Clear existing content
  yearTabs.innerHTML = "";
  yearTabContent.innerHTML = "";

  // Get unique years
  const years = [...new Set(courses.map((course) => course.year))].sort(
    (a, b) => a - b
  );

  // If no courses, show message
  if (years.length === 0) {
    yearTabContent.innerHTML = `
            <div class="alert alert-info">
                No courses added yet. Add courses using the "Add Course" section or load sample data.
            </div>
        `;
    return;
  }

  // Create tabs for each year
  years.forEach((year, index) => {
    const yearTabId = `#year-${year}`;
    const isActive = activeYearTab === yearTabId || 
                     (!activeYearTab && index === 0);
    
    // Create tab
    const tab = document.createElement("li");
    tab.className = "nav-item";
    tab.innerHTML = `
            <button class="nav-link ${isActive ? "active" : ""}" 
                    id="year-${year}-tab" 
                    data-bs-toggle="pill" 
                    data-bs-target="${yearTabId}" 
                    type="button" 
                                        role="tab">
                Year ${year}
            </button>
        `;
    yearTabs.appendChild(tab);

    // Create tab content
    const tabContent = document.createElement("div");
    tabContent.className = `tab-pane fade ${isActive ? "show active" : ""}`;
    tabContent.id = `year-${year}`;
    tabContent.setAttribute("role", "tabpanel");

    // Get semesters for this year
    const semesters = [
      ...new Set(
        courses
          .filter((course) => course.year === year)
          .map((course) => course.semester)
      ),
    ].sort((a, b) => a - b);

    // Create content for each semester
    semesters.forEach((semester) => {
      const semesterGPA = calculateSemesterGPA(year, semester);
      const semesterCourses = courses
        .filter(
          (course) => course.year === year && course.semester === semester
        )
        .sort((a, b) => a.courseCode.localeCompare(b.courseCode));

      const semesterContainer = document.createElement("div");
      semesterContainer.className = "semester-container";
      semesterContainer.innerHTML = `
                <div class="semester-header">
                    <h4>Semester ${semester}</h4>
                    <div class="semester-gpa">GPA: ${semesterGPA}</div>
                </div>
                <div class="table-responsive">
                    <table class="table course-table">
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Subject</th>
                                <th>Credits</th>
                                <th>Status</th>
                                <th>Grade</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody id="semester-${year}-${semester}-courses">
                        </tbody>
                    </table>
                </div>
            `;

      tabContent.appendChild(semesterContainer);

      // Add courses to the semester table
      const coursesTableBody = semesterContainer.querySelector(
        `#semester-${year}-${semester}-courses`
      );

      semesterCourses.forEach((course) => {
        if (!course.id) {
          course.id = generateId();
        }

        const row = document.createElement("tr");
        row.className = "course-row";
        if (course.isInactive) {
          row.classList.add("inactive-course");
        }
        row.setAttribute("data-id", course.id);

        const statusFullName = getStatusFullName(course.status);
        const gradeClass = course.grade
          ? `grade-${course.grade.replace("+", "-plus").replace("-", "-minus")}`
          : "no-grade";

        row.innerHTML = `
            <td>${course.courseCode}</td>
            <td>${course.subject}</td>
            <td>${course.credits}</td>
            <td><span class="course-status status-${course.status}">${statusFullName}</span></td>
            <td>
                <span class="course-grade ${gradeClass}">${course.grade || "-"}</span>
            </td>
            <td>
                <button class="btn btn-sm btn-primary edit-grade-btn" id="edit-grade-${course.id}" data-id="${course.id}">
                    <i class="fas fa-edit"></i> Grade
                </button>
                <button class="btn btn-sm btn-danger delete-course-btn" id="delete-course-${course.id}" data-id="${course.id}">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;

        coursesTableBody.appendChild(row);
      });
    });

    yearTabContent.appendChild(tabContent);
  });

  // Add event listeners for grade editing and course deletion
  addCourseActionListeners();
  
  // Add event listeners for tab changes to track active tab
  document.querySelectorAll('[data-bs-toggle="pill"]').forEach(tabEl => {
    tabEl.addEventListener('shown.bs.tab', event => {
      activeYearTab = event.target.getAttribute('data-bs-target');
    });
  });
}

// Render optional subjects section
function renderOptionalSubjects() {
  if (!optionalSubjectsContainer) return;
  
  // Get all optional subjects (both from courses and available)
  const optionalCourses = courses.filter(course => course.status === "O");
  
  // Calculate total credits
  const totalCredits = courses.reduce((total, course) => {
    return total + (course.isInactive ? 0 : course.credits);
  }, 0);
  
  const creditsRemaining = Math.max(0, TOTAL_CREDITS_REQUIRED - totalCredits);
  
  // Create header
  let headerHTML = `
    <div class="optional-subjects-header">
      <h4>Optional Subjects Management</h4>
      <div class="alert alert-info">
        <p><strong>Your current GPA with only compulsory subjects: ${calculateCompulsoryOnlyGPA()}</strong></p>
        <p>Adding optional subjects can help you reach the required ${TOTAL_CREDITS_REQUIRED} credits 
           and potentially improve your GPA.</p>
        <p>You need ${creditsRemaining} more credits to reach the required ${TOTAL_CREDITS_REQUIRED} credits.</p>
      </div>
    </div>
  `;
  
  // Create table for current optional subjects
  let currentOptionalHTML = `
    <div class="card mb-4">
      <div class="card-header">
        <h5>Your Optional Subjects</h5>
      </div>
      <div class="card-body">
  `;
  
  if (optionalCourses.length === 0) {
    currentOptionalHTML += `
      <div class="alert alert-warning">
        You haven't added any optional subjects yet.
      </div>
    `;
  } else {
    currentOptionalHTML += `
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Year</th>
              <th>Sem</th>
              <th>Grade</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    optionalCourses.forEach(course => {
      const isActive = !course.isInactive;
      const rowClass = isActive ? "" : "table-secondary";
      const gradeClass = course.grade
        ? `grade-${course.grade.replace("+", "-plus").replace("-", "-minus")}`
        : "no-grade";
      
      currentOptionalHTML += `
        <tr class="${rowClass}">
          <td>${course.courseCode}</td>
          <td>${course.subject}</td>
          <td>${course.credits}</td>
          <td>${course.year}</td>
          <td>${course.semester}</td>
          <td><span class="course-grade ${gradeClass}">${course.grade || "-"}</span></td>
          <td>${isActive ? '<span class="badge bg-success">Active</span>' : '<span class="badge bg-secondary">Inactive</span>'}</td>
          <td>
            <button class="btn btn-sm ${isActive ? 'btn-warning' : 'btn-success'} toggle-optional-btn" data-id="${course.id}" data-action="${isActive ? 'deactivate' : 'activate'}">
              <i class="fas fa-${isActive ? 'times' : 'check'}"></i>
            </button>
          </td>
        </tr>
      `;
    });
    
    currentOptionalHTML += `
          </tbody>
        </table>
      </div>
    `;
  }
  
  currentOptionalHTML += `
      </div>
    </div>
  `;
  
  // Create table for available optional subjects
  let availableOptionalHTML = `
    <div class="card">
      <div class="card-header">
        <h5>Available Optional Subjects</h5>
      </div>
      <div class="card-body">
  `;
  
  // Get course codes already added
  const existingCourseCodes = courses.map(course => course.courseCode);
  
  // Filter available subjects that haven't been added yet
  const availableSubjects = availableOptionalSubjects.filter(
    subject => !existingCourseCodes.includes(subject.courseCode)
  );
  
  if (availableSubjects.length === 0) {
    availableOptionalHTML += `
      <div class="alert alert-info">
        No more optional subjects available to add.
      </div>
    `;
  } else {
    availableOptionalHTML += `
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Subject</th>
              <th>Credits</th>
              <th>Year</th>
              <th>Semester</th>
              <th>Potential GPA Impact</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
    `;
    
    availableSubjects.forEach(subject => {
      // Simulate GPA impact for each grade
      const gpaImpacts = simulateGPAImpact(subject);
      const bestGrade = Object.entries(gpaImpacts).reduce(
        (best, [grade, impact]) => (impact > best.impact ? { grade, impact } : best),
        { grade: "A+", impact: -Infinity }
      );
      
      availableOptionalHTML += `
        <tr>
          <td>${subject.courseCode}</td>
          <td>${subject.subject}</td>
          <td>${subject.credits}</td>
          <td>${subject.year}</td>
          <td>${subject.semester}</td>
          <td>
            <select class="form-select form-select-sm gpa-impact-select" data-subject="${subject.courseCode}">
              <option value="">Select grade to see impact</option>
              ${Object.entries(gpaImpacts).map(([grade, impact]) => {
                const changeClass = impact > 0 ? 'text-success' : (impact < 0 ? 'text-danger' : 'text-muted');
                const changeSymbol = impact > 0 ? '+' : '';
                return `<option value="${grade}" class="${changeClass}" ${grade === bestGrade.grade ? 'selected' : ''}>${grade}: ${changeSymbol}${impact.toFixed(2)}</option>`;
              }).join('')}
            </select>
          </td>
          <td>
            <button class="btn btn-sm btn-success add-new-optional-btn" data-id="${subject.courseCode}">
              <i class="fas fa-plus"></i> Add
            </button>
          </td>
        </tr>
      `;
    });
    
    availableOptionalHTML += `
          </tbody>
        </table>
      </div>
    `;
  }
  
  availableOptionalHTML += `
      </div>
    </div>
  `;
  
  // Combine all HTML
  optionalSubjectsContainer.innerHTML = headerHTML + currentOptionalHTML + availableOptionalHTML;
  
  // Add event listeners
  document.querySelectorAll(".toggle-optional-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const courseId = this.getAttribute("data-id");
      const action = this.getAttribute("data-action");
      toggleOptionalSubject(courseId, action);
    });
  });
  
  document.querySelectorAll(".edit-optional-grade-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const courseId = this.getAttribute("data-id");
      openGradeModal(courseId);
    });
  });
  
  document.querySelectorAll(".add-new-optional-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const courseCode = this.getAttribute("data-id");
      const gradeSelect = document.querySelector(`.gpa-impact-select[data-subject="${courseCode}"]`);
      const selectedGrade = gradeSelect.value || "B+"; // Default to B+ if no grade selected
      
      addOptionalSubject(courseCode, selectedGrade);
    });
  });
  
  // Add event listeners to the grade impact selectors
  document.querySelectorAll(".gpa-impact-select").forEach(select => {
    select.addEventListener("change", function() {
      // Highlight the row when a grade is selected
      const row = this.closest('tr');
      if (this.value) {
        row.classList.add('table-active');
      } else {
        row.classList.remove('table-active');
      }
    });
  });
}

// Toggle optional subject active/inactive status
function toggleOptionalSubject(courseId, action) {
  const courseIndex = courses.findIndex(c => c.id === courseId);
  
  if (courseIndex === -1) {
    console.error("Course not found:", courseId);
    return;
  }
  
  const course = courses[courseIndex];
  
  if (course.status !== "O") {
    alert("Only optional subjects can be toggled.");
    return;
  }
  
  // Toggle the inactive status
  courses[courseIndex].isInactive = action === 'deactivate';
  
  // Save changes
  saveCourses();
  
  // Update UI
  updateDashboard();
  renderCoursesByYear(); // This will now preserve the active tab
  renderOptionalSubjects();
  
  // Show message
  const message = action === 'deactivate' 
    ? `Optional subject "${course.subject}" removed from GPA calculation.`
    : `Optional subject "${course.subject}" added to GPA calculation.`;
  
  alert(message);
}

// Simulate GPA impact for a subject with different grades
function simulateGPAImpact(subject) {
  const impacts = {};
  
  // Get active courses for GPA calculation
  const activeCourses = courses.filter(course => 
    !course.isInactive && 
    (course.status === "C" || course.status === "O") && 
    course.credits > 0
  );
  
  const totalCurrentGradePoints = activeCourses.reduce((total, course) => {
    return total + (gradePoints[course.grade] * course.credits);
  }, 0);
  
  const totalCurrentCredits = activeCourses.reduce((total, course) => {
    return total + course.credits;
  }, 0);
  
  const currentGPA = totalCurrentCredits > 0 ? totalCurrentGradePoints / totalCurrentCredits : 0;
  
  // Calculate impact for each possible grade
  Object.keys(gradePoints).forEach(grade => {
    const newTotalGradePoints = totalCurrentGradePoints + (gradePoints[grade] * subject.credits);
    const newTotalCredits = totalCurrentCredits + subject.credits;
        const newGPA = newTotalCredits > 0 ? newTotalGradePoints / newTotalCredits : 0;
    
    impacts[grade] = newGPA - currentGPA;
  });
  
  return impacts;
}

// Get full name for status code
function getStatusFullName(status) {
  switch (status) {
    case "C":
      return "Compulsory";
    case "O":
      return "Optional";
    case "C-NGP":
      return "Non-GPA";
    default:
      return status;
  }
}

// Add event listeners for course actions (edit grade, delete)
function addCourseActionListeners() {
  // Edit grade buttons
  document.querySelectorAll(".edit-grade-btn").forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      const courseId = this.getAttribute("data-id");
      openGradeModal(courseId);
    };
  });

  // Delete course buttons
  document.querySelectorAll(".delete-course-btn").forEach((btn) => {
    btn.onclick = function (e) {
      e.preventDefault();
      e.stopPropagation();
      const courseId = this.getAttribute("data-id");
      deleteCourse(courseId);
    };
  });

  // Make entire row clickable for grade editing
  document.querySelectorAll(".course-row").forEach((row) => {
    row.onclick = function (e) {
      // Don't trigger if clicking on a button
      if (e.target.closest("button")) {
        return;
      }
      const courseId = this.getAttribute("data-id");
      openGradeModal(courseId);
    };
  });
}

// Open grade selection modal
function openGradeModal(courseId) {
  currentCourseId = courseId;
  const course = courses.find((c) => c.id === courseId);

  if (course) {
    document.getElementById("modalCourseCode").textContent = course.courseCode;
    document.getElementById("modalCourseTitle").textContent = course.subject;

    // Highlight current grade if exists
    document.querySelectorAll(".grade-btn").forEach((btn) => {
      btn.classList.remove("active");
      if (course.grade && btn.getAttribute("data-grade") === course.grade) {
        btn.classList.add("active");
      }
    });

    modal.show();
  } else {
    console.error("Course not found with ID:", courseId);
  }
}

// Delete a course
function deleteCourse(courseId) {
  const course = courses.find(c => c.id === courseId);
  
  if (!course) {
    console.error("Course not found for deletion:", courseId);
    return;
  }
  
  // For compulsory courses, show a warning
  if (course.status === "C") {
    if (!confirm("This is a compulsory course. Deleting it may affect your graduation requirements. Are you sure you want to delete it?")) {
      return;
    }
  }
  
  if (confirm(`Are you sure you want to delete ${course.courseCode} - ${course.subject}?`)) {
    courses = courses.filter((course) => course.id !== courseId);
    saveCourses();
    updateDashboard();
    renderCoursesByYear(); // This will now preserve the active tab
    renderOptionalSubjects();
  }
}

// Set up event listeners
function setupEventListeners() {
  // Course form submission
  if (courseForm) {
    courseForm.addEventListener("submit", (e) => {
      e.preventDefault();
      addCourse();
    });
  }

  // Load sample data
  if (loadSampleDataBtn) {
    loadSampleDataBtn.addEventListener("click", () => {
      if (confirm("This will replace any existing data. Continue?")) {
        loadSampleDataset();
      }
    });
  }

  // Clear all data
  if (clearDataBtn) {
    clearDataBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear all data?")) {
        courses = [];
        saveCourses();
        updateDashboard();
        renderCoursesByYear();
        renderOptionalSubjects();
      }
    });
  }

  // Export data
  if (exportBtn) {
    exportBtn.addEventListener("click", exportData);
  }

  // Grade selection in modal
  document.querySelectorAll(".grade-btn").forEach((btn) => {
    btn.onclick = function() {
      const grade = this.getAttribute("data-grade");
      updateCourseGrade(currentCourseId, grade);
      modal.hide();
    };
  });
  
  // Department data loading
  const loadDepartmentDataBtn = document.getElementById("loadDepartmentData");
  if (loadDepartmentDataBtn) {
    loadDepartmentDataBtn.addEventListener("click", () => {
      const departmentSelector = document.getElementById("departmentSelector");
      const selectedDepartment = departmentSelector.value;
      
      if (confirm(`This will replace any existing data with ${getDepartmentName(selectedDepartment)} sample data. Continue?`)) {
        loadDepartmentData(selectedDepartment);
      }
    });
  }
}

// Get department name
function getDepartmentName(departmentCode) {
  switch (departmentCode) {
    case 'ict': return 'Information & Communication Technology';
    case 'material': return 'Materials Technology';
    case 'electrical': return 'Electrical & Electronic Technology';
    case 'food': return 'Food Technology';
    case 'bio': return 'Bioprocess Technology';
    default: return 'Unknown Department';
  }
}

// Load department-specific data
function loadDepartmentData(department) {
  // Clear existing courses
  courses = [];
  
  let dataToLoad;
  
  // Select the appropriate data based on department
  switch (department) {
    case 'ict':
      dataToLoad = sampleData; // ICT sample data
      break;
    case 'material':
      dataToLoad = materialTech; // Materials Technology data
      break;
    case 'electrical':
      dataToLoad = tricalTronicTech; // Electrical & Electronic Technology data
      break;
    case 'food':
      dataToLoad = foodTech; // Food Technology data
      break;
    case 'bio':
      dataToLoad = bioTech; // Bioprocess Technology data
      break;
    default:
      console.error("Unknown department:", department);
      return;
  }
  
  // Check if the data exists
  if (!dataToLoad || !Array.isArray(dataToLoad) || dataToLoad.length === 0) {
    console.error(`No data available for ${getDepartmentName(department)}`);
    alert(`Sample data for ${getDepartmentName(department)} department is not available.`);
    return;
  }
  
  console.log(`Loading ${dataToLoad.length} courses for ${getDepartmentName(department)}`);
  
  // Add the selected data with new IDs
  dataToLoad.forEach((course) => {
    courses.push({
      ...course,
      id: generateId(),
      isInactive: false // All sample data courses are active by default
    });
  });
  
  saveCourses();
  
  // Make sure all dashboard elements are updated
  updateDashboard();
  
  // Explicitly call updateDegreeProgress to ensure it's updated
  updateDegreeProgress();
  
  renderCoursesByYear();
  renderOptionalSubjects();
  
  // Show success message
  alert(`${getDepartmentName(department)} sample data loaded successfully!`);
}


// Add a new course
function addCourse() {
  const year = parseInt(document.getElementById("year").value);
  const semester = parseInt(document.getElementById("semester").value);
  const courseCode = document.getElementById("courseCode").value;
  const subject = document.getElementById("subject").value;
  const credits = parseInt(document.getElementById("credits").value);
  const status = document.getElementById("status").value;
  const grade = document.getElementById("grade").value;

  // Check if course code already exists
  if (courses.some(c => c.courseCode === courseCode)) {
    alert(`Course with code ${courseCode} already exists!`);
    return;
  }

  const newCourse = {
    id: generateId(),
    year,
    semester,
    courseCode,
    subject,
    credits,
    status,
    grade,
    isInactive: false // New courses are active by default
  };

  courses.push(newCourse);
  saveCourses();

  // Reset form
  courseForm.reset();

  // Set active tab to the year of the new course
  activeYearTab = `#year-${year}`;

  // Update UI
  updateDashboard();
  renderCoursesByYear(); // This will now show the year of the new course
  renderOptionalSubjects();

  // Show success message
  alert("Course added successfully!");

  // Switch to courses tab
  document.querySelector('[data-section="courses"]').click();
}

// Add a new optional subject from available subjects
function addOptionalSubject(courseCode, grade = "B+") {
  // Find the subject in available subjects
  const subject = availableOptionalSubjects.find(s => s.courseCode === courseCode);
  
  if (!subject) {
    console.error("Subject not found:", courseCode);
    return;
  }
  
  // Create a new course object
  const newCourse = {
    id: generateId(),
    year: subject.year,
    semester: subject.semester,
    courseCode: subject.courseCode,
    subject: subject.subject,
    credits: subject.credits,
    status: "O",
    grade: grade,
    isInactive: false // New optional subjects are active by default
  };
  
  // Add to courses
  courses.push(newCourse);
  saveCourses();
  
  // Set active tab to the year of the new course
  activeYearTab = `#year-${subject.year}`;
  
  // Update UI
  updateDashboard();
  renderCoursesByYear(); // This will now show the year of the new course
  renderOptionalSubjects();
  
  // Show success message
  alert(`Optional subject "${subject.subject}" added successfully with grade ${grade}!`);
}

// Update a course's grade
function updateCourseGrade(courseId, grade) {
  const courseIndex = courses.findIndex((c) => c.id === courseId);
  if (courseIndex !== -1) {
    courses[courseIndex].grade = grade;
    saveCourses();
    updateDashboard();
    renderCoursesByYear(); // This will now preserve the active tab
    renderOptionalSubjects();
  }
}

// Load sample dataset
function loadSampleDataset() {
  loadDepartmentData('ict'); // Default to ICT data for backward compatibility
}

// Export data as JSON
function exportData() {
  const dataStr = JSON.stringify(courses, null, 2);
  const dataUri =
    "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

  const exportFileDefaultName = "gpa_data.json";

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", exportFileDefaultName);
  linkElement.click();
}

// Generate a unique ID
function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Calculate what class honors the student is on track for
function calculateHonorsClass(gpa) {
  if (gpa >= 3.70) {
    return "First Class";
  } else if (gpa >= 3.30) {
    return "Second Class (Upper Division)";
  } else if (gpa >= 3.00) {
    return "Second Class (Lower Division)";
  } else {
    return "Pass";
  }
}

// Calculate optimal optional subjects to maximize GPA
function calculateOptimalOptionalSubjects() {
  // Get current GPA with compulsory subjects
  const compulsoryGPA = calculateCompulsoryOnlyGPA();
  
  // Get total credits from compulsory subjects
  const compulsoryCredits = courses
    .filter(course => course.status === "C")
    .reduce((total, course) => total + course.credits, 0);
  
  // Calculate how many credits needed from optional subjects
  const optionalCreditsNeeded = TOTAL_CREDITS_REQUIRED - compulsoryCredits;
  
  if (optionalCreditsNeeded <= 0) {
    return {
      message: "You already have enough credits from compulsory subjects.",
      subjects: []
    };
  }
  
  // Get all available optional subjects (both from courses and available list)
  const allOptionalSubjects = [
    ...courses.filter(course => course.status === "O"),
    ...availableOptionalSubjects.filter(subject => 
      !courses.some(course => course.courseCode === subject.courseCode)
    )
  ];
  
  // Sort optional subjects by potential GPA impact (assuming A+ grade)
  const sortedSubjects = allOptionalSubjects
    .map(subject => {
      const impact = simulateGPAImpact(subject)["A+"];
      return { ...subject, impact };
    })
    .sort((a, b) => b.impact - a.impact);
  
  // Select subjects until we reach the required credits
  let selectedSubjects = [];
  let totalCredits = 0;
  
  for (const subject of sortedSubjects) {
    if (totalCredits >= optionalCreditsNeeded) break;
    
    selectedSubjects.push(subject);
    totalCredits += subject.credits;
  }
  
  return {
    message: `You need ${optionalCreditsNeeded} credits from optional subjects.`,
    subjects: selectedSubjects
  };
}

// Show recommendations for improving GPA
function showGPARecommendations() {
  // Get current GPA
  const currentGPA = parseFloat(overallGPAElement.textContent);
  
  // Get current honors class
  const currentHonors = calculateHonorsClass(currentGPA);
  
  // Calculate next honors threshold
  let nextThreshold;
  let nextHonors;
  
  if (currentGPA < 3.00) {
    nextThreshold = 3.00;
    nextHonors = "Second Class (Lower Division)";
  } else if (currentGPA < 3.30) {
    nextThreshold = 3.30;
    nextHonors = "Second Class (Upper Division)";
  } else if (currentGPA < 3.70) {
    nextThreshold = 3.70;
    nextHonors = "First Class";
  } else {
    // Already at highest honors
    return {
      message: "Congratulations! You're already on track for First Class Honors.",
      recommendations: []
    };
  }
  
  // Calculate GPA needed to reach next threshold
  const gpaNeeded = nextThreshold - currentGPA;
  
  // Get courses with grades that could be improved
  const improvableCourses = courses
    .filter(course => 
      (course.status === "C" || course.status === "O") && 
      course.credits > 0 && 
      gradePoints[course.grade] < 4.0
    )
    .sort((a, b) => {
      // Sort by potential impact (credits * grade point difference to A+)
      const aImpact = a.credits * (4.0 - gradePoints[a.grade]);
      const bImpact = b.credits * (4.0 - gradePoints[b.grade]);
      return bImpact - aImpact;
    });
  
 return {
    message: `You need to increase your GPA by ${gpaNeeded.toFixed(2)} to reach ${nextHonors} (${nextThreshold}).`,
    recommendations: improvableCourses.slice(0, 5) // Top 5 courses to improve
  };
}

