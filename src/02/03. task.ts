interface IWeapon {
  damage: number
  range: number
}

interface IWeaponCommon extends IWeapon {
  wear: number
  arrow?: never
}

interface IWeaponArcher extends IWeapon {
  arrows: number
  wear?: never
}

type TWeaponRaw = IWeaponCommon | IWeaponArcher

interface IShield {
  size: number
  resistance: number
}

type TShieldRaw = IShield | null

interface IUnit {
  health: number
  armor: number
  shield: TShieldRaw
}

interface IUnitCommon extends IUnit {
  weapon: IWeaponCommon
}

interface IUnitArcher extends IUnit {
  weapon: IWeaponArcher
  shield: null
}

type TUnitRaw = IUnitCommon | IUnitArcher

interface IGroup {
  units: TUnitRaw[]
}

let result: IGroup = {
  units: [
    {
      health: 100,
      armor: 5,
      weapon: {
        damage: 5,
        range: 1,
        wear: 0,
      },
      shield: {
        size: 10,
        resistance: 5,
      },
    },
    {
      health: 100,
      armor: 5,
      weapon: {
        damage: 5,
        range: 1,
        wear: 0,
      },
      shield: null,
    },
    {
      health: 100,
      armor: 5,
      weapon: {
        damage: 2,
        range: 10,
        arrows: 40,
        // wear: 0, // ---- error
      },
      shield: null,
    },
  ],
}

export {}
