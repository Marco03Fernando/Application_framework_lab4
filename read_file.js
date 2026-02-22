const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "file.txt");

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Read error:", err.message);
    return;
  }
  console.log(data);
});