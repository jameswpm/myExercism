
class BirdWatcher {
    private final int[] birdsPerDay;

    public BirdWatcher(int[] birdsPerDay) {
        this.birdsPerDay = birdsPerDay.clone();
    }

    public int[] getLastWeek() {
        return this.birdsPerDay;
    }

    public int getToday() {
        return this.birdsPerDay[6];
    }

    public void incrementTodaysCount() {
        this.birdsPerDay[6] = this.getToday() + 1;
    }

    public boolean hasDayWithoutBirds() {
        for (int daily_birds: this.birdsPerDay) {
            if (daily_birds == 0) {
                return true;
            }
        }
        return false;
    }

    public int getCountForFirstDays(int numberOfDays) {
        int count = 0;

        if (numberOfDays > 6) {
            numberOfDays = 7;
        }

        for (int i = 0; i < numberOfDays ; i++) {
            count += this.birdsPerDay[i];
        }

        return count;
    }

    public int getBusyDays() {
        int busy_days = 0;
        for (int daily_birds: this.birdsPerDay) {
            if (daily_birds >= 5) {
                busy_days++;
            }
        }
        return busy_days;
    }
}
