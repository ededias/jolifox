import { Client } from "@notionhq/client";
import 'dotenv/config';

const notion = new Client({ auth: process.env.NOTION_API_KEY })

export default notion;