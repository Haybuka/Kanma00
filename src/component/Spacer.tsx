import { View } from 'react-native'
import React from 'react'

type Props = {
    width?: number;
    height?: number;
}
const Spacer = ({ width, height }: Props) => {
    return (
        <View style={{ width, height }} />
    )
}

export default Spacer

