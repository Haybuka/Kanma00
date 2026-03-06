import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'

type Prop = {
    title: string;
    status: string;
}
const Pill = ({ title, status }: Prop) => {
    return (
        <View style={[status === 'success' ? styles.successPill : styles.failedPill, styles.pill]}>
            <Text style={[status === 'success' ? styles.successText : styles.failedText]}>{title}</Text>
        </View>
    )
}

export default Pill

const styles = StyleSheet.create({
    pill: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 18
    },
    successPill: {
        backgroundColor: COLORS.green50
    },
    failedPill: {
        backgroundColor: COLORS.red50
    },
    text: {
        textTransform: 'uppercase'
    },
    successText: {
        color: COLORS.green700
    },
    failedText: {
        color: COLORS.red600
    }
})