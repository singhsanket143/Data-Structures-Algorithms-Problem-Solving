public class lowerBound {
    /**
     * Finds the first position where x could be inserted in sorted order without changing the order of the array.
     *
     * @param arr The array to search.
     * @param x The value to search for.
     * @return The lowest index of x if found, otherwise the index where x could be inserted.
     */
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

    public static void main(String[] args) {
        int[] arr = {1, 1, 2, 2, 2, 3, 4, 4, 4, 5, 7, 8, 9};
        System.out.println(LowerBound(arr, 2));
    }
}
