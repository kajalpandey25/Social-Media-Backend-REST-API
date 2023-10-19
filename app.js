import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes";
import blogRouter from './routes/blog-routes';


const app = express();
app.use(express.json());

app.use("/api/user", router)
app.use("/api/blog", blogRouter);
mongoose
.connect
('mongodb+srv://amin:Tc0La1qhHYKzMwcU@cluster0.tnh2kbl.mongodb.net/'
)
.then(()=>app.listen(5000)
)
.then(()=>console.log("Connected To Database And Listening To Localhoos 5000")
)
.catch((err)=>console.log(err));



