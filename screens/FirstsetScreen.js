import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, StyleSheet, TextInput, Pressable,Image,TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const FirstsetScreen=()=>{
    const navigation = useNavigation();
    const toLogin = () => {
        navigation.navigate('Login')
    }
    const [isRegistraionSuccess,setIsRegistraionSuccess] = useState(false);
        if(isRegistraionSuccess){
            return (
            <View
                style={{
                flex: 1,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                }}>
                <Image
                source={require('/Users/haesu/Desktop/capston_food/20230228/egg-bread.png')}
                style={{
                    height: 150,
                    resizeMode: 'contain',
                    alignSelf: 'center'
                }}
                />
                <Text style={styles.successTextStyle}>
                Registration Successful
                </Text>
                <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={toLogin}>
                <Text style={styles.buttonTextStyle}>Login Now</Text>
                </TouchableOpacity>
            </View>
            );
        }
        const setsucess = () =>{
            setIsRegistraionSuccess(true);
        }
    return(
        <View style={styles.screen}>
            <View style={styles.firstContainer}>
                <View style={styles.textBoxContainer}>
                    <View style={styles.textBoxRow}>
                        <Text style={styles.textCon}>이름 :</Text>
                        <TextInput style={styles.textBox}
                            placeholder='이름을 적으시오'
                            onChangeText={val=>{
                            }}
                        />
                    </View>
                    <View style={styles.textBoxRow}>
                        <Text style={styles.textCon}>키 :</Text>
                        <TextInput style={styles.textBox}
                            placeholder='키를 적으시오'
                            
                            onChangeText={val=>{
                            }}
                        />
                    </View>
                    <View style={styles.textBoxRow}>
                        <Text style={styles.textCon}>몸무게 :</Text>
                        <TextInput style={styles.textBox}
                            placeholder='몸무게를 적으시오'
                            onChangeText={val=>{
                            }}
                        />
                    </View>
                    <View style={styles.textBoxRow}>
                        <Text style={styles.textCon}>칼로리 :</Text>
                        <TextInput style={styles.textBox}
                            placeholder='칼로리를 적으시오'
                            value={Number}
                            onChangeText={val=>{

                            }}
                        />
                    </View>
                    <View style={styles.textBoxRow}>
                        <Text style={styles.textCon}>탄수화물 :</Text>
                        <TextInput style={styles.textBox}
                            placeholder='탄수화물을 적으시오'
                            value={Number}
                            onChangeText={val=>{
                            }}
                        />
                    </View>
                    <View style={styles.textBoxRow}>
                        <Text style={styles.textCon}>단백질 :</Text>
                        <TextInput style={styles.textBox}
                            placeholder='단백질을 적으시오'
                            value={Number}
                            onChangeText={val=>{
                            }}
                        />
                    </View>
                    <View style={styles.textBoxRow}>
                        <Text style={styles.textCon}>지방 :</Text>
                        <TextInput style={styles.textBox}
                            placeholder='지방을 적으시오'
                            onChangeText={val=>{
                            }}
                        />
                    </View>
                </View>
              
            
            </View>
            <View style={styles.secondContainer}>
                <Pressable style={styles.button} onPress={setsucess}>
                    <Icon name="save" size={24} color="#ffffff" />
                </Pressable>
            </View>
        </View>
    )
}
export default FirstsetScreen;

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: 'white',
    },
    firstContainer:{
        width:'100%',
        height:'80%',
        alignItems: 'center',
        justifyContent:'center',
    },
    textBoxContainer:{
        width:'88%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    textBoxRow:{
        flexDirection:'row',
        width:'88%',
        height:'14%',
        alignItems:'center',
    },
    textCon:{
        width:'38%',
        height:'25%',
        textAlign:'center',
        fontSize:18
    },
    textBox:{
        borderWidth:1,
        width:'50%',
        height:'40%',
        borderRadius: 5,
        textAlign:'center'
    },
    secondContainer:{
        width:'100%',
        height:'20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#000',
        bored:'2',
        shadowColor: "#000",
        shadowOffset: {
          width: 5,
          height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        width:'24%',
        height:'40%'
    },
    successTextStyle: {
        color: 'black',
        textAlign: 'center',
        fontSize: 18,
        padding: 30,
      },
      buttonStyle: {
        backgroundColor: '#000000',
        borderWidth: 0,
        color: '#000000',
        borderColor: '#7DE24E',
        height: 40,
        alignItems: 'center',
        borderRadius: 30,
        marginLeft: 35,
        marginRight: 35,
        marginTop: 20,
    },
        buttonTextStyle: {
        color: '#ffffff',
        paddingVertical: 10,
        fontSize: 16,
    },
})