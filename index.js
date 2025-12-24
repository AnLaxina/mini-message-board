import Express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";
import newMessageRouter from "./routes/newMessageRouter.js";

const app = Express();
const __dirname = import.meta.dirname;
const assetsPath = path.join(__dirname, "public");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(Express.static(assetsPath));

// Routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server started! Listening on port: ${PORT}`);
});
