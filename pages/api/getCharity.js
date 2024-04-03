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
    base("סיפורים")
      .select({ view: "התנדבות" })
      .all((err, records) => {
        if (err) {
          console.error("Error fetching data:", err);
          res.status(500).send("Error fetching data");
          return;
        }

        // Convert records to a more friendly format if needed
        let stories = records.map((record) => {
          return {
            photo: record.fields["תמונות"][0].url,
            name : record.fields["שם המספר"],
            text : record.fields["תיאור"]
          };
        });
        res.send(stories);
      });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
