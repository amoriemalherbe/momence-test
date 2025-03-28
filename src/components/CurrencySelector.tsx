import styled from "styled-components";
import { ExchangeRate} from "../types/exchange-rate.ts";
import { DEFAULT_EXCHANGE_RATE_ROW } from "../constants/ExchangeRateRow.ts";

const Selector = styled.select`
    padding: 0.5rem;
    margin: 0.5rem;
`;

type Props = {
    selectedRow: ExchangeRate;
    setSelectedRow: (row: ExchangeRate) => void;
    data: ExchangeRate[];
}

export const CurrencySelector = (props: Props) => {
    const { selectedRow, setSelectedRow, data } = props;
    const code = selectedRow.code;

    return (
        <Selector
        value={code}
        onChange={(e) => {
            const selectedRow = data.find(row => row.code === e.target.value);
            setSelectedRow(selectedRow || DEFAULT_EXCHANGE_RATE_ROW);
            }}
        >
        <option value={DEFAULT_EXCHANGE_RATE_ROW.code} />
        {data.map(row => (
            <option key={row.code} value={row.code}>
                {row.code}
            </option>
        ))}
    </Selector>
    );
}