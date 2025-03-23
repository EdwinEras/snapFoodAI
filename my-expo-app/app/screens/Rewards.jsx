import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const Rewards = () => {
  const points = 350;
  const streaks = Math.floor(points / 50);
  const progress = (points % 50) / 50;
  const pointsToNext = 50 - (points % 50);

  const rewardsList = [
    {
      id: 1,
      icon: 'gift',
      title: 'Amazon Coupon',
      desc: 'Get 10 streaks to unlock',
      requiredStreaks: 10,
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
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={styles.greatJob}>Great Job!</Text>
          <Text style={styles.levelText}>You're on a streak!</Text>
        </View>
        <Image source={require('../../assets/avatar_happy.png')} style={styles.avatar} />
      </View>

      <View style={styles.pointsContainer}>
        <View style={styles.pointsItem}>
          <FontAwesome5 name="fire" size={18} color="#FFD700" />
          <Text style={styles.pointsText}>{streaks} Streaks</Text>
        </View>
        <View style={styles.pointsItem}>
          <FontAwesome5 name="star" size={18} color="#FFD700" />
          <Text style={styles.pointsText}>{points} Points</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressText}>Collect {pointsToNext} points to reach next streak</Text>
        {progress === 0 && points > 0 ? (
          <Text style={styles.progressComplete}>Streak Achieved!</Text>
        ) : (
          <ActivityIndicator size="large" color="#FFD700" />
        )}
      </View>

      <View style={styles.howItWorksContainer}>
        <Text style={styles.howItWorksTitle}>How It Works</Text>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="utensils" size={16} color="#2D2B29" />
          <Text style={styles.howItWorksText}>
            Earn points by uploading your meals daily while staying healthy.
          </Text>
        </View>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="plus-circle" size={16} color="#2D2B29" />
          <Text style={styles.howItWorksText}>
            Every meal = <Text style={{ fontWeight: 'bold' }}>10 points</Text>.
          </Text>
        </View>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="fire" size={16} color="#393633" />
          <Text style={styles.howItWorksText}>
            Every <Text style={{ fontWeight: 'bold' }}>50 points</Text> = 1 streak.
          </Text>
        </View>
        <View style={styles.howItWorksRow}>
          <FontAwesome5 name="gift" size={16} color="#2D2B29" />
          <Text style={styles.howItWorksText}>Use streaks to unlock amazing rewards!</Text>
        </View>
      </View>

      <View style={styles.rewardsGrid}>
        {rewardsList.map((reward) => {
          const isUnlocked = streaks >= reward.requiredStreaks;
          return (
            <TouchableOpacity
              key={reward.id}
              style={[styles.rewardCard, isUnlocked ? styles.unlocked : styles.locked]}>
              <FontAwesome5
                name={reward.icon}
                size={30}
                color={isUnlocked ? '#393633' : '#978F86'}
              />
              <Text style={styles.rewardTitle}>{reward.title}</Text>
              <Text style={styles.rewardDesc}>
                {isUnlocked ? 'Unlocked! Claim your reward' : reward.desc}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 80,
    backgroundColor: '#FF7E5F',
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  avatar: { width: 60, height: 60, borderRadius: 30 },
  greatJob: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  textContainer: {
    flex: 1,
  },
  levelText: { fontSize: 14, color: '#fff' },
  levelBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },
  howItWorksContainer: {
    backgroundColor: '#FFF7E6',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  howItWorksTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D2B29',
    marginBottom: 10,
  },
  howItWorksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  howItWorksText: {
    fontSize: 14,
    color: '#44403D',
    marginLeft: 10,
  },
  levelNumber: { fontSize: 16, fontWeight: 'bold', marginRight: 5 },
  pointsContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 20 },
  pointsItem: { flexDirection: 'row', alignItems: 'center' },
  pointsText: { fontSize: 16, color: '#fff', marginLeft: 8 },
  progressContainer: { marginBottom: 20, alignItems: 'center' },
  progressText: { fontSize: 14, color: '#fff', marginBottom: 10 },
  progressComplete: { fontSize: 18, fontWeight: 'bold', color: '#FAD24B' },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rewardCard: {
    width: '48%',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF7E6',
  },
  unlocked: { opacity: 1 },
  locked: { opacity: 0.8 },
  rewardTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 8, color: '#2D2B29' },
  rewardDesc: { fontSize: 14, marginTop: 5, textAlign: 'center', color: '#2D2B29' },
});

export default Rewards;
