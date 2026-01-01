// import messages from "../models/messages.js";
import * as db from "../models/db/queries.js";

export async function displayView(req, res) {
    const messages = await db.getAllMessages();
    res.render("index", { messages: messages });
}
