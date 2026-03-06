import { View, StyleSheet } from 'react-native'
import React from 'react'
import TransactionItem from './TransactionItem'
import { mockTransactions} from '../../data'
import { COLORS } from '../../theme/colors'

const Transactions = () => {

    return (

        // <FlatList<Transaction>
        //     data={mockTransactions}
        //     style={styles.container}
        //     showsVerticalScrollIndicator={false}
        //     nestedScrollEnabled
        //     contentContainerStyle={styles.flatlistContentContainer}
        //     keyExtractor={(item) => item.id.toString()}
        //     renderItem={({ item }) => <TransactionItem transaction={item} />}
        //     ItemSeparatorComponent={<View style={styles.itemSeperator} />}
        // />
        <View style={styles.container}>
            {mockTransactions.slice(0,3).map((item, id) => (
                <View key={id}>
                    <TransactionItem  transaction={item} />
                    <View style={styles.itemSeperator} />
                </View>
            ))}
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
            color: '#0000000D',
            spreadDistance: 0.5
        }],
        borderRadius: 12,
        paddingHorizontal: 16,

    },
    flatlistContentContainer: {
    },
    itemSeperator: {
        backgroundColor: COLORS.grey100,
        height: 1,
    }

})