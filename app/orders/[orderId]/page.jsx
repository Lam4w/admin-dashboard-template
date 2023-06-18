'use client';

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { MoreHorizontal } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Truck, DollarSign } from "lucide-react"


const products = [
    {
        productId: '648362d7dd15c720b306a0c1',
        name: 'ADIDAS HOODIE SMALL FIT IN BLACK',
        size: 'M',
        color: 'Black',
        price: 400,
        quantity: 1,
        total: 400,
    },
    {
        productId: '648362d7dd15c720b306a105',
        name: 'GOTH TAILORED PANTS IN BLACK',
        size: 'M',
        color: 'Black',
        price: 490,
        quantity: 1,
        total: 490,
    },
]

const OrderPage = () => {
    const router = useRouter();

    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Order details</h2>
                        <p className="text-muted-foreground">
                            21455768765441235468
                        </p>
                    </div>
                    <Button>
                        Edit
                    </Button> 
                </div>

                <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-3">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Status
                                    </CardTitle>
                                    <Truck className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">Delivered</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total
                                    </CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$2200</div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className='mt-3'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-xl font-bold">
                                    Order info
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Order ID:</span> 123123546457</div>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>User ID:</span> 213213145576834535</div>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Phone number:</span> 8412343743</div>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Address:</span> Ha Noi, Viet Nam</div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-3">
                        <Card className='min-h-full'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">
                                    Product list
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                        <TableHead className="w-[100px]">Product ID</TableHead>
                                        <TableHead>Product name</TableHead>
                                        <TableHead>Size</TableHead>
                                        <TableHead>Color</TableHead>
                                        <TableHead>Quantity</TableHead>
                                        <TableHead>Total</TableHead>
                                        <TableHead className="text-right">Actions</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {products.map((p, i) => (
                                            <TableRow>
                                                <TableCell className="font-medium">{p.productId}</TableCell>
                                                <TableCell>{p.name}</TableCell>
                                                <TableCell>{p.size}</TableCell>
                                                <TableCell>{p.color}</TableCell>
                                                <TableCell>{p.quantity}</TableCell>
                                                <TableCell>${p.total}</TableCell>
                                                <TableCell className="text-right">
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
                                                                onClick={() => navigator.clipboard.writeText(p.productId)}
                                                            >
                                                                Copy product ID
                                                            </DropdownMenuItem>
                                                            <DropdownMenuSeparator />
                                                            <DropdownMenuItem
                                                                onClick={() => router.push(`/products/${p.productId}`)}
                                                            >
                                                                View product details
                                                            </DropdownMenuItem>
                                                            <DropdownMenuItem>
                                                                Edit product
                                                            </DropdownMenuItem>
                                                        </DropdownMenuContent>
                                                    </DropdownMenu>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderPage