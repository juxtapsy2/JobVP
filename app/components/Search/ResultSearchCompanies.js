import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function ResultSearchCompanies({
  itemList,
  filterLocation,
  textLocation,
}) {
  const navigation = useNavigation();
  console.log("Search companies: " + textLocation);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "#ffff" }}>
        <Text
          style={{
            marginTop: 10,
            marginBottom: 10,
            marginLeft: 15,
            marginRight: 15,
            fontSize: 16,
            color: "#333333",
            fontWeight: "bold",
          }}
        >
          Companies
        </Text>

        {itemList.length > 0 ? (
          <Text
            style={{
              marginBottom: 10,
              marginLeft: 15,
              marginRight: 15,
              fontSize: 15,
              color: "#4e4e4e",
            }}
          >
            Tìm thấy {itemList.length} công ty tại {textLocation}
          </Text>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                marginBottom: 10,
                marginLeft: 15,
                marginRight: 15,
                fontSize: 15,
                color: "#4e4e4e",
              }}
            >
              Hiện tại chúng tôi không tìm thấy kết quả nào phù hợp với yêu cầu
              của bạn. Vui lòng thử lại với các keyword khác.
            </Text>
            <Image
              style={{ width: 250, height: 250 }}
              source={require("../../pages/assets/not_found.jpg")}
            />
          </View>
        )}

        {itemList.length > 0 && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={itemList}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.push("company-detail", {
                    company: item,
                  })
                }
                style={{
                  marginLeft: 5,
                  marginRight: 5,
                  marginBottom: 10,
                  borderWidth: 1,
                  borderColor: "#6b9bf5",
                  borderBottomColor: "#F5F6F6",
                  borderRadius: 10,
                  backgroundColor: "#fafbff",
                }}
              >
                <View
                  style={{
                    marginVertical: 16,
                    marginHorizontal: 25,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Image
                    source={{ uri: item?.Logo }}
                    style={{
                      height: 50,
                      width: 50,
                      marginRight: 16,
                      borderRadius: 10,
                    }}
                  />
                  <View>
                    <Text
                      style={{
                        fontSize: 19,
                        color: "#2c67f2",
                        fontWeight: "bold",
                        width: 230,
                      }}
                      numberOfLines={2}
                      ellipsizeMode="tail"
                    >
                      {item?.Name}
                    </Text>

                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",

                        marginTop: 7,
                      }}
                    >
                      <Ionicons
                        name="location-outline"
                        size={20}
                        color="#6b9bf5"
                      />

                      <Text
                        numberOfLines={4}
                        style={{
                          color: "gray",
                          fontSize: 13,
                          marginLeft: 4,
                        }}
                      >
                        {item?.Location}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 4,
                        marginLeft: 3,
                      }}
                    >
                      <AntDesign name="team" size={16} color="#6b9bf5" />
                      <Text
                        style={{
                          color: "gray",
                          fontSize: 13,
                          marginLeft: 4,
                        }}
                      >
                        {item?.Employee}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 4,
                      }}
                    >
                      <Ionicons name="bag-outline" size={20} color="#6b9bf5" />
                      <Text
                        style={{
                          color: "gray",
                          fontSize: 13,
                          marginLeft: 4,
                        }}
                      >
                        {item?.Job} jobs
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={{ marginRight: 0 }}
                    onPress={() => {}}
                  >
                    <Ionicons
                      name="bookmark-outline"
                      size={25}
                      color={"#6b9bf5"}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.ID}
          />
        )}
      </View>
    </View>
  );
}
