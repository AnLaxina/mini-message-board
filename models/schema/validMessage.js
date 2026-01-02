import * as zod from "zod";

const ValidMessage = zod.object({
    username: zod
        .string()
        .trim()
        .min(1, "Username: Min. 1 character!")
        .max(20, "Username: Max 20 characters!"),
    text: zod.string().max(50, "Message must be 50 characters or less!"),
});

export default ValidMessage;
