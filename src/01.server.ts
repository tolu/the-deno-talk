// deno run --allow-net src/01.server.ts

// import from URL 😱
import { serve } from "https://deno.land/std@0.92.0/http/server.ts";

const s = serve({ port: 8000 });
console.log("http://localhost:8000/");

// top-level await
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
