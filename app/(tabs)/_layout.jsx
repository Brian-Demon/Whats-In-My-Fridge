import { View, Text, Image } from "react-native";
import { Tabs } from "expo-router";
import Icons from "../../constants/Icons";

const TabIcon = ({
  icon,
  color,
  name,
  focused,
  additionalViewClasses = "",
  additionalImageClasses = "",
  additionalTextClasses = ""
}) => {
  return (
    <View className={`items-center justify-center ${additionalViewClasses}`}>
      <Image
        className={`w-6 h-6 ${additionalImageClasses}`}
        source={icon}
        resizeMode="contain"
        tintColor={color}
      />
      <Text className={`${focused ? "font-clashGrotesk" : "font-regular"} text-xs ${additionalTextClasses}`}>
        {name}
      </Text>
    </View>
  )
}

export default function TabsLayout() {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        <Tabs.Screen
          name="lists"
          options={{
            title: "Lists",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.list}
                color={color}
                name="Lists"
                focused={focused}
              />
              
            )
          }}
        />
        <Tabs.Screen
          name="fridge"
          options={{
            title: "Fridge",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.fridge}
                color={color}
                name="Fridge"
                focused={focused}
              />
              
            )
          }}
        />
        <Tabs.Screen
          name="recipes"
          options={{
            title: "Recipes",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.recipes}
                color={color}
                name="Recipes"
                focused={focused}
              />
              
            )
          }}
        />
        <Tabs.Screen
          name="account"
          options={{
            title: "Account",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={Icons.account}
                color={color}
                name="Account"
                focused={focused}
              />
              
            )
          }}
        />
      </Tabs>
    </>
  );
}
