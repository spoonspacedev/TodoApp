import React, { Component } from 'react';

export default class IndexScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <Appbar />
                </View>
                <View style={styles.container}>
                    <NothingTodos /></View>
                <View>
                    <FloatingActionButton></FloatingActionButton>
                </View>
            </View>
        );
    }
}
