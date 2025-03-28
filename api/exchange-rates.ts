// eslint-disable-next-line
// @ts-ignore

// Serverless function to handle CORS (without need for node BE)
export default async function handler(req, res) {
        const url = "https://www.cnb.cz/en/financial-markets/foreign-exchange-market/central-bank-exchange-rate-fixing/central-bank-exchange-rate-fixing/daily.txt";
        try {
            console.log("Attempting to fetch data from:", url);

            const response = await fetch(url, {
                headers: {
                    // add User-Agent to get around CORS restrictions
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36'
                }
            });

            console.log("Response status from CNB:", response.status);
            if (!response.ok) {
                console.error("Fetch failed with status:", response.status);
                return res.status(response.status).send("Error fetching data");
            }

            const data = await response.text();
            console.log("Fetched data length:", data.length);
            res.setHeader("Content-Type", "text/plain");
            res.status(200).send(data);
        } catch (error) {
            console.error("Error during fetch:", error);
            res.status(500).send("Server error");
        }
}
