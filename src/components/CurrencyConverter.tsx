import styled from "styled-components";
import { useExchangeRates } from "../hooks/useExchangeRates.ts";
import { useEffect, useState } from "react";
import { CurrencySelector } from "./CurrencySelector.tsx";
import { ExchangeRate } from "../types/exchange-rate.ts";
import { DEFAULT_EXCHANGE_RATE_ROW } from "../constants/ExchangeRateRow.ts";

const ConverterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
`;

const FormSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const CurrencyInput = styled.input`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;
    text-align: right;
`;

const CurrencyLabel = styled.div`
    width: 150px;
    padding: 0.5rem;
`;

// Accepts the amount in CZK and the currency (row) to convert to
const getConvertedAmount = (czkAmount: number | null, exchangeRateRow: ExchangeRate): number | null => {
    if (!czkAmount) return null;
    // 1 'currency' = exchangeRateRow.rate CZK
    // => X CZK = X / exchangeRateRow.rate in that currency
    // This assumes that the rate is for 1 unit of the currency, which it was when I did a quick check of the fetched data
    return  czkAmount / exchangeRateRow.rate;
}

export const CurrencyConverter = () => {
    const { data } = useExchangeRates();
    const [czkAmount, setCzkAmount] = useState<number>(0);
    const [selectedRow, setSelectedRow] = useState<ExchangeRate>(DEFAULT_EXCHANGE_RATE_ROW);
    const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

    useEffect(() => {
        const convert = getConvertedAmount(czkAmount, selectedRow);
        setConvertedAmount(convert)
    }, [czkAmount, selectedRow]);

    const handleAmountChange = (amount: number) => {
        setCzkAmount(amount);
        setConvertedAmount(getConvertedAmount(amount, selectedRow));
    }

    return (
            <ConverterForm>
                <FormSection>
                    <strong> Convert to: </strong>
                    <CurrencySelector
                        selectedRow={selectedRow}
                        setSelectedRow={setSelectedRow}
                        data={data || []}
                    />
                </FormSection>
                <FormSection>
                    <CurrencyInput
                        type="number"
                        value={czkAmount}
                        onChange={(e) => {
                            const amount = parseFloat(e.target.value);
                            handleAmountChange(amount)
                        }}
                    />
                    <CurrencyLabel>CZK</CurrencyLabel>
                </FormSection>
                <FormSection>
                    {/* Note: I'm making this an input (readonly) so that in future it could potentially be used to convert other currencies back to CZK */}
                    <CurrencyInput
                        type="number"
                        value={convertedAmount || ''}
                        readOnly
                    />
                    <CurrencyLabel>{selectedRow.code}</CurrencyLabel>
                </FormSection>
            </ConverterForm>
    );
}