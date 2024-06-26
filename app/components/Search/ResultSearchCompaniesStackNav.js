import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ResultSearchCompanies from "./ResultSearchCompanies";
import CompaniesDetail from "../../pages/Company/CompanyDetail";

export default function ResultSearchCompaniesStackNav({
  itemList,
  filterLocation,
  textLocation,
}) {
  const Stack = createStackNavigator();
  useEffect(() => {
    console.log("Stact", itemList);
    console.log("Searchxx: ", textLocation);
  }, [itemList]);
  return (
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name="home">
        {(props) => (
          <ResultSearchCompanies
            {...props}
            itemList={itemList}
            filterLocation={filterLocation}
            textLocation={textLocation}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="company-detail"
        component={CompaniesDetail}
        options={{
          animationEnabled: true,
          cardStyle: { backgroundColor: "transparent" },
          cardOverlayEnabled: true,
          cardStyleInterpolator: ({ current: { progress } }) => ({
            cardStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 0.5, 0.9, 1],
                outputRange: [0, 0.25, 0.7, 1],
              }),
            },
            overlayStyle: {
              opacity: progress.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0.5],
                extrapolate: "clamp",
              }),
            },
          }),
        }}
      />
    </Stack.Navigator>
  );
}
