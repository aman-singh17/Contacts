import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
const UserScreen = props => {
    const id = props.navigation.getParam('id');
    const [isLoading, setLoading] = useState(false);
    const [user, setUser] = useState([]);
    const [userAddress, setUserAddress] = useState([]);
    const [userCompany, setUserCompany] = useState([]);
    getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id)
          .then((response) => response.json())
          .then((json) => {
              setUser(json);
              console.log(json);
              setUserAddress(json.address);
              setUserCompany(json.company);
          })
          .catch((error) => console.error(error))
          .finally(() => setLoading(false));
    }
    useEffect(() => {
        console.log(id)
        setLoading(true);
        getUser();
    }, []);
    return (
        
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? <Text>Loading...</Text> : 
            (
                <View style={{flexGrow: 1, justifyContent:'center' ,alignItems: 'center'}}>
                    <Text >{'\n'}</Text>
                    <Icon name="feed-person" size={150} color="#3143e8" />
                    <Text style={{ alignItems: 'center', fontSize: 36 }}>{'\n'}{user.name}</Text>
                    <Text style={{ alignItems: 'center', fontSize: 21 }}>Phone: {user.phone}{'\n'}</Text>
                    <Text style={{fontSize:19}}>Website: {user.website}</Text>
                    <Text style={{fontSize:19}}>Company: {userCompany.name} </Text>
                    <Text style={{fontSize:19}}>Address: {userAddress.street}, {userAddress.suite}, </Text>
                    <Text style={{fontSize:19}}>{userAddress.city}, {userAddress.zipcode}  </Text>
                </View>
            )}
        </View>
);
};
UserScreen.navigationOptions = {
    title: 'User Details'
};
export default UserScreen;