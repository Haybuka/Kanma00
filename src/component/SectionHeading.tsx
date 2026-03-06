import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AppTextStyle, Typography } from './Typography'
import { COLORS } from '../theme/colors';
import { Icons } from '../../assets/icons';

type Prop = {
    title: string;
    children: React.ReactNode;
    nextScreen?: boolean
}
const SectionHeading = ({ children, title, nextScreen = false }: Prop) => {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Typography color={COLORS.Grey900} style={[styles.text]} textstyle={AppTextStyle.heading7}>{title}</Typography>
                {nextScreen && (<View style={styles.nextScreen}>
                    <Typography color={COLORS.indigo500} style={styles.text} textstyle={AppTextStyle.bodyMedium}>{'See All'} </Typography>
                    <Icons.ChevronRight />
                </View>)}
            </View>
            {children}
        </View>
    )
}

export default SectionHeading

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
        paddingHorizontal: 20
    },
    text: {
        marginVertical: 24,
    },
nextScreen : {
    flexDirection : 'row',
    alignItems : 'center',
    gap: 4
},
    headerContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    }
})

