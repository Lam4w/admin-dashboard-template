'use client';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { orderData } from '@/data';
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
            field: '_id', 
            headerName: 'ID', 
            flex: 0.6,
        },
        { 
            field: 'userId', 
            headerName: 'userId', 
            flex: 0.6
        },
        { 
            field: 'userName', 
            headerName: 'User name', 
            flex: 1
        },
        { 
            field: 'phoneNumber', 
            headerName: 'Phone number', 
            flex: 1,
        },
        { 
            field: 'address', 
            headerName: 'Address', 
            flex: 1,
        },
        { 
            field: 'total', 
            headerName: 'Total', 
            flex: 0.5,
        },
        { 
            field: 'status',  
            headerName: 'Status', 
            flex: 1,
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
                                Copy order ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => router.push(`/orders/${id}`)}
                            >
                                View order details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Edit order
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
                        Here&apos;s a list of all orders
                        </p>
                    </div>
                </div>
                <div className="h-[75vh]">
                    <DataGrid 
                        rows={orderData}
                        columns={columns}
                        // loading={isLoading || !data}
                        getRowId={(row) => row._id}
                        pageSizeOptions={[5, 10, 25]}
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