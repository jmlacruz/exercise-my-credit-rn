import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function CustomButton({btnColor, btnAction, fontSize, btnText}) {
  return (
    <TouchableOpacity onPress={btnAction}>
      <View style={[styles.buttonCredit, {backgroundColor: btnColor}]}>
        <Text style={[styles.buttonCreditText, {fontSize: fontSize}]}>
          {btnText}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCredit: {
    height: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonCreditText: {
    margin: 5,
    color: '#fff',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Bold',
  },
});
