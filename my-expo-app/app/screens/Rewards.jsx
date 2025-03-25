import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Rewards = () => {
  const points = 360;
  const streaks = Math.floor(points / 30);
  const progress = (points % 30) / 30;
  const pointsToNext = (30 - (points % 30)) % 30 || 30;

  const rewardsList = [
    {
      id: 1,
      icon: 'gift',
      title: 'Amazon Coupon',
      desc: 'Get 15 streaks to unlock',
      requiredStreaks: 15,
    },
    {
      id: 2,
      icon: 'coffee',
      title: 'Free Coffee',
      desc: 'Get 5 streaks to unlock',
      requiredStreaks: 5,
    },
    {
      id: 3,
      icon: 'film',
      title: 'Movie Ticket',
      desc: 'Get 7 streaks to unlock',
      requiredStreaks: 7,
    },
    {
      id: 4,
      icon: 'hamburger',
      title: 'Free Burger',
      desc: 'Get 3 streaks to unlock',
      requiredStreaks: 3,
    },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.greatJob}>Great Job!</Text>
          <Text style={styles.levelText}>You're on a streak!</Text>
        </View>
        <Image source={require('../../assets/avatar_happy.png')} style={styles.avatar} />
      </View>

      <View style={styles.pointsContainer}>
        <View style={styles.pointsItem}>
          <FontAwesome5 name="fire" size={18} color="#ff9800" />
          <Text style={styles.pointsText}>{streaks} Streaks</Text>
        </View>
        <View style={styles.pointsItem}>
          <FontAwesome5 name="star" size={18} color="#ff9800" />
          <Text style={styles.pointsText}>{points} Points</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Collect {pointsToNext} points to reach next streak</Text>
        {progress === 0 && points > 0 ? (
          <Text style={styles.progressComplete}>Streak Achieved!</Text>
        ) : (
          <ActivityIndicator size="large" color="#502810" />
        )}
      </View>

      <View style={styles.howItWorksContainer}>
        <Text style={styles.howItWorksTitle}>How It Works</Text>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="utensils" size={15} color="#502810" />
          <Text style={styles.howItWorksText}>
            Earn points by uploading your meals daily while staying healthy.
          </Text>
        </View>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="plus-circle" size={15} color="#502810" />
          <Text style={styles.howItWorksText}>
            Every meal = <Text style={{ fontWeight: 'bold' }}>10 points</Text>.
          </Text>
        </View>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="fire" size={15} color="#502810" />
          <Text style={styles.howItWorksText}>
            Every <Text style={{ fontWeight: 'bold' }}>30 points</Text> = 1 streak.
          </Text>
        </View>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="gift" size={15} color="#502810" />
          <Text style={styles.howItWorksText}>Use streaks to unlock amazing rewards!</Text>
        </View>
      </View>

      <View style={styles.rewardsGrid}>
        {rewardsList.map((reward) => {
          const isUnlocked = streaks >= reward.requiredStreaks;
          return (
            <TouchableOpacity
              key={reward.id}
              style={[styles.rewardCard, { opacity: isUnlocked ? 1 : 0.6 }]}>
              <FontAwesome5 name={reward.icon} size={25} color="#502810" />
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <Text style={styles.rewardDesc}>
                {isUnlocked ? 'Unlocked! Claim your reward' : reward.desc}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 80 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  greatJob: { fontSize: 22, fontWeight: 'bold', color: '#502810' },
  textContainer: { flex: 1 },
  levelText: { fontSize: 14, color: '#502810' },
  howItWorksContainer: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    padding: 15,
    borderRadius: 10,
    marginBottom: 50,
  },
  howItWorksTitle: { fontSize: 18, fontWeight: 'bold', color: '#502810', marginBottom: 10 },
  howItWorksRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  howItWorksText: { fontSize: 14, color: '#2D2B29', marginLeft: 10 },
  pointsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  pointsItem: { flexDirection: 'row', alignItems: 'center' },
  pointsText: { fontSize: 16, color: '#67615A', marginLeft: 8 },
  progressContainer: { marginBottom: 20, alignItems: 'center' },
  progressText: { fontSize: 14, color: '#67615A', marginBottom: 10 },
  progressComplete: { fontSize: 18, fontWeight: 'bold', color: '#502810' },
  rewardsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  rewardCard: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  rewardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10, color: '#502810' },
  rewardDesc: { fontSize: 14, marginTop: 5, textAlign: 'center', color: '#2D2B29' },
});

export default Rewards;
