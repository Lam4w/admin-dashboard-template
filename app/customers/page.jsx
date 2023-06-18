'use client';

import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { customersData } from '@/data';
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
            flex: 1,
        },
        { 
            field: 'userName', 
            headerName: 'User name', 
            flex: 1
        },
        { 
            field: 'email', 
            headerName: 'Email', 
            flex: 1,
        },
        { 
            field: 'firstName', 
            headerName: 'First name',  
            flex: 1,
        },
        { 
            field: 'lastName', 
            headerName: 'Last name', 
            flex: 1,
        },
        {
            field: "actions",
            headerName: 'Actions',
            renderCell: (params) => {
                const id = params.row._id
            
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
                                onClick={() => navigator.clipboard.writeText(id)}
                            >
                                Copy user ID
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem
                                onClick={() => router.push(`/customers/${id}`)}
                            >
                                View user details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Edit user
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                Delete user
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
                        Here&apos;s a list of all customers
                        </p>
                    </div>
                    {/* <Button>
                        Create new product
                    </Button> */}
                </div>
                <div className="h-[75vh]">
                    <DataGrid 
                        rows={customersData}
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