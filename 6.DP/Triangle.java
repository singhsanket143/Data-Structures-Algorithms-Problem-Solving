import java.util.Arrays;
import java.util.List;

class Triangle {
    
    public static List<List<Integer> > mat;
    public static int[][]dp = new int[205][205];
    
    public static int f(int row, int col) {
        
        if(row == mat.size() - 1) {
            return mat.get(row).get(col);
        }
        if(dp[row][col] != -1) return dp[row][col];
        
        return dp[row][col] = mat.get(row).get(col) + Math.min(f(row+1, col), f(row+1, col+1));
    }
    
    public int minimumTotal(List<List<Integer>> triangle) {
        mat = triangle;
        for(int i = 0; i < 205; i++) {
            Arrays.fill(dp[i], -1);
        }
        return f(0,0);
    }
}