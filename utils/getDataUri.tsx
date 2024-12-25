import DataUriParser from "datauri/parser.js";
import path from "path";
const getDataUri = async(file:File) => {
  const parser = new DataUriParser();
  const sanitizedFileName = file.name
  .split(".")[0]  // Get the file name without the extension
  .replace(/\s+/g, "_")  // Replace spaces with underscores
  .replace(/[^\w-_]+/g, "")  // Remove any special characters
  .toLowerCase(); 
  const extName = path.extname(sanitizedFileName).toString();
  const buffer = Buffer.from(await file.arrayBuffer());

  return parser.format(extName, buffer);
};

export default getDataUri;