public class lcs {
        public static int[][] dp = new int[1005][1005];
        public static int fbu(String s1, String s2) {
            // TC:O(nm)
            for(int i = 1; i <= s1.length(); i++) {
                for(int j = 1; j <= s2.length(); j++) {
                    if(i == 0 || j == 0) dp[i][j] = 0;
                    else {
                        if(s1.charAt(i-1) == s2.charAt(j-1)) {
                            dp[i][j] = 1 + dp[i-1][j-1];
                        } else {
                            dp[i][j] = Math.max( dp[i-1][j], dp[i][j-1]);
                        }
                    }
                    
                }
            }
            return dp[s1.length()][s2.length()];
        }
        public static int f(String s1, String s2, int i, int j) {
            if(i == -1 || j == -1) {
                // if any one opf the string has been exhausted return 0
                return 0;
            }
            
            if(dp[i][j] != -1) return dp[i][j];
            
            if(s1.charAt(i) == s2.charAt(j)) {
                return dp[i][j] = 1 + f(s1, s2, i-1, j-1);
            } else {
                return dp[i][j] = Math.max(f(s1, s2, i-1, j), f(s1, s2, i, j-1));
            }
        }
        
        public int longestCommonSubsequence(String text1, String text2) {
            // for(int i = 0; i < 1005; i++) {
            //     for(int j = 0; j < 1005; j++) {
            //         dp[i][j] = -1;
            //     }
            // }
            return fbu(text1, text2);
        }
}
