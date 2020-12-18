export type Proportions = '16x9' | '4x3' | '2x1';

export interface Size {
  height?: number;
  width?: number;
}

/**
 * Recebe um objeto com width ou height, e devolve os dois valores
 * de acordo com uma proporção.
 *
 * Ex: {height: null, width: 800, }, 4x3 => {height: 600, width: 800}
 */
export function getProportions(sizes: Size, proportion: Proportions): Size {
  let height = sizes.height;
  let width = sizes.width;

  switch (proportion) {
    case '16x9': {
      if (height) {
        width = (height * 16) / 9;
      } else if (width) {
        height = (width * 9) / 16;
      }

      break;
    }

    case '4x3': {
      if (height) {
        width = (height * 4) / 3;
      } else if (width) {
        height = (width * 3) / 4;
      }

      break;
    }

    case '2x1': {
      if (height) {
        width = height * 2;
      } else if (width) {
        height = width / 2;
      }

      break;
    }

    default:
      break;
  }

  return {
    height,
    width,
  };
}
