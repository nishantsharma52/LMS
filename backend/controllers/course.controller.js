import { Course } from "../models/course.model.js";
import {deleteMediaFromCloudinary, uploadMedia} from "../utils/cloudinary.js"

export const createCourse = async (req, res) => {
    try {
        const {courseTitle, category} = req.body;
        if(!courseTitle || !category){
            return res.status(400).json({
                message:"Course title and category is requird."
            })
        }
        const course = await Course.create({
            courseTitle,
            category,
            creator:req.id
        })
        return res.status(201).json({
            course,
            message:"Course created.."
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Failed to create course"
        })
    }
}

export const getCreatorCourses = async (req,res) =>{
    try {
        const userId = req.id;
        const courses = await Course.find({creator:userId})
        if(!courses){
            return res.status(404).json({
                courses:[],
                message:"Course not found"
            })
        };
        return res.status(200).json({
            courses,
            
        })
    } catch (error) {
         console.log(error);
        return res.status(500).json({
            message: "Failed to create course"
        })
        
    }
}
// 📑 backend/controllers/course.controller.js ke editCourse function ko update karein:

export const editCourse = async(req, res) =>{
    try {
        const courseId = req.params.courseId
        const { courseTitle, subTitle, description, category, courseLevel, coursePrice } = req.body;
        const thumbnail = req.file;

        let course = await Course.findById(courseId);
        if(!course){
            return res.status(404).json({
                message:"Course not found!"
            })
        }

        // 🔥 FIX: Default value purani wali image ka URL rakhein
        let courseThumbnail = course.courseThumbnail; 

        if(thumbnail){
            if(course.courseThumbnail){
                const publicId = course.courseThumbnail.split("/").pop().split(".")[0];
                await deleteMediaFromCloudinary(publicId);
            }
            // Naya cloud response secure_url nikalen
            const cloudResponse = await uploadMedia(thumbnail.path);
            courseThumbnail = cloudResponse.secure_url;
        }

        // ✅ Ab yahan sahi value pass hogi (nayi ya fir purani default)
        const updateData = {
            courseTitle,
            subTitle,
            description,
            category,
            courseLevel,
            coursePrice,
            courseThumbnail 
        };

        course = await Course.findByIdAndUpdate(courseId, updateData, { new: true });
        
        return res.status(200).json({
            course,
            message:"Course updated successfully.."
        });

    } catch (error) {
         console.log(error);
         return res.status(500).json({
            message: "Failed to update course"
         });
    }
}