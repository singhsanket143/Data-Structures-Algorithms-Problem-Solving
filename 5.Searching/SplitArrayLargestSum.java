public class SplitArrayLargestSum {
        private boolean canSplitInToKSubArraysWithmaxMidSum(int[] nums, int mid, int k) {
            int subarrayCount = 0;
            int ts = 0;
            for (int num : nums) {
                if (ts + num > mid) {
                    subarrayCount++;
                    ts = 0;
                }
                ts += num;
            }
            subarrayCount++;
            return subarrayCount <= k;
        }
        
        public int splitArray(int[] nums, int k) {
            int totalWeights = 0;
            int maxWeight = -1;
            
            for (int num : nums) {
                totalWeights += num;
                maxWeight = Math.max(maxWeight, num);
            }
            
            int lo = maxWeight, hi = totalWeights;
            int ans = hi;
            
            while (lo <= hi) {
                int mid = lo + (hi - lo) / 2;
                if (canSplitInToKSubArraysWithmaxMidSum(nums, mid, k)) {
                    ans = mid;
                    hi = mid - 1;
                } else {
                    lo = mid + 1;
                }
            }
            
            return ans;
        }
}
