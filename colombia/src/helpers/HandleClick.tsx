// Moves to left or right of the array
export function handleClick(orientation: string, currentIndex: number, list: Array<Record<string, any>>, setIndex: React.Dispatch<React.SetStateAction<number>>, setElement: React.Dispatch<React.SetStateAction<any>>) {
    const nextIndex = (currentIndex + (orientation === "left" ? -1 : +1) + list.length) % list.length;
    setIndex(nextIndex);
    setElement(list[nextIndex]);
}