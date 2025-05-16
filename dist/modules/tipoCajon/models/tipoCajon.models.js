"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TipoCajonSchema = new Schema({
    tipocajon: {
        type: String,
        required: [true, 'tipocajon required'],
        unique: true
    },
    Tarifa: {
        type: Number,
        required: [true, 'tarifa required'],
        unique: true
    },
    altura: {
        type: Number,
        required: [true, 'tipocajon required'],
        unique: true
    }
});
const TipoCajon = mongoose.model("TipoCajon", TipoCajonSchema);
exports.default = TipoCajon;
//# sourceMappingURL=tipoCajon.models.js.map