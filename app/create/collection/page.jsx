import { Separator } from "@/components/ui/separator"
import { CollectionForm } from "./CollectionForm"

export default function SettingsAccountPage() {
    return (
        <div className="space-y-6">
        <div>
            <h3 className="text-lg font-medium">New collection</h3>
            <p className="text-sm text-muted-foreground">
            Complete this form to create a new collection.
            </p>
        </div>
        <Separator />
        <CollectionForm />
        </div>
    )
}