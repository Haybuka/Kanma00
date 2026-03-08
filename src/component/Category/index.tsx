import { StyleSheet, View } from 'react-native'
import React from 'react'
import { mockSpendingByCategory } from '../../data'
import { formatNumber,  } from '../../util/formatter'
import { COLORS } from '../../theme/colors'
import Spacer from '../Spacer'
import { AppTextStyle, Typography } from '../Typography'
import ProgressBar from '../Progress'


const Categories = () => {
    return (
        <View style={styles.container}>
            {mockSpendingByCategory.map((item, id) => (
                <View key={id} style={styles.card}>
                    <View style={styles.textView}>
                        <Typography color={COLORS.Grey900} textstyle={AppTextStyle.bodyMediumMedium}>{item.label} </Typography>
                        <Typography color={COLORS.Grey900} textstyle={AppTextStyle.bodyMediumMedium}>{formatNumber(item.amount)} </Typography>
                    </View>
                    <Spacer height={16} />
                    <ProgressBar value={item.amount}/>
                </View>
            ))}
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        boxShadow: [{
            offsetX: 0,
            offsetY: 1,
            blurRadius: 2,
            color: '#0000000D',
            spreadDistance: 0.5
        }],
        borderRadius: 12,
        paddingHorizontal: 16,

    },
    card: {
        marginVertical: 16
    },
    textView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
   

})