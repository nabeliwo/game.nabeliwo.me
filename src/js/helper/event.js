import { isMobile, isTablet } from './ua';

export const clickEvent = isMobile || isTablet ? 'touchend' : 'click';

export default {
  clickEvent
};
