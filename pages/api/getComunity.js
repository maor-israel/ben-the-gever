const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.BASE_NAME
);

const handler = async (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  try {
    const { id } = JSON.parse(req.body);
    if (!id) {
      res.status(400).send("Record ID is required");
      return;
    }

    // Assuming 'CommunityId' is the field that links to the community in the 'סיפורים' table
      const filterFormula = `AND (FIND("${id}", {idflat}) > 0)`;

    base("סיפורים")
        .select({ view:'מאושרים' })
      .all((err, records) => {
        if (err) {
          console.error("Error fetching data:", err);
          res.status(500).send("Error fetching data");
          return;
        }

        // Convert records to a more friendly format if needed
          let stories = records.map((record) => record.fields);
          stories = new Array(20).fill().map(i=>stories[0])
          res.send(stories.filter(s=>s.idflat[0]===id));

          res.send(stories);
      });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
