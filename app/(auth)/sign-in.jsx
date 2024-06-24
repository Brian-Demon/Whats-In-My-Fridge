import { View, Text, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "../../constants/Colors";
import { Link } from "expo-router";
import Input from "../../components/FormControls/Input";
import Button from "../../components/Button";

const background = Colors.dark.background;
const font = "font-lufga";
const textColor = Colors.dark.text;

export default SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setisSubmitting] = useState(false);

  const submit = () => {

  };

  const textFont = "font-lufga";

  return (
    <SafeAreaView className={`${background} h-full`}>
      <ScrollView>
        <View className={`w-full justify-center h-full px-4 py-6`}>

          <Text className={`text-6xl ${textColor} ${textFont} text-semibold mt-10 font-psemibold`}>
            Log In
          </Text>

          <Input
            title="Email"
            value={form.email}
            // placeholder="Foo"
            handleOnChange={(e) => setForm({ ...form, email: e })}
            additionalViewClasses="mt-7"
            keyboardType="email-address"
          />

          <Input
            title="Password"
            value={form.password}
            handleOnChange={(e) => setForm({ ...form, password: e })}
            additionalViewClasses="mt-7"
          />

          <Button
            className={``}
            title={`Sign In`}
            handlePress={submit}
            additionalContainerClass={`mt-7`}
            isLoading={isSubmitting}
          />

          <View className={`justify-center pt-5 flex-row gap-2`}>
            <Text className={`text-lg text-white ${font}`}>
              Don't have account?
            </Text>
            <Link
              className={`text-lg ${textColor} ${font}`}
              href={"/sign-up"}
            >
              Sign Up
            </Link>
          </View>

          <View className={`flex justify-center pt-5 flex-row gap-2`}>
            <Link
              href="/"
              className={`text-lg ${textColor} ${font}`}
            >
              Home
            </Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

{/* <Input
  title="Email"
  value=""
  placeholder=""
  handleOnChange={() => {}}
/> */}