
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// Define the types
type Sender = {
  image: string;
  is_kyc_verified: boolean;
  self: boolean;
  user_id: string;
};

type Chat = {
  id: string;
  message: string;
  sender: Sender;
  time: string;
};

type ChatData = {
  chats: Chat[];
  from: string;
  message: string;
  name: string;
  status: string;
  to: string;
};

// Example chat data
const chatData: ChatData = {
  chats: [
    {
      id: "938c9d6404d345bbac6725071c7a35a9",
      message: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Quisque vitae varius ex, eu volutpat orci.",
      sender: {
        image: "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        is_kyc_verified: true,
        self: false,
        user_id: "73785ed67d034f6290b0334c6e756433"
      },
      time: "2024-07-08 13:25:25"
    },
    {
      id: "44997459aabb4d9eb11a81c7fab6f75d",
      message: "Quisque vitae varius ex, eu volutpat orci.Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.",
      sender: {
        image: "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g",
        is_kyc_verified: false,
        self: false,
        user_id: "54fbcca87afa4527b28221df348018b1"
      },
      time: "2024-07-08 13:25:55"
    }, {
      "id": "992840dc056c4994be1932019a348ad8",
      "message": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Duis ac nulla varius diam ultrices rutrum.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Nullam tempus scelerisque purus, sed mattis elit condimentum nec.",
      "sender": {
        "image": "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        "is_kyc_verified": true,
        "self": false,
        "user_id": "73785ed67d034f6290b0334c6e756433"
      },
      "time": "2024-07-08 13:26:25"
    },
    {
      "id": "c93f38cdb61146cd81a270965f49aded",
      "message": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Aenean ullamcorper orci et vulputate fermentum.",
      "sender": {
        "image": "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        "is_kyc_verified": true,
        "self": false,
        "user_id": "73785ed67d034f6290b0334c6e756433"
      },
      "time": "2024-07-08 13:26:55"
    },
    {
      "id": "368e91993df946dab79f4ed7a96c9a4d",
      "message": "Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit.Cras vel elit sed mi placerat pharetra eget vel odio.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Aenean ullamcorper orci et vulputate fermentum.",
      "sender": {
        "image": "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        "is_kyc_verified": true,
        "self": false,
        "user_id": "73785ed67d034f6290b0334c6e756433"
      },
      "time": "2024-07-08 13:27:25"
    },
    {
      "id": "a0b55b7f880d43539f1c8f00987c7529",
      "message": "Nullam tempus scelerisque purus, sed mattis elit condimentum nec.<br>Page 0<br>Cras erat dui, finibus vel lectus ac, pharetra dictum odio.",
      "sender": {
        "image": "https://fastly.picsum.photos/id/648/160/160.jpg?hmac=AqrvRqv79fFWHWjjjm_Cn7QPPJ2JVox_CLRgzISsO4o",
        "is_kyc_verified": false,
        "self": false,
        "user_id": "a6c04ceed74b447280f5fa7ab053adcc"
      },
      "time": "2024-07-08 13:27:55"
    },
    {
      "id": "85f5562afe964c41a7325d5a4aaa759f",
      "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Page 0<br>Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Aenean ullamcorper orci et vulputate fermentum.Aenean ullamcorper orci et vulputate fermentum.",
      "sender": {
        "image": "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        "is_kyc_verified": true,
        "self": false,
        "user_id": "73785ed67d034f6290b0334c6e756433"
      },
      "time": "2024-07-08 13:28:25"
    },
    {
      "id": "f834b40c54ec4876b9da2527dd886e84",
      "message": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Integer ultricies malesuada quam.Cras erat dui, finibus vel lectus ac, pharetra dictum odio.<br>Page 0<br>",
      "sender": {
        "image": "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g",
        "is_kyc_verified": false,
        "self": false,
        "user_id": "54fbcca87afa4527b28221df348018b1"
      },
      "time": "2024-07-08 13:28:55"
    },
    {
      "id": "890fb35ee9ad4ab98efaeb56949e7342",
      "message": "Quisque vitae varius ex, eu volutpat orci.Etiam risus sapien, auctor eu volutpat sit amet, porta in nunc.",
      "sender": {
        "image": "https://fastly.picsum.photos/id/551/160/160.jpg?hmac=DKAZaW3KPwMLhYwnJ-s_NOYKngMXo-nR1pEQzcNCgr0",
        "is_kyc_verified": true,
        "self": false,
        "user_id": "73785ed67d034f6290b0334c6e756433"
      },
      "time": "2024-07-08 13:29:25"
    },
    {
      "id": "d4a9aedea20146d3a0605ee0b434fe24",
      "message": "Proin ipsum purus, laoreet quis dictum a, laoreet sed ligula.Aenean ullamcorper orci et vulputate fermentum.",
      "sender": {
        "image": "https://fastly.picsum.photos/id/819/160/160.jpg?hmac=duWXAb-022KT3VnXfDCSyr0sLwddRYoP7RMFnidof_g",
        "is_kyc_verified": false,
        "self": false,
        "user_id": "54fbcca87afa4527b28221df348018b1"
      },
      "time": "2024-07-08 13:29:55"
    }
    
  ],
  from: "Marathahalli",
  message: "Chat retrieved successfully",
  name: "Trip No. 25",
  status: "success",
  to: "Whitefield"
};

// The ChatList component
const Trip: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="arrow-back" size={24} color="black" />
      <Text style={styles.title}>{chatData.name}</Text>   
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'row', padding: 20
  },
  title: {
    fontSize:20 , fontWeight:'bold',paddingLeft:8
  },

});

export default Trip;
