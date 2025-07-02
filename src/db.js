import { Database } from "bun:sqlite";

const db = new Database("./data/db.sqlite");

export default db;