import { HeaderContainer } from './styles'
import { PiTimer, PiScrollLight } from 'react-icons/pi'
import logoIgnite from '../../assets/Ignite simbol (1).svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink title="Timer" to="/">
          <PiTimer size={24} />
        </NavLink>
        <NavLink title="Histórico" to="/history">
          <PiScrollLight size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
