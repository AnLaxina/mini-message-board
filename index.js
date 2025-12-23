import Express from "express";
import path from "node:path";
import indexRouter from "./routes/indexRouter.js";

const app = Express();
const __dirname = import.meta.dirname;
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Routes
app.use(indexRouter);

const PORT = 3000;
app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }

    console.log(`Server started! Listening on port: ${PORT}`);
});
