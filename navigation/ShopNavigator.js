import { Platform } from "react-native";
import { createAppContainer, createStackNavigator } from "react-navigation";
import Colors from "../constants/Colors";
import ProductsOverviewScreen from "../screens/shop/ProductsOverviewScreen";

const ProductNavigator = createStackNavigator({
  ProductsOverview: ProductsOverviewScreen
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
  }
})

export default createAppContainer(ProductNavigator)