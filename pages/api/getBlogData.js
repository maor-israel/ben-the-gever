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
    const fetchData = (tableName) => {
      return new Promise((resolve, reject) => {
        base(tableName).select().all((err, records) => {
          if (err) {
            console.error("Error fetching data:", err);
            reject(err);
            return;
          }

          const data = records.map((record) => {
            return {
              photo: record.fields["תמונות"][0].url,
              name: record.fields["שם"],
              instructions: record.fields["הוראות"],
              location: record.fields["מיקום"], // This field is specific to trips table
              ingredients: record.fields["מרכיבים"] // This field is specific to recipes table
            };
          });
          resolve(data);
        });
      });
    };

    const [tripsAdvisement, recipes] = await Promise.all([
      fetchData("המלצות לטיולים"),
      fetchData("מתכונים")
    ]);

    const obj = { tripsAdvisement, recipes };
    res.send(obj);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
