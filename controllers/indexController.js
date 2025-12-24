import messages from "../models/messages.js";

export function displayView(req, res) {
    res.render("index", { messages: messages });
}
