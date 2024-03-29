class Food {
  static count = 0;

  constructor(ctx, scale, coordinates) {
    this.id = Food.generateId();
    this.ctx = ctx;
    this.scale = scale;
    this.coordinates = [...coordinates];

    this.rarity = this.getRandomRarity();
    this.value = this.setValueByRarity(this.rarity);
    this.color = this.setColorByRarity(this.rarity);
    this.sound = new Audio("assets/sounds/food.mp3");
  }

  static generateId() {
    this.count++;
    return this.count;
  }

  getRandomRarity() {
    var num = Math.random();
    if (num < 0.02) return 5;
    //legendary
    else if (num < 0.08) return 4;
    //epic
    else if (num < 0.2) return 3;
    //ultra rare
    else if (num < 0.4) return 2;
    //rare
    else if (num < 0.75) return 1;
    //common
    else return 0; //poison
  }
  setValueByRarity(rarity) {
    let value;
    switch (rarity) {
      case 0:
        value = -1;
        break;
      case 1:
        value = 1;
        break;
      case 2:
        value = 2;
        break;
      case 3:
        value = 3;
        break;
      case 4:
        value = 4;
        break;
      case 5:
        value = 5;
        break;
      default:
        value = 1;
    }
    return value;
  }
  setColorByRarity(rarity) {
    let color;
    switch (rarity) {
      case 0:
        color = "#BBFF00";
        break;
      case 1:
        color = "#9B70FF";
        break;
      case 2:
        color = "#4700FF";
        break;
      case 3:
        color = "#860CE8";
        break;
      case 4:
        color = "#D50DFF";
        break;
      case 5:
        color = "#F2055C";
        break;
      default:
        color = "white";
    }
    return color;
  }

  // FOR SUPERVISOR
  /*------------------------------------------------------------------------------------------*/
  show() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(
      this.coordinates[0] * this.scale,
      this.coordinates[1] * this.scale,
      this.scale,
      this.scale
    );
  }

  playSound() {
    this.sound.play();
  }
  /*------------------------------------------------------------------------------------------*/

  // GETTERS
  /*------------------------------------------------------------------------------------------*/
  getId() {
    return this.id;
  }
  getValue() {
    return this.value;
  }
  getCtx() {
    return this.ctx;
  }
  getScale() {
    return this.scale;
  }
  /*------------------------------------------------------------------------------------------*/
}

export { Food as default };
