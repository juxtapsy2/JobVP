import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ManageCompany from "../ManageCompany/ManageCompany";
import ManageJobDetail from "./ManageJobDetail";
import ManageJob from "./ManageJob";
import UpdateNameJob from "../../components/ManageJob/UpdateNameJob";
import AllCVApply from "./AllCvApply";
import AllCvApplyStackNav from "./AllCvApplyStackNav";
import AcceptCVApplyStackNav from "./AcceptCVApplyStackNav";

export default function ManageJobDetailStackNav() {
  const Stack = createStackNavigator();
  const { params } = useRoute();

  useEffect(() => {
    console.log("JobDa=eatail");
    console.log(params.job);
  }, [params]);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="manage-job-detail"
        options={{
          headerStyle: {
            backgroundColor: "#2c67f2",
          },
          headerTintColor: "#fff",
          headerTitle: "Search",
          headerShown: false,
        }}
      >
        {(props) => <ManageJobDetail {...props} job={params.job} />}
      </Stack.Screen>
      <Stack.Screen
        name="update-name-job"
        options={{
          headerStyle: {
            backgroundColor: "#2c67f2",
          },
          headerTintColor: "#fff",
          headerTitle: "Search",
          headerShown: false,
        }}
      >
        {(props) => <UpdateNameJob {...props} checkNav={true} />}
      </Stack.Screen>
      <Stack.Screen
        name="all-cv-apply"
        options={{
          headerStyle: {
            backgroundColor: "#2c67f2",
          },
          headerTintColor: "#fff",
          headerTitle: "Search",
          headerShown: false,
        }}
      >
        {(props) => (
          <AllCvApplyStackNav {...props} checkNav={true} job={params.job} />
        )}
      </Stack.Screen>
      <Stack.Screen
        name="accept-cv-apply"
        options={{
          headerStyle: {
            backgroundColor: "#2c67f2",
          },
          headerTintColor: "#fff",
          headerTitle: "Search",
          headerShown: false,
        }}
      >
        {(props) => (
          <AcceptCVApplyStackNav {...props} checkNav={true} job={params.job} />
        )}
      </Stack.Screen>
      {/* <Stack.Screen
        name="job-detail"
        options={{
          headerStyle: {
            backgroundColor: "#2c67f2",
          },
          headerTintColor: "#fff",
          headerTitle: "Search",
          headerShown: false,
        }}
      >
        {(props) => <JobDetail {...props} checkNav={true} />}
      </Stack.Screen> */}
    </Stack.Navigator>
  );
}
