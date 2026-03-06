import { StyleSheet, View } from 'react-native'
import React from 'react'
import IconContainer from '../IconContainer'
import { Typography } from '../Typography'
import { Icons } from '../../../assets/icons'
import { COLORS } from '../../theme/colors'
import { Transaction } from '../../data'
import { formatNumber } from '../../util/formatter'

const iconDimension = 40;

type Prop = {
    transaction: Transaction
}
const TransactionItem = ({ transaction }: Prop) => {
    return (
        <View style={styles.transaction}>


            <View style={styles.transactionHalf}>
                <IconContainer options={{ backgroundColor: COLORS.red50, width: iconDimension, height: iconDimension }}>
                    <Icons.ChevronUp />
                </IconContainer>
                <View>
                    <Typography>Purchase at Apple Store</Typography>
                    <Typography>Today, 10:45 AM</Typography>
                </View>
            </View>
            <View>
                <Typography>{formatNumber(transaction.amount)}</Typography>
                <Typography>failed</Typography>
            </View>
        </View>
    )
}

export default TransactionItem

const styles = StyleSheet.create({
    container: {
        boxShadow: [{
            offsetX: 0,
            offsetY: 1,
            blurRadius: 2,
            color: '#0000000D'
        }],
        borderRadius: 12
    },
    transaction: {
        flexDirection: 'row',
        paddingVertical: 24,
    },
    transactionHalf: {
        flex: 1, flexDirection: 'row', gap: 16
    }

})