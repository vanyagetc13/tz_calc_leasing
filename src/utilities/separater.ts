export const separater = (val: string | number): string => {
    let text = val.toString();

    let result = "";
    while (text.length > 3) {
        result =
            result +
            " " +
            text
                .substring(text.length - 3, text.length)
                .split("")
                .reverse()
                .join("");
        text = text.substring(0, text.length - 3);
    }
    if (result === "") return val.toString();
    return text + " " + result.split("").reverse().join("").trim();
};

// Not working with dynamic inputs... only static text