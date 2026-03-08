import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../../theme/colors'
import ServicesCard from './ServicesCard'

const Services = () => {
    const services = [
        1, 2, 3, 4, 5, 6,
    ]

    const [innerHeight, setInnerHeight] = useState(0)
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}
                onLayout={(e) => {
                    const { height } = e.nativeEvent.layout
                    setInnerHeight(Math.round(height / 2))
                }}
            >
                <FlatList
                    data={services}
                    scrollEnabled={false}
                    numColumns={4}
                    keyExtractor={(item) => item.toString()}
                    contentContainerStyle={{ paddingVertical: 10 }}
                    ItemSeparatorComponent={<View style={styles.itemSeperator} />}
                    renderItem={({ item }) => (
                        <ServicesCard key={item} />
                    )}
                />

               
            </View>
            <View style={[{height:innerHeight -110},styles.layoutOne]} />
        </View>
    )
}

export default Services

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        zIndex: 2
    },
    innerContainer: {
        paddingHorizontal: 20,
    },
    layoutOne: {
        backgroundColor: COLORS.Slate900,
        ...StyleSheet.absoluteFill,
        top: 0,
        left: 0,
        width: '100%',
        // height: 80,
        zIndex: -1,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        boxShadow: [
            {
                offsetX: 0,
                offsetY: 10,
                spreadDistance: -3,
                blurRadius: 15,
                color: '#0000001A'
            },
            {
                offsetX: 0,
                offsetY: 4,
                spreadDistance: -4,
                blurRadius: 6,
                color: '#0000001A'
            }
        ]
    },
    layoutTwo: {
        position: 'absolute'
    },
    itemSeperator: {
        height: 12
    }
})