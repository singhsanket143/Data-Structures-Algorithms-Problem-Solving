import java.util.HashSet;

public class MinimumCostForTickets {
    // https://leetcode.com/problems/minimum-cost-for-tickets/
    public static int[] c;
    public static int lastDay;
    public static HashSet<Integer> s;
    public static int[] dp;
    
    public static int f(int day) {
        if(day > lastDay) return 0;
        if(!s.contains(day)) return f(day+1);
        if(dp[day] != -1) return dp[day];
        int ans = Math.min(c[0] + f(day+1), Math.min(c[1] + f(day+7), c[2] + f(day+30)));
        
        return dp[day] = ans;
    }
    
    public static int f_bu() {
        dp = new int[400];
        for(int day = 365; day >= 1; day--) {
            if(day > lastDay) dp[day] = 0;
            else if(!s.contains(day)) dp[day] = dp[day+1];
            else {
                int ans = Math.min(c[0] + dp[day+1], Math.min(c[1] + dp[day+7], c[2] + dp[day+30]));
                dp[day] = ans;
            }
            
        }
        
        return dp[1];
    }
    
    
    public int mincostTickets(int[] days, int[] costs) {
        s = new HashSet<>();
        for(int day : days) {
            s.add(day);
        }
        c = costs;
        lastDay = days[days.length - 1];
        // dp = new int[400];
        // Arrays.fill(dp, -1);
        return f_bu();
    }
}
