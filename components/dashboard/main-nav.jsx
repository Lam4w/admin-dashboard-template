import Link from "next/link"

import { cn } from "@/lib/utils"

export function MainNav({
  className,
  ...props
}) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link
        href="/"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        href="/sales"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Sales
      </Link>
      <Link
        href="/customers"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        href="/products"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        href="/orders"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Orders
      </Link>
      <Link
        href="/collections"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Collections
      </Link>
      <Link
        href="/create"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Create
      </Link>
    </nav>
  )
}