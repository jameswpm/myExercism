public class CarsAssemble {

    public double productionRatePerHour(int speed) {
        int carsPerHour = 221;

        double successRate = 1;
        if (speed > 4) {
            successRate = 0.9;
        }
        if (speed > 8) {
            successRate = 0.8;
        }
        if (speed >= 10) {
            successRate = 0.77;
        }

        return speed * carsPerHour * successRate;
    }

    public int workingItemsPerMinute(int speed) {
        double productionPerHour = this.productionRatePerHour(speed);
        return (int) productionPerHour / 60;
    }
}
