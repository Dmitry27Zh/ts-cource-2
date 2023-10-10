"use strict";
let result = {
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
};
