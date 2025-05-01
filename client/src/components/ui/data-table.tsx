import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Search,
} from "lucide-react";

interface DataTableProps<T> {
  data: T[];
  columns: {
    key: keyof T | string;
    header: string;
    cell?: (row: T) => React.ReactNode;
    className?: string;
  }[];
  searchable?: boolean;
  searchPlaceholder?: string;
  searchKeys?: (keyof T)[];
  pagination?: boolean;
  pageSize?: number;
  onRowClick?: (row: T) => void;
  emptyState?: React.ReactNode;
}

export function DataTable<T>({
  data,
  columns,
  searchable = false,
  searchPlaceholder = "Buscar...",
  searchKeys = [],
  pagination = false,
  pageSize = 10,
  onRowClick,
  emptyState = <div className="px-4 py-4 text-center" colSpan={100}>No hay datos disponibles</div>,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [currentPage, setCurrentPage] = React.useState(1);
  
  // Filter data based on search query
  const filteredData = React.useMemo(() => {
    if (!searchable || !searchQuery || searchKeys.length === 0) {
      return data;
    }
    
    const lowerQuery = searchQuery.toLowerCase();
    return data.filter(row => {
      return searchKeys.some(key => {
        const value = row[key];
        return value && String(value).toLowerCase().includes(lowerQuery);
      });
    });
  }, [data, searchQuery, searchable, searchKeys]);
  
  // Paginate data
  const paginatedData = React.useMemo(() => {
    if (!pagination) {
      return filteredData;
    }
    
    const startIndex = (currentPage - 1) * pageSize;
    return filteredData.slice(startIndex, startIndex + pageSize);
  }, [filteredData, currentPage, pageSize, pagination]);
  
  // Calculate total pages
  const totalPages = React.useMemo(() => {
    if (!pagination) return 1;
    return Math.ceil(filteredData.length / pageSize);
  }, [filteredData.length, pageSize, pagination]);
  
  // Handle pagination navigation
  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };
  
  // Reset to first page when search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  
  return (
    <div className="space-y-4">
      {searchable && (
        <div className="relative">
          <Input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      )}
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column.key.toString()} className={column.className}>
                  {column.header}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((row, rowIndex) => (
                <TableRow 
                  key={rowIndex} 
                  onClick={() => onRowClick && onRowClick(row)}
                  className={onRowClick ? "cursor-pointer hover:bg-muted/50" : ""}
                >
                  {columns.map((column) => (
                    <TableCell key={`${rowIndex}-${column.key.toString()}`} className={column.className}>
                      {column.cell
                        ? column.cell(row)
                        : row[column.key as keyof T] !== undefined
                        ? String(row[column.key as keyof T])
                        : ""}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  {emptyState}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      
      {pagination && totalPages > 1 && (
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {`Mostrando ${(currentPage - 1) * pageSize + 1} - ${Math.min(
              currentPage * pageSize,
              filteredData.length
            )} de ${filteredData.length}`}
          </div>
          
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(1)}
              disabled={currentPage === 1}
            >
              <ChevronsLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <div className="flex items-center text-sm space-x-1">
              <span className="font-medium">{currentPage}</span>
              <span className="text-muted-foreground">de</span>
              <span className="font-medium">{totalPages}</span>
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(totalPages)}
              disabled={currentPage === totalPages}
            >
              <ChevronsRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
