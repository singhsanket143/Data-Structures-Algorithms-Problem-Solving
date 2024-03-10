public class FindFirstAndLastPositionOfElement {
        public static int LowerBound(int[] arr, int x) {
            int n = arr.length;
            int lo = 0, hi = n - 1;
            int ans = n;
            while (lo <= hi) {
                int mid = lo + (hi - lo) / 2;
                if (arr[mid] < x) {
                    lo = mid + 1; // discard the left half
                } else {
                    ans = mid; // we got a candidate ans which is >= x and we can find better on left side
                    hi = mid - 1;
                }
            }
            return ans;
        }
        public static int UpperBound(int[] arr, int x) {
            int n = arr.length;
            int lo = 0, hi = n - 1;
            int ans = n;
            while (lo <= hi) {
                int mid = lo + (hi - lo) / 2;
                if (arr[mid] <= x) {
                    lo = mid + 1; // discard the left half
                } else {
                    ans = mid; // we got a candidate ans which is >= x and we can find better on left side
                    hi = mid - 1;
                }
            }
            return ans;
        }
        public int[] searchRange(int[] nums, int target) {
            int lb = LowerBound(nums, target);
            int[] result = new int[2];
            if(lb == nums.length || nums[lb] != target) {
                result[0] = -1;
                result[1] = -1;
                return result;
            }
            int ub = UpperBound(nums, target);
            result[0] = lb;
            result[1] = ub-1;
            return result;
        }
}
