def canConstruct(ransomNote: str, magazine: str) -> bool:
    charConstructMagazine = {}

    for char in magazine:
        charConstructMagazine[char] = charConstructMagazine.get(char, 0) + 1

    for char in ransomNote:
        count = charConstructMagazine.get(char, 0)
        if count == 0:
            return False
        charConstructMagazine[char] = count - 1

    return True
