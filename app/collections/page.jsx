'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const CollectionsPage = () => {
    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Collection list</h2>
                        <p className="text-muted-foreground">
                        Here&apos;s a list of all collections
                        </p>
                    </div>
                    <Button>
                        Create new collection
                    </Button>
                </div>
                <div className="w-full flex flex-col">
                    <Card>
                        <CardHeader className="flex flex-col space-y-0 pb-2">
                            <CardTitle className="text-2xl font-semibold">Fall 23</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Fall 23 collection
                            </p>
                        </CardHeader>
                        <CardContent>
                            <div className="relative w-full h-48">
                                <Image 
                                    alt="Collection Image"
                                    fill
                                    className="object-cover rounded-lg"
                                    src='https://res.cloudinary.com/diwo9uyct/image/upload/v1686845309/collectionbg1_npw9oo.jpg'
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default CollectionsPage