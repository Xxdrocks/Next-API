import { connectToDatabase } from "../../../lib/db";

export default async function handler(req,res) {
  const db = await connectToDatabase;

  if (req.method === "GET") {
    const [rows] = await db.execute("SELECT * FROM users");
    res.status(200).json(rows);
  } else if (req.method === "POST") {
    const { name, email } = req.body;
    const [result] = await db.execute("INSERT INTO users (name, email) VALUES (?, ?)", [name, email]);
    res.status(201).json({ id: result.insertId, name, email });
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}