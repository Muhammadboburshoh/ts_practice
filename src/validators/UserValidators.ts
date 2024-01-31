import { body } from 'express-validator';

export class UserValidators {
  static signup() {
    return [
      body('name', 'Name is required').isString(),
      body('email', 'Email is required').isEmail(),
      body('phone', 'Phone number is required'),
      body('password', 'Password is required').isAlphanumeric()
        .isLength({ min: 5, max: 25})
        .withMessage('Min 6 and max 25'),
      body('type', 'User role type is required'),
      body('status', 'User status is required'),
    ];
  }
}
