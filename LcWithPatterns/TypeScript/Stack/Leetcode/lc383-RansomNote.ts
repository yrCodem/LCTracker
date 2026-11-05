function canConstruct(ransomNote: string, magazine: string): boolean {
    const charConstructMagazine = new Map<string, number>()

    for (const char of magazine){
        charConstructMagazine.set(char, (charConstructMagazine.get(char) ?? 0) + 1)
    }

    for (const char of ransomNote){
        const count = charConstructMagazine.get(char) ?? 0
        if (count === 0){
            return false
        }
        charConstructMagazine.set(char, count - 1)
    }
    return true
};