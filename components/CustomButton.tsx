import { CustomButtonProps } from '@/type'
import clsx from 'clsx'
import React from 'react'
import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'

export default function CustomButton({
    onPress, 
    title="Click me",
    style,
    textStyle,
    leftIcon,
    isLoading = false
}: CustomButtonProps) {
  return (
    <TouchableOpacity className={clsx ('input', 'custom-btn', style)} onPress={onPress}>
        {leftIcon}
        <View className='flex-center flex-row'>
            {isLoading ? (
                <ActivityIndicator size="small" color="white"/>
                ): (
                    <Text className={clsx('text', "text-white-100 paragraph-semibold", textStyle)}>{title}</Text>
                )}
        </View>
        
    </TouchableOpacity>
     
  )
}