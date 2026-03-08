
import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors'
import { toPercentage } from '../util/formatter'

type Prop = {
    value: number
}
const ProgressBar = ({ value }: Prop) => {

    return (
        <View style={styles.progress}>
            <View style={[{ width: toPercentage(value * 10, 100_000),borderRadius: Math.max(8, 40)  }, styles.progressItem]} />
        </View>
    )
}

export default ProgressBar

const styles = StyleSheet.create({
    progress: {
        height: 8,
        borderRadius: 4,
        backgroundColor: COLORS.grey100,
        position: 'relative',
        overflow: 'hidden'
    },
    progressItem: {
        position: 'absolute',
        backgroundColor: COLORS.Slate900,
        height : 8,
        
    }
})