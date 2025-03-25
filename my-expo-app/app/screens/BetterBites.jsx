import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { FontAwesome5 } from '@expo/vector-icons';

const InfoCard = ({ icon, title, content }) => (
  <View style={styles.card}>
    <FontAwesome5 name={icon} size={24} color="#ff9800" style={styles.icon} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardText}>{content}</Text>
  </View>
);

const GeneralNutrition = () => (
  <ScrollView contentContainerStyle={styles.scene}>
    <InfoCard
      icon="apple-alt"
      title="Balanced Diet"
      content="Eat a variety of foods to get all essential nutrients."
    />
    <InfoCard
      icon="tint"
      title="Stay Hydrated"
      content="Drink at least 8 cups of water daily for optimal health."
    />
    <InfoCard
      icon="running"
      title="Exercise & Nutrition"
      content="Pair a healthy diet with regular exercise for the best results."
    />
    <InfoCard
      icon="bread-slice"
      title="Whole Grains"
      content="Choose whole grains over refined grains for more fiber and nutrients."
    />
    <InfoCard
      icon="fish"
      title="Omega-3 Benefits"
      content="Fatty fish like salmon support heart and brain health."
    />
  </ScrollView>
);

const Superfoods = () => (
  <ScrollView contentContainerStyle={styles.scene}>
    <InfoCard
      icon="seedling"
      title="Blueberries"
      content="Packed with antioxidants to support brain health."
    />
    <InfoCard
      icon="avocado"
      title="Avocados"
      content="Rich in healthy fats, great for heart health."
    />
    <InfoCard
      icon="carrot"
      title="Carrots"
      content="A great source of beta-carotene, good for your eyes."
    />
    <InfoCard
      icon="leaf"
      title="Spinach"
      content="Loaded with vitamins and minerals, great for overall health."
    />
    <InfoCard
      icon="lemon"
      title="Citrus Fruits"
      content="High in vitamin C to boost your immune system."
    />
  </ScrollView>
);

const CommonMyths = () => (
  <ScrollView contentContainerStyle={styles.scene}>
    <InfoCard
      icon="exclamation-circle"
      title="Carbs Make You Fat"
      content="Whole grains and complex carbs are essential for energy."
    />
    <InfoCard
      icon="exclamation-circle"
      title="Fat is Unhealthy"
      content="Healthy fats like olive oil and nuts are good for you."
    />
    <InfoCard
      icon="exclamation-circle"
      title="Skipping Meals Helps"
      content="Skipping meals can slow down metabolism and lead to overeating."
    />
    <InfoCard
      icon="exclamation-circle"
      title="Protein Overload"
      content="Too much protein can strain your kidneys and liver."
    />
    <InfoCard
      icon="exclamation-circle"
      title="Microwave Destroys Nutrients"
      content="Microwaving retains more nutrients than boiling."
    />
  </ScrollView>
);

const HealthySwaps = () => (
  <ScrollView contentContainerStyle={styles.scene}>
    <InfoCard
      icon="exchange-alt"
      title="Quinoa vs. White Rice"
      content="Quinoa has more protein and fiber, making it a better choice."
    />
    <InfoCard
      icon="exchange-alt"
      title="Greek Yogurt vs. Sour Cream"
      content="Greek yogurt has more protein and probiotics."
    />
    <InfoCard
      icon="exchange-alt"
      title="Dark Chocolate vs. Milk Chocolate"
      content="Dark chocolate has more antioxidants and less sugar."
    />
    <InfoCard
      icon="exchange-alt"
      title="Baked vs. Fried"
      content="Baking foods reduces unnecessary fats compared to frying."
    />
    <InfoCard
      icon="exchange-alt"
      title="Zucchini Noodles vs. Pasta"
      content="Zoodles are a low-carb alternative to pasta with extra nutrients."
    />
  </ScrollView>
);

const initialLayout = { width: Dimensions.get('window').width };

const BetterBites = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'general', title: 'General' },
    { key: 'superfoods', title: 'Nutrifoods' },
    { key: 'myths', title: 'Myths' },
    { key: 'swaps', title: 'Swaps' },
  ]);

  const renderScene = SceneMap({
    general: GeneralNutrition,
    superfoods: Superfoods,
    myths: CommonMyths,
    swaps: HealthySwaps,
  });

  return (
    <SafeAreaView style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        renderTabBar={(props) => (
          <TabBar {...props} style={styles.tabBar} indicatorStyle={styles.indicator} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  scene: { flexGrow: 1, padding: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center',
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 6, color: '#502810' },
  cardText: { fontSize: 14, textAlign: 'center', color: '#666' },
  icon: { marginBottom: 5 },
  tabBar: { backgroundColor: '#ff9800', paddingTop: 10 },
  indicator: { backgroundColor: 'white' },
});

export default BetterBites;
