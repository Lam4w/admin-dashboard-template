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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/Overview";
import { MoreHorizontal } from "lucide-react";
import { Button } from '@/components/ui/button';
import { ListOrdered, DollarSign } from "lucide-react"
import { orderData } from "@/data";
import { useRouter } from "next/navigation";

const OrderPage = () => {
    const router = useRouter();
    
    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Customer details</h2>
                        <p className="text-muted-foreground">
                            21455768765441235468
                        </p>
                    </div>
                    {/* <Button>
                        Edit
                    </Button>  */}
                </div>

                <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-2">
                        <div className="grid grid-cols-2 gap-3">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total spending
                                    </CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">$20209</div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Total orders
                                    </CardTitle>
                                    <ListOrdered className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">20</div>
                                </CardContent>
                            </Card>
                        </div>

                        <Card className='mt-3'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-xl font-bold">
                                    User info
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>User ID:</span> 123123546457</div>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Email:</span> 213213145576834535</div>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>User name:</span> Charles Oliveira</div>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>First name:</span> Charles</div>
                                <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Last name:</span> Oliveira</div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="col-span-3">
                        <Tabs defaultValue="overview" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="orders">All orders</TabsTrigger>
                                <TabsTrigger value="overview">
                                    Overview
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="orders" className="space-y-4">
                                <Card className=''>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">
                                            Order list
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                <TableHead className="w-[100px]">Order ID</TableHead>
                                                <TableHead>Address</TableHead>
                                                <TableHead>Status</TableHead>
                                                <TableHead>Total</TableHead>
                                                <TableHead className="text-right">Actions</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {orderData.map((o, i) => (
                                                    <TableRow>
                                                        <TableCell className="font-medium">{o._id}</TableCell>
                                                        <TableCell>{o.address}</TableCell>
                                                        <TableCell>{o.status}</TableCell>
                                                        <TableCell>${o.total}</TableCell>
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
                                                                        onClick={() => navigator.clipboard.writeText(o._id)}
                                                                    >
                                                                        Copy order ID
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuSeparator />
                                                                    <DropdownMenuItem
                                                                        onClick={() => router.push(`/orders/${o._id}`)}
                                                                    >
                                                                        View order details
                                                                    </DropdownMenuItem>
                                                                    <DropdownMenuItem>
                                                                        Edit order
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
                            </TabsContent>
                            <TabsContent value="overview" className="space-y-4">
                            <Card className="">
                                <CardHeader>
                                    <CardTitle>Overview</CardTitle>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <Overview />
                                </CardContent>
                            </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrderPage