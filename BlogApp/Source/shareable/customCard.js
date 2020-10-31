import React from 'react'
import {StyleSheet,View} from 'react-native';

const AuthCard=(props)=>{
    return(
        <View style={styles.authCardStyle}>
           
                {props.children}
            
        </View>
    )
}
const PostCard=(props)=>{
    return(
        <View style={styles.postCardStyle}>
            {props.children}
        </View>
    )
}

const styles= StyleSheet.create({
    authCardStyle:{
       marginLeft:20,
       marginRight:20,
      
       borderWidth:1,
       borderColor:"#fc6a03",
       


    },
    postCardStyle:{
        
        borderRadius:9,
        marginLeft:20,
        marginRight:20,
       
        marginTop:5,
        backgroundColor:"#47001a",
        marginBottom:20,
        
    }
})

export {AuthCard,PostCard}