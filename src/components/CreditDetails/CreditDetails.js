import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import CustomButton from './CustomButton';

export default function CreditDetails(props) {
  const [quota, setQuota] = useState(0);

  useEffect(() => {
    calcQuota(props.amount, props.term, props.errorTerm, props.errorAmount);
  }, [props.amount, props.term, props.errorTerm, props.errorAmount]);

  const calcQuota = (amount, term, errorTerm, errorAmount) => {
    if (errorTerm || errorAmount) {
      setQuota(0.0);
    } else {
      setQuota(amount / term);
    }
  };

  const handleButtonCredit = () => {
    console.log('OnClick: ', 'Obtené Crédito');
  };

  const handleButtonDetails = () => {
    console.log('OnClick: ', 'Ver Detalles de Cuotas');
  };

  return (
    <View>
      <View style={styles.detailsTitle}>
        {props.errorTerm.length > 0 && (
          <Text style={styles.detailsTitleText}>{props.errorTerm}</Text>
        )}
        {props.errorAmount.length > 0 && (
          <Text style={styles.detailsTitleText}>{props.errorAmount}</Text>
        )}
      </View>
      <View style={styles.detailsCnt}>
        <View style={styles.detailsLavelCnt}>
          <Text style={styles.detailsLabelText}>Cuota Fija Por Mes</Text>
        </View>
        <View style={styles.detailsAcountCnt}>
          <Text style={styles.detailsAcountText}>${quota.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.buttonsCnt}>
        <View style={styles.buttonCreditCnt}>
          <CustomButton
            fontSize={14}
            btnColor="#17aa8d"
            btnText="Obtené Crédito"
            btnAction={handleButtonCredit}
          />
        </View>
        <View style={styles.buttonDetailsCnt}>
          <CustomButton
            fontSize={10}
            btnColor="#0b548b"
            btnText="Ver Detalle de Cuotas"
            btnAction={handleButtonDetails}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsCnt: {
    paddingVertical: 10,
    paddingHorizontal: 8,
    flexDirection: 'row',
    backgroundColor: '#00355d',
    justifyContent: 'space-between',
  },
  buttonsCnt: {flexDirection: 'row', alignItems: 'stretch'},
  detailsLavelCnt: {
    flex: 3,
    justifyContent: 'center',
  },
  detailsAcountCnt: {
    flex: 2,
    justifyContent: 'center',
  },
  detailsAcountText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Montserrat-Bold',
  },
  detailsLabelText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: 'Montserrat-Bold',
  },
  buttonCreditCnt: {
    flex: 3,
  },
  buttonDetailsCnt: {
    flex: 2,
    marginLeft: 10,
  },
  detailsTitle: {
    height: 30,
    marginBottom: 5,
  },
  detailsTitleText: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
  },
});
