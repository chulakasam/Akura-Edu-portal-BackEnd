
import ClassModel from "../model/Class-modal";
import Class from "../model/Class";

export async function ClassAdd(c:Class) {
    console.log("Received Data:", c); // Log received data

    try {
        const newClass = await ClassModel.create({
            className: c.className,
            teacherName:c.teacherName,
            description:c.description,
            date:c.date
        });
        console.log("Class Added Successfully:", newClass);
        return newClass;
    } catch (err) {
        console.log("Error Adding Class:", err);
    }
}

export async function ClassView(classes:Class){

    try {
        const loadingClasses = await ClassModel.find();
        console.log('loading all classes',loadingClasses);
        return loadingClasses;
    }catch (err){
        console.log('error fetching classes',err);
    }
}
