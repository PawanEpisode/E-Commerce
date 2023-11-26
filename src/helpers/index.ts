export const getProducts = async () => {
    const result = await fetch("https://fakestoreapiserver.reactbd.com/smart");
    if(!result.ok) {
        throw new Error("Failed to fetch products");
    }
    return result.json();
}