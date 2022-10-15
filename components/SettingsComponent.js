import React from 'react';
import { View, Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const SettingsComponent = ({
    modalVisible,
    setModalVisible,
    settingsOptions,
    prefArr,
}) => {
    return (
        <>
         
            <ScrollView style={{ backgroundColor: "white" }}>
                {settingsOptions.map(({ title, subTitle, onPress }, index) => (
                    <TouchableOpacity  key={title} onPress={onPress}>
                        <View
                            style={{
                                paddingHorizontal: 20,
                                paddingBottom: 20,
                                paddingTop: 20,
                            }}>
                            <Text style={{ fontSize: 17 }}>{title}</Text>
                            {subTitle && (
                                <Text style={{ fontSize: 14, opacity: 0.5, paddingTop: 5 }}>
                                    {subTitle}
                                </Text>
                            )}
                        </View>

                        <View style={{ height: 0.5, backgroundColor: "grey" }} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </>
    );
};

export default SettingsComponent;