import * as db from "../models/db/queries.js";

export async function displayView(req, res) {
    const { userId } = req.params;
    const message = await db.getMessage(userId);
    res.render("messageDetails", { messageDetails: message });
}
