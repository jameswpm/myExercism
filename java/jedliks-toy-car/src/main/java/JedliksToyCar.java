public class JedliksToyCar {

    private int distance;
    private int batery = 100;
    
    public static JedliksToyCar buy() {
        JedliksToyCar newCar = new JedliksToyCar();
        return newCar;
    }

    public String distanceDisplay() {
        return "Driven " + this.distance + " meters";
    }

    public String batteryDisplay() {
        if (this.batery <= 0) {
            return "Battery empty";
        }
        return "Battery at " + this.batery + "%";
    }

    public void drive() {
        if (this.batery > 0) {
            this.distance += 20;
            this.batery -= 1;
        }
    }
}
