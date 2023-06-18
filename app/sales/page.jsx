'use client'

import React from 'react'
import { Separator } from "@/components/ui/separator"
import { SalesByCategory } from '@/components/SalesByCategory'
import ProductCard from './ProductCard'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

const SalesPage = () => {
    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Product list</h2>
                        <p className="text-muted-foreground">
                        Here&apos;s a list of all sales
                        </p>
                    </div>
                </div>
                <Separator />
                <div className="grid grid-cols-3 gap-3">
                    <div className="col-span-1">
                        <Tabs defaultValue="sales" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="sales">Total Sales</TabsTrigger>
                                <TabsTrigger value="revenue">Total Revenue</TabsTrigger>
                            </TabsList>
                            <TabsContent value="sales" className="space-y-4">
                                <Card>
                                    <CardHeader className="flex flex-col space-y-0 pb-2">
                                        <CardTitle className="text-2xl font-semibold">Total Sales By Category</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            Total sales by category are shown below
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <SalesByCategory />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="revenue" className="space-y-4">
                                <Card>
                                    <CardHeader className="flex flex-col space-y-0 pb-2">
                                        <CardTitle className="text-2xl font-semibold">Total Revenue By Category</CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            Total revenue by category are shown below
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <SalesByCategory />
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>

                    <div className="col-span-2">
                        <Tabs defaultValue="all" className="space-y-4">
                            <TabsList>
                                <TabsTrigger value="all">All</TabsTrigger>
                                <TabsTrigger value="t-shirts" disabled>T-Shirts</TabsTrigger>
                                <TabsTrigger value="shirts" disabled>Shirts</TabsTrigger>
                                <TabsTrigger value="sweatshirts-hoodies" disabled>Sweatshirts & Hoodies</TabsTrigger>
                                <TabsTrigger value="coats-jackets" disabled>Coats & Jackets</TabsTrigger>
                                <TabsTrigger value="pants" disabled>Pants</TabsTrigger>
                                <TabsTrigger value="jeans" disabled>Jeans</TabsTrigger>
                            </TabsList>
                            <TabsContent value="all" className="space-y-4">
                                <div className="grid grid-cols-3 gap-3">
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                    <ProductCard />
                                </div>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SalesPage