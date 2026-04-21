import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { FILTERS, type Filter, RETRO_COLORS, RETRO_FONT_FAMILY } from './constants/ui';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('HOT');

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
            {FILTERS.map((filter) => (
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
    backgroundColor: RETRO_COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  shell: {
    width: '92%',
    maxWidth: 420,
    backgroundColor: RETRO_COLORS.shell,
    borderColor: RETRO_COLORS.shellBorder,
    borderWidth: 5,
    borderRadius: 22,
    padding: 20,
    gap: 14,
  },
  brand: {
    color: RETRO_COLORS.brand,
    fontSize: 27,
    fontWeight: '900',
    letterSpacing: 2,
    fontFamily: RETRO_FONT_FAMILY,
  },
  subtitle: {
    color: RETRO_COLORS.subtitle,
    fontFamily: RETRO_FONT_FAMILY,
    fontSize: 12,
    marginTop: -6,
  },
  screen: {
    backgroundColor: RETRO_COLORS.screen,
    borderColor: RETRO_COLORS.screenBorder,
    borderWidth: 4,
    borderRadius: 10,
    padding: 12,
    minHeight: 220,
    justifyContent: 'space-between',
  },
  screenTitle: {
    color: RETRO_COLORS.screenTitle,
    fontSize: 20,
    fontWeight: '800',
    fontFamily: RETRO_FONT_FAMILY,
    marginBottom: 8,
  },
  screenLine: {
    color: RETRO_COLORS.screenText,
    fontSize: 14,
    fontFamily: RETRO_FONT_FAMILY,
    marginBottom: 4,
  },
  filterRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 12,
  },
  filterButton: {
    borderWidth: 2,
    borderColor: RETRO_COLORS.filterBorder,
    backgroundColor: RETRO_COLORS.filterBackground,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  filterButtonActive: {
    backgroundColor: RETRO_COLORS.filterActiveBackground,
  },
  filterText: {
    color: RETRO_COLORS.filterBorder,
    fontSize: 12,
    fontWeight: '800',
    fontFamily: RETRO_FONT_FAMILY,
  },
  filterTextActive: {
    color: RETRO_COLORS.filterActiveText,
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
    backgroundColor: RETRO_COLORS.pad,
    position: 'absolute',
  },
  padTop: { top: 0, left: 39 },
  padLeft: { top: 39, left: 0 },
  padCenter: { top: 39, left: 39, backgroundColor: RETRO_COLORS.padCenter },
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
    backgroundColor: RETRO_COLORS.actionButton,
    borderWidth: 3,
    borderColor: RETRO_COLORS.actionButtonBorder,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionText: {
    color: RETRO_COLORS.actionText,
    fontFamily: RETRO_FONT_FAMILY,
    fontWeight: '900',
    fontSize: 18,
  },
});
