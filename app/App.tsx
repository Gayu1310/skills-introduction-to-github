import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<'HOT' | 'NEW' | 'TOP'>('HOT');

  return (
    <View style={styles.container}>
      <View style={styles.shell}>
        <Text style={styles.brand}>GHOSTBOARD</Text>
        <Text style={styles.subtitle}>8-BIT ANON HUB</Text>

        <View style={styles.screen}>
          <Text style={styles.screenTitle}>BOARD: /RETRO/</Text>
          <Text style={styles.screenLine}>▶ Pixel art contests are live!</Text>
          <Text style={styles.screenLine}>▶ Anonymous thread raids tonight</Text>
          <Text style={styles.screenLine}>▶ 8-bit SFX: ON</Text>

          <View style={styles.filterRow}>
            {(['HOT', 'NEW', 'TOP'] as const).map((filter) => (
              <Pressable
                key={filter}
                onPress={() => setActiveFilter(filter)}
                style={[
                  styles.filterButton,
                  activeFilter === filter && styles.filterButtonActive,
                ]}
              >
                <Text
                  style={[
                    styles.filterText,
                    activeFilter === filter && styles.filterTextActive,
                  ]}
                >
                  {filter}
                </Text>
              </Pressable>
            ))}
          </View>
        </View>

        <View style={styles.controls}>
          <View style={styles.dpad}>
            <View style={[styles.pad, styles.padTop]} />
            <View style={[styles.pad, styles.padLeft]} />
            <View style={[styles.pad, styles.padCenter]} />
            <View style={[styles.pad, styles.padRight]} />
            <View style={[styles.pad, styles.padBottom]} />
          </View>

          <View style={styles.actionButtons}>
            <View style={styles.actionButton}>
              <Text style={styles.actionText}>B</Text>
            </View>
            <View style={styles.actionButton}>
              <Text style={styles.actionText}>A</Text>
            </View>
          </View>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3a29',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shell: {
    width: '92%',
    maxWidth: 420,
    backgroundColor: '#4f654a',
    borderColor: '#10170f',
    borderWidth: 5,
    borderRadius: 22,
    padding: 20,
    gap: 14,
  },
  brand: {
    color: '#d9e7bc',
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 2,
    fontFamily: 'monospace',
  },
  subtitle: {
    color: '#9fb38d',
    fontFamily: 'monospace',
    fontSize: 12,
    marginTop: -6,
  },
  screen: {
    backgroundColor: '#b9c99b',
    borderColor: '#1f2a1d',
    borderWidth: 4,
    borderRadius: 10,
    padding: 12,
    minHeight: 220,
    justifyContent: 'space-between',
  },
  screenTitle: {
    color: '#243325',
    fontSize: 20,
    fontWeight: '800',
    fontFamily: 'monospace',
    marginBottom: 8,
  },
  screenLine: {
    color: '#2f4430',
    fontSize: 14,
    fontFamily: 'monospace',
    marginBottom: 4,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  filterButton: {
    borderWidth: 2,
    borderColor: '#253226',
    backgroundColor: '#90a47b',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  filterButtonActive: {
    backgroundColor: '#253226',
  },
  filterText: {
    color: '#253226',
    fontSize: 12,
    fontWeight: '800',
    fontFamily: 'monospace',
  },
  filterTextActive: {
    color: '#b9c99b',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 6,
  },
  dpad: {
    width: 112,
    height: 112,
    position: 'relative',
  },
  pad: {
    width: 34,
    height: 34,
    backgroundColor: '#1f2a1d',
    position: 'absolute',
  },
  padTop: { top: 0, left: 39 },
  padLeft: { top: 39, left: 0 },
  padCenter: { top: 39, left: 39, backgroundColor: '#172016' },
  padRight: { top: 39, right: 0 },
  padBottom: { bottom: 0, left: 39 },
  actionButtons: {
    flexDirection: 'row',
    gap: 14,
    marginRight: 4,
  },
  actionButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#1e2b1d',
    borderWidth: 3,
    borderColor: '#111810',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: '#d8e5bb',
    fontFamily: 'monospace',
    fontWeight: '900',
    fontSize: 18,
  },
});
