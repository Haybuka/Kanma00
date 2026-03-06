
import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import AccountCard from './AccountCard'
import { mockAccounts } from '../../data'
import SectionHeading from '../SectionHeading'



const AccountCards = () => {
    return (
        <SectionHeading title='My Accounts'>
            <FlatList
                snapToAlignment='end'
                showsHorizontalScrollIndicator={false}
                snapToStart
                horizontal
                data={mockAccounts}
                renderItem={({ item }) => <AccountCard card={item} />}
                ItemSeparatorComponent={<View style={styles.itemSeperator} />}
            />
        </SectionHeading>

    )
}

export default AccountCards

const styles = StyleSheet.create({
    headerText: {
        marginVertical: 24
    },
    itemSeperator: {
        marginHorizontal: 4
    }
})

