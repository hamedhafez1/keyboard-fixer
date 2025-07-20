type Direction = "en2fa" | "fa2en";

const enToFaMap: Record<string, string> = {
    "q": "ض", "w": "ص", "e": "ث", "r": "ق", "t": "ف", "y": "غ", "u": "ع", "i": "ه", "o": "خ", "p": "ح",
    "a": "ش", "s": "س", "d": "ی", "f": "ب", "g": "ل", "h": "ا", "j": "ت", "k": "ن", "l": "م",
    "z": "ظ", "x": "ط", "c": "ز", "v": "ر", "b": "ذ", "n": "د", "m": "پ",

    "Q": "ْ", "W": "ً", "E": "ٌ", "R": "ٍ", "T": "ُ", "Y": "ِ", "U": "َ", "I": "ّ", "O": "]", "P": "[",
    "A": "ِ", "S": "ٍ", "D": "ي", "F": "ب", "G": "ل", "H": "أ", "J": "ت", "K": "ن", "L": "م",
    "Z": "ژ", "X": "ؤ", "C": "ئ", "V": "", "B": "إ", "N": "ء", "M": "؟",
};

const faToEnMap: Record<string, string> = Object.fromEntries(
    Object.entries(enToFaMap).map(([en, fa]) => [fa, en])
);

/**
 * تبدیل کاراکترهای تایپ‌شده اشتباه از یک زبان به زبان دیگر
 * @param input متن ورودی
 * @param direction جهت تبدیل: "en2fa" برای انگلیسی به فارسی، "fa2en" برای فارسی به انگلیسی
 * @returns متن اصلاح‌شده
 */
export function convertKeyboard(input: string, direction: Direction): string {
    const map = direction === "en2fa" ? enToFaMap : faToEnMap;
    return input.split("").map(char => map[char] || char).join("");
}
