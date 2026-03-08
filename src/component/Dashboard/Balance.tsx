import { StyleSheet, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors'
import { AppTextStyle, Typography } from '../Typography'
import { Icons } from '../../../assets/icons'

const DashboardBalance = () => {
    return (
        <View style={styles.contentStyle}>
            <View style={styles.container}>
                <View style={styles.heading}>
                    <Typography textstyle={AppTextStyle.bodySmall} color={COLORS.white}>Total Balance</Typography>
                    <Icons.Eye />
                </View>
                <Typography textstyle={AppTextStyle.heading3} color={COLORS.white}>₦13,317,730</Typography>

            </View>
        </View>
    )
}

export default DashboardBalance

const styles = StyleSheet.create({
    contentStyle : {
          paddingHorizontal: 20,
    },
    container: {
        marginVertical: 20,
        marginBottom : 10,
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