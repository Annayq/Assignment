function Menulist(props) {
    const {menu} = props;

    return (
        <ul>
            {
             menu.map((element, index) => {
                return (
                    <li key = {menu.id}>
                        {element.name}
                    </li>
                );
              })
            }
        
        </ul>
    );
}

export default Menulist;