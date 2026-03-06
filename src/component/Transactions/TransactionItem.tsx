import { StyleSheet, View } from 'react-native'
import React from 'react'
import IconContainer from '../IconContainer'
import { AppTextStyle, Typography } from '../Typography'
import { Icons } from '../../../assets/icons'
import { COLORS } from '../../theme/colors'
import { Transaction } from '../../data'
import { formatNumber } from '../../util/formatter'
import Pill from '../Pill'
import Spacer from '../Spacer'

const iconDimension = 40;

type Prop = {
    transaction: Transaction
}
const TransactionItem = ({ transaction }: Prop) => {
    return (
        <View style={styles.transaction}>


            <View style={styles.transactionHalf}>
                {transaction.status === 'success' ?
                    (
                        <IconContainer options={{ backgroundColor: COLORS.green50, width: iconDimension, height: iconDimension }}>
                            <Icons.ChevronDown />
                        </IconContainer>
                    ) : (
                        <IconContainer options={{ backgroundColor: COLORS.red50, width: iconDimension, height: iconDimension }}>
                            <Icons.ChevronUp />
                        </IconContainer>
                    )
                }

                <View>
                    <Typography color={COLORS.Grey900} textstyle={AppTextStyle.bodyMediumMedium}>{transaction.description}</Typography>
                    <Spacer height={4} />
                    <Typography color={COLORS.grey500} textstyle={AppTextStyle.bodySmall}>{transaction.date}</Typography>
                </View>
            </View>
            <View>
                <Typography textstyle={AppTextStyle.bodyMedium} style={[transaction.status === 'success' ? styles.successText : styles.failedText]}>{formatNumber(transaction.amount)}</Typography>
                <Spacer height={4} />
                <Pill title={transaction.status} status={transaction.status} />
            </View>
        </View>
    )
}

export default TransactionItem

const styles = StyleSheet.create({
  
    transaction: {
        flexDirection: 'row',
        paddingVertical: 24,
    },
    transactionHalf: {
        flex: 1, flexDirection: 'row', gap: 16
    },
    successText: {
        color: COLORS.green700
    },
    failedText: {
        color: COLORS.Grey900
    }

})