// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size(width, height) {
  this.width = width ?? 80;
  this.height = height ?? 60;
}

Size.prototype.resize = function (newWidth, newHeight) {
  this.width = newWidth;
  this.height = newHeight;
};

export function Position(x, y) {
  this.x = x ?? 0;
  this.y = y ?? 0;
}

Position.prototype.move = function (newX, newY) {
  this.x = newX;
  this.y = newY;
};

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }

  resize(newSize) {
    if (newSize.width < 1) {
      this.size.width = 1;
    } else if (newSize.width + this.position.x > this.screenSize.width) {
      this.size.width = this.screenSize.width - this.position.x;
    } else {
      this.size.width = newSize.width;
    }

    if (newSize.height < 1) {
      this.size.height = 1;
    } else if (newSize.height + this.position.y > this.screenSize.height) {
      this.size.height = this.screenSize.height - this.position.y;
    } else {
      this.size.height = newSize.height;
    }
  }

  move(newPosition) {
    if (newPosition.x < 0) {
      this.position.x = 0;
    } else if (newPosition.x + this.size.width > this.screenSize.width) {
      this.position.x = this.screenSize.width - this.size.width;
    } else {
      this.position.x = newPosition.x;
    }

    if (newPosition.y < 0) {
      this.position.y = 0;
    } else if (newPosition.y + this.size.height > this.screenSize.height) {
      this.position.y = this.screenSize.height - this.size.height;
    } else {
      this.position.y = newPosition.y;
    }
  }
}

export function changeWindow(programWindow) {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);
  programWindow.resize(newSize);
  programWindow.move(newPosition);
  return programWindow;
}
