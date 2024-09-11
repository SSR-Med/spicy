// Return card image path
export function staticUrlCard(image: string | undefined) {
    if (image) {
        return "/src/static/images/cards/" + image + ".png";
    } else {
        return "";
    }
}