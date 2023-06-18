import { Separator } from "@/components/ui/separator"
import { ProductForm } from "./ProductForm"

export default function SettingsProfilePage() {
    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-lg font-medium">New Product</h3>
                <p className="text-sm text-muted-foreground">
                Complete this form to create a new product.
                </p>
            </div>
            <Separator />
            <ProductForm />
        </div>
    )
}