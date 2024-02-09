import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import flower from '../public/flower.gif';
import surp from '../public/surp.gif';
import cry from '../public/gomacry.gif';
import guitar from '../public/guitar.gif';
import fall from '../public/fall.gif';
import smallpeach from '../public/smallpeach.gif'
import ear from '../public/ear.gif';
import shake from '../public/shake.gif';
import knife from '../public/knife.gif';
import cute from '../public/cute.gif';

const HomePage = () => {
  const [scaleFactor, setScaleFactor] = useState(1);
  const [clickedNo, setClickedNo] = useState(0);
  const [yesButtonLeft, setYesButtonLeft] = useState(38);
  const [yesButtonTop, setYesButtonTop] = useState(65);
  const [isButtonBlocked, setIsButtonBlocked] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    if (clickedNo >= 9) {
      setIsButtonBlocked(true);
    }
  }, [clickedNo]);

  const handleButtonClick = (option) => {
    if (option === 'no') {
      setScaleFactor((prevFactor) => prevFactor + 0.5);
      setClickedNo((prevClick) => prevClick + 1);
      setYesButtonLeft((prevLeft) => prevLeft - 0.5);
      setYesButtonTop((prevTop) => prevTop + 0.4);
    } else if (option === 'yes') {
      setShowParagraph(true);
    }
  };

  const getNoButtonText = () => {
    switch (clickedNo) {
      case 1:
        return 'NO!!?';
      case 2:
        return 'I think you mean "yes"';
      case 3:
        return 'Sahi me NO?';
      case 4:
        return 'Maan ja naa :(';
      case 5:
        return (
          <div>
            Soch le fir se...<br />
            Abhi bhi NO hai?
          </div>
        );
      case 6:
        return ( 
          <div>
            Maan ja na<br />
            madharchod
          </div>
        );
        case 7:
          return ( 
            <div>
              Fir NO click ki tu!<br />
              ಠ╭╮ಠ
            </div>
          );
        case 8:
          return ( 
            <div>
              This could be us<br />
              but you playing<br />
              (¬_¬ )
            </div>
          );
        case 9:
          return ( 
            <div>
              aab mujhe hi<br />
              kuch karna hoga<br />
              (ㆆ_ㆆ)
            </div>
          );
        
      default:
        return 'No';
    }
  };

  const getNoButtonImage = () => {
    switch (clickedNo) {
      case 1:
        return surp;
      case 2:
        return ear;
      case 3:
        return cry; 
      case 4:
        return guitar;
      case 5:
        return fall;
      case 6:
        return smallpeach;
      case 7:
        return shake;
      case 8:
        return cute;
      case 9:
        return knife;
      default:
        return flower;
    }
  };

  return (
    <div>
      {showParagraph ? (
        <div className={styles.paragraphContainer}>
        <p>
          <span className={styles.dearPookie}>Dear pookie,</span>
          <Image className={styles.heart} src={"/static/heart.png"} height={100} width={100} alt=" "/>
        </p>
        <p className={styles.paragraph}>
        Pehele toh ye bata tune itne nakhre kyu kie ‘yes’ click karne ke lie, sidhe sidhe yes click kar deti, but nahi tujhe toh no spam karna hai… Gandu.
        <br/>
        <br/>
        Khair this is to inform you that Valentine’s Day aa raha hai <span className={styles.italics}>(fyi it’s a celebration of love and affection)</span> and since you clicked yes <span className={styles.italics}>(I made you)</span> you have now agreed to the terms and conditions* of you being my Valentine.
        <br/>
        <br/>
        Ye lo tumhara gift : <span className={styles.italics}>-/Technical error/ Myntra walo ne tracking link share nhi ki. -/Mill jaaega dw/</span>
        <br/>
        <br/>
        </p>
        <div>
          <Image className={styles.noteImage} src={"/static/kiss.gif"} alt="XOXO" width={300} height={300}/>
        <h3 className={styles.tc}>
          *T&C: Buy me PS5
        </h3>
        </div>
        </div>
      ) : (
        <div>
          <h1 className={styles.heading}>Will you be my Valentine?</h1>
          <Image className={styles.image} src={getNoButtonImage()} height={310} width={310} alt=" "/>
          <div>
            <button
              className={`${styles.buttonno} ${isButtonBlocked ? styles.shiftDown : ''}`}
              onClick={() => handleButtonClick('no')}
              disabled={isButtonBlocked}
            >
              {getNoButtonText()}
            </button>
            <button
              className={styles.buttonyes}
              onClick={() => handleButtonClick('yes')}
              style={{
                transform: `scale(${scaleFactor})`,
                left: `${yesButtonLeft}%`,
                top: `${yesButtonTop}%`,
              }}
            >
              Yes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
