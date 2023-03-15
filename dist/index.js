"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
//app.use(express.json()); // middleware that would parse incoming and outgoing request
app.get('/', (req, res) => {
    res.send("hello!");
});
app.listen(PORT, () => {
    console.log(`app is listening @ http://localhost:${PORT}`);
});
// convert this to use typescript
// set up some npm scripts so that my code auto transpiles
