import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import tw from 'twrnc';
import { Icon } from "@rneui/base";

const data = [
  {
    id: "123",
    icon: "home",
    description: "Home",
    location: "Bel-Air, Beverly Hills, CA",
  },
  {
    id: "456",
    icon: "briefcase",
    description: "Work",
    location: "LAX, Los Angeles, CA",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() =>(
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-5`}
                name={icon}
                type='ionicon'
                color='white'
                size={18} 
            />
            <View>
                <Text style={tw`font-semibold text-lf`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
            </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});