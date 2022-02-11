import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';
import './dataTable.css';

interface TableBodyEl {
  content: any;
  onClickFunc?: () => void;
}

interface DataTableProps {
  title?: string;
  headerArr: any[];
  bodyArr?: TableBodyEl[];
  button?: JSX.Element;
  buttonLocation?: 'top' | 'bottom';
}

export const DataTable = ({
  title = '',
  headerArr = [],
  bodyArr = [],
  button,
  buttonLocation,
  ...props
}: DataTableProps): JSX.Element => {
  const maxCol = headerArr.length;
  if (maxCol === 0) {
    console.error(`headerArr is empty`);
    return <div>headerArr is empty</div>;
  }

  return (
    <div className="dataTable-container">
      <div className="dataTable-header-container">
        <span className="dataTable-title">{title}</span>
        {buttonLocation === 'top' && button}
      </div>
      <Table>
        <TableHead className="dataTable-tableHead">
          <TableRow className="dataTable-tableHead-tableRow">
            {headerArr &&
              headerArr.map((item, index) => (
                <TableCell
                  className="dataTable-tableHead-tableCell"
                  key={index}
                >
                  {item}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {bodyArr &&
            bodyArr?.map((item, index) => {
              if (index % maxCol !== 0) {
                // same column
              } else {
                return (
                  <TableRow>
                    {bodyArr?.slice(index, index + maxCol).map((el, idx) => (
                      <TableCell
                        key={idx}
                        className="dataTable-tableBody-tableCell"
                        onClick={el?.onClickFunc}
                      >
                        {el.content}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              }
            })}
        </TableBody>
      </Table>
      <div className="dateTable-footer-container">
        {buttonLocation === 'bottom' && button}
      </div>
    </div>
  );
};
