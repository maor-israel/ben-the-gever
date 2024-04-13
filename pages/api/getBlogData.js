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

    let obj = {};

    base("המלצות לטיולים").select().all((err, records) => {
        if (err) {
          console.error("Error fetching data:", err);
          res.status(500).send("Error fetching data");
          return;
        }

        let tripsAdvisement = records.map((record) => {
          return {
            photo: record.fields["תמונות"][0].url,
            name : record.fields["שם"],
            instructions : record.fields["הוראות"],
            location : record.fields["מיקום"],
          };
        });
        obj.tripsAdvisement = tripsAdvisement;
      });

      base("מתכונים").select().all((err, records) => {
        if (err) {
          console.error("Error fetching data:", err);
          res.status(500).send("Error fetching data");
          return;
        }

        let recepies = records.map((record) => {
          return {
            photo: record.fields["תמונות"][0].url,
            name : record.fields["שם"],
            instructions : record.fields["הוראות"],
            ingridients : record.fields["מרכיבים"],
          };
        });
        obj.recepies = recepies;
      });

      res.send(obj);
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).send("Internal Server Error");
  }
};

export default handler;
