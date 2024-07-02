export class Enum {
  constructor(enumObj) {
    Object.assign(this, enumObj);
    Object.freeze(this);
  }

  static create(enumObj) {
    return new Enum(enumObj);
  }
}
