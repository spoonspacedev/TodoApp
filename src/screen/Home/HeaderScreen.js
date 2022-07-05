import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

function ThreeDot() {
    const [visible, setVisible] = React.useState(false);
    const openMenu = () => setVisible(true);
    const closeMenu = () => setVisible(false);
    return (
        <Provider>
            <Menu
                visible={visible}
                onDismiss={closeMenu}
                anchor={
                    <TouchableOpacity
                        onPress={() => openMenu}
                    >
                        <Image source={require('./app/assets/three_dot.png')} style={styles.image_btn} />
                    </TouchableOpacity>
                }>
                <Menu.Item onPress={() => { }} title="Sort by" />
                <Menu.Item onPress={() => { }} title="Delete all" />
            </Menu>
        </Provider>
    );
}

export default class Header extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
            }}>
                <View style={{
                    flex: 1
                }}>
                    <Text style={styles.txt_heading}>
                        Todos
                    </Text>
                </View>
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    flexDirection: 'row',
                }}>
                    <View >
                        <View>
                            <TouchableOpacity
                                onPress={() => alert('Simple Button pressed')}
                            >
                                <Image source={require('./app/assets/search.png')} style={styles.image_btn} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <ThreeDot />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    txt_heading: {
        fontSize: 20,
        fontWeight: "500",
        color: "#000000",
        padding: 20
    },
    image_btn: {
        height: 16,
        width: 16,
        resizeMode: 'center',
        padding: 20,
    }
})