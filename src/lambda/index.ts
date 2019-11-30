import * as fs from "fs";
import * as path from "path";

const { assets }: { assets: string[] } = require("../../assets/manifest.json");

type Event = {
  path: string;
  httpMethod: string;
  headers: any;
  queryStringParameters: any;
  body: string;
  isBase64Encoded: boolean;
};

export async function handler(_: Event, __: any) {
  const avatar = assets[Math.floor(Math.random() * assets.length)];
  const avatarPath = path.resolve(__dirname, "../..", avatar);
  const data = fs.readFileSync(avatarPath);

  return {
    statusCode: 200,
    headers: { "Content-Type": "image/png" },
    body: data,
  };
}
