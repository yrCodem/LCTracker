import java.util.*;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Integer> charConstructMagazine = new HashMap<>();

        for (int i = 0; i < magazine.length(); i++) {
            char ch = magazine.charAt(i);
            charConstructMagazine.put(ch, charConstructMagazine.getOrDefault(ch, 0) + 1);
        }

        for (int i = 0; i < ransomNote.length(); i++) {
            char ch = ransomNote.charAt(i);
            int count = charConstructMagazine.getOrDefault(ch, 0);
            if (count == 0) {
                return false;
            }
            charConstructMagazine.put(ch, count - 1);
        }
        return true;
    }
}
