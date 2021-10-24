import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet, Text, View} from 'react-native';

import SliderPro from './components/SliderPro/SliderPro';
import {PRIMARY_COLOR, SECONDARY_COLOR} from './constants';
import CreditDetails from './components/CreditDetails/CreditDetails';

const Main = () => {
  const [term, setTerm] = useState(3);
  const [amount, setAmount] = useState(5000);
  const [errorTerm, setErrorTerm] = useState('');
  const [errorAmount, setErrorAmount] = useState('');

  return (
    <View style={styles.boxContainer}>
      <LinearGradient
        colors={[PRIMARY_COLOR, SECONDARY_COLOR]}
        style={styles.mainBox}>
        <View style={styles.boxElement}>
          <Text style={styles.boxTitle}>Simulá tu crédito</Text>
        </View>
        <View style={styles.boxElement}>
          <SliderPro
            prefix="$"
            value={amount}
            stepValue={50}
            minValue={5000}
            maxValue={50000}
            label="MONTO TOTAL"
            setError={setErrorAmount}
            setValue={setAmount}
          />
        </View>
        <View style={styles.boxElement}>
          <SliderPro
            value={term}
            minValue={3}
            stepValue={1}
            maxValue={24}
            label="PLAZO"
            setValue={setTerm}
            setError={setErrorTerm}
          />
        </View>
        <View>
          <CreditDetails
            term={term}
            amount={amount}
            errorTerm={errorTerm}
            errorAmount={errorAmount}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  main: {
    height: '100%',
  },
  mainBox: {
    height: '100%',
    paddingTop: 10,
    paddingHorizontal: 25,
    backgroundColor: SECONDARY_COLOR,
  },
  boxContainer: {
    flex: 1,
    paddingVertical: 25,
    paddingHorizontal: 30,
    backgroundColor: SECONDARY_COLOR,
  },
  boxTitle: {
    fontSize: 22,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  boxElement: {
    marginVertical: 20,
    marginHorizontal: 10,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Main;
