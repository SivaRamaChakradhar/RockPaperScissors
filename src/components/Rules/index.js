import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  RulesImg,
  PopButton,
  CloseButton,
  ImgBackground,
} from '../../styledComponents'

const Rules = () => (
  <Popup modal trigger={<PopButton type="button">Rules</PopButton>}>
    {close => (
      <>
        <CloseButton type="button" onClick={close}>
          <RiCloseLine size={25} />
        </CloseButton>

        <ImgBackground>
          <RulesImg
            src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
            alt="rules"
          />
        </ImgBackground>
      </>
    )}
  </Popup>
)

export default Rules
