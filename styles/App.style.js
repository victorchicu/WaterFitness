import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  glassContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#ffffff',
  },
  progressSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffff1',
  },
  backgroundImage: {
    position: 'absolute',
  },
  foregroundImage: {
    position: 'absolute',
  },
});
