import { StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import IconContainer from '../IconContainer'
import { Icons } from '../../../assets/icons'
import { COLORS } from '../../theme/colors'
import Spacer from '../Spacer'
import { AppTextStyle, Typography } from '../Typography'

const ServicesCard = () => {

    const options = {
        backgroundColor: COLORS.grey100,
        width: 40,
        height: 40,
        border: true,
        borderWidth: 12,
        borderRadius : 12
    }
    return (
        <TouchableOpacity activeOpacity={0.2} style={styles.container}>
            <IconContainer options={options}>
                <Icons.Send />
            </IconContainer>
            <Spacer height={12} />
            <Typography color={COLORS.grey600} textstyle={AppTextStyle.bodyTiny} >Transfer</Typography >
        </TouchableOpacity>
    )
}

export default ServicesCard

const styles = StyleSheet.create({
    container: {
        width: 80,
        height: 91,
        backgroundColor: COLORS.white,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 17,
        paddingVertical: 12,
        marginRight:12,
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
    }
})