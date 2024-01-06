export const shortenText = (text, n) => {
    if(text.length > n) {
        const shortenText = text.substring(0, n).concat('...');
        return shortenText;
    }
    return text;
}