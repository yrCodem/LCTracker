from typing import List

class Solution:
    def findRelativeRanks(self, score: List[int]) -> List[str]:
        n = len(score)
        idx = list(range(n))
        
        idx.sort(key=lambda i: score[i], reverse=True)
        
        top3 = ['Gold Medal', 'Silver Medal', 'Bronze Medal']
        ans = [''] * n
        
        for i in range(n):
            if i < 3:
                ans[idx[i]] = top3[i]
            else:
                ans[idx[i]] = str(i + 1)
                
        return ans
