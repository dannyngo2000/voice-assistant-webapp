import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  container: {
    padding: "0 5%",
    width: "100%",
    margin: "0px",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "45vh",
    padding: "10%",
    borderRadius: 10,
    color: "white",
    backgroundColor: "#cccfcd",
  },
  infoCard: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    textAlign: "center",
  },
});