


import express from 'express';
import mongoose from 'mongoose';
import classRoutes from "./routes/class-routes";
import studentRoutes from "./routes/student-routes";
import examRoutes from "./routes/exam-routes";
import examRegistrationRoutes from "./routes/exam-registration-routes";
import examPaymentRoutes from "./routes/examPayment-routes";
import classPaymentRoutes from "./routes/classPayment-routes";


const app = express();


mongoose.connect("mongodb://localhost:27017/akuraeduPortal")
    .then(() => console.log("✅ DB connected successfully"))
    .catch(err => console.error("❌ DB connection error:", err));

app.use(express.json());


app.use('/',(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');

    next();
})


app.use('/class', classRoutes);
app.use('/student',studentRoutes);
app.use('/exam',examRoutes);
app.use('/examRegistration',examRegistrationRoutes);
app.use('/examPayment',examPaymentRoutes);
app.use('/classPayment',classPaymentRoutes);

app.use('*', (req, res) => {
    res.status(404).json({ message: 'Not Found' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
