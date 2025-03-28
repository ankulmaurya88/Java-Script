// asyncExample.js
const fs = require("fs").promises;

const readFileAsync = async () => {
  try {
    const data = await fs.readFile("example.txt", "utf8");
    console.log("Async File Content:", data);
  } catch (err) {
    console.error("Error reading file:", err);
  }
};

readFileAsync();
