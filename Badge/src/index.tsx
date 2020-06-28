import React from 'react'
import { View, Text, Platform } from 'react-native'
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

    let backgroundColor: string = '#3366FF'
    if (primary) {
      backgroundColor = '#3366FF'
    } else if (success) {
      backgroundColor = '#97CC06'
    } else if (info) {
      backgroundColor = '#00AEFF'
    } else if (warning) {
      backgroundColor = '#FFC311'
    } else if (danger) {
      backgroundColor = '#FF472B'
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
          <Text style={{ fontSize, color: 'white' }}>{text}</Text>
        </View>
      </View>
    )
  }
}

export default Badge
