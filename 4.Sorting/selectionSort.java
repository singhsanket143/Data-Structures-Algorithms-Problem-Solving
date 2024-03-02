import java.util.*;

public class selectionSort {


    public static void selectionsort(int[] arr) {
        for(int i = 0; i < arr.length - 1; i++) {
            int min_idx = findMinElement(arr, i);
            if(min_idx != i) {
                int temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }
        }
    }

    public static int findMinElement(int[] arr, int i) {
        int min_el_idx = i;
        for(int j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[min_el_idx]) {
                min_el_idx = j;
            }
        }
        return min_el_idx;
    }

    public static void main(String[] args) {
        int[] arr = {1,3,2,5,1,2,4};
        selectionsort(arr);
        for(int i = 0; i < arr.length; i++) {
            System.out.println(arr[i]);
        }
    }
}