import { View, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import TransactionItem from './TransactionItem'
import { mockTransactions, Transaction } from '../../data'
import { COLORS } from '../../theme/colors'

const Transactions = () => {

    return (
        <View style={styles.container}>
            <FlatList<Transaction>
                data={mockTransactions}
                contentContainerStyle={styles.flatlistContentContainer}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <TransactionItem transaction={item} />}
                ItemSeparatorComponent={<View style={styles.itemSeperator} />}
                ListFooterComponent={<View style={styles.itemSeperator} />}
            />


        </View>
    )
}

export default Transactions

const styles = StyleSheet.create({
    container: {
        boxShadow: [{
            offsetX: 0,
            offsetY: 1,
            blurRadius: 2,
            color: '#0000000D'
        }],
        borderRadius: 12,
    },
    flatlistContentContainer: {
        paddingHorizontal: 16
    },
    itemSeperator: {
        backgroundColor: COLORS.grey100,
        height: 1,
    }

})