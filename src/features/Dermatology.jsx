import React, { useState, useMemo } from "react";



const SUBSPECIALTIES = [
  "Medical Dermatology",
  "Cosmetic Dermatology",
  "Pediatric Dermatology",
  "Dermatologic Surgery",
  "Hair & Scalp",
  "Skin Allergy",
];

const TAG_STYLES = {
  "Medical Dermatology": "bg-pink-50 text-pink-700 ring-pink-200",
  "Cosmetic Dermatology": "bg-fuchsia-50 text-fuchsia-700 ring-fuchsia-200",
  "Pediatric Dermatology": "bg-sky-50 text-sky-700 ring-sky-200",
  "Dermatologic Surgery": "bg-rose-50 text-rose-700 ring-rose-200",
  "Hair & Scalp": "bg-amber-50 text-amber-700 ring-amber-200",
  "Skin Allergy": "bg-slate-100 text-slate-700 ring-slate-300",
};

const FIRST_NAMES = [
  "Ansh",
  "Tia",
  "Rehaan",
  "Ekta",
  "Vansh",
  "Nidhi",
  "Charu",
  "Ronit",
  "Diksha",
  "Farhan",
  "Amara",
  "Kiran",
  "Sahil",
  "Ritu",
  "Omkar",
  "Preeti",
  "Nakshatra",
  "Vikrant",
  "Shalini",
  "Tejas",
  "Anika",
  "Ranveer",
];

const LAST_NAMES = [
  "Ashra",
  "Batra",
  "Chhabra",
  "Doshi",
  "Engineer",
  "Fadia",
  "Garg",
  "Hira",
  "Inamdar",
  "Jayaraman",
  "Kalra",
  "Lall",
  "Mago",
  "Nagi",
  "Panth",
  "Qadir",
  "Rawla",
  "Sabnis",
  "Tuli",
  "Uppadhyay",
  "Vaidya",
  "Wason",
];

const HOSPITALS = [
  "Ashoka Skin & Wellness Clinic",
  "Sunrise Derma Center",
  "St. Luke's Medical",
  "Metro Dermatology Group",
  "Orchid Skin Care Hospital",
  "Pinewood Skin Clinic",
  "Riverside Medical Center",
  "National Institute of Dermatology",
];

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const DOCTORS = Array.from({ length: 22 }, (_, i) => {
  const rand = seededRandom(i * 71 + 29);
  const subspecialty = SUBSPECIALTIES[i % SUBSPECIALTIES.length];
  const experience = 5 + Math.floor(rand() * 25);
  const rating = (4.2 + rand() * 0.75).toFixed(1);
  const hospital = HOSPITALS[Math.floor(rand() * HOSPITALS.length)];
  const available = rand() > 0.35;
  return {
    id: i + 1,
    name: `Dr. ${FIRST_NAMES[i]} ${LAST_NAMES[(i * 5) % LAST_NAMES.length]}`,
    subspecialty,
    experience,
    rating,
    hospital,
    available,
    patients: 300 + Math.floor(rand() * 3400),
  };
});


function Initials({ name }) {
  const parts = name.replace("Dr.", "").trim().split(" ");
  const initials = (parts[0]?.[0] || "") + (parts[1]?.[0] || "");
  return (
    <div className="flex h-14 w-14 flex-none items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-950 text-base font-semibold text-white ring-4 ring-pink-100">
      {initials.toUpperCase()}
    </div>
  );
}

function PulseDivider() {
  return (
    <svg
      viewBox="0 0 200 24"
      className="h-5 w-full text-pink-300"
      preserveAspectRatio="none"
    >
      <polyline
        points="0,12 55,12 66,3 76,21 86,12 200,12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarRating({ value }) {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-medium text-slate-700">
      <svg viewBox="0 0 20 20" className="h-4 w-4 fill-amber-400">
        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.2-5.4 3.2 1.3-6-4.6-4.1 6.1-.6z" />
      </svg>
      {value}
    </span>
  );
}

function DoctorCard({ doc }) {
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start gap-4">
        <Initials name={doc.name} />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-900">
            {doc.name}
          </h3>
          <p className="truncate text-sm text-slate-500">{doc.hospital}</p>
          <div className="mt-1">
            <StarRating value={doc.rating} />
          </div>
        </div>
      </div>

      <div className="my-3">
        <PulseDivider />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${TAG_STYLES[doc.subspecialty]}`}
        >
          {doc.subspecialty}
        </span>
        <span className="rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 ring-1 ring-inset ring-slate-200">
          {doc.experience} yrs exp
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
        <span className="text-slate-500">
          {doc.patients.toLocaleString()}+ patients
        </span>
        <span
          className={`flex items-center gap-1.5 font-medium ${
            doc.available ? "text-emerald-600" : "text-slate-400"
          }`}
        >
          <span
            className={`h-2 w-2 rounded-full ${
              doc.available ? "bg-emerald-500" : "bg-slate-300"
            }`}
          />
          {doc.available ? "Available today" : "Next available soon"}
        </span>
      </div>

      <button className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition group-hover:bg-pink-600">
        Book appointment
      </button>
    </div>
  );
}



export default function DermatologyDoctors() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    return DOCTORS.filter((d) => {
      const matchesFilter = filter === "All" || d.subspecialty === filter;
      const matchesQuery =
        query.trim() === "" ||
        d.name.toLowerCase().includes(query.toLowerCase()) ||
        d.hospital.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [query, filter]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e1f5f0] to-[#c7e9e1] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-1">
          <span className="text-sm font-semibold uppercase tracking-wide text-pink-600">
            Dermatology directory
          </span>
          <h1 className="text-3xl font-bold text-slate-900">
            Find a dermatology specialist
          </h1>
          <p className="max-w-xl text-slate-500">
            22 dermatologists across medical, cosmetic, and pediatric
            dermatology, dermatologic surgery, hair and scalp care, and skin
            allergy.
          </p>
        </div>

        {/* Controls */}
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or hospital..."
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm outline-none focus:border-pink-400 focus:ring-2 focus:ring-pink-100 sm:max-w-xs"
          />
          <div className="flex flex-wrap gap-2">
            {["All", ...SUBSPECIALTIES].map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                  filter === s
                    ? "bg-slate-900 text-white"
                    : "bg-white text-slate-600 ring-1 ring-inset ring-slate-200 hover:bg-slate-100"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-slate-400">
            No doctors match your search.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((doc) => (
              <DoctorCard key={doc.id} doc={doc} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
