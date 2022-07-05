import React, { Component } from 'react';

function FloatingActionButton({ navigation }) {
    return (
        <View style={{
            position: "absolute",
            right: 40,
        }}>
            <TouchableOpacity
                style={styles.border_button}
                onPress={() => {
                    navigation.navigate("NewScreen")
                }}
            >
                <View style={styles.container_icon_button}>
                    <Image source={require('./app/assets/add.png')} style={styles.icon_button} />
                </View>
            </TouchableOpacity></View>
    );
}

export default class BodyScreen extends Component {
    render() {
        return (

            <View style={{
                top: 200,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={require('../../assets/box.png')} style={styles.box_image} />
                <Text style={styles.text_youhavenothing}>
                    You have nothing to-dos
                </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    border_button: {
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.2)',
        position: "absolute",
        width: 60,
        height: 60,
        right: 40,
        bottom: 40,
        top: 40,
        backgroundColor: '#00B2FF',
        borderRadius: 100,
    },
    icon_button: {
        height: 16,
        width: 16,
    },
    text_youhavenothing: {
        fontSize: 16,
        top: 20,
    },
    box_image: {
        background: "#000000",
        width: 105,
        height: 100,
    },

})