import { useState } from "react";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { tokens } from "../../themes";
import userImage from "../../assets/images/user.jpg";

const SideBar = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	// const { collapseSidebar } = useProSidebar();
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selected, setSelected] = useState('Dashboard');

	return (

		<Sidebar defaultCollapsed={isCollapsed} transitionDuration={600}>
			<Box>
				<Menu menuItemStyles={{
					button: () =>
					({
						"&:hover": {
							backgroundColor: "transparent !important",
						}
					})
				}}>
					<MenuItem>
						<Box display="flex" justifyContent={!isCollapsed ? "flex-end" : "center"} alignItems="center">
							<IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
								<MenuOutlined />
							</IconButton>
						</Box>
					</MenuItem>

					{/* USER */}
					{!isCollapsed && <Box>
						<Box display="flex" justifyContent="center" alignItems="center" mb="2rem" mt="1rem">
							<img alt="Profile User" width="100px" height="100px" src={userImage} style={{
								cursor: "pointer", borderRadius: "50px"
							}}
							/>
						</Box>
						<Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" mb="2rem">
							<Typography>Savidya Sathyani</Typography>
							<Typography>VP Admin</Typography>
						</Box>
					</Box>}
				</Menu>
			</Box>
		</Sidebar>
	);
};

export default SideBar;