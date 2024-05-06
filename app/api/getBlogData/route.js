import { NextResponse } from "next/server";

const Airtable = require("airtable");

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(
    process.env.BASE_NAME
);

export const GET = async (req, res) => {
    try {
        const fetchData = (tableName) => {
            return new Promise((resolve, reject) => {
                base(tableName).select().all((err, records) => {
                    if (err) {
                        console.error("Error fetching data:", err);
                        reject(err);
                        return;
                    }

                    let data = records.map((record) => {
                        return {
                            id: record.fields["מזהה"],
                            image: record.fields["תמונות"][0].url,
                            contentTitle: record.fields["שם"],
                            text: record.fields["תוכן"],
                            location: record.fields["מיקום"], // This field is specific to trips & restaurants tables
                            link: record.fields["קישור"] // This field is specific to playlist table
                        };
                    });
                    data = { title: tableName, content: [...data] }
                    resolve(data);
                });
            });
        };

        const arrayData = await Promise.all([
            fetchData("טיולים"),
            fetchData("מתכונים"),
            fetchData("מסעדות"),
            fetchData("פלייליסט")
        ]);

        return new NextResponse(JSON.stringify(arrayData), { status: 200 })
    } catch (error) {
        console.error("Server error:", error);
        return new NextResponse(`Internal Server Error, ${error}`, { status: 500 })
    }
}