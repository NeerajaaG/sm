import React from 'react'
import {Button} from 'react-native-elements'

import colors from '../config/colors'
import {HEIGHT, WIDTH} from '../config/utils'

export default ({title, onPress, loading}) => {
    return (
        <Button
            title={title}
            loading={loading}
            containerStyle={{width: '100%', paddingHorizontal: WIDTH(20)}}
            buttonStyle={{backgroundColor: "grey", height: HEIGHT(70), }}
            titleStyle={{ fontSize: WIDTH(29), color: 'black'}}
            onPress={onPress}
        />

    )
}