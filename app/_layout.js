import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTitle: "Assignment 1",
            headerStyle: { backgroundColor: 'red',},
            headerTintColor: 'white',
            headerBackVisible: false,
        }}>
            <Stack.Screen
                name="index"
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen 
                name="hallpass"
                options={{
                    headerShown: false,
                    presentation: 'modal',
                }}
            />
        </Stack>
    )
}