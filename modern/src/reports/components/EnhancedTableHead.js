import {
  Box,
  TableCell, TableHead, TableRow, TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import React, { useState } from 'react';
import { useTranslation } from '../../common/components/LocalizationProvider';
import useReportStyles from '../common/useReportStyles';

const EnhancedTableHead = (props) => {
  const {
    onSelectAllClick, columns, order, positionAttributes, orderBy, numSelected, rowCount, onRequestSort,
  } = props;
  const t = useTranslation();
  const classes = useReportStyles();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell className={classes.columnAction} />
        <TableCell>{t('sharedDevice')}</TableCell>
        {columns.map((headCell) => (
          <TableCell
            key={headCell}
            sortDirection={orderBy === headCell ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell}
              direction={orderBy === headCell ? order : 'asc'}
              onClick={createSortHandler(headCell)}
            >
              {positionAttributes[headCell].name}
              {orderBy === headCell ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
