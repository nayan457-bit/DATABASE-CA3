import express from "express";
import dotenv from "dotenv";
import connectDb from "./connectDb/connectDb.js";
import Schema from "./Schema/WorkoutSchema.js";
dotenv.config();
const app = express();
connectDb();
const PORT = process.env.PORT || 8000;
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});