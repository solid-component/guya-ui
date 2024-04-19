import ghpages from "gh-pages";
import { fileURLToPath } from 'url';
import { resolve, dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);  
const projRoot = resolve(__dirname, "..");

const dist = resolve(projRoot, "docs/dist");

ghpages.publish(
  dist,
  {
    message: "test commit",
  },
  (err) => {
    console.error(err);
  }
);
