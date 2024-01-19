// page2.js
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

export default function Page() {
    const params = useLocalSearchParams();
    const { food } = params;

    return (
        <View style={Styles.page}>
            <Text>This is page 2</Text>
            <Text>You like to eat {food}!</Text>
            <Link
                style={Styles.button}
                href={{
                    pathname: "/",
                }} asChild
            >
                <Pressable>
                    <Text>Home</Text>
                </Pressable>

            </Link>
        </View>
    )
}