const firstNames = [
  "Emma", "Liam", "Olivia", "Noah", "Ava", "Elijah", "Isabella", "Lucas", "Sophia", "Mason",
  "Mia", "Logan", "Charlotte", "Ethan", "Amelia", "Aiden", "Harper", "Jackson", "Evelyn", "Sebastian",
  "Abigail", "Henry", "Emily", "Owen", "Elizabeth", "James", "Sofia", "Alexander", "Avery", "William",
  "Ella", "Daniel", "Chloe", "Matthew", "Aria", "Joseph", "Grace", "David", "Lily", "Samuel",
  "Hannah", "Carter", "Zoey", "Jayden", "Scarlett", "Wyatt", "Victoria", "John", "Madison", "Jack",
  "Penelope", "Luke", "Layla", "Isaac", "Riley", "Julian", "Nora", "Gabriel", "Lillian", "Anthony",
  "Eleanor", "Isaiah", "Hannah", "Thomas", "Hazel", "Joshua", "Addison", "Andrew", "Stella", "Christopher",
  "Natalie", "Joshua", "Aubrey", "Dylan", "Brooklyn", "Nathan", "Zoey", "Caleb", "Leah", "Ryan",
  "Savannah", "Christian", "Violet", "Hunter", "Aurora", "Jonathan", "Paisley", "Eli", "Claire", "Connor",
  "Skylar", "Jordan", "Lucy", "Cameron", "Anna", "Brayden", "Caroline", "Aaron", "Genesis", "Nicholas"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Martinez", "Hernandez",
  "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee",
  "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker",
  "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green",
  "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts", "Gomez",
  "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes", "Stewart",
  "Morris", "Morales", "Murphy", "Cook", "Rogers", "Gutierrez", "Ortiz", "Morgan", "Cooper", "Peterson",
  "Bailey", "Reed", "Kelly", "Howard", "Ramos", "Kim", "Cox", "Ward", "Richardson", "Watson",
  "Brooks", "Chavez", "Wood", "James", "Bennett", "Gray", "Mendoza", "Ruiz", "Hughes", "Price",
  "Alvarez", "Castillo", "Sanders", "Patel", "Myers", "Long", "Ross", "Foster", "Jimenez", "Powell"
];

const specialties = [
  "Cardiology", "Neurology", "Pediatrics", "Dermatology", "Oncology", "Orthopedics", "Radiology", "Gastroenterology",
  "Endocrinology", "Psychiatry", "Ophthalmology", "Urology", "Pulmonology", "Nephrology", "Rheumatology", "Obstetrics",
  "Gynecology", "General Surgery", "Emergency Medicine", "Anesthesiology", "Family Medicine", "Plastic Surgery",
  "ENT", "Hematology", "Infectious Disease", "Allergy & Immunology", "Rehabilitation", "Sports Medicine",
  "Palliative Care", "Geriatrics", "Pain Management"
];

const cities = [
  "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ", "Philadelphia, PA", "San Antonio, TX",
  "San Diego, CA", "Dallas, TX", "San Jose, CA", "Austin, TX", "Jacksonville, FL", "Fort Worth, TX", "Columbus, OH",
  "San Francisco, CA", "Charlotte, NC", "Indianapolis, IN", "Seattle, WA", "Denver, CO", "Washington, DC"
];

const hospitals = [
  "National Medical Center", "Sunrise Health Institute", "Cedar Valley Hospital", "Maplewood Clinic", "Summit Care Center",
  "Harborview Medical", "Lakefront Health", "Greenfield Hospital", "Riverside Wellness", "Pinecrest Medical", "Horizon Health",
  "Skyline Medical Center", "Brookside Clinic", "Willow Bend Hospital", "Evergreen Health", "Cityview Hospital", "Valleycare Medical",
  "Parkside Health", "Northshore Clinic", "Eastwood Medical Center"
];

const doctors = Array.from({ length: 1000 }, (_, index) => {
  const first = firstNames[index % firstNames.length];
  const last = lastNames[Math.floor(index / firstNames.length) % lastNames.length];
  const specialty = specialties[index % specialties.length];
  const age = 35 + ((index * 3) % 41);
  const experience = 5 + ((index * 2) % 41);
  const location = cities[index % cities.length];
  const hospital = hospitals[index % hospitals.length];

  return {
    id: index + 1,
    name: `Dr. ${first} ${last}`,
    specialty,
    age,
    experience,
    hospital,
    location,
    summary: `${first} ${last} is a top ${specialty.toLowerCase()} who has served patients for ${experience} years at ${hospital} in ${location}.`,
    profile: `${first} ${last} is a highly respected ${specialty.toLowerCase()} with ${experience} years of experience and a caring approach to patient care.`,
  };
});

module.exports = doctors;
