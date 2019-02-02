import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import { Container, Content, Header, Left, Body, Icon, Title, Button, Card, CardItem} from 'native-base';

class MainScreen extends React.Component {
    constructor() {
        super();
        this.state = {
        isReady: false
        };
    }  

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
        this.setState({ isReady: true });
    }

    render(){

        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }

        return (

        <Container>

            <View style={{height: getStatusBarHeight(), backgroundColor: 'rgba(46, 85, 118, 1)'}}></View>

            <Header style={{backgroundColor: 'steelblue'}}>

                <Left style={{flexDirection: 'row'}}>

                <Button transparent>
                    <Icon name="menu" onPress={()=>this.props.navigation.openDrawer()}></Icon>
                </Button>

                </Left>

                <Body>
                    <Title>Gospel Community</Title>
                </Body>

            </Header>

            <View style={{flex: 1, backgroundColor:'rgba(123, 167, 204, 1)', justifyContent:'center', alignItems:'center'}}>
                <Image style={{height: 100, width: 100, borderRadius: 50}} source={{uri: 'https://scontent.fkul8-1.fna.fbcdn.net/v/t1.0-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&_nc_ht=scontent.fkul8-1.fna&oh=0b30d1f322e3ca702c6b211b910ed6ce&oe=5CF4CDE9'}}/>
                <Text styles={{color:'#ffffff'}}> Matthew Yong </Text>
            </View>

            <View style={{flex: 2, backgroundColor:'powderblue'}}>

                <Content contentContainerStyle={{
                    flex: 1, 
                    alignItems: 'center',
                }}>

                <View style={{flex: 2, alignSelf: 'stretch' }}>

                    <Card style={{flex:1, alignItems: 'center'}}>
                        <CardItem>
                            <Text>
                                CardItem #1
                            </Text>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={{uri: 'https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80'}} style={{height: 150, width: null, flex: 1}}/>
                        </CardItem>
                    </Card>
                    
                </View>

                <View style={{flex: 1, alignSelf: 'stretch' }}>

                    <Card style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <CardItem>
                            <Text>
                            Matthew 5:16: In the same way, let your light shine before others, that they may see your good deeds and glorify your Father in heaven.
                            </Text>
                        </CardItem>
                    </Card>

                </View>

                </Content>

            </View>

        </Container>

        );
    }

}


export default MainScreen