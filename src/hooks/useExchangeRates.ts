import { useQuery } from '@tanstack/react-query';
import { parseRates } from '../utils/parse-rates';
import { ExchangeRate } from "../types/exchange-rate.ts";

async function fetchRates(): Promise<ExchangeRate[]> {
    const res = await fetch('/api/exchange-rates');
    const rawData = await res.text();
    return parseRates(rawData); // TODO: Maybe add error handling
}

export function useExchangeRates() {
    return useQuery<ExchangeRate[]>({
        queryKey: ['exchangeRates'],
        queryFn: fetchRates,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });
}