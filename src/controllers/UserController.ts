import { validationResult } from 'express-validator';
import User from '../models/User';

export class UserController {

  static async signup(req, res, next) {
    const errors = validationResult(req);
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const password = req.body.password;
    const type = req.body.type;
    const status = req.body.status;

    if (!errors.isEmpty()) {
      next(new Error(errors.array()[0].msg));
    }

    const data = {
      email,
      phone,
      password,
      name,
      type,
      status
    };
    let user = new User(data);

    try {
      const required = await user.save();
      res.send(required);
      // console.log(required);
    } catch (error) {
      next(error);
    }
  }
}
