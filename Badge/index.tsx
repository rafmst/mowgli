import React from 'react'
import { View, Text, Platform } from 'react-native'
import colors from '../../config/colors'
import { BadgeProps } from './types'

class Badge extends React.Component<BadgeProps> {
  render() {
    const {
      text,
      primary,
      success,
      info,
      warning,
      danger,
      color,
      small,
      medium,
      big,
      full
    } = this.props

    const borderRadius: number = Platform.OS === 'ios' ? 120 : 4

    let backgroundColor: string = colors.primary
    if (primary) {
      backgroundColor = colors.primary
    } else if (success) {
      backgroundColor = colors.success
    } else if (info) {
      backgroundColor = colors.info
    } else if (warning) {
      backgroundColor = colors.warning
    } else if (danger) {
      backgroundColor = colors.danger
    } else if (color) {
      backgroundColor = color
    }

    let fontSize: number = 14
    if (small) {
      fontSize = 12
    } else if (medium) {
      fontSize = 14
    } else if (big) {
      fontSize = 16
    }

    return (
      <View style={full ? {} : { flexDirection: 'row' }}>
        <View
          style={[
            {
              paddingVertical: 4,
              paddingHorizontal: 10,
              borderRadius,
              backgroundColor
            },
            full ? { alignItems: 'center' } : {}
          ]}
        >
          <Text style={{ fontSize, color: colors.white }}>{text}</Text>
        </View>
      </View>
    )
  }
}

export default Badge
