import { ExchangeRate } from "../types/exchange-rate.ts";

export function parseRates(rawData: string): ExchangeRate[] {

    const lines = rawData.trim().split('\n'); // split by newlines
    const dataLines = lines.slice(2); // according to CNB docs, the first two lines are metadata

    return dataLines.map(line => {
        // Country|Currency|Amount|Code|Rate
        const [country, currency, amount, code, rate] = line.split('|');
        return {
            country,
            currency,
            amount: parseInt(amount),
            code,
            rate: parseFloat(rate),
        };
    });
}