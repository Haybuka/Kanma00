
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AccountCard from './AccountCard'
import { mockAccounts } from '../data'
import { AppTextStyle, Typography } from './Typography'
import { COLORS } from '../theme/colors'


const AccountCards = () => {
    return (
        <View>
            <Typography textstyle={AppTextStyle.heading7} color={COLORS.Grey900}>My Accounts</Typography>
            <View style={styles.cardContainer}>
                <Text>My Accounts</Text>
                <FlatList
                    horizontal
                    data={mockAccounts}
                    renderItem={({ item }) => <AccountCard card={item} />}

                />
            </View>

        </View>
    )
}

export default AccountCards

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 20
    }
})

