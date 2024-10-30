import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BackSvgIcon } from './BackSvgIcon';
import { BodyweightSvgIcon } from './BodyweightSvgIcon';
import { ChestSvgIcon } from './ChestSvgIcon';
import { Lower20legsSvgIcon } from './Lower20legsSvgIcon';
import { ShouldersSvgIcon } from './ShouldersSvgIcon';
import { SvgIcon } from './SvgIcon';
import { SvgIcon2 } from './SvgIcon2';
import { SvgIcon3 } from './SvgIcon3';
import { SvgIcon4 } from './SvgIcon4';
import { SvgIcon5 } from './SvgIcon5';
import { SvgIcon6 } from './SvgIcon6';
import { SvgIcon7 } from './SvgIcon7';
import { SvgIcon8 } from './SvgIcon8';
import { SvgIcon9 } from './SvgIcon9';
import { SvgIcon10 } from './SvgIcon10';
import { Upper20armsSvgIcon } from './Upper20armsSvgIcon';
import { Upper20legsSvgIcon } from './Upper20legsSvgIcon';
import { WaistSvgIcon } from './WaistSvgIcon';
import classes from './WorkoutrackerrNetlifyAppByHtml.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1003:254 */
export const WorkoutrackerrNetlifyAppByHtml: FC<Props> = memo(function WorkoutrackerrNetlifyAppByHtml(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.frame}>
        <div className={classes.buttonMenu}>
          <div className={classes.demo}>Demo</div>
          <div className={classes.sVG}>
            <SvgIcon className={classes.icon} />
          </div>
          <div className={classes.border}>
            <div className={classes.d}>D</div>
          </div>
        </div>
        <div className={classes.backgroundShadow}>
          <div className={classes.gradientShadow}></div>
          <div className={classes.gradientBackground}></div>
          <div className={classes.gradientBackground2}></div>
          <div className={classes.gradientBackground3}></div>
        </div>
        <div className={classes.overlayBackgroundShadow}>
          <div className={classes.buttonChest}>
            <div className={classes.img}>
              <div className={classes.chestSvgFill}>
                <div className={classes.chestSvg}>
                  <ChestSvgIcon className={classes.icon2} />
                </div>
              </div>
              <div className={classes.frame2}></div>
            </div>
          </div>
        </div>
        <div className={classes.overlayBackgroundShadow2}>
          <div className={classes.buttonBack}>
            <div className={classes.img2}>
              <div className={classes.backSvgFill}>
                <div className={classes.backSvg}>
                  <BackSvgIcon className={classes.icon3} />
                </div>
              </div>
              <div className={classes.frame3}></div>
            </div>
          </div>
        </div>
        <div className={classes.overlayBackgroundShadow3}>
          <div className={classes.buttonUpperLegs}>
            <div className={classes.img3}>
              <div className={classes.upper20legsSvgFill}>
                <div className={classes.upper20legsSvg}>
                  <Upper20legsSvgIcon className={classes.icon4} />
                </div>
              </div>
              <div className={classes.frame4}></div>
            </div>
          </div>
        </div>
        <div className={classes.overlayBackgroundShadow4}>
          <div className={classes.buttonShoulders}>
            <div className={classes.img4}>
              <div className={classes.shouldersSvgFill}>
                <div className={classes.shouldersSvg}>
                  <ShouldersSvgIcon className={classes.icon5} />
                </div>
              </div>
              <div className={classes.frame5}></div>
            </div>
          </div>
        </div>
        <div className={classes.overlayBackgroundShadow5}>
          <div className={classes.buttonLowerLegs}>
            <div className={classes.img5}>
              <div className={classes.lower20legsSvgFill}>
                <div className={classes.lower20legsSvg}>
                  <Lower20legsSvgIcon className={classes.icon6} />
                </div>
              </div>
              <div className={classes.frame6}></div>
            </div>
          </div>
        </div>
        <div className={classes.overlayBackgroundShadow6}>
          <div className={classes.buttonUpperArms}>
            <div className={classes.img6}>
              <div className={classes.upper20armsSvgFill}>
                <div className={classes.upper20armsSvg}>
                  <Upper20armsSvgIcon className={classes.icon7} />
                </div>
              </div>
              <div className={classes.frame7}></div>
            </div>
          </div>
        </div>
        <div className={classes.overlayBackgroundShadow7}>
          <div className={classes.buttonWaist}>
            <div className={classes.img7}>
              <div className={classes.waistSvgFill}>
                <div className={classes.waistSvg}>
                  <WaistSvgIcon className={classes.icon8} />
                </div>
              </div>
              <div className={classes.frame8}></div>
            </div>
          </div>
        </div>
        <div className={classes.overlayBackgroundShadow8}>
          <div className={classes.buttonBodyweight}>
            <div className={classes.img8}>
              <div className={classes.bodyweightSvgFill}>
                <div className={classes.bodyweightSvg}>
                  <BodyweightSvgIcon className={classes.icon9} />
                </div>
              </div>
              <div className={classes.frame9}></div>
            </div>
          </div>
        </div>
        <button className={classes.buttonDialog}>
          <div className={classes.selectABodypart}>Select a bodypart</div>
        </button>
        <div className={classes.container}>
          <div className={classes.backgroundBorderShadow}>
            <div className={classes.exerciseLog}>Exercise Log</div>
            <div className={classes.backgroundBorderShadow2}>
              <div className={classes.sVG2}>
                <SvgIcon2 className={classes.icon10} />
              </div>
              <div className={classes.input}>
                <div className={classes.container2}>
                  <div className={classes.search}>Search...</div>
                </div>
              </div>
              <div className={classes.overlayShadow}></div>
            </div>
            <button className={classes.buttonDialogFilters}>
              <div className={classes.sVG3}>
                <SvgIcon3 className={classes.icon11} />
              </div>
            </button>
            <div className={classes.table}>
              <div className={classes.headerRow}>
                <div className={classes.cell}>
                  <div className={classes.backgroundBorder}></div>
                </div>
                <div className={classes.cell2}>
                  <div className={classes.button}>
                    <div className={classes.exerciseName}>Exercise Name</div>
                    <div className={classes.rectangle}></div>
                  </div>
                </div>
                <div className={classes.cell3}>
                  <div className={classes.button2}>
                    <div className={classes.rectangle2}></div>
                    <div className={classes.weight}>Weight</div>
                  </div>
                </div>
                <div className={classes.cell4}>
                  <div className={classes.button3}>
                    <div className={classes.rectangle3}></div>
                    <div className={classes.reps}>Reps</div>
                  </div>
                </div>
                <div className={classes.cell5}>
                  <div className={classes.button4}>
                    <div className={classes.date}>Date</div>
                    <div className={classes.sVG4}>
                      <SvgIcon4 className={classes.icon12} />
                    </div>
                  </div>
                </div>
                <div className={classes.cell6}>
                  <div className={classes.button5}>
                    <div className={classes.note}>Note</div>
                    <div className={classes.rectangle4}></div>
                  </div>
                </div>
              </div>
              <div className={classes.bodyRow}>
                <div className={classes.dataNoDataAvailable}>No data available</div>
              </div>
              <div className={classes.footerRowData}>
                <div className={classes.Of}>0–0 of 0</div>
                <div className={classes.labelRowsPerPage}>Rows per page:</div>
                <div className={classes.backgroundBorderShadow3}>
                  <div className={classes.combobox}>
                    <div className={classes._5}>5</div>
                  </div>
                  <div className={classes.sVG5}>
                    <SvgIcon5 className={classes.icon13} />
                  </div>
                  <div className={classes.rectangle5}></div>
                  <div className={classes.rectangle6}></div>
                </div>
                <button className={classes.button6}>
                  <div className={classes.sVG6}>
                    <SvgIcon6 className={classes.icon14} />
                  </div>
                </button>
                <button className={classes.button7}>
                  <div className={classes.sVG7}>
                    <SvgIcon7 className={classes.icon15} />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.tabsTablist}>
          <div className={classes.tab}>
            <div className={classes.exerciseLog2}>Exercise Log</div>
          </div>
          <div className={classes.tab2}>
            <div className={classes.bodyweightLog}>Bodyweight Log</div>
          </div>
        </div>
        <div className={classes.container3}>
          <div className={classes.background}>
            <div className={classes.sVG8}>
              <SvgIcon8 className={classes.icon16} />
            </div>
            <div className={classes.workoutLog}>Workout Log</div>
            <div className={classes.navList}>
              <div className={classes.itemList}>
                <div className={classes.itemLink}>
                  <div className={classes.sVG9}>
                    <SvgIcon9 className={classes.icon17} />
                  </div>
                  <div className={classes.home}>Home</div>
                </div>
                <div className={classes.itemLink2}>
                  <div className={classes.sVG10}>
                    <SvgIcon10 className={classes.icon18} />
                  </div>
                  <div className={classes.charts}>Charts</div>
                </div>
              </div>
              <div className={classes.item}>
                <div className={classes.separator}>
                  <div className={classes.horizontalDivider}></div>
                  <div className={classes.backgroundBorder2}>
                    <div className={classes.container4}>
                      <div className={classes.weightUnit}>Weight Unit</div>
                    </div>
                  </div>
                  <div className={classes.horizontalDivider2}></div>
                </div>
                <div className={classes.group}>
                  <button className={classes.button8}>
                    <div className={classes.imperial}>Imperial</div>
                  </button>
                  <button className={classes.button9}>
                    <div className={classes.metric}>Metric</div>
                  </button>
                </div>
              </div>
              <div className={classes.item2}>
                <div className={classes.madeWithByAkshat}>
                  <ul className={classes.list}>
                    <li>
                      <p className={classes.labelWrapper}>
                        <span className={classes.label}>Made with ❤️ by </span>
                        <span className={classes.label2}>Akshat</span>
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
