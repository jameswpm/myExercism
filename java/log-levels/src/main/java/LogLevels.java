public class LogLevels {
    
    public static String message(String logLine) {
        String[] split = logLine.trim().split(":");
        return split[1].trim();
    }

    public static String logLevel(String logLine) {
        String[] split = logLine.trim().split(":");
        return split[0].trim().replace("[","").replace("]", "").toLowerCase();
    }

    public static String reformat(String logLine) {
        String[] split = logLine.trim().split(":");
        return message(logLine) + " (" + logLevel(logLine) + ")";
    }
}
