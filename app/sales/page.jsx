'use client'

import React from 'react'
import { Separator } from "@/components/ui/separator"
import { SalesByCategory } from '@/components/SalesByCategory'
import ProductCard from './ProductCard'
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
                        <Card>
                            <CardHeader className="flex flex-col space-y-0 pb-2">
                                <CardTitle className="text-2xl font-semibold">Sales By Category</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    sales by category are shown below
                                </p>
                            </CardHeader>
                            <CardContent>
                                <SalesByCategory />
                            </CardContent>
                        </Card>
                    </div>

                    <div className="col-span-2 grid grid-cols-3 gap-3">
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
                </div>
            </div>
        </>
    )
}

export default SalesPage