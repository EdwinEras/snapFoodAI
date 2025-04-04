import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  Modal,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Profile() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.card, styles.firstCard]}>
            <View style={styles.row}>
              <Text style={styles.sectionTitle}>
                <MaterialCommunityIcons name="account" size={18} color="#502810" /> Basic Info
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('UserInfo')}>
                <MaterialCommunityIcons name="clipboard-edit-outline" size={20} color="#502810" />
              </TouchableOpacity>
            </View>
            <View style={styles.row}>
              <View style={styles.box}>
                <Text style={styles.label}>Name</Text>
                <Text style={styles.value}>John</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.label}>Last Name</Text>
                <Text style={styles.value}>Doe</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.box}>
                <Text style={styles.label}>Age</Text>
                <Text style={styles.value}>30</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.label}>Gender</Text>
                <Text style={styles.value}>Male</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.box}>
                <Text style={styles.label}>Email</Text>
                <Text style={styles.value}>John@gmail.com</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.label}>Activity Level</Text>
                <Text style={styles.value}>Lightly Active</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.box}>
                <Text style={styles.label}>Height (cm)</Text>
                <Text style={styles.value}>165</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.label}>Weight (kg)</Text>
                <Text style={styles.value}>72.0</Text>
              </View>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.bmiHeader}>
              <Text style={styles.sectionTitle}>
                <MaterialCommunityIcons name="chart-bar" size={20} color="#502810" /> BMI
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.bmiValue}>26.4</Text>
              <View style={styles.bmiResult}>
                <Text style={styles.bmiResulttext}>Overweight</Text>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <MaterialCommunityIcons name="information" size={20} color="#D3CEC9" />
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.bmiBar}>
              <View style={[styles.bmiSegment, styles.underweight]} />
              <View style={[styles.bmiSegment, styles.normal]} />
              <View style={[styles.bmiSegment, styles.overweightSegment]} />
              <View style={[styles.bmiSegment, styles.obese]} />
            </View>
            <View style={styles.bmiLabels}>
              <Text style={styles.bmiLabel}>0</Text>
              <Text style={styles.bmiLabel}>18.5</Text>
              <Text style={styles.bmiLabel}>24.9</Text>
              <Text style={styles.bmiLabel}>29.9</Text>
              <Text style={styles.bmiLabel}>40+</Text>
            </View>
          </View>

          <Modal visible={modalVisible} transparent animationType="fade">
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}> Body Mass Index (BMI)</Text>
                <Text style={styles.modalText}>
                  BMI is a measure of body fat based on height and weight. A BMI under 18.5 is
                  underweight, 18.5-24.9 is healthy, 25-29.9 is overweight, and 30+ is obese. While
                  BMI is a useful screening tool, it does not directly measure body fat and should
                  be considered alongside other health factors.
                </Text>
                <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.modalButtonText}>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  firstCard: {
    marginBottom: 30,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#502810',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  box: {
    flex: 1,
    backgroundColor: '#F7F6F5',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: '#502810',
    fontWeight: 400,
    marginBottom: 10,
  },
  value: {
    fontSize: 16,
    fontWeight: 500,
    color: '#502810',
    textAlign: 'center',
  },
  bmiHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  bmiValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#502810',
  },
  bmiResult: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bmiResulttext: {
    color: '#fe1212',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginRight: 6,
  },
  bmiBar: {
    height: 8,
    flexDirection: 'row',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 25,
  },
  bmiSegment: {
    flex: 1,
  },
  underweight: {
    backgroundColor: '#145163',
  },
  normal: {
    backgroundColor: '#1da719',
  },
  overweightSegment: {
    backgroundColor: '#fcc93c',
    flex: 0.8,
  },
  obese: {
    backgroundColor: '#fe1212',
  },
  bmiLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
    paddingHorizontal: 5,
  },
  bmiLabel: {
    fontSize: 12,
    color: '#555',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFF',
    padding: 30,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#502810',
  },
  modalText: {
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 22,
    textAlign: 'center',
    marginBottom: 20,
    color: '#978F86',
  },
  modalButton: {
    backgroundColor: '#502810',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 5,
  },
  modalButtonText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});

export default Profile;
