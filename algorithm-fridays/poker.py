from poker_hands import poker_hands
# print poker_hands
J = 11;
Q = 12;
K = 13;
A = 14;
highCard = 1;
pair = 2;
twoPair = 3;
threeOfAKind = 4;
straight = 5;
flush = 6;
fullHouse = 7;
fourOfAKind = 8;
straightFlush = 9;
royalFlush = 10;
faceCards = {
    J : 11,
    Q : 12,
    K : 13,
    A : 14
}
cards = poker_hands.split(' ')
# print cards;
player1_hands_holder = []
player2_hands_holder = []
counter = 0
for i in range(0, len(cards)):
    if (counter % 2 == 0):
        player1_hands_holder.append(cards[i])
    else:
        player2_hands_holder.append(cards[i])
    if ((i + 1) % 5 == 0):
        counter += 1
# print player2_hands
player1_hands = []
player2_hands = []
placeHolder = 0
while placeHolder < (len(player1_hands_holder)/5):
    player1_hands.append([]);
    player2_hands.append([]);
    placeHolder += 1
# print len(player1_hands)
hand_array_index = 0
for i in range(0, len(player1_hands_holder)):
    player1_hands[hand_array_index].append(player1_hands_holder[i])
    player2_hands[hand_array_index].append(player2_hands_holder[i])
    if ((i + 1) % 5 == 0):
        hand_array_index += 1
# print player1_hands[999]
# print player2_hands[999]