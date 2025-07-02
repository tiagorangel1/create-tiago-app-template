import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";

import db from "./db.js";

export default new Elysia({
  prefix: "/api",
})
  .use(
    rateLimit({
      duration: 15_000,
      max: 30,
    })
  )
  .get("/", () => {
    return "Hello, world!";
  });
