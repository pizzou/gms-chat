import { Tabs } from "expo-router";
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabNavigator(){
    return(
        <Tabs>
            <Tabs.Screen name="index" options={{
                title:'Chats',
                tabBarIcon: ({ size, color})=>(
                    <Entypo name="chat" size={24} color="black" />
                )
            }}/>
             <Tabs.Screen name="profile" options={{
                title:'Profile',
                tabBarIcon: ({ size, color})=>(
                    <FontAwesome5 name="user-alt" size={24} color="black" />
                )
            }}/>
        </Tabs>
    )
}