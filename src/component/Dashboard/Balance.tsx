import { Pressable, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../theme/colors'
import { AppTextStyle, Typography } from '../Typography'
import { Icons } from '../../../assets/icons'
import { Account } from '../../data'
import { formatNumber } from '../../util/formatter'

type Props = {
    account: Account
}
const DashboardBalance = ({ account }: Props) => {
    const [balanceVisible, setBalanceVisible] = useState(false)
    const handleEyeToggle = () => {
        setBalanceVisible(!balanceVisible)
    }
  
    return (
        <View style={styles.contentStyle}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Typography textstyle={AppTextStyle.bodySmall} color={COLORS.white}>Total Balance</Typography>
                    <Pressable onPress={handleEyeToggle}>
                        <Icons.Eye />
                    </Pressable>
                </View>
                {balanceVisible ? (
                    <Typography textstyle={AppTextStyle.heading3} color={COLORS.white}>{formatNumber(account.balance)}</Typography>

                ) : (

                    <Typography textstyle={AppTextStyle.heading3} color={COLORS.white}>{account.accountNumber}</Typography>
                )}

            </View>
        </View>
    )
}

export default DashboardBalance

const styles = StyleSheet.create({
    contentStyle: {
        paddingHorizontal: 20,
    },
    container: {
        marginVertical: 20,
        marginBottom: 10,
        borderColor: COLORS.white20,
        borderWidth: 1,
        borderRadius: 16,
        backgroundColor: COLORS.white10,
        padding: 20,

    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 12,
    }
})