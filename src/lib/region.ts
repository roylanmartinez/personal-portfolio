export type RegionVariant = "americas" | "europe";

const EUROPEAN_COUNTRY_CODES = new Set([
  "AL",
  "AD",
  "AM",
  "AT",
  "AZ",
  "BY",
  "BE",
  "BA",
  "BG",
  "HR",
  "CY",
  "CZ",
  "DK",
  "EE",
  "FI",
  "FR",
  "GE",
  "DE",
  "GR",
  "HU",
  "IS",
  "IE",
  "IT",
  "XK",
  "LV",
  "LI",
  "LT",
  "LU",
  "MT",
  "MD",
  "MC",
  "ME",
  "NL",
  "MK",
  "NO",
  "PL",
  "PT",
  "RO",
  "RU",
  "SM",
  "RS",
  "SK",
  "SI",
  "ES",
  "SE",
  "CH",
  "TR",
  "UA",
  "GB",
  "VA",
]);

function isEuropeanCountryCode(countryCode: string | null | undefined): boolean {
  if (!countryCode) {
    return false;
  }

  return EUROPEAN_COUNTRY_CODES.has(countryCode.toUpperCase());
}

export function regionFromCountryCode(countryCode: string | null | undefined): RegionVariant {
  return isEuropeanCountryCode(countryCode) ? "europe" : "americas";
}

export function regionFromHeaderCountry(
  headerCountryCode: string | null | undefined
): RegionVariant {
  return regionFromCountryCode(headerCountryCode);
}