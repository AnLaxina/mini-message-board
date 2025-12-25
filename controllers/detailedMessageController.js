import messages from "../models/messages.js";

export function displayView(req, res) {
    const { userId } = req.params;
    console.log(
        `userId is: ${userId}, message.userId is: ${messages[0].userId}`
    );
    const message = messages.find(
        (message) => message.userId === Number(userId)
    );
    res.render("messageDetails", { messageDetails: message });
}
