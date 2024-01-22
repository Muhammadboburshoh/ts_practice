import { validationResult } from 'express-validator';
import User from '../routers/models/User';

export class UserController {
  static async signup(req, res, next) {
    const errors = validationResult(req);
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    // const user = new User({
    //   email,
    //   password
    // });

    // try {
    //   const abs = await user.save();
    //   res.send(abs);
    //   console.log(abs);
    // } catch (error) {
    //   next(error);
    // }
  }
}
