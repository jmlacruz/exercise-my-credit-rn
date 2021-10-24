import React, {useState} from 'react';
import {Slider} from '@miblanchard/react-native-slider';
import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function SliderPro(props) {
  const [inputValue, setInputValue] = useState(props.value);

  const handleSpiner = value => {
    props.setError('');
    props.setValue(value.toString());
    setInputValue(value.toString());
  };

  const handleInput = value => {
    setInputValue(value);
    props.setError('');
    if (value > 0) {
      if (value > props.maxValue) {
        props.setValue(props.maxValue);
        props.setError(
          `${props.label} debe ser menor a ${
            props.prefix ? props.prefix : ''
          } ${props.maxValue}`,
        );
      } else if (value < props.minValue) {
        props.setValue(props.minValue);
        props.setError(
          `${props.label} debe ser mayor a ${
            props.prefix ? props.prefix : ''
          } ${props.minValue}`,
        );
      }
    } else {
      props.setError(`${props.label} debe ser mayor a 0`);
      setInputValue(0);
    }
  };

  return (
    <View>
      <View style={styles.cntTop}>
        <View style={styles.topItem}>
          <View style={styles.topItemLabel}>
            <Text style={styles.topItemLabelText}>{props.label}</Text>
          </View>
        </View>
        <View style={{}}>
          <View style={styles.topItemInput}>
            {props.prefix && (
              <View style={styles.inputCnt}>
                <Text style={styles.topItemPrefixText}>{props.prefix}</Text>
              </View>
            )}
            <View style={styles.inputCnt}>
              <TextInput
                style={styles.input}
                keyboardType="numeric"
                value={inputValue.toString()}
                defaultValue={inputValue.toString()}
                onChangeText={value => handleInput(value)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.sliderCnt}>
        <Slider
          value={props.value}
          step={props.stepValue}
          minimumTrackTintColor="#fff"
          thumbStyle={styles.thumb}
          trackStyle={styles.track}
          minimumValue={props.minValue}
          maximumValue={props.maxValue}
          onValueChange={value => handleSpiner(value)}
        />
      </View>
      <View style={styles.rangeCnt}>
        <View style={styles.rangeLabelCnt}>
          <Text style={styles.rangeText}>
            {props.prefix}
            {props.minValue}
          </Text>
        </View>
        <View style={styles.rangeLabelCnt}>
          <Text style={styles.rangeText}>
            {props.prefix}
            {props.maxValue}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cntTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topItemLabelText: {
    color: '#fff',
    fontFamily: 'Montserrat-Light',
  },
  topItemPrefixText: {
    color: '#fff',
    fontFamily: 'Montserrat-Bold',
  },
  rangeLabelCnt: {
    flexDirection: 'row',
  },
  topItemLabel: {
    height: 30,
    justifyContent: 'center',
  },
  track: {
    backgroundColor: '#fff',
  },
  thumb: {
    backgroundColor: '#fff',
  },
  sliderCnt: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  rangeCnt: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rangeText: {
    width: 55,
    color: '#fff',
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: 'Montserrat-Light',
  },

  topItemInput: {
    width: 90,
    height: 30,
    borderWidth: 1,
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  input: {
    width: 55,
    paddingTop: 0,
    color: '#fff',
    paddingBottom: 0,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  inputCnt: {
    justifyContent: 'center',
  },
});
