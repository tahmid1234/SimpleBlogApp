import React from 'react'

import {Text,Button,View,ActivityIndicator} from 'react-native'

const NotificationScreenActivity=()=>{
    return(
        <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator size="large" color="red" animating={true} />
      </View>
    )
}

export default NotificationScreenActivity