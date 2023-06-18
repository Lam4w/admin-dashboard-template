'use client';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { productData } from '@/data';
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from 'next/navigation';


export default async function ProductsPage() {
    // const tasks = await getTasks()
    const router = useRouter();

    const columns = [
        { 
            field: 'id', 
            headerName: 'ID', 
            flex: 0.6,
        },
        { 
            field: 'name', 
            headerName: 'Name', 
            flex: 2
        },
        { 
            field: 'price', 
            headerName: 'Price', 
            flex: 0.3
        },
        { 
            field: 'color', 
            headerName: 'Color', 
            flex: 0.3,
            renderCell: (params) => {
                return params.row.color.colorName
            }
        },
        { 
            field: 'category', 
            headerName: 'Category', 
            flex: 1,
            renderCell: (params) => {
                return params.value.toUpperCase();
            }
        },
        { 
            field: 'stock[0].quantity',  
            headerName: 'Stock S', 
            flex: 0.5,
            valueGetter: (params) => params.row.stock[0].quantity,
            // renderCell: (params) => {
            //     return params.row.stock[2].quantity
            // }
        },
        { 
            field: 'stock[1].quantity',  
            headerName: 'Stock M', 
            flex: 0.5,
            valueGetter: (params) => params.row.stock[1].quantity,
            // renderCell: (params) => {
            //     return params.row.stock[2].quantity
            // }
        },
        { 
            field: 'stock[2].quantity',  
            headerName: 'Stock L', 
            flex: 0.5,
            valueGetter: (params) => params.row.stock[2].quantity,
            // renderCell: (params) => {
            //     return params.row.stock[2].quantity
            // }
        },
        {
            field: "actions",
            headerName: 'Actions',
            renderCell: (params) => {
                const id = params.row.id
            
                return (
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <MoreHorizontal className="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem
                                onClick={() => navigator.clipboard.writeText(payment.id)}
                            >
                                Copy product ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => router.push(`/products/${id}`)}
                            >
                                View product
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Edit product
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Delete product
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )
            },
        },
    ]

    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Product list</h2>
                        <p className="text-muted-foreground">
                        Here&apos;s a list of all products
                        </p>
                    </div>
                    <Button>
                        Create new product
                    </Button>
                </div>
                <div className="h-[75vh]">
                    <DataGrid 
                        rows={productData}
                        columns={columns}
                        // loading={isLoading || !data}
                        // getRowId={(row) => row._id}
                        pageSizeOptions={[5, 10, 25]}
                        checkboxSelection
                        autoPageSize
                        slots={{
                            toolbar: GridToolbar,
                        }}
                    />
                </div>
            </div>
        </>
    )
}