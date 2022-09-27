import React from 'react';
import { Text, ScrollView } from 'react-native';
const User = props => {
    return (
        <ScrollView>
            <Text  style={{padding: 30 }}>{props.user.name}</Text>
        </ScrollView>
    );
};
export default User;