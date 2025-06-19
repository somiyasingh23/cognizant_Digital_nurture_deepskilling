package fin;

import java.util.HashMap;

public class FinancialForecastMemoized {

    static HashMap<Integer, Double> memo = new HashMap<>();

    public static double forecastValue(double initialValue, double growthRate, int years) {
        if (years == 0) return initialValue;

        if (memo.containsKey(years)) return memo.get(years);

        double result = forecastValue(initialValue, growthRate, years - 1) * (1 + growthRate);
        memo.put(years, result);  
        return result;
    }

    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.10;
        int years = 10;

        double futureValue = forecastValue(initialValue, growthRate, years);
        System.out.printf("Forecast (Memoized): ₹%.2f after %d years\n", futureValue, years);
    }
}
