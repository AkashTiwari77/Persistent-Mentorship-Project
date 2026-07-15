const axios = require("axios");

const searchWikipedia = async (doctorName) => {
  // Step 1: Search Wikipedia for the closest page
  const searchUrl = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(
    doctorName,
  )}&limit=1&namespace=0&format=json&origin=*`;

  const searchResponse = await axios.get(searchUrl, {
    headers: {
      "User-Agent": "Persistent-Mentorship-Project/1.0",
    },
  });

  const title = searchResponse.data[1][0];

  if (!title) {
    throw new Error("Doctor not found");
  }

  // Step 2: Fetch summary of that page
  const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
    title,
  )}`;

  const summaryResponse = await axios.get(summaryUrl, {
    headers: {
      "User-Agent": "Persistent-Mentorship-Project/1.0",
      Accept: "application/json",
    },
  });

  return summaryResponse.data;
};

// Suggestions API
const searchSuggestions = async (query) => {
  const url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=${encodeURIComponent(
    query,
  )}&limit=10&namespace=0&format=json&origin=*`;

  const response = await axios.get(url, {
    headers: {
      "User-Agent": "Persistent-Mentorship-Project/1.0",
    },
  });

  return response.data;
};

module.exports = {
  searchWikipedia,
  searchSuggestions,
};
