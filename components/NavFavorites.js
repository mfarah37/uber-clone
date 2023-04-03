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
    location: "Code Street, London, UK",
  },
  {
    id: "456",
    icon: "briefcase",
    description: "Work",
    location: "The Shard, London Bridge Street, London, UK",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
            <Icon
                style={tw`mr-4 rounded-full bg-gray-300 p-3`}
                name={icon}
                type='ionicon'
                color='white'
                size={18} 
            />
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({});