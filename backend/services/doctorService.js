const doctors = require("../data/doctors");
const wikipediaService = require("./wikipediaService");

const normalize = (value) => String(value || "").trim().toLowerCase();

const findLocalDoctor = (query) => {
  const normalizedQuery = normalize(query);

  return doctors.find((doctor) => {
    const normalizedName = normalize(doctor.name);
    const normalizedSpecialty = normalize(doctor.specialty);
    const normalizedHospital = normalize(doctor.hospital);
    const normalizedLocation = normalize(doctor.location);

    return (
      normalizedName === normalizedQuery ||
      normalizedName.includes(normalizedQuery) ||
      normalizedSpecialty.includes(normalizedQuery) ||
      normalizedHospital.includes(normalizedQuery) ||
      normalizedLocation.includes(normalizedQuery)
    );
  });
};

const searchDoctors = async (query) => {
  const localDoctor = findLocalDoctor(query);

  if (localDoctor) {
    return {
      source: "local",
      doctor: localDoctor,
    };
  }

  const wikiResult = await wikipediaService.searchWikipedia(query);

  return {
    source: "wikipedia",
    doctor: {
      name: wikiResult.title || query,
      description: wikiResult.description || "Doctor profile",
      summary: wikiResult.extract || "No summary available.",
      wikipediaUrl:
        wikiResult.content_urls?.desktop?.page ||
        wikiResult.content_urls?.mobile?.page ||
        null,
      thumbnail: wikiResult.thumbnail || null,
      age: null,
      experience: null,
      note:
        "This doctor was found via Wikipedia. Age and experience details are not available from the local database.",
    },
  };
};

module.exports = {
  searchDoctors,
};
