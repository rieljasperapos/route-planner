import { Box, Input, Divider } from '@mui/material';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { useSpring, animated } from '@react-spring/web';

import { useAppContext } from '@contexts/app-context';
import { useMapContext } from '@contexts/map-context';
import _styles from './styles';

const styles = _styles.nav;

const NavigationMenu = () => {
  const { showDrawer } = useAppContext();
  const { from, to } = useMapContext();
  const props = useSpring({
    left: showDrawer ? styles.drawerOpen.left : styles.drawerClose.left,
  });

  const _from = from?.toString() ?? '';
  const _to = to?.toString() ?? '';

  const AnimatedMenu = animated(Box);

  return (
    <AnimatedMenu sx={[styles.menu]} style={props}>
      <Box>
        <Box sx={styles.inputWrapper}>
          <TripOriginIcon sx={styles.origin} />
          <Input sx={styles.input} placeholder='Origin' value={_from} />
        </Box>
        <Box sx={styles.dividerWrapper}>
          <Box sx={styles.moreWrapper}>
            <MoreVertIcon sx={styles.moreIcon} />
          </Box>
          <Divider sx={styles.divider} />
        </Box>
        <Box sx={styles.inputWrapper}>
          <TripOriginIcon sx={styles.destination} />
          <Input sx={styles.input} placeholder='Destination' value={_to} />
        </Box>
      </Box>
      <Box>
        <SwapVertIcon sx={styles.swapIcon} />
      </Box>
    </AnimatedMenu>
  );
};

export default NavigationMenu;
