const mongoose = require('mongoose');

const settingSchema = new mongoose.Schema(
    {
        gameStatus: { type: Boolean,  }, // Active or inactive
        minBetAmount: { type: Number,  },
        maxBetAmount: { type: Number,  },
        initialBonus: { type: Number,  },
        minWithdraw: { type: Number,  },
        minRecharge: { type: Number,  },
        startGameRangeTimer: { type: Date,  }, // Start time of the game range timer
        endGameRangeTimer: { type: Date,  },   // End time of the game range timer
        level1Commission: { type: Number,  },
        level2Commission: { type: Number,  },
        level3Commission: { type: Number,  },
        gameStartTime: { type: Date,  },      // Time when the game starts
        gameBetweenTime: { type: Date,  }, 
    },
    { timestamps: true, collection: "setting" }
);

module.exports = mongoose.model('Setting',settingSchema);
