import messages from "../models/messages.js";

export function displayView(req, res) {
    const { userId } = req.params;
    const message = messages.find(
        (message) => message.userId === Number(userId)
    );
    res.render("messageDetails", { messageDetails: message });
}
