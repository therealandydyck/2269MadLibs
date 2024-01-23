// page2.js
import {
    Pressable,
    Text,
    View,
} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

export default function Page() {
    const params = useLocalSearchParams();
    const { name } = params;
    const { noun } = params;
    const { anEvent } = params;
   

    return (
        <View style={Styles.page}>
            <View style={Styles.header}>
                <Link
                    style={Styles.backButton}
                    href={{
                        pathname: "/",
                    }} asChild
                >
                    <Pressable>
                        <Text >Back</Text>
                    </Pressable>

                </Link> 
            </View>
            <View style={Styles.pageMain}>
                <View style={Styles.rotatedText}>
                    <Text>HALL PASS</Text>
                </View>  
                <View style={Styles.cardMain}>
                    <Text style={Styles.passText}>MaD LiBs</Text>
                    <Text style={Styles.passText}>DATE:{getDate()}</Text>
                    <Text style={Styles.passText}>{name} : is too cool</Text>
                    <Text style={Styles.passText}>for {noun} class.</Text>
                    <Text style={Styles.passText}>Instead, he/she/they will be </Text>
                    <Text style={Styles.passText}>attending the {anEvent}</Text>
                    <Text style={Styles.passText}>SIGNED: SIGNATURE BOX</Text>
                </View>
                
            </View>
        </View>
    )
}