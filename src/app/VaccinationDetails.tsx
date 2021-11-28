import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native-ui-lib';

import {VaccinationData} from '../types/vaccinationData';

type Props = {
  vaccineData: VaccinationData;
};
const VaccinationDetails = (props: Props) => {
  const {vaccineData} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.resultHeader}>Vaccination Stats for Today</Text>

      <Text
        style={
          styles.resultValue
        }>{`Total Vaccinations Today : ${vaccineData.today}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`First Dose Vaccinations Today : ${vaccineData.today_dose_one}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`Second Dose Vaccinations Today : ${vaccineData.today_dose_two}`}</Text>

      <Text style={styles.resultHeader}>Vaccination Stats for Yesterday</Text>

      <Text
        style={
          styles.resultValue
        }>{`Total Vaccinations Yesterday : ${vaccineData.yesterday_vac}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`First Dose Vaccinations Yesterday : ${vaccineData.yesterday_dose_one}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`Second Dose Vaccinations Yesterday : ${vaccineData.yesterday_dose_two}`}</Text>

      <Text style={styles.resultHeader}>Overall Stats</Text>

      <Text
        style={
          styles.resultValue
        }>{`Total Vaccinations : ${vaccineData.total}`}</Text>

      <Text
        style={styles.resultValue}>{`Total Males: ${vaccineData.male}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`Total Females : ${vaccineData.female}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`Total Others : ${vaccineData.others}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`Covishield: ${vaccineData.covishield}`}</Text>

      <Text
        style={styles.resultValue}>{`Covaxin : ${vaccineData.covaxin}`}</Text>

      <Text
        style={styles.resultValue}>{`Sputnik : ${vaccineData.sputnik}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`Total Dose 1 : ${vaccineData.tot_dose_1}`}</Text>

      <Text
        style={
          styles.resultValue
        }>{`Total Dose 2 : ${vaccineData.tot_dose_2}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
  },
  resultHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  resultValue: {
    color: 'black',
  },
});

export default VaccinationDetails;
