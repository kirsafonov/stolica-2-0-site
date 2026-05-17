export function pluralizeRu(
  count: number,
  forms: [string, string, string],
) {
  const abs = Math.abs(count);
  const lastTwo = abs % 100;
  const lastOne = abs % 10;

  if (lastTwo >= 11 && lastTwo <= 14) {
    return forms[2];
  }

  if (lastOne === 1) {
    return forms[0];
  }

  if (lastOne >= 2 && lastOne <= 4) {
    return forms[1];
  }

  return forms[2];
}

export function formatCountRu(
  count: number,
  forms: [string, string, string],
) {
  return `${count} ${pluralizeRu(count, forms)}`;
}