import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, "db.json");
const HOST = "127.0.0.1";
const PORT = 4000;

const sendJson = (res, statusCode, data) => {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  });
  res.end(JSON.stringify(data));
};

const server = createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);

  try {
    const db = JSON.parse(await readFile(dbPath, "utf8"));

    if (url.pathname === "/blogs") {
      sendJson(res, 200, db.blogs);
      return;
    }

    if (url.pathname.startsWith("/blogs/")) {
      const id = Number(url.pathname.split("/")[2]);
      const blog = db.blogs.find((item) => item.id === id);

      if (blog) {
        sendJson(res, 200, blog);
        return;
      }

      sendJson(res, 404, { error: "Blog not found" });
      return;
    }

    sendJson(res, 404, { error: "Not found" });
  } catch (error) {
    sendJson(res, 500, { error: error.message });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`API server running at http://localhost:${PORT}`);
});
