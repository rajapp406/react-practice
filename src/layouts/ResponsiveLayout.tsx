import React from "react";
import { Outlet } from "react-router";
import { AppBar, Toolbar, Typography, Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { THeader, THeaderGeneric } from "./Header";
import { TMain } from "./Main";

const drawerWidth = '240px';

// Sidebar Component
const Sidebar = () => (
    <Drawer
        variant="permanent"
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
    >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
            <List>
                <ListItem component="a" href="/">
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem component="a" href="/about">
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem component="a" href="/contact">
                    <ListItemText primary="Contact" />
                </ListItem>
            </List>
        </Box>
    </Drawer>
);

// Right Sidebar Component
const RightSidebar = ({ content }: { content: React.ReactNode }) => (
    <Box
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
    >
        <Drawer
            variant="permanent"
            anchor="right"
            sx={{
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: "auto", padding: "16px" }}>{content}</Box>
        </Drawer>
    </Box>
);

// Main Layout Component
export const ResponsiveLayout = () => (
    <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    <THeader/>
                </Typography>
            </Toolbar>
        </AppBar>   
        <Sidebar />
        <Box sx={{width: '60vw'}}>
            <Outlet/>
        </Box>
        <RightSidebar content={<div>Test</div>} />
    </Box>
);

// Main Layout Component
export const GenericResponsiveLayout = () => (
    <Box sx={{ display: "flex", padding: '10px' }}>
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    <THeaderGeneric/>
                </Typography>
            </Toolbar>
        </AppBar>   
        <Box sx={{width: '60vw'}}>
            <Outlet/>
        </Box>
    </Box>
);