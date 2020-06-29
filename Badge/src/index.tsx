import React from 'react'
import { View, Text } from 'react-native'

// Props is the interface of this component props
interface Props {
  text: string
  accent?: string
  color?: string
  size?: string
  fullWidth?: boolean
}

// StringMap is a simple interface that maps string objects
interface StringMap {
  [key: string]: string
}

// NumberMap is a simple interface that maps number objects
interface NumberMap {
  [key: string]: number
}

// colors list for accents
const colors: StringMap = {
  primary: '#3366FF',
  success: '#97CC06',
  info: '#00AEFF',
  warning: '#FFC311',
  danger: '#FF472B'
}

// sizes list, for fontSize option
const sizes: NumberMap = {
  small: 12,
  medium: 14,
  big: 16
}

class Badge extends React.Component<Props> {
  render() {
    const { text, accent, color, size, fullWidth } = this.props

    // Define the backgroundColor property
    let backgroundColor: string
    if (accent && typeof colors[accent] !== 'undefined') {
      backgroundColor = colors[accent]
    } else if (color) {
      backgroundColor = color
    } else {
      backgroundColor = colors.primary
    }

    // Define the fontSize property
    let fontSize: number
    if (size && typeof sizes[size] !== 'undefined') {
      fontSize = sizes[size]
    } else {
      fontSize = sizes.medium
    }

    return (
      <View style={fullWidth ? {} : { flexDirection: 'row' }}>
        <View
          style={[
            {
              paddingVertical: 3,
              paddingHorizontal: 8,
              borderRadius: 120,
              backgroundColor
            },
            fullWidth ? { alignItems: 'center' } : {}
          ]}
        >
          <Text style={{ fontSize, color: 'white' }}>{text}</Text>
        </View>
      </View>
    )
  }
}

export default Badge
