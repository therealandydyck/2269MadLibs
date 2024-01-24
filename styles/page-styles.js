import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
    },
    title:{
        padding: 15,
        marginTop: 100,
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
    madText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 170,
        marginBottom: 30,
    },
    passText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    backButton: {
        justifyContent: 'flex-start',
        padding: 15,
        marginTop: 30,
        
    },
    pageMain: {
        flex: 0.9,
        flexDirection: 'column',
        
    },
    header: {
        flex: 0.11,
        width: '100%',
        backgroundColor: 'red',
    },
    rotatedContainer: {
        
        transform: [{translateX: -170}, {translateY: 400}],
       
    },
    rotatedText: {
       
        transform: [{rotate: '270deg'}],
        fontSize: 80,
        marginTop: 1,
    },
    cardMain : {
        transform: [{translateX: 90}, {translateY: -50}],
        
    },
    signBox: {
        borderStyle: 'solid',
        borderWidth: 5,
        maxWidth: '70%',
        height: '25%',
    },
});

export default styles;