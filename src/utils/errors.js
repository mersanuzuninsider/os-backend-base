import ExtendableError from 'es6-error';


export class UserNotFoundError extends ExtendableError {
  constructor(message) {
    super();
    this.name = 'UserNotFoundError';
    this.message = message;
    this.stack = (new Error(message)).stack;
    return this;
  }
};
