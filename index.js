import Express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";
import detailedMessageRouter from "./routes/detailedMessageRouter.js";
import "dotenv/config.js";

const app = Express();
const __dirname = import.meta.dirname;
// Setup ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// Setup static files such as CSS, HTML, etc.
const assetsPath = path.join(__dirname, "public");
app.use(Express.static(assetsPath));
// Allow for HTML form handling, etc.
app.use(Express.urlencoded({ extended: true }));

// Routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/detailedMessage", detailedMessageRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server started! Listening on port: ${PORT}`);
});
