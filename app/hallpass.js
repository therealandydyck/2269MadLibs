// page2.js
import {
    Pressable,
    Image,
    Text,
    View,
} from 'react-native';
import { Link, useLocalSearchParams } from 'expo-router';
import Styles from '../styles/page-styles';


// returns today's date in the day/month/year format
function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${date}/${month}/${year}`;
  }

export default function Page() {
    const params = useLocalSearchParams();  //captures the data passed from the index.js and parses it into variables
    const { name } = params;
    const { noun } = params;
    const { anEvent } = params;
   

    return (                    // makeshift header, looked at screen stack navigation, would be much more worthwhile for a larger app.
        <View style={Styles.page}>
            <View style={Styles.header}>            
                <Link
                    style={Styles.backButton}  // link back to the index
                    href={{
                        pathname: "/",
                    }} asChild
                >
                    <Pressable>
                        <Text style={Styles.text}>Back</Text>
                    </Pressable>

                </Link> 
            </View>
            <View style={Styles.pageMain}>
                <Image 
                    style={Styles.logo}
                    source={require('../assets/madlibs.jpg')}  //madlibs logo, image didn't want to load without require, *requires* further invsestigation
                />
                <View style={Styles.rotatedContainer}>
                
                    <Text 
                        style={Styles.rotatedText}   // This was a pain, rotated text wanted to apply flex in its original orientation at the same time
                    >HALL PASS</Text>
                </View>  
                
                <View style={Styles.cardMain}>
                    <Text style={Styles.madText}>MaD LiBs</Text>
                    <Text style={Styles.passText}>DATE:{getDate()}</Text>
                    <Text style={Styles.passText}><Text style={Styles.pText}>{name}</Text>, is too cool for</Text>  
                    <Text style={Styles.passText}><Text style={Styles.pText}>{noun}</Text> class.</Text>
                    <Text style={Styles.passText}>Instead, he/she/they will be </Text>
                    <Text style={Styles.passText}>attending the <Text style={Styles.pText}>{anEvent}</Text>.</Text>
                    <View style={Styles.signBox}>
                        <Text style={Styles.passText}>SIGNED:</Text>
                    </View>
                </View>
                
            </View>
        </View>
    )
}