package ecom;
public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(102, "T-shirt", "Apparel"),
            new Product(103, "Smartphone", "Electronics"),
            new Product(104, "Shoes", "Footwear"),
            new Product(105, "Book", "Education")
        };

        String searchName = "Shoes";

        System.out.println(" Linear Search:");
        long start1 = System.nanoTime();
        Product result1 = ProductSearch.linearSearch(products, searchName);
        long end1 = System.nanoTime();
        System.out.println(result1 != null ? "Found: " + result1 : "Not Found");
        System.out.println(" Time taken: " + (end1 - start1) + " ns");

        System.out.println("\n Binary Search:");
        ProductSearch.sortProducts(products);  // required for binary search
        long start2 = System.nanoTime();
        Product result2 = ProductSearch.binarySearch(products, searchName);
        long end2 = System.nanoTime();
        System.out.println(result2 != null ? "Found: " + result2 : " Not Found");
        System.out.println(" Time taken: " + (end2 - start2) + " ns");

        System.out.println("\n Time Complexity Analysis:");
        System.out.println(" Linear Search: O(n) - Good for small/unsorted lists");
        System.out.println(" Binary Search: O(log n) - Requires sorted list, faster on large datasets");

        System.out.println("\n Recommendation:");
        System.out.println("Use Linear Search for small, unsorted arrays (like cart items)");
        System.out.println("Use Binary Search for large, sorted arrays (like catalog searches)");
    }
}
