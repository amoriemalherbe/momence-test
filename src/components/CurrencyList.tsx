
import { useExchangeRates } from '../hooks/useExchangeRates';
import styled from "styled-components";

const TABLE_TITLES = [
    "Country",
    "Currency",
    "Code",
    "Rate",
]

// TODO: These could probably be named better
const ListContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    max-width: max-content;
    
    border: 1px solid #333;
    border-radius: 5px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    max-height: 600px;
    overflow-y: scroll;
`;

const ListItem = styled.div`
    padding: 0.75rem 1.5rem;
    border-bottom: 1px solid #ddd;
    &:nth-child(4n) {
        border-right: none;
    }
    &:nth-child(-n+4) {
        border-top: 1px solid #333;
    }
`;

const ListHeaderItem = styled(ListItem)`
    font-weight: bold;
    background-color: #f4f4f4;
    border-bottom: 2px solid #333;
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
