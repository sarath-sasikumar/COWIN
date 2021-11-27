import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  StyleSheet,
} from 'react-native';

import {fetchVaccinationData} from './service';

const Dashboard = () => {
  const [state, onChangeState] = useState<string>();
  const [district, onChangeDistrict] = useState<string>();
  const [vaccineData, setVaccineData] = useState<any>();

  const fetchData = async () => {
    const data = await fetchVaccinationData(state, district);
    setVaccineData(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>Please provide state and district details</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeState}
        value={state}
        placeholder="Select State Code"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeDistrict}
        value={district}
        placeholder="Select District Code"
      />
      <Button onPress={fetchData} title="Fetch Data" />
      {vaccineData && (
        <View style={styles.resultSection}>
          <Text>{`Total Vaccinations Today : ${vaccineData.vaccination.today}`}</Text>

          <Text>{`First Dose Vaccinations Today : ${vaccineData.vaccination.today_dose_one}`}</Text>

          <Text>{`Second Dose Vaccinations Today : ${vaccineData.vaccination.today_dose_two}`}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },
  resultSection: {
    paddingTop: 16,
  },
});

export default Dashboard;
