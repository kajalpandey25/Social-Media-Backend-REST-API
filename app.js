import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes";


const app = express();

app.use("/api/user", router)  
mongoose
.connect
('mongodb+srv://amin:Tc0La1qhHYKzMwcU@cluster0.tnh2kbl.mongodb.net/'
)
.then(()=>app.listen(5000)
)
.then(()=>console.log("Connected To Database And Listening To Localhoos 5000")
)
.catch((err)=>console.log(err));



