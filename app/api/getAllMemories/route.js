import { NextResponse } from "next/server";

const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
  process.env.BASE_NAME
);

export async function GET(req) {

  try {
    let stories = [];
    await base("סיפורים")
      .select({ view: "מאושרים" })
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
    return new NextResponse(JSON.stringify(stories), { status: 200 })

  } catch (error) {
    console.error("Error fetching data from Airtable:", error);
    return new NextResponse("Internal Server Error", { status: 500 })
  }
};

