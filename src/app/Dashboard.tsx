import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {Button, Card, Picker} from 'react-native-ui-lib';

import VaccinationDetails from './VaccinationDetails';

import {District} from '../types/district';
import {Dropdown} from '../types/dropdown';
import {State} from '../types/state';
import {VaccinationData} from '../types/vaccinationData';

import {fetchVaccinationData, getDistricts, getStates} from './service';

const Dashboard = () => {
  const [stateList, setStateList] = useState<Array<State>>([]);
  const [districtList, setDistrictList] = useState<Array<District>>([]);
  const [stateCode, setStateCode] = useState<Dropdown>();
  const [districtCode, setDistrictCode] = useState<Dropdown>();
  const [vaccineData, setVaccineData] = useState<VaccinationData>();

  const fetchData = async () => {
    const data = await fetchVaccinationData(
      stateCode?.value,
      districtCode?.value,
    );
    setVaccineData(data.vaccination);
  };

  useEffect(() => {
    async function fetchStateList() {
      const stateListData = await getStates();
      setStateList(stateListData);
    }
    fetchStateList();
  }, []);

  useEffect(() => {
    async function fetchDistrictList() {
      const districtListData = await getDistricts(stateCode?.value);
      setDistrictList(districtListData);
    }
    setDistrictCode(undefined);
    fetchDistrictList();
  }, [stateCode]);

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.vaccineCard}>
        <Text style={styles.cardHeader}>
          Please provide state and district details
        </Text>
        <Picker
          placeholder="Select State"
          value={stateCode}
          showSearch
          searchPlaceholder="Search for States"
          searchStyle={styles.searchStyle}
          onChange={setStateCode}>
          {stateList.map((state: State) => (
            <Picker.Item
              key={state.state_id}
              value={state.state_id}
              label={state.state_name}
            />
          ))}
        </Picker>
        <Picker
          placeholder="Select District"
          value={districtCode}
          showSearch
          searchPlaceholder="Search for Districts"
          searchStyle={styles.searchStyle}
          onChange={setDistrictCode}>
          {districtList.map((district: District) => (
            <Picker.Item
              key={district.district_id}
              value={district.district_id}
              label={district.district_name}
            />
          ))}
        </Picker>
        <Button onPress={fetchData} label="Fetch Vaccine Data" />
        {vaccineData && <VaccinationDetails vaccineData={vaccineData} />}
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  vaccineCard: {
    padding: 16,
  },
  cardHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 16,
    color: 'black',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  searchStyle: {
    color: 'black',
  },
});

export default Dashboard;
