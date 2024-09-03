import React from 'react';
import styles from './MyComponents.module.css'; // Assuming you're using CSS Modules

import GroupImage1 from '../Assets/Images/Group 1597883318.png';
import GroupImage2 from '../Assets/Images/Group 1597883322.png';
import GroupImage3 from '../Assets/Images/Group 1597883337.png';

const MyComponent = () => {
  return (
    <div className={styles.videoCallbuttonFunction}>
      <div className={styles.groupParent}>
        <img className={styles.groupChild} alt="Group Image 1" src={GroupImage1} />
        <div className={styles.groupWrapper}>
          <div className={styles.groupContainer}>
            <b className={styles.alisonKFenn}>Alison K Fenn</b>
            <div className={styles.isOnCall}>is on Call</div>
          </div>
        </div>
      </div>
      <div className={styles.videoCallbuttonFunctionInner}>
        <div className={styles.minParent}>
          <div className={styles.min}>1.29 Min</div>
          <div className={styles.left}>Left</div>
        </div>
      </div>
      <img className={styles.videoCallbuttonFunctionChild} alt="Group Image 2" src={GroupImage2} />
      <img className={styles.videoCallbuttonFunctionItem} alt="Group Image 3" src={GroupImage3} />
    </div>
  );
};

export default MyComponent;
