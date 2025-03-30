import { CurrencyList } from "./CurrencyList.tsx";
import styled from "styled-components";
import {CurrencyConverter} from "./CurrencyConverter.tsx";

const PageLayout = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
`;

const PageSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    width: 100%;
`;

export const ExchangeRatePage = () => {
    return (
        <PageLayout>
            {/* Note: In future these sections could wrap responsively */}
            <PageSection>
                <CurrencyConverter/>
            </PageSection>
            <PageSection>
                <CurrencyList/>
            </PageSection>
        </PageLayout>
    );
}