#include "queen_attack.h"


attack_status_t can_attack(position_t queen_1, position_t queen_2)
{
    if (queen_1.row > 7 || queen_2.row > 7 || queen_1.column > 7 || queen_2.column > 7) {
        return INVALID_POSITION;
    }
    if (queen_1.row == queen_2.row && queen_1.column == queen_2.column){
        return INVALID_POSITION;
    }
    //if the queens are at the same row, they can atack
    if (queen_1.row == queen_2.row) {
        return CAN_ATTACK;
    }
    //if the queens are at the same column, they can atack
    if (queen_1.column == queen_2.column) {
        return CAN_ATTACK;
    }

    //if they are at the same diagonal, they share the difference between row and column
    if ((queen_1.row - queen_1.column) == (queen_2.row - queen_2.column)){
        return CAN_ATTACK;
    }

    if ((queen_1.column - queen_1.row) == (queen_2.column - queen_2.row) || (queen_1.row + queen_1.column) == (queen_2.row + queen_2.column)){
        return CAN_ATTACK;
    }

    return CAN_NOT_ATTACK;
}