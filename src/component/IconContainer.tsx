import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors';

type Props = {
    children: React.ReactNode,
    notification?: boolean,
    options?: {
        backgroundColor: string;
        width: number;
        height: number;
        padding?: number;
        border?: boolean;
        borderWidth?: number;
        borderColor?: string;
    },

}
const IconContainer = ({ children, options, notification }: Props) => {

    const radius = options ? Math.max(options.height, options.width) / 2 : 100;
    const border = options?.border ? {
        borderWidth: options.borderWidth,
        borderColor: options.borderColor
    } : { borderWidth: 0 }
    return (
        <View style={[{ ...options, borderRadius: radius }, { ...border }, styles.iconContainer,]}>
            {children}
            {notification && (<View style={styles.notifView} />)}
        </View>
    )
}

export default IconContainer

const styles = StyleSheet.create({
    iconContainer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: COLORS.white30,
        position: 'relative'
    },
    notifView: {
        position: 'absolute',
        backgroundColor : COLORS.orange,
        height : 6,
        width : 6,
        borderRadius : 3,
        top : 0,
        right : 0,
        borderWidth : 1,
        borderColor : COLORS.white
    }
})