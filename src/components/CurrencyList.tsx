
import { useExchangeRates } from '../hooks/useExchangeRates';
import styled from "styled-components";

const TABLE_TITLES = [
    "Country",
    "Currency",
    "Code",
    "Rate",
]

const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
`;

const ListItem = styled.div`
    padding: 0.5rem;
`;

const ListHeaderItem = styled(ListItem)`
    font-weight: bold;
`;

export function CurrencyList() {
    const { data, isLoading, isError } = useExchangeRates();

    if (isLoading) return <p>Loading exchange rates...</p>; // TODO: These could also be extracted into styled components
    if (isError || !data) return <p>Error fetching exchange rates.</p>;

    return (
        <ListContainer>
            {TABLE_TITLES.map((title) => (
                <ListHeaderItem key={title}>
                    {title}
                </ListHeaderItem>
            ))}
            {data.map((row) => (
                <>
                    <ListItem>{row.country}</ListItem>
                    <ListItem>{row.currency}</ListItem> {/* TODO: This could be made title case */}
                    <ListItem>{row.code}</ListItem>
                    <ListItem>{row.rate}</ListItem>
                </>
            ))}
        </ListContainer>
    );
}
