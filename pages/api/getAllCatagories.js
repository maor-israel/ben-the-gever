const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.BASE_NAME
);

const handler = async (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    let categories = [];

    base("קהילות")
      .select({ view: "Grid view" })
      .eachPage(
        async (records, fetchNextPage) => {
          records.forEach((record) => {
            categories.push({ name: record.get("שם"), id: record.id });
          });
          fetchNextPage();
        },
        (err) => {
          if (err) {
            console.error("Error fetching data:", err);
            res.status(500).send("Error fetching data");
            return;
          }
          res.send(categories);
        }
      );
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
