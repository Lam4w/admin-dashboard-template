'use client';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { CreditCard, DollarSign } from "lucide-react"
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const ProductCard = () => {
    return (
        <div className="col-span-1">
            <Card>
                <CardHeader className="flex flex-col space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">SUPER DESTROYED BAGGY JEANS IN BLACK</CardTitle>
                    <p className="text-xs text-muted-foreground">
                        6487409e6f0749807f51ce40
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Category: <span className="text-black font-medium">Jeans</span>
                    </p>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col gap-3">
                        {/* <div className="w-full h-44 relative">
                            <Image 
                                alt='Product Image'
                                fill
                                className='object-cover'
                                src='https://res.cloudinary.com/diwo9uyct/image/upload/v1686326582/6_1_acpw71.jpg'
                            />
                        </div> */}
                        <div className="grid grid-cols-2 gap-3">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                    Total Revenue
                                    </CardTitle>
                                    <DollarSign className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-base font-semibold">$45,231.89</div>
                                    {/* <p className="text-xs text-muted-foreground">
                                    +20.1% from last month
                                    </p> */}
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">Total Sales</CardTitle>
                                    <CreditCard className="h-4 w-4 text-muted-foreground" />
                                </CardHeader>
                                <CardContent>
                                    <div className="text-base font-semibold">+12,234</div>
                                    {/* <p className="text-xs text-muted-foreground">
                                    +19% from last month
                                    </p> */}
                                </CardContent>
                            </Card>
                        </div>

                        <Button className='bg-white text-black border hover:text-white'>
                            View Details
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProductCard