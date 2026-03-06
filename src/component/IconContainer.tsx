import { StyleSheet, View } from 'react-native'
import React from 'react'

type Props = {
    children: React.ReactNode,
    options?: {
        backgroundColor: string;
        width: number;
        height: number;
        padding?: number
    }
}
const IconContainer = ({ children, options }: Props) => {

    const radius = options ? Math.max(options.height, options.width) / 2 : 100
    return (
        <View style={[{ ...options, borderRadius: radius }, styles.iconContainer,]}>
            {children}
        </View>
    )
}

export default IconContainer

const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
        justifyContent : 'center',
        alignItems : 'center',
    }
})