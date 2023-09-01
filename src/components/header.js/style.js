import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({

    root: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
          display: 'none', // Hide the menu button on screens larger than md
        },
      },
      title: {
        flexGrow: 1,
      },
      drawer: {
        width: 250,
      }

}))
export default useStyles;