import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const read = (rel: string) => readFileSync(rel, 'utf8');

// FASE anti-masking: international product/order surfaces must never display a
// Brazilian currency symbol or code. These files render real data for the
// global (voltrisoptimizer.com) audience, so "R$"/"BRL" here is a functional
// defect, not just cosmetic. The numeric values are intentionally left alone;
// only the currency mask is corrected.

const productSurfaces = [
  'app/dashboard/new-order/NewOrderClient.tsx',
  'app/dashboard/companies/CompaniesClient.tsx',
  'components/dashboard/StatsCards.tsx',
  'app/[locale]/website-creators/WebsiteCreatorsClient.tsx',
  'app/[locale]/restricted-area-admin/orders/AdminServiceRequestsTab.tsx',
];

for (const rel of productSurfaces) {
  test(`${rel} nao exibe moeda brasileira em dados internacionais`, () => {
    const src = read(rel);
    assert.doesNotMatch(src, /R\$/, 'sem simbolo R$');
    assert.doesNotMatch(src, /BRL/, 'sem codigo de moeda BRL');
  });
}

test('SEOStructuredData padrao de moeda e USD (nao BRL)', () => {
  const src = read('components/SEOStructuredData.tsx');
  assert.doesNotMatch(src, /priceCurrency:\s*'BRL'/, 'default nao pode ser BRL');
  assert.match(src, /priceCurrency:\s*'USD'/, 'default internacional USD');
});
