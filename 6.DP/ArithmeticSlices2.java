import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class ArithmeticSlices2 {
    
    public static long[] arr;
    public static int fbu() {
        int n = arr.length;
        int ans = 0;
        List<HashMap<Long, Long> > dp = new ArrayList<HashMap<Long, Long > >();
        for(int i = 0; i < n; i++) {
            dp.add(new HashMap<Long, Long>());
        }
        
        for(int i = 1; i < n; i++) {
            for(int j = 0; j < i; j++) {
                long diff = arr[j] - arr[i];
                
                if(dp.get(j).containsKey(diff)) {
                    System.out.println(i + " " + j + " " + diff);
                    ans += dp.get(j).get(diff);
                    
                    if(dp.get(i).containsKey(diff)) {
                        dp.get(i).put(diff , dp.get(i).get(diff) + dp.get(j).get(diff) + 1);
                    } else {
                        dp.get(i).put(diff , dp.get(j).get(diff) + 1);
                        
                    }
                    
                } else {
                    if(dp.get(i).containsKey(diff)) {
                        dp.get(i).put(diff , dp.get(i).get(diff) + 1);
                    } else {
                        dp.get(i).put(diff , 1L);
                        
                    }
                }     
            }
        }
        return ans;
    }
    
    public int numberOfArithmeticSlices(int[] nums) {
        arr = new long[nums.length];
        for(int i = 0; i < nums.length; i++) {
            arr[i] = (long)nums[i];
        }
        return fbu();
}
}
