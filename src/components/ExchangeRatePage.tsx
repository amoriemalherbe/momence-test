import { CurrencyList } from "./CurrencyList.tsx";
import styled from "styled-components";
import {CurrencyConverter} from "./CurrencyConverter.tsx";

const PageLayout = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    width: 100%;
`;

export const ExchangeRatePage = () => {
    return (
        <PageLayout>
            <CurrencyConverter/>
            <CurrencyList/>
        </PageLayout>
    );
}