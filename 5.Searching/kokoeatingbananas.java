public class kokoeatingbananas {
        // Method to check if all bananas can be eaten at a certain speed
        public boolean canEatAllBananasInMidSpeed(int[] piles, int h, int mid) {
            // O(n)
            int totalHoursByKoko = 0;
            for (int i = 0; i < piles.length; i++) {
                // total time to finish ith pile, using Math.ceil equivalent for integers
                totalHoursByKoko += Math.ceil((double)piles[i]/mid); // mid -> 3 piles[i] => 7 -> 
            }
    
            return totalHoursByKoko <= h;
        }
    
        // Method to find the minimum eating speed
        public int minEatingSpeed(int[] piles, int h) {
            int lo = 1;
            int hi = 0;
            // Finding the maximum value in piles
            for (int pile : piles) {
                hi = Math.max(hi, pile);
            } // O(n)
            int ans = hi;
    
            while (lo <= hi) {
                int mid = lo + (hi - lo) / 2;
    
                if (canEatAllBananasInMidSpeed(piles, h, mid)) {
                    ans = mid;
                    hi = mid - 1; // decreasing the speed
                } else {
                    lo = mid + 1; // increasing the speed
                }
            }
            return ans;
        }
    
}


// O(n + nlog(maxofpiles)) -> O(nlog(maxofpiles))