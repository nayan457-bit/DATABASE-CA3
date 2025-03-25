import mongoose from "mongoose";
const WorkoutSchema =newmongoose.Schema({
    user:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        required:true,
    },

    duration:{
        type:Number,
        required:true,
    },

    caloriesburned:{
        type:Number,
        defualt:0,
    },

    exercises:[
        {
            name:{
                type:String,
                required:true,
            },

            reps:{
                type:Number,
                default:0,
            },
            
            set:{
                type:Number,
                defualt:0,
            },

            weight:{
                type:Number,
                defualt:0,
            },


        },
    ],
});

 const Workout=mongoose.model("ItemsWorkoutSchema")
