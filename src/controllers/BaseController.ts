import { Request, Response } from "express";
import { BaseService } from "../services/BaseService";
import { Res } from "../utils/response";

export class BaseController {
  static get = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const resource = BaseService.get(Number(id));

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static getAll = async (_: Request, res: Response) => {
    try {
      const resource = BaseService.getAll();

      return Res.sendByType(res, "found", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static create = async (req: Request, res: Response) => {
    const { name } = req.body;

    try {
      const resource = await BaseService.create({ name });

      return Res.sendByType(res, "created", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const resource = await BaseService.update(Number(id), { name });

      return Res.sendByType(res, "updated", undefined, resource);
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };

  static destroy = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await BaseService.destroy(Number(id));

      return Res.sendByType(res, "deleted");
    } catch (error) {
      return Res.sendByType(res, "internalError", error);
    }
  };
}
