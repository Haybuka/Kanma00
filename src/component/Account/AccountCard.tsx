import { StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../theme/colors';
import { AppTextStyle, Typography } from '../Typography';
import { CONSTANTS } from '../../util/constants';
import Spacer from '../Spacer';
import { formatNumber } from '../../util/formatter';


type Prop = {
    card: {
        id: string;
        userId: string;
        accountNumber: string;
        accountName: string;
        balance: number;
        currency: string;
        type: string;
        isDefault: boolean;
    }

}
const circleDimension = 96;
const AccountCard = ({ card }: Prop) => {
    const { width: screenWidth } = useWindowDimensions();
    return (
        <View style={[styles.container, { width: screenWidth - CONSTANTS.screenPadding * 2 }]} >
            <View style={styles.topDetailContainer}>
                <View style={styles.flexContainer}>
                    <Typography textstyle={AppTextStyle.bodySmall} style={styles.toCapitalize} color={COLORS.white}>{`${card.type} account`}</Typography >
                    <Spacer height={8} />
                    <Typography textstyle={AppTextStyle.bodySmall} style={styles.toCapitalize} color={COLORS.white}>{card.accountNumber}</Typography >
                </View>
                {card.isDefault && (
                    <Typography textstyle={AppTextStyle.bodySmall} style={[styles.toCapitalize, styles.defaultIndicator]} color={COLORS.white}>{'Default'}</Typography >
                )}
            </View>
            <Spacer height={20} />
            <View style={styles.topDetailContainer}>
                <View style={styles.flexContainer}>
                    <Typography textstyle={AppTextStyle.bodySmall} style={styles.toCapitalize} color={COLORS.white70}>{`Balance`}</Typography >
                    <Spacer height={8} />
                    <Typography textstyle={AppTextStyle.heading5} style={styles.toCapitalize} color={COLORS.white}>{formatNumber(card.balance)}</Typography >
                </View>

            </View>
            <View style={[{ width: circleDimension, height: circleDimension }, styles.circleDesign]} />
        </View>
    )
}

export default AccountCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.slate800,
        padding: 20,
        borderRadius: 16,
        position: 'relative'
    },
    circleDesign: {
        height: circleDimension,
        width: circleDimension,
        borderRadius: circleDimension / 2,
        backgroundColor: COLORS.white10,
        position: 'absolute',
        right: -50,
        top: -40
    },
    flexContainer: { flex: 1 },
    topDetailContainer: {
        flexDirection: 'row'
    },
    defaultIndicator: {
        backgroundColor: COLORS.white20,
        alignSelf: 'flex-start',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 24,

    },
    toCapitalize: {

        textTransform: 'capitalize',
    },
    accountType: {
        backgroundColor: 'red'
    }
})