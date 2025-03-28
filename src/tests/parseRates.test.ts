import { describe, it, expect } from 'vitest';
import { parseRates} from "../utils/parse-rates.ts";
const sampleData = `
28 Mar 2025 #62
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.583
Brazil|real|1|BRL|4.006
`;

describe('parseRates', () => {
    it('parses exchange rates correctly', () => {
        const result = parseRates(sampleData);
        expect(result).toHaveLength(2);
        expect(result[0]).toMatchObject({
            country: 'Australia',
            currency: 'dollar',
            amount: 1,
            code: 'AUD',
            rate: 14.583,
        });
    });

    it('returns an empty array if no currency data lines are present', () => {
        const headerOnly = `
            28 Mar 2025 #62
            Country|Currency|Amount|Code|Rate
            `;
        const result = parseRates(headerOnly);
        expect(result).toHaveLength(0);
    });

});
