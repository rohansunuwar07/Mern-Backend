import express, { json } from "express";
import connectMongoose from "./src/MongooseDBConnect/connectDb.js";
import userRouter from "./src/routes/userRoutes.js";
import bikeRouter from "./src/routes/bikeRoutes.js";
import { teacherRouter } from "./src/routes/teacherRoutes.js";
import productRouter from "./src/routes/productRoutes.js";
import { bookRouter } from "./src/routes/bookRouter.js";
import webUserRouter from "./src/routes/webUserRouter.js";

import cors from 'cors';
import { productCategoryRouter } from "./src/routes/categoryRoutes.js";
import fileRouter from "./src/routes/fileRouter.js";
import newProductRouter from "./src/routes/newProductRoutes.js";

const newApp = express();
const port = 3001;
connectMongoose();

newApp.use(json());
newApp.use(cors())

newApp.get('/', (req, res, next) => {
    res.json("Connected Successfully")
})

newApp.listen(port, () => {
    console.log(`Express App running on port: ${port} `);
});

newApp.use("/user", userRouter)
newApp.use("/bike", bikeRouter)
newApp.use("/teacher", teacherRouter)
newApp.use("/book", bookRouter)
newApp.use("/webUser", webUserRouter)
newApp.use("/products", productRouter)
newApp.use('/categories', productCategoryRouter );
newApp.use('/file',fileRouter);
newApp.use('/newProduct',newProductRouter)


