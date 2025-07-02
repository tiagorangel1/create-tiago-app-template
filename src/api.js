import { Elysia } from "elysia";
import { rateLimit } from "elysia-rate-limit";

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
