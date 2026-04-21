import { StatusBar } from 'expo-status-bar';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { useState } from 'react';
import { FILTERS, type Filter, RETRO_COLORS, RETRO_FONT_FAMILY } from './constants/ui';

export default function App() {
  const [activeFilter, setActiveFilter] = useState<Filter>('HOT');
  const { width, height } = useWindowDimensions();
  const isCompact = width < 390;
  const isShort = height < 720;
  const dPadSize = isCompact ? 92 : 112;
  const actionButtonSize = isCompact ? 42 : 48;
  const shellPadding = isCompact ? 14 : 20;
  const shellGap = isCompact ? 10 : 14;
  const shellRadius = isCompact ? 18 : 22;
  const shellBorderWidth = isCompact ? 4 : 5;
  const screenMinHeight = isShort ? 180 : 220;
  const screenTitleSize = isCompact ? 18 : 20;
  const screenTextSize = isCompact ? 13 : 14;
  const brandSize = isCompact ? 22 : 27;
  const subtitleSize = isCompact ? 11 : 12;
  const subtitleMarginTop = isCompact ? -2 : -6;
  const buttonHorizontalPadding = isCompact ? 8 : 10;
  const buttonVerticalPadding = isCompact ? 4 : 5;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.shell,
            {
              padding: shellPadding,
              gap: shellGap,
              borderRadius: shellRadius,
              borderWidth: shellBorderWidth,
            },
          ]}
        >
          <Text style={[styles.brand, { fontSize: brandSize }]}>GHOSTBOARD</Text>
          <Text style={[styles.subtitle, { fontSize: subtitleSize, marginTop: subtitleMarginTop }]}>
            RETRO THREADS, MODERN CHAOS
          </Text>

          <View style={[styles.screen, { minHeight: screenMinHeight }]}>
            <Text style={[styles.screenTitle, { fontSize: screenTitleSize }]}>BOARD: /RETRO/</Text>
            <Text style={[styles.screenLine, { fontSize: screenTextSize }]}>
              ▶ Post images, videos, memes anonymously
            </Text>
            <Text style={[styles.screenLine, { fontSize: screenTextSize }]}>
              ▶ Reddit-like ranking + 4chan-style boards
            </Text>
            <Text style={[styles.screenLine, { fontSize: screenTextSize }]}>
              ▶ Pixel SFX + retro animations: ON
            </Text>

            <View style={styles.filterRow}>
              {FILTERS.map((filter) => (
                <Pressable
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  style={[
                    styles.filterButton,
                    {
                      paddingVertical: buttonVerticalPadding,
                      paddingHorizontal: buttonHorizontalPadding,
                    },
                    activeFilter === filter && styles.filterButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.filterText,
                      { fontSize: isCompact ? 11 : 12 },
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
            <View style={[styles.dpad, { width: dPadSize, height: dPadSize }]}>
              <View style={[styles.pad, styles.padTop]} />
              <View style={[styles.pad, styles.padLeft]} />
              <View style={[styles.pad, styles.padCenter]} />
              <View style={[styles.pad, styles.padRight]} />
              <View style={[styles.pad, styles.padBottom]} />
            </View>

            <View style={styles.actionButtons}>
              <View
                style={[
                  styles.actionButton,
                  {
                    width: actionButtonSize,
                    height: actionButtonSize,
                    borderRadius: actionButtonSize / 2,
                  },
                ]}
              >
                <Text style={styles.actionText}>B</Text>
              </View>
              <View
                style={[
                  styles.actionButton,
                  {
                    width: actionButtonSize,
                    height: actionButtonSize,
                    borderRadius: actionButtonSize / 2,
                  },
                ]}
              >
                <Text style={styles.actionText}>A</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: RETRO_COLORS.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
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
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 12,
  },
  filterButton: {
    borderWidth: 2,
    borderColor: RETRO_COLORS.filterBorder,
    backgroundColor: RETRO_COLORS.filterBackground,
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
    flexWrap: 'wrap',
    rowGap: 14,
    marginTop: 6,
  },
  dpad: {
    width: 112,
    height: 112,
    position: 'relative',
  },
  pad: {
    width: '30.5%',
    height: '30.5%',
    backgroundColor: RETRO_COLORS.pad,
    position: 'absolute',
  },
  padTop: { top: 0, left: '34.75%' },
  padLeft: { top: '34.75%', left: 0 },
  padCenter: { top: '34.75%', left: '34.75%', backgroundColor: RETRO_COLORS.padCenter },
  padRight: { top: '34.75%', right: 0 },
  padBottom: { bottom: 0, left: '34.75%' },
  actionButtons: {
    flexDirection: 'row',
    gap: 14,
    marginRight: 0,
  },
  actionButton: {
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
