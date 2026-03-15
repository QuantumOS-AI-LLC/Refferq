export const DEFAULT_CURRENCY_CODE = 'USD';
export const DEFAULT_CURRENCY_SYMBOL = '$';

export const CURRENCY_SYMBOLS: Record<string, string> = {
  USD: '$',
  EUR: '€',
  INR: '₹',
  GBP: '£',
  BGN: 'лв.',
  CAD: 'CA$',
  AUD: 'A$',
};

export function getCurrencySymbolForCode(currency?: string | null): string {
  if (!currency) {
    return DEFAULT_CURRENCY_SYMBOL;
  }

  return CURRENCY_SYMBOLS[currency] || currency;
}

export function formatCurrencyValue(
  amount: number,
  symbol: string,
  locale?: string,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
): string {
  return `${symbol}${amount.toLocaleString(locale, {
    minimumFractionDigits,
    maximumFractionDigits,
  })}`;
}

export function formatCurrencyCents(
  cents: number,
  symbol: string,
  locale?: string,
  minimumFractionDigits = 2,
  maximumFractionDigits = 2,
): string {
  return formatCurrencyValue(
    cents / 100,
    symbol,
    locale,
    minimumFractionDigits,
    maximumFractionDigits,
  );
}