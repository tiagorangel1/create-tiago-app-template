import { Elysia, file } from "elysia";
import { staticPlugin } from "@elysiajs/static";

import api from "./api.js";

new Elysia()
  .use(staticPlugin())
  .get("/", () => file("./public/index.html"))
  .use(api)
  .listen(3000, () => {
    console.log("app is running on http://localhost:3000");
  });
