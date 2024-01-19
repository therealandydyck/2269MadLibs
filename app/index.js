// index.js
import React from 'react';
import {
    Pressable,
    Text,
    View,
    TextInput
} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const [name, onChangeName] = React.useState("");
    const [noun, onChangeNoun] = React.useState("");
    const [anEvent, onChangeAnEvent] = React.useState("");

    return (
        <View style={Styles.page}>
            <Text>how to play Mad Libs Hall Pass</Text>
            <TextInput
                style={Styles.input}
                onChangeText={onChangeName}
                value={name}
                placeholder="Name"
            />
            <TextInput
                style={Styles.input}
                onChangeText={onChangeNoun}
                value={noun}
                placeholder="Noun"
            />
            <TextInput
                style={Styles.input}
                onChangeText={onChangeAnEvent}
                value={anEvent}
                placeholder="An Event"
            />
            <Link
                style={Styles.button}
                href={{
                    pathname: "/hallpass",
                    params: { name, noun, anEvent }
                }} asChild
            >
                <Pressable>
                    <Text>Make my hall pass</Text>
                </Pressable>
            </Link>
            <Link
                style={Styles.button}
                href={{
                    pathname: "/",
                }} asChild
            >
                <Pressable>
                    <Text>Clear</Text>
                </Pressable>
            </Link>
        </View>
        )
}