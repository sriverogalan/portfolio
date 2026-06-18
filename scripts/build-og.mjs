import sharp from "sharp";
import { readFile } from "node:fs/promises";

const svg = await readFile(new URL("./og-source.svg", import.meta.url));
await sharp(svg, { density: 200 })
  .resize(1200, 630)
  .png()
  .toFile(new URL("../public/og.png", import.meta.url).pathname);

console.log("Generated public/og.png");
