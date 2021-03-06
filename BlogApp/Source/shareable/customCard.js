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

const CommentCard=(props)=>{
    return(
        <View style={styles.commentCardStyle}>
             {props.children}
        </View>
    )
}
const NotificationCard=(props)=>{
    return(
        <View style={styles.notificationCardStyle}>
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
        
    },
    commentCardStyle:{
        borderRadius:9,
        
        borderBottomColor:"black",
        borderWidth:1,
        left:40,
        width:360
    },
    notificationCardStyle:{
        borderRadius:9,
        
        borderBottomColor:"#445588",
        borderWidth:1,
        
        width:360,
        marginHorizontal:30

    }
})

export {AuthCard,PostCard, CommentCard,NotificationCard}