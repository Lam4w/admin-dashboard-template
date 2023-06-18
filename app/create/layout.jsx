import { Separator } from "@/components/ui/separator"
import { SidebarNav } from "@/components/create/sidebar-nav"

const sidebarNavItems = [
    {
        title: "Product",
        href: "/create",
    },
    {
        title: "Collection",
        href: "/create/collection",
    },
]

export default function SettingsLayout({ children }) {
    return (
        <>
            <div className="h-full flex-1 flex-col space-y-8 p-8 flex">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Create</h2>
                        <p className="text-muted-foreground">
                            Create new product and collection.
                        </p>
                    </div>
                </div>
                <Separator className="my-6" />
                <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
                    <aside className="-mx-4 lg:w-1/5">
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className="flex-1 lg:max-w-2xl">{children}</div>
                </div>
            </div>
        </>
    )
}