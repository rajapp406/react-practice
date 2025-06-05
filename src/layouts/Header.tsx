import { Box, Container, Link, List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router";

export function THeader() {
  return (
    <Container sx={{display: "flex"}}>
      <nav style={{ display: "flex" }}>
        <Box sx={{ overflow: "auto", display: "flex" }}>
          <List sx={{ overflow: "auto", display: "flex" }}>
            <ListItem>
              <ListItemText>
                <NavLink to="dashboard">Dashboard</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <NavLink to="aichat">AI Chat</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                <NavLink to="budget">Budget</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
              <NavLink to="todo">Todo</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
              <NavLink to="tictactoe">Tic Toc Toe</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
              <NavLink to="users">Users</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
              <NavLink to="contact">Contact</NavLink>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </nav>
    </Container>
  );
}

export function THeaderGeneric() {
  return (
    <Container sx={{display: "flex"}}>
      <nav className="right-nav">
        <Box>
          <List sx={{ overflow: "auto", display: "flex" }}>
            <ListItem>
              <ListItemText>
              <NavLink to="login">Login</NavLink>
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
              <NavLink to="registration">Registration</NavLink>
              </ListItemText>
            </ListItem>
          </List>
        </Box>
      </nav>
    </Container>
  );
}
