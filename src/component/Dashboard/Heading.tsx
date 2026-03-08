import { StyleSheet, View } from 'react-native'
import React from 'react'
import IconContainer from '../IconContainer'
import { Icons } from '../../../assets/icons'
import { AppTextStyle, Typography } from '../Typography'
import { COLORS } from '../../theme/colors'
import { User } from '../../data'

type Prop = {
    user : User;
}
const DashboardHeading = ({user}:Prop) => {
    return (
        <View style={styles.container}>

            <View style={styles.titleContainer}>
                <IconContainer options={{ height: 40, width: 40, padding: 12, backgroundColor: COLORS.white20 }}>
                    <Icons.Person />
                </IconContainer>
                <View>
                    <Typography textstyle={AppTextStyle.bodySmall} color={COLORS.white}>Welcome back,</Typography>
                    <Typography textstyle={AppTextStyle.heading8} color={COLORS.white}>{`${user.firstName} ${user.lastName}`}</Typography>
                </View>
            </View>
            <IconContainer options={{ height: 40, width: 40, padding: 12, backgroundColor: COLORS.white20 }}>
                <Icons.Search />
            </IconContainer>
            <IconContainer notification options={{ height: 40, width: 40, padding: 12, backgroundColor: COLORS.white20 }}>
                <Icons.Bell />
            </IconContainer>
        </View>
    )
}

export default DashboardHeading

const styles = StyleSheet.create({
    container: { flexDirection: "row", gap: 8 ,marginVertical : 24},
    titleContainer: { flex: 1, flexDirection: 'row', gap: 16 }
})