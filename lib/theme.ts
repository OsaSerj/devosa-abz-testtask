
import { experimental_extendTheme as extendTheme } from "@mui/material";

export const theme = extendTheme({
	colorSchemes: {
		light: {
			palette: {
				primary: { main: "rgb(244 224 65)" },
				secondary: { main: "rgb(0 189 211)" },
				background: { default: "rgb(248 248 248)" }
			},
		}
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "contained" },
					style: {
						borderRadius: 80,
						minWidth: 100,
						paddingTop: 4,
						paddingBottom: 4,
						"&:hover": {
							backgroundColor: "rgba(255, 227, 2, 1)"
						},
						":disabled": {
							backgroundColor: "rgba(180, 180, 180, 1)",
							color: "rgba(255, 255, 255, 0.87)"
						}
					}
				}
			]
		}
	}
})