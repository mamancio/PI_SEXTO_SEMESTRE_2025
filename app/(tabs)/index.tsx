import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.sidebar}>
        <Text style={styles.sidebarTitle}>Monitoramento FATEC</Text>

        {['Início', 'Monitoramento', 'Pessoas', 'Grupo de Pessoas', 'Visitantes',
         'Grupo de Visitantes', 'Departamentos', 'Empresa', 'Dispositivos'].map((item) => (
          <TouchableOpacity key={item} style={styles.menuButton}>
            <Text style={styles.menuItem}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Sejam Bem Vindos</Text>          
        </View>

        <View style={styles.summaryContainer}>
          <View style={[styles.card, styles.blueCard]}><Text style={styles.cardText}>28 / 31 Pessoas Identificadas</Text></View>
          <View style={[styles.card, styles.blueCard]}><Text style={styles.cardText}>1 / 20 Visitantes Identificados</Text></View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#2c3e50',
    padding: 20,
  },
  sidebarTitle: {
    color: '#ecf0f1',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  menuItem: {
    color: '#ecf0f1',
    fontSize: 18,
    paddingVertical: 10,
  },
  menuButton: {
    marginVertical: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#e74c3c',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  createButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  summaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  card: {
    width: '45%',
    margin: 8,
    padding: 16,
    borderRadius: 8,
  },
  cardText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  blueCard: {
    backgroundColor: '#3498db',
  },
});

export default HomeScreen;
