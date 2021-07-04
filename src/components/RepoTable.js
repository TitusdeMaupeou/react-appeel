import React from "react";
import FetchData from "../hooks/FetchData";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Paper } from "@material-ui/core";
import RepoRow from "./RepoRow";
import { useSelector } from "react-redux";
import { API_URL } from "../config";
import styles from "./RepoTable.module.css";

const RepoTable = () => {
  const [dataState] = FetchData(API_URL);
  const favourites = useSelector((state) => state.favouriteStore.favourites);

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>REPOS BY DAN ABRAMOV</h1>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Repository</TableCell>
              <TableCell>Open Issues</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Language</TableCell>
              <TableCell>Favourite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className={styles.table}>
            {dataState.data
              .filter((f) => favourites.includes(f.id))
              .map((row, i) => (
                <RepoRow key={row.id} row={row}></RepoRow>
              ))}
            {dataState.data
              .filter((f) => !favourites.includes(f.id))
              .map((row, i) => (
                <RepoRow key={row.id} row={row}></RepoRow>
              ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default RepoTable;
