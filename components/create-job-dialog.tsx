import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Plus } from "lucide-react"
import { Label } from "./ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "./ui/textarea"
import { useState } from "react"



interface CreateJobApplicationDialogProps {
    columnId: string,
    boardId: string
}

export default function CreateJobApplicationDialog({ columnId, boardId }: CreateJobApplicationDialogProps) {
const [open , setopen] =useState<boolean>(false)

const [formdata , setformdata] = useState({
    company:"",
    position:"",
    location:"",
    salarey:"",
    description:"",
    notes:"",
    jobURL:"",
    Tags:"",
})
async function handlesubmit(){
    try{

    }catch(err){
        console.error(err)
    }
}
    return <Dialog open={open} onOpenChange={setopen}>
        <DialogTrigger>
            <Button variant="outline">
                <Plus />
                Add Job
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Add job Application</DialogTitle>
                <DialogDescription>Track a new job Application</DialogDescription>
            </DialogHeader>
            <form className="space-y-4" onSubmit={handlesubmit}>
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="company">Company</Label>
                            <Input id="company" required value={formdata.company} onChange={(e)=>setformdata({...formdata , company:e.target.value})}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="position">position</Label>
                            <Input id="position" required value={formdata.position} onChange={(e)=>setformdata({...formdata , position:e.target.value})} />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="location">location</Label>
                            <Input id="location" required value={formdata.location} onChange={(e)=>setformdata({...formdata , location:e.target.value})}/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="salarey">salarey</Label>
                            <Input id="salarey" required placeholder="e.g., $100k - $150k" value={formdata.salarey} onChange={(e)=>setformdata({...formdata , salarey:e.target.value})}/>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-2">
                            <Label htmlFor="joburl">Job Url</Label>
                            <Input id="joburl" required placeholder="http://..." value={formdata.jobURL} onChange={(e)=>setformdata({...formdata , jobURL:e.target.value})}/>
                        </div>
                    </div>
                    <div>
                        <div className="space-y-2">
                            <Label htmlFor="tags">Tags (comma-separated)</Label>
                            <Input id="tags" required placeholder="React , Tailwind , Next js" value={formdata.Tags} onChange={(e)=>setformdata({...formdata , Tags:e.target.value})}/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            rows={3}
                            placeholder="Brief description of the role..."
                            value={formdata.description} onChange={(e)=>setformdata({...formdata , description:e.target.value})}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea
                            id="notes"
                            rows={4} 
                            value={formdata.notes} onChange={(e)=>setformdata({...formdata , notes:e.target.value})}
                            />
                    </div>

                </div>
                <DialogFooter>
                    <Button type="button" variant="outline" onClick={()=>setopen(false)}>Cansel</Button>
                    <Button type="submit">Add Application</Button>
                </DialogFooter>
            </form>
        </DialogContent>

    </Dialog>

}