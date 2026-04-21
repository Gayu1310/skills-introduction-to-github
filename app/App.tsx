import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import {
  FILTERS,
  MOCK_POSTS,
  type Filter,
  RETRO_COLORS,
  RETRO_FONT_FAMILY,
} from './constants/ui';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('HOT');
  const posts = MOCK_POSTS[activeFilter];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.brand}>GHOSTBOARD</Text>
        <Text style={styles.subtitle}>RETRO THREADS, MODERN CHAOS</Text>
      </View>

      {/* Filter tab bar */}
      <View style={styles.filterBar}>
        {FILTERS.map((filter) => (
          <Pressable
            key={filter}
            onPress={() => setActiveFilter(filter)}
            style={[styles.filterTab, activeFilter === filter && styles.filterTabActive]}
          >
            <Text
              style={[styles.filterText, activeFilter === filter && styles.filterTextActive]}
            >
              {filter}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Board label */}
      <View style={styles.boardRow}>
        <Text style={styles.boardLabel}>BOARD: /RETRO/</Text>
      </View>

      {/* Post feed */}
      <ScrollView style={styles.feed} showsVerticalScrollIndicator={false}>
        {posts.map((post) => (
          <Pressable key={post.id} style={styles.postCard}>
            <View style={styles.postMeta}>
              <Text style={styles.postBoard}>{post.board}</Text>
              <Text style={styles.postTime}>{post.time}</Text>
            </View>
            <Text style={styles.postTitle}>{post.title}</Text>
            <View style={styles.postStats}>
              <Text
                style={styles.statText}
                accessibilityLabel={`${post.upvotes.toLocaleString()} upvotes`}
              >
                ▲ {post.upvotes.toLocaleString()}
              </Text>
              <Text
                style={styles.statText}
                accessibilityLabel={`${post.comments.toLocaleString()} comments`}
              >
                💬 {post.comments.toLocaleString()}
              </Text>
              <Text style={styles.postAuthor}>u/{post.author}</Text>
            </View>
          </Pressable>
        ))}
        <View style={styles.feedFooter} />
      </ScrollView>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RETRO_COLORS.background,
  },
  header: {
    backgroundColor: RETRO_COLORS.header,
    borderBottomWidth: 2,
    borderBottomColor: RETRO_COLORS.headerBorder,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  brand: {
    color: RETRO_COLORS.brand,
    fontSize: 24,
    fontWeight: '900',
    letterSpacing: 3,
    fontFamily: RETRO_FONT_FAMILY,
  },
  subtitle: {
    color: RETRO_COLORS.subtitle,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 11,
    marginTop: 2,
    letterSpacing: 1,
  },
  filterBar: {
    flexDirection: 'row',
    backgroundColor: RETRO_COLORS.filterBar,
    borderBottomWidth: 1,
    borderBottomColor: RETRO_COLORS.filterBorder,
  },
  filterTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 3,
    borderBottomColor: 'transparent',
  },
  filterTabActive: {
    borderBottomColor: RETRO_COLORS.brand,
  },
  filterText: {
    color: RETRO_COLORS.filterInactiveText,
    fontFamily: RETRO_FONT_FAMILY,
    fontWeight: '800',
    fontSize: 13,
    letterSpacing: 1,
  },
  filterTextActive: {
    color: RETRO_COLORS.brand,
  },
  boardRow: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: RETRO_COLORS.divider,
  },
  boardLabel: {
    color: RETRO_COLORS.cardBoard,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
  },
  feed: {
    flex: 1,
  },
  postCard: {
    backgroundColor: RETRO_COLORS.card,
    borderBottomWidth: 1,
    borderBottomColor: RETRO_COLORS.cardBorder,
    paddingHorizontal: 16,
    paddingVertical: 14,
    gap: 6,
  },
  postMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postBoard: {
    color: RETRO_COLORS.cardBoard,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  postTime: {
    color: RETRO_COLORS.cardMeta,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 11,
  },
  postTitle: {
    color: RETRO_COLORS.cardTitle,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 15,
    fontWeight: '700',
    lineHeight: 22,
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    marginTop: 2,
  },
  statText: {
    color: RETRO_COLORS.cardMeta,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 12,
    fontWeight: '700',
  },
  postAuthor: {
    color: RETRO_COLORS.subtitle,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 11,
    marginLeft: 'auto',
  },
  feedFooter: {
    height: 24,
  },
});
