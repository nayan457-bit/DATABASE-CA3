import express, { Router } from "express";
import Workout from "../WorkoutSchema.js";
import { set } from "mongoose";

const router = Router();

router.post("/addItems", async (req, res) => {
  try {
    const Items = ({ user ,  date, duration, caloriesburned  } = req.body);
    if (!user|| !reps || !sets || !weight) {
      res.status(400).json({ message: " All the field are required" });
    }

    res.status(201).json({ message: "Items is created" });
    Items.save();
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/getItems", async (req, res) => {
  try {
    const Items = Workout.find();
    res.status(404).json("Workout not found", Items);
  } catch (error) {
    console.log(error);
  }
});

router.put("/UpdateItem/:id", async (req, res) => {
  try {
    const { user, date, duration, caloriesburned,exercises } = req.body;

    const updatedItems = Workout.findByIdAndUpdate(req.params.id, {
      user,
      reps,
      weight,
    });
    res.status(201).json({ message: "UpdatedSucessfully", updatedItems });
  } catch (error) {
    console.log(error.messge);
  }
});

export default router;
