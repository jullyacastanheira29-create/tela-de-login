import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./src/navigation/stackNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}