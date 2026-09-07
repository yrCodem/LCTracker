function maxNumberOfBalloons(text: string): number {
   const counts = { b: 0, a: 0, l: 0, o: 0, n: 0 };

    for(const char of text){
        if (char in counts){
            counts[char as keyof typeof counts]++;
        }
    }

    counts.l = Math.floor(counts.l / 2)
    counts.o = Math.floor(counts.o / 2)

    return Math.min(counts.b, counts.a, counts.l, counts.o, counts.n)
};