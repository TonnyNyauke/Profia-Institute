import * as React from "react"

import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <div>
        <h2 className="m-2 font-semibold text-xl">How do you plan to do the campaign?</h2>
        <textarea
        className={cn(
          "flex min-h-[100px] w-11/12 m-2 rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        placeholder="Type campaign methods..."
        ref={ref}
        {...props}
      />
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
