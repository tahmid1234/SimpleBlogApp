import React from 'react'
import {StyleSheet,View} from 'react-native';

export default function AuthCard(props){
    return(
        <View style={styles.card}>
            <View>
                {props.children}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    card:{
       marginLeft:20,
       marginRight:20,
      
       borderWidth:1,
       borderColor:"#fc6a03",


    },
    cardContetnt:{

    }
})