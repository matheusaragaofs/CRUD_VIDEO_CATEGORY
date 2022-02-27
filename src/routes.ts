import { Router } from "express";
import { CreateCategoryController } from "./controllers/Category/CreateCategoryController";
import { DeleteCategoryController } from "./controllers/Category/DeleteCategoryController";
import { GetAllCategoriesController } from "./controllers/Category/GetAllCategoriesController";
import { UpdateCategoryController } from "./controllers/Category/UpdateCategoryController";
import { CreateVideoController } from "./controllers/Video/CreateVideoController";
import { GetAllVideosController } from "./controllers/Video/GetAllVideosController";

const routes = Router();
// Categories
routes.post("/categories", new CreateCategoryController().handle);
routes.delete("/category/:id", new DeleteCategoryController().handle);
routes.get("/categories", new GetAllCategoriesController().handle);
routes.put("/category/:id", new UpdateCategoryController().handle);

// Video
routes.post("/videos", new CreateVideoController().handle);
routes.get("/videos", new GetAllVideosController().handle);
export { routes };
