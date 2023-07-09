import BOYS_NAMES from '../constants/data/boysNames';
import GIRLS_NAMES from '../constants/data/girlsNames';
import {SELECTIONS} from '../constants/consts';
import UNIQUE_NAMES_GIRLS from '../constants/data/uniqueNamesGirls';
import UNIQUE_NAMES_BOYS from '../constants/data/uniqueNamesBoys';

function getNamesData(selection) {
  if (selection == SELECTIONS.BOY) return BOYS_NAMES;
  else if (selection == SELECTIONS.GIRL) return GIRLS_NAMES;
  return BOYS_NAMES;
}

function getUniqueNamesData(selection) {
  if (selection == SELECTIONS.BOY) return UNIQUE_NAMES_BOYS;
  else if (selection == SELECTIONS.GIRL) return UNIQUE_NAMES_GIRLS;
  return UNIQUE_NAMES_BOYS;
}

export {getNamesData, getUniqueNamesData};
