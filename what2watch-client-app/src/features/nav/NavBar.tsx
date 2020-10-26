import React from "react";
import { Button, Container, Icon, Menu } from "semantic-ui-react";

export const NavBar = () => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
          <Icon name='film' size='large' style={{marginRight: 10}}/>
          What2Watch
        </Menu.Item>
        <Menu.Item name='Movies'/>
        <Menu.Item>
          <Button positive content='Add Movie'/>
        </Menu.Item>
      </Container>
    </Menu>
  );
};
export default NavBar;
