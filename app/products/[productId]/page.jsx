'use client';

import { Overview } from '@/components/Overview';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CreditCard, DollarSign, Shirt } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from 'next/image';
import { Button } from '@/components/ui/button';


const ProductPage = () => {
    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Product details</h2>
                        <p className="text-muted-foreground">
                            CRYPTO T-SHIRT OVERSIZED IN BLACK FADED
                        </p>
                    </div>
                    <div className="flex gap-3">
                        <Button>
                            Edit
                        </Button>
                        <Button>
                            Create new product
                        </Button>
                        <Button>
                            Delete
                        </Button>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                    <div className="col-span-3">
                        <Tabs defaultValue="overview" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="overview">Overview</TabsTrigger>
                                <TabsTrigger value="stock">
                                    Stock
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="overview" className="space-y-4">
                                <div className="grid gap-3 md:grid-cols-2">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                            Total Revenue
                                            </CardTitle>
                                            <DollarSign className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">$45,231.89</div>
                                            <p className="text-xs text-muted-foreground">
                                            +20.1% from last month
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">Sales</CardTitle>
                                            <CreditCard className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">+12,234</div>
                                            <p className="text-xs text-muted-foreground">
                                            +19% from last month
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                            <TabsContent value="stock" className="space-y-4">
                                <div className="grid gap-3 md:grid-cols-3">
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Stock size S
                                            </CardTitle>
                                            <Shirt className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">10</div>
                                            <p className="text-xs text-muted-foreground">
                                                left in stock
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Stock size M
                                            </CardTitle>
                                            <Shirt className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">10</div>
                                            <p className="text-xs text-muted-foreground">
                                                left in stock
                                            </p>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                            <CardTitle className="text-sm font-medium">
                                                Stock size L
                                            </CardTitle>
                                            <Shirt className="h-4 w-4 text-muted-foreground" />
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-2xl font-bold">10</div>
                                            <p className="text-xs text-muted-foreground">
                                                left in stock
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <Card className='mt-3'>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-xl font-bold">
                                    Product info
                                </CardTitle>
                            </CardHeader>
                            <CardContent className='grid grid-cols-3 gap-3'>
                                <div className="col-span-1 relative">
                                    <Image 
                                        alt='Product Image'
                                        fill
                                        className='object-cover'
                                        src='https://res.cloudinary.com/diwo9uyct/image/upload/v1686326582/6_1_acpw71.jpg'
                                    />
                                </div>

                                <div className="col-span-2">
                                    <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Name:</span> CRYPTO T-SHIRT OVERSIZED IN BLACK FADED</div>
                                    <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Description:</span> CRYPTO T-SHIRT OVERSIZED IN BLACK FADED FROM FALL 23</div>
                                    <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Price:</span> 120$</div>
                                    <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Color:</span> Black</div>
                                    <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Material:</span> 100% cotton</div>
                                    <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Category:</span> T-shirts</div>
                                    <div className="text-lg font-base text-muted-foreground"><span className='font-medium text-black'>Collection:</span> Fall 22</div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                    <Card className="col-span-2">
                        <CardHeader>
                            <CardTitle>Overview</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Overview />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default ProductPage