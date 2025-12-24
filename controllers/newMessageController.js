import messages from "../models/messages.js";

export function displayView(req, res) {
    res.render("newMessage");
}

export function retrieveForm(req, res) {
    messages.push({
        text: req.body.message,
        user: req.body.userName,
        added: new Date(),
    });
    res.redirect("/");
}
