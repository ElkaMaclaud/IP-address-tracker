export async function getAddress (ip="8.8.8.8") {
    const response = await fetch(`
        https://geo.ipify.org/api/v2/country,city?apiKey=at_0GN0uiC2A5esRQFCbmg1NMDpqXnPX&ipAddress=${ip}`);
    
    return await response.json();
}