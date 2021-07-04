import React from "react";
import { Link } from "react-router-dom";
import { TableCell, TableRow } from "@material-ui/core/";
import StarRoundedIcon from "@material-ui/icons/StarRounded";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../redux/reducers/actions/favouritesActions";
import styles from "./RepoRow.module.css";

const RepoRow = ({ row }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favouriteStore.favourites);
  const isFavourite = favourites.includes(row.id);

  const isStored = (value) => {
    if (value) {
      dispatch(removeFavourite(row.id));
    } else {
      dispatch(addFavourite(row.id));
    }
  };

  return (
    <>
      {
        <TableRow key={row.id}>
          <TableCell>
            <Link className={styles.link} to={"/" + row.name}>
              {row.name}
            </Link>
            ''
          </TableCell>
          <TableCell>
            <Link className={styles.link} to={"/" + row.name}>
              {row.open_issues}
            </Link>
          </TableCell>
          <TableCell>
            <Link className={styles.link} to={"/" + row.name}>
              {new Intl.DateTimeFormat("en-GB").format(
                Date.parse(row.created_at)
              )}
            </Link>
          </TableCell>
          <TableCell>
            <Link className={styles.link} to={"/" + row.name}>
              <div className={"icon icon--" + row.language} />
            </Link>
          </TableCell>
          <TableCell>
            <StarRoundedIcon
              onClick={() => {
                isStored(isFavourite);
              }}
              style={isFavourite ? { fill: "white" } : { fill: "#2744e4" }}
            />
          </TableCell>
        </TableRow>
      }
    </>
  );
};

export default RepoRow;
