import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export const MessageComponent = ({title}:any) => (

    <View style={ styles.container }>
        <Text style={ styles.title }> { title } </Text>
        {/* <OpenSocialComponent url={RGit} iname="logo-octocat">Jola</OpenSocialComponent> */}
    </View>

)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'aqua',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        color: 'black'
    }
});