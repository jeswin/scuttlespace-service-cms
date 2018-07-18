import { IDbConfig } from "psychopiggy";
import * as pool from "./pool";

export { default as setup } from "./setup";

export interface ILinkEntry {
  title: string;
  link: string;
  description?: string;
}

export interface ILinks {
  items: ILinkEntry[];
}

export async function getLinks(section: string, username: string) {
  return {
    items: []
  } as ILinks;
}

export async function init(dbConfig: IDbConfig) {
  return {
    pool: await pool.init(dbConfig)
  };
}
