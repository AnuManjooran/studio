// https://github.com/jxson/string-capitalize
// https://github.com/jxson/string-humanize

export function capitalize(string: string | undefined): string {
    string = string || "";
    string = string.trim();

    if (string[0]) {
        string = string[0].toUpperCase() + string.substr(1);
    }

    return string;
}

export function humanize(string: string | number | undefined): string {
    string = string || "";
    string = string.toString(); // might be a number
    string = string.trim();
    string = string.replace(extname(string), "");
    string = underscore(string);
    string = string.replace(/[\W_]+/g, " ");

    return capitalize(string);
}

export function underscore(string: string | undefined): string {
    string = string || "";
    string = string.toString(); // might be a number
    string = string.trim();
    string = string.replace(/([a-z\d])([A-Z]+)/g, "$1_$2");
    string = string.replace(/[-\s]+/g, "_").toLowerCase();

    return string;
}

export function extname(string: string): string {
    var index = string.lastIndexOf(".");
    var ext = string.substring(index, string.length);

    return index === -1 ? "" : ext;
}

export function camelize(string: string): string {
    string = string || "";
    string = string.trim();
    string = string.replace(/(\-|_|\s)+(.)?/g, function(mathc, sep, c) {
        return c ? c.toUpperCase() : "";
    });

    return string;
}

export function stringCompare(a: string, b: string) {
    a = a.toLocaleLowerCase();
    b = b.toLocaleLowerCase();
    return a < b ? -1 : a > b ? 1 : 0;
}