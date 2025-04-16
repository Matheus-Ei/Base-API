import { BaseController } from "../controllers/BaseController";
import { AbstractRoute } from "./AbstractRoute";

export class BaseRoute extends AbstractRoute {
  static init = () => {
    this.router.post("/bases", BaseController.create);
    this.router.patch("/bases/:id", BaseController.update);
    this.router.delete("/bases/:id", BaseController.destroy);
    this.router.get("/bases/:id", BaseController.get);
    this.router.get("/bases", BaseController.getAll);

    return this.router;
  };
}
