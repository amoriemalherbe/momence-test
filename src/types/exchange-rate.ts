/*
// For reference - example data:

28 Mar 2025 #62
Country|Currency|Amount|Code|Rate
Australia|dollar|1|AUD|14.583
Brazil|real|1|BRL|4.006
...
 */

export type ExchangeRate = {
    country: string;
    currency: string;
    amount: number;
    code: string;
    rate: number;
};