import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
       
    },
    title:{
        padding: 15,
        marginTop: '15%',
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
        fontSize: 20,
        fontWeight: 'bold',
    },
    madText: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 'auto',
        marginRight: 100,
        marginBottom: 30,
        paddingTop: '10%',
    },
    passText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        width: '86%',
    },
    backButton: {
        justifyContent: 'flex-start',
        padding: 15,
        paddingTop: 30,
        
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
        flexDirection: 'column',
        transform: [{translateX: -170}, {translateY: 200}],
       
    },
    rotatedText: {   
        transform: [{rotate: '270deg'}],
        fontSize: 70,
        marginTop: 1,
    },
    cardMain : {
        transform: [{translateX: 60}, {translateY: -180}],
    },
    signBox: {
        borderStyle: 'solid',
        borderWidth: 5,
        maxWidth: '70%',
        height: '25%',
        marginTop: 50,
    },
    logo: {
        transform: [{translateX: -20}],
        width: 75,
        height: 75,
    },
    pText: {
        color: 'blue',
    },
});

export default styles;