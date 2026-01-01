import pool from "./pool.js";

export async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    // For now, just print them out lol
    rows.forEach((message) => {
        console.log(message.username);
    });
    await pool.end();
}

await getAllMessages();
