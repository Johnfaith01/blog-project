import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import type { ReactNode } from "react"

interface ModalProps{
    title: string
    btnText: string
    desc: string
    children: ReactNode


}

export default function Modal({title, btnText, desc, children}: ModalProps) {

    return (
        <Dialog>
            <DialogTrigger className="cursor-pointer bg-black text-white px-4 py-1 rounded-md">{btnText}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {desc}
                    </DialogDescription>
                </DialogHeader>

                    {children}

            </DialogContent>
        </Dialog>
    )
}