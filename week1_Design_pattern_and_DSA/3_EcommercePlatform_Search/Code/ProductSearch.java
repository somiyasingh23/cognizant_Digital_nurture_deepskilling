package ecom;
import java.util.Arrays;
import java.util.Comparator;

public class ProductSearch {

    
    public static Product linearSearch(Product[] products, String name) {
        for (Product p : products) {
            if (p.getProductName().equalsIgnoreCase(name)) {
                return p;
            }
        }
        return null;
    }

    
    public static Product binarySearch(Product[] products, String name) {
        int low = 0;
        int high = products.length - 1;

        while (low <= high) {
            int mid = (low + high) / 2;
            int cmp = name.compareToIgnoreCase(products[mid].getProductName());

            if (cmp == 0) {
                return products[mid];
            } else if (cmp < 0) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        return null;
    }

    
    public static void sortProducts(Product[] products) {
        Arrays.sort(products, Comparator.comparing(Product::getProductName));
    }
}
