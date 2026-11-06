import fs from 'fs';
import path from 'path';
import assert from 'assert';
import { listaProjetos } from '../assets/js/projetos.js';

console.log("=== INICIANDO SUÍTE DE TESTES DO PORTFÓLIO ===");

// 1. TESTE DE DADOS DE PROJETOS
console.log("\n[1/5] Validando lista de projetos...");
assert(Array.isArray(listaProjetos), "listaProjetos deve ser um array");
assert.strictEqual(listaProjetos.length, 8, "Devem existir exatamente 8 projetos mapeados");

const expectedIds = [
  "oradorpro",
  "crm-multitenant",
  "sistema-mensageria",
  "floworder",
  "processadorleituras",
  "apicatalogo",
  "alvesrefrigeracao",
  "portifolio"
];

expectedIds.forEach(id => {
  const p = listaProjetos.find(proj => proj.id === id);
  assert(p, `Projeto obrigatório '${id}' deve existir na lista`);
  assert(p.title && p.title.length > 0, `Projeto '${id}' deve ter título`);
  assert(p.description && p.description.length > 20, `Projeto '${id}' deve ter descrição detalhada`);
  assert(Array.isArray(p.tags) && p.tags.length >= 3, `Projeto '${id}' deve ter pelo menos 3 tags`);
  assert(p.architecture && Array.isArray(p.architecture.highlights), `Projeto '${id}' deve ter destaques de arquitetura`);
  assert(p.architecture.highlights.length >= 3, `Projeto '${id}' deve ter pelo menos 3 pontos de arquitetura`);
});
console.log("✓ Todos os 8 projetos validados com sucesso!");

// 2. TESTE DE INTEGRIDADE DE ASSETS LOCAIS E IMAGENS
console.log("\n[2/5] Validando integridade de assets e imagens referenciadas...");
const indexHtml = fs.readFileSync('index.html', 'utf8');

const assetRegex = /(?:src|href)="([^"]+)"/g;
let match;
const missingAssets = [];

while ((match = assetRegex.exec(indexHtml)) !== null) {
  const url = match[1];
  if (!url.startsWith('http') && !url.startsWith('#') && !url.startsWith('mailto:') && !url.startsWith('tel:') && !url.startsWith('data:')) {
    const cleanUrl = url.split('?')[0].split('#')[0];
    const fullPath = path.resolve(cleanUrl.startsWith('/') ? '.' + cleanUrl : cleanUrl);
    if (!fs.existsSync(fullPath)) {
      missingAssets.push({ file: 'index.html', url, fullPath });
    }
  }
}

listaProjetos.forEach(p => {
  if (p.image) {
    const fullImg = path.resolve(p.image);
    if (!fs.existsSync(fullImg)) {
      missingAssets.push({ file: 'projetos.js', url: p.image, fullPath: fullImg });
    }
  }
});

assert.strictEqual(missingAssets.length, 0, `Assets faltando encontrados: ${JSON.stringify(missingAssets)}`);
console.log("✓ 100% dos assets locais e imagens existem no disco!");

// 3. TESTE DE LINKS ÂNCORA INTERNOS NO HTML
console.log("\n[3/5] Validando alvos de links âncora (#)...");
const anchorRegex = /href="#([^"]+)"/g;
const missingAnchors = [];

while ((match = anchorRegex.exec(indexHtml)) !== null) {
  const id = match[1];
  if (!indexHtml.includes(`id="${id}"`) && !indexHtml.includes(`id='${id}'`)) {
    missingAnchors.push(id);
  }
}

assert.strictEqual(missingAnchors.length, 0, `Alvos de âncoras não encontrados: ${JSON.stringify(missingAnchors)}`);
console.log("✓ Todos os links de navegação possuem IDs correspondentes!");

// 4. TESTE DE CATEGORIAS E FILTRAGEM
console.log("\n[4/5] Validando contadores e distribuição de categorias...");
const backendProjs = listaProjetos.filter(p => p.category === "backend");
const fullstackProjs = listaProjetos.filter(p => p.category === "fullstack");
const toolsProjs = listaProjetos.filter(p => p.category === "tools");

assert.strictEqual(backendProjs.length, 4, "Devem existir 4 projetos categorizados como backend");
assert.strictEqual(fullstackProjs.length, 3, "Devem existir 3 projetos categorizados como fullstack");
assert.strictEqual(toolsProjs.length, 1, "Deve existir 1 projeto categorizado como tools");
console.log(`✓ Distribuição correta: Backend (${backendProjs.length}), Fullstack (${fullstackProjs.length}), Tools (${toolsProjs.length})`);

// 5. TESTE DE REGRAS CSS CRÍTICAS
console.log("\n[5/5] Validando regras CSS essenciais...");
const cssContent = fs.readFileSync('assets/css/style.css', 'utf8');

const requiredSelectors = [
  ".project-modal-backdrop",
  ".project-modal-container",
  ".modal-close-btn",
  ".project-card.is-hidden",
  ".project-card.card-animate-in",
  ".card-badge.badge-private",
  "body.light-mode",
  "body.menu-expanded"
];

requiredSelectors.forEach(sel => {
  assert(cssContent.includes(sel), `CSS deve conter a regra para '${sel}'`);
});
console.log("✓ Todas as regras CSS críticas verificadas com sucesso!");

console.log("\n=======================================================");
console.log("🎉 TODOS OS TESTES PASSARAM COM SUCESSO! 100% VERIFICADO!");
console.log("=======================================================");
