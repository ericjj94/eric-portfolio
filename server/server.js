import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Vite builds to dist/ (CRA used build/).
const publicPath = path.join(__dirname, "..", "dist");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

// SPA fallback. Express 5 / path-to-regexp v8 no longer accepts a bare "*"
// route string, so use a catch-all middleware instead.
app.use((req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is running on ${port}!`);
});
