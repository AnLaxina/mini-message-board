import messages from "../models/messages.js";
import * as db from "../models/db/queries.js";

export function displayView(req, res) {
    res.render("newMessage");
}

export function addNewMessage(req, res, next) {
    db.createMessage(req.body.userName, req.body.message);
    next();
}

export function redirectHome(req, res) {
    res.redirect("/");
}

export function redirectDetailedMessage(req, res) {
    res.redirect(`/detailedMessage/${req.body.userName}/${req.body.message}`);
}
