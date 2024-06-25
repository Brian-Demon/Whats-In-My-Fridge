/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const defaultDarkTextColor = "text-amber-500"

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: defaultDarkTextColor,
    background: "bg-gray-900",
    tint: tintColorDark,
    inactiveIconHex: "#22303C",
    activeIconHex: "#FBBF24",
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
    inputFieldBackground: "bg-gray-950",
    inputFieldFocusedBorderColor: "border-amber-500",
    placeHolderColor: "#7B7B8B",
  },
};
