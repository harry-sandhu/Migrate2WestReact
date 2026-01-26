import { airportsByCountry } from "./airportsByCountry";

export type Airport = {
  code: string;
  name: string;
  city: string;
};

export type AirportsByCountry = Record<string, Airport[]>;

export function getAirportsByCountry(country?: string): Airport[] {
  if (!country) return [];
  return airportsByCountry[country] ?? [];
}

export function formatAirportLabel(a: Airport) {
  return `${a.city} — ${a.name} (${a.code})`;
}
