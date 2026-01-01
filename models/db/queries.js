import pool from "./pool.js";

export async function getAllMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

export async function createMessage(username, text, added = new Date()) {
    const query = `INSERT INTO messages (username, text, added) VALUES ($1, $2, $3);`;
    await pool.query(query, [username, text, added]);
}

export async function deleteMessage(usernameid) {
    const query = `DELETE FROM messages
                WHERE usernameid = $1`;

    await pool.query(query, [usernameid]);
}

console.log(await getAllMessages());
// console.log(await createMessage("Chicken", "Doggy"));
// console.log(await deleteMessage(3));
