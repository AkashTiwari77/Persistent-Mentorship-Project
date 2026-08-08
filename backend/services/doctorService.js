const db = require("../config/db");
const wikipediaService = require("./wikipediaService");

// Normalize search text
const normalize = (value) =>
  String(value || "")
    .trim()
    .toLowerCase();

// Get all doctors from MySQL
const getAllDoctors = async () => {
  const [rows] = await db
    .promise()
    .query("SELECT * FROM doctors ORDER BY rating DESC");

  return rows;
};

// Search doctor from MySQL
const searchDoctors = async (query) => {
  const normalizedQuery = normalize(query);
  const searchTerm = `%${normalizedQuery}%`;

  const [rows] = await db.promise().query(
    `
    SELECT *
    FROM doctors
    WHERE LOWER(name) LIKE ?
       OR LOWER(specialty) LIKE ?
       OR LOWER(hospital) LIKE ?
       OR LOWER(location) LIKE ?
    ORDER BY rating DESC
    `,
    [searchTerm, searchTerm, searchTerm, searchTerm],
  );

  // Doctor exists in MySQL
  if (rows.length > 0) {
    return {
      source: "mysql",
      doctors: rows,
    };
  }

  // Doctor not found in MySQL → Wikipedia
  const wikiResult = await wikipediaService.searchWikipedia(query);

  return {
    source: "wikipedia",
    doctors: [
      {
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
        note: "This doctor was found via Wikipedia. Age and experience details are not available from the local database.",
      },
    ],
  };
};

module.exports = {
  getAllDoctors,
  searchDoctors,
};
