import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { Paper } from "@material-ui/core";
import styles from "./Repository.module.css";
import { Link } from "react-router-dom";

function ItemPage() {
  const { name } = useParams();
  const [item, setItem] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    await fetch(`https://api.github.com/repos/gaearon/${name}/commits`)
      .then((resp) => resp.json())
      .then(function (d) {
        setItem(d);
        console.log(d);
      });
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search for message"
        className={styles.input}
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <h1>COMMITS</h1>
      <Paper className={styles.container}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>User</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Message</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {item
              .filter((s) =>
                s.commit.message.toLowerCase().includes(search.toLowerCase())
              )
              .map((row, i) => (
                <TableRow key={row.id}>
                  <TableCell>
                    <a href={"https://github.com/" + row.author.login}>
                      {row.commit.author.name}
                    </a>
                  </TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat("en-GB").format(
                      Date.parse(row.commit.author.date)
                    )}
                  </TableCell>
                  <TableCell>{row.commit.message}</TableCell>
                </TableRow>
              ))
              .slice(0, 20)}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default ItemPage;
