import {Request, Response} from 'express'
import { CreateOrderService } from '../../services/order/CreateOrderService'

class CreateOrderController{
  async handle(req: Request, res: Response){
    const { name } = req.body;

    const createOrderService = new CreateOrderService();

    const order = await createOrderService.execute({
      name,
    });

    return res.json(order);

  }
}

export { CreateOrderController }