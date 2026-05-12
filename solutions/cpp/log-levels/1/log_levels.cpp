#include <string>

namespace log_line {
    
std::string message(std::string line) {
    // return the message
    int pos = line.find(":");

    return line.substr(pos + 2);
}

std::string log_level(std::string line) {
    // return the log level
    int pos = line.find(":");

    return line.substr(1, pos - 2);
}

std::string reformat(std::string line) {
    // return the reformatted message

    return message(line) + " (" + log_level(line) + ")";
}
}  // namespace log_line
