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
    let stories = [];

    await base("סיפורים")
      .select()
      .eachPage((records, fetchNextPage) => {
        records.forEach((record) => {
          const story = {
            id: record.get("מזהה"),
            text: record.get("תיאור"),
            name: record.get("שם המספר"),
            date: record.get("תאריך סיפור"),
            headline: record.get("כותרת"),
            files: record.get("תמונות"),
          };
          stories.push(story);
        });
        fetchNextPage();
      });

    res.send(stories);
  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
