import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import Table from "@material-ui/core/Table"
import TableBody from "@material-ui/core/TableBody"
import TableCell from "@material-ui/core/TableCell"
import TableContainer from "@material-ui/core/TableContainer"
import TableHead from "@material-ui/core/TableHead"
import TablePagination from "@material-ui/core/TablePagination"
import TableRow from "@material-ui/core/TableRow"

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "area", label: "Area for employes", minWidth: 100 },
  {
    id: "past",
    label: "Temperatura after",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString("en-US"),
  },
  {
    id: "after",
    label: "Temperature After",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString("en-US"),
  },
  {
    id: "temperature",
    label: "temperature Today",
    minWidth: 170,
    align: "right",
    format: value => value.toLocaleString("en-US"),
  },
]

function createData(name, area, past, after, temperature) {
  return { name, area, past, after, temperature }
}

const rows = [
  createData("Daniel Valadez", "Warehousing Department", 36, 37, 37),
  createData("Aurora Ginz", "Human Resources", 34, 37.8, 37.3),
  createData("March Loops", "Sales Department", 36.7, 36, 37),
  createData("Margen POLS", "Production Department", 37, 32, 37.5),
  createData("Javie Koie", "Logistics Department", 36, 37, 37.6),
  createData("Burns Ganel", "Customer Service Department", 36, 32.9, 37),
  createData("Germanel Puls", "Production Department", 36, 31, 37),
  createData("Irveing Gutis", "Production Department", 36, 32, 37),
  createData("Maria Losp", "Production Department", 36, 39, 37),
  createData("Jairo Bernal", "Warehousing Department", 36, 39, 37),
  createData("Fracs Mirts", "Warehousing Department", 36, 38, 39),
  createData("Udstio King", "Warehousing Department", 36, 36, 37),
  createData("Rubert Herna", "Warehousing Department", 36, 36, 37),
  createData("Nigre Lion", "Logistics Department", 36, 36, 37),
  createData("Brante Bent", "Logistics Department", 36, 36, 37),
]

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
})

export default function StickyHeadTable() {
  const classes = useStyles()
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  return (
    <div>
      <h1>Employess Temperature</h1>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map(column => {
                        const value = row[column.id]
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        )
                      })}
                    </TableRow>
                  )
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  )
}
