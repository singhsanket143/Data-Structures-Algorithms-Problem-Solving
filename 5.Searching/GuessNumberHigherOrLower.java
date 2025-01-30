public class GuessNumberHigherOrLower {
    /** The guess API is defined in the parent class GuessGame.
  * @param num, your guess
  * @return -1 if my number is higher, 1 if my number is lower, otherwise return 0
  * int guess(int num); */

    public int guessNumber(int n) {
        int lo = 1;
        int hi = n;
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            int res = guess(mid);
            if (res == 0) {
                return mid;
            } else if (res == -1) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return -1; // Should never reach here if input is within constraints
    }

}
