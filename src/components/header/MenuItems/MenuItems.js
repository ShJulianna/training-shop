import { menuItems } from '../../../constants/MenuItems';
// import { Link } from 'react-router-dom'; 
import { MenuItemsStyled } from './MenuItems.styled';

export const MenuItems = () => {

    return ( 
        <MenuItemsStyled.Wrapper>
        {
            menuItems.map(({id, path, name}) =>(
                <button key={id} to={`/${path}`}  data-test-id={`menu-link-${path}`}>
                    {name}
                </button>     
            ))  
        }
        </MenuItemsStyled.Wrapper>)
}