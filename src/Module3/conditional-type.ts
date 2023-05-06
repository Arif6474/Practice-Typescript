// 3-9: Conditional Types

type sheikh = {
    wife1: string;
    wife2: string;
}

type checkProperty<T , X > = X extends keyof sheikh ? true : false;

type checkWife1 = checkProperty<sheikh , 'wife1'>

type amrFriends = 'shahid' | 'jobair' | 'nayeem' | 'emon'

type removeFriend<T , X> = T extends X ? never : T

type currentFriend = removeFriend<amrFriends , 'nayeem'>