export const fetchData = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Error fetching data from ${url}: ${response.statusText}`);
    }
    return response.json();
};
