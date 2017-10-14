"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const head_1 = require("next/head");
const scale_1 = require("@laulu.jallu.rodeo/components/dist/utils/scale");
/*import { stylesheet } from "./index.css";*/
exports.default = () => (React.createElement("div", null,
    React.createElement(head_1.default, null),
    "hello",
    ' ',
    Array(12)
        .fill(null)
        .map((v, i) => i - 5)
        .map(scale_1.default)
        .join(', ')));
