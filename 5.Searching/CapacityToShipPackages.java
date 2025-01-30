public class CapacityToShipPackages {
    public int shipWithinDays(int[] weights, int D) {
        int totalWeights = 0;
        int maxWeight = -1;
        
        for (int weight : weights) {
            totalWeights += weight;
            maxWeight = Math.max(maxWeight, weight);
        }
        
        int lo = maxWeight, hi = totalWeights;
        int ans = hi;
        
        while (lo <= hi) {
            int mid = lo + (hi - lo) / 2;
            if (canShipWithMidWeightWithinDdays(weights, mid, D)) {
                ans = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        
        return ans;
    }
    
    private boolean canShipWithMidWeightWithinDdays(int[] weights, int mid, int D) {
        int daysCount = 0;
        int tw = 0;
        for (int weight : weights) {
            if (tw + weight > mid) {
                daysCount++;
                tw = 0;
            }
            tw += weight;
        }
        daysCount++;
        return daysCount <= D;
    }
    
}