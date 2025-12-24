import messages from "../models/messages.js";

export function displayView(req, res) {
    res.render("newMessage");
}

export function retrieveForm(req, res, next) {
    messages.push({
        text: req.body.message,
        user: req.body.userName,
        added: new Date(),
    });

    next();
}

export function changeMessageOrder(req, res, next) {
    messages.sort((firstMsg, secondMsg) => secondMsg.added - firstMsg.added);

    next();
}

export function redirectHome(req, res) {
    res.redirect("/");
}
