import { writeFile, mkdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");

/** Images used by the 9 marketing pages */
const images = [
  { id: "005ec1_0ab6283121ad46fb9fe3086f3b0b51d1~mv2.jpg", name: "sonic-cover.jpg" },
  { id: "005ec1_154968a1c35e4190ba6c10174c07a4d7~mv2.jpg", name: "market-analysis.jpg" },
  { id: "005ec1_6738e5775e224beebf31e123843b8d2e~mv2.jpg", name: "dashboard.jpg" },
  { id: "005ec1_7ebb79d0c15149b1937b237d93fb85cb~mv2.jpg", name: "image-1-1.jpg" },
  { id: "005ec1_a1b450ed616041e982908ac19439c301~mv2.jpg", name: "stock-market.jpg" },
  { id: "005ec1_ab6f0ed7f8a145a3a6324ca7caf83dcf~mv2.png", name: "launchpad.png" },
  { id: "1874d4_1429ea7301c04c2aa4f1947dd7d2ee4b~mv2.png", name: "rwa-icon.png" },
  { id: "1874d4_1ed9199648e44863a1ca727feaf12c59~mv2.png", name: "icon-4.png" },
  { id: "1874d4_2833c83614124aa59444e513b2a83c5a~mv2.jpg", name: "team-gilles.jpg" },
  { id: "1874d4_7168d793d2324234adf01a72658d269b~mv2.png", name: "icon-1.png" },
  { id: "1874d4_e38fc869145040078899dbd1b037d3c5~mv2.png", name: "icon-1b.png" },
  { id: "005ec1_2c30a5e8f01046b4973394a098235e8e~mv2.jpg", name: "code.jpg" },
  { id: "005ec1_8c18c7403fac4c9cba9fba1579255943~mv2.jpg", name: "team-john.jpg" },
  { id: "005ec1_a75711b031154558b7962a9da82ddc8f~mv2.jpg", name: "screenshot-mobile.jpg" },
  { id: "005ec1_b83a385ea0be4e4091189b852c5e8284~mv2.jpg", name: "finance.jpg" },
  { id: "005ec1_dc5ed00d0d754c48b26a7908b3fa00a6~mv2.jpg", name: "nyse.jpg" },
  { id: "005ec1_e5d50f85a94242dc9d9d51747d0e03c2~mv2.jpg", name: "cover.jpg" },
  { id: "005ec1_f498988616c947bcb498cae964f0356c~mv2.jpg", name: "screenshot-dashboard.jpg" },
  { id: "1874d4_1660b1f33ad04fdfa517119472012373~mv2.jpg", name: "blockchain.jpg" },
  { id: "1874d4_3f7d7326db104185b8c2cd6a8c8cc9ed~mv2.jpg", name: "highway.jpg" },
  { id: "1874d4_70259729b56d41c3b538fe703cf34a48~mv2.jpg", name: "team-daniel.jpg" },
  { id: "1874d4_789ae6c312444162a83dfedf63a5c8c8~mv2.jpg", name: "cityscape.jpg" },
  { id: "1874d4_8fd7382a81054144a07c5f33791a0e1a~mv2.jpg", name: "building.jpg" },
  { id: "1874d4_99f500229510426991d37fd185193458~mv2.jpg", name: "earth-data.jpg" },
  { id: "1874d4_c660064f227f44bb925f724fa30faf3d~mv2.jpg", name: "blockchain-dev.jpg" },
  { id: "c837a6_200cfd06635a4e30b1183c0bbbdee565~mv2.jpg", name: "hero-city.jpg" },
  { id: "c837a6_dc7ee8a7199844bf8fd1ac74513d5724~mv2.jpg", name: "finance-hero.jpg" },
  { id: "nsplsh_8c2db0976f1d4d869cfcd12565195d00~mv2.jpg", name: "abstract.jpg" },
];

await mkdir(outDir, { recursive: true });

let ok = 0;
for (const img of images) {
  const url = `https://static.wixstatic.com/media/${img.id}/v1/fit/w_2000,h_2000,al_c,q_90/${img.name}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(join(outDir, img.name), buf);
    console.log(`✓ ${img.name}`);
    ok++;
  } catch (e) {
    console.error(`✗ ${img.name}: ${e.message}`);
  }
}
console.log(`\nDownloaded ${ok}/${images.length} images`);
