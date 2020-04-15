import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  glassContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
  },
  progressSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#81c6b8',
  },
  backgroundImage: {
    position: 'absolute',
  },
  foregroundImage: {
    position: 'absolute',
  },
});
