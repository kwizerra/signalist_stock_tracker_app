export const NAV_ITEMS :{href:string;label:string}[] = [
    { href: '/', label: 'Dashboard' },
    { href: '/search', label: 'Search' },
    { href: '/watchlist', label: 'Watchlist' },
]
export const MARKET_OVERVIEW_WIDGET_CONFIG = {
    colorTheme: "dark",
    dateRange: "12M",
    locale: "en",
    isTransparent: true,
    showFloatingTooltip: true,
    width: "100%",
    height: 600,
    tabs: [
        { title: "Financial", symbols: [{ s: "NYSE:JPM", d: "JPMorgan Chase" }, { s: "NYSE:WFC", d: "Wells Fargo" }, { s: "NYSE:BAC", d: "Bank of America" }] },
        { title: "Technology", symbols: [{ s: "NASDAQ:AAPL", d: "Apple" }, { s: "NASDAQ:NVDA", d: "NVIDIA" }, { s: "NASDAQ:MSFT", d: "Microsoft" }] },
        { title: "Services", symbols: [{ s: "NASDAQ:AMZN", d: "Amazon" }, { s: "NYSE:DIS", d: "Disney" }, { s: "NASDAQ:NFLX", d: "Netflix" }] },
    ],
};
export const HEATMAP_WIDGET_CONFIG = {
    dataSource: "SPX500",
    blockSize: "market_cap_basic",
    blockColor: "change",
    colorTheme: "dark",
    isTransparent: true,
    locale: "en",
    width: "100%",
    height: 600,
};
export const TOP_STORIES_WIDGET_CONFIG = {
    feedMode: "market",
    market: "stock",
    colorTheme: "dark",
    isTransparent: true,
    displayMode: "regular",
    locale: "en",
    width: "100%",
    height: 600,
};

export const MARKET_DATA_WIDGET_CONFIG = {
    title: "Stocks",
    width: "100%",
    height: 600,
    locale: "en",
    showSymbolLogo: true,
    colorTheme: "dark",
    isTransparent: true,
    backgroundColor: "#0F0F0F",
    symbolsGroups: [
        {
            name: "Financial",
            symbols: [
                { name: "NYSE:JPM", displayName: "JPMorgan Chase" },
                { name: "NYSE:WFC", displayName: "Wells Fargo" },
                { name: "NYSE:BAC", displayName: "Bank of America" },
            ],
        },
        {
            name: "Technology",
            symbols: [
                { name: "NASDAQ:AAPL", displayName: "Apple" },
                { name: "NASDAQ:NVDA", displayName: "NVIDIA" },
                { name: "NASDAQ:MSFT", displayName: "Microsoft" },
            ],
        },
    ],
};