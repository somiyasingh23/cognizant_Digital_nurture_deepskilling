package fin;

public class FinanacialForecast {

    public static double forecastValue(double initialValue, double growthRate, int years) {
        if (years == 0) {
            return initialValue;
        } else {
            return forecastValue(initialValue, growthRate, years - 1) * (1 + growthRate);
        }
    }

    public static void main(String[] args) {
        double initialValue = 1000.0;
        double growthRate = 0.10; 
        int years = 5;

        double futureValue = forecastValue(initialValue, growthRate, years);

        System.out.printf(" Predicted value after %d years: ₹%.2f\n", years, futureValue);
    }
}
