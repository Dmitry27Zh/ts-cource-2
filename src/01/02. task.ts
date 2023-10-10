type TWeapon = {
  damage: number
  range: number
}

type TWeaponCommon = TWeapon & {
  wear: number
  arrows?: never
}

type TWeaponArcher = TWeapon & {
  arrows: number
  wear?: never
}

type TWeaponRaw = TWeaponCommon | TWeaponArcher

type TShield = {
  size: number
  resistance: number
}

type TShieldRaw = TShield | null

type TUnit = {
  health: number
  armor: number
  weapon: TWeaponRaw
  shield: TShieldRaw
}

type TUnitCommon = TUnit & {
  weapon: TWeaponCommon
  shield: TShieldRaw
}

type TUnitArcher = TUnit & {
  weapon: TWeaponArcher
  shield: null
}

type TUnitRaw = TUnitCommon | TUnitArcher

type TGroup = {
  units: TUnitRaw[]
}

let result: TGroup = {
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
      // shield: {
      //   // ---- error
      //   size: 10,
      //   resistance: 5,
      // },
    },
  ],
}
