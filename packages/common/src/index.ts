import { z } from "zod"; 

export const userInput = z.object({ 
    email: z.string().min(5).max(30).email(),  
    password: z.string().min(7).max(30),  
})

export type userInputType = z.infer<typeof userInput>; 
