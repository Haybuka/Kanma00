import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { COLORS } from '../../theme/colors';

import DashboardHeading from './Heading';
import DashboardBalance from './Balance';
import Services from './Services';
import { mockUser } from '../../data';


const Dashboard = () => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[{ paddingVertical: insets.top }, styles.container]}>
            <DashboardHeading user={mockUser} />
            <DashboardBalance />
            <Services />
        </View>
    )
}

export default Dashboard

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.Slate900,
        paddingVertical: 40,
        paddingHorizontal: 20,
    },

})