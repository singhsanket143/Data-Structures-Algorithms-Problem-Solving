public class BinarySearch {
    /**
     * Performs a binary search to find the element x in the array arr.
     * 
     * @param arr The given input array inside which we need to find an element.
     * @param x The element expected to be found.
     * @return The index of the element if found, otherwise -1.
     */
    public static int binarySearch(int[] arr, int x) {
        int n = arr.length;
        // declare the search space
        int lo = 0, hi = n - 1;

        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (arr[mid] == x) {
                // we found the index at which x is present
                return mid;
            } else if (arr[mid] < x) {
                // we need to discard the left half
                lo = mid + 1;
            } else {
                // we need to discard the right half
                hi = mid - 1;
            }
        }
        // if the loop ends and we never returned in the loop, means element is not present
        return -1;
    }

    public static void main(String[] args) {
        int[] arr = {-6, 1, 4, 7, 8, 9, 19, 22, 34};
        System.out.println(binarySearch(arr, 21));
    }
}
