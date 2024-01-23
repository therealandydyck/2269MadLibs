import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        width: '80%',
        
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        margin: 15,
    },
    button: {
        margin: 15,
        backgroundColor: 'lightblue',
        borderRadius: 10,
        padding: 15,
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    passText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
    },
    backButton: {
        justifyContent: 'flex-start',
        padding: 15,
        marginTop:20,
        width: '20%',
    },
    pageMain: {
        flex: 0.9,
        flexDirection: 'row',
    },
    header: {
        flex: 0.11,
        width: '100%',
        backgroundColor: 'red',
    },
    rotatedText: {
        transform: [{rotate: '270deg'}],
        justifyContent: 'flex-start',
        flex: 0.1,
        

    },
    cardMain : {
        justifyContent: 'flex-end',
    },
});

export default styles;