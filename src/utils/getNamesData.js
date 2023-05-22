import BOYS_NAMES from '../constants/data/boysNames';
import GIRLS_NAMES from '../constants/data/girlsNames';
import {SELECTIONS} from '../constants/consts';

function getNamesData(selection) {
  if (selection == SELECTIONS.BOY) return BOYS_NAMES;
  else if (selection == SELECTIONS.GIRL) return GIRLS_NAMES;
  return BOYS_NAMES;
}

export default getNamesData;
