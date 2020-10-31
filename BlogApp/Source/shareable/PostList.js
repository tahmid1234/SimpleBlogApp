import React , { useState, useEffect }  from 'react'
import {View,Button,Flatlist,Text,ActivityIndicator,StyleSheet,TouchableOpacity} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PostCard} from '../shareable/customCard'
import { getDataJSON } from "../Function/AsyncStorageFunction";
import { Zocial } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 



const PostList =(props)=>{
   
    const posts=props.posts
    const nav=props.nav
  

    const [Name, setName] = useState("");
    const [iconColor,setColor]=useState("hearto")
    const [loading, setLoading] = useState(false);
    const [likes,setLikes]=useState(0)
    const [comments,setComments]=useState(0)
    const FindUser=async()=>{
        let response= await getDataJSON(posts.Email)
        setName(response.name)
        setLoading(true)
        
        
    }
    
    FindUser()
    console.log("okay")
    //console.log({Name})
    if(loading){
    return(
       
       <PostCard>
           <Zocial name="statusnet" size={24} color="#fc6a03"  style={styles.iconStyle} />
           <Text style={styles.authorNameStyle}>{Name}</Text>
           <Text style={styles.dateStyle}>{posts.postDate}</Text>
           <Text style={styles.postBodyStyle}>{posts.postText}</Text>
           
           <FontAwesome name="comment-o" size={27} color="#fc6a03"  style={styles.commentStyle}
           onPress={function(){
            nav.navigation.navigate("IndivialPost");
            console.log("commento")
           }}/>
          
           <AntDesign name={iconColor} size={24} color="#fc4601"  style={styles.likeStyle} 
           onPress ={function(){
            setColor("heart")
            console.log("okay fokay")
           // console.log({nav})
            
            
           }}/>
          
   
           

       </PostCard>
    )
    }
    else{
        return(
            <View style={{ flex: 1, justifyContent: "center" }}>
            <ActivityIndicator size="large" color="red" animating={true} />
          </View>
        )
    }
}

const styles=StyleSheet.create({
    iconStyle:{
        
        position:'absolute',
        right:10,
        top:10,
       
        
        
       

        
    },
    commentStyle:{
        position:'absolute',
        bottom:0,
        right:10,
        marginBottom:0,
        
    },
    authorNameStyle:{
        fontFamily:'serif',
        fontSize:18,
        color:"#fc6a03",
        marginBottom:5
    },
    dateStyle:{
        
        marginBottom:5,
        color:"#fc6a03",
        fontSize:10
    },
    postBodyStyle:{
        fontFamily:'serif',
        marginBottom:10,
        color:"#fc6a03",
        fontSize:15
    },
    likeStyle:{
        marginBottom:3
    }

  
}
);

export default PostList