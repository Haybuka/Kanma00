import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../theme/colors';


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
const AccountCard = ({ card}: Prop) => {
    return (
        <View style={styles.container}>
            <Text>{card.type}</Text>
        </View>
    )
}

export default AccountCard

const styles = StyleSheet.create({
    container: {
      backgroundColor : COLORS.Slate900
    }
})