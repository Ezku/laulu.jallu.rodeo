import { css } from 'glamor';

import scale from 'app/utils/scale';

export default function fontScale(s: number) {
  return css({
    fontSize: `${scale(s)}px`,
    lineHeight: `${scale(s + 1)}px`,
    marginBottom: `${scale(s) - scale(s - 1)}px`
  });
}
