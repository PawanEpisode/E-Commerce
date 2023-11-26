export const getProducts = async () => {
    const result = await fetch("https://fakestoreapiserver.reactbd.com/smart");
    if(!result.ok) {
        throw new Error("Failed to fetch products");
    }
    return result.json();
}

export const calculateOfferPercentage = ( oldPrice: any, price:any) => {
    return !!parseFloat(price) && !!parseFloat(oldPrice)
    ? (100 - (oldPrice / price) * 100).toFixed(0)
    : 0;
}