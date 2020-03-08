import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  table: {
    marginTop: '0',
    marginBottom: '0',
    width: '100%',
    maxWidth: '100%',
    backgroundColor: 'transparent',
    borderSpacing: '0',
    borderCollapse: 'collapse',
    overflowX: 'auto'
  },
  tableHeadRow: {
    height: '56px',
    color: 'inherit',
    display: 'table-row',
    outline: 'none',
    verticalAlign: 'middle'
  },
  tableCell: {
    lineHeight: '1.42857143',
    padding: '12px 8px',
    verticalAlign: 'middle',
    fontSize: '0.8125rem'
  },
  tableBodyRow: {
    height: '48px',
    color: 'inherit',
    display: 'table-row',
    outline: 'none',
    verticalAlign: 'middle'
  }
}));

const InsightChart2 = props => {
  const classes = useStyles();
  const { chartData } = props;
  return (
          <Table className={classes.table}>
            <TableHead>
              <TableRow className={classes.tableHeadRow}>
                <TableCell className={classes.tableCell}>
                  Customer Name
                </TableCell>
                <TableCell className={classes.tableCell}>
                  Net Lease Amount
                </TableCell>
                <TableCell className={classes.tableCell}>Start Date</TableCell>
                <TableCell className={classes.tableCell}>
                  Phone Number
                </TableCell>
                <TableCell className={classes.tableCell}>Email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {chartData.map(item => {
                return (
                  <TableRow key={item._id} className={classes.tableBodyRow}>
                    <TableCell className={classes.tableCell}>
                      {item.name}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.net_lease_price}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.start_date}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.name}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {item.name}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
    
  );
};

export default InsightChart2;
