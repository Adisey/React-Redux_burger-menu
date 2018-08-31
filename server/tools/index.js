function getUniqueID (length = 25, prefix = '_') {
    if (typeof length !== "number") {
        throw new Error("The function argument should be a number!");
    }
    const lengthID = length-prefix.length<5 ? prefix.length+5: length-prefix.length;
    let text = prefix;
    const possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < lengthID; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

module.exports = {
    getUniqueID,
};
