
import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import AccountCard from './AccountCard'
import { mockAccounts } from '../../data'
import SectionHeading from '../SectionHeading'
import { COLORS } from '../../theme/colors'



const AccountCards = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const onViewableItemsChanged = ({ viewableItems }: { viewableItems: any[] }) => {

        if (viewableItems.length > 0) {
            setActiveIndex(viewableItems[0]?.index)
            console.log('Active index:', activeIndex, viewableItems[0]);
        }
    };
    return (
        <SectionHeading title='My Accounts'>
            <FlatList
                showsHorizontalScrollIndicator={false}
                snapToStart
                horizontal
                nestedScrollEnabled
                data={mockAccounts}
                snapToAlignment="start"
                viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
                onStartReached={() => console.log('reached start')}
                onViewableItemsChanged={onViewableItemsChanged}
                onStartReachedThreshold={0.5}
                renderItem={({ item }) => <AccountCard card={item} />}
                ItemSeparatorComponent={<View style={styles.itemSeperator} />}
            />

            <View style={styles.indicatorContainer}>
                {mockAccounts.map((item, id) => {
                    if (id === activeIndex) {
                        return <View key={item.id} style={styles.activendicator} />
                    }
                    return (

                        <View key={item.id} style={styles.indicator} />
                    )
                })}
            </View>
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
    },
    indicator: {
        width: 8,
        height: 4,
        backgroundColor: COLORS.grey400,
        borderRadius: 4
    },
    indicatorContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        gap: 2,
        paddingVertical: 24
    },
    activendicator: {
        width: 12,
        height: 4,
        backgroundColor: COLORS.Slate900,
        borderRadius: 6
    }
})

