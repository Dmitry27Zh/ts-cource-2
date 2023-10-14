class Shield {
  resistance: number
  size: number

  constructor(resistance: number, size: number) {
    this.resistance = resistance
    this.size = size
  }
}

class Weapon {
  protected range: number
  damage: number

  constructor(range: number, damage: number) {
    this.range = range
    this.damage = damage
  }
}

class Sword extends Weapon {
  constructor(range: number, damage: number, wear: number) {
    super(range, damage)
  }
}

class Bow extends Weapon {
  arrows: number

  constructor(range: number, damage: number, arrows: number) {
    super(range, damage)
    this.arrows = arrows
  }
}

class Unit {
  health: number
  armor: number
  weapon: Weapon

  constructor(health: number, armor: number, weapon: Weapon) {
    this.health = health
    this.armor = armor
    this.weapon = weapon
  }
}

abstract class Unit2 {
  health: number
  readonly armor: number
  weapon: Weapon

  constructor(health: number, armor: number, weapon: Weapon) {
    this.health = health
    this.armor = armor
    this.weapon = weapon
  }

  abstract canAttack(): boolean

  getDamage(damage: number): number {
    this.health -= damage

    return this.health
  }
}

class Swordman extends Unit {
  weapon: Sword
  shield?: Shield

  constructor(health: number, armor: number, weapon: Sword, shield?: Shield) {
    super(health, armor, weapon)
    this.weapon = weapon
    this.shield = shield
  }
}

class Swordman2 extends Unit2 {
  weapon: Sword
  shield?: Shield

  constructor(health: number, armor: number, weapon: Sword, shield?: Shield) {
    super(health, armor, weapon)
    this.weapon = weapon
    this.shield = shield
  }

  canAttack(): boolean {
    return this.weapon.damage > 0
  }
}

class Bowman extends Unit {
  weapon: Bow

  constructor(health: number, armor: number, weapon: Bow) {
    super(health, armor, weapon)
    this.weapon = weapon
  }
}

class Bowman2 extends Unit2 {
  weapon: Bow

  constructor(health: number, armor: number, weapon: Bow) {
    super(health, armor, weapon)
    this.weapon = weapon
  }

  canAttack(): boolean {
    return this.weapon.arrows > 0
  }
}

let bowman1 = new Bowman(100, 10, new Bow(20, 10, 30))
console.log(bowman1) // ---- runtime
let unit1 = new Unit(100, 10, new Weapon(20, 10))
console.log(unit1)
// let Unit2 = new Unit2(100, 10, new Weapon(20, 10)) // ---- error
let swordman1 = new Swordman2(100, 10, new Sword(20, 10, 30))
// swordman1.armor-- // ---- error

export {}
