import fs from "fs";

type Airport = {
  code: string;
  city: string;
  name: string;
};

type AirportsByCountry = {
  [country: string]: Airport[];
};

const raw = fs.readFileSync("airports.dat", "utf8");

const airportsByCountry: AirportsByCountry = {};

raw.split("\n").forEach((line) => {
  if (!line.trim()) return;

  const parts = line.split(",");

  const name = parts[1]?.replace(/"/g, "");
  const city = parts[2]?.replace(/"/g, "");
  const country = parts[3]?.replace(/"/g, "");
  const code = parts[4]?.replace(/"/g, "");

  if (!code || code === "\\N") return;

  if (!airportsByCountry[country]) {
    airportsByCountry[country] = [];
  }

  airportsByCountry[country].push({
    code,
    city,
    name,
  });
});

fs.writeFileSync(
  "airportsByCountry.ts",
  `export const airportsByCountry = ${JSON.stringify(
    airportsByCountry,
    null,
    2
  )} as const;`
);

console.log("✅ airportsByCountry.ts generated successfully");
